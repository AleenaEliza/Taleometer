<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreferenceBubbleTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preference_bubble_tags', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('preference_bubble_id')->unsigned()->nullable();
            $table->foreign('preference_bubble_id')->references('id')->on('preference_bubbles')->onDelete('cascade');
            $table->bigInteger('tag_id')->unsigned()->nullable();
            $table->foreign('tag_id')->references('id')->on('tags')->onDelete('cascade');
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
        Schema::dropIfExists('preference_bubble_tags');
    }
}
