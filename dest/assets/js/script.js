!function i(c,u,l){function s(n,e){if(!u[n]){if(!c[n]){var t="function"==typeof require&&require;if(!e&&t)return t(n,!0);if(a)return a(n,!0);var o=new Error("Cannot find module '"+n+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[n]={exports:{}};c[n][0].call(r.exports,function(e){var t=c[n][1][e];return s(t||e)},r,r.exports,i,c,u,l)}return u[n].exports}for(var a="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,t,n){var o=document.querySelectorAll(".js-nav-item"),r=document.getElementById("body");document.getElementById("js-toggle-mobile-nav").onclick=function(){r.classList.toggle("open-menu")};for(var i=0;i<o.length;i++)o[i].addEventListener("click",function(e){r.classList.contains("open-menu")&&r.classList.remove("open-menu");var t=this.getAttribute("href").substring(1,this.length);document.getElementById(t).scrollIntoView({behavior:"smooth"}),e.preventDefault()});document.getElementById("js-start-scrolling").onclick=function(){document.getElementById("services").scrollIntoView({behavior:"smooth"})},document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("header");new KeepTrack(e)})},{}]},{},[1]);
