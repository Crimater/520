!function(a){"use strict";a(window).on("load",function(){a(".loader-inner").fadeOut(),a(".loader").delay(200).fadeOut("slow")});var b=a(".header"),c=b.offset();a(window).scroll(function(){a(this).scrollTop()>c.top+500&&b.hasClass("default")?b.fadeOut("fast",function(){a(this).removeClass("default").addClass("switched-header").fadeIn(200)}):a(this).scrollTop()<=c.top+500&&b.hasClass("switched-header")&&b.fadeOut("fast",function(){a(this).removeClass("switched-header").addClass("default").fadeIn(100)})}),a("a.scroll").smoothScroll({speed:800,offset:-60});var d=a(".mobile-but"),e=a(".main-nav ul");e.height();a(d).on("click",function(){return a(".toggle-mobile-but").toggleClass("active"),e.slideToggle(),a(".main-nav li a").addClass("mobile"),!1}),a(window).resize(function(){a(window).width()>320&&e.is(":hidden")&&(e.removeAttr("style"),a(".main-nav li a").removeClass("mobile"))}),a(".main-nav li a").click(function(){a(this).hasClass("mobile")&&(e.slideToggle(),a(".toggle-mobile-but").toggleClass("active"))});for(var g=0;g<a(".background-img").length;g++){var h=a(".background-img").eq(g).children("img").attr("src");a(".background-img").eq(g).css("background",'url("'+h+'")'),a(".background-img").eq(g).children("img").hide(),a(".background-img").eq(g).css("background-position","initial")}a(".countdown").countdown("2017/6/10",function(b){a(this).html(b.strftime("%D days %H:%M:%S"))}),a(".venobox").venobox({titleattr:"data-title",numeratio:!0})}(jQuery);
// 页面滚动进度条功能
(function() {
    // 创建进度条元素
    var progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    var progressContainer = document.createElement('div');
    progressContainer.className = 'progress-container';
    progressContainer.appendChild(progressBar);
    
    // 插入到页面最前面
    document.body.insertBefore(progressContainer, document.body.firstChild);

    function updateProgressBar() {
        var windowHeight = window.innerHeight;
        var documentHeight = document.documentElement.scrollHeight - windowHeight;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var progress = (scrollTop / documentHeight) * 100;
        
        progressBar.style.width = progress + '%';
    }

    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);
    updateProgressBar(); // 初始化
})();