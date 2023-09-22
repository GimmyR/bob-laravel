<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void {

        DB::table("users")->insert([
            "name" => "Gimmy",
            "email" => "gimmyarazafimbelo2@gmail.com",
            "image" => null,
            "password" => Hash::make("mdpGimmy"),
            "activation_token" => null
        ]);
        
        DB::table("recipes")->insert([
            "user_id" => 1,
            "title" => "Poulet & légumes",
            "image" => "recipes/poulet-legumes.jpeg"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Cuisse de poulet"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Carotte"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Patates"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Courgette"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Poivron"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Oignon"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Carry"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Poivre"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Origan"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Huile d'olive"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Citron"
        ]);

        DB::table("ingredients")->insert([
            "recipe_id" => 1,
            "description" => "Piment"
        ]);

        DB::table("instructions")->insert([
            "recipe_id" => 1,
            "details" => "Couper en tranches la carotte, la courgette et les patates"
        ]);

        DB::table("instructions")->insert([
            "recipe_id" => 1,
            "details" => "Couper en petites tranches le poivron et l'oignon"
        ]);

        DB::table("instructions")->insert([
            "recipe_id" => 1,
            "details" => "Mettre la cuisse de poulet et les tranches de légumes dans une poêle"
        ]);

        DB::table("instructions")->insert([
            "recipe_id" => 1,
            "details" => "Ajouter 500ml d'eau, une cuillerée de carry, une cuillerée d'origan et une pincée de poivre "
        ]);

        DB::table("instructions")->insert([
            "recipe_id" => 1,
            "details" => "Mettre la poêle sur le feu avec un couvercle pendant 45min en veillant à ce qu'il y ait toujours de L'eau"
        ]);

        DB::table("instructions")->insert([
            "recipe_id" => 1,
            "details" => "Ajouter deux cuillerées d'huile d'olive, une cuillerée de purée de piment et un citron pressé"
        ]);

    }
}
