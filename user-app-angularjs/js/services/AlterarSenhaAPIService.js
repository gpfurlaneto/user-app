angular.module("listaUsuarios").factory("alterarSenhaAPI", function ($http, config) {
	
	var _alterarSenha = function (alterarSenha) {
		return $http.post(config.baseUrl + "/changePassword", alterarSenha);
	};
	
	return {
		alterarSenha: _alterarSenha
	};
	
});