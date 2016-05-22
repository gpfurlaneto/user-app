angular.module("listaUsuarios").config(function ($routeProvider) {
	
	$routeProvider.when("/listaUsuarios", {
		templateUrl: "view/listaUsuarios.html",
		controller: "ListaUsuariosCtrl",
		resolve: {
			usuarios: function (usuariosAPI) {
				return usuariosAPI.getUsuarios();
			}
		}
	});
	
	$routeProvider.when("/detalheUsuario", {
		templateUrl: "view/detalheUsuario.html",
		controller: "DetalheUsuarioCtrl",
		resolve: {
			usuario: function(){
				usuario = JSON.parse(window.sessionStorage.getItem('usuarioEditar'));
				window.sessionStorage.removeItem('usuarioEditar');
				return usuario; 
			}
		}
	});
	
	$routeProvider.when("/", {
		templateUrl: "view/home.html",
	});
	
	$routeProvider.otherwise({redirectTo: "/"});
});
