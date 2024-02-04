$(document).ready(function () {
  $(".loader").fadeOut(800);
});

const sideNavWidth = $(".side-nav").outerWidth();
const allNavWidth = $(".all-nav").outerWidth();

// at first the nav should be closed
$(".all-nav").css("left", -sideNavWidth);

let isNavOpen = false;
$(".open-close-icon").click(function () {
  if (isNavOpen) {
    $(".nav-links a").animate({ paddingTop: "150px", opacity: "0" }, 1000);
    $(".open-close-icon").html('<i class="fa-solid fa-bars"></i>');
    $(".all-nav").animate({ left: -sideNavWidth }, 500);
    isNavOpen = false;
  } else {
    $(".open-close-icon").html('<i class="fa-solid fa-xmark"></i>');
    $(".all-nav").animate({ left: 0 }, 500);
    isNavOpen = true;
    $(".nav-links a").animate({ paddingTop: "0px", opacity: "1" }, 1000);
  }
});

// top_rated   now_playing  popular  upcoming
let movieArray = [];

async function getMovies(topic) {
  let response = await fetch(
    `https://api.themoviedb.org/3/movie/${topic}?api_key=bd0cab21adde295a77f50d6ba0a4dafc`
  );
  if (response.status == 200) {
    let responseData = await response.json();
    movieArray = responseData.results;
    console.log(movieArray);

    display();
  }
}

getMovies("now_playing");


function display() {
  let totalHtml = "";

  for (let i = 0; i < movieArray.length; i++) {

    // toFixed() method Returns a String containing this Number value represented in decimal fixed-point notation with fractionDigits digits after the decimal point. If fractionDigits is undefined, 0 is assumed. Specifically, perform the following steps:

    totalHtml += `<div class=" col-lg-4  ">

        <div class=" position-relative">
            <img src="https://image.tmdb.org/t/p/original${movieArray[i].poster_path}"  class=" h-100 w-100 rounded" alt="film poster"/>


            <div class=" overlay text-white position-absolute top-0 bottom-0 p-4 h-100 d-flex flex-column justify-content-evenly movie-details ">
                <h3 class=" fw-bolder fs-3 text-center">${movieArray[i].title}</h3>
                <p class="">${movieArray[i].overview}</p>
                <h4 class=" fs-5 ">Release Date: ${movieArray[i].release_date}</h4>
                <div class="rating">
                    ${getStars(movieArray[i].vote_average)}
                    <div class=" rating-number border border-2 border-success rounded-circle d-flex justify-content-center align-items-center mt-2"><span class=" fs-4">${movieArray[i].vote_average.toFixed(1)}</span></div>    
                </div>
            </div>

        </div>
    </div>`;
  }

  $(".movies-row").html(totalHtml);
}

//   when click on every link , it should call the method display to dispaly the content related to this topic

$('.nav-links a[href^="#"]').click(function (e) {
  e.preventDefault(); // Prevent the default anchor behavior (i.e., navigating to a new page)

  const nameAttr = $(this).attr("name");
  getMovies(nameAttr);
  goToUp();
});



// when click on contact link, it should take you to the contacts section

$( '.contacts' ).click( function(e){

    e.preventDefault(); // Prevent the default anchor behavior (i.e., navigating to a new page)

    const contactOffsetTop = $('.contacts-div').offset().top;

    $( 'html , body' ).animate( { scrollTop : contactOffsetTop } , 2000 );

} );



function goToUp() {
  $("html , body").animate({ scrollTop: 0 }, 1500);
}

// the logic of the button that navigate the user to the up

$(window).scroll(function () {
  const searchInputHeight = $(".search-input").innerHeight();

  if ($(window).scrollTop() > searchInputHeight) {
    $(".go-to-up").css("display", "flex");
  } else {
    $(".go-to-up").css("display", "none");
  }
});

$(".go-to-up").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500);
});

// ----------------------end logic of go-to-up button ------------------------------------

// search button

$(".search-input input").keyup(function () {
  searchMovie($(".search-input input").val());

  $(".search-input i").css("visibility", "visible");
});

$(".search-input i").click(function () {
  $(".search-input input").val("");
  $(".search-input i").css("visibility", "hidden");
});

async function searchMovie(movie) {
  let response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=bd0cab21adde295a77f50d6ba0a4dafc
      `
  );
  if (response.status == 200) {
    let responseData = await response.json();
    movieArray = responseData.results;
    //   console.log( movieArray )

    display();
  }
}


// function that return string consists of number of stars for every movie

function getStars(value){

    let stars = "";

    if( value <= 1 ){
        stars += `<i class="fa-solid fa-star text-muted fs-6"></i>`;
    }else if( value <= 2 ){
        stars += `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }else if( value < 3 ){
        stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`
    }else if( value <= 4 ){
        for (let i = 0; i < 1; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
        }
        stars += `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }else if( value <= 5 ){
        for (let i = 0; i < 2; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            }
    }else if( value <= 6 ){
        for (let i = 0; i < 2; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            }
        stars += `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }else if( value <= 7 ){
        for (let i = 0; i < 3; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            }
   
    }else if( value <= 8 ){
        for (let i = 0; i < 3; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            }
        stars += `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }else if( value <= 9 ){

        for (let i = 0; i < 4; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            } 
    }else if( value < 10 ){
        for (let i = 0; i < 4; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            }
        stars += `<i class="fa-regular fa-star-half-stroke text-warning fs-6"></i>`;
    }else{
        for (let i = 0; i < 5; i++) {
            stars += `<i class="fa-solid fa-star text-warning fs-6"></i>`;
            }
    }


    return stars;
    
}
