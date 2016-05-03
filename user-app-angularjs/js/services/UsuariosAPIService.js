angular.module("listaUsuarios").factory("usuariosAPI", function ($http, config) {
	var _getUsuarios = function () {
		return $http.get(config.baseUrl + "/user");
	};

	var _salvarUsuario = function (usuario) {
		return $http.post(config.baseUrl + "/user",	usuario);
	};
	
	var _removerUsuario = function (id) {
		return $http.delete(config.baseUrl + "/user/" + id);
	};
	
	
	return {
		getUsuarios: _getUsuarios,
		salvarUsuario: _salvarUsuario,
		removerUsuario: _removerUsuario
	};
});