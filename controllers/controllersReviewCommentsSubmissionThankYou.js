function loadReviewCommentSubmissionThankYouWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
		"targetContainer":defaultSubmissionThankYouContainer,
		"viewContainer":defaultSubmissionReviewCommentThankYouWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	console.log(content);

	$(settings["targetContainer"]).hide();

	// get a new id for the submission container using product id - this will be needed for reference on child elements
	//var newID = "BVSubmissionContainerID" + settings["productId"];
	$.when(
		$.ajax({
			url: settings["viewContainer"],
			type: 'get',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);

				// empty and hide submission form and preview containers
				$(defaultSubmissionFormContainer).empty().hide();
				$(defaultSubmissionPreviewContainer).empty().hide();

				// add submission container
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container));

				loadPageHeader ("Thank You For Your Comment!", {
					"parentContainer":$container,
					"targetContainer":defualtPageHeaderContainer
				});

				// add time to post
				$container.find(defaultTypicalHoursToPostTextContainer).andSelf().filter(defaultTypicalHoursToPostTextContainer).text(content["TypicalHoursToPost"]);

				// buttons
				// return button
				loadReturnButton ("Retun to the Product Page", {
					"parentContainer":$container,
				});
				// return button functionality
				$container.find(defaultButtonReturnContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonReturnContainer + " " + defaultButtonContainer).click(function() {
					// load return page
					returnToPage(settings["returnURL"]);
				});

			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		})
	).done(function(){
		$(settings["targetContainer"]).show();
	});
}
