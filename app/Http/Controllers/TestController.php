<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TestController extends Controller
{
    public function index() {

        /*$user = User::create([
            "name" => "Gimmy",
            "email" => "gimmyarazafimbelo2@gmail.com",
            "image" => null,
            "password" => Hash::make("mdpGimmy"),
            "activation" => true
        ]);

        return $user;*/

        return null;

    }
}
