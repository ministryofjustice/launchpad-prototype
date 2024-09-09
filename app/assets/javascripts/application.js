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

  // Convert numbers to relative dates 0 = today, -1 = yesterday
  $('td.reldate').each(function () {
    var relDate = $(this).html();
    $(this).text(DateTime.now().plus({days: relDate}).toFormat('dd MMMM yyyy'));
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

  // Show and hide the Applictions added banner
  $( "#applicationsSuccess" ).delay(5000).fadeOut('slow');

  // Show prisoner name on lookup

  $( "#prisoner-name-row" ).hide();

  $( "#prisonNumber-lookup" ).on( "click", function() {
    $( "#prisoner-name-row" ).show();
  } );





  $('.sensitive-card').click(function(){
    $(this).children('.sensitive').toggle();
  });

  const countries = [
    'Aditya Sharma (Finance)',
    'Aisha Patel (Healthcare)',
    'Aamir Ahmed (Business Hub)',
    'Alice Taylor (Reception)',
    'Arjun Singh (Security)',
    'Ben Williams (OMU)',
    'Charlotte Brown (Activities)',
    'Chloe Evans (Education)',
    'Daniel Johnson (Governers)',
    'Darnell Campbell (Safer Custody)',
    'David Wright (Security)',
    'Emma Roberts (Reception)',
    'Ethan Clarke (Business Hub)',
    'George Davies (OMU)',
    'Hannah Wilson (Chaplaincy)',
    'Harry Wilson (Education)',
    'Idris Hassan (Finance)',
    'James Smith (Safer Custody)',
    'Jessica Taylor (Governers)',
    'Kwame Mensah (Activities)',
    'Liam Evans (Healthcare)',
    'Muhammad Khan (Chaplaincy)',
    'Oliver Johnson (Finance)',
    'Raj Patel (Security)',
    'Rajesh Sharma (OMU)',
    'Samuel Roberts (Business Hub)',
    'Sarah Wright (Reception)',
    'Thomas Brown (Education)',
    'William Davies (Activities)',
    'Zara Ali (Safer Custody)',
  ]

  accessibleAutocomplete({
    element: document.querySelector('#my-autocomplete-container'),
    id: 'my-autocomplete', // To match it to the existing <label>.
    source: countries
  })

});
