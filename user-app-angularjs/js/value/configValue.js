angular.module("listaUsuarios").constant("config", {
	baseUrl: ("${base_url}" === ("${" + "base_url" + "}") ? "http://localhost:8080" : "${base_url}") + "/user-core-rest",
	userSession: "user_session"
});