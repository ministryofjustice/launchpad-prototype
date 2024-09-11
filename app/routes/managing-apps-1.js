module.exports = function (router, content) {


  router.post('/managing-app-requests/staff/v1-5/applications/business-hub/log/check-answers', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var submitMore = req.session.data['submitMore']
    // Check whether the variable matches a condition
    if (submitMore == "yes"){
      // Send user to next page
      res.redirect('/managing-app-requests/staff/v1-5/applications/business-hub/log/select-app-type/')
    } else {
      // Send user to ineligible page
      res.redirect('/managing-app-requests/staff/v1-5/applications/business-hub/')
    }
  })

  router.post('/managing-app-requests/staff/v1-5/applications/business-hub/apps/app-1/action', function (req, res) {
      res.redirect('/managing-app-requests/staff/v1-5/applications/business-hub/apps/app-1/action-decision')
  })
}
