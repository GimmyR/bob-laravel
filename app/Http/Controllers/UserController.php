<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Services\CustomValidator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request) {

        $result = [ "error" => true ];
        
        $credentials = CustomValidator::validateInputs($request);

        if($result["error"] = !Auth::attempt($credentials)) {

            $request->session()->regenerate();

        } return $result;

    }

    public function auth() {

        $result = [ "error" => true, "data" => null ];

        $result["data"] = Auth::user();

        $result["error"] = false;

        return $result;

    }

    public function logout() {
        
        Auth::logout();

        return [ "error" => false ];

    }
}
