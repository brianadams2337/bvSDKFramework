$(document).ready(function() {
	$.when(
		// global variables
		$.getScript(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+"/bvSDKFramework/models/varsGlobal.js")
	).done(function(){
		$.when(
			/* LOAD JS FILES */
			$.getScript(siteBaseURL + "js/jquery.min.1.9.1.js"),
			$.getScript(siteBaseURL + "js/createHTML5Elements.js"),
			$.getScript(siteBaseURL + "js/browserSelector.js"),
			/* properties */
			$.getScript(siteBaseURL + "models/properties/properties.js"),
			/* models */
			$.getScript(siteBaseURL + "models/varsTemplates.js"),
			$.getScript(siteBaseURL + "models/varsUniversal.js"),
			$.getScript(siteBaseURL + "models/varsReviews.js"),
			$.getScript(siteBaseURL + "models/varsReviewComments.js"),
			$.getScript(siteBaseURL + "models/varsAskAnswer.js"),
			$.getScript(siteBaseURL + "models/varsFeedback.js"),
			$.getScript(siteBaseURL + "models/varsSubmission.js"),
			$.getScript(siteBaseURL + "models/modelsGlobal.js"),
			$.getScript(siteBaseURL + "models/modelsReviews.js"),
			$.getScript(siteBaseURL + "models/modelsReviewComments.js"),
			$.getScript(siteBaseURL + "models/modelsAskAnswer.js"),
			$.getScript(siteBaseURL + "models/modelsFeedback.js"),
			/* controllers */
			$.getScript(siteBaseURL + "controllers/controllersGlobal.js"),
			$.getScript(siteBaseURL + "controllers/controllersEventListeners.js"),
			$.getScript(siteBaseURL + "controllers/controllersSubmission.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviews.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewComments.js"),
			$.getScript(siteBaseURL + "controllers/controllersAskAnswer.js"),
			$.getScript(siteBaseURL + "controllers/controllersFeedback.js"),
			$.getScript(siteBaseURL + "controllers/controllersPagination.js"),
			$.getScript(siteBaseURL + "controllers/controllersSorting.js"),
			$.getScript(siteBaseURL + "controllers/controllersFilters.js"),
			$.getScript(siteBaseURL + "controllers/controllersBadges.js"),
			/* plugins */
			$.getScript(siteBaseURL + "js/plugins/jquery.cookie.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.dateFormat.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.magnific-popup.js"),
			/* LOAD CSS FILES */
			$("head").append("<link href='" + siteBaseURL + "css/bazaarvoiceUniversal.css' type='text/css' rel='stylesheet' />"),
			$("head").append("<link href='" + siteBaseURL + "css/magnific-popup.css' type='text/css' rel='stylesheet' />"),

			$.Deferred(function(deferred){
				$(deferred.resolve);
			})
		).done(function(){
			// load reviews
			loadingContainerAnimation(defaultReviewsParentContainer, function() {
				getAllReviews (productId, function(content, modelLocalDefaultSettings) {
					// callback function
					loadReviewWidget (content, {
						"parentContainer":defaultReviewsParentContainer,
						"productId":productId,
						"modelLocalDefaultSettings":modelLocalDefaultSettings,
						"viewContainer":siteBaseURL + "views/reviews/display/reviewWidgetContainer.html"
					});
				}, {
					// api parameters
					"Parameters":{
						//"limit":1,
						"filter":{
							//"isfeatured":true,
							//"hasphotos":false,
							// "hascomments":true,
							//"contextdatavalue_Gender":"Male",
							//"contextdatavalue_Age": "18to24",
						},
						"sort":{
							//"contextdatavalue_Age": "asc",
						}
					}
				});
			});
/*
			// ask & answer
			getAllQuestionsAnswers (productId, function(content, modelLocalDefaultSettings) {
				// callback function
				loadQuestionAnswer (content, {
					"productId":productId,
					"modelLocalDefaultSettings":modelLocalDefaultSettings
				});
			}, {
				// api parameters
				"Parameters":{
					"filter":{
						//"isfeatured":false,
						//"hasphotos":true
					}
				}
			});
*/
			/* MAGNIFIC LIGHTBOX POPIN */
			// photos
			$(defaultReviewsParentContainer).on('click', defaultReviewPhotoThumbnailContainer, function() {
				event.preventDefault();
				$(this).magnificPopup({
					type: 'image',
					titleSrc: 'title'
				}).click();
			});
			// videos
			$(defaultReviewsParentContainer).on('click', defaultReviewVideoThumbnailContainer, function() {
				event.preventDefault();
				$(this).magnificPopup({
					type: 'iframe',
					titleSrc: 'title'
				}).click();
			});
			// photos
			$(defaultQuestionAnswerParentContainer).on('click', defaultQuestionPhotoThumbnailContainer, function() {
				event.preventDefault();
				$(this).magnificPopup({
					type: 'image',
					titleSrc: 'title'
				}).click();
			});
			// videos
			$(defaultQuestionAnswerParentContainer).on('click', defaultQuestionVideoThumbnailContainer, function() {
				event.preventDefault();
				$(this).magnificPopup({
					type: 'iframe',
					titleSrc: 'title'
				}).click();
			});
		});
	});
});
