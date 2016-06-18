angular.module("listaUsuarios").controller("LoginCtrl", function($scope, loginAPI, config, $http, $location) {
	
	if ($scope.usuarioEstaLogado()) {
		$location.path("/");
	}
	
	$scope.autenticar = function (usuario) {
		loginAPI.autenticar(usuario).success(function(data) {
			$scope.saveUserSession(data);
			delete $scope.usuario;
			$scope.formLogin.$setPristine();
			$location.path("/");
		}).error(function(data) {
			if (Array.isArray(data)) {
				$scope.validationErrors = $scope.getValidationErrors(data);
			} else {
				$.notify(data, { type: 'danger', delay: 4000} );
			}
		});
	};
});