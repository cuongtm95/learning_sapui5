sap.ui.define([
	"sap/ui/test/Opa5",
	"./arrangements/Startup",
	"./WorklistJourney",
	"./NavigationJourney",
	"./NotFoundJourney",
	"./ObjectJourney",
	"./pages/NewProduct"
], function (Opa5, Startup) {
	"use strict";

	Opa5.extendConfig({

		arrangements: new Startup(),
		viewNamespace: "opensap.manageproducts.ManageProducts.view.",
		autoWait: true
	});

});