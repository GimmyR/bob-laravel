<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function login(LoginRequest $request) {

        $result = [ "error" => true ];
        
        $credentials = $request->validated();

        if($result["error"] = !Auth::attempt($credentials)) {

            $request->session()->regenerate();

        } return $result;

    }

    public function auth() {

        return Auth::user();

    }

    public function logout() {
        
        Auth::logout();

        return [ "error" => false ];

    }
}
