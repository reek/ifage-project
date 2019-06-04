$(function () {

    /* handle scroll solf */
    $('a[href^="#"]').click(function (event) {
        event.preventDefault();
        var target = this.hash;
        var navbarHeight = $("#navbar").outerHeight();
        var factor = ($("#navbar").css("position") != "fixed") ? 2 : 1;

        // hide navbar menu with timeout after click
        $("#navbar-menu-switch").delay(500).queue(function (next) {
            $(this).prop('checked', false);
            next();
        });

        // do scroll soft
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top - (navbarHeight * factor)
        }, {
            duration: 1000,
            easing: "easeOutElastic"
        });
    });



    /* handle navbar and scrolltop button */
    $(window).scroll(function () {

        var scrollTop = $(window).scrollTop();
        var documentHeight = $(document).outerHeight();
        var windowHeight = $(window).outerHeight();
        var footerHeight = $("#footer").outerHeight();
        var headerHeight = $("#header").outerHeight();
        var navbarHeight = $("#navbar").outerHeight();
        var button = $("#scrolltop")[0].getBoundingClientRect();
        //console.log(scrollTop, button.height, scrollTop + windowHeight - 68)

        // scrolltop button
        if (scrollTop > 1) {
            // switch colors on footer
            if (scrollTop > documentHeight - windowHeight - footerHeight / 2) {
                $("#scrolltop").css({
                    position: "static",
                    backgroundColor: "white",
                    color: "#a90e79"
                });
            } else { // show
                $("#scrolltop").css({
                    position: "absolute",
                    color: "white",
                    backgroundColor: "#a90e79",
                    opacity: 1,
                    transform: "scaleY(1)"
                }).stop().animate({
                    top: scrollTop + windowHeight - 68
                }, "fast")
            }
        } else { // hide
            $("#scrolltop").css({
                opacity: 0,
                transform: "scaleY(0)"
            });
        }

        /* navbar */
        $navbar = $("#navbar");
        if (scrollTop > 1) {
            if ($navbar.css("position") != "fixed") {
                $navbar.css({
                    position: "fixed",
                    top: -400,
                    opacity: 0
                }).filter(':not(:animated)').animate({
                    opacity: 1,
                    top: 0
                });
            }
        } else {
            $navbar.filter(':not(:animated)').animate({
                top: -400
            }, function () {
                $(this).css({
                    position: "static",
                    top: 0
                })
            });

        }
    });



    /* add workers data with ajax */
    $.getJSON("data/workers.json", function (data) {
        $.each(data.reverse(), function (index, item) {
            var html = '<div class="worker animated bounceIn">' +
                '<div class="photo" style="background-image: url(' + item.photo + ')"></div>' +
                '<h3 class="name">' + item.name + '</h3>' +
                '<div class="job">' + item.job + '</div>' +
                '<div class="description">' + item.description + '</div></div>';
            $("#team .content").prepend(html);
        });
    });



    /* add pictures with picsum API */
    var html,
        url,
        width = $(window).width(),
        height = Math.ceil(width * (9 / 16)),
        i = 1,
        max = 12;
    while (i <= max) {
        url = "https://picsum.photos/" + width + "/" + height + "/?random&" + i;
        $("#gallery .content").prepend($("<a></a>").attr({
            class: "picture animated zoomIn",
            href: url,
            style: "background-image: url(" + url + ")"
        }));
        i++;
    }


    /* my slideshow */
    $(function () {

        $("#gallery a.picture").click(function (event) {
            event.preventDefault();

            $("#slideshow").show();
            $("#slideshow img").attr("src", this.href);
            $("#slideshow img").data("index", $(this).index());
        });

        $("#slideshow #next, #slideshow #prev").click(function (event) {
            var id = event.target.id;
            var length = $("#gallery a.picture").length - 1;
            var index = $("#slideshow img").data("index");
            if (id == "next") {
                index = (index == length) ? 0 : index + 1;
            } else {
                index = (index == 0) ? length : index - 1;
            }
            var url = $("#gallery a.picture").get(index).href;

            $("#slideshow img").attr("src", url);
            $("#slideshow img").data("index", index);
        });

        $("#slideshow #close").click(function () {
            $("#slideshow").hide();
        });

    });

});