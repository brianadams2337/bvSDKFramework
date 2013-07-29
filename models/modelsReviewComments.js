// gets a single comment by ID (no filter, sorts, etc)
function getSpecificReviewComments (reviewIDs, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"filter":{
				"id":reviewIDs
			}
		}
	}, options);
	var url = reviewCommentsAPICall(settings);
	$.ajax({
		type: "GET",
		url: url,
		dataType: "jsonp",
		success: function(data) {
			callBack(data, settings);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// gets all comments - set productID to null to return all reviews
function getAllReviewComments (reviewID, callBack, options) {
	var settings = $.extend(true, {
		"Parameters":{
			"filter":{
				"reviewid":reviewID
			},
		}
	}, options);
	var url = reviewCommentsAPICall(settings);
	$.ajax({
		type: "GET",
		url: url,
		dataType: "jsonp",
		success: function(data) {
			callBack(data, settings);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function reviewCommentsAPICall (options) {

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
				"id":null, //The identifier of the Review.
				"authorid":null, //The identifier of the author who wrote the content
				"campaignid":null, //The identifier of the Campaign associated with the content
				"categoryancestorid":null, //The identifier of the Product Category ancestor of the Product that the Review was written on.
				"contentlocale":null, //Locale of the content to display. If this filter is not defined, all content regardless of its locale is returned. To return specific content by locale, define the value in the filter. A wildcard character “*” can be used to define the value, e.g., “en*” returns all content in English (en_US, en_CA, en_GB, etc.) or you can use a single ContentLocale code (e.g., “fr_FR”). ContentLocale codes are case-sensitive.
				"hasphotos":null, //Boolean flag indicating whether content has photos
				"hasvideos":null, //Boolean flag indicating whether content has videos. For more information on inserting the returned VideoUrl into HTML, see the API Basics page.
				"isfeatured":null, //Boolean flag indicating whether content is featured
				"lastmoderatedtime":null, //The date/time of the latest moderation of the content. See the Introduction for an example of using advanced operators for filtering.
				"lastmodificationtime":null, //The date/time of the latest modification of the content. See the Introduction for an example of using advanced operators for filtering.
				"moderatorcode":null, //String value indicating the moderator code for rejected content, e.g., &Filter=ModeratorCode:eq:CR returns UGC that contains the CR (Competitor Reference) code. Multiple codes can be entered in a comma-delimited list, e.g., &Filter=ModeratorCode:eq:CS,IU returns UGC with either the CS (Customer Service Complaint) or the IU (Inappropriate/Unusable Content) code. For a list of all Moderator Codes, see the API Basics page. Note that the ModeratorCodes attribute parameter must be explicitly requested in order to use this filter. See the Parameters section above.
				"productid":null, //The identifier of the Product that the Review was written on.
				"reviewid":null, //The identifier of the Review
				"storyid":null, //The identifier of the Story
				"submissionid":null, //Submission identifier assigned to the content when it was initially submitted
				"submissiontime":null, //The submission date/time of the content. See the Introduction for an example of using advanced operators for filtering.
				"totalfeedbackcount":null, //Number of feedbacks received
				"totalnegativefeedbackcount":null, //Number of negative feedbacks received
				"totalpositivefeedbackcount":null, //Number of positive feedbacks received
				"userlocation":null //Location of the author
			},
			"include":null, // Related subjects to be included (e.g. Products, Categories, Authors, or Comments).
			"limit":apiDefaults["limitReviewComments"], // Max number of records returned. An error is returned if the value passed exceeds 100.
			"locale":null, // Locale to display Labels, Configuration, Product Attributes and Category Attributes in. The default value is the locale defined in the display associated with the API key.
			"offset":apiDefaults["offset"], // Index at which to return results. By default, indexing begins at 0 when you issue a query. Using Limit=100, Offset=0 returns results 0-99. When changing this to Offset=1, results 1-100 are returned.
			"passkey":apiDefaults["passkey"], //API key is required to authenticate API user and check permission to access particular client's data.
			"search":null, // Full-text search string used to find UGC. For more information about what fields are searched by default, see the API Basics page.
			"search_[TYPE]":null, // Searching option for included content followed by full-text search string. See the API Basics page for examples of searching for included data.
			"sort":{ // Sort criteria for primary content type of the query. Sort order is required (asc or desc). Multi-attribute sorting for each content/subject type is supported.
				"id":null, //The identifier of the content/subject type
				"authorid":null, //The Identifier of the author who wrote the content
				"campaignid":null, //The identifier of the Campaign associated with the content
				"contentlocale":null, //Locale value of the content
				"hasphotos":null, //Boolean flag indicating whether content has photos
				"hasvideos":null, //Boolean flag indicating whether content has videos. For more information on inserting the returned VideoUrl into HTML, see the API Basics page.
				"isfeatured":null, //Boolean flag indicating whether content is featured
				"lastmoderatedtime":null, //The date/time of the latest moderation of the content
				"lastmodificationtime":null, //The date/time of the latest modification of the content
				"productid":null, //The identifier of the product
				"reviewid":null, //The identifier of the Review
				"storyid":null, //The identifier of the Story
				"submissionid":null, //Submission identifier assigned to the content when it was initially submitted
				"submissiontime":null, //The submission date/time of the content
				"totalfeedbackcount":null, //Number of feedbacks received
				"totalnegativefeedbackcount":null, //Number of negative feedbacks received
				"totalpositivefeedbackcount":null, //Number of positive feedbacks received
				"userlocation":null //Location of the author
			},
			"stats":null // The type of statistics that will be calculated on included subjects. Available content types are: Reviews, Questions, Answers, Stories. Note: Not all statistical content types apply to every possible include.
		}
	}, options);

	// set URL base for API call
	var url = "http://" + defaultSettings["URL"]["customername"] + "." + defaultSettings["URL"]["baseurl"] + "data/" + "reviewcomments." + defaultSettings["URL"]["format"] + "?";
	
	// add URL parameters for API call
	url =  addAPIParameters(url, defaultSettings["Parameters"]);

	// return the API call
	return url;

};
