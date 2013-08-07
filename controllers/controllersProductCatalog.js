/***** PRODUCT INFO *****/

function loadProductInfoWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"body",
		"targetContainer":defaultProductInfoWidgetContainer,
		"viewContainer":defaultProductInfoWidgetContainerView,
		"loadOrder":"",
		"productId":"",
		"modelLocalDefaultSettings":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);

			// add review widget template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);

			// set content variables
			var productsToLoad = content["Results"]; // products

			// load reviews
			$.each (productsToLoad, function(key) {
				loadProductInfo (productsToLoad[key], {
					"parentContainer":$container,
					"productId":settings["productId"]
				});
			});
			// set classes
			addOddEvenClasses (defaultReviewContainer);
			addFirstLastClasses (defaultReviewContainer);
	
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}


function loadProductInfo (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultSubmissionFormContainer, // needs to be given a more specific container if called more than once
		"targetContainer":defaultProductInfoIndividualContainer,
		"viewContainer":defaultProductInfoContainerView,
		"loadOrder":"", // this must be defined in the call
		"productId":"",
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// add input template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			loadProductName (content, {
				"parentContainer":$container
			});
			loadProductDescription (content, {
				"parentContainer":$container
			});
			loadProductImage (content, {
				"parentContainer":$container
			});
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});

}

function loadProductName (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultProductInfoNameContainer,
		"viewContainer":defaultProductInfoNameContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var productNameValue = content['Name'];
			// set title value
			$container.find(defaultProductInfoNameTextContainer).andSelf().filter(defaultProductInfoNameTextContainer).text(productNameValue);
			// add title template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadProductDescription (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultProductInfoDescriptionContainer,
		"viewContainer":defaultProductInfoDescriptionContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var productDescriptionValue = content['Description'];
			// set body text value
			$container.find(defaultProductInfoDescriptionTextContainer).andSelf().filter(defaultProductInfoDescriptionTextContainer).text(productDescriptionValue);
			// add body text template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function loadProductImage (content, options) {
	var settings = $.extend(true, {
		"parentContainer":defaultReviewContainer,
		"targetContainer":defaultProductInfoImageContainer,
		"viewContainer":defaultProductInfoImageContainerView,
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		success: function(container) {
			var $container = $(container);
			// set variables
			var productImageUrlValue = content['ImageUrl'];
			// set body text value
			$container.find(defaultProductInfoImageTagContainer).andSelf().filter(defaultProductInfoImageTagContainer).attr({
				"src":productImageUrlValue
			});
			// add body text template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).html($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

