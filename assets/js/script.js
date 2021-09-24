// ..................... MenuBar 
// ..................... Create the selectores
let menuToggle = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav');
let navLeft = document.querySelector('.nav-left');
let navRight = document.querySelector('.nav-right');
let navLinks = Array.from(document.querySelectorAll('.nav-link'));
let contact = document.querySelector('.contact');
let logo = document.querySelector('.logo');


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
    navRight.classList.toggle('active');
    navLeft.classList.toggle('active');
    logo.classList.toggle('active');

    contact.classList.remove('active');
    navRight.classList.remove('active');

    if (menuToggle.classList.contains('active')) {
        setTimeout(() => {
            navRight.classList.add('active');
        }, 100);

        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].classList.remove('active');
            setTimeout(() => {
                navLinks[i].classList.add('active');
            }, i * 100);
        }
        setTimeout(() => {
            contact.classList.add('active');
        }, 700);
    }
});

// ..................... Expanding Testimonial cards 
const testimonials = document.querySelectorAll('.testimonial');

// ..................... Add an event listener  
testimonials.forEach((testimonial) => {
    testimonial.addEventListener('click', () => {
        removeActiveClasses(testimonial);
        testimonial.classList.toggle('active');
    });
});

function removeActiveClasses(currentTestimonial) {
    testimonials.forEach(testimonial => {
        if (currentTestimonial !== testimonial) {
            testimonial.classList.remove('active');
        }
    });
}


// Create selectors 
let exportedMarkers = [];
let openedInfoWindow = null;

// ..................... Add a map
function initMap() {
    // New options
    var options = {
        zoom: 5,
        center: {
            lat: 54.966667,
            lng: -1.600000
        }
    };
    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Array of markers 
    var markers = [{
            coords: {
                lat: 50.503632,
                lng: -4.652498
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Watergate Bay Hotel, Newquay, Cornwall</h6>'
        },
        {
            coords: {
                lat: 50.716667,
                lng: -3.716667
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Longlands, Devon</h6>'
        },
        {
            coords: {
                lat: 54.966667,
                lng: -1.600000
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Nether Grange, Alnmouth, Northumberland</h6>'
        },
        {
            coords: {
                lat: 50.711163,
                lng: -2.441181
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Urban Beach Hotel, Bournmouth, Dorset</h6>'
        },
        {
            coords: {
                lat: 50.66667,
                lng: -1.33333
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Skyros Retreat, Shanklin, Isle of Wight</h6>'
        },
        {
            coords: {
                lat: 51.380001,
                lng: -2.360000
            },
            content: '<h6>Our Retreat at 42 Acres, Frome, Somerset</h6>'
        },
        {
            coords: {
                lat: 54.07369,
                lng: -0.95032
            },
            content: '<h6>The tree, North Yorkshire</h6>'
        },
        {
            coords: {
                lat: 51.481583,
                lng: -3.179090
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Yoga Satsanga Ashram, Carmarthenshire, Wales</h6>'
        },
        {
            coords: {
                lat: 56.622777777778,
                lng: -6.0722222222222
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Ecoyoga, Argyll, Scotland</h6>'
        },
        {
            coords: {
                lat: 54.350155,
                lng: -7.637558
            },
            iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
            content: '<h6>Lake Isle Retreats, Enniskillen, Northen Ireland</h6>'
        }
    ];
    // Loop through the markers 
    for (var i = 0; i < markers.length; i++) {
        exportedMarkers.push(addMarker(markers[i]));
    }

    // Add Marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        });
        // Check for custom icon
        if (props.iconImage) {
            //set icon image
            marker.setIcon(props.iconImage);
        }
        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            // to open and close the infoWindow after each hoveing 
            marker.addListener('click', () => {
                if (openedInfoWindow) {
                    openedInfoWindow.close();
                }
                infoWindow.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
                openedInfoWindow = infoWindow;
            });
        }
        return marker;
    }
}

const markerLinkedList = document.querySelectorAll('.marker-linked');
markerLinkedList.forEach((markerLinked) => {
    markerLinked.addEventListener('mouseover', (event) => {
        console.log(event.target);
        google.maps.event.trigger(exportedMarkers[+event.target.dataset.markerIndex], 'click');
    });
});

// ..................... Email functionality 
function sendMail(contactForm) {
    emailjs.send("gmail", "NamaStay", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.email.value,
            "message": contactForm.message.value
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            }
        );
    return false; // To block from loading a new page
}

// ..................... Incrementing counters 
const counters = document.querySelectorAll('.counter');
counters.forEach((counter) => {
    counter.innerHTML = '0';
});

const counterContainers = document.querySelectorAll('.counter-container');
counterContainers.forEach((container) => {
    container.addEventListener('mouseenter', () => {
        const counter = container.querySelector('.counter');
        // Set up the target
        const updateCounter = () => {
            // Set up the count
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / 100;

            if (count < target) {
                counter.innerText = `${Math.ceil(count+increment)}`; // round up numbers 
                setTimeout(updateCounter, 10);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    }, false);
});

// ..................... FAQ section
// ..................... Bring in toggle buttons 
const toggles = document.querySelectorAll('.faq-toggle');

// ..................... Loop through nodelist 
toggles.forEach(toggle => {
    // ..................... Add an event listener 
    toggle.addEventListener('click', () => {
        // ..................... Toogle the active class on the parent node 
        toggle.parentNode.classList.toggle('active');
    });
});