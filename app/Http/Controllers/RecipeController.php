<?php

namespace App\Http\Controllers;

use App\Models\Recipe;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RecipeController extends Controller {

    public function index() {

        // it's important to select the 'id' of User and the 'user_id' of Recipe to make the relationship
        
        $recipes = Recipe::with("user:id,name")->get([ "id", "user_id", "title", "image" ]);

        return Inertia::render("Home", [

            "recipes" => $recipes

        ]);

    }

}
