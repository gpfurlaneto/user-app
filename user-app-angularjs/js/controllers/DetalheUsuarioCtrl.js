angular.module("listaUsuarios").controller("DetalheUsuarioCtrl", function($scope, $location, usuariosAPI, usuario) {

	$scope.usuario = usuario;
	$scope.usuarioReferencia = JSON.parse(JSON.stringify(usuario));
	
	$scope.salvarUsuario = function(usuario) {
		usuariosAPI.salvarUsuario(usuario).success(function(data) {
			
			if (Array.isArray(data)) {
				
				$scope.errorsValidation = new Map();
					data.forEach(function(error){
					$scope.errorsValidation.set(error.path, error.message);
				});
			} else {
				delete $scope.usuario;
				delete $scope.errorsValidation;
				$scope.formUsuario.$setPristine();
				$location.path("/listaUsuarios");
				var notify = $.notify('Usuário alterado com sucesso! ', { type: 'success', delay: 5000} );
			}
			$scope.message = "Aconteceu um problema: ";
		})
		.error(
				function(data, status) {
					$scope.message = "Aconteceu um problema: "
							+ data;
		});

	};
	
	 $scope.$on('$locationChangeStart', function(event) {
		 console.log("teste");
		 console.log($scope.estaSaindoDaPagina);
		 if(!$scope.estaSaindoDaPagina){
			 if (isUsuarioEdicaoAlterado() || isUsuarioNovoAlterado()){
				 event.preventDefault();
				 $('#modal-perder-info').modal('show');
			 }
		 }else{
			 console.log('saindo');
			 delete $scope.estaSaindoDaPagina;
			 $('#modal-descartar-info').modal('hide');
			 $(".modal-backdrop").remove();
		 }
	 });
	
	 $scope.descartarInformacoesCadastro = function() {
		 $('#modal-descartar-info').modal('hide');
		 $scope.estaSaindoDaPagina = true;
		 $location.path('/listaUsuarios')
		 return true;
	 }
	 
	 isUsuarioEdicaoAlterado = function(){
		 return $scope.usuarioReferencia != null && !angular.equals($scope.usuarioReferencia, $scope.usuario);
	 }
	 
	 isUsuarioNovoAlterado = function(){
		 return $scope.usuarioReferencia == null && isUsuarioDirty($scope.usuario); 
	 }

	 isUsuarioDirty = function(usuario) {
		 return usuario != null
		 	&& ((usuario.nome != null && usuario.nome.trim() != null) 
		 	|| (usuario.email != null && usuario.email.trim() != null)
		 	|| (usuario.login != null && usuario.login.trim() != null)
		 	|| (usuario.senha != null && usuario.senha.trim() != null)
			|| usuario.dataNascimento != null);
	 }
});