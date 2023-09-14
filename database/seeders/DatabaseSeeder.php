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
            "activation" => true
        ]);
        
        DB::table("recipes")->insert([
            "user_id" => 1,
            "title" => "Poulet & légumes",
            "image" => "recipes/poulet-legumes.jpeg"
        ]);

    }
}
