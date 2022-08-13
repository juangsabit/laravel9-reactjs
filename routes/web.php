<?php

use App\Http\Controllers\Dashboard;
use App\Http\Controllers\NewsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [NewsController::class, 'index']);
Route::post('/news', [NewsController::class, 'store']);

Route::get('/dashboard', [Dashboard::class, 'index']
)->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/dashboard/addnews', function () {
    return Inertia::render('AddNews');
})->middleware(['auth', 'verified'])->name('addnews');

require __DIR__.'/auth.php';
