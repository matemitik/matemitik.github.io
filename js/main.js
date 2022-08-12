$(document).ready(function(){
 $('.header').height($(window).height());
})

$(".navbar a").click(function(){
$("body,html").animate({
  scrollTop:$("#" + $(this).data('value')).offset().top
},1000)
 })

 function check() {
 	let num1 = Number(document.getElementById("min").value);
 	let num2 = Number(document.getElementById("max").value);
 	var x = Math.floor(num1 + Math.random() * (num2 - num1 + 1));
 	document.querySelector('.result').innerText=x;
 	console.log (num1, num2, x);
 }