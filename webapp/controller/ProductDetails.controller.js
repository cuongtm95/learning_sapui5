sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter"
	], function(Controller, formatter) {
		"use strict";
		
		return Controller.extend("opensap.manageproducts.controller.ProductDetails", {
			
			formatter: formatter,
		
			onInit: function() {
				this.byId("categoryLabel").setVisible(true);
				this.byId("category").setVisible(true);
			}
		});
});
