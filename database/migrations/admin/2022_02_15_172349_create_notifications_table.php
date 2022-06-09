<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNotificationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('notifications', function (Blueprint $table) {
            $table->id();
            $table->string("title", 255);
            $table->text("content");
            $table->string("banner", 255)->nullable();
            $table->bigInteger('audio_story_id')->unsigned()->nullable();
            $table->foreign('audio_story_id')->references('id')->on('audio_stories')->onDelete('cascade');
            $table->boolean("is_active")->default(1);
            $table->enum("type", ["Sent","Saved"])->default("Sent");
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
        Schema::dropIfExists('notifications');
    }
}
