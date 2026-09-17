$(document).ready(function() {
    $('a.abstract').click(function() {
        $(this).parent().parent().parent().find(".abstract.hidden").toggleClass("open");
        $(this).parent().parent().parent().find(".bibtex.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".codenote.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".press.hidden.open").toggleClass("open");
    });
    $('a.bibtex').click(function() {
        $(this).parent().parent().parent().find(".bibtex.hidden").toggleClass("open");
        $(this).parent().parent().parent().find(".abstract.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".codenote.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".press.hidden.open").toggleClass("open");
    });
    $('a.codenote').click(function() {
        $(this).parent().parent().parent().find(".codenote.hidden").toggleClass("open");
        $(this).parent().parent().parent().find(".abstract.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".bibtex.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".press.hidden.open").toggleClass("open");
    });
    $('a.press').click(function() {
        $(this).parent().parent().parent().find(".press.hidden").toggleClass("open");
        $(this).parent().parent().parent().find(".abstract.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".bibtex.hidden.open").toggleClass("open");
        $(this).parent().parent().parent().find(".codenote.hidden.open").toggleClass("open");
    });
    $('.navbar-nav').find('a').removeClass('waves-effect waves-light');
});


// bootstrap-toc
$(function () {
    if($('#toc-sidebar').length){
        var navSelector = "#toc-sidebar";
        var $myNav = $(navSelector);
        Toc.init($myNav);
        $("body").scrollspy({
            target: navSelector,
        });
    }
});
