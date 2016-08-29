angular.module("listaUsuarios").controller("DetalheUsuarioCtrl", function($scope, $rootScope, $location, usuariosAPI, usuario) {

	$scope.usuario = usuario;
	if (usuario !== null) {
		usuario.senha = 'default';
	}

	$scope.usuarioReferencia = JSON.parse(JSON.stringify(usuario));
	$scope.titulo = $scope.usuarioReferencia == null ? "Cadastrar" : "Editar";
	$scope.tituloCancelar = $scope.usuarioReferencia == null ? "o cadastro?" : "a edição?";
	if ($rootScope.usuarioEstaLogado()) {
		$scope.renderMenu = true;
	}
	
	$scope.salvarUsuario = function(usuario) {
		usuariosAPI.salvarUsuario(usuario).success(function(data) {
			
			if (Array.isArray(data)) {
				$scope.validationErrors = $scope.getValidationErrors(data);
			} else {
				$scope.estaSaindoDaPagina = true;
				$location.path("/listaUsuarios");
				msg = "Usuário" + ($scope.usuarioReferencia == null ? " cadastrado " : " alterado ") + "com sucesso! "
				$.notify(msg, { type: 'success', delay: 4000} );
			}
		})
		.error(
				function(data, status) {
					$scope.message = "Aconteceu um problema: "
							+ data;
		});

	};
	
	 $scope.$on('$locationChangeStart', function(event) {
		 if(!$scope.estaSaindoDaPagina){
			 if (isUsuarioEdicaoAlterado() || isUsuarioNovoAlterado()){
				 event.preventDefault();
				 $scope.proximaPagina = $location.path();
				 $('#modal-perder-info').modal('show');
			 }
		 }else{
			 delete $scope.estaSaindoDaPagina;
			 delete $scope.proximaPagina;
			 $('#modal-descartar-info').modal('hide');
			 $(".modal-backdrop").remove();
		 }
	 });
	
	 $scope.descartarInformacoesCadastro = function() {
		 $('#modal-descartar-info').modal('hide');
		 if($scope.proximaPagina != null){
			 $scope.estaSaindoDaPagina = true;
			 $location.path($scope.proximaPagina)
		 }else{
			delete $scope.usuario;
			delete $scope.usuarioReferencia
			delete $scope.errorsValidation;
			$scope.formUsuario.$setPristine();
		 }
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

