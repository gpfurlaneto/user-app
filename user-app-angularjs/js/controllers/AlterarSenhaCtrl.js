angular.module("listaUsuarios").controller("AlterarSenhaCtrl", function($scope, alterarSenhaAPI, $location) {
	
	$scope.alterarSenhaForm = {
			login : $scope.getLoginUserSession()
	}
	
	$scope.alterarSenha = function(alterarSenhaForm) {
		console.log(alterarSenhaForm);
		alterarSenhaAPI.alterarSenha(alterarSenhaForm).success(function(data) {
			
			if (Array.isArray(data)) {
				$scope.errorsValidation = new Map();
					data.forEach(function(error){
					$scope.errorsValidation.set(error.path, error.message);
				});
			} else {
				$scope.estaSaindoDaPagina = true;
				$location.path("/");
				msg = "Senha alterada com sucesso! "
				$.notify(msg, { type: 'success', delay: 4000} );
			}
		})
		.error(
				function(data, status) {
					$scope.message = "Aconteceu um problema: "
							+ data;
		});

	};
});