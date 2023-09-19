<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddRecipeRequest;
use App\Http\Requests\EditRecipeRequest;
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

    public function doAddRecipe(AddRecipeRequest $request) {

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

    public function editRecipe(string $id) {

        $recipes = Recipe::where("id", $id)->with([
            "ingredients",
            "instructions"
        ])->get([ "id", "title", "image" ]);

        return Inertia::render("EditRecipe", [
            "recipe" => $recipes[0]
        ]);

    }

    public function doEditRecipe(string $id, EditRecipeRequest $request) {

        $user = Auth::user();

        $recipes = Recipe::where("id", $id)->where("user_id", $user->id)->with([
            "ingredients",
            "instructions"
        ])->get();

        $this->updateRecipe($recipes[0], $request);

        return to_route("one-recipe", [
            "id" => $id
        ]);

    }

    private function updateRecipe(Recipe $recipe, EditRecipeRequest $request) {

        $inputs = $request->all();
        $recipe->title = $inputs["title"];

        if(isset($inputs["image"])) {
            /** @var UploadedFile $image */
            $image = $inputs["image"];
            $imagePath = $image->store("recipes", "public");

            if($recipe->image)
                Storage::disk("public")->delete($recipe->image);

            $recipe->image = $imagePath;
        }

        $recipe->ingredients()->delete();
        $recipe->instructions()->delete();
        $recipe->ingredients()->createMany($inputs["ingredients"]);
        $recipe->instructions()->createMany($inputs["instructions"]);
        $recipe->save();

    }

}
