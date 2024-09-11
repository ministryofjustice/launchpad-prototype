module.exports = function (router, content) {


  router.post('/managing-app-requests/staff/v1-5/applications/log/select-app-type', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var appType = req.session.data['appType']
    // Check whether the variable matches a condition
    if (appType == "bh_01") {
      // Send user to ineligible page
      res.redirect('/managing-app-requests/staff/v1-5/applications/log/topup-pin-credit')
    }
    if (appType == "bh_02") {
      // Send user to ineligible page
      res.redirect('/managing-app-requests/staff/v1-5/applications/log/emergency-pin-credit')
    }
    if (appType == "bh_03") {
      // Send user to ineligible page
      res.redirect('/managing-app-requests/staff/v1-5/applications/log/new-pin-contact')
    }
    if (appType == "bh_04") {
      // Send user to ineligible page
      res.redirect('/managing-app-requests/staff/v1-5/applications/log/remove-pin-contact')
    }
    if (appType == "bh_05") {
      // Send user to ineligible page
      res.redirect('/managing-app-requests/staff/v1-5/applications/log/swap-vos-pin-credit')
    }
  })

  router.post('/managing-app-requests/staff/v1-5/applications/business-hub/apps/app-1/action', function (req, res) {
      res.redirect('/managing-app-requests/staff/v1-5/applications/business-hub/apps/app-1/action-decision')
  })
}
