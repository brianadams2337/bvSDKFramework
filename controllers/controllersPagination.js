/***** PAGINATION *****/


function loadNumberedPagination (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":"", // container must be defined in call
		"viewContainer":defaultPaginationContainerView,
		"modelLocalDefaultSettings":"",
		"paginationSettings":{
			"offset":content["Offset"],
			"limit":content["Limit"],
			"totalResults":content["TotalResults"],
			"displayCount":7,
			"prevBtnBool":true,
			"prevBtnLabel":"Previous Page",
			"nextBtnBool":true,
			"nextBtnLabel":"Next Page",
			"firstBtnBool":true,
			"firstBtnLabel":"First Page",
			"lastBtnBool":true,
			"lastBtnLabel":"Last Page",
			"totalPageBool":false
		},
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllerSettings":""
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set variables
	var pageOffset = settings["paginationSettings"]["offset"];
	var pageLimit = settings["paginationSettings"]["limit"];
	var pageCount = Math.ceil(settings["paginationSettings"]["totalResults"]/pageLimit); // total number of pages
	var pagesToDisplay = settings["paginationSettings"]["displayCount"]; // amount of pagination buttons to display
	
	var currentPage = pageCount - Math.ceil((settings["paginationSettings"]["totalResults"] - pageOffset)/pageLimit); // current page
	var firstPage = 1; // first page
	var firstPageLabel = firstPage + "..."; // first page label
	var lastPage = pageCount; // last page
	var lastPageLabel = "..." + lastPage; // last page label
	var prevPage = currentPage - 1; // previous page
	var prevPageLabel = settings["paginationSettings"]["prevBtnLabel"]; // previous page label
	var nextPage = currentPage + 1; // next page
	var nextPageLabel = settings["paginationSettings"]["nextBtnLabel"]; // next page label

	var startPage = (currentPage - Math.floor(pagesToDisplay/2) + 1); // first pagination link to display - DEFAULT
	var stopPage = (startPage + pagesToDisplay) - 1; // last pagination link to display - DEFAULT
	// add pagination template
	$container.append($template);

	// make sure pagination nav never goes below 1
	if (startPage <= 0) {
		startPage = 1;
		stopPage = ((startPage + pagesToDisplay) - 1);
	}
	
	// make sure pagination nav never goes above total page count
	if (stopPage > pageCount) {
		stopPage = pageCount;
		if (((stopPage - pagesToDisplay) + 1) <= 1) {
			startPage = 1;
		} else {
			startPage = ((stopPage - pagesToDisplay) + 1);
		}
	}

	// check if pagination is needed
	if (pageCount > 1) {
		// prev page button
		if (settings["paginationSettings"]["prevBtnBool"] && prevPage >= 0) {
			// set offset and limit in api call for each button respectively
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = (pageLimit * prevPage);
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["limit"] = pageLimit;
			
			// load button
			loadPaginationButton (prevPageLabel, {
				"parentContainer":$template,
				"targetContainer":defaultPaginationPrevBtnContainer,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		}

		// first page button
		if (settings["paginationSettings"]["firstBtnBool"] && startPage > 1) {
			// set offset and limit in api call for each button respectively
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = (pageLimit * (firstPage - 1));
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["limit"] = pageLimit;
			
			// load button
			loadPaginationButton (firstPageLabel, {
				"parentContainer":$template,
				"targetContainer":defaultPaginationFirstBtnContainer,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		}

		// pagination buttons
		for (var i = startPage; i <= stopPage; i++) {
			if (i == (currentPage + 1)) {
				// set offset and limit in api call for each button respectively
				settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = (pageLimit * (i - 1));
				settings["viewReloadOptions"]["modelSettings"]["Parameters"]["limit"] = pageLimit;
				
				// load button
				loadPaginationButton (i, {
					"parentContainer":$template,
					"targetContainer":defaultPaginationBtnGroupContainer,
					"viewContainer":defaultPaginationButtonSelectedContainerView,
					"viewReloadOptions":settings["viewReloadOptions"]
				});
			} else {
				// set offset and limit in api call for each button respectively
				settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = (pageLimit * (i - 1));
				settings["viewReloadOptions"]["modelSettings"]["Parameters"]["limit"] = pageLimit;

				// load button
				loadPaginationButton (i, {
					"parentContainer":$template,
					"targetContainer":defaultPaginationBtnGroupContainer,
					"viewReloadOptions":settings["viewReloadOptions"]
				});
			}
		}
		if (settings["paginationSettings"]["totalPageBool"]) {
			// show the total number of pages if at the end of the loop
			$template.find(defaultPaginationOutOfTextContainer).andSelf().filter(defaultPaginationOutOfTextContainer).html(pageCount);
		}

		// last page button
		if (settings["paginationSettings"]["lastBtnBool"] && pageCount > stopPage) {
			// set offset and limit in api call for each button respectively
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = (pageLimit * (lastPage - 1));
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["limit"] = pageLimit;
			
			// load button
			loadPaginationButton (lastPageLabel, {
				"parentContainer":$template,
				"targetContainer":defaultPaginationLastBtnContainer,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		}

		// next page button
		if (settings["paginationSettings"]["nextBtnBool"] && nextPage < pageCount) {
			// set offset and limit in api call for each button respectively
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["offset"] = (pageLimit * nextPage);
			settings["viewReloadOptions"]["modelSettings"]["Parameters"]["limit"] = pageLimit;
			
			// load button
			loadPaginationButton (nextPageLabel, {
				"parentContainer":$template,
				"targetContainer":defaultPaginationNextBtnContainer,
				"viewReloadOptions":settings["viewReloadOptions"]
			});
		}

	}
}

function loadPaginationButton (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultPaginationBtnGroupContainer,
		"viewContainer":defaultPaginationButtonContainerView,
		"productId":"",
		"viewReloadOptions":{
			"model":"",
			"modelSettings":"",
			"controller":"",
			"controllerSettings":""
		}
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// add button template
	$container.append($template);
	// set button text
	$($template).find(defaultPaginationBtnContainer).andSelf().filter(defaultPaginationBtnContainer).html(content);
	// apply pagination functionality
	if (!$($template).data("disabled")) {
		$($template).click(function(){
			// container info to refresh
			var refreshContainer = $(settings["viewReloadOptions"]["controllerSettings"]["parentContainer"]).find(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]).andSelf().filter(settings["viewReloadOptions"]["controllerSettings"]["targetContainer"]);
			loadingContainerAnimation(refreshContainer, function() {
				// make new api call
				settings["viewReloadOptions"]["model"] (
					// product id
					settings["productId"],
					// controller callback
					function(content, modelLocalDefaultSettings) {
						// update model settings to represent new data (needed for selcted/disabled states for filters, sorting, and pagination)
						settings["viewReloadOptions"]["controllerSettings"]["modelLocalDefaultSettings"]["Parameters"] = modelLocalDefaultSettings;
						// callback function
						settings["viewReloadOptions"]["controller"](content, settings["viewReloadOptions"]["controllerSettings"]);
					},
					// api call parameters
					settings["viewReloadOptions"]["modelSettings"]
				);
			});
		});
	}
}