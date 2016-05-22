angular.module("listaUsuarios").controller("ListaUsuariosCtrl", function($scope, $http, $location, usuariosAPI, usuarios) {

	$scope.usuarios = usuarios.data;
	 
	$scope.removerUsuario = function() {
		usuariosAPI.removerUsuario($scope.usuarioExcluir.id).success(function(data) {
			console.log($scope.usuarioExcluir);
			$scope.usuarios.splice($scope.usuarios.indexOf($scope.usuarioExcluir), 1);
			delete $scope.cidadaoExcluir;
		})
		.error(
			function(data, status) {
				$scope.message = "Aconteceu um problema: " + data;
		});
	};

	$scope.selecionarUsuarioEditar = function(usuario) {
		window.sessionStorage.setItem('usuarioEditar', JSON.stringify(usuario));
	};

	$scope.selecionarUsuarioExcluir = function(usuarioExcluir){
		$scope.usuarioExcluir = usuarioExcluir;
	};

						
});