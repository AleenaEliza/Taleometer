<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\UserStory;
use App\Models\UserStoryResponse;
use App\Http\Requests\UserStoryRequest;

class UserStoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['title']              =   'User Stories';
        $data['menuGroup']          =   'user_stories';
        $data['menu']               =   'user_stories'; 
        $data['user_stories']              =   UserStory::orderBy('created_at', 'ASC')->whereNull('deleted_at')->get();
        return view('admin.masters.user_story.list',$data);
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
    public function store(UserStoryRequest $request)
    {
        if(isset($request->id) && $request->id > 0)
            $userStory = UserStory::find($request->id);
        else
            $userStory = new UserStory();

        $userStory->title = $request->title;
        $userStory->type = $request->type;
        if($request->type == "choice" || $request->type == "radio")
            $userStory->options = json_encode($request->options);
        
        $userStory->save();

        $data['user_stories']              =   UserStory::orderBy('created_at', 'ASC')->whereNull('deleted_at')->get();
        return view('admin.masters.user_story.list.content',$data);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return UserStory::find($id);
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
    public function update(UserStoryRequest $request, $id)
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
        $t = UserStoryResponse::where('user_story_id', $id)->whereNull('deleted_at')->first();

        if($t)
            return 0;

        $userStory = UserStory::find( $id );
        $userStory->delete();

        $data['user_stories']              =   UserStory::orderBy('created_at', 'ASC')->whereNull('deleted_at')->get();
        return view('admin.masters.user_story.list.content',$data);
    }

    public function updateStatus(Request $request)
    {
        $post                       =   (object)$request->post();  //echo '<pre>'; print_r($post); echo '</pre>'; die;
        $result                 =   UserStory::where('id',$post->id)->update([$post->req => $post->value]);

        $data['user_stories']              =   UserStory::orderBy('created_at', 'ASC')->whereNull('deleted_at')->get();
        return view('admin.masters.user_story.list.content',$data);
    }

    public function responses()
    {
        $data['title']              =   'User Story Responses';
        $data['menuGroup']          =   'user_story_response';
        $data['menu']               =   'user_story_response'; 
        $data['responses']              =   UserStoryResponse::orderBy('created_at', 'DESC')->groupBy('response_id')->whereNull('deleted_at')->get();
        return view('admin.user_story_response.list',$data);
    }

    public function deleteResponses($response_id)
    {
        UserStoryResponse::where('response_id', $response_id)->delete();
        $data['responses']              =   UserStoryResponse::orderBy('created_at', 'DESC')->groupBy('response_id')->whereNull('deleted_at')->get();
        return view('admin.user_story_response.list.content',$data);
    }

    public function exportResponses(Request $request)
    {
        $responses = UserStoryResponse::orderBy('created_at', 'DESC')->groupBy('response_id')->whereIn('response_id', $request->ids)->whereNull('deleted_at')->get();

        if(count($responses) > 0)
        {
            $delimiter = ","; 
            $filename = "User Stories " . date('Y-m-d') . ".csv"; 
            
            $f = fopen('php://memory', 'w'); 
            
            $fields = array('SL. No.', 'User Id', 'User Name', 'Contact Number', 'Email', 'Created On'); 
            fputcsv($f, $fields, $delimiter); 
            $cnt = 0;

            foreach($responses as $row){ 

                $lineData = array(++$cnt, '="'.$row->user_id.'"', '="'.$row->user->user_code.'"', '="'.$row->user->phone.'"', '="'.$row->user->email.'"', '="'.date('d M Y H:i:s',strtotime($row->created_at)).'"'); 
                fputcsv($f, $lineData, $delimiter); 

                $lineData = array('', '', '', '', '', ''); 
                fputcsv($f, $lineData, $delimiter);

                $data = UserStoryResponse::orderBy('id', 'ASC')->where('response_id', $row->response_id)->whereNull('deleted_at')->get();

                $lineData = array('', '', '', 'Title', 'Answer'); 
                fputcsv($f, $lineData, $delimiter);

                foreach($data as $record)
                {
                    $lineData = array('', '', '', '="'.$record->user_story->title.'"', '="'.$record->value.'"'); 
                    fputcsv($f, $lineData, $delimiter);
                }

                $lineData = array('', '', '', '', ''); 
                fputcsv($f, $lineData, $delimiter);
            } 
            
            // Move back to beginning of file 
            fseek($f, 0); 
            
            // Set headers to download file rather than displayed 
            header('Content-Type: text/csv'); 
            header('Content-Disposition: attachment; filename="' . $filename . '";'); 
            
            //output all remaining data on a file pointer 
            fpassthru($f); 
        }
        else{
            return false;
        }
    }
}
