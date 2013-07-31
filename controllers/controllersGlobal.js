/***** FILE PATHS *****/


function pathView (view) {
	var path = siteBaseURL + "views/" + view;
	return path;
}

function pathModel (model) {
	var path = siteBaseURL + "models/" + model;
	return path;
}

function pathController (controller) {
	var path = siteBaseURL + "controllers/" + controller;
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set text
			$container.find(defualtPageHeaderTextContainer).andSelf().filter(defualtPageHeaderTextContainer).text(content);
			// add header template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
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
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set text
			$container.find(defualtSectionHeaderTextContainer).andSelf().filter(defualtSectionHeaderTextContainer).text(content);
			// add header template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}


/***** BUTTONS *****/


// submit button
function loadSubmitButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonSubmitContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set attributes and text for button
			$container.find("a").andSelf().filter("a").attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// preview button
function loadPreviewButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonPreviewContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set attributes and text for button
			$container.find("a").andSelf().filter("a").attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// edit button
function loadEditButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonEditContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			$container.find("a").andSelf().filter("a").attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// cancel button
function loadCancelButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonCancelContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			$container.find("a").andSelf().filter("a").attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// return button
function loadReturnButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonReturnContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			$container.find("a").andSelf().filter("a").attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

// write review button
function loadWriteReviewButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultButtonWriteReviewContainer,
		"viewContainer":defaultButtonContainerView,
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set attributes
			$container.find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).attr({
				"id":"",
				"title":"",
				"onclick":"return false;",
				"href":""
			}).find(defaultButtonTextContainer).andSelf().filter(defaultButtonTextContainer).text(content);
			// write review button functionality
			$container.find(defaultButtonContainer).andSelf().filter(defaultButtonContainer).click(function() {
				console.log("click");
				// set attributes and text for button
				var returnURL = $(location).attr("href") + "";
				var submissionParams = $.param({
					"productId":settings["productId"],
					"contentType":"review",
					"returnURL":returnURL
				});
				console.log(submissionParams);
				var url = siteBaseSubmissionURL + submissionParams;

				loadSubmissionPage(url);
			});
			// add button template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}
