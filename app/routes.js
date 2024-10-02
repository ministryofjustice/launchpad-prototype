//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

require('./routes/managing-apps-1.js')(router);

require('./routes/managing-apps-1-5.js')(router);

require('./routes/managing-apps-latest.js')(router);

//require('./views/'+version+'/routes/mainrouter.js')(router);
module.exports = router;
