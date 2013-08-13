
// [dbeberniss] show tip boxes on click
$('body').on('click','.BVPopinLauncher a', function(e) {
    $($(this).attr('href')).toggle();
    e.preventDefault();
});