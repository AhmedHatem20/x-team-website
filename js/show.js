$(document).ready(function(){
	$(".marketing .navbar .collapse .nav li").click(function(){

		 $(this).addClass("Active").siblings().removeClass("Active");   ;
	}
	);
	$(".main .navbar .collapse .nav li a").click(function(e){
		e.preventDefault();
		$("html , body ").animate({
			scrollTop:$( "#" +$(this).data("scroll")).offset().top +1
		},1000);
	});
	$(" .scroll-top").click(function(){
		$("html , body").animate({
			scrollTop:0
		},400);
	});
	//Achievement
	$("#Ach h5").eq(0).on('click', function(){
		$(this).css({
		'color':'#fff',
		'background-color':'#2BA58B',


	}).siblings().css({
	'color':'#491AA8',
	'background-color':'#fff'

});


	$("#Ach .con").eq(0).css('display', 'block').siblings().css('display', 'none');
	});
	$("#Ach h5").eq(1).on('click', function(){
		$(this).css({
		'color':'#fff',
		'background-color':'#2BA58B',

	}).siblings().css({
	'color':'#491AA8',
	'background-color':'#fff'

});

	$("#Ach .con").eq(1).css('display', 'block').siblings().css('display', 'none');
	});
	$("#Ach h5").eq(2).on('click', function(){
		$(this).css({
		'color':'#fff',
		'background-color':'#2BA58B',

	}).siblings().css({
	'color':'#491AA8',
	'background-color':'transparent',

});

	$("#Ach .con").eq(2).css('display', 'block').siblings().css('display', 'none');
	});
	$("#Ach h5").eq(3).on('click', function(){
		$(this).css({
		'color':'#fff',
		'background-color':'#2BA58B',

	}).siblings().css({
	'color':'#491AA8',
	'background-color':'transparent',

});

	$("#Ach .con").eq(3).css('display', 'block').siblings().css('display', 'none');
	});

});
//Advertisments
$("#Adver .row>div button").eq(0).on('click', function(){
	$(this).css({
		"background-color":"#217664",
		"color":"#fff",
		"border" : "1ps solid #217664"
	}).siblings().css({
		"background-color":"transparent",
		"color":"#F48E7F",
		"border" : "1ps solid #F48E7F"
	});
	$("#Adver .row:last-of-type>div").eq(0).css("display", "block").siblings().css("display", "none");
});
$("#Adver .row>div button").eq(1).on('click', function(){
	$(this).css({
		"background-color":"#217664",
		"color":"#fff",
		"border" : "1ps solid #217664"
	}).siblings().css({
		"background-color":"transparent",
		"color":"#F48E7F",
		"border" : "1ps solid #F48E7F"
	});
	$("#Adver .row:last-of-type>div").eq(1).css("display", "block").siblings().css("display", "none");
});
$("#Adver .row>div button").eq(2).on('click', function(){
	$(this).css({
		"background-color":"#217664",
		"color":"#fff",
		"border" : "1ps solid #217664"
	}).siblings().css({
		"background-color":"transparent",
		"color":"#F48E7F",
		"border" : "1ps solid #F48E7F"
	});
	$("#Adver .row:last-of-type>div").eq(2).css("display", "block").siblings().css("display", "none");
});
$("#Adver .row>div button").eq(3).on('click', function(){
	$(this).css({
		"background-color":"#217664",
		"color":"#fff",
		"border" : "1ps solid #217664"
	}).siblings().css({
		"background-color":"transparent",
		"color":"#F48E7F",
		"border" : "1ps solid #F48E7F"
	});
	$("#Adver .row:last-of-type>div").eq(3).css("display", "block").siblings().css("display", "none");
});
//button effect
$("#Adver .from-left").hover(function(){
	$(this).find("span").eq(0).animate({
		height: "100%"
	}
		, 1000);
},function(){
	$(this).find("span").eq(0).animate(
		{
			height: "0%"
	}, 1000);

});
//loader
 $(window).on('load' ,function(){
	$(".over-lay-loader .sk-circle ").fadeOut(5000, function(){
		$(this).parent().fadeOut(1000, function(){
			$(this).remove();
			$("body").css("overflow", "auto");
		});
	});
	$('.main').css("paddingTop", $('.navbar').innerHeight() );
	$(".main .navbar").css({
	"position": "fixed",
	"top" : "0",
	"left" : "0",
	"width":"100%",
	"z-index":"999"
});
	$(window).scroll(function () {

			// body...
			if($(window).scrollTop()> 0){
				if ($(".main .navbar").prop("backgroundColor",'transparent')) {

             $(".main .navbar").css({

	        "backgroundColor":"#227765"
          });
				}



			} else {
				$(".main .navbar").css({

	        "backgroundColor":"transparent"
          });
			}

	});
	$(window).scroll(function () {
		// body...
		$(".block").each(function () {
			// body...
			if($(window).scrollTop()> $(this).offset().top){
               var blo = $(this).attr('id');
               	$('.main .navbar ul li a').removeClass("act");
				$('.main .navbar ul li a[data-scroll="' + blo + '" ]').addClass("act");

			}
		});
	});
	//sig in /up
	$(".main .navbar ul:last-of-type li:first-of-type").click(function (e) {
		e.preventDefault();
		// body...
		$(".sign").fadeIn();
	});
	$(".sign a:last-of-type").click(function (e) {
		e.preventDefault();
		// body...
		$(".sign").fadeOut();
	});
	//show form
		$(".sign a:first-of-type").click(function (e) {
		e.preventDefault();
		// body...
		$(".sign .row >div:first-of-type").fadeIn();
		$(".sign .row >div:last-of-type").fadeOut();
	});
		$(".sign a:nth-of-type(2)").click(function (e) {
		e.preventDefault();
		// body...
		$(".sign .row >div:first-of-type").fadeOut();
		$(".sign .row >div:last-of-type").fadeIn();
	});
	//table page jquery button
	$(".divide .rt button").eq(0).on("click", function () {
		$(" .divide .slide-one ").css('display', 'flex').siblings(".slide-two,.slide-three").css('display', 'none');
	});
	$(".divide .rt button").eq(1).on("click", function () {
		$(" .divide .slide-two ").css('display', 'flex').siblings(".slide-three,.slide-one").css('display', 'none');
	});
	$(".divide .rt button").eq(2).on("click", function () {
		$(" .divide .slide-three ").css('display', 'flex').siblings(".slide-one,.slide-two").css('display', 'none');
	});
	//table page jquery left slider for student
	$(".divide .row >div:first-of-type h5").eq(0).on('click', function(){

	$(".divide .slide-one>div").eq(1).css('display', 'block').siblings(".A2,.A3,.A4,.A5,.A6").css('display', 'none');
	});
	$(".divide .row >div:first-of-type h5").eq(1).on('click', function(){

	$(".divide .slide-one>div").eq(2).css('display', 'block').siblings(".A1,.A3,.A4,.A5,.A6").css('display', 'none');
	});
	$(".divide .row >div:first-of-type h5").eq(2).on('click', function(){

	$(".divide .slide-one>div").eq(3).css('display', 'block').siblings(".A1,.A2,.A4,.A5,.A6").css('display', 'none');
	});
	$(".divide .row >div:first-of-type h5").eq(3).on('click', function(){

	$(".divide .slide-one>div").eq(4).css('display', 'block').siblings(".A1,.A2,.A3,.A5,.A6").css('display', 'none');
	});
	$(".divide .row >div:first-of-type h5").eq(4).on('click', function(){

	$(".divide .slide-one>div").eq(5).css('display', 'block').siblings(".A1,.A2,.A4,.A3,.A6").css('display', 'none');
	});
	$(".divide .row >div:first-of-type h5").eq(5).on('click', function(){

	$(".divide .slide-one>div").eq(6).css('display', 'block').siblings(".A1,.A2,.A4,.A5,.A3").css('display', 'none');
	});

	//table page jquery left slider for SuperVision
	$(".divide .slide-two >div:first-of-type h5").eq(0).on('click', function(){

	$(".divide .slide-two>div").eq(1).css('display', 'block').siblings(".A2,.A3,.A4,.A5,.A6").css('display', 'none');
	});
	$(".divide .slide-two>div:first-of-type h5").eq(1).on('click', function(){

	$(".divide .slide-two>div").eq(2).css('display', 'block').siblings(".A1,.A3,.A4,.A5,.A6").css('display', 'none');
	});
	$(".divide .slide-two >div:first-of-type h5").eq(2).on('click', function(){

	$(".divide .slide-two>div").eq(3).css('display', 'block').siblings(".A1,.A2,.A4,.A5,.A6").css('display', 'none');
	});
	$(".divide .slide-two>div:first-of-type h5").eq(3).on('click', function(){

	$(".divide .slide-two>div").eq(4).css('display', 'block').siblings(".A1,.A2,.A3,.A5,.A6").css('display', 'none');
	});
	$(".divide .slide-two >div:first-of-type h5").eq(4).on('click', function(){

	$(".divide .slide-two>div").eq(5).css('display', 'block').siblings(".A1,.A2,.A4,.A3,.A6").css('display', 'none');
	});
	$(".divide .slide-two >div:first-of-type h5").eq(5).on('click', function(){

	$(".divide .slide-two>div").eq(6).css('display', 'block').siblings(".A1,.A2,.A4,.A5,.A3").css('display', 'none');
});
var but = $(".chat-ico");
$(window).scroll(function () {
	if ($(this).scrollTop() >= 300) {
		but.show();

			}
			else {
			but.hide();
		}

});
but.click(function () {
	$(".chat").show();
	$(".chat-ico").hide();
});
$(".chat button").click(function () {
	$(".chat-form").show();
	$(".chat").css("display", "none");
});
$(".chat-form button").click(function () {
	$(".message").show();
	$(".chat-form").css("display", "none");
});
});

function redirect (URL){
	if(URL!==" "){
		window.location = URL;
	}
}
$('.carousel').carousel();
