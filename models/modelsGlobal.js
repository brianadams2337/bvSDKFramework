function addAPIParameters (url, p) {
	var url = url
	$.each (p, function (k, v) {			
		if (k == "filter") {
			$.each (this, function (k, v) {
				if (!(v == null)) {
					url += "&filter=" + k + ":" + v;
				};
			});
		} else if (k == "sort") {
			var i = 1;
			$.each (this, function (k, v) {
				if (!(v == null)) {
					if (i == 1) {
						url += "&sort=" + k + ":" + v;
					} else {
						url += "," + k + ":" + v;
					};
					i++;
				};
			});
		} else {
			if (!(k == "URL" || k == "AjaxSettings" || v == null)) {
				url += "&" + k + "=" + v;
			};
		};
	});
	return url;
}

function defaultAjaxErrorFunction (content) {
	console.log(content);
}

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