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
        $myNews = new NewsCollection(News::where('author', auth()->user()->email)->OrderByDesc('id')->paginate(3));
        $totalMyNews = new NewsCollection(News::where('author', auth()->user()->email));
        // $myNews->push('myNews');
        // dd($myNews);
        return Inertia::render('Dashboard', [
            'myNews' => $myNews,
            'totalMyNews' => count($totalMyNews),
        ]);
    }
    
    /**
     * Display the specified resource.
     *
     * @param  \App\Models\News  $news
     * @return \Illuminate\Http\Response
     */
    public function show(news $news)
    {
        $myNews = $news::where('author', auth()->user()->email)->get();
        // dd($myNews);
        return Inertia::render('Dashboard', [
            'myNews' => $myNews,
        ]);
    }
}
