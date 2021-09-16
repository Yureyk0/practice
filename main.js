checkCookie();
disabledBtn();
function moreText() {
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let btnText = document.getElementById("myBtn");

        if (dots.style.display === "none") {
            dots.style.display = "inline";
            btnText.innerHTML = "Read more";
            moreText.style.display = "none";
        } else {
            dots.style.display = "none";
            btnText.innerHTML = "Read less";
            moreText.style.display = "inline";
        }
    }

$(document).ready(function () {
    $('.services_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 900,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 4,
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
});


$(document).ready(function () {
    $('.clients_slider').slick({
        arrows: false,
        dots: false,
        infinite: true,
        speed: 900,
        autoplaySpeed: 5000,
        autoplay: false,
        slidesToShow: 8,
        prevArrow: "<i class='fas fa-chevron-left prev'></i>",
        nextArrow: "<i class='fas fa-chevron-right next'></i>",
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    adaptiveHeight: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    arrows: true,
                    dots: true,
                    autoplay: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                }
            }
        ]
    });
});

 //отключение кнопки при невыбраном селекте
 function disabledBtn() {
     let sel = document.getElementById("selectItem");
     let selectedValue = sel.options[sel.selectedIndex].value;
     let btn = document.getElementsByClassName("submitBtn")[0];
     if (selectedValue == "null"){
         btn.setAttribute("disabled", "disabled");
     }
     else {
         btn.removeAttribute('disabled');
     }
 }

// анимация скрола
$(function(){
    $('a[href^="#"]').on('click', function(event) {
        // отменяем стандартное действие
        event.preventDefault();

        var sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        /*
        * sc - в переменную заносим информацию о том, к какому блоку надо перейти
        * dn - определяем положение блока на странице
        */

        $('html, body').animate({scrollTop: dn}, 500);

        /*
        * 1000 скорость перехода в миллисекундах
        */
    });
});

// липкий хедер и появление кнопки back to top
window.onscroll = function showHeader() {
    let header = document.querySelector('.header');
    let upBtn = document.querySelector('.upButton');
    let picBtn = document.querySelector('.picUpBtn');
    if(window.pageYOffset > '200'){
        header.classList.add('headerFixed');
    } else {
        header.classList.remove('headerFixed');
    }
    if (window.pageYOffset > '500'){
        upBtn.style.display = 'block';
    } else {
        upBtn.style.display = 'none';
    }
};


//закрытие бургера
function closeBurger() {
    let clientWidth = document.documentElement.clientWidth;
    let widthWindow = +769;
    let sim = document.querySelector('#check-menu');
    if (clientWidth < widthWindow){
        sim.checked = '';
    }
}

function checkCookie() {
    let cookie = localStorage.getItem('cookie');
    if (cookie == null){
        localStorage.setItem('cookie', false)
    }
    document.getElementsByClassName('cookie_mess')[0].style.display = 'flex';
    if (cookie == 'true'){
        document.getElementsByClassName('cookie_mess')[0].style.display = 'none';
    }
}

function acceptCookie() {
    let cookie = localStorage.getItem('cookie');
    document.getElementsByClassName('cookie_mess')[0].style.display = 'none';
    cookie = true;
    localStorage.setItem('cookie', cookie);

}



