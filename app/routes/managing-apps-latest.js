module.exports = function (router, content) {

  // Route the application to the correct form'

  router.post('/staff/latest/applications/log/select-app-type', function (req, res) {
    // Make a variable and give it the value from 'how-many-balls'
    var appType = req.session.data['appType']
    // Check whether the variable matches a condition
    if (appType == "bh_01") {
      // Send user to ineligible page
      res.redirect('/staff/latest/applications/log/topup-pin-credit')
    }
    if (appType == "bh_02") {
      // Send user to ineligible page
      res.redirect('/staff/latest/applications/log/emergency-pin-credit')
    }
    if (appType == "bh_03") {
      // Send user to ineligible page
      res.redirect('/staff/latest/applications/log/new-pin-contact')
    }
    if (appType == "bh_04") {
      // Send user to ineligible page
      res.redirect('/staff/latest/applications/log/remove-pin-contact')
    }
    if (appType == "bh_05") {
      // Send user to ineligible page
      res.redirect('/staff/latest/applications/log/swap-vos-pin-credit')
    }
    if (appType == "bh_06") {
      // Send user to ineligible page
      res.redirect('/staff/latest/applications/log/supply-pin-contacts')
    }
  })

  router.post('/staff/latest/applications/business-hub/apps/app-1/action', function (req, res) {
      res.redirect('/staff/latest/applications/business-hub/apps/app-1/action-decision')
  })

  router.post('/staff/latest/applications/omu/apps/app-1/action', function (req, res) {
      res.redirect('/staff/latest/applications/omu/apps/app-1/action-decision')
  })

}
