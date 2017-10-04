# Token Service

Usage

```
const token-service = require('token-service');

var org_id = 'SOME SALESFORCE ORG ID';

token-service.fetchToken(org_id, function(err, data) {
    if(err) {
        // handle error
    } else {
        // do something with the data 
        // JSON object that contains your access_token
    }
});
```


