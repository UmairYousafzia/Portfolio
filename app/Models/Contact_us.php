<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact_us extends Model
{
    protected $fillable= [
        'name',
        'email',
        'phone',
        'comments',
    ];
}
