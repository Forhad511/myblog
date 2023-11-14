@extends('layouts.app')
@section('title', 'Edit User Info')
@section('body')
    <div class="row mt-5">
        <div class="col-md-12">
            <div class="card">
                <div class="card-header border-bottom">
                    <h3 class="card-title">Edit Blog Form</h3>
                    <a href="{{route('blog.manage')}}" class="btn btn-primary rounded-0 ms-auto">All Blog</a>
                </div>
                <div class="card-body">
                    <p class="text-success text-center">{{Session::get('message')}}</p>
                    <form class="form-horizontal" action="{{route('blog.update', ['id' => $blog->id])}}" method="POST" enctype="multipart/form-data">
                        @csrf
                        <div class="row mb-3">
                            <label for="inputEmail3" class="col-3 col-form-label">Blog Title</label>
                            <div class="col-9">
                                <input type="text" class="form-control" name="title" value="{{$blog->title}}" id="inputEmail3" placeholder="User Name"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputEmail31" class="col-3 col-form-label">Blog Short Message</label>
                            <div class="col-9">
                                <input type="text" class="form-control" name="short_massage" value="{{$blog->short_massage}}" id="inputEmail31" placeholder="User Email"/>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="" class="col-md-3 form-label">Long Description</label>
                            <div class="col-md-9">
                                <textarea class="form-control" name="long_description"  id="summernote" rows="2" placeholder="Long Description">{{$blog->long_description}}</textarea>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <label for="inputEmail34" class="col-3 col-form-label">Blog Image</label>
                            <div class="col-9">
                                <input type="file" class="dropify" data-height="200" name="image" id="image" accept="*/"/>
                                @if($blog->image)
                                    <img src="{{asset($blog->image)}}" alt="" height="70" width="100"/>
                                @endif
                            </div>
                        </div>
                        <div class="row mb-4">
                            <label for="status" class="col-md-3 form-label" >Status</label>
                            <div class="col-md-9">
                                <label class="me-3"><input type="radio" name="status" value="1" checked class="py-1" {{$blog->status == 1 ? 'checked' : ''}} ><span class="text-success">Published</span></label>
                                <label> <input type="radio" name="status" value="2" {{$blog->status == 2 ? 'checked' : ''}}> <span class="text-danger">Unpublished</span></label>
                            </div>
                        </div>
                        <button class="btn btn-primary rounded-0" type="submit">Update Blog Info</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection
