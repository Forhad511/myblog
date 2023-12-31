<!DOCTYPE html>
<html lang="zxx" class="no-js">

<head>

    @include('blog.layout.head')

</head>
<body>

<header class="header-area">
    @include('blog.layout.header')
</header>


{{--<section class="home-banner-area relative"--}}

@yield('body')



@include('blog.layout.footer')

<script src="{{asset('/')}}assets/js/vendor/jquery-2.2.4.min.js"></script>
<script src="../../../cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="{{asset('/')}}assets/js/vendor/bootstrap.min.js"></script>
<script src="{{asset('/')}}assets/js/owl.carousel.min.js"></script>
<script src="{{asset('/')}}assets/js/jquery.sticky.js"></script>
<script src="{{asset('/')}}assets/js/jquery.tabs.min.js"></script>
<script src="{{asset('/')}}assets/js/parallax.min.js"></script>
<script src="{{asset('/')}}assets/js/jquery.nice-select.min.js"></script>
<script src="{{asset('/')}}assets/js/jquery.ajaxchimp.min.js"></script>
<script src="{{asset('/')}}assets/js/jquery.magnific-popup.min.js"></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA"></script>
<script src="{{asset('/')}}assets/js/bootstrap-datepicker.js"></script>
<script src="{{asset('/')}}assets/js/main.js"></script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-23581568-13');
</script>
</body>

</html>
