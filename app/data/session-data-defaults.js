/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================
*/

let requests                 = require('./pip/requests.json')
let menus                    = require('./pip/requests-menu.json')

let apps                     = require('./dps/app_types.json')
let wings                    = require('./dps/wings.json')
let bhApps                   = require('./dps/business_hub_apps.json')
let pinApps                  = require('./dps/pin_apps.json')


module.exports = {
  requests,
  menus,
  apps,
  wings,
  bhApps,
  pinApps
}
