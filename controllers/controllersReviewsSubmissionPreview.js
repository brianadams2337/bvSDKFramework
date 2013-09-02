function loadReviewSubmissionPreviewWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionPreviewContainer,
		"viewContainer":defaultSubmissionPreviewWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	// get a new id for the submission container using product id - this will be needed for reference on form processing
	var newID = "BVSubmissionContainerID_" + settings["productId"];
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productId = settings["productId"];
	var contentId = settings["contentId"];
	var returnURL = settings["returnURL"];
	// add submission widget template
	$container.append($template);

	loadPageHeader ("Preview Your Review", {
		"parentContainer":$template,
		"targetContainer":defualtPageHeaderContainer
	});

	// load review submission form
	loadReviewSubmissionPreview (content["Review"], {
		"parentContainer":$template,
		"productId":productId,
	});

	// buttons
	// submit button
	loadSubmitButton ("Submit", {
		"parentContainer":$template
	});
	// submit button functionality
	$($template).find(defaultButtonSubmitContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonSubmitContainer + " " + defaultButtonContainer).click(function() {
		// get form parameters
		var params = returnFormParamaters("#" + newID, {
			"action":"submit"
		});
		// validate form using parsly.js plugin
		var validated = $("#" + newID).parsley('validate');
		// POST form to server if no errors
		if (validated) {
			$(defaultSubmissionPreviewContainer).hide();
			postReviewsSubmissionForm(productId, defaultSubmissionThankYouContainer, function (content) {
					loadReviewSubmissionThankYouWidget (content, {
						"parentContainer":settings["parentContainer"],
						"productId":productId,
						"returnURL":returnURL,
					});
				}, {
				"Parameters": params
			});
		}
	});

	// edit button
	loadEditButton ("Edit", {
		"parentContainer":$template,
	});
	// edit button functionality
	$(settings["parentContainer"]).find(defaultButtonEditContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonEditContainer + " " + defaultButtonContainer).click(function() {
		// show form and hide preview
		$(defaultSubmissionFormContainer).show();
		$($($template)).hide();
	});

	// cancel button
	loadCancelButton ("Cancel", {
		"parentContainer":$template,
	});
	// cancel button functionality
	$($template).find(defaultButtonCancelContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCancelContainer + " " + defaultButtonContainer).click(function() {
		// load return page
		returnToPage(returnURL);
	});
}

function loadReviewSubmissionPreview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionReviewBodyPreviewContainer,
		"viewContainer":defaultReviewContainerView,
		"loadOrder":"",
		"productId":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add form template
	$container.append($template);
	// load review rating
	loadReviewRating (content, {
		"parentContainer":$template
	});
	// load review secondary ratings
	loadReviewSecondaryRatings (content, {
		"parentContainer":$template
	});
	// load review recommended
	loadReviewRecommended (content, {
		"parentContainer":$template
	});
	// load review date
	loadReviewDate (content, {
		"parentContainer":$template
	});
	// // load review title
	loadReviewTitle (content, {
		"parentContainer":$template
	});
	// load review text
	loadReviewBody (content, {
		"parentContainer":$template
	});
	// load review user nickname
	loadReviewUserNickname (content, {
		"parentContainer":$template
	});
	// load review user location
	loadReviewUserLocation (content, {
		"parentContainer":$template
	});
	// load review cdvs
	loadReviewContextDataValuesGroup (content, {
		"parentContainer":$template
	});
	// load review tags
	loadReviewTagGroups(content, {
		"parentContainer":$template
	});
	// // load review additional fields
	// loadReviewAdditionalFieldsGroups(content, {
	// 	"parentContainer":$template
	// });
	// load review photos
	loadReviewPhotosGroup(content, {
		"parentContainer":$template
	});
	// load review videos
	loadReviewVideosGroup(content, {
		"parentContainer":$template
	});
	// // load review badges
	// loadBadges(content, {
	// 	"parentContainer":$template
	// });
}
