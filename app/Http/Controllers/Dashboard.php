<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Models\News;
use Inertia\Inertia;

class Dashboard extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $news = new NewsCollection(News::paginate(6));
        // dd($news);
        return Inertia::render('Dashboard', [
            'news' => $news
        ]);
    }
}
