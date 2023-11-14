<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;

class BlogController extends Controller
{
    public $blog;
    public function index()
    {
        return view('blogs.index');
    }
    public function create(Request $request)
    {
        $this->blog = Blog::newService($request);
        return redirect('/blog/add')->with('message', 'Blog info create successfully.');
    }
    public function manage()
    {
        return view('blogs.manage', ['blogs' => Blog::all()]);
    }
    public function edit($id)
    {
        return view('blogs.edit', ['blog' => Blog::find($id)]);
    }
    public function update(Request $request, $id)
    {
        $this->blog = Blog::updateService($request, $id);
        return redirect('/blog/manage')->with('message', 'Blog info update successfully.');
    }
    public function delete($id)
    {
        Blog::deleteService($id);
        return redirect('/blog/manage')->with('message', 'Blog info delete successfully.');
    }
}
