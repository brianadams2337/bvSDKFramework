function loadReviewBadges (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultBadgesContainer,
		"viewContainer":defaultIndividualBadgeContainerView,
		"loadOrder":content["BadgesOrder"],
		"productId":""
	}, options);
	$.each(settings["loadOrder"], function(index) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][index];
				// set text variables
				var badgeId = content["Badges"][cur]["Id"];
				var badgeType = content["Badges"][cur]["BadgeType"];
				var contentType = content["Badges"][cur]["ContentType"];
				// set class variables
				var badgeClass = "BVBadge_" + badgeId;
				var typeClass = "BVBadge_" + badgeType;
				// set badge value
				$container.find(defaultBadgeTextContainer).andSelf().filter(defaultBadgeTextContainer).text(badgeId).addClass(badgeClass + " " + typeClass);
				// add badge container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadCommentBadges (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultBadgesContainer,
		"viewContainer":defaultIndividualBadgeContainerView,
		"loadOrder":content["BadgesOrder"],
		"productId":""
	}, options);
	$.each(settings["loadOrder"], function(index) {
		$.ajax({
			url: settings["viewContainer"],
			type: 'GET',
			dataType: 'html',
			async: false,
			success: function(container) {
				var $container = $(container);
				// current iteration of loop
				var cur = settings["loadOrder"][index];
				// set text variables
				var badgeId = content["Badges"][cur]["Id"];
				var badgeType = content["Badges"][cur]["BadgeType"];
				var contentType = content["Badges"][cur]["ContentType"];
				// set class variables
				var badgeClass = "BVBadge_" + badgeId;
				var typeClass = "BVBadge_" + badgeType;
				// set badge value
				$container.find(defaultBadgeTextContainer).andSelf().filter(defaultBadgeTextContainer).text(badgeId).addClass(badgeClass + " " + typeClass);
				// add badge container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}