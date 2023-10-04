<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use App\Models\User;
use App\Notifications\RegisterNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class TestController extends Controller
{
    public function index() {

        return true;

    }
}
