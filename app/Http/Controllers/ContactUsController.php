<?php

namespace App\Http\Controllers;

use App\Models\Contact_us;
use Illuminate\Http\Request;

class ContactUsController extends Controller
{
    public function store( Request $request) {
       $data = $request->validate([
        "name" => "required",
        "email" => "required",
        "phone" => "required",
        "comments" => "required",
       ]);

       $contact_us = Contact_us::create($data);
       return redirect()->route('home');
    }
}
