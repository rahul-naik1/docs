---
sidebar_position: 10
title: Create API Keys
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to create API keys.

After creating the API key, best practice is to save the automatically generated `KeyID` string somewhere secure.

To learn about how to grant permissions to an API key, refer to [Update API Keys](update-api-keys.md).

<Tabs groupId="operating-systems">
<TabItem value="console" label="Web Console">

Follow these instructions to create a new API key using the GDN console web UI.

1. [Log in to your Macrometa account](https://auth.paas.macrometa.io/).
2. Click **Account**.
3. Click the **API Keys** tab.
4. Click **New API Key**.
5. Enter a unique ID.

</TabItem>
<TabItem value="js" label="Javascript">

```js
const jsc8 = require("jsc8");

// Email and password to authenticate client instance
const email = "nemo@nautilus.com";
const password = "xxxxxx";
const fabric = "_system";
const keyid = "id1";

const client = new jsc8({
  url: "https://gdn.paas.macrometa.io",
  fabricName: fabric
});
// Choose one of the following authentication methods and remove the commenting.

// Create an authenticated instance with a JWT token.
// const clientUsingJwt = new jsc8({url: "https://gdn.paas.macrometa.io" , token: "XXXX" , fabricName: fabric});
// Create an authenticated instance with an API key.
// const clientUsingApiKey = new jsc8({url: "https://gdn.paas.macrometa.io" , apiKey: "XXXX" , fabricName: fabric });
function messageHandler (error) {
  const message = {
    "StatusCode ": error.statusCode,
    "ErrorMessage ": error.message,
    "ErrorNum ": error.errorNum
  };
  console.log(message);
}
async function main () {
  await client
    .login(email, password)
    .then((e) => console.log("1. User authentication done!"))
    .catch((error) => error);

  console.log("2. Creating API key with KeyID = " + keyid);
  await client
    .createApiKey(keyid)
    .then((apiKey) => console.log(apiKey))
    .catch((error) => messageHandler(error));
}

main()
  .then()
  .catch((error) => console.log(error));

```

</TabItem>
<TabItem value="py" label="Python">

```py
from c8 import C8Client
  
API_ACTIVE = False
CHOSEN_API_KEY_ID = "myNewKey"
EMAIL = 'nemo@nautilus.com'
PASSWORD = 'xxxxx'
URL = "gdn.paas.macrometa.io"

client = C8Client(protocol='https', host=URL, port=443, email=EMAIL, password=PASSWORD)


# Get a list of all the API key ID's names
apiKeyIds = []
for api in client.list_all_api_keys():
    apiKeyIds.append(api["keyid"])

# Checks if `chosen_api_key` exists
for apiElement in apiKeyIds:
    if apiElement == CHOSEN_API_KEY_ID:
        API_ACTIVE = True
        break

# Checks if the API key exists
if API_ACTIVE:
    # Display a message that the key already exists
    print("Can't create an already existing key")
else:
    # Create a new API key
    try:
        print("Create API Key: ", client.create_api_key(CHOSEN_API_KEY_ID))
    except Exception as err:
        print("Error generating the API key")
        print(err)
```

</TabItem>
<TabItem value="RA" label="REST API">

Use our interactive API Reference with code generation in 18 programming languages to [Create an API Key](https://macrometa.com/docs/api#/operations/CreateApiKey).

```js
# Create an API Key
FEDERATION = "api-gdn.macrometa.io"
FED_URL = "https://{}".format(FEDERATION)
keyid = "id1"
url = FED_URL + "/_api/key"
payload= {
"keyid": keyid
}

resp = session.post(url, data = json.dumps(payload))
resp = json.loads(resp.text)
if resp['error'] is True:
print("ERROR: " , resp)
else:
print("API Key Created: ", resp)
```

</TabItem>
<TabItem value="cli" label="CLI">

Use the [gdnsl apikey](../../cli/api-key-cli.md) CLI command to create API keys.

</TabItem>
</Tabs>