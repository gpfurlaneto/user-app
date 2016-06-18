angular.module("listaUsuarios").factory("loginAPI", function ($http, config) {
	
	var _autenticar = function (usuario) {
		return $http.post(config.baseUrl + "/authenticate", usuario);
	};
	
	return {
		autenticar: _autenticar
	};
	
});