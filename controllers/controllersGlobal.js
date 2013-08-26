/***** FILE PATHS *****/


function pathResource (relativeURI) {
	var path = relativeURI.substr(0,4) == 'http' ? relativeURI : siteBaseURL + relativeURI;
	return path;
}


/***** FORMS *****/


function loadSubmissionPage (url) {
	if (url) {
		$(location).attr('href', url);
	} else {
		alert("There is no URL to return to.");
	}
}

function returnToPage (url) {
	if (url) {
		$(location).attr('href', url);
	} else if (siteBaseURL) {
		$(location).attr('href', siteBaseURL);
	} else {
		alert("There is no URL to return to.");
	}
}


/***** IDS & CLASSES *****/


function addOddEvenClasses (toReceive) {
	var total = $(toReceive).length;
	var current = 1;
	$(toReceive).each(function() {
		if (current %2 != 0) {
			$(this).addClass("BVodd");
		} else {
			$(this).addClass("BVeven");
		}
		current ++;
	});
}

function addFirstLastClasses (toReceive) {
	$(toReceive).first().addClass("BVfirst");
	$(toReceive).last().addClass("BVlast");
}


/***** GENERAL *****/


function setStarRating (toReceive, rating, range) {
	var imgWidth = $(toReceive).find('._BVRatingStarsUnfilledImage').andSelf().filter('._BVRatingStarsUnfilledImage').width();
   	var avgDecimal = (rating/range);
   	var avg = (avgDecimal * 100);
	var imgPercentage = (imgWidth / (imgWidth * avgDecimal)) * 100;

	$(toReceive).find('._BVRatingStarsContainer').andSelf().filter('._BVRatingStarsContainer').css({
		"position":"relative"
	});
	$(toReceive).find('._BVRatingStarsFilled').andSelf().filter('._BVRatingStarsFilled').css({
		"width":avg+"%",
		"position":"absolute",
		"top":"0px",
		"left":"0px",
		"overflow":"hidden"
	});
	$(toReceive).find('._BVRatingStarsFilledImage').andSelf().filter('._BVRatingStarsFilledImage').css({
		"width":imgPercentage+"%"
	});
	$(toReceive).find('._BVRatingStarsUnfilled').andSelf().filter('._BVRatingStarsUnfilled').css({
		"width":"100%"
	});
	
	$(toReceive).find('._BVRatingStarsText').andSelf().filter('._BVRatingStarsText').text(rating + " stars");
}

function convertDecimalToPercentage (value) {
	return value.toFixed(2) * 100;
}

function returnFormParamaters (form, options) {
	var formData = $(form).serializeArray();
	var params = options;
	// add form data to params object
	if (formData != undefined) {
		$.each(formData, function(key) {
			params[this["name"]] = this["value"];
		});
	}
	// return updated parameters
	return params;
}

function returnTemplate (template) {
	// template to process
	var temp = $.parseHTML($(template).html());
	// find all images with data image urls
	$(temp).find("img[data-img-url]").andSelf().filter("img[data-img-url]").each(function() {
		// use Modernizr to check for svg support
		if(!Modernizr.svg){
			// image file name
			var img = $(this).attr("data-img-url");
			// split image name to get suffix
			img = img.split(".");
			// if image is svg
			if (img[1] == "svg") {
				// switch to png
				img = img[0] + ".png";
				$(this).attr("src", pathResource(img));
			} else {
				// use original image name
				$(this).attr("src", pathResource($(this).attr("data-img-url")));
			}
		} else {
			// use original image name
			$(this).attr("src", pathResource($(this).attr("data-img-url")));
		}
	});
	// return updated template
	return temp;
}

function loadingContainerAnimation (container, callback) {
	$(container).empty().addClass("_BVContentLoadingContainer");
	callback()
	$("#lfkjlasfjdlkfs").promise().done(function() {
		console.log("done");
		$(container).removeClass("_BVContentLoadingContainer").show();		
	});
}


/***** HEADERS *****/


// page headers
function loadPageHeader (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defualtPageHeaderContainer,
		"viewContainer":defaultPageHeaderContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add header template
	$container.append($template);
	// set text
	$($template).find(defualtPageHeaderTextContainer).andSelf().filter(defualtPageHeaderTextContainer).html(content);
}

// section headers
function loadSectionHeader (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer,
		"targetContainer":defualtSectionHeaderContainer,
		"viewContainer":defaultSectionHeaderContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add header template
	$container.append($template);
	// set text
	$($template).find(defualtSectionHeaderTextContainer).andSelf().filter(defualtSectionHeaderTextContainer).html(content);
}


/***** BUTTONS *****/


// submit button
function loadSubmitButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonSubmitContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find("a").andSelf().filter("a").attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
}

// preview button
function loadPreviewButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonPreviewContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find("a").andSelf().filter("a").attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
}

// edit button
function loadEditButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonEditContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find("a").andSelf().filter("a").attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
}

// cancel button
function loadCancelButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonCancelContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find("a").andSelf().filter("a").attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
}

// return button
function loadReturnButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultButtonReturnContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find("a").andSelf().filter("a").attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
}

// generic button
function loadGenericButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // must be defined in call
		"targetContainer":defaultButtonGenericContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add button template
	$container.append($template);
	// set attributes and text for button
	$($template).find("a").andSelf().filter("a").attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
}

// write review button
function loadWriteReviewButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonWriteReviewContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productId = settings["productId"]
	var returnURL = $(location).attr("href") + "";
	// add button template
	$container.append($template);
	// set attributes
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
		"id":"",
		"title":"",
		"onclick":"return false;",
		"href":""
	}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).html(content);
	// write review button functionality
	$($template).find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
		// set attributes and text for button
		var submissionParams = $.param({
			"productId":productId,
			"contentType":"review",
			"returnURL":returnURL
		});
		console.log(submissionParams);
		var url = siteBaseSubmissionURL + submissionParams;
		// load submission container
		loadSubmissionPage(url);
	});
}



function updateReviewPreviewNode (content) {

	content["Review"]["RatingRange"] = 5; //default to 5 since API doesn't include this for preview

	content["Review"]["TotalFeedbackCount"] = 0; // set to 0 since there wont be any feedback yet
	content["Review"]["TotalPositiveFeedbackCount"] = 0; // set to 0 since there wont be any feedback yet
	content["Review"]["TotalNegativeFeedbackCount"] = 0; // set to 0 since there wont be any feedback yet
	content["Review"]["Helpfulness"] = 0; // set to 0 since there wont be any feedback yet

	content["Review"]["TotalInappropriateFeedbackCount"] = 0; // set to 0 since there wont be any feedback yet
	content["Review"]["InappropriateFeedbackList"] = []; // empty since there wont be any feedback yet

	content["Review"]["TotalCommentCount"] = 0; // set to 0 since there wont be any comments yet
	content["Review"]["CommentIds"] = []; // empty since there wont be any comments yet

	content["Review"]["ClientResponses"] = []; // empty since there wont be any client responses yet

	content["Review"]["IsFeatured"] = false; // set to false since review will not be featured by default
	content["Review"]["IsSyndicated"] = false; // set to false since review will not be syndicated by default

	// content["Review"]["AuthorId"] = null;
	// content["Review"]["CampaignId"] = null;
	// content["Review"]["ProductId"] = null;
	// content["Review"]["ProductRecommendationIds"] = [];
	content["Review"]["IsRatingsOnly"] = content["Data"]["Fields"]["isratingsonly"]["Value"];

	content["Review"]["ModerationStatus"] = "PENDING"; // set to "PENDING" since review has not been submitted
	content["Review"]["LastModificationTime"] = content["Review"]["SubmissionTime"]; // set to submission time since there have been no modifications
	content["Review"]["LastModeratedTime"] = null; // set to null since review has not been submitted yet

	content["Review"]["BadgesOrder"] = []; // empty since there wont be any badges yet
	content["Review"]["Badges"] = {}; // empty since there wont be any badges yet

	content["Review"]["UserNickname"] = content["Data"]["Fields"]["usernickname"]["Value"];
	content["Review"]["UserLocation"] = content["Data"]["Fields"]["userlocation"]["Value"];

	content["Review"]["SecondaryRatingsOrder"] = [];
	content["Review"]["SecondaryRatings"] = {};

	if (content["Data"]["Groups"]["rating"]) {
		// set secondary ratings load order
		$.each (content["Data"]["Groups"]["rating"]["SubElements"], function () {
			if (content["Data"]["Fields"][this["Id"]]["Value"] != null) {
				content["Review"]["SecondaryRatingsOrder"].push(this["Id"]);
			}
		});
		// set secondary ratings object
		$.each (content["Review"]["SecondaryRatingsOrder"], function () {
			var rating = new Object;
			// set rating values
			rating["DisplayType"] = "NORMAL";
			rating["Id"] = content["Data"]["Fields"][this]["Id"];
			rating["Label"] = content["Data"]["Fields"][this]["Label"];
			rating["MaxLabel"] = content["Data"]["Fields"][this]["Id"];
			rating["MinLabel"] = content["Data"]["Fields"][this]["Id"];
			rating["Value"] = parseInt(content["Data"]["Fields"][this]["Value"]);
			rating["ValueLabel"] = content["Data"]["Fields"][this]["Id"];
			rating["ValueRange"] = 5;
			// add rating to secondary ratings object
			content["Review"]["SecondaryRatings"][this] = rating;
		});
	}

	content["Review"]["TagDimensionsOrder"] = [];
	content["Review"]["TagDimensions"] = {};

	if (content["Data"]["Groups"]["tag"]) {
		// set tags load order
		$.each (content["Data"]["Groups"]["tag"]["SubElements"], function (index) {
			content["Review"]["TagDimensionsOrder"][index] = this["Id"];
		});
		console.log(content["Review"]["TagDimensionsOrder"]);
		// set secondary ratings object
		$.each (content["Review"]["TagDimensionsOrder"], function () {
			var tag = new Object;
			// set tag values
			tag["Id"] = content["Data"]["Groups"][this]["Id"];
			tag["Label"] = content["Data"]["Groups"][this]["Label"];
			tag["Values"] = {};
			$.each(content["Data"]["Groups"][this]["SubElements"], function () {
				$.each(content["Data"]["Groups"][this["Id"]]["SubElements"], function (index) {
					// set tag values
					tag["Values"][index] = content["Data"]["Fields"][this["Id"]]["Value"];
				})
			})
			// add tag to tag dimensions object
			content["Review"]["TagDimensions"][this] = tag;
		});
	}

	content["Review"]["AdditionalFieldsOrder"] = [];
	content["Review"]["AdditionalFields"] = {};

	if (content["Data"]["Groups"]["additionalfield"]) {
		// set additional fields load order
		$.each (content["Data"]["Groups"]["additionalfield"]["SubElements"], function () {
			if (content["Data"]["Fields"][this["Id"]]["Value"] != null) {
				content["Review"]["AdditionalFieldsOrder"].push(this["Id"]);
			}
		});
		// set additional fields object
		$.each (content["Review"]["AdditionalFieldsOrder"], function () {
			var additionalfield = new Object;
			// set rating values
			additionalfield["Id"] = content["Data"]["Fields"][this]["Id"];
			additionalfield["Label"] = content["Data"]["Fields"][this]["Label"];
			additionalfield["Value"] = content["Data"]["Fields"][this]["Value"];
			// add field to additional fields object
			content["Review"]["AdditionalFields"][this] = additionalfield;
		});
	}

	content["Review"]["ContextDataValuesOrder"] = [];
	content["Review"]["ContextDataValues"] = {};

	if (content["Data"]["Groups"]["contextdatavalue"]) {
		// set context data values load order
		$.each (content["Data"]["Groups"]["contextdatavalue"]["SubElements"], function () {
			if (content["Data"]["Fields"][this["Id"]]["Value"] != null) {
				content["Review"]["ContextDataValuesOrder"].push(this["Id"]);
			}
		});
		// set context data values object
		$.each (content["Review"]["ContextDataValuesOrder"], function () {
			var contextdatavalue = new Object;
			// set rating values
			contextdatavalue["DimensionLabel"] = content["Data"]["Fields"][this]["Label"];
			contextdatavalue["Id"] = content["Data"]["Fields"][this]["Id"];
			$.each (content["Data"]["Fields"][this]["Options"], function () {
				if (this["Selected"] == true) {
					contextdatavalue["Value"] = this["Value"];
					contextdatavalue["ValueLabel"] = this["Label"];
				}							
			})

			// add data to context data values object
			content["Review"]["ContextDataValues"][this] = contextdatavalue;
		});
	}

	content["Review"]["Photos"] = [];

	if (content["Data"]["Groups"]["photo"]) {
		// set tags load order
		$.each (content["Data"]["Groups"]["photo"]["SubElements"], function (index) {
			var urlField = content["Data"]["Groups"][this["Id"]]["SubElements"][0]["Id"];
			var captionField = content["Data"]["Groups"][this["Id"]]["SubElements"][1]["Id"];
			if (content["Data"]["Fields"][urlField]["Value"] != null) {
				var photo = new Object;
				// set tag values
				photo["Id"] = content["Data"]["Groups"][this["Id"]]["Id"];
				photo["Caption"] = content["Data"]["Fields"][captionField]["Value"];
				photo["Sizes"] = {};
				photo["SizesOrder"] = {0:"thumbnail",1:"normal"};
				var size = new Object;
				size["Id"] = content["Data"]["Fields"][urlField]["Id"];
				size["Url"] = content["Data"]["Fields"][urlField]["Value"];
				$.each(photo["SizesOrder"], function () {
					// set tag values
					photo["Sizes"][this] = size;
				})
				// add photo to photo dimensions object
				content["Review"]["Photos"][index] = photo;
			}
		});
	}

	content["Review"]["Videos"] = [];

	if (content["Data"]["Groups"]["video"]) {
		// set tags load order
		$.each (content["Data"]["Groups"]["video"]["SubElements"], function (index) {
			var urlField = content["Data"]["Groups"][this["Id"]]["SubElements"][0]["Id"];
			var captionField = content["Data"]["Groups"][this["Id"]]["SubElements"][1]["Id"];
			if (content["Data"]["Fields"][urlField]["Value"] != null) {
				var video = new Object;
				// set tag values
				video["VideoId"] = content["Data"]["Groups"][this["Id"]]["Id"];
				video["Caption"] = content["Data"]["Fields"][captionField]["Value"];
				video["VideoHost"] = content["Data"]["Fields"][urlField]["Value"];
				video["VideoIframeUrl"] = content["Data"]["Fields"][urlField]["Value"];
				video["VideoThumbnailUrl"] = content["Data"]["Fields"][urlField]["Value"];
				video["VideoUrl"] = content["Data"]["Fields"][urlField]["Value"];
				// add video to video dimensions object
				content["Review"]["Videos"][index] = video;
			}
		});
	}

	return content;

}