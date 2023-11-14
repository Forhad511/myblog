@extends('layouts.app')
@section('title', 'Add New Blogs')
@section('body')
    <div class="row mt-5">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header border-bottom">
                    <h3 class="card-title">Add Blog Form</h3>
                    <a href="{{route('blog.manage')}}" class="btn btn-primary rounded-0 ms-auto">All Blog</a>
                </div>
                <div class="card-body">
                    <p class="text-success text-center">{{Session::get('message')}}</p>
                    <form class="form-horizontal" action="{{route('blog.new')}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row mb-3">
                            <label for="" class="col-3 col-form-label">Blog Title</label>
                            <div class="col-9">
                                <input type="text" class="form-control" required name="title" id="" placeholder="Blog Title"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="" class="col-3 col-form-label">Blog Short Message</label>
                            <div class="col-9">
                                <input type="text" class="form-control" required name="short_massage" id="" placeholder="Blog Short Massage"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="" class="col-md-3 form-label">Long Description</label>
                            <div class="col-md-9">
                                <textarea class="form-control" name="long_description"  id="summernote" rows="2" placeholder="Long Description"></textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="image" class="col-md-3 form-label" >Blog Image</label>
                            <div class="col-md-9">
                                <input type="file" class="dropify" data-height="200" name="image" id="image" accept="*/"/>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <label for="status" class="col-md-3 form-label" >Status</label>
                            <div class="col-md-9">
                                <label class="me-3"><input type="radio" name="status" value="1" checked class="py-1"><span class="text-success">Published</span></label>
                                <label> <input type="radio" name="status" value="2"> <span class="text-danger">Unpublished</span></label>
                            </div>
                        </div>
                        <button class="btn btn-primary rounded-0" type="submit">Create New Blogs</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
