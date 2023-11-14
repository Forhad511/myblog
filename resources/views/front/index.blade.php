<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Fastkart">
    <meta name="keywords" content="Fastkart">
    <meta name="author" content="Fastkart">
    <link rel="icon" href="{{asset('/')}}website/assets/images/favicon/6.png" type="image/x-icon">
    <title>WholesaleChinaToBD ~ Trusted B2B Marketplace in Bangladesh</title>

    <!-- Google font -->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css2?family=Russo+One&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&amp;display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet">
    <link
        href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
        rel="stylesheet">

    <!-- bootstrap css -->
    <link id="rtl-link" rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/vendors/bootstrap.css">

    <!-- wow css -->
    <link rel="stylesheet" href="{{asset('/')}}website/assets/css/animate.min.css" />

    <!-- font-awesome css -->
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/vendors/font-awesome.css">

    <!-- feather icon css -->
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/vendors/feather-icon.css">

    <!-- slick css -->
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/vendors/slick/slick.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/vendors/slick/slick-theme.css">

    <!-- Iconly css -->
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/bulk-style.css">
    <link rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/vendors/animate.css">

    <!-- Template css -->
    <link id="color-link" rel="stylesheet" type="text/css" href="{{asset('/')}}website/assets/css/style.css">

    <!-- App Css-->
    <link href="{{asset('/')}}website/assets/css/app.min.css" rel="stylesheet" type="text/css" />
</head>

<body class="theme-color-4 bg-gradient-color">

<!-- Loader Start -->
<div class="fullpage-loader">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
</div>
<!-- Loader End -->

<!-- Header Start -->
<header class="pb-0 fixed-header">
    <div class="top-nav top-header">
        <div class="container-fluid-xs">
            <div class="row">
                <div class="col-12">
                    <div class="navbar-top">
                        <button class="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button"
                                data-bs-toggle="offcanvas" data-bs-target="#primaryMenu">
                                <span class="navbar-toggler-icon navbar-toggler-icon-2">
                                    <i class="fa-solid fa-bars"></i>
                                </span>
                        </button>

                        <div class="ms-3">
                            <a href="index.html" class="web-logo nav-logo">
                                <img src="{{asset('/')}}website/assets/images/logo/6.png" class="img-fluid blur-up lazyload" alt="">
                            </a>
                        </div>

                        <div class="middle-box">

                            <div class="search-box">
                                <div class="input-group">
                                    <input type="search" class="form-control" placeholder="I'm searching for..."
                                           aria-label="Recipient's username" aria-describedby="button-addon2">
                                    <button class="btn bg-theme" type="button" id="button-addon2">
                                        <i data-feather="search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="rightside-box">
                            <div class="search-full">
                                <div class="input-group">
                                        <span class="input-group-text">
                                            <i data-feather="search" class="font-light"></i>
                                        </span>
                                    <input type="text" class="form-control search-type" placeholder="Search here..">
                                    <span class="input-group-text close-search">
                                            <i data-feather="x" class="font-light"></i>
                                        </span>
                                </div>
                            </div>
                            <ul class="right-side-menu">
                                <li class="right-side">
                                    <div class="delivery-login-box">
                                        <div class="delivery-icon">
                                            <div class="search-box">
                                                <i data-feather="search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="right-side">
                                    <a href="contact-us.html" class="delivery-login-box">
                                        <div class="delivery-icon">
                                            <i data-feather="phone-call"></i>
                                        </div>
                                        <div class="delivery-detail">
                                            <h6>24/7 Delivery</h6>
                                            <h5>+91 888 104 2340</h5>
                                        </div>
                                    </a>
                                </li>
                                <li class="right-side">
                                    <a href="wishlist.html" class="btn p-0 position-relative header-wishlist">
                                        <i data-feather="heart"></i>
                                    </a>
                                </li>
                                <li class="right-side">
                                    <div class="onhover-dropdown header-badge">
                                        <button type="button" class="btn p-0 position-relative header-wishlist">
                                            <i data-feather="shopping-cart"></i>
                                            <span class="position-absolute top-0 start-100 translate-middle badge">2
                                                    <span class="visually-hidden">unread messages</span>
                                                </span>
                                        </button>

                                        <div class="onhover-div">
                                            <ul class="cart-list">
                                                <li class="product-box-contain">
                                                    <div class="drop-cart">
                                                        <a href="product-left-thumbnail.html" class="drop-image">
                                                            <img src="{{asset('/')}}website/assets/images/vegetable/product/1.png"
                                                                 class="blur-up lazyload" alt="">
                                                        </a>

                                                        <div class="drop-contain">
                                                            <a href="product-left-thumbnail.html">
                                                                <h5>Fantasy Crunchy Choco Chip Cookies</h5>
                                                            </a>
                                                            <h6><span>1 x</span> $80.58</h6>
                                                            <button class="close-button close_button">
                                                                <i class="fa-solid fa-xmark"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li class="product-box-contain">
                                                    <div class="drop-cart">
                                                        <a href="product-left-thumbnail.html" class="drop-image">
                                                            <img src="{{asset('/')}}website/assets/images/vegetable/product/2.png"
                                                                 class="blur-up lazyload" alt="">
                                                        </a>

                                                        <div class="drop-contain">
                                                            <a href="product-left-thumbnail.html">
                                                                <h5>Peanut Butter Bite Premium Butter Cookies 600 g
                                                                </h5>
                                                            </a>
                                                            <h6><span>1 x</span> $25.68</h6>
                                                            <button class="close-button close_button">
                                                                <i class="fa-solid fa-xmark"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>

                                            <div class="price-box">
                                                <h5>Total :</h5>
                                                <h4 class="theme-color fw-bold">$106.58</h4>
                                            </div>

                                            <div class="button-group">
                                                <a href="cart.html" class="btn btn-sm cart-button">View Cart</a>
                                                <a href="checkout.html" class="btn btn-sm cart-button theme-bg-color
                                                    text-white">Checkout</a>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="right-side onhover-dropdown">
                                    <div class="delivery-login-box">
                                        <div class="delivery-icon">
                                            <i data-feather="user"></i>
                                        </div>
                                        <div class="delivery-detail">
                                            <h6>Hello,</h6>
                                            <h5>My Account</h5>
                                        </div>
                                    </div>

                                    <div class="onhover-div onhover-div-login">
                                        <ul class="user-box-name">
                                            <li class="product-box-contain">
                                                <i></i>
                                                <a href="login.html">Log In</a>
                                            </li>

                                            <li class="product-box-contain">
                                                <a href="sign-up.html">Register</a>
                                            </li>

                                            <li class="product-box-contain">
                                                <a href="forgot.html">Forgot Password</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>
<!-- Header End -->

<!-- mobile fix menu start -->
<div class="mobile-menu d-md-none d-block mobile-cart">
    <ul>
        <li class="active">
            <a href="index.html">
                <i class="iconly-Home icli"></i>
                <span>Home</span>
            </a>
        </li>

        <li class="mobile-category">
            <a href="javascript:void(0)" class="navbar-toggler-icon navbar-toggler-icon-2">
                <i class="iconly-Category icli js-link"></i>
                <span>Category</span>
            </a>
        </li>

        <li>
            <a href="#searchFull" class="search-box delivery-icon"">
            <i class="iconly-Search icli "></i>
            <span>Search</span>
            </a>
        </li>

        <li>
            <a href="wishlist.html" class="notifi-wishlist">
                <i class="iconly-Heart icli"></i>
                <span>My Wish</span>
            </a>
        </li>

        <li>
            <a href="cart.html">
                <i class="iconly-Bag-2 icli fly-cate"></i>
                <span>Cart</span>
            </a>
        </li>
    </ul>
</div>
<!-- mobile fix menu end -->

<!-- Product Section Start -->
<section class="product-section pt-0 ">
    <div class="container-fluid p-0">
        <div class="custom-row">
            <div class="sidebar-col">
                <div id="sidebar-menu">
                    <ul class="metismenu list-unstyled" id="side-menu">

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-shoe-prints"></i>
                                <span>Shoes</span>

                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Men Shoes</a></li>
                                <li><a href="#">Men Boots</a></li>
                                <li><a href="#">Ladies Shoes</a></li>
                                <li><a href="#">Ladies Boot</a></li>
                                <li><a href="#">Ladies High Heels</a></li>
                                <li><a href="#">Formal Shoes For Gents</a></li>
                                <li><a href="#">Sandals</a></li>
                                <li><a href="#">Running/ Gym Shoes</a></li>
                                <li><a href="#">Casual Shoes</a></li>
                                <li><a href="#">Loafers For Women</a></li>
                                <li><a href="#">Sports Shoes</a></li>
                                <li><a href="#">Baby Shoes</a></li>
                                <li><a href="#">Low Top Shoes</a></li>
                                <li><a href="#">Rain Boots</a></li>
                                <li><a href="#">Men High Top Shoes</a></li>
                                <li><a href="#">Football/Soccer Shoes</a></li>
                                <li><a href="#">Slippers</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-bag-shopping"></i>
                                <span>Bags</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Ladies Purse</a></li>
                                <li><a href="#">Ladies Bags</a></li>
                                <li><a href="#">Briefcases</a></li>
                                <li><a href="#">Money Clip</a></li>
                                <li><a href="#">Men Wallets</a></li>
                                <li><a href="#">Backpacks</a></li>
                                <li><a href="#">Women Wallets</a></li>
                                <li><a href="#">Travel Backpacks</a></li>
                                <li><a href="#">ID Cases</a></li>
                                <li><a href="#">Laptop Bags</a></li>
                                <li><a href="#">Suitcase</a></li>
                                <li><a href="#">Waist Bag</a></li>
                                <li><a href="#">Hand Bag</a></li>
                                <li><a href="#">Gift Box</a></li>
                                <li><a href="#">Baseball Caps</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-gem"></i>
                                <span>Jewelry</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Men Bracelets</a></li>
                                <li><a href="#">Men Earrings</a></li>
                                <li><a href="#">Women Earrings</a></li>
                                <li><a href="#">Jewellery Necklaces</a></li>
                                <li><a href="#">Women Necklaces</a></li>
                                <li><a href="#">Bridal</a></li>
                                <li><a href="#">Crown For Women</a></li>
                                <li><a href="#">Bride Necklace</a></li>
                                <li><a href="#">Pendant</a></li>
                                <li><a href="#">Bangle</a></li>
                                <li><a href="#">Ring</a></li>
                                <li><a href="#">Anklet</a></li>
                                <li><a href="#">Women Tiara</a></li>
                                <li><a href="#">Belly Chain</a></li>
                                <li><a href="#">Jwellery Box</a></li>
                                <li><a href="#">Pin Brooch</a></li>
                                <li><a href="#">Fashion Jewelry</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-spa"></i>
                                <span>Beauty & Personal Care</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Eyeshadow</a></li>
                                <li><a href="#">Eyeliner</a></li>
                                <li><a href="#">Face Power</a></li>
                                <li><a href="#">Makeup Remover</a></li>
                                <li><a href="#">Eye Brushes</a></li>
                                <li><a href="#">Hair Removal</a></li>
                                <li><a href="#">Mirrors</a></li>
                                <li><a href="#">Teeth Whitening</a></li>
                                <li><a href="#">Nail Polish</a></li>
                                <li><a href="#">Lip Gloss</a></li>
                                <li><a href="#">Lip Liner</a></li>
                                <li><a href="#">Lip Sticks</a></li>
                                <li><a href="#">Anti Hair Thinning & Loss</a></li>
                                <li><a href="#">Hairspray & Styling</a></li>
                                <li><a href="#">Hair Dryers</a></li>
                                <li><a href="#">Hair Dye</a></li>
                                <li><a href="#">Hair Massage Oil</a></li>
                                <li><a href="#">Irons & Stylers</a></li>
                                <li><a href="#">Bath & Shower</a></li>
                                <li><a href="#">Candles & Scents</a></li>
                                <li><a href="#">Lotions & Oil</a></li>
                                <li><a href="#">Perfume</a></li>
                                <li><a href="#">Perfume Sets</a></li>
                                <li><a href="#">Deodorant</a></li>
                                <li><a href="#">Soaps</a></li>
                                <li><a href="#">Body Wash</a></li>
                                <li><a href="#">Hair Conditioner</a></li>
                                <li><a href="#">Toner</a></li>
                                <li><a href="#">Facial Masks</a></li>
                                <li><a href="#">Face Moisturizer</a></li>
                                <li><a href="#">Eye Treatment</a></li>
                                <li><a href="#">Face Serum</a></li>
                                <li><a href="#">Body Sunscreen</a></li>
                                <li><a href="#">Face Sunscreen</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-t-shirt"></i>
                                <span>Men’s Clothing</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Casual Pants For Men</a></li>
                                <li><a href="#">Mens Jeans Pant</a></li>
                                <li><a href="#">Men Suit</a></li>
                                <li><a href="#">Leather Jackets For Men</a></li>
                                <li><a href="#">Winter Pajamas</a></li>
                                <li><a href="#">Shirts</a></li>
                                <li><a href="#">Athletic Shorts</a></li>
                                <li><a href="#">Tie Clips</a></li>
                                <li><a href="#">Mens Sweater</a></li>
                                <li><a href="#">Boxers</a></li>
                                <li><a href="#">Mens Hat</a></li>
                                <li><a href="#">Leather Gloves</a></li>
                                <li><a href="#">Mens Sweatpants</a></li>
                                <li><a href="#">Socks</a></li>
                                <li><a href="#">Tie</a></li>
                                <li><a href="#">Bow Ties</a></li>
                                <li><a href="#">Gloves</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-person-dress"></i>
                                <span>Women’s Clothing</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Hoodies & Sweatshirts</a></li>
                                <li><a href="#">Women Sets</a></li>
                                <li><a href="#">Women Suits Blazers</a></li>
                                <li><a href="#">Bodysuits</a></li>
                                <li><a href="#">Women Coats Jackets</a></li>
                                <li><a href="#">Swimwear</a></li>
                                <li><a href="#">Bikini Sets</a></li>
                                <li><a href="#">Skirts</a></li>
                                <li><a href="#">Women Jeans</a></li>
                                <li><a href="#">Pants & Capris</a></li>
                                <li><a href="#">Event Dress</a></li>
                                <li><a href="#">Wedding Dresses</a></li>
                                <li><a href="#">Prom Dresses</a></li>
                                <li><a href="#">Evening Dresses</a></li>
                                <li><a href="#">Cosplay Costumes</a></li>
                                <li><a href="#">Bra</a></li>
                                <li><a href="#">Panties</a></li>
                                <li><a href="#">Women Socks</a></li>
                                <li><a href="#">Bodysuit</a></li>
                                <li><a href="#">Bucket Hats</a></li>
                                <li><a href="#">Beach Style</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-baby"></i>
                                <span>Baby Items</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Baby Cleaning</a></li>
                                <li><a href="#">Baby Bottels</a></li>
                                <li><a href="#">Changing Mats & Cloth Diapers</a></li>
                                <li><a href="#">Child Furniture</a></li>
                                <li><a href="#">Diapers</a></li>
                                <li><a href="#">Potty & Washing</a></li>
                                <li><a href="#">Baby Pools & Water Toys</a></li>
                                <li><a href="#">Remote Control Toys</a></li>
                                <li><a href="#">Baby Gift Sets</a></li>
                                <li><a href="#">Children’s Formal Dress</a></li>
                                <li><a href="#">Children’s Socks</a></li>
                                <li><a href="#">Children’s Swim Suit</a></li>
                                <li><a href="#">Children Under Garments</a></li>
                                <li><a href="#">Chinese Outfits</a></li>
                                <li><a href="#">Cotton Jackets</a></li>
                                <li><a href="#">Baby Skirts Dresses</a></li>
                                <li><a href="#">Bay Sweaters</a></li>
                                <li><a href="#">Baby Shoes</a></li>
                                <li><a href="#">Baby Sports Shoes</a></li>
                                <li><a href="#">Baby Snacks</a></li>
                                <li><a href="#">Infant Formula</a></li>
                                <li><a href="#">Infant Milk Powder</a></li>
                                <li><a href="#">Maternity Supplies</a></li>
                                <li><a href="#">Stretch mark Removal</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-glasses"></i>
                                <span>Eyewear</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Sunglasses</a></li>
                                <li><a href="#">Ladies Sunglass</a></li>
                                <li><a href="#">Mens Sunglass</a></li>
                                <li><a href="#">Baby Sunglass</a></li>
                                <li><a href="#">Party Sunglass</a></li>
                                <li><a href="#">Goggles</a></li>
                                <li><a href="#">Reading Glasses</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-briefcase"></i>
                                <span>Office & School Supplies</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Water Purification Equipment</a></li>
                                <li><a href="#">Celling Fans</a></li>
                                <li><a href="#">Electric Blankets</a></li>
                                <li><a href="#">Fan</a></li>
                                <li><a href="#">Heaters</a></li>
                                <li><a href="#">Portable Air Conditioners</a></li>
                                <li><a href="#">Home Automation</a></li>
                                <li><a href="#">Led Screens</a></li>
                                <li><a href="#">Monitoring Equipment</a></li>
                                <li><a href="#">Security Inspection Device</a></li>
                                <li><a href="#">Solar Panels</a></li>
                                <li><a href="#">Voltage Converters</a></li>
                                <li><a href="#">Carpets & Rugs</a></li>
                                <li><a href="#">Curtains & Accessories</a></li>
                                <li><a href="#">Dust Protection</a></li>
                                <li><a href="#">Pillow</a></li>
                                <li><a href="#">Seat Cushions</a></li>
                                <li><a href="#">Decorative Umbrella</a></li>
                                <li><a href="#">Calculators</a></li>
                                <li><a href="#">Compasses</a></li>
                                <li><a href="#">Digital Pen Translators</a></li>
                                <li><a href="#">Electronic Dictionaries</a></li>
                                <li><a href="#">Kindles & E-Readers</a></li>
                                <li><a href="#">Lab Equipment</a></li>
                                <li><a href="#">Learning Tablets</a></li>
                                <li><a href="#">Pencil Erasers</a></li>
                                <li><a href="#">Pencil Grips</a></li>
                                <li><a href="#">Planners</a></li>
                                <li><a href="#">Tape</a></li>
                                <li><a href="#">Whiteboards</a></li>
                                <li><a href="#">Whiteboards Magnets</a></li>
                                <li><a href="#">Hole Punches</a></li>
                                <li><a href="#">Scissors & X-Acto Knives</a></li>
                                <li><a href="#">Projectors</a></li>
                                <li><a href="#">Diaries & Planners</a></li>
                                <li><a href="#">Wrapping Paper</a></li>
                                <li><a href="#">Binding Accessories</a></li>
                                <li><a href="#">Laminating Paper</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-product-hunt"></i>
                                <span>Seasonal Products</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Summer</a></li>
                                <li><a href="#">Summer Dress</a></li>
                                <li><a href="#">Ice Cream Maker</a></li>
                                <li><a href="#">Juicer</a></li>
                                <li><a href="#">Neck Fan</a></li>
                                <li><a href="#">Rainy Season</a></li>
                                <li><a href="#">Rain Coat</a></li>
                                <li><a href="#">Magic Umbrella</a></li>
                                <li><a href="#">Mosquito Killing Racket</a></li>
                                <li><a href="#">Bike Raincoat</a></li>
                                <li><a href="#">Waterproof Backpack</a></li>
                                <li><a href="#">Autumn</a></li>
                                <li><a href="#">Winter</a></li>
                                <li><a href="#">Winter Dresses</a></li>
                                <li><a href="#">Badminton</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-mobile-phone"></i>
                                <span>Phone Accessories</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Xiaomi</a></li>
                                <li><a href="#">Apple</a></li>
                                <li><a href="#">Huawei</a></li>
                                <li><a href="#">Realme</a></li>
                                <li><a href="#">One Plus</a></li>
                                <li><a href="#">Samsung</a></li>
                                <li><a href="#">Google</a></li>
                                <li><a href="#">Vivo</a></li>
                                <li><a href="#">Nokia</a></li>
                                <li><a href="#">LG</a></li>
                                <li><a href="#">Tecno</a></li>
                                <li><a href="#">HTC</a></li>
                                <li><a href="#">Motorola</a></li>
                                <li><a href="#">Asus</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-futbol-ball"></i>
                                <span>Sports & Fitness</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Snowboarding</a></li>
                                <li><a href="#">Jet Skis</a></li>
                                <li><a href="#">Swimming Gear</a></li>
                                <li><a href="#">Fishing Rods</a></li>
                                <li><a href="#">Grills & BBQ Equipment</a></li>
                                <li><a href="#">Luggage Locks</a></li>
                                <li><a href="#">Military Apparel</a></li>
                                <li><a href="#">Yoga Accessories</a></li>
                                <li><a href="#">Tents & Canopies</a></li>
                                <li><a href="#">Fitness Clothes</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-video"></i>
                                <span>Entertainment Items</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Gopro</a></li>
                                <li><a href="#">Cameras</a></li>
                                <li><a href="#">Travel</a></li>
                                <li><a href="#">Travel Bags</a></li>
                                <li><a href="#">Travel Luggage</a></li>
                                <li><a href="#">Travel Pillows</a></li>
                                <li><a href="#">4K Ultra HD TVs</a></li>
                                <li><a href="#">Beanbags & Sofa Chairs</a></li>
                                <li><a href="#">Flat TVs</a></li>
                                <li><a href="#">Movie Poster</a></li>
                                <li><a href="#">Popcorn Makers</a></li>
                                <li><a href="#">Vaping Gear</a></li>
                                <li><a href="#">Video Games</a></li>
                                <li><a href="#">Virtual Reality</a></li>
                                <li><a href="#">Nintendo Wii</a></li>
                                <li><a href="#">Bluetooth Speakers</a></li>
                                <li><a href="#">Drawing Tablet</a></li>
                                <li><a href="#">Headphones</a></li>
                                <li><a href="#">Ipad</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-briefcase-clock"></i>
                                <span>Watches</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Women’s Watch</a></li>
                                <li><a href="#">Male Watches</a></li>
                                <li><a href="#">Sports Watches</a></li>
                                <li><a href="#">Watch</a></li>
                                <li><a href="#">Smart Watches</a></li>
                                <li><a href="#">Branded Watches</a></li>
                                <li><a href="#">Gshock</a></li>
                                <li><a href="#">Apple Watch</a></li>
                                <li><a href="#">Huawei Watches</a></li>
                                <li><a href="#">Smart Fit Brand</a></li>
                                <li><a href="#">Amazefit Watches</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-car-rear"></i>
                                <span>Automobile Items</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Auto Oils & Fluids</a></li>
                                <li><a href="#">Automobile</a></li>
                                <li><a href="#">Interior Accessories</a></li>
                                <li><a href="#">Exterior Accessories</a></li>
                                <li><a href="#">Covers</a></li>
                                <li><a href="#">Exterior Vehicle Care</a></li>
                                <li><a href="#">Interior Vehicle Care</a></li>
                                <li><a href="#">Car Electronic Accessories</a></li>
                                <li><a href="#">Car Audio Accessories</a></li>
                                <li><a href="#">Motorcycle</a></li>
                                <li><a href="#">Motorcycle Riding Motorcycle</a></li>
                                <li><a href="#">Car kit</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-cat"></i>
                                <span>Groceries and Pets</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Breakfast, Choco & Snacks</a></li>
                                <li><a href="#">Beverages</a></li>
                                <li><a href="#">Food Staples</a></li>
                                <li><a href="#">Cooking Ingredients</a></li>
                                <li><a href="#">Laundry & Household</a></li>
                                <li><a href="#">Cat</a></li>
                                <li><a href="#">Cat Bag</a></li>
                                <li><a href="#">Dog</a></li>
                                <li><a href="#">Fish</a></li>
                                <li><a href="#">Bird</a></li>
                                <li><a href="#">Small Pet</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-skiing"></i>
                                <span>Outdoor & Travelling</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Fishing Reels</a></li>
                                <li><a href="#">Fishing</a></li>
                                <li><a href="#">Fishing Lines</a></li>
                                <li><a href="#">Fishing Rods</a></li>
                                <li><a href="#">Fishing Tackle Boxes</a></li>
                                <li><a href="#">Sportswear</a></li>
                                <li><a href="#">Sports Bag</a></li>
                                <li><a href="#">Sport Accessories</a></li>
                                <li><a href="#">Camping & Hiking</a></li>
                                <li><a href="#">Hunting</a></li>
                                <li><a href="#">Fitness & Bodybuilding</a></li>
                                <li><a href="#">Musical Instrument</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-headphones"></i>
                                <span>Electronic & Gadgets</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Accessories & Supplies</a></li>
                                <li><a href="#">Electronics</a></li>
                                <li><a href="#">Camera & Photo</a></li>
                                <li><a href="#">Car & Vehicle Electronics</a></li>
                                <li><a href="#">Cell Phone & Accessories</a></li>
                                <li><a href="#">Computer & Accessories</a></li>
                                <li><a href="#">GPS & Navigation</a></li>
                                <li><a href="#">Home Audio</a></li>
                                <li><a href="#">Office Electronics</a></li>
                                <li><a href="#">Portable Audio & Video</a></li>
                                <li><a href="#">Security & Surveillance</a></li>
                                <li><a href="#">Service Plans</a></li>
                                <li><a href="#">Television & Video</a></li>
                                <li><a href="#">Video game Console & Accessories</a></li>
                                <li><a href="#">Video Projectors</a></li>
                                <li><a href="#">Wearable Smart Device</a></li>
                                <li><a href="#">Ebook Readers & Accessories</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-house-chimney"></i>
                                <span>Home & Kitchen</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Medical Supplies & Equipment</a></li>
                                <li><a href="#">Household Supplies</a></li>
                                <li><a href="#">Oral Care</a></li>
                                <li><a href="#">Personal Care</a></li>
                                <li><a href="#">Sexual Wellness</a></li>
                                <li><a href="#">Health Nutrition</a></li>
                                <li><a href="#">Stationery & Gift Wrapping Supplies</a></li>
                                <li><a href="#">Vision Care</a></li>
                                <li><a href="#">Vitamins & Dietary Supplements</a></li>
                                <li><a href="#">Wellness & Relaxation</a></li>
                                <li><a href="#">Kid’s Home Store</a></li>
                                <li><a href="#">Kitchen</a></li>
                                <li><a href="#">Dining</a></li>
                                <li><a href="#">Bedding</a></li>
                                <li><a href="#">Bath</a></li>
                                <li><a href="#">Furniture</a></li>
                                <li><a href="#">Wall Art</a></li>
                            </ul>
                        </li>

                        <li>
                            <a href="javascript: void(0);" class="has-arrow waves-effect" style="font-size: 15px;font-weight: bold">
                                <i class="fa fa-toolbox"></i>
                                <span>Tools & Home Improvement</span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="#">Event & Party Supplies</a></li>
                                <li><a href="#">Heating, Cooling & Air Quality</a></li>
                                <li><a href="#">Electric Irons & Steamers</a></li>
                                <li><a href="#">Vacuum Cleaner</a></li>
                                <li><a href="#">Storage Organizer</a></li>
                                <li><a href="#">Cleaning Supplies</a></li>
                                <li><a href="#">Smart Home Appliances</a></li>
                                <li><a href="#">Building Supplies</a></li>
                                <li><a href="#">Electrical</a></li>
                                <li><a href="#">Kitchen & Bath Fixtures</a></li>
                                <li><a href="#">Light Bulbs</a></li>
                                <li><a href="#">Lighting & Celling Fans</a></li>
                                <li><a href="#">Measuring & Layout Tool</a></li>
                                <li><a href="#">Painting Supplies & Wall Treatments</a></li>
                                <li><a href="#">Power & Hand Tools</a></li>
                                <li><a href="#">Safety & Security</a></li>
                                <li><a href="#">Storage & Home Organization</a></li>
                                <li><a href="#">Welding & Soldering</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>

            </div>

            <div class="content-col">

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="assets/images/grocery/banner/11.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/grocery/banner/11.jpg" class="d-block w-100" alt="...">
                        </div>
                        <div class="carousel-item">
                            <img src="assets/images/grocery/banner/11.jpg" class="d-block w-100" alt="...">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>


                <div class="title pt-5 pb-2">
                    <h2>Top Categories</h2>
                </div>
                <div class="category-slider-2 product-wrapper no-arrow">
                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/vegetable.svg" class="blur-up lazyload" alt="">
                                <h5>Vegetables & Fruit</h5>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/cup.svg" class="blur-up lazyload" alt="">
                                <h5>Beverages</h5>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/meats.svg" class="blur-up lazyload" alt="">
                                <h5>Meats & Seafood</h5>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/breakfast.svg" class="blur-up lazyload" alt="">
                                <h5>Breakfast</h5>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/frozen.svg" class="blur-up lazyload" alt="">
                                <h5>Frozen Foods</h5>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/milk.svg" class="blur-up lazyload" alt="">
                                <h5>Milk & Dairies</h5>
                            </div>
                        </a>
                    </div>

                    <div>
                        <a href="shop-left-sidebar.html" class="category-box category-dark">
                            <div>
                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/1/pet.svg" class="blur-up lazyload" alt="">
                                <h5>Pet Food</h5>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="title d-block mt-5">
                    <div class="row">
                        <div class="col-10">
                            <h2 class="text-theme font-sm">Shoes</h2>
                        </div>
                        <div class="col-2 me-auto">
                            <a href="" class="btn theme-bg-color btn-md text-white fw-bold mend-auto">View More</a>
                        </div>
                    </div>

                    <p>All category of shoes</p>
                </div>

                <div class="section-b-space">
                    <div class="product-border border-row overflow-hidden wow fadeInUp">
                        <div class="product-box-slider no-arrow ">
                            @foreach($products as $item)
                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="{{asset($item['image'])}}" class="img-fluid blur-up lazyload" alt=""/>
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">{{$item['name']}}</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">TK. {{$item['price']}}</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>
                </div>

                <div class="section-t-space section-b-space">
                    <div class="row g-md-4 g-3">
                        <div class="col-md-6">
                            <div class="banner-contain hover-effect">
                                <img src="assets/images/vegetable/banner/9.jpg" class="bg-img blur-up lazyload"
                                     alt="">
                                <div class="banner-details p-center-left p-4">
                                    <div>
                                        <h3 class="text-exo">50% offer</h3>
                                        <h4 class="text-russo fw-normal theme-color mb-2">Testy Mushrooms</h4>
                                        <button onclick="location.href = 'shop-left-sidebar.html';"
                                                class="btn btn-animation btn-sm mend-auto">Shop Now <i
                                                class="fa-solid fa-arrow-right icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="banner-contain hover-effect">
                                <img src="assets/images/vegetable/banner/10.jpg" class="bg-img blur-up lazyload"
                                     alt="">
                                <div class="banner-details p-center-left p-4">
                                    <div>
                                        <h3 class="text-exo">50% offer</h3>
                                        <h4 class="text-russo fw-normal theme-color mb-2">Fresh MEAT</h4>
                                        <button onclick="location.href = 'shop-left-sidebar.html';"
                                                class="btn btn-animation btn-sm mend-auto">Shop Now <i
                                                class="fa-solid fa-arrow-right icon"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="title d-block mt-5">
                    <div class="row">
                        <div class="col-10">
                            <h2 class="text-theme font-sm">Bags</h2>
                        </div>
                        <div class="col-2 me-auto">
                            <a href="" class="btn theme-bg-color btn-md text-white fw-bold mend-auto">View More</a>
                        </div>
                    </div>
                    <p>All category of Bags</p>
                </div>

                <div class="section-b-space">
                    <div class="product-border border-row overflow-hidden wow fadeInUp">
                        <div class="product-box-slider no-arrow ">
                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/1.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Fantasy Crunchy Choco Chip Cookies</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/2.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Cold Brew Coffee Instant Coffee 50 g</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/3.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Peanut Butter Bite Premium Butter Cookies 600 g
                                                    </h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="label-tag">
                                                <span>NEW</span>
                                            </div>
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/4.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">SnackAmor Combo Pack of Jowar Stick and Jowar
                                                        Chips</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/5.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                                    </h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/6.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Neu Farm Unpolished Desi Toor Dal 1 kg</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="label-tag">
                                                <span>NEW</span>
                                            </div>
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/7.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">healthy Long Life Toned Milk 1 L</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/8.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Dog Treats Natural Yak Milk Bars For Small Dogs
                                                        100g</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/9.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Raw Mutton Leg, Packaging 5 Kg</h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/10.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Blended Instant Coffee 50 g Buy 1 Get 1 Free
                                                    </h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div class="row m-0">
                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/3.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Peanut Butter Bite Premium Butter Cookies 600 g
                                                    </h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12 px-0">
                                        <div class="product-box">
                                            <div class="product-image">
                                                <a href="product-left-thumbnail.html">
                                                    <img src="assets/images/vegetable/product/5.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <ul class="product-option">
                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="View">
                                                        <a href="javascript:void(0)" data-bs-toggle="modal"
                                                           data-bs-target="#view">
                                                            <i data-feather="eye"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Compare">
                                                        <a href="compare.html">
                                                            <i data-feather="refresh-cw"></i>
                                                        </a>
                                                    </li>

                                                    <li data-bs-toggle="tooltip" data-bs-placement="top"
                                                        title="Wishlist">
                                                        <a href="wishlist.html" class="notifi-wishlist">
                                                            <i data-feather="heart"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="product-detail">
                                                <a href="product-left-thumbnail.html">
                                                    <h6 class="name">Yumitos Chilli Sprinkled Potato Chips 100 g
                                                    </h6>
                                                </a>

                                                <h5 class="sold text-content">
                                                    <span class="theme-color price">$26.69</span>
                                                    <del>28.56</del>
                                                </h5>

                                                <div class="product-rating mt-sm-2 mt-1">
                                                    <ul class="rating">
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star" class="fill"></i>
                                                        </li>
                                                        <li>
                                                            <i data-feather="star"></i>
                                                        </li>
                                                    </ul>

                                                    <h6 class="theme-color">In Stock</h6>
                                                </div>

                                                <div class="add-to-cart-box mx-auto">
                                                    <a href="" class="btn btn-add-cart addcart-button text-white">Add</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="category-section-3 py-5">
                    <div class="container-fluid">
                        <div class="title">
                            <h2>Shop By Categories</h2>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="category-slider-1 arrow-slider wow fadeInUp">
                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Fashion</h4>
                                                <h6>25 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/1.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Beauty</h4>
                                                <h6>20 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/2.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Accessories</h4>
                                                <h6>14 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/3.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Health</h4>
                                                <h6>43 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/4.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Stationery</h4>
                                                <h6>23 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/5.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Baby care</h4>
                                                <h6>54 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/6.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Electronics</h4>
                                                <h6>32 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/7.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Sports</h4>
                                                <h6>29 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/8.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div class="category-box-list">
                                            <a href="shop-left-sidebar.html" class="category-name">
                                                <h4>Fashion</h4>
                                                <h6>25 items</h6>
                                            </a>
                                            <div class="category-box-view">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="assets/images/grocery/category/1.png"
                                                         class="img-fluid blur-up lazyload" alt="">
                                                </a>
                                                <button onclick="location.href = 'shop-left-sidebar.html';" class="btn shop-button">
                                                    <span>Shop Now</span>
                                                    <i class="fas fa-angle-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="newsletter-section section-b-space">
                    <div class="container-fluid">
                        <div class="newsletter-box newsletter-box-2">
                            <div class="newsletter-contain py-5">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-xxl-4 col-lg-5 col-md-7 col-sm-9 offset-xxl-2 offset-md-1">
                                            <div class="newsletter-detail">
                                                <h2>Join our newsletter and get...</h2>
                                                <h5>$20 discount for your first order</h5>
                                                <div class="input-box">
                                                    <input type="email" class="form-control" id="exampleFormControlInput1"
                                                           placeholder="Enter Your Email">
                                                    <i class="fa-solid fa-envelope arrow"></i>
                                                    <button class="sub-btn  btn-animation">
                                                        <span class="d-sm-block d-none">Subscribe</span>
                                                        <i class="fa-solid fa-arrow-right icon"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Footer Section Start -->
                <footer class="">
                    <div class="container-fluid">
                        <div class="service-section">
                            <div class="row g-3">
                                <div class="col-12">
                                    <div class="service-contain">
                                        <div class="service-box">
                                            <div class="service-image">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/product.svg" class="blur-up lazyload" alt="">
                                            </div>

                                            <div class="service-detail">
                                                <h5>Every Fresh Products</h5>
                                            </div>
                                        </div>

                                        <div class="service-box">
                                            <div class="service-image">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/delivery.svg" class="blur-up lazyload" alt="">
                                            </div>

                                            <div class="service-detail">
                                                <h5>Free Delivery For Order Over $50</h5>
                                            </div>
                                        </div>

                                        <div class="service-box">
                                            <div class="service-image">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/discount.svg" class="blur-up lazyload" alt="">
                                            </div>

                                            <div class="service-detail">
                                                <h5>Daily Mega Discounts</h5>
                                            </div>
                                        </div>

                                        <div class="service-box">
                                            <div class="service-image">
                                                <img src="https://themes.pixelstrap.com/fastkart/assets/svg/market.svg" class="blur-up lazyload" alt="">
                                            </div>

                                            <div class="service-detail">
                                                <h5>Best Price On The Market</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="main-footer section-b-space section-t-space">
                            <div class="row g-md-4 g-3">
                                <div class="col-xl-3 col-lg-4 col-sm-6">
                                    <div class="footer-logo">
                                        <div class="theme-logo">
                                            <a href="index.html">
                                                <img src="assets/images/logo/6.png" class="blur-up lazyload" alt="">
                                            </a>
                                        </div>

                                        <div class="footer-logo-contain">
                                            <p>We are a friendly bar serving a variety of cocktails, wines and beers. Our bar is a
                                                perfect place for a couple.</p>

                                            <ul class="address">
                                                <li>
                                                    <i data-feather="home"></i>
                                                    <a href="javascript:void(0)">1418 Riverwood Drive, CA 96052, US</a>
                                                </li>
                                                <li>
                                                    <i data-feather="mail"></i>
                                                    <a href="javascript:void(0)">support@fastkart.com</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div class="footer-title">
                                        <h4>Categories</h4>
                                    </div>

                                    <div class="footer-contain">
                                        <ul>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Vegetables & Fruit</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Beverages</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Meats & Seafood</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Frozen Foods</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Biscuits & Snacks</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Grocery & Staples</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-xl col-lg-2 col-sm-3">
                                    <div class="footer-title">
                                        <h4>Useful Links</h4>
                                    </div>

                                    <div class="footer-contain">
                                        <ul>
                                            <li>
                                                <a href="index.html" class="text-content">Home</a>
                                            </li>
                                            <li>
                                                <a href="shop-left-sidebar.html" class="text-content">Shop</a>
                                            </li>
                                            <li>
                                                <a href="about-us.html" class="text-content">About Us</a>
                                            </li>
                                            <li>
                                                <a href="blog-list.html" class="text-content">Blog</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html" class="text-content">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-xl-2 col-sm-3">
                                    <div class="footer-title">
                                        <h4>Help Center</h4>
                                    </div>

                                    <div class="footer-contain">
                                        <ul>
                                            <li>
                                                <a href="order-success.html" class="text-content">Your Order</a>
                                            </li>
                                            <li>
                                                <a href="user-dashboard.html" class="text-content">Your Account</a>
                                            </li>
                                            <li>
                                                <a href="order-tracking.html" class="text-content">Track Order</a>
                                            </li>
                                            <li>
                                                <a href="wishlist.html" class="text-content">Your Wishlist</a>
                                            </li>
                                            <li>
                                                <a href="search.html" class="text-content">Search</a>
                                            </li>
                                            <li>
                                                <a href="faq.html" class="text-content">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="col-xl-3 col-lg-4 col-sm-6">
                                    <div class="footer-title">
                                        <h4>Contact Us</h4>
                                    </div>

                                    <div class="footer-contact">
                                        <ul>
                                            <li>
                                                <div class="footer-number">
                                                    <i data-feather="phone"></i>
                                                    <div class="contact-number">
                                                        <h6 class="text-content">Hotline 24/7 :</h6>
                                                        <h5>+91 888 104 2340</h5>
                                                    </div>
                                                </div>
                                            </li>

                                            <li>
                                                <div class="footer-number">
                                                    <i data-feather="mail"></i>
                                                    <div class="contact-number">
                                                        <h6 class="text-content">Email Address :</h6>
                                                        <h5>fastkart@hotmail.com</h5>
                                                    </div>
                                                </div>
                                            </li>

                                            <li class="social-app ">
                                                <h5 class="mb-2 text-content">Download App :</h5>
                                                <ul>
                                                    <li class="mb-0">
                                                        <a href="https://play.google.com/store/apps" target="_blank">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/playstore.svg" class="blur-up lazyload w-100"
                                                                 alt="">
                                                        </a>
                                                    </li>
                                                    <li class="mb-0">
                                                        <a href="https://www.apple.com/in/app-store/" target="_blank">
                                                            <img src="https://themes.pixelstrap.com/fastkart/assets/images/appstore.svg" class="blur-up lazyload w-100"
                                                                 alt="">
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="sub-footer section-small-space pb-5">
                            <div class="reserve">
                                <h6 class="text-content">©2022 WholesaleChinaToBd All rights reserved</h6>
                            </div>

                            <div class="payment">
                                <img src="assets/images/payment/1.png" class="blur-up lazyload" alt="">
                            </div>

                            <div class="social-link">
                                <h6 class="text-content">Stay connected :</h6>
                                <ul>
                                    <li>
                                        <a href="https://www.facebook.com/" target="_blank">
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/" target="_blank">
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.instagram.com/" target="_blank">
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://in.pinterest.com/" target="_blank">
                                            <i class="fa-brands fa-pinterest-p"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </footer>
                <!-- Footer Section End -->
            </div>
        </div>
    </div>
</section>
<!-- Product Section End -->

<!--    &lt;!&ndash; Footer Section Start &ndash;&gt;-->
<!--    <footer class="footer-sm">-->
<!--        <div class="container-fluid-xs">-->
<!--            <div class="sub-footer">-->
<!--                <div class="reserve">-->
<!--                    <h6 class="text-content">©2022 Fastkart All rights reserved</h6>-->
<!--                </div>-->

<!--                <div class="payment">-->
<!--                    <img src="{{asset('/')}}website/assets/images/payment/1.png" class="blur-up lazyload" alt="">-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </footer>-->
<!--    &lt;!&ndash; Footer Section End &ndash;&gt;-->

<!-- Quick View Modal Box Start -->
<div class="modal fade theme-modal view-modal" id="view" tabindex="-1" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-xl modal-fullscreen-sm-down">
        <div class="modal-content">
            <div class="modal-header p-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="row g-sm-4 g-2">
                    <div class="col-lg-6">
                        <div class="slider-image">
                            <img src="{{asset('/')}}website/assets/images/product/category/1.jpg" class="img-fluid blur-up lazyload"
                                 alt="">
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="right-sidebar-modal">
                            <h4 class="title-name">Peanut Butter Bite Premium Butter Cookies 600 g</h4>
                            <h4 class="price">$36.99</h4>
                            <div class="product-rating">
                                <ul class="rating">
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star" class="fill"></i>
                                    </li>
                                    <li>
                                        <i data-feather="star"></i>
                                    </li>
                                </ul>
                                <span class="ms-2">8 Reviews</span>
                                <span class="ms-2 text-danger">6 sold in last 16 hours</span>
                            </div>

                            <div class="product-detail">
                                <h4>Product Details :</h4>
                                <p>Candy canes sugar plum tart cotton candy chupa chups sugar plum chocolate I love.
                                    Caramels marshmallow icing dessert candy canes I love soufflé I love toffee.
                                    Marshmallow pie sweet sweet roll sesame snaps tiramisu jelly bear claw. Bonbon
                                    muffin I love carrot cake sugar plum dessert bonbon.</p>
                            </div>

                            <ul class="brand-list">
                                <li>
                                    <div class="brand-box">
                                        <h5>Brand Name:</h5>
                                        <h6>Black Forest</h6>
                                    </div>
                                </li>

                                <li>
                                    <div class="brand-box">
                                        <h5>Product Code:</h5>
                                        <h6>W0690034</h6>
                                    </div>
                                </li>

                                <li>
                                    <div class="brand-box">
                                        <h5>Product Type:</h5>
                                        <h6>White Cream Cake</h6>
                                    </div>
                                </li>
                            </ul>

                            <div class="select-size">
                                <h4>Cake Size :</h4>
                                <select class="form-select select-form-size">
                                    <option selected>Select Size</option>
                                    <option value="1.2">1/2 KG</option>
                                    <option value="0">1 KG</option>
                                    <option value="1.5">1/5 KG</option>
                                    <option value="red">Red Roses</option>
                                    <option value="pink">With Pink Roses</option>
                                </select>
                            </div>

                            <div class="modal-button">
                                <button onclick="location.href = 'cart.html';"
                                        class="btn btn-md add-cart-button icon">Add
                                    To Cart</button>
                                <button onclick="location.href = 'product-left.html';"
                                        class="btn theme-bg-color view-button icon text-white fw-bold btn-md">
                                    View More Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Quick View Modal Box End -->

<!-- Location Modal Start -->
<div class="modal location-modal fade theme-modal" id="locationModal" tabindex="-1"
     aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Choose your Delivery Location</h5>
                <p class="mt-1 text-content">Enter your address and we will specify the offer for your area.</p>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="location-list">
                    <div class="search-input">
                        <input type="search" class="form-control" placeholder="Search Your Area">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>

                    <div class="disabled-box">
                        <h6>Select a Location</h6>
                    </div>

                    <ul class="location-select custom-height">
                        <li>
                            <a href="javascript:void(0)">
                                <h6>Alabama</h6>
                                <span>Min: $130</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Arizona</h6>
                                <span>Min: $150</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>California</h6>
                                <span>Min: $110</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Colorado</h6>
                                <span>Min: $140</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Florida</h6>
                                <span>Min: $160</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Georgia</h6>
                                <span>Min: $120</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Kansas</h6>
                                <span>Min: $170</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Minnesota</h6>
                                <span>Min: $120</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>New York</h6>
                                <span>Min: $110</span>
                            </a>
                        </li>

                        <li>
                            <a href="javascript:void(0)">
                                <h6>Washington</h6>
                                <span>Min: $130</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Location Modal End -->

<!-- Cookie Bar Box Start -->
<div class="cookie-bar-box">
    <div class="cookie-box">
        <div class="cookie-image">
            <img src="{{asset('/')}}website/assets/images/cookie-bar.png" class="blur-up lazyload" alt="">
            <h2>Cookies!</h2>
        </div>

        <div class="cookie-contain">
            <h5 class="text-content">We use cookies to make your experience better</h5>
        </div>
    </div>

    <div class="button-group">
        <button class="btn privacy-button">Privacy Policy</button>
        <button class="btn ok-button">OK</button>
    </div>
</div>
<!-- Cookie Bar Box End -->

<!-- Deal Box Modal Start -->
<div class="modal fade theme-modal deal-modal" id="deal-box" tabindex="-1" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
        <div class="modal-content">
            <div class="modal-header">
                <div>
                    <h5 class="modal-title w-100" id="deal_today">Deal Today</h5>
                    <p class="mt-1 text-content">Recommended deals for you.</p>
                </div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class="modal-body">
                <div class="deal-offer-box">
                    <ul class="deal-offer-list">
                        <li class="list-1">
                            <div class="deal-offer-contain">
                                <a href="shop-left-sidebar.html" class="deal-image">
                                    <img src="{{asset('/')}}website/assets/images/vegetable/product/10.png" class="blur-up lazyload"
                                         alt="">
                                </a>

                                <a href="shop-left-sidebar.html" class="deal-contain">
                                    <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                    <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                </a>
                            </div>
                        </li>

                        <li class="list-2">
                            <div class="deal-offer-contain">
                                <a href="shop-left-sidebar.html" class="deal-image">
                                    <img src="{{asset('/')}}website/assets/images/vegetable/product/11.png" class="blur-up lazyload"
                                         alt="">
                                </a>

                                <a href="shop-left-sidebar.html" class="deal-contain">
                                    <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                    <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                </a>
                            </div>
                        </li>

                        <li class="list-3">
                            <div class="deal-offer-contain">
                                <a href="shop-left-sidebar.html" class="deal-image">
                                    <img src="{{asset('/')}}website/assets/images/vegetable/product/12.png" class="blur-up lazyload"
                                         alt="">
                                </a>

                                <a href="shop-left-sidebar.html" class="deal-contain">
                                    <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                    <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                </a>
                            </div>
                        </li>

                        <li class="list-1">
                            <div class="deal-offer-contain">
                                <a href="shop-left-sidebar.html" class="deal-image">
                                    <img src="{{asset('/')}}website/assets/images/vegetable/product/13.png" class="blur-up lazyload"
                                         alt="">
                                </a>

                                <a href="shop-left-sidebar.html" class="deal-contain">
                                    <h5>Blended Instant Coffee 50 g Buy 1 Get 1 Free</h5>
                                    <h6>$52.57 <del>57.62</del> <span>500 G</span></h6>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Deal Box Modal End -->

<!-- Tap to top start -->
<div class="theme-option">
    <div class="back-to-top">
        <a id="back-to-top" href="#">
            <i class="fas fa-chevron-up"></i>
        </a>
    </div>
</div>
<!-- Tap to top end -->

<!-- Bg overlay Start -->
<div class="bg-overlay"></div>
<!-- Bg overlay End -->

<!-- latest jquery-->
<script src="{{asset('/')}}website/assets/js/jquery-3.6.0.min.js"></script>

<!-- jquery ui-->
<script src="{{asset('/')}}website/assets/js/jquery-ui.min.js"></script>

<!-- Bootstrap js-->
<script src="{{asset('/')}}website/assets/js/bootstrap/bootstrap.bundle.min.js"></script>
<script src="{{asset('/')}}website/assets/js/bootstrap/bootstrap-notify.min.js"></script>
<script src="{{asset('/')}}website/assets/js/bootstrap/popper.min.js"></script>

<!-- feather icon js-->
<script src="{{asset('/')}}website/assets/js/feather/feather.min.js"></script>
<script src="{{asset('/')}}website/assets/js/feather/feather-icon.js"></script>

<!-- Lazyload Js -->
<script src="{{asset('/')}}website/assets/js/lazysizes.min.js"></script>

<!-- Slick js-->
<script src="{{asset('/')}}website/assets/js/slick/slick.js"></script>
<script src="{{asset('/')}}website/assets/js/slick/slick-animation.min.js"></script>
<script src="{{asset('/')}}website/assets/js/slick/custom_slick.js"></script>

<!-- Auto Height Js -->
<script src="{{asset('/')}}website/assets/js/auto-height.js"></script>

<!-- Fly Cart Js -->
<script src="{{asset('/')}}website/assets/js/fly-cart.js"></script>

<!-- Quantity js -->
<script src="{{asset('/')}}website/assets/js/quantity-2.js"></script>

<!-- WOW js -->
<script src="{{asset('/')}}website/assets/js/wow.min.js"></script>
<script src="{{asset('/')}}website/assets/js/custom-wow.js"></script>

<!-- script js -->
<script src="{{asset('/')}}website/assets/js/script.js"></script>

<!-- thme setting js -->
<script src="{{asset('/')}}website/assets/js/theme-setting.js"></script>


<!-- JAVASCRIPT -------------->
<script src="{{asset('/')}}website/assets/libs/jquery/jquery.min.js"></script>
<script src="{{asset('/')}}website/assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="{{asset('/')}}website/assets/libs/metismenu/metisMenu.min.js"></script>
<script src="{{asset('/')}}website/assets/libs/simplebar/simplebar.min.js"></script>
<script src="{{asset('/')}}website/assets/libs/node-waves/waves.min.js"></script>

<!-- apexcharts -->
<script src="{{asset('/')}}website/assets/libs/apexcharts/apexcharts.min.js"></script>

<script src="{{asset('/')}}website/assets/js/pages/dashboard.init.js"></script>

<!-- App js -->
<script src="{{asset('/')}}website/assets/js/app.js"></script>
</body>

</html>
