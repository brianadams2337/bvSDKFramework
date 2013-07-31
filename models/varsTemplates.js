


/************************* UNIVERSAL *************************/



/***** HEADERS *****/



var defaultPageHeaderContainerView = "views/universal/headers/headerPageContainer.html"; // page header
var defaultSectionHeaderContainerView = "views/universal/headers/headerSectionContainer.html"; // section header



/***** BUTTONS *****/



var defaultButtonContainerView = "views/universal/general/buttonContainer.html"; // generic button module



/***** QUICK TAKE *****/



var defaultQuickTakeContainerView = "views/universal/quicktake/quickTakeContainer.html"; // quick take module



/***** FILTERS *****/



var defaultFilterGroupContainerView = "views/universal/filters/filterGroupContainer.html"; // filter group module
var defaultFilterIndividualContainerView = "views/universal/filters/filterIndividualContainer.html"; // filter group module



/***** REVIEWS *****/



// main templates
var defaultReviewWidgetContainerView = "views/reviews/display/reviewWidgetContainer.html" // entire review widget
var defaultReviewContainerView = "views/reviews/display/reviewContainer.html"; // individual review module

// ratings templates
var defaultOverallRatingContainerView = "views/reviews/display/overallRatingContainer.html"; // overall rating module
var defaultSecondaryRatingIndividualContainerView = "views/reviews/display/secondaryRatingIndividualContainer.html"; // secondary rating module

// review content templates
var defaultReviewTitleContainerView = "views/universal/display/titleContainer.html"; // review title module
var defaultReviewBodyTextContainerView = "views/universal/display/bodyTextContainer.html"; // review text module
var defaultReviewDateContainerView = "views/universal/display/dateContainer.html"; // date module
var defaultReviewRecommededContainerView = "views/reviews/display/recommendedContainer.html"; // is recommended module

// tags templates
var defaultReviewTagsContainerView = "views/universal/display/tagGroupContainer.html"; // all tags module
var defaultReviewTagContainerView = "views/universal/display/tagIndividualContainer.html"; // individual tag module

// user info templates
var defaultReviewUserNicknameContainerView = "views/universal/display/nicknameContainer.html"; // nickname module
var defaultReviewUserLocationContainerView = "views/universal/display/locationContainer.html"; // location module

// context data value templates
var defaultReviewContextDataValueContainerView = "views/universal/display/contextDataValueIndividualContainer.html"; // context data values module

// additional fields templates
var defaultReviewAdditionalFieldContainerView = "views/universal/display/additionalFieldIndividualContainer.html"; // additional fields module

// media templates
var defaultReviewPhotoContainerView = "views/universal/media/photoThumbnailContainer.html"; // photos module
var defaultReviewVideoContainerView = "views/universal/media/videoThumbnailContainer.html"; // videos module



/***** REVIEW COMMENTS*****/



// main templates
var defaultReviewCommentWidgetContainerView = "views/review_comments/display/reviewCommentsWidgetContainer.html"
var defaultReviewCommentContainerView = "views/review_comments/display/reviewCommentContainer.html"; // individual review module

// review comment content templates
var defaultReviewCommentTitleContainerView = "views/universal/display/titleContainer.html"; // review title module
var defaultReviewCommentBodyTextContainerView = "views/universal/display/bodyTextContainer.html"; // review text module
var defaultReviewCommentDateContainerView = "views/universal/display/dateContainer.html"; // date module

// user info templates
var defaultReviewCommentUserNicknameContainerView = "views/universal/display/nicknameContainer.html"; // nickname module
var defaultReviewCommentUserLocationContainerView = "views/universal/display/locationContainer.html"; // location module
var defaultReviewCommentContextDataValueContainerView = "views/universal/display/contextDataValueIndividualContainer.html"; // context data values module

// media templates
var defaultReviewCommentPhotoContainerView = "views/universal/media/photoThumbnailContainer.html"; // photos module
var defaultReviewCommentVideoContainerView = "views/universal/media/videoThumbnailContainer.html"; // videos module



/***** QUESTIONS *****/



// main templates
var defaultQuestionAnswerContainerView = "views/questions/display/questionContainer.html"; // individual question module

// question content templates
var defaultQuestionTitleContainerView = "views/universal/display/titleContainer.html"; // question title module
var defaultQuestionBodyTextContainerView = "views/universal/display/bodyTextContainer.html"; // question text module
var defaultQuestionDateContainerView = "views/universal/display/dateContainer.html"; // question date module

// user info templates
var defaultQuestionUserNicknameContainerView = "views/universal/display/nicknameContainer.html"; // question nickname module
var defaultQuestionUserLocationContainerView = "views/universal/display/locationContainer.html"; // question location module

// context data value templates
var defaultQuestionContextDataValueContainerView = "views/universal/display/contextDataValueIndividualContainer.html"; // question context data values module

// tag templates
var defaultQuestionTagsContainerView = "views/universal/display/tagGroupContainer.html"; // question tag group module
var defaultQuestionTagContainerView = "views/universal/display/tagIndividualContainer.html"; // question individual tag module

// additional field templates
var defaultQuestionAdditionalFieldContainerView = "views/universal/display/additionalFieldIndividualContainer.html"; // question additional field module

// media templates
var defaultQuestionPhotoContainerView = "views/universal/media/photoThumbnailContainer.html"; // question photo module
var defaultQuestionVideoContainerView = "views/universal/media/videoThumbnailContainer.html"; // question video module



/***** FEEDBACK *****/



var defaultFeedbackContainerView = "views/universal/feedback/feedbackContainer.html"; // all feedback (count and voting) module
var defaultFeedbackCountContainerView = "views/universal/feedback/feedbackCountContainer.html"; // feedback count module
var defaultFeedbackVotingContainerView = "views/universal/feedback/feedbackVotingContainer.html"; // feedback voting module

var defaultReportInappropriateContainerView = "views/universal/feedback/reportInappropriateContainer.html"; // report inappropriate module
var defaultReportInappropriateFormContainerView = "views/universal/feedback/submissionFormFeedback.html" // report inappropriate form module



/***** BADGES *****/



var defaultIndividualBadgeContainerView = "views/universal/display/badgeIndividualContainer.html"; // generic individual badge module

var defaultBadgesUniversal = {
	"top1Contributor" : "views/universal/badges/badgeContributor1TextContainer.html",
	"top10Contributor" : "views/universal/badges/badgeContributor10TextContainer.html",
	"top25Contributor" : "views/universal/badges/badgeContributor25TextContainer.html",
	"top50Contributor" : "views/universal/badges/badgeContributor50TextContainer.html",
	"top100Contributor" : "views/universal/badges/badgeContributor100TextContainer.html",
	"top250Contributor" : "views/universal/badges/badgeContributor250TextContainer.html",
	"top500Contributor" : "views/universal/badges/badgeContributor500TextContainer.html",
	"top1000Contributor" : "views/universal/badges/badgeContributor1000TextContainer.html",
	"featured" : "views/universal/badges/badgeFeaturedTextContainer.html",
	"expert" : "views/universal/badges/badgeExpertTextContainer.html",
	"staff" : "views/universal/badges/badgeStaffTextContainer.html",
	"verifiedPurchaser" : "views/universal/badges/badgeVerifiedPurchaserTextContainer.html",
	"socialAnsweringSubscriber" : "views/universal/badges/badgeSocialAnsweringSubscriberTextContainer.html",
	"default" : "views/universal/badges/badgeDefaultTextContainer.html",
}

var defaultBadgesBestBuy = {
    /* BBY SPECIFIC */
    "EliteContributor" : "views/universal/badges/badgeEliteContributorTextContainer.html",
    "TopContributorsArchived" : "views/universal/badges/badgeTopContributorsArchivedTextContainer.html",
    "EliteReviewer" : "views/universal/badges/badgeEliteReviewerTextContainer.html",
    "BlogHerReviewer" : "views/universal/badges/badgeBlogHerReviewerTextContainer.html",
    "BusinessUser" : "views/universal/badges/badgeBusinessUserTextContainer.html",
    "RewardZone" : "views/universal/badges/badgeRewardZoneTextContainer.html",
    "RewardZoneSilver" : "views/universal/badges/badgeRewardZoneSilverTextContainer.html",
    "RewardZoneNumber" : "views/universal/badges/badgeRewardZoneNumberTextContainer.html",
    "RewardZoneNumberSilver" : "views/universal/badges/badgeRewardZoneNumberSilverTextContainer.html",
    "RewardZoneNumberV3" : "views/universal/badges/badgeRewardZoneNumberV3TextContainer.html",
    "RewardZoneNumberSilverV3" : "views/universal/badges/badgeRewardZoneNumberSilverV3TextContainer.html",
    "RewardZoneMember" : "views/universal/badges/badgeRewardZoneMemberTextContainer.html",
    "RewardZoneMemberUnlocked" : "views/universal/badges/badgeRewardZoneMemberUnlockedTextContainer.html",
    "RewardZonePremierSilverReview" : "views/universal/badges/badgeRewardZonePremierSilverReviewTextContainer.html",
    "DellSupport" : "views/universal/badges/badgeDellSupportTextContainer.html",
    "SlingMedia" : "views/universal/badges/badgeSlingMediaTextContainer.html",
    "Sennheiser" : "views/universal/badges/badgeSennheiserTextContainer.html",
    "EcReviewer" : "views/universal/badges/badgeEcReviewerTextContainer.html",
    "EcProductReview" : "views/universal/badges/badgeEcProductReviewTextContainer.html",
}



/***** PAGINATION *****/



var defaultPaginationContainerView = "views/universal/pagination/paginationContainer.html"; // entire pagination module
var defaultPaginationButtonContainerView = "views/universal/pagination/paginationButtonContainer.html" // individual pagination button module



/************************* SUBMISSION ******************************/



/***** GENERIC INPUT *****/



// generic
var defaultInputContainerView = "views/universal/submission/inputContainer.html"; // generic input module

// text inputs
var defaultInputTextFieldContainerView = "views/universal/submission/inputTextFieldContainer.html"; // text field module
var defaultInputTextAreaContainerView = "views/universal/submission/inputTextAreaContainer.html"; // text area module
var defaultInputTextAreaWithCharacterCounterContainerView = "views/universal/submission/inputTextAreaWithCharacterCounter.html" // text area module with character counter

// checkboxes
var defaultInputCheckboxGroupContainerView = "views/universal/submission/inputCheckboxGroupContainer.html"; // checkbox group module
var defaultInputCheckboxIndividualContainerView = "views/universal/submission/inputCheckboxIndividualContainer.html"; // checkbox individual module
var defaultInputCheckboxContainerView = "views/universal/submission/inputCheckboxContainer.html"; // checkbox input module

// radio buttons
var defaultInputRadioGroupContainerView = "views/universal/submission/inputRadioGroupContainer.html"; // radio group module
var defaultInputRadioIndividualContainerView = "views/universal/submission/inputRadioIndividualContainer.html"; // radio individual module
var defaultInputRadioContainerView = "views/universal/submission/inputRadioContainer.html"; // radio input module

// select/option (dropdown)
var defaultInputSelectContainerView = "views/universal/submission/inputSelectContainer.html"; // select (dropdown) module
var defaultInputSelectOptionContainerView = "views/universal/submission/inputSelectOptionContainer.html"; // option (dropdown) module



/***** UNIVERSAL *****/



// context data value templates
var defaultContextDataValueContainerView = "views/universal/submission/inputContextDataValueContainer.html"; // context data value module

// additional field templates
var defaultAdditionalFieldContainerView = "views/universal/submission/inputAdditionalFieldsContainer.html"; // additional field module

// tag templates
var defaultTagIndividualGroupContainerView = "views/universal/submission/inputTagIndividualContainer.html"; // tag individual group module
var defaultTagIndividualContainerView = "views/universal/submission/inputTagContainer.html"; // tag individual input module

// checkbox templates
var defaultTermsConditionsContainerView = "views/universal/submission/inputTermsConditionsContainer.html"; // tag individual input module
var defaultEmailWhenCommentedContainerView = "views/universal/submission/inputEmailWhenCommentedContainer.html"; // tag individual input module
var defaultEmailAlertWhenPublishedContainerView = "views/universal/submission/inputEmailWhenPublishedContainer.html"; // tag individual input module



/***** REVIEW SPECIFIC *****/


// main templates
var defaultSubmissionWidgetContainerView = "views/reviews/submission/reviewSubmissionWidgetContainer.html"
var defaultSubmissionPreviewWidgetContainerView = "views/reviews/submission/reviewSubmissionPreviewWidgetContainer.html";
var defaultSubmissionThankYouWidgetContainerView = "views/reviews/submission/reviewSubmissionThankYouWidgetContainer.html";

var defaultSubmissionFormContainerView = "views/reviews/submission/submissionFormReviewContainer.html";


// ratings templates
var defaultSecondaryRatingContainerView = "views/reviews/submission/inputSecondaryRatingContainer.html"; // secondary rating module
var defaultInputRadioOverallRatingContainerView = "views/reviews/submission/inputRadioOverallRatingContainer.html"; // overall rating radio input module
var defaultInputRadioSecondaryRatingContainerView = "views/reviews/submission/inputRadioSecondaryRatingContainer.html"; // secondary rating radio input module



/***** REVIEW COMMENT SPECIFIC *****/


// main templates
var defaultSubmissionReviewCommentWidgetContainerView = "views/review_comments/submission/reviewCommentSubmissionWidgetContainer.html"
var defaultSubmissionReviewCommentPreviewWidgetContainerView = "views/review_comments/submission/reviewCommentSubmissionPreviewWidgetContainer.html";
var defaultSubmissionReviewCommentThankYouWidgetContainerView = "views/review_comments/submission/reviewCommentSubmissionThankYouWidgetContainer.html";

var defaultSubmissionFormReviewCommentContainerView = "views/review_comments/submission/submissionFormReviewCommentContainer.html" // review comment submission form module


