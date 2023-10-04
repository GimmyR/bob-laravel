<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddRecipeRequest;
use App\Http\Requests\EditRecipeRequest;
use App\Http\Requests\SearchRequest;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class RecipeController extends Controller {

    public function index() {

        // it's important to select the 'id' of User and the 'user_id' of Recipe to make the relationship
        $recipes = Recipe::with("user:id,name")
                            ->get([ "id", "user_id", "title", "image" ]);

        return Inertia::render("Home", [
            "recipes" => $recipes
        ]);

    }

    public function getAllRecipes() {

        $response = [ "error" => false, "message" => null, "data" => null ];
        
        $response["data"] = Recipe::with("user:id,name")
                            ->get([ "id", "user_id", "title", "image" ]);

        return $response;

    }

    public function search(SearchRequest $request) {

        $search = $request->input("search");

        $recipes = Recipe::where("title", "ilike", "%".$search."%")
                            ->with("user:id,name")
                            ->get([ "id", "user_id", "title", "image" ]);

        return Inertia::render("Home", [
            "recipes" => $recipes
        ]);

    }

    public function search_API(Request $request) {

        $search = $request->input("search");

        $recipes = Recipe::where("title", "ilike", "%".$search."%")
                            ->with("user:id,name")
                            ->get([ "id", "user_id", "title", "image" ]);

        return [
            "error" => false,
            "message" => null,
            "data" => $recipes
        ];

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

    public function getRecipe_API(int $id) {

        $response = [ "error" => false, "message" => null, "data" => null ];
        
        $response["data"] = Recipe::where("id", $id)->with([
            "user:id,name",
            "ingredients",
            "instructions"
        ])->get([ "id", "user_id", "title", "image" ])[0];

        return $response;

    }

    public function addRecipe() {

        return Inertia::render("AddRecipe");

    }

    public function doAddRecipe(AddRecipeRequest $request) {

        $user = Auth::user();
        $data = $request->all();

        /** @var UploadedFile $image */
        $image = $data["image"];
        $imageData = base64_encode(file_get_contents($image->path()));

        $recipe = Recipe::create([
            "title" => $data["title"],
            "image" => $imageData,
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
            $recipe->image = base64_encode(file_get_contents($image->path()));
        }

        $recipe->ingredients()->delete();
        $recipe->instructions()->delete();
        $recipe->ingredients()->createMany($inputs["ingredients"]);
        $recipe->instructions()->createMany($inputs["instructions"]);
        $recipe->save();

    }

    public function doAddRecipe_API(AddRecipeRequest $request) {

        $response = [
            "error" => false,
            "message" => null,
            "data" => null
        ];
        
        $user = Auth::user();

        /** @var UploadedFile $file */
        $file = $request->file("image");
        $imageData = base64_encode(file_get_contents($file->path()));

        $recipe = Recipe::create([
            "user_id" => $user->id,
            "title" => $request->input("title"),
            "image" => $imageData
        ]);

        $recipe->ingredients()->createMany(json_decode($request->input("ingredients"), true));
        $recipe->instructions()->createMany(json_decode($request->input("instructions"), true));
        $recipe->save();
        $response["data"] = $recipe->id;

        return $response;

    }

    public function doEditRecipe_API(string $id, EditRecipeRequest $request) {

        $response = [
            "error" => false,
            "message" => null,
            "data" => null
        ];
        
        $user = Auth::user();

        $recipes = Recipe::where("id", $id)->where("user_id", $user->id)->with([
            "ingredients",
            "instructions"
        ])->get();

        $response["data"] = $this->updateRecipe_API($recipes[0], $request);

        return $response;

    }

    private function updateRecipe_API(Recipe $recipe, EditRecipeRequest $request) {

        $recipe->title = $request->input("title");
        
        /** @var UploadedFile $file */
        $file = $request->file("image");
        if($file)
            $recipe->image = base64_encode(file_get_contents($file->path()));

        $recipe->ingredients()->delete();
        $recipe->instructions()->delete();
        $recipe->ingredients()->createMany(json_decode($request->input("ingredients"), true));
        $recipe->instructions()->createMany(json_decode($request->input("instructions"), true));
        $recipe->save();

        return $recipe->id;

    }

    public function getRecipesByUser(string $userId) {

        $recipes = Recipe::where("user_id", $userId)->with("user:id,name")->get([ "id", "user_id", "title", "image" ]);

        return [ "error" => false, "message" => null, "data" => $recipes ];

    }

    public function removeRecipe_API(string $id) {

        $response = [
            "error" => false,
            "message" => null,
            "data" => null
        ];

        $recipe = Recipe::find($id);

        if($recipe) {

            $user = Auth::user();

            if($user) {

                if($recipe->user_id == $user->id)
                    $recipe->delete();

                else {

                    $response["error"] = true;
                    $response["message"] = "This recipe doesn't belong to you.";

                }

            } else {

                $response["error"] = true;
                $response["message"] = "You are not authenticated.";

            }

        } else {

            $response["error"] = true;
            $response["message"] = "Recipe not found.";

        } return $response;

    }

}
