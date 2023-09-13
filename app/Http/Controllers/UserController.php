<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(LoginRequest $request) {

        $result = [ "error" => true, "message" => null, "data" => null ];
        
        $credentials = $request->validated();

        $result["error"] = !Auth::attempt($credentials);

        if(!$result["error"]) {

            $request->session()->regenerate();

        } else {

            $result["message"] = "An user info is not correct !";

        } return $result;

    }

    public function auth() {

        $result = [ "error" => true, "message" => null, "data" => null ];

        $result["data"] = Auth::user();

        $result["error"] = false;

        return $result;

    }

    public function logout() {

        $result = [ "error" => true, "message" => null, "data" => null ];
        
        Auth::logout();

        $result["error"] = false;

        return $result;

    }
}
