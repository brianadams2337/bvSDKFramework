/************************* UNIVERSAL *************************/



/***** HEADERS *****/



var defaultPageHeaderContainerView = siteBaseURL + "views/universal/headers/headerPageContainer.html"; // page header
var defaultSectionHeaderContainerView = siteBaseURL + "views/universal/headers/headerSectionContainer.html"; // section header



/***** BUTTONS *****/



var defaultButtonContainerView = siteBaseURL + "views/universal/general/buttonContainer.html"; // generic button module



/***** QUICK TAKE *****/



var defaultQuickTakeContainerView = siteBaseURL + "views/universal/quicktake/quickTakeContainer.html"; // quick take module



/***** FILTERS *****/



var defaultFilterGroupContainerView = siteBaseURL + "views/universal/filters/filterGroupContainer.html"; // filter group module
var defaultFilterIndividualContainerView = siteBaseURL + "views/universal/filters/filterIndividualContainer.html"; // filter group module



/***** REVIEWS *****/



// main templates
var defaultReviewWidgetContainerView = siteBaseURL + "views/reviews/display/reviewWidgetContainer.html" // entire review widget
var defaultReviewContainerView = siteBaseURL + "views/reviews/display/reviewContainer.html"; // individual review module

// ratings templates
var defaultOverallRatingContainerView = siteBaseURL + "views/reviews/display/overallRatingContainer.html"; // overall rating module
var defaultSecondaryRatingIndividualContainerView = siteBaseURL + "views/reviews/display/secondaryRatingIndividualContainer.html"; // secondary rating module

// review content templates
var defaultReviewTitleContainerView = siteBaseURL + "views/universal/display/titleContainer.html"; // review title module
var defaultReviewBodyTextContainerView = siteBaseURL + "views/universal/display/bodyTextContainer.html"; // review text module
var defaultReviewDateContainerView = siteBaseURL + "views/universal/display/dateContainer.html"; // date module
var defaultReviewRecommededContainerView = siteBaseURL + "views/reviews/display/recommendedContainer.html"; // is recommended module

// tags templates
var defaultReviewTagsContainerView = siteBaseURL + "views/universal/display/tagGroupContainer.html"; // all tags module
var defaultReviewTagContainerView = siteBaseURL + "views/universal/display/tagIndividualContainer.html"; // individual tag module

// user info templates
var defaultReviewUserNicknameContainerView = siteBaseURL + "views/universal/display/nicknameContainer.html"; // nickname module
var defaultReviewUserLocationContainerView = siteBaseURL + "views/universal/display/locationContainer.html"; // location module

// context data value templates
var defaultReviewContextDataValueContainerView = siteBaseURL + "views/universal/display/contextDataValueIndividualContainer.html"; // context data values module

// additional fields templates
var defaultReviewAdditionalFieldContainerView = siteBaseURL + "views/universal/display/additionalFieldIndividualContainer.html"; // additional fields module

// media templates
var defaultReviewPhotoContainerView = siteBaseURL + "views/universal/media/photoThumbnailContainer.html"; // photos module
var defaultReviewVideoContainerView = siteBaseURL + "views/universal/media/videoThumbnailContainer.html"; // videos module



/***** REVIEW COMMENTS*****/



// main templates
var defaultReviewCommentWidgetContainerView = siteBaseURL + "views/review_comments/display/reviewCommentsWidgetContainer.html"
var defaultReviewCommentContainerView = siteBaseURL + "views/review_comments/display/reviewCommentContainer.html"; // individual review module

// review comment content templates
var defaultReviewCommentTitleContainerView = siteBaseURL + "views/universal/display/titleContainer.html"; // review title module
var defaultReviewCommentBodyTextContainerView = siteBaseURL + "views/universal/display/bodyTextContainer.html"; // review text module
var defaultReviewCommentDateContainerView = siteBaseURL + "views/universal/display/dateContainer.html"; // date module

// user info templates
var defaultReviewCommentUserNicknameContainerView = siteBaseURL + "views/universal/display/nicknameContainer.html"; // nickname module
var defaultReviewCommentUserLocationContainerView = siteBaseURL + "views/universal/display/locationContainer.html"; // location module
var defaultReviewCommentContextDataValueContainerView = siteBaseURL + "views/universal/display/contextDataValueIndividualContainer.html"; // context data values module

// media templates
var defaultReviewCommentPhotoContainerView = siteBaseURL + "views/universal/media/photoThumbnailContainer.html"; // photos module
var defaultReviewCommentVideoContainerView = siteBaseURL + "views/universal/media/videoThumbnailContainer.html"; // videos module



/***** QUESTIONS *****/



// main templates
var defaultQuestionAnswerContainerView = siteBaseURL + "views/questions/display/questionContainer.html"; // individual question module

// question content templates
var defaultQuestionTitleContainerView = siteBaseURL + "views/universal/display/titleContainer.html"; // question title module
var defaultQuestionBodyTextContainerView = siteBaseURL + "views/universal/display/bodyTextContainer.html"; // question text module
var defaultQuestionDateContainerView = siteBaseURL + "views/universal/display/dateContainer.html"; // question date module

// user info templates
var defaultQuestionUserNicknameContainerView = siteBaseURL + "views/universal/display/nicknameContainer.html"; // question nickname module
var defaultQuestionUserLocationContainerView = siteBaseURL + "views/universal/display/locationContainer.html"; // question location module

// context data value templates
var defaultQuestionContextDataValueContainerView = siteBaseURL + "views/universal/display/contextDataValueIndividualContainer.html"; // question context data values module

// tag templates
var defaultQuestionTagsContainerView = siteBaseURL + "views/universal/display/tagGroupContainer.html"; // question tag group module
var defaultQuestionTagContainerView = siteBaseURL + "views/universal/display/tagIndividualContainer.html"; // question individual tag module

// additional field templates
var defaultQuestionAdditionalFieldContainerView = siteBaseURL + "views/universal/display/additionalFieldIndividualContainer.html"; // question additional field module

// media templates
var defaultQuestionPhotoContainerView = siteBaseURL + "views/universal/media/photoThumbnailContainer.html"; // question photo module
var defaultQuestionVideoContainerView = siteBaseURL + "views/universal/media/videoThumbnailContainer.html"; // question video module



/***** FEEDBACK *****/



var defaultFeedbackContainerView = siteBaseURL + "views/universal/feedback/feedbackContainer.html"; // all feedback (count and voting) module
var defaultFeedbackCountContainerView = siteBaseURL + "views/universal/feedback/feedbackCountContainer.html"; // feedback count module
var defaultFeedbackVotingContainerView = siteBaseURL + "views/universal/feedback/feedbackVotingContainer.html"; // feedback voting module

var defaultReportInappropriateContainerView = siteBaseURL + "views/universal/feedback/reportInappropriateContainer.html"; // report inappropriate module
var defaultReportInappropriateFormContainerView = siteBaseURL + "views/universal/feedback/submissionFormFeedback.html" // report inappropriate form module



/***** BADGES *****/



var defaultIndividualBadgeContainerView = siteBaseURL + "views/universal/display/badgeIndividualContainer.html"; // generic individual badge module

var defaultBadgesUniversal = {
	"top1Contributor" : siteBaseURL + "views/universal/badges/badgeContributor1TextContainer.html",
	"top10Contributor" : siteBaseURL + "views/universal/badges/badgeContributor10TextContainer.html",
	"top25Contributor" : siteBaseURL + "views/universal/badges/badgeContributor25TextContainer.html",
	"top50Contributor" : siteBaseURL + "views/universal/badges/badgeContributor50TextContainer.html",
	"top100Contributor" : siteBaseURL + "views/universal/badges/badgeContributor100TextContainer.html",
	"top250Contributor" : siteBaseURL + "views/universal/badges/badgeContributor250TextContainer.html",
	"top500Contributor" : siteBaseURL + "views/universal/badges/badgeContributor500TextContainer.html",
	"top1000Contributor" : siteBaseURL + "views/universal/badges/badgeContributor1000TextContainer.html",
	"featured" : siteBaseURL + "views/universal/badges/badgeFeaturedTextContainer.html",
	"expert" : siteBaseURL + "views/universal/badges/badgeExpertTextContainer.html",
	"staff" : siteBaseURL + "views/universal/badges/badgeStaffTextContainer.html",
	"verifiedPurchaser" : siteBaseURL + "views/universal/badges/badgeVerifiedPurchaserTextContainer.html",
	"socialAnsweringSubscriber" : siteBaseURL + "views/universal/badges/badgeSocialAnsweringSubscriberTextContainer.html",
	"default" : siteBaseURL + "views/universal/badges/badgeDefaultTextContainer.html",
}

var defaultBadgesBestBuy = {
    /* BBY SPECIFIC */
    "EliteContributor" : siteBaseURL + "views/universal/badges/badgeEliteContributorTextContainer.html",
    "TopContributorsArchived" : siteBaseURL + "views/universal/badges/badgeTopContributorsArchivedTextContainer.html",
    "EliteReviewer" : siteBaseURL + "views/universal/badges/badgeEliteReviewerTextContainer.html",
    "BlogHerReviewer" : siteBaseURL + "views/universal/badges/badgeBlogHerReviewerTextContainer.html",
    "BusinessUser" : siteBaseURL + "views/universal/badges/badgeBusinessUserTextContainer.html",
    "RewardZone" : siteBaseURL + "views/universal/badges/badgeRewardZoneTextContainer.html",
    "RewardZoneSilver" : siteBaseURL + "views/universal/badges/badgeRewardZoneSilverTextContainer.html",
    "RewardZoneNumber" : siteBaseURL + "views/universal/badges/badgeRewardZoneNumberTextContainer.html",
    "RewardZoneNumberSilver" : siteBaseURL + "views/universal/badges/badgeRewardZoneNumberSilverTextContainer.html",
    "RewardZoneNumberV3" : siteBaseURL + "views/universal/badges/badgeRewardZoneNumberV3TextContainer.html",
    "RewardZoneNumberSilverV3" : siteBaseURL + "views/universal/badges/badgeRewardZoneNumberSilverV3TextContainer.html",
    "RewardZoneMember" : siteBaseURL + "views/universal/badges/badgeRewardZoneMemberTextContainer.html",
    "RewardZoneMemberUnlocked" : siteBaseURL + "views/universal/badges/badgeRewardZoneMemberUnlockedTextContainer.html",
    "RewardZonePremierSilverReview" : siteBaseURL + "views/universal/badges/badgeRewardZonePremierSilverReviewTextContainer.html",
    "DellSupport" : siteBaseURL + "views/universal/badges/badgeDellSupportTextContainer.html",
    "SlingMedia" : siteBaseURL + "views/universal/badges/badgeSlingMediaTextContainer.html",
    "Sennheiser" : siteBaseURL + "views/universal/badges/badgeSennheiserTextContainer.html",
    "EcReviewer" : siteBaseURL + "views/universal/badges/badgeEcReviewerTextContainer.html",
    "EcProductReview" : siteBaseURL + "views/universal/badges/badgeEcProductReviewTextContainer.html",
}



/***** PAGINATION *****/



var defaultPaginationContainerView = siteBaseURL + "views/universal/pagination/paginationContainer.html"; // entire pagination module
var defaultPaginationButtonContainerView = siteBaseURL + "views/universal/pagination/paginationButtonContainer.html" // individual pagination button module



/************************* SUBMISSION ******************************/



/***** GENERIC INPUT *****/



// generic
var defaultInputContainerView = siteBaseURL + "views/universal/submission/inputContainer.html"; // generic input module

// text inputs
var defaultInputTextFieldContainerView = siteBaseURL + "views/universal/submission/inputTextFieldContainer.html"; // text field module
var defaultInputTextAreaContainerView = siteBaseURL + "views/universal/submission/inputTextAreaContainer.html"; // text area module
var defaultInputTextAreaWithCharacterCounterContainerView = siteBaseURL + "views/universal/submission/inputTextAreaWithCharacterCounter.html" // text area module with character counter

// checkboxes
var defaultInputCheckboxGroupContainerView = siteBaseURL + "views/universal/submission/inputCheckboxGroupContainer.html"; // checkbox group module
var defaultInputCheckboxIndividualContainerView = siteBaseURL + "views/universal/submission/inputCheckboxIndividualContainer.html"; // checkbox individual module
var defaultInputCheckboxContainerView = siteBaseURL + "views/universal/submission/inputCheckboxContainer.html"; // checkbox input module

// radio buttons
var defaultInputRadioGroupContainerView = siteBaseURL + "views/universal/submission/inputRadioGroupContainer.html"; // radio group module
var defaultInputRadioIndividualContainerView = siteBaseURL + "views/universal/submission/inputRadioIndividualContainer.html"; // radio individual module
var defaultInputRadioContainerView = siteBaseURL + "views/universal/submission/inputRadioContainer.html"; // radio input module

// select/option (dropdown)
var defaultInputSelectContainerView = siteBaseURL + "views/universal/submission/inputSelectContainer.html"; // select (dropdown) module
var defaultInputSelectOptionContainerView = siteBaseURL + "views/universal/submission/inputSelectOptionContainer.html"; // option (dropdown) module



/***** UNIVERSAL *****/



// context data value templates
var defaultContextDataValueContainerView = siteBaseURL + "views/universal/submission/inputContextDataValueContainer.html"; // context data value module

// additional field templates
var defaultAdditionalFieldContainerView = siteBaseURL + "views/universal/submission/inputAdditionalFieldsContainer.html"; // additional field module

// tag templates
var defaultTagIndividualGroupContainerView = siteBaseURL + "views/universal/submission/inputTagIndividualContainer.html"; // tag individual group module
var defaultTagIndividualContainerView = siteBaseURL + "views/universal/submission/inputTagContainer.html"; // tag individual input module

// checkbox templates
var defaultTermsConditionsContainerView = siteBaseURL + "views/universal/submission/inputTermsConditionsContainer.html"; // tag individual input module
var defaultEmailWhenCommentedContainerView = siteBaseURL + "views/universal/submission/inputEmailWhenCommentedContainer.html"; // tag individual input module
var defaultEmailAlertWhenPublishedContainerView = siteBaseURL + "views/universal/submission/inputEmailWhenPublishedContainer.html"; // tag individual input module



/***** REVIEW SPECIFIC *****/


// main templates
var defaultSubmissionWidgetContainerView = siteBaseURL + "views/reviews/submission/reviewSubmissionWidgetContainer.html"
var defaultSubmissionPreviewWidgetContainerView = siteBaseURL + "views/reviews/submission/reviewSubmissionPreviewWidgetContainer.html";
var defaultSubmissionThankYouWidgetContainerView = siteBaseURL + "views/reviews/submission/reviewSubmissionThankYouWidgetContainer.html";

var defaultSubmissionFormContainerView = siteBaseURL + "views/reviews/submission/submissionFormReviewContainer.html";


// ratings templates
var defaultSecondaryRatingContainerView = siteBaseURL + "views/reviews/submission/inputSecondaryRatingContainer.html"; // secondary rating module
var defaultInputRadioOverallRatingContainerView = siteBaseURL + "views/reviews/submission/inputRadioOverallRatingContainer.html"; // overall rating radio input module
var defaultInputRadioSecondaryRatingContainerView = siteBaseURL + "views/reviews/submission/inputRadioSecondaryRatingContainer.html"; // secondary rating radio input module



/***** REVIEW COMMENT SPECIFIC *****/


// main templates
var defaultSubmissionReviewCommentWidgetContainerView = siteBaseURL + "views/review_comments/submission/reviewCommentSubmissionWidgetContainer.html"
var defaultSubmissionReviewCommentPreviewWidgetContainerView = siteBaseURL + "views/review_comments/submission/reviewCommentSubmissionPreviewWidgetContainer.html";
var defaultSubmissionReviewCommentThankYouWidgetContainerView = siteBaseURL + "views/review_comments/submission/reviewCommentSubmissionThankYouWidgetContainer.html";

var defaultSubmissionFormReviewCommentContainerView = siteBaseURL + "views/review_comments/submission/submissionFormReviewCommentContainer.html" // review comment submission form module
