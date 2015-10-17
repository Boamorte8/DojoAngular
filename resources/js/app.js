'use strict';

/*
	En angular los servicios son los factory y los DTO son los services

  Este archivo viene siendo el config.js de la estructura
*/
var spinnerBankAngularApp = angular.module('spinnerBankAngularApp',
	[
	'ngRoute',
	'productos.controllers',
	'productos.services'
	])
	.config(function($routeProvider){
		$routeProvider
		.when('/',{
			templateUrl:'../../page/Principal.html',
			controller: 'prodControler'
		})
		.when('/producto',{
			templateUrl:'../../page/Producto.html',
			controller: 'prodControler'
		})

		.otherwise({
			redirectTo: '/'
		});
	});
	