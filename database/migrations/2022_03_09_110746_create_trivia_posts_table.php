<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTriviaPostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trivia_posts', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('category');
            $table->text('question');
            $table->enum('question_type',['image','video']);
            $table->text('question_media');
            $table->enum('answer_type',['image','text']);
            $table->text('answer_text')->nullable();
            $table->text('answer_image')->nullable();
            $table->boolean('is_active');
            $table->boolean('is_deleted');
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
        Schema::dropIfExists('trivia_posts');
    }
}
