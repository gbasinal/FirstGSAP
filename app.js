$(document).ready(function(){
	countHorizontal = 0
	countVertical = 0
	TweenMax.fromTo('.header',1, {x:-9999}, {x:0})
	TweenMax.fromTo('h3',3, {opacity:0}, {opacity:1})
	TweenMax.to('h3',1, {rotation:360})
	$('#opacity').click(function(){
		TweenMax.to('.header',1, {opacity:.3})
	})
	$('#opacity').dblclick(function(){
		TweenMax.to('.header',1, {opacity:1})
	})	
	$('#moveLeft').click(function(){
		countHorizontal -= 150;
		TweenMax.to('.header',.5, {x:0 + countHorizontal})
	})	
	$('#moveRight').click(function(){
		countHorizontal += 150;
		TweenMax.to('.header',.5, {x:0 + countHorizontal})
	})
	$('#rotate').click(function(){
		TweenMax.to('.header',1, {rotation:360})
	})
	$('#rotateX').click(function(){
		TweenMax.to('.header',1, {rotationX:360})
	})			
	$('#rotateY').click(function(){
		TweenMax.to('.header',1, {rotationY:360})
	})		
	$('#moveUp').click(function(){
		countVertical -= 100;
		TweenMax.to('.header',.5, {y:0 +countVertical})
	})	
	$('#moveDown').click(function(){
		countVertical += 100;
		TweenMax.to('.header',.5, {y:0 +countVertical})
	})	
					


		
})
