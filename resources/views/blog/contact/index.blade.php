@extends('blog.master')

@section('title')
    Contact|Page
@endsection

@section('body')

    <section class="banner-area relative">
        <div class="overlay overlay-bg"></div>
        <div class="banner-content text-center">
            <h1>Contact Us</h1>
            <p>
                Elementum libero hac leo integer. Risus hac parturient feugiat litora
                <br/>
                cursus hendrerit bibendum per
            </p>
        </div>
    </section>


    <section class="contact-page-area section-gap">
        <div class="container">
            <div class="row">
                <div class="map-wrap" id="contactMap">

                </div>
                <div class="col-lg-4 d-flex flex-column address-wrap">
                    <div class="single-contact-address d-flex flex-row">
                        <div class="icon"><span class="lnr lnr-home"></span></div>
                        <div class="contact-details">
                            <h5>Suite #201 (2nd floor) Navana-DH Tower,</h5>
                            <p> Plot-6, Panthapath Lane, Karwan Bazar Dhaka-1215</p>
                        </div>
                    </div>
                    <div class="single-contact-address d-flex flex-row">
                        <div class="icon">
                            <span class="lnr lnr-phone-handset"></span>
                        </div>
                        <div class="contact-details">
                            <h5>+880255013401-3</h5>
                            <h5>+88-02-911 3657-8</h5>
                            <p>Mon to Fri 9am to 6 pm</p>
                        </div>
                    </div>
                    <div class="single-contact-address d-flex flex-row">
                        <div class="icon"><span class="lnr lnr-envelope"></span></div>
                        <div class="contact-details">
                            <h5><a href="https://hossainsoft.xyz/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="15666065657a676155767a797a67797c773b767a78">[email&#160;protected]</a></h5>
                            <p>Send us your query anytime!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-8">
                    <form class="form-area contact-form text-right" id="myForm" action="https://preview.colorlib.com/theme/revive/mail.php" method="post">
                        <div class="row">
                            <div class="col-lg-6 form-group">
                                <input name="name" placeholder="Enter your name" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" class="common-input mb-20 form-control" required type="text" />
                                <input name="email" placeholder="Enter email address" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" class="common-input mb-20 form-control" required type="email" />
                                <input name="subject" placeholder="Enter subject" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter subject'" class="common-input mb-20 form-control" required type="text" />
                            </div>
                            <div class="col-lg-6 form-group">
                                <textarea class="common-textarea form-control" name="message" placeholder="Enter Messege" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Messege'" required></textarea>
                            </div>
                            <div class="col-lg-12">
                                <div class="alert-msg" style="text-align: left;"></div>
                                <button class="primary-btn text-uppercase" style="float: right;">
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

@endsection
