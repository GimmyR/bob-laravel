<?php

namespace App\Http\Controllers;

use App\Models\Favorite;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function addFavorite(string $recipeId) {
        
        $user = Auth::user();
        $recipe = Recipe::find($recipeId);

        return $this->createFavorite($user, $recipe);

    }

    private function createFavorite(?User $user, ?Recipe $recipe) {

        $result = [ "error" => false, "message" => null, "data" => null ];

        if($user) {

            if($recipe) {

                Favorite::create([
                    "user_id" => $user->id,
                    "recipe_id" => $recipe->id
                ]);

            } else {

                $result["error"] = true;
                $result["message"] = "Recipe not found.";

            }

        } else {

            $result["error"] = true;
            $result["message"] = "You're not authenticated.";

        } return $result;

    }

    public function removeFavorite(string $recipeId) {
        
        $user = Auth::user();
        $recipe = Recipe::find($recipeId);

        return $this->deleteFavorite($user, $recipe);

    }

    private function deleteFavorite(?User $user, ?Recipe $recipe) {

        $result = [ "error" => false, "message" => null, "data" => null ];

        if($user) {

            if($recipe)
                Favorite::where("user_id", $user->id)->where("recipe_id", $recipe->id)->delete();

            else {

                $result["error"] = true;
                $result["message"] = "Recipe not found.";

            }

        } else {

            $result["error"] = true;
            $result["message"] = "You're not authenticated.";

        } return $result;

    }

    public function isFavorite(string $recipeId) {

        $user = Auth::user();
        $recipe = Recipe::find($recipeId);

        return $this->checkFavorite($user, $recipe);

    }

    private function checkFavorite(?User $user, ?Recipe $recipe) {

        $result = [ "error" => false, "message" => null, "data" => false ];

        if($user) {

            if($recipe) {

                $favorite = Favorite::where("user_id", $user->id)->where("recipe_id", $recipe->id)->first();
                if($favorite)
                    $result["data"] = true;

            } else {

                $result["error"] = true;
                $result["message"] = "Recipe not found.";

            }

        } else {

            $result["error"] = true;
            $result["message"] = "You're not authenticated.";

        } return $result;

    }
}
