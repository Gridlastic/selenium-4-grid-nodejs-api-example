# Prepare nodes before running tests

<b>Node Api</b> can be used launching a specified number of nodes in a given timeout period.
Also you can get total,free and busy node counts using <b>Node API</b> .

### Usage:

* For launching a specified number of nodes in a given timeout period.

```javascript
    const apiClient = new ApiClient("https://" + HUB_URL + "/api/v1")
    const BasicAuth = apiClient.authentications['BasicAuth'];
    BasicAuth.username = GRID_USER_NAME;
    BasicAuth.password = GRID_ACCESS_KEY;
    const nodeAPI=new NodeApi(apiClient);
    var opts =
        {
            nodes: [{
                browserName: <browsername>,
                browserVersion: <browserversion>,
                platformName: <platformname>,
                count: <count>
            }]
        }; 
    nodeAPI.preset(opts);
```

* Get node counts

```javascript
  var opts = {
    'browserName': <browsername>,
    'browserVersion': <browserVersion>,
    'platformName': <platformName>
   }; 
   api.count(opts);
```

### Sample Tests

For sample usage see <b>test/node-api-test.js</b> file. For running tests from command prompt:

```
npm install
export GRID_USER_NAME=........;
export GRID_ACCESS_KEY=....;
export HUB_URL=....;
export VIDEO_URL=....;
npm run test
```

### Internals

You can reach specs of node api from <b>https://<HUB_URL>/api/v1/openapi.json</b> or <b>https://<HUB_URL>/api/v1/openapi.yaml</b>.
You can generate api clients using [open api generator](https://github.com/OpenAPITools/openapi-generator)

####Sample Usage:
```
openapi-generator generate -i https://<HUB_URL>/api/v1/openapi.json -g -a Authorization:"Basic encoded-user-password" -o outputdir javascript
```