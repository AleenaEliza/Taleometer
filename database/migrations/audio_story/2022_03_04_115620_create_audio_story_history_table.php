<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAudioStoryHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audio_story_history', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->bigInteger('audio_story_id')->unsigned()->nullable();
            $table->foreign('audio_story_id')->references('id')->on('audio_stories')->onDelete('cascade');
            $table->integer("time")->default(0);
            $table->integer("pause")->default(0);
            $table->integer("resume")->default(0);
            $table->boolean("is_playing")->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('audio_story_history');
    }
}
