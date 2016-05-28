define(function(require) {
	var name = "app";
	var header = require("modules/header/model");

	var APP = {
		initialize: function() {
			$.get("modules/" + name + "/view.html", function(data) {
				$("#APP").append(data);
			});
			this.loadModules();
		},
		loadModules: function() {
			header.loadView();
		}
	}
	return APP;
})