<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;

    protected $fillable = [
        "title",
        "image",
        "user_id"
    ];

    public function user() {

        return $this->belongsTo(User::class);

    }

    public function ingredients() {

        return $this->hasMany(Ingredient::class);

    }

    public function instructions() {

        return $this->hasMany(Instruction::class);

    }
}
