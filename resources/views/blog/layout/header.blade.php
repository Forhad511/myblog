<div class="container">
    <div class="header-wrap">
        <div class="header-top d-flex justify-content-between align-items-lg-center navbar-expand-lg">
            <div class="col menu-left">
                <a class="active" href="{{route('home')}}">Home</a>
            </div>
            <div class="col-5 text-lg-center mt-2 mt-lg-0">
                <span class="logo-outer">
                <span class="logo-inner">
                <a href="{{route('home')}}">
                    <h1 class="text-success text-center">In flexion point</h1>
                </a>
                </span>
                </span>
            </div>
            <nav class="col navbar navbar-expand-lg justify-content-end">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="lnr lnr-menu"></span>
                </button>

                <div class="collapse navbar-collapse menu-right" id="collapsibleNavbar">
                    <ul class="navbar-nav justify-content-center w-100">
                        <li class="nav-item hide-lg">
                            <a class="nav-link" href="{{route('home')}}">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="{{route('contact')}}">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
