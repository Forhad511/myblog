<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    use HasFactory;
    private static $blog, $image, $imageName, $directory,$imageUrl;

    public static function getImageUrl($request)
    {
        self::$image        = $request->file('image');
        self::$imageName    = self::$image->getClientOriginalName();
        self::$directory    = 'upload/blog/image/';
        self::$image->move(self::$directory,self::$imageName);
        self::$imageUrl     = self::$directory.self::$imageName;
        return self::$imageUrl;
    }

    public static function newService($request)
    {
        self::$blog = new Blog();
        self::$blog->title                  = $request->title;
        self::$blog->short_massage          = $request->short_massage;
        self::$blog->long_description       = $request->long_description;
        self::$blog->image                  = self::getImageUrl($request);
        self::$blog->status                 = $request->status;
        self::$blog->save();
    }
    public static function updateService($request,$id)
    {
        self::$blog = Blog::find($id);
        if($request->file('image'))
        {
            if (file_exists(self::$blog->name))
            {
                unlink(self::$blog->name);
            }
            self::$imageUrl= self::getImageUrl($request);

        }
        else
        {
            self::$imageUrl= self::$blog->name;
        }
        self::$blog->title                  = $request->title;
        self::$blog->short_massage          = $request->short_massage;
        self::$blog->long_description       = $request->long_description;
        self::$blog->image                 = self::$imageUrl;
        self::$blog->status                = $request->status;
        self::$blog->save();
    }
    public static function deleteService($id)
    {
        self::$blog = Blog::find($id);
        if (file_exists(self::$blog->name)) {
            unlink(self::$blog->name);
        }
        self::$blog->delete();
    }

}
