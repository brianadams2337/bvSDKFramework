// [dbeberniss] show Reward Zone Member Number field when Yes or Yes-PS value is selected
$('body').on('change', '#contextdatavalue_rewardZoneMembershipV3ID', function() {
    if (this.value == 'Yes') {
        $('#additionalfield_RewardZoneNumberWrapperID').show();
    } else if (this.value == 'Yes-PS') {
        $('#additionalfield_RewardZoneNumberWrapperID').show();
    } else {
        $('#additionalfield_RewardZoneNumberWrapperID').hide();
    }
});

// [dbeberniss] show tip boxes on click
$('body').on('click', '.BVPopinLauncher a', function(e) {
    $($(this).attr('href')).toggle();
    e.preventDefault();
});