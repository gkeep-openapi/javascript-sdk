# GkeepApi.V2Api

All URIs are relative to *https://staging-transport.smart-gamma.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAlertList**](V2Api.md#getAlertList) | **GET** /api/v2/alerts | 
[**getAlertsStatus**](V2Api.md#getAlertsStatus) | **GET** /api/v2/alerts/status | 
[**getFleetStatus**](V2Api.md#getFleetStatus) | **GET** /api/v2/fleet/status | 
[**getUserProfile**](V2Api.md#getUserProfile) | **GET** /api/v2/user-profiles | 
[**getVehicleStatus**](V2Api.md#getVehicleStatus) | **GET** /api/v2/vehicles/{vehicleId}/status | 
[**getVehicles**](V2Api.md#getVehicles) | **GET** /api/v2/vehicles | 
[**getVehiclesDailyStats**](V2Api.md#getVehiclesDailyStats) | **GET** /api/v2/vehicles/{vehicleId}/daily-statistics | 

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
 - **Accept**: application/json, text/plain

