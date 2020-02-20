# GkeepApi.V2Api

All URIs are relative to *https://staging-transport.smart-gamma.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserProfile**](V2Api.md#createUserProfile) | **POST** /api/v2/user-profiles | 
[**createVehicleCategory**](V2Api.md#createVehicleCategory) | **POST** /api/v2/vehicles/categories | 
[**deleteUserProfile**](V2Api.md#deleteUserProfile) | **DELETE** /api/v2/user-profiles/{profileId} | 
[**deleteVehicleCategory**](V2Api.md#deleteVehicleCategory) | **DELETE** /api/v2/vehicles/categories/{categoryId} | 
[**enableVehicleMaintenance**](V2Api.md#enableVehicleMaintenance) | **PUT** /api/v2/vehicles/maintenance/{vehicleId} | 
[**getAlertList**](V2Api.md#getAlertList) | **GET** /api/v2/alerts | 
[**getAlertsStatus**](V2Api.md#getAlertsStatus) | **GET** /api/v2/alerts/status | 
[**getCurrentUserProfile**](V2Api.md#getCurrentUserProfile) | **GET** /api/v2/user-profiles | 
[**getFleetStatus**](V2Api.md#getFleetStatus) | **GET** /api/v2/fleet/status | 
[**getNotificationSettings**](V2Api.md#getNotificationSettings) | **GET** /api/v2/user-profiles/notification-settings | 
[**getRelatedUserProfiles**](V2Api.md#getRelatedUserProfiles) | **GET** /api/v2/user-profiles/{levelName} | 
[**getUserProfile**](V2Api.md#getUserProfile) | **GET** /api/v2/user-profiles/{profileId} | 
[**getVehicleCategory**](V2Api.md#getVehicleCategory) | **GET** /api/v2/vehicles/categories/{categoryId} | 
[**getVehicleCategoryList**](V2Api.md#getVehicleCategoryList) | **GET** /api/v2/vehicles/categories | 
[**getVehicleStatus**](V2Api.md#getVehicleStatus) | **GET** /api/v2/vehicles/{vehicleId}/status | 
[**getVehicles**](V2Api.md#getVehicles) | **GET** /api/v2/vehicles | 
[**getVehiclesDailyStats**](V2Api.md#getVehiclesDailyStats) | **GET** /api/v2/vehicles/{vehicleId}/daily-statistics | 
[**getVehiclesFrameHistory**](V2Api.md#getVehiclesFrameHistory) | **GET** /api/v2/vehicles/{vehicleId}/frame-history | 
[**getVehiclesRefuels**](V2Api.md#getVehiclesRefuels) | **GET** /api/v2/vehicles/{vehicleId}/refuels | 
[**getVehiclesStoppedConsumptions**](V2Api.md#getVehiclesStoppedConsumptions) | **GET** /api/v2/vehicles/{vehicleId}/stopped-consumptions | 
[**refreshApiToken**](V2Api.md#refreshApiToken) | **PUT** /api/v2/user-profiles/tokens/refresh | 
[**updateNotificationSettings**](V2Api.md#updateNotificationSettings) | **PUT** /api/v2/user-profiles/notification-settings | 
[**updateUserProfile**](V2Api.md#updateUserProfile) | **PUT** /api/v2/user-profiles/{profileId} | 
[**updateVehicle**](V2Api.md#updateVehicle) | **PUT** /api/v2/vehicles/{vehicleId} | 
[**updateVehicleCategory**](V2Api.md#updateVehicleCategory) | **PUT** /api/v2/vehicles/categories/{categoryId} | 

<a name="createUserProfile"></a>
# **createUserProfile**
> UserProfile createUserProfile()



Create user profile

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();

apiInstance.createUserProfile(, (error, data, response) => {
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
 **body** | [**CreateProfile**](CreateProfile.md)|  | [optional] 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createVehicleCategory"></a>
# **createVehicleCategory**
> VehicleCategory createVehicleCategory()



Create vehicle category

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();

apiInstance.createVehicleCategory(, (error, data, response) => {
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
 **body** | [**CreateVehicleCategory**](CreateVehicleCategory.md)|  | [optional] 

### Return type

[**VehicleCategory**](VehicleCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserProfile"></a>
# **deleteUserProfile**
> deleteUserProfile(profileId)



Delete user profile

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let profileId = 56; // Number | ID

apiInstance.deleteUserProfile(profileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **Number**| ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="deleteVehicleCategory"></a>
# **deleteVehicleCategory**
> deleteVehicleCategory(categoryId)



Delete vehicle category

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let categoryId = 56; // Number | ID

apiInstance.deleteVehicleCategory(categoryId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryId** | **Number**| ID | 

### Return type

null (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

<a name="enableVehicleMaintenance"></a>
# **enableVehicleMaintenance**
> Vehicle enableVehicleMaintenance(vehicleId)



Enable vehicle maintenance mode

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | Vehicle ID

apiInstance.enableVehicleMaintenance(vehicleId, (error, data, response) => {
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
 **vehicleId** | **Number**| Vehicle ID | 
 **body** | [**VehicleMaintenance**](VehicleMaintenance.md)|  | [optional] 

### Return type

[**Vehicle**](Vehicle.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAlertList"></a>
# **getAlertList**
> AlertList getAlertList(opts)



Get alerts

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let opts = { 
  'filterCreatedDateStart': "filterCreatedDateStart_example", // String | Start date of query selection
  'filterCreatedDateEnd': "filterCreatedDateEnd_example", // String | End date of query selection
  'filterCodeSpecial': 56 // Number | Alert code id:  * `2` - fuel_is_missing  * `3` - no_alimentation  * `4` - keeper_not_connected  * `8` - safety_battery_level_under_30  * `9` - fuel_level_rise 
};
apiInstance.getAlertList(opts, (error, data, response) => {
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
 **filterCreatedDateStart** | **String**| Start date of query selection | [optional] 
 **filterCreatedDateEnd** | **String**| End date of query selection | [optional] 
 **filterCodeSpecial** | **Number**| Alert code id:  * &#x60;2&#x60; - fuel_is_missing  * &#x60;3&#x60; - no_alimentation  * &#x60;4&#x60; - keeper_not_connected  * &#x60;8&#x60; - safety_battery_level_under_30  * &#x60;9&#x60; - fuel_level_rise  | [optional] 

### Return type

[**AlertList**](AlertList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getAlertsStatus"></a>
# **getAlertsStatus**
> AlertsStatus getAlertsStatus()



Get alerts status

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getAlertsStatus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**AlertsStatus**](AlertsStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getCurrentUserProfile"></a>
# **getCurrentUserProfile**
> UserProfile getCurrentUserProfile()



Get current user profile

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getCurrentUserProfile((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getFleetStatus"></a>
# **getFleetStatus**
> FleetStatus getFleetStatus()



Get fleet status

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getFleetStatus((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FleetStatus**](FleetStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getNotificationSettings"></a>
# **getNotificationSettings**
> NotificationSettings getNotificationSettings()



Get notification settings

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getNotificationSettings((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**NotificationSettings**](NotificationSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRelatedUserProfiles"></a>
# **getRelatedUserProfiles**
> UserProfileList getRelatedUserProfiles(levelName, opts)



Get related user-profiles

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let levelName = new GkeepApi.UserLevel(); // UserLevel | User Level
let opts = { 
  'page': "page_example", // String | page
  'perPage': "perPage_example" // String | per_page
};
apiInstance.getRelatedUserProfiles(levelName, opts, (error, data, response) => {
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
 **levelName** | [**UserLevel**](.md)| User Level | 
 **page** | **String**| page | [optional] 
 **perPage** | **String**| per_page | [optional] 

### Return type

[**UserProfileList**](UserProfileList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserProfile"></a>
# **getUserProfile**
> UserProfile getUserProfile(profileId)



Get user-profiles

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let profileId = 56; // Number | ID

apiInstance.getUserProfile(profileId, (error, data, response) => {
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
 **profileId** | **Number**| ID | 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleCategory"></a>
# **getVehicleCategory**
> VehicleCategory getVehicleCategory(categoryId)



Get vehicle category

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let categoryId = 56; // Number | ID

apiInstance.getVehicleCategory(categoryId, (error, data, response) => {
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
 **categoryId** | **Number**| ID | 

### Return type

[**VehicleCategory**](VehicleCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleCategoryList"></a>
# **getVehicleCategoryList**
> VehicleCategoryList getVehicleCategoryList(opts)



Get vehicle category list

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let opts = { 
  'page': "page_example", // String | page
  'perPage': "perPage_example" // String | per_page
};
apiInstance.getVehicleCategoryList(opts, (error, data, response) => {
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
 **page** | **String**| page | [optional] 
 **perPage** | **String**| per_page | [optional] 

### Return type

[**VehicleCategoryList**](VehicleCategoryList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleStatus"></a>
# **getVehicleStatus**
> VehicleStatus getVehicleStatus(vehicleId)



Get vehicle status

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier

apiInstance.getVehicleStatus(vehicleId, (error, data, response) => {
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
 **vehicleId** | **Number**| vehicle identifier | 

### Return type

[**VehicleStatus**](VehicleStatus.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getVehicles"></a>
# **getVehicles**
> VehicleList getVehicles()



Get vehicles

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getVehicles((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**VehicleList**](VehicleList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getVehiclesDailyStats"></a>
# **getVehiclesDailyStats**
> VehicleDailyStats getVehiclesDailyStats(vehicleId, opts)



Get vehicles daily statistics

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier
let opts = { 
  'filtersStartedAt': "filtersStartedAt_example", // String | filters[started_at]
  'filtersEndedAt': "filtersEndedAt_example" // String | filters[ended_at]
};
apiInstance.getVehiclesDailyStats(vehicleId, opts, (error, data, response) => {
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
 **vehicleId** | **Number**| vehicle identifier | 
 **filtersStartedAt** | **String**| filters[started_at] | [optional] 
 **filtersEndedAt** | **String**| filters[ended_at] | [optional] 

### Return type

[**VehicleDailyStats**](VehicleDailyStats.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

<a name="getVehiclesFrameHistory"></a>
# **getVehiclesFrameHistory**
> FrameHistory getVehiclesFrameHistory(vehicleId, opts)



Get vehicles frame-history

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier
let opts = { 
  'filtersStartedAt': "filtersStartedAt_example", // String | filters[started_at]
  'filtersEndedAt': "filtersEndedAt_example", // String | filters[ended_at]
  'page': "page_example", // String | page
  'perPage': "perPage_example" // String | per_page
};
apiInstance.getVehiclesFrameHistory(vehicleId, opts, (error, data, response) => {
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
 **vehicleId** | **Number**| vehicle identifier | 
 **filtersStartedAt** | **String**| filters[started_at] | [optional] 
 **filtersEndedAt** | **String**| filters[ended_at] | [optional] 
 **page** | **String**| page | [optional] 
 **perPage** | **String**| per_page | [optional] 

### Return type

[**FrameHistory**](FrameHistory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehiclesRefuels"></a>
# **getVehiclesRefuels**
> RefuelsList getVehiclesRefuels(vehicleId, opts)



Get vehicles refuels

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier
let opts = { 
  'filtersStartedAt': "filtersStartedAt_example", // String | filters[started_at]
  'filtersEndedAt': "filtersEndedAt_example" // String | filters[ended_at]
};
apiInstance.getVehiclesRefuels(vehicleId, opts, (error, data, response) => {
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
 **vehicleId** | **Number**| vehicle identifier | 
 **filtersStartedAt** | **String**| filters[started_at] | [optional] 
 **filtersEndedAt** | **String**| filters[ended_at] | [optional] 

### Return type

[**RefuelsList**](RefuelsList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehiclesStoppedConsumptions"></a>
# **getVehiclesStoppedConsumptions**
> StopppedConsumptionList getVehiclesStoppedConsumptions(vehicleId, opts)



Get vehicles stopped-consumptions

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier
let opts = { 
  'filtersStartedAt': "filtersStartedAt_example", // String | filters[started_at]
  'filtersEndedAt': "filtersEndedAt_example", // String | filters[ended_at]
  'page': "page_example", // String | page
  'perPage': "perPage_example" // String | per_page
};
apiInstance.getVehiclesStoppedConsumptions(vehicleId, opts, (error, data, response) => {
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
 **vehicleId** | **Number**| vehicle identifier | 
 **filtersStartedAt** | **String**| filters[started_at] | [optional] 
 **filtersEndedAt** | **String**| filters[ended_at] | [optional] 
 **page** | **String**| page | [optional] 
 **perPage** | **String**| per_page | [optional] 

### Return type

[**StopppedConsumptionList**](StopppedConsumptionList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="refreshApiToken"></a>
# **refreshApiToken**
> UserProfile refreshApiToken()



Refresh api token

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.refreshApiToken((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="updateNotificationSettings"></a>
# **updateNotificationSettings**
> NotificationSettings updateNotificationSettings()



Update notification settings

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();

apiInstance.updateNotificationSettings(, (error, data, response) => {
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
 **body** | [**UpdateNotificationSettings**](UpdateNotificationSettings.md)|  | [optional] 

### Return type

[**NotificationSettings**](NotificationSettings.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserProfile"></a>
# **updateUserProfile**
> UserProfile updateUserProfile(profileId)



Update user profile

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let profileId = 56; // Number | ID

apiInstance.updateUserProfile(profileId, (error, data, response) => {
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
 **profileId** | **Number**| ID | 
 **body** | [**UpdateProfile**](UpdateProfile.md)|  | [optional] 

### Return type

[**UserProfile**](UserProfile.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVehicle"></a>
# **updateVehicle**
> Vehicle updateVehicle(vehicleId)



Update vehicle

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | ID

apiInstance.updateVehicle(vehicleId, (error, data, response) => {
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
 **vehicleId** | **Number**| ID | 
 **body** | [**UpdateVehicle**](UpdateVehicle.md)|  | [optional] 

### Return type

[**Vehicle**](Vehicle.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVehicleCategory"></a>
# **updateVehicleCategory**
> VehicleCategory updateVehicleCategory(categoryId)



Update vehicle category

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let categoryId = 56; // Number | ID

apiInstance.updateVehicleCategory(categoryId, (error, data, response) => {
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
 **categoryId** | **Number**| ID | 
 **body** | [**UpdateVehicleCategory**](UpdateVehicleCategory.md)|  | [optional] 

### Return type

[**VehicleCategory**](VehicleCategory.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

