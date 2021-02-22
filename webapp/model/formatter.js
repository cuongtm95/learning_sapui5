sap.ui.define([], function () {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit : function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},
		
		/**
			 * Formats an address to a static google maps image
			 * @public
			 * @param {string} sStreet the street
			 * @param {string} sZIPcode the postal code
			 * @param {string} sCity the city
			 * @param {string} sCountry the country
			 * @returns {string} sValue a google maps URL that can be bound to an image
			 */

		formatMapUrl: function(sStreet, sZipcode, sCity, sCountry) {
			
			var address =  jQuery.sap.encodeURL(sStreet + "," + sZipcode +  "," + sCity + "," + sCountry),
				myAPI = "&key=AIzaSyBWyJGCfBjXsoTG99nLQdyqB1CZfs6vqv4";
			
			return "https://maps.googleapis.com/maps/api/staticmap?center=" + address + "&size=600x600&&zoom=15&markers=color:red%7C" + address + myAPI;
		}

	};

});