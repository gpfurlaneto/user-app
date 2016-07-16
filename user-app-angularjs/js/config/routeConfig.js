angular.module("listaUsuarios").config(function ($routeProvider) {
	
	$routeProvider.when("/listaUsuarios", {
		templateUrl: "view/listaUsuarios.html",
		controller: "ListaUsuariosCtrl",
		resolve: {
			redirect: function ($rootScope) {
                $rootScope.redirectIfNotLogged();
            },
			usuarios: function (usuariosAPI) {
				return usuariosAPI.getUsuarios();
			}
		}
	});
	
	$routeProvider.when("/detalheUsuario", {
		templateUrl: "view/detalheUsuario.html",
		controller: "DetalheUsuarioCtrl",
		resolve: {
			redirect: function ($rootScope) {
                $rootScope.redirectIfNotLogged();
            },
			usuario: function(){
				usuario = JSON.parse(window.sessionStorage.getItem('usuarioEditar'));
				window.sessionStorage.removeItem('usuarioEditar');
				return usuario; 
			}
		}
	});
	
	$routeProvider.when("/login", {
		templateUrl: "view/login.html",
		controller: "LoginCtrl"
	});
	
	$routeProvider.when("/", {
		templateUrl: "view/home.html",
		resolve : {
			redirect: function ($rootScope) {
				$rootScope.redirectIfNotLogged();
			}
		}
	});
	
	$routeProvider.otherwise({redirectTo: "/"});
});
