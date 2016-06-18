angular.module("listaUsuarios").config(function (localStorageServiceProvider) {
	localStorageServiceProvider.setPrefix("lu");
});