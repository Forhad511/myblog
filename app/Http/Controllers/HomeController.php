<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Stichoza\GoogleTranslate\GoogleTranslate;
use GuzzleHttp\Client;

class HomeController extends Controller
{


    public function index()
    {
        return view('blog.home.index',['blogs' => Blog::all()]);
    }
    public function contact()
    {
        return view('blog.contact.index');
    }
    public function details($id)
    {
        return view('blog.details.index',['blog' => Blog::find($id)]);
    }
}
