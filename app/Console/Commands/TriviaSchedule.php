<?php

namespace App\Console\Commands;
use App\Models\TriviaPost;
use App\Models\User;

use Illuminate\Console\Command;

class TriviaSchedule extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'triviapost:daily';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command Trivia';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        //return Command::SUCCESS;
        $s=00;
        $today_quiz = TriviaPost::where('is_deleted',0)->where('is_active',1)->where('schedule', '=', date('Y-m-d H:i:'.$s))->get();
        //NOTIFICATIONs
          if(count($today_quiz)>0)
          {
            $deviceTokens = User::where(['is_deleted' => 0, 'push_notify' => 1])->whereNotNull('deviceToken')->pluck('deviceToken')->toArray();

            $deviceTokens = array_chunk($deviceTokens, 100);

            foreach($today_quiz as $today){
            foreach($deviceTokens as $tokens)
            {
                $payload = array(
                    "registration_ids" => $tokens,
                    "notification" => array(
                        "title" => "It's tale time.".$today->question,
                        "body" => "",
                        "post_id" => $today->id,
                        "category_id" => $today->category
                    )
                );

                $payload["notification"]["icon"] = 'https://live-taleometer.s3.ap-south-1.amazonaws.com/user/6Lrcm3tIIz4t5nZ1khlE6FJtITdPU8l5wMQ9cJW7.png';

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
          }
    }
}
