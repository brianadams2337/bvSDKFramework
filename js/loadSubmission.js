// version of jquery being used by SDK - if changed, make sure local file is updated for fallbacks
var jqueryVersion = "1.10.2";
var jqueryUIVersion = "1.10.3";

// check if jquery does not exist or does not match version
if (typeof jQuery == 'undefined' || !(($.fn.jquery) = jqueryVersion)) {
	var otherJSLibrary;
	// check for other js libraries
	if (typeof $ == 'function') {
		otherJSLibrary = true;
	}
	
	loadScript('http://ajax.googleapis.com/ajax/libs/jquery/' + jqueryVersion + '/jquery.min.js', function() {
		if (typeof jQuery=='undefined') {
			// load local file as fallback if jquery did not load successfully from CDN
			loadScript(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/js/jquery.min." + jqueryVersion + ".js", function() {
				initBVSubmission();
			})
		} else {
			// jquery script loaded successfully
			if (!otherJSLibrary) {
				// no conflicts - init bv
				initBVSubmission();
			} else {
				// possible conflicts with other library
				// $.noConflict();
				initBVSubmission();
			}
		}
	});
	
} else {
	// jQuery was already loaded
	initBVSubmission();
};

function loadJQueryUI () {
	if (typeof jQuery.ui == 'undefined' || !(($.ui.jquery) = jqueryUIVersion)) {
		loadScript("http://ajax.googleapis.com/ajax/libs/jqueryui/" + jqueryUIVersion + "/jquery-ui.min.js", function() {
			if (typeof jQuery.ui == 'undefined') {
				// load local file as fallback if jquery ui did not load successfully from CDN
				loadScript(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/js/jquery-ui.min." + jqueryUIVersion + ".js", function() {
					return true;
				});
			} else {
				// jquery ui script loaded successfully
				return true;
			}
		});
	} else {
		// jquery ui was already loaded
		return true;
	}
}

function loadScript(url, callback) {
	// create script to load
	var script = document.createElement('script');
	script.type = "text/javascript";
	script.src = url;
	// document head
	var head = document.getElementsByTagName('head')[0];
	// toggle to ensure script only loads once in browsers with onreadystatechange bugs (specifically Opera, maybe others)
	var complete = false;
	
	// handler for script load
	script.onload = script.onreadystatechange = function() {
		// check to make sure script is loaded
		if (!complete && (!this.readyState || this.readyState == 'loaded' || this.readyState == 'complete')) {
			// toggle to stop script from loading more than once	
			complete = true;
			// callback function provided as param
			callback();
			// reset onreadystatechange of script for browser compatibility bugs (specifically Opera, maybe others)
			script.onload = script.onreadystatechange = null;
			// remove loaded script from head
			head.removeChild(script);
		};
	};
	// add script to head
	head.appendChild(script);
}

function initBVSubmission () {
	// get passed parameters from the url
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
	// load dependant files first
	$.when(
		// jquery ui - loaded through function to check for CDN resource with local fallback
		loadJQueryUI(),
		// modernizr - must load for HTML 5 browser support (includes HTML5 shiv)
		$.getScript(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/js/modernizr.js"),
		// global variables - must load first for bv content
		$.getScript(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + "/bvSDKFramework/models/varsGlobal.js")
	).done(function(){
		// load models (controllers depend on them)
		$.when(
			/* LOAD JS FILES */
			$.getScript(siteBaseURL + "js/custom.js"),
			$.getScript(siteBaseURL + "js/browserSelector.js"),
			$.getScript(siteBaseURL + "js/modernizr.js"),
			// properties
			$.getScript(siteBaseURL + "models/properties/properties.js"),
			// models
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
			$.getScript(siteBaseURL + "models/modelsProductCatalog.js")
		).done(function(){
			// load controllers, plugins, and css files
			$.when(
				// controllers
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
				// plugins
				$.getScript(siteBaseURL + "js/plugins/jquery-cookie.js"),
				$.getScript(siteBaseURL + "js/plugins/jquery.dateFormat.js"),
				$.getScript(siteBaseURL + "js/plugins/jquery.magnific-popup.js"),
				$.getScript(siteBaseURL + "js/plugins/jquery.rating.js"),
				$.getScript(siteBaseURL + "js/plugins/jquery.fileupload.js"),
				$.getScript(siteBaseURL + "js/plugins/jquery.iframe-transport.js"),
				$.getScript(siteBaseURL + "js/plugins/Parsley.js-1.1.16/parsley.js"),
				$.getScript(siteBaseURL + "js/browserSelector.js"),
				// css files
				$("head").append("<link id='' href='" + siteBaseURL + "css/bazaarvoiceUniversal.css' type='text/css' rel='stylesheet' />"),
				$("head").append("<link id='' href='" + siteBaseURL + "css/magnific-popup.css' type='text/css' rel='stylesheet' />"),
				$.get(siteBaseURL + "views/viewsUniversal.html", function(data) {
					$("body").append(data);
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
			}).fail(function(e){
				// console.log("e", e);
			});
		}).fail(function(e){
			// console.log("e", e);
		});
	}).fail(function(e){
		// console.log("e", e);
	});

}
