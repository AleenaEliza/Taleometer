<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNonStopStoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('non_stop_stories', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('audio_story_id')->unsigned()->nullable();
            $table->foreign('audio_story_id')->references('id')->on('audio_stories')->onDelete('cascade');
            $table->bigInteger('link_audio_id')->unsigned()->nullable();
            $table->foreign('link_audio_id')->references('id')->on('link_audios')->onDelete('cascade');
            $table->enum("type", ["Audio Story", "Link Audio"])->default("audio_story");
            $table->integer("order")->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('non_stop_stories');
    }
}
