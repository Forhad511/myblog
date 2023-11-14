@extends('layouts.app')
@section('title', 'Manage User')
@section('body')
    <div class="row mt-5">
        <div class="col-lg-12">
            <div class="card">
                <div class="card-header border-bottom">
                    <h4 class="header-title">All User Information</h4>
                    <a href="{{route('blog.add')}}" class="btn btn-primary rounded-0 ms-auto">Add New Blogs</a>
                </div>
                <div class="card-body">
                    <p class="text-success text-center">{{Session::get('message')}}</p>
                    <div class="table-responsive">
                        <table class="table table-bordered text-nowrap border-bottom" id="basic-datatable">
                            <thead>
                            <tr>
                                <th>SL NO</th>
                                <th>Blogs Title</th>
                                <th>Short Message</th>
                                <th>Long Message</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($blogs as $blog)
                                <tr>
                                    <td>{{$loop->iteration}}</td>
                                    <td>{{$blog->title}}</td>
                                    <td>{{$blog->short_massage}}</td>
                                    <td>{!! $blog->long_description !!}</td>
                                    <td>
                                        <img src="{{asset($blog->image)}}" width="100" height="100" alt=""/>
                                    </td>
                                    <td>
                                        <a href="{{route('blog.edit', ['id' => $blog->id])}}" class="btn btn-success btn-sm" title="Edit">
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        <a href="{{route('blog.delete', ['id' => $blog->id])}}" class="btn btn-danger btn-sm " title="Delete" onclick="return confirm('Ary you sure to delete this..');">
                                            <i class="fa fa-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- End Row -->
@endsection
