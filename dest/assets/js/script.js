!function c(i,u,l){function s(t,e){if(!u[t]){if(!i[t]){var n="function"==typeof require&&require;if(!e&&n)return n(t,!0);if(a)return a(t,!0);var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}var r=u[t]={exports:{}};i[t][0].call(r.exports,function(e){var n=i[t][1][e];return s(n||e)},r,r.exports,c,i,u,l)}return u[t].exports}for(var a="function"==typeof require&&require,e=0;e<l.length;e++)s(l[e]);return s}({1:[function(e,n,t){var o=document.querySelectorAll(".header__nav__item"),r=document.getElementById("body");document.getElementById("js-toggle-mobile-nav").onclick=function(){r.classList.toggle("open-menu")};for(var c=0;c<o.length;c++)o[c].addEventListener("click",function(){console.log("clicked"),r.classList.contains("open-menu")&&(console.log("has-open-menu"),r.classList.remove("open-menu"))});document.getElementById("js-start-scrolling").onclick=function(){document.getElementById("services").scrollIntoView({behavior:"smooth"})},document.addEventListener("DOMContentLoaded",function(){var e=document.getElementById("header");new KeepTrack(e)})},{}]},{},[1]);
