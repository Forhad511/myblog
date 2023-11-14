<!-- JQUERY JS -->
<script src="{{asset('/')}}bakend/plugins/jquery/jquery.min.js"></script>
<!-- BOOTSTRAP JS -->
<script src="{{asset('/')}}bakend/plugins/bootstrap/js/popper.min.js"></script>
<script src="{{asset('/')}}bakend/plugins/bootstrap/js/bootstrap.min.js"></script>
<!-- SIDE-MENU JS -->
<script src="{{asset('/')}}bakend/plugins/sidemenu/sidemenu.js"></script>
<!-- Perfect SCROLLBAR JS-->
<script src="{{asset('/')}}bakend/plugins/p-scroll/perfect-scrollbar.js"></script>
<script src="{{asset('/')}}bakend/plugins/p-scroll/pscroll.js"></script>
<!-- STICKY JS -->
<script src="{{asset('/')}}bakend/js/sticky.js"></script>
<!-- APEXCHART JS -->
<script src="{{asset('/')}}bakend/js/apexcharts.js"></script>
<!-- INTERNAL SELECT2 JS -->
<script src="{{asset('/')}}bakend/plugins/select2/select2.full.min.js"></script>
<!-- CHART-CIRCLE JS-->
<script src="{{asset('/')}}bakend/plugins/circle-progress/circle-progress.min.js"></script>
<!-- INTERNAL DATA-TABLES JS-->
<script src="{{asset('/')}}bakend/plugins/datatable/js/jquery.dataTables.min.js"></script>
<script src="{{asset('/')}}bakend/plugins/datatable/js/dataTables.bootstrap5.js"></script>
<script src="{{asset('/')}}bakend/plugins/datatable/dataTables.responsive.min.js"></script>
<!-- INDEX JS -->
<script src="{{asset('/')}}bakend/js/index1.js"></script>
<script src="{{asset('/')}}bakend/js/index.js"></script>
<!-- Reply JS-->
<script src="{{asset('/')}}bakend/js/reply.js"></script>
<!-- COLOR THEME JS -->
<script src="{{asset('/')}}bakend/js/themeColors.js"></script>
<!-- CUSTOM JS -->
<script src="{{asset('/')}}bakend/js/custom.js"></script>
<!-- SWITCHER JS -->
<script src="{{asset('/')}}bakend/switcher/js/switcher.js"></script>
<!-- INTERNAL Summernote Editor js -->
<script src="{{asset('/')}}bakend/plugins/summernote-editor/summernote1.js"></script>
<script src="{{asset('/')}}bakend/js/summernote.js"></script>

<!-- toastr Script -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/toastr.min.js" integrity="sha512-VEd+nq25CkR676O+pLBnDW09R7VQX9Mdiij052gVCp5yVH3jGtH70Ho/UUv4mJDsEdTvqRCFZg0NKGiojGnUCw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>


@if(Session::has('message'))
    <script>
        toastr.success("{{Session::get('message')}}");
    </script>
@endif
@if(Session::has('error'))
    <script>
        toastr.error("{{Session::get('error')}}");
    </script>
@endif


<!--Internal Fileuploads js-->
<script src="{{asset('/')}}bakend/plugins/fileuploads/js/fileupload.js"></script>
<script src="{{asset('/')}}bakend/plugins/fileuploads/js/file-upload.js"></script>

<!--Internal Fancy uploader js-->
<script src="{{asset('/')}}bakend/plugins/fancyuploder/jquery.ui.widget.js"></script>
<script src="{{asset('/')}}bakend/plugins/fancyuploder/jquery.fileupload.js"></script>
<script src="{{asset('/')}}bakend/plugins/fancyuploder/jquery.iframe-transport.js"></script>
<script src="{{asset('/')}}bakend/plugins/fancyuploder/jquery.fancy-fileupload.js"></script>
<script src="{{asset('/')}}bakend/plugins/fancyuploder/fancy-uploader.js"></script>
