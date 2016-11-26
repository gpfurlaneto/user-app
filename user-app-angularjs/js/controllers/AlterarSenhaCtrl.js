angular.module("listaUsuarios").controller("AlterarSenhaCtrl", function($scope, alterarSenhaAPI, $location) {
	
	$scope.alterarSenhaForm = {
			login : $scope.getLoginUserSession()
	}
	
	$scope.alterarSenha = function(alterarSenhaForm) {
		console.log(alterarSenhaForm);
		alterarSenhaAPI.alterarSenha(alterarSenhaForm).success(function(data) {
			
			if (Array.isArray(data)) {
				$scope.validationErrors = $scope.getValidationErrors(data);
			} else {
				$scope.estaSaindoDaPagina = true;
				$location.path("/");
				msg = "Senha alterada com sucesso! "
				$.notify(msg, { type: 'success', delay: 4000} );
			}
		})
		.error(
				function(data, status) {
					console.log(data);
					$scope.message = "Aconteceu um problema: " + data;
					$.notify($scope.message, { type: 'danger', delay: 4000} );
		});

	};
});