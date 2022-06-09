<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePreferenceBubblesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('preference_bubbles', function (Blueprint $table) {
            $table->id();
            $table->string("name", 255);
            $table->bigInteger('preference_category_id')->unsigned()->nullable();
            $table->foreign('preference_category_id')->references('id')->on('preference_categories')->onDelete('cascade');
            $table->string("image", 255)->nullable();
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
        Schema::dropIfExists('preference_bubbles');
    }
}
