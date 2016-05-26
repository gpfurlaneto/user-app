
angular.module("listaUsuarios").directive("field", function () {
	return {
		templateUrl: "view/field.html",
		replace: true,
		restrict: "AE",
		scope: {
			label: "@",
			showError: "@",
			ngModel: "@",
			error: "@",
			sizeClass: "@"
		},
		transclude: true
	};
});