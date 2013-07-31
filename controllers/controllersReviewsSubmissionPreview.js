function loadReviewSubmissionPreviewWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
		"targetContainer":defaultSubmissionPreviewContainer,
		"viewContainer":defaultSubmissionPreviewWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"returnURL":"",
	}, options);
	console.log(content);
	$(settings["targetContainer"]).hide();
	// get a new id for the submission container using product id - this will be needed for reference on form processing
	var newID = "BVSubmissionContainerID_" + settings["productId"];
	$.when(
		$.ajax({
			url: settings["viewContainer"],
			type: 'get',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// add submission container
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container));

				loadPageHeader ("Preview Your Review", {
					"parentContainer":$container,
					"targetContainer":defualtPageHeaderContainer
				});

				// load review submission form
				loadReviewSubmissionPreview (content["Review"], {
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
					postReviewsSubmissionForm(settings["productId"], function (content) {
							console.log("submitted");
							loadReviewSubmissionThankYouWidget (content, {
								"productId":settings["productId"],
								"returnURL":settings["returnURL"],
							});
						}, {
						"Parameters": params
					});
				});

				// edit button
				loadEditButton ("Edit", {
					"parentContainer":$container,
				});
				// edit button functionality
				$(settings["parentContainer"]).find(defaultButtonEditContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonEditContainer + " " + defaultButtonContainer).click(function() {
					// show form and hide preview
					$(defaultSubmissionFormContainer).show().removeClass("_BVContentLoadingContainer");
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
	).done(function(){
		$(settings["targetContainer"]).show();
		$(settings["targetContainer"]).removeClass("_BVContentLoadingContainer");
	});
}

function loadReviewSubmissionPreview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionPreviewContainer,
		"targetContainer":defaultSubmissionReviewBodyPreviewContainer,
		"viewContainer":defaultReviewContainerView,
		"loadOrder":"",
		"productId":"",
	}, options);
	// hide the target container while reviews are loading
	$(defaultSubmissionFormContainer).hide().addClass("_BVContentLoadingContainer");

	// inject review content
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
			success: function(container) {
				var $container = $(container);
				// add review template container
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).prepend($($container).attr("id", "BVReviewPreview"));
				// load review rating
				loadReviewRating (content, {
					"parentContainer":$container
				});
				// load review secondary ratings
				// loadReviewSecondaryRatings (content, {
				// 	"parentContainer":$container
				// });
				// load review recommended
				loadReviewRecommended (content, {
					"parentContainer":$container
				});
				// load review date
				loadReviewDate (content, {
					"parentContainer":$container
				});
				// // load review title
				loadReviewTitle (content, {
					"parentContainer":$container
				});
				// load review text
				loadReviewBody (content, {
					"parentContainer":$container
				});
				// load review user nickname
				loadReviewUserNickname (content, {
					"parentContainer":$container
				});
				// // load review user location
				// loadReviewUserLocation (content, {
				// 	"parentContainer":$container
				// });
				// // load review cdvs
				// loadReviewContextDataValuesGroup (content, {
				// 	"parentContainer":$container
				// });
				// // load review tags
				// loadReviewTagGroups(content, {
				// 	"parentContainer":$container
				// });
				// // load review photos
				// loadReviewPhotosGroup(content, {
				// 	"parentContainer":$container
				// });
				// // load review videos
				// loadReviewVideosGroup(content, {
				// 	"parentContainer":$container
				// });
				// // load review badges
				// loadReviewBadges(content, {
				// 	"parentContainer":$container
				// });

				$(settings["parentContainer"]).show().removeClass("_BVContentLoadingContainer");
			},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}