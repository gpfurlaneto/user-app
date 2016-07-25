angular.module("listaUsuarios", ["ngRoute", "LocalStorageModule"])
	.run(function($rootScope, config, localStorageService, $location) {
		$rootScope.getValidationErrors = function(data) {
			var validationErrors = new Map();
			if(data != null){
				data.forEach(function(error){
					validationErrors.set(error.path, error.message);
				});
				return validationErrors;
			}
		},
		$rootScope.hasErrorFor = function(form, field, validationErrors) {
			return !angular.isUndefined(form[field]) 
			 		&& form[field].$error.required && form[field].$dirty 
			 		|| (!angular.isUndefined(validationErrors) && validationErrors.has(field));
		},
		$rootScope.getErrorFor = function(field, validationErrors) {
			 return !angular.isUndefined(validationErrors) && validationErrors.has(field) ?
					validationErrors.get(field) : ' não pode estar vazio';
		 },
		 $rootScope.sair = function(){
			 localStorageService.remove(config.userSession);
			 $location.path("/login");
		 },
		 $rootScope.usuarioEstaLogado = function(){
			 var userSession = localStorageService.get(config.userSession);
			 return userSession != null; 
		 },
		 $rootScope.saveUserSession = function(userSession){
			 localStorageService.set(config.userSession, userSession);
		 }
		 $rootScope.getUserSession = function(){
			 return localStorageService.get(config.userSession);
		 },
		 $rootScope.getLoginUserSession = function(){
			 return localStorageService.get(config.userSession).login;
		 },
		 $rootScope.redirectIfNotLogged = function(){
			 if (!$rootScope.usuarioEstaLogado()) {
             	$.notify("Ops! Você não tem autorização para acessar esta funcionalidade.", { type: 'danger', delay: 4000} );
             	$location.path('/login');
             }
		 }
	});