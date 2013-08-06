function loadReviewCommentSubmissionPreviewWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
		"targetContainer":defaultSubmissionPreviewContainer,
		"viewContainer":defaultSubmissionReviewCommentPreviewWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	console.log(content);
	// get a new id for the submission container using product id - this will be needed for reference on form processing
	var newID = "BVSubmissionContainerID_" + settings["productId"];
	$.ajax({
		url: settings["viewContainer"],
		type: 'get',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add submission container
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container));

			loadPageHeader ("Preview Your Comment", {
				"parentContainer":$container,
				"targetContainer":defualtPageHeaderContainer
			});

			// load review submission form
			loadReviewCommentSubmissionPreview (content["Comment"], {
				"parentContainer":$container,
				"productId":settings["productId"],
			});

			// buttons
			// submit button
			loadSubmitButton ("Submit", {
				"parentContainer":$container
			});
			// submit button functionality
			$container.find(defaultButtonSubmitContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonSubmitContainer + " " + defaultButtonContainer).click(function() {
				// get form parameters
				var params = returnFormParamaters("#" + newID, {
					"action":"submit"
				});
				console.log(newID, params);
				// POST form to server
				loadingContainerAnimation($container, function() {
					postReviewCommentsSubmissionForm(settings["contentId"], function (content) {
							console.log("submitted");
							loadReviewCommentSubmissionThankYouWidget (content, {
								"productId":settings["productId"],
								"returnURL":settings["returnURL"],
							});
						}, {
						"Parameters": params
					});
				});
			});

			// edit button
			loadEditButton ("Edit", {
				"parentContainer":$container,
			});
			// edit button functionality
			$(settings["parentContainer"]).find(defaultButtonEditContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonEditContainer + " " + defaultButtonContainer).click(function() {
				// show form and hide preview
				$(defaultSubmissionFormContainer).show();
				$($container).hide();

			});

			// cancel button
			loadCancelButton ("Cancel", {
				"parentContainer":$container,
			});
			// cancel button functionality
			$container.find(defaultButtonCancelContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCancelContainer + " " + defaultButtonContainer).click(function() {
				// load return page
				returnToPage(settings["returnURL"]);
			});

		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	})
}

function loadReviewCommentSubmissionPreview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionPreviewContainer,
		"targetContainer":defaultSubmissionReviewCommentBodyPreviewContainer,
		"viewContainer":defaultReviewCommentContainerView,
		"loadOrder":"",
		"productId":"",
	}, options);
	// inject review content
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
			success: function(container) {
				var $container = $(container);
				// add comment template container
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container));
				// load comment title
				loadCommentTitle (content, {
					"parentContainer":$container
				});
				// load comment text
				loadCommentBody (content, {
					"parentContainer":$container
				});
				// load comment date
				loadCommentDate (content, {
					"parentContainer":$container
				});
				// load comment user nickname
				loadCommentUserNickname (content, {
					"parentContainer":$container
				});
				// load comment user location
				loadCommentUserLocation (content, {
					"parentContainer":$container
				});
				// load comment cdvs
				if (content["ContextDataValuesOrder"]) {
					loadCommentContextDataValuesGroup (content, {
						"parentContainer":$container
					});
				}
				// load comment photos
				if (content["Photos"]) {
					loadCommentPhotosGroup(content, {
						"parentContainer":$container
					});
				}
				// load comment videos
				if (content["Videos"]) {
					loadCommentVideosGroup(content, {
						"parentContainer":$container
					});
				}

				// load badges
				if (content["BadgesOrder"]) {
					loadBadges(content, {
						"parentContainer":$container
					});
				}
			},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}