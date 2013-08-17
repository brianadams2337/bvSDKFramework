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
	$.each(formData, function(key) {
		params[this["name"]] = this["value"];
	});
	// return updated parameters
	return params;
}

function loadingContainerAnimation (container, callback) {
	$(container).empty().hide().addClass("_BVContentLoadingContainer");
	$.when(
		callback()
	).done(function() {
		console.log("done");
		$(container).removeClass("_BVContentLoadingContainer").show();
	})
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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

// close button
function loadCloseButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // must be defined in call
		"targetContainer":defaultButtonCloseContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
	var $template = $.parseHTML($(settings["viewContainer"]).html());
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
