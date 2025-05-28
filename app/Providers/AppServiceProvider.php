<?php

namespace App\Providers;

use Inertia\Inertia;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\URL;
class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
         if (config('app.env') === 'production')
        URL::forceScheme('https');
    
         Inertia::setRootView('app');
        Schema::defaultStringLength(191);
    }
}
