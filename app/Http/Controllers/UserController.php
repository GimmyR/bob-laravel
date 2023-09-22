<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Notifications\RegisterNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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

    public function register(RegisterRequest $request) {

        $inputs = $request->validated();

        $users = User::where("name", $inputs["name"])->get();

        if(count($users) == 0) {

            $users = User::where("email", $inputs["email"])->get();

            if(count($users) == 0) {

                $this->signUp($inputs);

                return to_route("user.connect");

            } else return redirect()->back()->withErrors([ "email" => "This email is already used by someone." ])->withInput();

        } else return redirect()->back()->withErrors([ "name" => "This username is already used by someone." ])->withInput();

    }

    private function signUp($inputs) {

        $user = User::create([
            "name" => $inputs["name"],
            "email" => $inputs["email"],
            "password" => Hash::make($inputs["password"]),
            "activation_token" => bin2hex(random_bytes(10))
        ]);
        
        $user->notify(new RegisterNotification());

    }
}
