<?php

namespace App\Http\Controllers;

use App\Http\Requests\RecipeRequest;
use App\Models\Recipe;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RecipeController extends Controller {

    public function index() {

        // it's important to select the 'id' of User and the 'user_id' of Recipe to make the relationship
        $recipes = Recipe::with("user:id,name")->get([ "id", "user_id", "title", "image" ]);

        return Inertia::render("Home", [
            "recipes" => $recipes
        ]);

    }

    public function getRecipe(int $id) {

        $recipes = Recipe::where("id", $id)->with([
            "user:id,name",
            "ingredients",
            "instructions"
        ])->get([ "id", "user_id", "title", "image" ]);

        return Inertia::render("Recipe", [
            "recipe" => $recipes[0]
        ]);

    }

    public function addRecipe() {

        return Inertia::render("AddRecipe");

    }

    public function saveRecipe(RecipeRequest $request) {

        $user = Auth::user();
        $data = $request->all();

        /** @var UploadedFile $image */
        $image = $data["image"];
        $imagePath = $image->store("recipes", "public");

        $recipe = Recipe::create([
            "title" => $data["title"],
            "image" => $imagePath,
            "user_id" => $user->id
        ]);

        $recipe->ingredients()->createMany($data["ingredients"]);
        $recipe->instructions()->createMany($data["instructions"]);
        $recipe->save();

        return to_route("one-recipe", [
            "id" => $recipe->id
        ]);

    }

}
