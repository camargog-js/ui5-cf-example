sap.ui.define([
	
], function () {
	"use strict";

	return {

		/**
		 * Remove ' from phone number
		 * @public
		 * @param {string} sValue the phone number string to be formated
		 * @returns {string} sValue without ' signal
		 */
		formatPhoneNumber : function (sValue) {
			if (!sValue) {
				return "";
			}
			return " " + sValue;
		}
		
	};
});