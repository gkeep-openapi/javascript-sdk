# GkeepApi.V2Api

All URIs are relative to *https://staging-transport.smart-gamma.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlerts**](V2Api.md#getAlerts) | **GET** /api/v2/alerts | 
[**getFletLastInfos**](V2Api.md#getFletLastInfos) | **GET** /api/v2/fleet/last-infos | 
[**getLastAlerts**](V2Api.md#getLastAlerts) | **GET** /api/v2/alerts/last | 
[**getUserProfile**](V2Api.md#getUserProfile) | **GET** /api/v2/user-profiles | 
[**getVehicles**](V2Api.md#getVehicles) | **GET** /api/v2/vehicles | 
[**getVehiclesDailyStats**](V2Api.md#getVehiclesDailyStats) | **GET** /api/v2/vehicles/{vehicleId}/daily | 
[**getVehiclesLatestStats**](V2Api.md#getVehiclesLatestStats) | **GET** /api/v2/vehicles/{vehicleId}/last-infos | 

<a name="getAlerts"></a>
# **getAlerts**
> AlertList getAlerts(opts)



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
apiInstance.getAlerts(opts, (error, data, response) => {
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

<a name="getFletLastInfos"></a>
# **getFletLastInfos**
> FleetStatus getFletLastInfos()



Get fleet last-infos

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getFletLastInfos((error, data, response) => {
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
 - **Accept**: application/json

<a name="getLastAlerts"></a>
# **getLastAlerts**
> LastAlertList getLastAlerts()



Get last alerts

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getLastAlerts((error, data, response) => {
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

[**LastAlertList**](LastAlertList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserProfile"></a>
# **getUserProfile**
> UserProfile getUserProfile()



Get user-profiles

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
apiInstance.getUserProfile((error, data, response) => {
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
> VehicleDailyStats getVehiclesDailyStats(vehicleId)



Get vehicles daily

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier

apiInstance.getVehiclesDailyStats(vehicleId, (error, data, response) => {
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

[**VehicleDailyStats**](VehicleDailyStats.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehiclesLatestStats"></a>
# **getVehiclesLatestStats**
> VehicleStatus getVehiclesLatestStats(vehicleId)



Get vehicles last-infos

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V2Api();
let vehicleId = 56; // Number | vehicle identifier

apiInstance.getVehiclesLatestStats(vehicleId, (error, data, response) => {
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
 - **Accept**: application/json

