angular.module("listaUsuarios").factory("sessionInterceptor", function (localStorageService, config) {
	var configApp = config;
	return {
		request: function (config) {
			if(localStorageService.isSupported) {
				var _userSession = localStorageService.get(configApp.userSession);
				config.headers = config.headers || {};
				
				if(_userSession != null) {
					config.headers.Authorization = _userSession.email + ' ' + _userSession.token;
				}
			}
			return config;
		}
	};
});
