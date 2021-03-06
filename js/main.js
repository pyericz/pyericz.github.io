/**
 * some JavaScript code for this blog theme
 */
/* jshint asi:true */

/////////////////////////header////////////////////////////
/**
 * clickMenu
 */
(function() {
    var menuBtn = document.querySelector('#headerMenu');
    var nav = document.querySelector('#headerNav');
    menuBtn.onclick = function(e) {
        e.stopPropagation();
        if (menuBtn.classList.contains('active')) {
            menuBtn.classList.remove('active');
            nav.classList.remove('nav-show');
        } else {
            nav.classList.add('nav-show');
            menuBtn.classList.add('active');
        }
    };

    document.querySelector('body').addEventListener('click', function() {
        nav.classList.remove('nav-show');
        menuBtn.classList.remove('active');
    });
}());


//////////////////////////back to top////////////////////////////
(function() {
    var backToTop = document.querySelector('.back-to-top');
    var backToTopA = document.querySelector('.back-to-top a');
    var menuBtn = document.querySelector('#headerMenu');
    var nav = document.querySelector('#headerNav');
        // console.log(backToTop);
    window.addEventListener('scroll',function () {
        // if (menuBtn.classList.contains('active')) {
        //     menuBtn.classList.remove('active')
        //     nav.classList.remove('nav-show')
        // }

        // 页面顶部滚进去的距离
        var scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);

        if (scrollTop > 200) {
            backToTop.classList.add('back-to-top-show');
        } else {
            backToTop.classList.remove('back-to-top-show');
        }
    });
    // $("a[href='#top']").click(function() {
    //     $("html, body").animate({ scrollTop: 0 }, "slow");
    //     return false;
    // });
    backToTopA.addEventListener('click',function (e) {
        e.preventDefault();
        // window.scrollTo(0,0)
        $("html, body").animate({ scrollTop: 0 }, {duration: 400, easing: "easeOutSine"});
    });
}());

(function() {
    var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

    if (window.innerWidth <= 770 && touch) { // remove all :hover stylesheets
        try { // prevent exception on browsers not supporting DOM styleSheets properly
            for (var si in document.styleSheets) {
                var styleSheet = document.styleSheets[si];
                if (!styleSheet.rules) continue;

                for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                    if (!styleSheet.rules[ri].selectorText) continue;

                    if (styleSheet.rules[ri].selectorText.match(':hover')) {
                        styleSheet.deleteRule(ri);
                    }
                }
            }
        } catch (ex) {}
    }
}());


(function() {
    function addLink(event) {
        var source = "\n\n原文链接：" + document.location.href;
        var copyright = "\n版权声明：" + document.querySelector("meta[name='copyright-notice']").getAttribute("content");;
        var copytext = window.getSelection() + source + copyright;
        var clipboardData = event.clipboardData || window.clipboardData || event.originalEvent.clipboardData;
        if (clipboardData) {
            clipboardData.setData("text/plain", copytext);
        }
        event.preventDefault();
    }

    document.addEventListener('copy', addLink);
}());

$.fn.tagcloud.defaults = {
    size: {start: 12, end: 24, unit: 'px'},
    color: {start: '#3498DB', end: '#4B4943'}
};
$(function () {
    $('#tagcloud a').tagcloud();
});
