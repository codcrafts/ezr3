// START:: LOADER
(function ($) {
    "use strict";
    //Preloader
    window.addEventListener('load', function () {
        var preloadpage = document.getElementById("page_loader");
        preloadpage.style.display = "none";
    });

})(jQuery);
// END:: LOADER

// START:: HEADER FIXED
$(function () {
    var pageScroll = 100;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= pageScroll) {
            $('header').addClass('scroll-effect');
        }
        else {
            $('header').removeClass('scroll-effect');
        }
    });

    function getCurrentScroll() {
        return window.pageYOffset || document.documentElement.scrollTop;
    }
});
// END:: HEADER FIXED

// START:: SERVICES SLIDER
$('#products_slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
    margin: 15,
    rtl: true,
    items: 4,
    dots: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        }
    }
});

$('#service_slider').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 8000,
    loop: true,
    margin: 15,
    rtl: true,
    items: 3,
    dots: true,
    nav: true,
    navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 3,
        }
    }
});

// END:: SERVICES SLIDER


// START:: UPLOAD IMAGE
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
}

// START:: MAP
function initAutocomplete() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -33.8688, lng: 151.2195 },
        zoom: 13,
        mapTypeId: "roadmap",
    });
    // Create the search box and link it to the UI element.
    const input = document.getElementById("pac-input");
    const searchBox = new google.maps.places.SearchBox(input);

    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener("bounds_changed", () => {
        searchBox.setBounds(map.getBounds());
    });

    let markers = [];

    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }

        // Clear out the old markers.
        markers.forEach((marker) => {
            marker.setMap(null);
        });
        markers = [];

        // For each place, get the icon, name and location.
        const bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
            if (!place.geometry || !place.geometry.location) {
                console.log("Returned place contains no geometry");
                return;
            }

            const icon = {
                url: place.icon,
                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25),
            };

            // Create a marker for each place.
            markers.push(
                new google.maps.Marker({
                    map,
                    icon,
                    title: place.name,
                    position: place.geometry.location,
                })
            );
            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
    });
}




// START:: SIDE MENU
$("header .btn-side").click(function () {
    $("header .col-lg-8").addClass("showSideMenu");
    $("header .overLay_side_menu").addClass("showSideMenuOverLay");
    $("body").css("overflow", "hidden");
});
$("header .overLay_side_menu").click(function () {
    $("header .col-lg-8").removeClass("showSideMenu");
    $(this).removeClass("showSideMenuOverLay");
    $("body").css("overflow-y", "scroll");
});
// END:: SIDE MENU

// START:: WOW ANIMATION
new WOW().init();
// END:: WOW ANIMATION