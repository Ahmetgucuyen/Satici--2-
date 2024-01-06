sap.ui.define([], function () {
	"use strict";
	return {
		currencyValue: function (e) {
			if (!e) {
				return ""
			}
			return parseFloat(e).toFixed(2)
		},
		sayimFormatter: function (sValue) {

			return sValue.slice(8);

		},
	}
});