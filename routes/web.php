<?php

use App\Http\Controllers\ContactUsController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
Route::get('/', function() {
    return inertia::render("Home");
})->name('home');
Route::get('/service', function() {
    return inertia::render("Services");
});
Route::get('/about', function() {
    return inertia::render("About");
});
Route::get('/portfolio', function() {
    return inertia::render("Portfolio");
});
Route::get('/contact-us', function() {
    return inertia::render("Contact");
});

Route::post('contact_us/store', [ContactUsController::class, 'store'])->name("store");