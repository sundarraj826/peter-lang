(function($){
    $(window).on("load",function(){
        /* Page Scroll to id fn call */
        $("#navigation-menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id({
            highlightSelector:"#navigation-menu a",
            offset: 50,
        });
    });
})(jQuery);

//upload table script
$(document).ready(function() {
    $('#peter-lang-table').DataTable({
        "paging": false,
        "info": false,
        "searching": false
    });
} );