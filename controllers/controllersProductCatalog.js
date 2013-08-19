/***** PRODUCT INFO *****/

function loadProductInfoWidget (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultProductInfoWidgetContainer,
		"viewContainer":defaultProductInfoWidgetContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productsToLoad = content["Results"]; // products
	// add product info widget template
	$container.append($template);
	// load products
	if (productsToLoad != undefined) {
		$.each (productsToLoad, function(key) {
			loadProductInfo (productsToLoad[key], {
				"parentContainer":$template,
			});
		});
	}
	// set classes
	addOddEvenClasses (defaultReviewContainer);
	addFirstLastClasses (defaultReviewContainer);
}

function loadProductInfo (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultProductInfoIndividualContainer,
		"viewContainer":defaultProductInfoContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// add body template
	$container.append($template);
	// load product name
	loadProductName (content, {
		"parentContainer":$template
	});
	// load product description
	loadProductDescription (content, {
		"parentContainer":$template
	});
	// load product image
	loadProductImage (content, {
		"parentContainer":$template
	});
}

function loadProductName (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultProductInfoNameContainer,
		"viewContainer":defaultProductInfoNameContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productNameValue = content['Name'];
	// add name template
	$container.append($template);
	// set name value
	$($template).find(defaultProductInfoNameTextContainer).andSelf().filter(defaultProductInfoNameTextContainer).text(productNameValue);
}

function loadProductDescription (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultProductInfoDescriptionContainer,
		"viewContainer":defaultProductInfoDescriptionContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productDescriptionValue = content['Description'];
	// add description template
	$container.append($template);
	// set description text value
	$($template).find(defaultProductInfoDescriptionTextContainer).andSelf().filter(defaultProductInfoDescriptionTextContainer).text(productDescriptionValue);
}

function loadProductImage (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultProductInfoImageContainer,
		"viewContainer":defaultProductInfoImageContainerView,
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = returnTemplate(settings["viewContainer"]);
	// set variables
	var productImageUrlValue = content['ImageUrl'];
	// add image template
	$container.append($template);
	// set image attr
	$($template).find(defaultProductInfoImageTagContainer).andSelf().filter(defaultProductInfoImageTagContainer).attr({
		"src":productImageUrlValue
	});
}
