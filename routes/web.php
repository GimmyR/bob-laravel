<?php

use App\Http\Controllers\FavoriteController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RecipeController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\UserController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get("/", [RecipeController::class, "index"])->name("home");

// USER CONTROLLER :

Route::prefix("/user")->group(function() {

    Route::post("/login", [UserController::class, "login"]);

    Route::get("/auth", [UserController::class, "auth"]);

    Route::get("/logout", [UserController::class, "logout"]);

    Route::get("/profile/{userId}", [UserController::class, "getProfile"])->name("user.profile");

});

// RECIPE CONTROLLER :

Route::get("/recipe/{id}", [RecipeController::class, "getRecipe"])->name("one-recipe");

Route::get("/add-recipe", [RecipeController::class, "addRecipe"])->name("add-recipe")->middleware("auth");

Route::post("/add-recipe", [RecipeController::class, "doAddRecipe"])->middleware("auth");

Route::get("/edit-recipe/{id}", [RecipeController::class, "editRecipe"])->name("edit-recipe")->middleware("auth");

Route::post("/edit-recipe/{id}", [RecipeController::class, "doEditRecipe"])->middleware("auth");

Route::get("/recipes/{userId}", [RecipeController::class, "getRecipesByUser"])->name("recipes.user");

// FAVORITE CONTROLLER :

Route::get("/add-favorite/{recipeId}", [FavoriteController::class, "addFavorite"])->name("add-favorite");

Route::get("/remove-favorite/{recipeId}", [FavoriteController::class, "removeFavorite"])->name("remove-favorite");

Route::get("/is-favorite/{recipeId}", [FavoriteController::class, "isFavorite"])->name("is-favorite");

Route::get("/favorites/{userId}", [FavoriteController::class, "getFavoritesByUser"])->name("favorites.user");

// TEST :

Route::get("/test", [TestController::class, "index"]);