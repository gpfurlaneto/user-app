angular.module("listaUsuarios").controller("ListaUsuariosCtrl", function($scope, $http, $location, usuariosAPI, usuarios) {

	$scope.usuarios = usuarios.data;
	 
	$scope.removerUsuario = function() {
		usuariosAPI.removerUsuario($scope.usuarioExcluir.id).success(function(data) {
			$scope.usuarios.splice($scope.usuarios.indexOf($scope.usuarioExcluir), 1);
			delete $scope.cidadaoExcluir;
			$.notify('Usuário excluído com sucesso! ', { type: 'success', delay: 5000} );
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

	$scope.resetarSenha = function(usuario){
		usuariosAPI.resetarSenha(usuario.id).success(function(data) {
			$.notify("Senha do usuário <b style='text-transform: uppercase;'>" + usuario.login + "</b> resetada para <b>" + data + "</b>",
					{ type: 'success', delay: 5000} );
		})
	};
						
});