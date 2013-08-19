/************************* UNIVERSAL *************************/



/***** HEADERS *****/



var defaultPageHeaderContainerView = "#bvtemplate-header-page-universal"; // page header
var defaultSectionHeaderContainerView = "#bvtemplate-header-section-universal"; // section header



/***** BUTTONS *****/



var defaultButtonContainerView = "#bvtemplate-button-default-universal"; // generic button module



/***** QUICK TAKE *****/



var defaultQuickTakeContainerView = "#bvtemplate-quick-take-universal"; // quick take module



/***** FILTERS *****/



var defaultFilterGroupContainerView = "#bvtemplate-filter-group-universal"; // filter group module
var defaultFilterIndividualContainerView = "#bvtemplate-filter-individual-universal"; // filter group module



/***** PRODUCT INFO *****/



var defaultProductInfoWidgetContainerView = "#bvtemplate-product-individual-universal" // entire product info widget
var defaultProductInfoContainerView = "#bvtemplate-product-info-universal"; // individual product info module
var defaultProductInfoNameContainerView = "#bvtemplate-product-name-universal"; // product name module
var defaultProductInfoDescriptionContainerView = "#bvtemplate-product-description-universal"; // product description module
var defaultProductInfoImageContainerView = "#bvtemplate-product-image-universal"; // product image module



/***** REVIEWS *****/



// main templates
var defaultReviewWidgetContainerView = "#bvtemplate-review-widget-universal" // entire review widget
var defaultReviewContainerView = "#bvtemplate-review-individual-universal"; // individual review module

// ratings templates
var defaultOverallRatingContainerView = "#bvtemplate-rating-overall-universal"; // overall rating module
var defaultSecondaryRatingIndividualContainerView = "#bvtemplate-rating-secondary-universal"; // secondary rating module

// review content templates
var defaultReviewTitleContainerView = "#bvtemplate-title-universal"; // review title module
var defaultReviewBodyTextContainerView = "#bvtemplate-body-universal"; // review text module
var defaultReviewDateContainerView = "#bvtemplate-date-universal"; // date module
var defaultReviewRecommededContainerView = "#bvtemplate-recommended-universal"; // is recommended module

// tags templates
var defaultReviewTagsContainerView = "#bvtemplate-tag-group-universal"; // all tags module
var defaultReviewTagContainerView = "#bvtemplate-tag-individual-universal"; // individual tag module

// user info templates
var defaultReviewUserNicknameContainerView = "#bvtemplate-nickname-universal"; // nickname module
var defaultReviewUserLocationContainerView = "#bvtemplate-location-universal"; // location module

// context data value templates
var defaultReviewContextDataValueContainerView = "#bvtemplate-context-data-value-universal"; // context data values module

// additional fields templates
var defaultReviewAdditionalFieldContainerView = "#bvtemplate-additional-field-universal"; // additional fields module

// media templates
var defaultReviewPhotoContainerView = "#bvtemplate-photo-thumbnail-universal"; // photos module
var defaultReviewVideoContainerView = "#bvtemplate-video-thumbnail-universal"; // videos module



/***** REVIEW COMMENTS*****/



// main templates
var defaultReviewCommentWidgetContainerView = "#bvtemplate-review-comments-widget-universal" // entire comment widget
var defaultReviewCommentContainerView = "#bvtemplate-review-comments-individual-universal"; // individual review module

// review comment content templates
var defaultReviewCommentTitleContainerView = "#bvtemplate-title-universal"; // review title module
var defaultReviewCommentBodyTextContainerView = "#bvtemplate-body-universal"; // review text module
var defaultReviewCommentDateContainerView = "#bvtemplate-date-universal"; // date module

// user info templates
var defaultReviewCommentUserNicknameContainerView = "#bvtemplate-nickname-universal"; // nickname module
var defaultReviewCommentUserLocationContainerView = "#bvtemplate-location-universal"; // location module
var defaultReviewCommentContextDataValueContainerView = "#bvtemplate-context-data-value-universal"; // context data values module

// media templates
var defaultReviewCommentPhotoContainerView = "#bvtemplate-photo-thumbnail-universal"; // photos module
var defaultReviewCommentVideoContainerView = "#bvtemplate-video-thumbnail-universal"; // videos module



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



var defaultFeedbackContainerView = "#bvtemplate-feedback-widget-universal"; // all feedback (count and voting) module
var defaultFeedbackCountContainerView = "#bvtemplate-feedback-count-universal"; // feedback count module
var defaultFeedbackVotingContainerView = "#bvtemplate-feedback-voting-universal"; // feedback voting module

var defaultReportInappropriateContainerView = "#bvtemplate-feedback-report-inappropriate-universal"; // report inappropriate module
var defaultReportInappropriateFormContainerView = "#bvtemplate-feedback-report-inappropriate-form-universal" // report inappropriate form module

var defaultFeedbackStatusMessageContainerView = "#bvtemplate-feedback-status-message-universal" // status message module



/***** BADGES *****/



var defaultIndividualBadgeContainerView = "#bvtemplate-badge-individual-universal"; // generic individual badge module

var defaultBadgesUniversal = {
	"top1Contributor" : "#bvtemplate-badge-1-universal",
	"top10Contributor" : "#bvtemplate-badge-10-universal",
	"top25Contributor" : "#bvtemplate-badge-25-universal",
	"top50Contributor" : "#bvtemplate-badge-50-universal",
	"top100Contributor" : "#bvtemplate-badge-100-universal",
	"top250Contributor" : "#bvtemplate-badge-250-universal",
	"top500Contributor" : "#bvtemplate-badge-500-universal",
	"top1000Contributor" : "#bvtemplate-badge-1000-universal",
    "expert" : "#bvtemplate-badge-featured-universal",
	"featured" : "#bvtemplate-badge-expert-universal",
    "socialAnsweringSubscriber" : "#bvtemplate-badge-social-answering-subscriber-universal",
	"staff" : "#bvtemplate-badge-staff-universal",
	"verifiedPurchaser" : "#bvtemplate-badge-verified-purchaser-universal",
	"default" : "#bvtemplate-badge-default-universal",
}

var defaultBadgesBestBuy = {
    /* BBY SPECIFIC */
    "EliteContributor" : "#bvtemplate-badge-elite-contributor-universal",
    "TopContributorsArchived" : "#bvtemplate-badge-top-contributor-archived-universal",
    "EliteReviewer" : "#bvtemplate-badge-elite-reviewer-universal",
    "BlogHerReviewer" : "#bvtemplate-badge-blog-her-reviewer-universal",
    "BusinessUser" : "#bvtemplate-badge-business-user-universal",
    "RewardZone" : "#bvtemplate-badge-reward-zone-universal",
    "RewardZoneSilver" : "#bvtemplate-badge-reward-zone-silver-universal",
    "RewardZoneNumber" : "#bvtemplate-badge-reward-zone-number-universal",
    "RewardZoneNumberSilver" : "#bvtemplate-badge-reward-zone-number-silver-universal",
    "RewardZoneNumberV3" : "#bvtemplate-badge-reward-zone-number-v3-universal",
    "RewardZoneNumberSilverV3" : "#bvtemplate-badge-reward-zone-number-silver-v3-universal",
    "RewardZoneMember" : "#bvtemplate-badge-reward-zone-member-universal",
    "RewardZoneMemberUnlocked" : "#bvtemplate-badge-reward-zone-member-unlocked-universal",
    "RewardZonePremierSilverReview" : "#bvtemplate-badge-reward-zone-premier-silver-universal",
    "DellSupport" : "#bvtemplate-badge-dell-support-universal",
    "SlingMedia" : "#bvtemplate-badge-sling-media-universal",
    "Sennheiser" : "#bvtemplate-badge-sennheiser-universal",
    "EcReviewer" : "#bvtemplate-badge-ec-reviewer-universal",
    "EcProductReview" : "#bvtemplate-badge-ec-product-review-universal",
}



/***** PAGINATION *****/



var defaultPaginationContainerView = "#bvtemplate-pagination-widget-universal"; // entire pagination module
var defaultPaginationButtonContainerView = "#bvtemplate-pagination-button-universal" // individual pagination button module
var defaultPaginationButtonSelectedContainerView = "#bvtemplate-pagination-button-selected-universal" // individual selected pagination button module


/************************* SUBMISSION ******************************/



/***** GENERIC INPUT *****/



// generic
var defaultInputContainerView = "#bvtemplate-input-default-universal"; // generic input module

// text inputs
var defaultInputTextFieldContainerView = "#bvtemplate-input-text-field-universal"; // text field module
var defaultInputTextFieldHiddenContainerView = "#bvtemplate-input-text-field-hidden-universal"; // text field module - hidden
var defaultInputTextAreaContainerView = "#bvtemplate-input-text-area-universal"; // text area module
var defaultInputTextAreaWithCharacterCounterContainerView = "#bvtemplate-input-text-universal" // text area module with character counter

// checkboxes
var defaultInputCheckboxGroupContainerView = "#bvtemplate-input-checkbox-group-universal"; // checkbox group module
var defaultInputCheckboxIndividualContainerView = "#bvtemplate-input-checkbox-individual-universal"; // checkbox individual module
var defaultInputCheckboxContainerView = "#bvtemplate-input-checkbox-universal"; // checkbox input module

// radio buttons
var defaultInputRadioGroupContainerView = "#bvtemplate-input-radio-group-universal"; // radio group module
var defaultInputRadioIndividualContainerView = "#bvtemplate-input-radio-individual-universal"; // radio individual module
var defaultInputRadioContainerView = "#bvtemplate-input-radio-universal"; // radio input module

// select/option (dropdown)
var defaultInputSelectContainerView = "#bvtemplate-input-select-universal"; // select (dropdown) module
var defaultInputSelectOptionContainerView = "#bvtemplate-input-select-option-universal"; // option (dropdown) module

// file inputs (upload)
var defaultInputUploadGroupContainerView = "#bvtemplate-input-upload-group-universal"; // file upload group module
var defaultInputUploadIndividualContainerView = "#bvtemplate-input-upload-individual-universal"; // file upload individual module
var defaultInputUploadPhotoContainerView = "#bvtemplate-input-upload-photo-universal"; // file upload input module - photo

var defaultInputUploadPhotoPreviewContainerView = "#bvtemplate-input-upload-preview-universal"



/***** UNIVERSAL *****/



// context data value templates
var defaultContextDataValueContainerView = "#bvtemplate-input-context-data-value-universal"; // context data value module

// additional field templates
var defaultAdditionalFieldContainerView = "#bvtemplate-input-additional-field-universal"; // additional field module

// tag templates
var defaultTagIndividualGroupContainerView = "#bvtemplate-input-tag-group-universal"; // tag individual group module
var defaultTagIndividualContainerView = "#bvtemplate-input-tag-individual-universal"; // tag individual input module

// checkbox templates
var defaultTermsConditionsContainerView = "#bvtemplate-input-terms-conditions-universal"; // tag individual input module
var defaultEmailWhenCommentedContainerView = "#bvtemplate-input-email-alert-commented-universal"; // tag individual input module
var defaultEmailAlertWhenPublishedContainerView = "#bvtemplate-input-email-alert-published-universal"; // tag individual input module


/***** REVIEW SPECIFIC *****/


// main templates
var defaultSubmissionWidgetContainerView = "#bvtemplate-submission-widget-review-universal";
var defaultSubmissionPreviewWidgetContainerView = "#bvtemplate-submission-form-review-preview-universal";
var defaultSubmissionThankYouWidgetContainerView = "#bvtemplate-submission-form-review-thank-you-universal";

var defaultSubmissionFormContainerView = "#bvtemplate-submission-form-review-universal";


// ratings templates
var defaultSecondaryRatingContainerView = "#bvtemplate-input-rating-secondary-universal"; // secondary rating module
var defaultInputRadioOverallRatingContainerView = "#bvtemplate-input-rating-overall-universal"; // overall rating radio input module
var defaultInputRadioSecondaryRatingContainerView = "#bvtemplate-input-rating-secondary-universal"; // secondary rating radio input module



/***** REVIEW COMMENT SPECIFIC *****/


// main templates
var defaultSubmissionReviewCommentWidgetContainerView = "#bvtemplate-submission-widget-review-comments-universal";
var defaultSubmissionReviewCommentPreviewWidgetContainerView = "#bvtemplate-submission-form-review-comments-preview-universal";
var defaultSubmissionReviewCommentThankYouWidgetContainerView = "#bvtemplate-submission-form-review-comments-thank-you-universal";

var defaultSubmissionFormReviewCommentContainerView = "#bvtemplate-submission-form-review-comments-universal" // review comment submission form module
