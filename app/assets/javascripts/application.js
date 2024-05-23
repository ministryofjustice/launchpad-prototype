//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here
  var DateTime = luxon.DateTime;


// Convert spreadsheet date formats to reasable dates
  $('td.date').each(function () {
    var due = $(this).html();
    const date = DateTime.fromISO(due)
    $(this).text(date.toLocaleString(DateTime.DATE_FULL));
  })
})

// Convert tags to show the right colours
$('.govuk-tag').each(function () {
  var tagName = $(this).text();

    if (tagName == "New reply") {
      $(this).removeClass('govuk-tag--grey');
      $(this).addClass('govuk-tag--yellow');
    }

    if (tagName == "Approved") {
      $(this).removeClass('govuk-tag--grey');
      $(this).addClass('govuk-tag--green');
    }

    if (tagName == "Rejected") {
      $(this).removeClass('govuk-tag--grey');
      $(this).addClass('govuk-tag--red');
    }

})


$('.sensitive-card').click(function(){
  $(this).children('.sensitive').toggle();
});
