// gets a single product by ID with statistics (no filter, sorts, etc)
function getSpecificProduct (reviewIDs, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"include":"products",
			"stats":"reviews",
			"filter":{
				"id":reviewIDs
			}
		}
	}, options);
	var apiCall = productCatalogAPICall(settings);
	var urlString = apiCall["url"];
	var paramObject = apiCall["params"];
	var paramString = returnAPIParametersString(apiCall["params"]);
	$.ajax({
		type: "GET",
		url: urlString,
		data: paramString,
		dataType: "jsonp",
		success: function(data) {
			console.log(data, paramString, paramObject);
			callBack(data, paramObject);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// gets all products with statistics - set productID to null to return all reviews
function getAllProducts (productID, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"include":"products",
			"stats":"reviews",
			"filter":{
				"productid":productID
			}
		}
	}, options);
	var apiCall = productCatalogAPICall(settings);
	var urlString = apiCall["url"];
	var paramObject = apiCall["params"];
	var paramString = returnAPIParametersString(apiCall["params"]);
	$.ajax({
		type: "GET",
		url: urlString,
		data: paramString,
		dataType: "jsonp",
		success: function(data) {
			console.log(data, paramString, paramObject);
			callBack(data, paramObject);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function productCatalogAPICall (options) {

	var defaultSettings = $.extend(true, {
		"URL":{
			"baseurl":apiBaseURL,
			"customername":apiDefaults["customerName"],
			"format":apiDefaults["format"] //Response format (xml or json)
		},
		"Parameters":{
			"apiversion":apiDefaults["apiVersion"], //The API version.
			"attributes":null, // Attributes to be included when returning content. For example, if includes are requested along with the &attributes=ModeratorCodes parameter, both the includes and the results will contain moderator codes. In order to filter by ModeratorCode, you must request the ModeratorCodes attribute parameter.
			"callback":null, // Callback function name (JsonP).
			"excludefamily":null, // Boolean flag indicating whether to exclude content from other products in the same family as the requested product. For example, "&filter=productid:eq:1101&excludeFamily=true" limits returned content to just that of product 1101 and not any of the products in the same family. If a value is not defined, content on all products in the family will be returned.
			"filter":{ // Filter criteria for primary content of the query. Multiple filter criteria are supported.
				"id":null, // The identifier of the content/subject type.
				"averageoverallrating":null, // The average overall rating for the reviews that were written on this Product.
				"categoryancestorid":null, // The identifier of the Ancestor of the Product Category that the Product belongs to.
				"categoryid":null, // The identifier of the Product Category that the Product belongs to.
				"isactive":null, // Boolean flag indicating whether the Product is Active.
				"isdisabled":null, // Boolean flag indicating whether the Product is Disabled.
				"lastanswertime":null, // The Submission Time of the latest Answer that was submitted on a Product.
				"lastquestiontime":null, // The Submission Time of the latest Question that was submitted on a Product.
				"lastreviewtime":null, // The Submission Time of the latest Review that was submitted on a Product.
				"laststorytime":null, // The Submission Time of the latest Story that was submitted on a Product.
				"name":null, // Product Name.
				"ratingsonlyreviewcount":null, // The number of ratings-only Reviews written for the Product.
				"totalanswercount":null, // The number of Answers written for Questions on the Product.
				"totalquestioncount":null, // The number of Questions written for the Product.
				"totalreviewcount":null, // The number of Reviews written for the Product.
				"totalstorycount":null, // The number of Stories written for the Product.
			},
			"filter_[TYPE]":null, // Filtering option for included nested content. TYPE can be any included nested content. i.e. Comments for Reviews.
			"include":null, // Related subjects to be included (e.g. Products, Categories, Authors, or Comments).
			"limit":apiDefaults["limitReviews"], // Max number of records returned. An error is returned if the value passed exceeds 100.
			"limit_[TYPE]":null, // Limit option for the nested content type returned. TYPE can be any nested content. i.e. Comments for Reviews. An error is returned if the value passed exceeds 20.
			"locale":null, // Locale to display Labels, Configuration, Product Attributes and Category Attributes in. The default value is the locale defined in the display associated with the API key.
			"offset":apiDefaults["offset"], // Index at which to return results. By default, indexing begins at 0 when you issue a query. Using Limit=100, Offset=0 returns results 0-99. When changing this to Offset=1, results 1-100 are returned.
			"passkey":apiDefaults["passkey"], //API key is required to authenticate API user and check permission to access particular client's data.
			"search":null, // Full-text search string used to find UGC. For more information about what fields are searched by default, see the API Basics page.
			"search_[TYPE]":null, // Searching option for included content followed by full-text search string. See the API Basics page for examples of searching for included data.
			"sort":{ // Sort criteria for primary content type of the query. Sort order is required (asc or desc). Multi-attribute sorting for each content/subject type is supported.
				"id":null, //The identifier of the content/subject type
				"averageoverallrating":null, //The average overall rating for the reviews that were written on this Product.
				"categoryid":null, //The identifier of the Product Category that the Product belongs to.
				"isactive":null, //Boolean flag indicating whether the Product is Active.
				"isdisabled":null, //Boolean flag indicating whether the Product is Disabled.
				"LastAnswerTime":null, //The date/time of the latest moderation of the content
				"lastanswertime":null, //The Submission Time of the latest Answer that was written for a Question on the Product.
				"lastquestiontime":null, //The Submission Time of the latest Question that was written for the Product.
				"lastreviewtime":null, //The Submission Time of the latest Review that was written on the Product.
				"laststorytime":null, //The Submission Time of the latest Story that was written on the Product.
				"name":null, //Product Name.
				"ratingsonlyreviewcount":null, //The number of ratings-only Reviews written for the Product.
				"totalanswercount":null, //The number of Answers written for Questions on the Product.
				"totalquestioncount":null, //The number of Questions written for the Product.
				"totalreviewcount":null, //The number of Reviews written for the Product.
				"totalstorycount":null, //The number of Stories written for the Product.
			},
			"sort_[TYPE]":null, // Sorting option for nested content. Sort order is required (asc or desc). TYPE can be any nested content. i.e. Comments for Reviews.
			"stats":null // The type of statistics that will be calculated on included subjects. Available content types are: Reviews, Questions, Answers, Stories. Note: Not all statistical content types apply to every possible include.
		}
	}, options);

	// set URL base for API call
	var url = "http://" + defaultSettings["URL"]["baseurl"] + "data/" + "products." + defaultSettings["URL"]["format"];

	// set URL parameters for API call
	var params = returnAPIParameters(defaultSettings["Parameters"]);

	// create array with url and parameters
	var apiCall = {"url":url, "params":params};

	// return the API call
	return apiCall;

};
