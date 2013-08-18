function loadReviewCommentSubmissionThankYouWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultSubmissionThankYouContainer,
		"viewContainer":defaultSubmissionReviewCommentThankYouWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var returnURL = settings["returnURL"];
	// add submssion widget template
	$container.append($template);

	// empty and hide submission form and preview containers
	$(defaultSubmissionFormContainer).empty().hide();
	$(defaultSubmissionPreviewContainer).empty().hide();

	loadPageHeader ("Thank You For Your Comment!", {
		"parentContainer":$template,
		"targetContainer":defualtPageHeaderContainer
	});

	// add time to post
	$($template).find(defaultTypicalHoursToPostTextContainer).andSelf().filter(defaultTypicalHoursToPostTextContainer).html(content["TypicalHoursToPost"]);

	// buttons
	// return button
	loadReturnButton ("Retun to the Product Page", {
		"parentContainer":$template,
	});
	// return button functionality
	$($template).find(defaultButtonReturnContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonReturnContainer + " " + defaultButtonContainer).click(function() {
		// load return page
		returnToPage(returnURL);
	});
}
