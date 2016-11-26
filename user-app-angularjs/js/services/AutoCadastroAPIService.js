angular.module("listaUsuarios").factory("autocadastroAPI", function ($http, config) {

	var _salvarUsuario = function (usuario) {
		return $http.post(config.baseUrl + "/autocadastro",	usuario);
	};
	
	return {
		salvarUsuario: _salvarUsuario
	};
});