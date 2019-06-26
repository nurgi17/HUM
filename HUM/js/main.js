$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    //mobile nav
    $("#menu-bar").click(function () {
        var icon = $("#menu-bar i");
        if (icon.hasClass("fas fa-bars")) {
            icon.removeClass("fas fa-bars");
            icon.addClass("fas fa-times");
            $("nav").animate({ height: "200px" }, 300);
        } else {
            icon.removeClass("fas fa-times");
            icon.addClass("fas fa-bars");
            $("nav").animate({ height: "70px" }, 300);
        }
        $("#main-nav").slideToggle(300);
    });
});

//fas fa-times  //fas fa-bars