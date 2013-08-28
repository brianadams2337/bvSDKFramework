$(document).ready(function() {
	var urlParameters = (function() {
		var result = {};
	    if (window.location.search) {
			// split up the query string and store in an associative array
			var params = window.location.search.slice(1).split("&");
			for (var i = 0; i < params.length; i++) {
				var obj = params[i].split("=");
				result[obj[0]] = unescape(obj[1]);
			}
		}
	    return result;
	}());

	$.when(
		// global variables
		$.getScript(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/models/varsGlobal.js")
	).done(function(){
		$.when(
			/* LOAD JS FILES */
			$.getScript(siteBaseURL + "js/jquery.min.1.9.1.js"),
			$.getScript(siteBaseURL + "js/jquery-ui.js"),
			$.getScript(siteBaseURL + "js/createHTML5Elements.js"),
			$.getScript(siteBaseURL + "js/modernizr.js"),
			/* properties */
			$.getScript(siteBaseURL + "models/properties/properties.js"),
			/* models */
			$.getScript(siteBaseURL + "models/varsTemplates.js"),
			$.getScript(siteBaseURL + "models/varsGlobal.js"),
			$.getScript(siteBaseURL + "models/varsReviews.js"),
			$.getScript(siteBaseURL + "models/varsReviewComments.js"),
			$.getScript(siteBaseURL + "models/varsSubmission.js"),
			$.getScript(siteBaseURL + "models/varsProductCatalog.js"),
			$.getScript(siteBaseURL + "models/modelsGlobal.js"),
			$.getScript(siteBaseURL + "models/modelsReviewsSubmission.js"),
			$.getScript(siteBaseURL + "models/modelsReviewCommentsSubmission.js"),
			$.getScript(siteBaseURL + "models/modelsMediaSubmission.js"),
			$.getScript(siteBaseURL + "models/modelsProductCatalog.js"),
			/* controllers */
			$.getScript(siteBaseURL + "controllers/controllersGlobal.js"),
			$.getScript(siteBaseURL + "controllers/controllersEventListeners.js"),
			$.getScript(siteBaseURL + "controllers/controllersProductCatalog.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviews.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewComments.js"),
			$.getScript(siteBaseURL + "controllers/controllersSubmission.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewsSubmission.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewsSubmissionPreview.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewsSubmissionThankYou.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewCommentsSubmission.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewCommentsSubmissionPreview.js"),
			$.getScript(siteBaseURL + "controllers/controllersReviewCommentsSubmissionThankYou.js"),
			/* plugins */
			$.getScript(siteBaseURL + "js/plugins/jquery-cookie.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.dateFormat.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.magnific-popup.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.rating.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.fileupload.js"),
			$.getScript(siteBaseURL + "js/plugins/jquery.iframe-transport.js"),
			$.getScript(siteBaseURL + "js/plugins/Parsley.js-1.1.16/parsley.js"),
			/* LOAD CSS FILES */
			$("head").append("<link id='' href='" + siteBaseURL + "css/bazaarvoiceUniversal.css' type='text/css' rel='stylesheet' />"),
			$("head").append("<link id='' href='" + siteBaseURL + "css/magnific-popup.css' type='text/css' rel='stylesheet' />"),
			$.get(siteBaseURL + "views/viewsUniversal.html", function(data) {
				$("body").append(data);
			}),

			$.Deferred(function(deferred){
				$(deferred.resolve);
			})
		).done(function(){
			switch (urlParameters["contentType"]) {
				case "review": 
					consoleLogFallback("review");
					// load review submission container
					getReviewsSubmissionForm(urlParameters["productId"], defaultSubmissionContainer, function(content) {
						consoleLogFallback(parseUAS(bvUserDefaults['bvUAS']));
						loadReviewSubmissionWidget(content, {
							"parentContainer":defaultSubmissionContainer,
							"productId":urlParameters["productId"],
							"returnURL":urlParameters["returnURL"]
						});
					});

					break;

				case "review_comment": 
					consoleLogFallback("review comment");
					// load review submission container
					getReviewCommentsSubmissionForm(urlParameters["reviewId"], defaultSubmissionContainer, function(content) {
						loadReviewCommentSubmissionWidget(content, {
							"parentContainer":defaultSubmissionContainer,
							"productId":urlParameters["productId"],
							"contentId":urlParameters["reviewId"],
							"returnURL":urlParameters["returnURL"]
						});
					});

					break;

				case "question": 
					consoleLogFallback("question");
					break;

				case "answer": 
					consoleLogFallback("answer");
					break;

				case "story": 
					consoleLogFallback("story");
					break;

				case "story_comment": 
					consoleLogFallback("story comment");
					break;

				default:
					consoleLogFallback("nothing");
					break;

			}

			/* MAGNIFIC LIGHTBOX POPIN */
			// photos
			$(defaultSubmissionContainer).on('click', defaultReviewPhotoThumbnailContainer, function() {
				event.preventDefault();
				$(this).magnificPopup({
					type: 'image',
					titleSrc: 'title'
				}).click();
			});
			// videos
			$(defaultSubmissionContainer).on('click', defaultReviewVideoThumbnailContainer, function() {
				event.preventDefault();
				$(this).magnificPopup({
					type: 'iframe',
					titleSrc: 'title'
				}).click();
			});
			
		});
	});
});