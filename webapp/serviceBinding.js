function initModel() {
	var sUrl = "/sap/opu/odata/sap/ZXK_01_V1_SRV/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}