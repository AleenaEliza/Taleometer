<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAudioStoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('audio_stories', function (Blueprint $table) {
            $table->id();
            $table->string("title", 255);
            $table->string("image", 255);
            $table->string("file", 255);
            $table->bigInteger('genre_id')->unsigned()->nullable();
            $table->foreign('genre_id')->references('id')->on('genres')->onDelete('cascade');
            $table->bigInteger('story_id')->unsigned()->nullable();
            $table->foreign('story_id')->references('id')->on('stories')->onDelete('cascade');
            $table->bigInteger('plot_id')->unsigned()->nullable();
            $table->foreign('plot_id')->references('id')->on('plots')->onDelete('cascade');
            $table->bigInteger('narration_id')->unsigned()->nullable();
            $table->foreign('narration_id')->references('id')->on('narrations')->onDelete('cascade');
            $table->integer("duration")->nullable();
            $table->boolean("is_nonstop")->default(0);
            $table->boolean("is_active")->default(1);
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
        Schema::dropIfExists('audio_stories');
    }
}
