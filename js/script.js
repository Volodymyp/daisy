//JS-функция определения поддержки WebP

function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
});



$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.form__tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.form__tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

let open_modal = document.getElementById('open_modal');
let close_modal = document.getElementById('close_modal');
let modal = document.getElementById('modal');
let body = document.getElementsByTagName('body')[0];
open_modal.onclick = function() { // клик на открытие
    modal.classList.add('modal_vis'); // добавляем видимость окна
    modal.classList.remove('bounceOutDown'); // удаляем эффект закрытия
    body.classList.add('body_block'); // убираем прокрутку
};
close_modal.onclick = function() { // клик на закрытие
    modal.classList.add('bounceOutDown'); // добавляем эффект закрытия
    window.setTimeout(function() { // удаляем окно через полсекунды (чтобы увидеть эффект закрытия).
        modal.classList.remove('modal_vis'); 
        body.classList.remove('body_block'); // возвращаем прокрутку
    }, 500);
};
$(document).ready(function () {


/*scrollSpy*/
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let services = document.querySelector("#services");
let portfolio = document.querySelector("#portfolio");
let contact = document.querySelector("#contact");

window.addEventListener("scroll", ()=>{
    var windo = window.pageYOffset + 63;
    if (about.offsetTop <= windo && services.offsetTop > windo) {
        document.querySelector(".header__link--about").setAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else if (services.offsetTop <= windo && portfolio.offsetTop > windo) {
        document.querySelector(".header__link--services").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else if (portfolio.offsetTop <= windo && contact.offsetTop > windo) {
        document.querySelector(".header__link--portfolio").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else if (contact.offsetTop <= windo) {
        document.querySelector(".header__link--contact").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--home").removeAttribute("id", "active");
    }
    else{
        document.querySelector(".header__link--home").setAttribute("id", "active");
        document.querySelector(".header__link--about").removeAttribute("id", "active");
        document.querySelector(".header__link--services").removeAttribute("id", "active");
        document.querySelector(".header__link--portfolio").removeAttribute("id", "active");
        document.querySelector(".header__link--contact").removeAttribute("id", "active");
    }
});


/*Smooth scrolling*/
$(".header__link, .main__btn, .business__btn").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      window.location.hash = hash;
    });
  }
});


  //Page Loader
  setTimeout(function () {
    $('.loader-bg').fadeToggle();
  }, 1500);


  /*-------class for background----------*/

  function ibg(){

  let ibg=document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
  if(ibg[i].querySelector('img')){
  ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
  }
  }
  }

  ibg();

    /*----burger-----*/
  $('.header__burger').click(function (event) {
    $('.header__burger, .header__menu').toggleClass('active');
    $('.header').toggleClass('bege');
    /* ---- lock scroll main content when burger open -------  */
    $('body').toggleClass('lock');
  })

  //change nav bg when scroll or resize
  function consoleBG() {
    if ($(window).scrollTop() <= 100 && $(window).width() >= '768') {
      $('.header').css('background', 'transparent');
      $('.header').css('margin-top', '20px');
    } else if ($(window).scrollTop() <= 100 && $(window).width() < '768') {
      $('.header').css('background', '#4f453b');
      $('.header').css('margin-top', '0');
    }else if ($(window).scrollTop() > 100 && $(window).width() < '768') {
      $('.header').css('background', '#4f453b');
      $('.header').css('margin-top', '0');  
    } else if ($(window).scrollTop() > 100 && $(window).width() >= '768') {
      $('.header').css('background', '#4f453b');
      $('.header').css('margin-top', '0');  
    }
  }
  consoleBG();

  $(window).scroll(function() {
    consoleBG();
  });

  $(window).on('load resize',consoleBG);

/*-------slick slider--------*/
  $('.slider__body').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    dots: false,
    arrows:true,
    prevArrow: "<img src='img/team/left.png' class='prev' alt='prev'>",
    nextArrow: "<img src='img/team/right.png' class='next' alt='next'>",
  });



});//end

