function loadReviewCommentSubmissionPreviewWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionPreviewContainer,
		"viewContainer":defaultSubmissionReviewCommentPreviewWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	// set variables
	var newID = "BVSubmissionContainerID_" + settings["productId"];
	var productId = settings["productId"];
	var contentId = settings["contentId"];
	var returnURL = settings["returnURL"];
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add submission widget template
	$container.append($template);

	loadPageHeader ("Preview Your Comment", {
		"parentContainer":$template,
		"targetContainer":defualtPageHeaderContainer
	});

	// load review submission form
	loadReviewCommentSubmissionPreview (content["Comment"], {
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
			postReviewCommentsSubmissionForm(contentId, $template, function (content) {
					loadReviewCommentSubmissionThankYouWidget (content, {
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

function loadReviewCommentSubmissionPreview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionReviewCommentBodyPreviewContainer,
		"viewContainer":defaultReviewCommentContainerView,
		"loadOrder":"",
		"productId":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add form template
	$container.append($template);

	// load comment title
	loadCommentTitle (content, {
		"parentContainer":$template
	});
	// load comment text
	loadCommentBody (content, {
		"parentContainer":$template
	});
	// load comment date
	loadCommentDate (content, {
		"parentContainer":$template
	});
	// load comment user nickname
	loadCommentUserNickname (content, {
		"parentContainer":$template
	});
	// load comment user location
	loadCommentUserLocation (content, {
		"parentContainer":$template
	});
	// load comment cdvs
	if (content["ContextDataValuesOrder"]) {
		loadCommentContextDataValuesGroup (content, {
			"parentContainer":$template
		});
	}
	// load comment photos
	if (content["Photos"]) {
		loadCommentPhotosGroup(content, {
			"parentContainer":$template
		});
	}
	// load comment videos
	if (content["Videos"]) {
		loadCommentVideosGroup(content, {
			"parentContainer":$template
		});
	}

	// load badges
	if (content["BadgesOrder"]) {
		loadBadges(content, {
			"parentContainer":$template
		});
	}
}