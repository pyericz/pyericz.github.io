document.addEventListener("DOMContentLoaded",function(){
    var h=function(a){
        var href = a.getAttribute("href");
        var index = href.indexOf('#');
        var tag = href.substr(index);
        var top = $(tag).offset().top - 62;
        $("html, body").animate({ scrollTop: top }, {duration: 300, easing: "easeOutSine"});

    },f=document.querySelectorAll("a.scroll");

    var uri = document.baseURI;
    (function b(c,d){
        var e=c.item(d);
        var href = e.getAttribute("href");
        if (href && uri.indexOf(href) != -1) {
            h(e);
        }
        e.addEventListener("click",function(b){
            var href0 = uri;
            var href1 = b.currentTarget.href;

            var index0 = href0.indexOf('#');
            var index1 = href1.indexOf('#');

            if (index0 != -1) {
                href0 = href1.substr(0, index0);
            }

            if (index1 != -1) {
                href1 = href1.substr(0, index1);
            }

            if (href0 == href1) {
                b.preventDefault();
                h(e);
            }
        });
        if(d)
            return b(c,d-1);
        else
            return 0;
    })(f,f.length-1);
});