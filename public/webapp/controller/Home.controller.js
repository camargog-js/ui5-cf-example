sap.ui.define([
	"dev/ui/controller/BaseController",
	"sap/ui/model/json/JSONModel"
], function(BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("dev.ui.controller.App", {

		onInit: function () {
			
		},

		onAfterRendering: function () {
			var userModel = new JSONModel("model/api.json");
			this.setModel(userModel);
		}

	});
});