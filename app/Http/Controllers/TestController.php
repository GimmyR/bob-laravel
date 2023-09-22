<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\RegisterNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TestController extends Controller
{
    public function index() {

        /*
        $user = User::find(1);
        $user->notify(new RegisterNotification());
        */

        return true;

    }
}
