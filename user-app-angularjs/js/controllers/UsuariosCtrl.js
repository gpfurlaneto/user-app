	angular
			.module("listaUsuarios")
			.controller(
					"UsuariosCtrl",
					function($scope, $http, usuariosAPI) {

						var listarUsuarios = function() {
							usuariosAPI.getUsuarios().success(function(data) {
										$scope.usuarios = data;
									})
									.error(
											function(data, status) {
												$scope.message = "Aconteceu um problema: "
														+ data;
											});

						};

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
											listarUsuarios();
										}
										$scope.message = "Aconteceu um problema: ";
									})
									.error(
											function(data, status) {
												$scope.message = "Aconteceu um problema: "
														+ data;
											});

						};

						$scope.removerUsuario = function() {
							usuariosAPI.removerUsuario($scope.usuarioExcluir.id).success(function(data) {
								console.log($scope.usuarioExcluir);
								$scope.usuarios.splice($scope.usuarios.indexOf($scope.usuarioExcluir), 1);
								delete $scope.cidadaoExcluir;
									})
									.error(
											function(data, status) {
												$scope.message = "Aconteceu um problema: "
														+ data;
											});
						};

						$scope.editarUsuario = function(user) {
							$scope.usuario = {
									id: user.id, 
									nome: user.nome, 
									email: user.email, 
									login: user.login, 
									dataNascimento: user.dataNascimento, 
									senha: user.senha
								};
							console.log($scope.usuario);
							console.log(user);
						};

						$scope.selecionarUsuarioExcluir = function(usuarioExcluir){
							$scope.usuarioExcluir = usuarioExcluir;
						};

						listarUsuarios();
					});