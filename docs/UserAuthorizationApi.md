# GkeepApi.UserAuthorizationApi

All URIs are relative to *https://staging-transport.smart-gamma.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authorize**](UserAuthorizationApi.md#authorize) | **POST** /api/login_check | 

<a name="authorize"></a>
# **authorize**
> AuthorizedUser authorize(body)



User authorization

### Example
```javascript
import GkeepApi from 'gkeep_api';

let apiInstance = new GkeepApi.UserAuthorizationApi();
let body = new GkeepApi.UserCredentials(); // UserCredentials | A JSON object containing user credentials info

apiInstance.authorize(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UserCredentials**](UserCredentials.md)| A JSON object containing user credentials info | 

### Return type

[**AuthorizedUser**](AuthorizedUser.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

