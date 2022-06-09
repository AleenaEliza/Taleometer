<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Notification;
use App\Models\User;
use App\Models\AudioStory;
use App\Http\Requests\NotificationRequest;
use Storage;
use URL;

class NotificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'Notifications';
        $data['menuGroup']          =   'notification';
        $data['menu']               =   'notification'; 
        $data['audio_stories']              =   AudioStory::orderBy('created_at', 'DESC')->where('is_active', 1)->whereNull('deleted_at')->pluck('title', 'id');
        $data['notifications']              =   Notification::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.notification.list',$data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(NotificationRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
        {
            $notification = Notification::find($request->id);

            if ($request->hasFile('image')) {
                // @unlink($notification->banner);
                // $notification->banner = 'storage/app/public/'.Storage::disk('public')->putFile('notification', $request->file('image'));
                @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $notification->banner));  
                $path = Storage::disk('s3')->put('notification', $request->image);
                $notification->banner = Storage::disk('s3')->url($path);
            }
        }
        else
        {
            $notification = new Notification();

            if ($request->hasFile('image')) {
                // $notification->banner = 'storage/app/public/'.Storage::disk('public')->putFile('notification', $request->file('image'));
                $path = Storage::disk('s3')->put('notification', $request->image);
                $notification->banner = Storage::disk('s3')->url($path);
            }
        }

        $notification->title = $request->title;
        $notification->content = $request->content;
        $notification->type = $request->type;
        if(@$request->audio_story_id != '')
            $notification->audio_story_id = $request->audio_story_id;
        $notification->is_active = $request->is_active;
        $notification->save();

        if($request->type == 'Sent')
        {
            $deviceTokens = User::where(['is_deleted' => 0, 'push_notify' => 1])->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();

            $deviceTokens = array_chunk($deviceTokens, 100);

            foreach($deviceTokens as $tokens)
            {
                $payload = array(
                    "registration_ids" => $tokens,
                    "notification" => array(
                        "title" => $notification->title,
                        "body" => $notification->content
                    )
                );

                if($notification->banner != null)
                    $payload["notification"]["icon"] = URL::to('/').'/'.$notification->banner;

                if($notification->audio_story_id != null)
                    $payload["notification"]["audio_story_id"] = $notification->audio_story_id;

                // return json_encode($payload);

                $curl = curl_init();

                curl_setopt_array($curl, array(
                CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_ENCODING => '',
                CURLOPT_MAXREDIRS => 10,
                CURLOPT_TIMEOUT => 0,
                CURLOPT_FOLLOWLOCATION => true,
                CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                CURLOPT_CUSTOMREQUEST => 'POST',
                CURLOPT_POSTFIELDS => json_encode($payload),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                    'Authorization: key='.env('FIREBASE_SERVER_KEY')
                ),
                ));

                $response = curl_exec($curl);

                curl_close($curl);

            }
        }

        $data['notifications']              =   Notification::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.notification.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Notification::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(NotificationRequest $request, $id)
    {
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $notification = Notification::find( $id );

        if($notification->banner && $notification->banner != '')
        {
            // @unlink($notification->banner);
            @Storage::disk('s3')->delete(str_replace(rtrim(Storage::disk('s3')->url('/'), "/"), "", $notification->banner));
        }

        $notification->delete();

        $data['notifications']              =   Notification::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.notification.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        $result                 =   Notification::where('id',$post->id)->update([$post->req => $post->value]);

        $data['notifications']              =   Notification::orderBy('created_at', 'DESC')->whereNull('deleted_at')->get();
        return view('admin.notification.list.content',$data);
    }

    public function sendNotifications(Request $request)
    {
        $notifications = Notification::orderBy('created_at', 'DESC')->whereIn('id', $request->ids)->whereNull('deleted_at')->get();

        if(count($notifications) > 0)
        {
            $deviceTokens = User::where(['is_deleted' => 0, 'push_notify' => 1])->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();

            $deviceTokens = array_chunk($deviceTokens, 100);
            
            foreach($notifications as $notification)
            {
                foreach($deviceTokens as $tokens)
                {
                    $payload = array(
                        "registration_ids" => $tokens,
                        "notification" => array(
                            "title" => $notification->title,
                            "body" => $notification->content
                        )
                    );

                    if($notification->banner != null)
                        $payload["notification"]["icon"] = URL::to('/').'/'.$notification->banner;

                    if($notification->audio_story_id != null)
                        $payload["notification"]["audio_story_id"] = $notification->audio_story_id;

                    // return json_encode($payload);

                    $curl = curl_init();

                    curl_setopt_array($curl, array(
                    CURLOPT_URL => 'https://fcm.googleapis.com/fcm/send',
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => '',
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 0,
                    CURLOPT_FOLLOWLOCATION => true,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => 'POST',
                    CURLOPT_POSTFIELDS => json_encode($payload),
                    CURLOPT_HTTPHEADER => array(
                        'Content-Type: application/json',
                        'Authorization: key='.env('FIREBASE_SERVER_KEY')
                    ),
                    ));

                    $response = curl_exec($curl);

                    curl_close($curl);
                }
            }

            Notification::whereIn('id', $request->ids)->whereNull('deleted_at')->update(["type" => "Sent"]);

            return true;
        }
        else{
            return false;
        }
    }
}
