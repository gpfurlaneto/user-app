angular.module("listaUsuarios").config(function ($httpProvider) {
	$httpProvider.interceptors.push("sessionInterceptor");
	$httpProvider.interceptors.push("unauthorizedInterceptor");
});