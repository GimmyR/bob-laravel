<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class UserController extends Controller
{
    public function loginForm() {

        $user = Auth::user();
        if($user)
            return to_route("home");

        return Inertia::render("Login");

    }

    public function login(LoginRequest $request) {

        $credentials = $request->validated();

        if(Auth::attempt($credentials)) {

            $request->session()->regenerate();

            return redirect()->intended(route("home"));

        } return to_route("user.connect");

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

    public function getProfile(string $userId) {

        $user = User::find($userId);
        $auth = Auth::user();

        return Inertia::render("Profile", [
            "user" => $user,
            "auth" => $auth
        ]);

    }

    public function createAccount() {

        return Inertia::render("CreateAccount");

    }
}
