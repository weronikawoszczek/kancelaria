"use strict";function isOnScreen(s){var o=$(window),e=o.scrollTop(),l=o.height(),t=e+l,a=$(s),o=a.offset().top,s=a.height(),a=o+s;return e<=o&&o<t||e<a&&a<=t||l<s&&o<=e&&t<=a}function checkScroll(){20<$(window).scrollTop()?($(".header-scroll").hasClass("scrolled")||$(".header-scroll").addClass("scrolled"),$(".kontakt").hasClass("lower")||$(".kontakt").addClass("lower")):($(".header-scroll").hasClass("scrolled")&&$(".header-scroll").removeClass("scrolled"),$(".kontakt").hasClass("lower")&&$(".kontakt").removeClass("lower")),isOnScreen($("footer"))?isOnScreen($(".tolast"))&&($(".tolast").slideUp(),$(".tofirst").slideDown(),$(".tolast, .tofirst").hasClass("variable")||$(".tolast, .tofirst").addClass("variable"),$(".tolast").click(function(){$(".tolast").slideUp(),$(".tolast, .tofirst").hasClass("variable")||$(".tolast, .tofirst").addClass("variable")})):isOnScreen($(".tofirst"))&&($(".tofirst").slideUp(),$(".tolast").slideDown(),$(".tolast, .tofirst").hasClass("variable")&&$(".tolast, .tofirst").removeClass("variable"),$(".tofirst").click(function(){$(".tofirst").slideUp(),$(".tolast").slideDown(),$(".tolast, .tofirst").hasClass("variable")&&$(".tolast, .tofirst").removeClass("variable")}))}app.common={mainInit:function(){$(".nav-icon1").click(function(s){s.preventDefault(),s.stopPropagation(),$(this).toggleClass("open"),$(".topMenu").toggleClass("opened"),$(".header").toggleClass("active-menu"),$(".header-scroll").hasClass("scrolled")&&$(".header-scroll").removeClass("scrolled"),$(document).on("click",function s(){$(".topMenu").hasClass("opened")?($(".topMenu").removeClass("opened"),$(".menuToggle").removeClass("open"),$(".header").removeClass("active-menu")):($(document).on("click",s),$(".nav-el").removeClass("active"))})})}},$(function(){$(document).ready(function(){app.common.mainInit()})}),$(window).on("scroll",function(){checkScroll()});