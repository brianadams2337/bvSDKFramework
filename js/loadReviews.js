$(document).ready(function() {
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
					initBVReviews();
				})
			} else {
				// jquery script loaded successfully
				if (!otherJSLibrary) {
					// no conflicts - init bv
					initBVReviews();
				} else {
					// possible conflicts with other library
					// $.noConflict();
					initBVReviews();
				}
			}
		});
		
	} else {
		// jQuery was already loaded
		initBVReviews();
	}

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

	function initBVReviews () {
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
				$.getScript(siteBaseURL + "js/browserSelector.js"),
				$.getScript(siteBaseURL + "js/modernizr.js"),
				// properties
				$.getScript(siteBaseURL + "models/properties/properties.js"),
				// models
				$.getScript(siteBaseURL + "models/varsTemplates.js"),
				$.getScript(siteBaseURL + "models/varsUniversal.js"),
				$.getScript(siteBaseURL + "models/varsReviews.js"),
				$.getScript(siteBaseURL + "models/varsReviewComments.js"),
				$.getScript(siteBaseURL + "models/varsFeedback.js"),
				$.getScript(siteBaseURL + "models/varsSubmission.js"),
				$.getScript(siteBaseURL + "models/modelsGlobal.js"),
				$.getScript(siteBaseURL + "models/modelsReviews.js"),
				$.getScript(siteBaseURL + "models/modelsReviewComments.js"),
				$.getScript(siteBaseURL + "models/modelsFeedback.js")
			).done(function(){
				// load controllers, plugins, and css files
				$.when(
					// controllers
					$.getScript(siteBaseURL + "controllers/controllersGlobal.js"),
					$.getScript(siteBaseURL + "controllers/controllersEventListeners.js"),
					$.getScript(siteBaseURL + "controllers/controllersSubmission.js"),
					$.getScript(siteBaseURL + "controllers/controllersReviews.js"),
					$.getScript(siteBaseURL + "controllers/controllersReviewComments.js"),
					$.getScript(siteBaseURL + "controllers/controllersFeedback.js"),
					$.getScript(siteBaseURL + "controllers/controllersPagination.js"),
					$.getScript(siteBaseURL + "controllers/controllersSorting.js"),
					$.getScript(siteBaseURL + "controllers/controllersFilters.js"),
					$.getScript(siteBaseURL + "controllers/controllersBadges.js"),
					$.getScript(siteBaseURL + "controllers/controllersHistogram.js"),
					// plugins
					$.getScript(siteBaseURL + "js/plugins/jquery-cookie.js"),
					$.getScript(siteBaseURL + "js/plugins/jquery.dateFormat.js"),
					$.getScript(siteBaseURL + "js/plugins/jquery.magnific-popup.js"),
					$.getScript(siteBaseURL + "js/browserSelector.js"),
					$.getScript(siteBaseURL + "js/custom.js"),
					// css files
					$("head").append("<link href='" + siteBaseURL + "css/bazaarvoiceUniversal.css' type='text/css' rel='stylesheet' />"),
					$("head").append("<link href='" + siteBaseURL + "css/magnific-popup.css' type='text/css' rel='stylesheet' />"),
					$.get(siteBaseURL + "views/viewsUniversal.html", function(data) {
						$("body").append(data);
					})
				).done(function(){
					// load reviews
					getAllReviews (productId, defaultReviewsParentContainer, function(content, modelLocalDefaultSettings) {
						// callback function
						loadReviewWidget (content, {
							"parentContainer":defaultReviewsParentContainer,
							"productId":productId,
							"modelLocalDefaultSettings":{
								"Parameters":modelLocalDefaultSettings
							}
						});
					}, {
						// api parameters
						"Parameters":{
							//"limit":1,
							"filter":{
								//"isfeatured":true,
								//"hasphotos":false,
								//"hascomments":true,
								//"contextdatavalue_Gender":"Male",
								//"contextdatavalue_Age": "18to24",
							},
							"sort":{
								//"contextdatavalue_Age": "asc",
							}
						}
					});
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
				}).fail(function(e){
					console.log(e);
				});
			}).fail(function(e){
				console.log(e);
			});
		}).fail(function(e){
			console.log(e);
		});
	}
});