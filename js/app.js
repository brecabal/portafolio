(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper'),
    overlay = document.getElementById('cn-overlay');

	var open = false;
	button.addEventListener('click', handler, false);
	wrapper.addEventListener('click', cnhandle, false);

	function cnhandle(e){
		e.stopPropagation();
		closeNav();
	}

	function handler(e){
		if (!e) var e = window.event;
	 	e.stopPropagation();

	  	if(!open){
	    	openNav();
	  	}
	 	else{
	    	closeNav();
	  	}
	}
	function openNav(){
		open = true;
	    button.innerHTML = "-";
	    classie.add(overlay, 'on-overlay');
	    classie.add(wrapper, 'opened-nav');
	}
	function closeNav(){
		open = false;
		button.innerHTML = "+";
		classie.remove(overlay, 'on-overlay');
		classie.remove(wrapper, 'opened-nav');
	}
	document.addEventListener('click', closeNav);

	var classeDuLienSDmooth =".smoothScroll";
	var dureeDuSmooth = 800; 
	/* SmoothScroll */
	$(classeDuLienSDmooth).click(function(){  
	    var idAncre = $(this).attr("href");
	    $('html, body').stop().animate({
	        scrollTop:$(idAncre).offset().top   
	    }, dureeDuSmooth);
	    closeNav(); 
	  return false;
	}); 
})();
var scroll;
var barra= document.getElementById("barrastyle");
var barraUno= document.getElementById("barrastyleUno");
var barraDos= document.getElementById("barrastyleDos");
var barraTres= document.getElementById("barrastyleTres");
var barraCuatro= document.getElementById("barrastyleCuatro");
var barraCinco= document.getElementById("barrastyleCinco");

var barraProgreso= function(){
  barraUno.value+=2;
  barra.value += 2;
  barraDos.value+= 2;
  barraTres.value +=2;
  barraCuatro.value +=2;
  barraCinco.value +=2;
}

$(document).ready(function(){
	if($(window).width() < 767){
		progress(1242);
		$(".destokp").addClass("none");
		$(".mobile").removeClass("none");
	}else{
		progress(1242);
		$(".destokp").removeClass("none");
		$(".mobile").addClass("none");
	}
})

function progress(num){
	$(window).scroll(function(){
		scroll = $(window).scrollTop();
		if(scroll>num){
			setInterval(barraProgreso, 100);
		}	
	})
}
