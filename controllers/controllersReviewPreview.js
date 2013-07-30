function loadReviewPreview (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionContainer,
		"targetContainer":"._BVPreviewContainer",
		"viewContainer":defaultReviewContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	// hide the target container while reviews are loading
	$("form").hide().addClass("_BVContentLoadingContainer");

	// inject review content
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
			success: function(container) {
				var $container = $(container);
				// add review template container
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($($container).attr("id", "BVReviewPreview"));
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
					// POST form to server
					postReviewsSubmissionForm(settings["productId"],
						function () {
							console.log("submitted");
							loadThankYou ();
						}, {
						"Parameters": params
					});
				});

				// edit button
				loadEditButton ("Edit", {
					"parentContainer":$container
				});
				// Edit button functionality
				$container.find(defaultButtonEditContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonEditContainer + " " + defaultButtonContainer).click(function() {
					// show form and hide preview
					$("form").show().removeClass("_BVContentLoadingContainer");
					$($container).hide();

				});

				// cancel button
				loadCancelButton ("Cancel", {
					"parentContainer":$container
				});
				// cancel button functionality
				$container.find(defaultButtonCancelContainer + " " + defaultButtonContainer).andSelf().filter(defaultButtonCancelContainer + " " + defaultButtonContainer).click(function() {
					// load return page
					returnToPage(settings["returnURL"]);
				});

				$(settings["parentContainer"]).show().removeClass("_BVContentLoadingContainer");
			},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}