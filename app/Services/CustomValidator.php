<?php

namespace App\Services;

use Illuminate\Http\Request;

class CustomValidator {

    public static function validateInputs(Request $request) {

        $result = [ "email" => null, "password" => null ];

        $inputs = json_decode($request->getContent(), true);

        if(isset($inputs["email"]) && isset($inputs["password"])) {

            $result = [ 
                "email" => $inputs["email"], 
                "password" => $inputs["password"] 
            ];

        } return $result;

    }

}