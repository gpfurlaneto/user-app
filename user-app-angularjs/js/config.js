listaUsuarios.config(function($routeProvider) {
	
	$routeProvider.when("/", {
		templateUrl : "pages/home.html",
		controller : "homeController"
	}).when("/listaUsuarios", {
		templateUrl : "pages/listaUsuarios.html",
		controller : ""
	}).when("/detalheUsuario", {
		templateUrl : "pages/detalheUsuario.html",
		controller : ""
	}).when("/login", {
		templateUrl : "pages/login.html",
		controller : ""
	}).otherwise({
		redirectTo : '/'
	});
});