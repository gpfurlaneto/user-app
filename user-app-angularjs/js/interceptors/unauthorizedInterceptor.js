angular.module("listaUsuarios").factory("unauthorizedInterceptor", function ($q, $location) {
	return {
		responseError: function (rejection) {
			if (rejection.status === 401) {
				$.notify("Ops! Você não tem autorização para acessar esta funcionalidade.", { type: 'danger', delay: 4000} );
				$location.path("/login");
			}
			return $q.reject(rejection);
		}
	};
});