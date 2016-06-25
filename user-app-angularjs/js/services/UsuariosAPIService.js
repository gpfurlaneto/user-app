angular.module("listaUsuarios").factory("usuariosAPI", function ($http, config) {
	var _getUsuarios = function () {
		return $http.get(config.baseUrl + "/usuario");
	};

	var _salvarUsuario = function (usuario) {
		return $http.post(config.baseUrl + "/usuario",	usuario);
	};
	
	var _removerUsuario = function (id) {
		return $http.delete(config.baseUrl + "/usuario/" + id);
	};
	
	var _resetarSenha = function (id) {
		return $http.post(config.baseUrl + "/usuario/resetsenha/" + id);
	};
	
	return {
		getUsuarios: _getUsuarios,
		salvarUsuario: _salvarUsuario,
		removerUsuario: _removerUsuario,
		resetarSenha: _resetarSenha
	};
});