angular.module("listaUsuarios").config(function ($routeProvider) {
	
	$routeProvider.when("/listaUsuarios", {
		templateUrl: "view/listaUsuarios.html",
		controller: "UsuariosCtrl"
	});
	$routeProvider.otherwise({redirectTo: "/listaUsuarios"});
});
