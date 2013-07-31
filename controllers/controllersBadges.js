var defaultBadgesUserOrder = [
	"top1Contributor",
	"top10Contributor",
	"top25Contributor",
	"top50Contributor",
	"top100Contributor",
	"top250Contributor",
	"top500Contributor",
	"top1000Contributor",
	"Expert",
	"Staff",
	"VerifiedPurchaser",
	"SocialAnsweringSubscriber",
]

var defaultBadgesContentOrder = [
	"featured",
]

function loadReviewBadges (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultBadgesContainer,
		"viewContainer":defaultIndividualBadgeContainerView,
		"loadOrder":content["BadgesOrder"],
		"productId":""
	}, options);
	$.each(settings["loadOrder"], function(index) {
		// current iteration of loop
		var cur = settings["loadOrder"][index];
		if (content["Badges"][cur]) {
			console.log(content["Badges"][cur]);
			$.ajax({
				url: settings["viewContainer"],
				type: 'GET',
				dataType: 'html',
				async: false,
				success: function(container) {
					var $container = $(container);
					// set text variables
					var badgeId = content["Badges"][cur]["Id"];
					var badgeType = content["Badges"][cur]["BadgeType"];
					var contentType = content["Badges"][cur]["ContentType"];
					
					// add badge container template
					$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);

					// get correct view for badge text
					var view = returnBadgeTextView(badgeId);
					// load badge text			
					loadBadgeContent (content["Badges"][cur], {
						"parentContainer":$container,
						"viewContainer":view
					});
				},
				error: function(e) {
					defaultAjaxErrorFunction(e);
				}
			});
		}
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
				
				// add badge container template
				$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);

				// get correct view for badge text
				var view = returnBadgeTextView(badgeId);
				// load badge text			
				loadBadgeContent (content["Badges"][cur], {
					"parentContainer":$container,
					"viewContainer":view
				});
			},
			error: function(e) {
				defaultAjaxErrorFunction(e);
			}
		});
	});
}

function loadBadgeContent (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"",
		"targetContainer":defaultBadgeTextContainer,
		"viewContainer":"",
		"loadOrder":"",
		"productId":""
	}, options);
	$.ajax({
		url: settings["viewContainer"],
		type: 'GET',
		dataType: 'html',
		async: false,
		success: function(container) {
			var $container = $(container);
			// set text variables
			var badgeId = content["Id"];
			var badgeType = content["BadgeType"];
			var contentType = content["ContentType"];
			// set class variables
			var badgeClass = "BVBadge_" + badgeId;
			var typeClass = "BVBadge_" + badgeType;
			// set badge value
			$container.find(defaultBadgeTextContainer).andSelf().filter(defaultBadgeTextContainer).addClass(badgeClass + " " + typeClass);
			// add badge container template
			$(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]).append($container);
		},
		error: function(e) {
			defaultAjaxErrorFunction(e);
		}
	});
}

function returnBadgeTextView (content) {

	var v = "";

	switch (content) {
		case "top1Contributor" :
			v = defaultBadgesUniversal["top1Contributor"]
			break;
		case "top10Contributor" :
			v = defaultBadgesUniversal["top10Contributor"]
			break;
		case "top25Contributor" :
			v = defaultBadgesUniversal["top25Contributor"]
			break;
		case "top50Contributor" :
			v = defaultBadgesUniversal["top50Contributor"]
			break;
		case "top100Contributor" :
			v = defaultBadgesUniversal["top100Contributor"]
			break;
		case "top250Contributor" :
			v = defaultBadgesUniversal["top250Contributor"]
			break;
		case "top500Contributor" :
			v = defaultBadgesUniversal["top500Contributor"]
			break;
		case "top1000Contributor" :
			v = defaultBadgesUniversal["top1000Contributor"]
			break;
		case "featured" :
			v = defaultBadgesUniversal["featured"]
			break;
		case "Expert" :
			v = defaultBadgesUniversal["expert"]
			break;
		case "Staff" :
			v = defaultBadgesUniversal["staff"]
			break;
		case "VerifiedPurchaser" :
			v = defaultBadgesUniversal["verifiedPurchaser"]
			break;
		case "SocialAnsweringSubscriber" :
			v = defaultBadgesUniversal["socialAnsweringSubscriber"]
			break;
		default :
			v = defaultBadgesUniversal["default"]
			break;
	}

	return v;

}