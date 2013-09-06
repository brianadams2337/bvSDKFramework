function returnAPIParametersString (p) {
	var params = ""
	$.each (p, function (k, v) {			
		if (k == "filter") {
			$.each (this, function (k, v) {
				if (!(v == null)) {
					params += "&filter=" + k + ":" + v;
				};
			});
		} else if (k == "sort") {
			var i = 1;
			$.each (this, function (k, v) {
				if (!(v == null)) {
					if (i == 1) {
						params += "&sort=" + k + ":" + v;
					} else {
						params += "," + k + ":" + v;
					};
					i++;
				};
			});
		} else {
			if (!(k == "URL" || k == "AjaxSettings" || v == null)) {
				params += "&" + k + "=" + v;
			};
		};
	});
	// remove first ampersand character return parameters
	return params.substring(1);
}

function returnAPIParameters (p) {
	var params = new Object;
	$.each (p, function (k, v) {			
		if (k == "filter") {
			var filters = new Object;
			$.each (this, function (k, v) {
				if (!(v == null || v == undefined || !v)) {
					filters[k] = v;
				};
			});
			params["filter"] = filters;
		} else if (k == "sort") {
			var sorts = new Object;
			$.each (this, function (k, v) {
				if (!(v == null || v == undefined || !v)) {
					sorts[k] = v;
				};
			});
			params["sort"] = sorts;
		} else {
			if (!(k == "URL" || k == "AjaxSettings" || v == null || v == undefined || !v)) {
				params[k] = v;
			};
		};
	});

	return params;
}

function defaultAjaxErrorFunction (content) {
	consoleLogFallback(content);
}

/***** UAS PARAMETERS *****/

function parseUAS (UAS) {
	var encodedString = UAS.substring(32); //Assumes MD5 hash is 32 digits and strips it from UAS
	var str = '';
	for (var i = 0; i < encodedString.length; i += 2) { //converts hex values to ascii
        str += String.fromCharCode(parseInt(encodedString.substr(i, 2), 16));
    }
    var params = {};
    $.each(str.split("&"), function(){ //converts decoded string to javascript object
    	var param = this.split("=");
    	if (param.length > 1) {
    		params[param[0]] = param[1];
    	}
    });
    return params;
}

// parsed UAS object
var userParams = parseUAS(bvUserDefaults['bvUAS']);

