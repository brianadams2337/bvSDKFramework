var defaultBadgesUserOrder = {
    "top1Contributor":defaultBadgesUniversal["top1Contributor"],
    "top10Contributor":defaultBadgesUniversal["top10Contributor"],
    "top25Contributor":defaultBadgesUniversal["top25Contributor"],
    "top50Contributor":defaultBadgesUniversal["top50Contributor"],
    "top100Contributor":defaultBadgesUniversal["top100Contributor"],
    "top250Contributor":defaultBadgesUniversal["top250Contributor"],
    "top500Contributor":defaultBadgesUniversal["top500Contributor"],
    "top1000Contributor":defaultBadgesUniversal["top1000Contributor"],
    "Expert":defaultBadgesUniversal["expert"],
    "Staff":defaultBadgesUniversal["staff"],
    "VerifiedPurchaser":defaultBadgesUniversal["verifiedPurchaser"],
    "SocialAnsweringSubscriber":defaultBadgesUniversal["socialAnsweringSubscriber"],

    /* BBY SPECIFIC */

    "EliteContributor":defaultBadgesBestBuy["EliteContributor"],
    "TopContributorsArchived":defaultBadgesBestBuy["TopContributorsArchived"],
    "EliteReviewer":defaultBadgesBestBuy["EliteReviewer"],
    "BlogHerReviewer":defaultBadgesBestBuy["BlogHerReviewer"],
    "BusinessUser":defaultBadgesBestBuy["BusinessUser"],
    "RewardZone":defaultBadgesBestBuy["RewardZone"],
    "RewardZoneSilver":defaultBadgesBestBuy["RewardZoneSilver"],
    "RewardZoneNumber":defaultBadgesBestBuy["RewardZoneNumber"],
    "RewardZoneNumberSilver":defaultBadgesBestBuy["RewardZoneNumberSilver"],
    "RewardZoneNumberV3":defaultBadgesBestBuy["RewardZoneNumberV3"],
    "RewardZoneNumberSilverV3":defaultBadgesBestBuy["RewardZoneNumberSilverV3"],
    "RewardZoneMember":defaultBadgesBestBuy["RewardZoneMember"],
    "RewardZoneMemberUnlocked":defaultBadgesBestBuy["RewardZoneMemberUnlocked"],
    "RewardZonePremierSilverReview":defaultBadgesBestBuy["RewardZonePremierSilverReview"],
    "DellSupport":defaultBadgesBestBuy["DellSupport"],
    "SlingMedia":defaultBadgesBestBuy["SlingMedia"],
    "Sennheiser":defaultBadgesBestBuy["Sennheiser"],
    "EcReviewer":defaultBadgesBestBuy["EcReviewer"],
};

var defaultBadgesContentOrder = {
    "featured":defaultBadgesUniversal["featured"],
    "EcProductReview":defaultBadgesBestBuy["EcProductReview"],
};

function loadBadges (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultBadgesContainer,
		"viewContainer":defaultIndividualBadgeContainerView,
		"loadOrder":content["BadgesOrder"],
	}, options);
	$.each(settings["loadOrder"], function(key, value) {
		if (content["Badges"][key]) {
			// set container & template
			var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
			var $template = $.parseHTML($(settings["viewContainer"]).html());
			// set text variables
			var badgeId = content["Badges"][key]["Id"];
			var badgeType = content["Badges"][key]["BadgeType"];
			var contentType = content["Badges"][key]["ContentType"];
			// add badge template
			$container.append($template);

			// load badge text			
			loadBadgeContent (content["Badges"][key], {
				"parentContainer":$template,
				"viewContainer":value
			});
		}
	});
}

function loadBadgeContent (content, options) {
	var settings = $.extend(true, {
		"parentContainer":"", // container must be defined in call
		"targetContainer":defaultBadgeTextContainer,
		"viewContainer":"",
	}, options);
	// set container & template
	var $container = $(settings["parentContainer"]).find(settings["targetContainer"]).andSelf().filter(settings["targetContainer"]);
	var $template = $.parseHTML($(settings["viewContainer"]).html());
	// set text variables
	var badgeId = content["Id"];
	var badgeType = content["BadgeType"];
	var contentType = content["ContentType"];
	// set class variables
	var badgeClass = "BVBadge_" + badgeId;
	var typeClass = "BVBadge_" + badgeType;
	// add badge value template
	$container.append($template);
	// set badge class
	$($template).find(defaultBadgeTextContainer).andSelf().filter(defaultBadgeTextContainer).addClass(badgeClass + " " + typeClass);
}
