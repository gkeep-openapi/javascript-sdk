# GkeepApi.V1Api

All URIs are relative to *https://staging-transport.smart-gamma.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCountriesList**](V1Api.md#getCountriesList) | **GET** /api/v1/countries/by | 
[**getTankTypeList**](V1Api.md#getTankTypeList) | **GET** /api/v1/tank/types/by | 
[**getUserGroupList**](V1Api.md#getUserGroupList) | **GET** /api/v1/user/allowed/groups | 
[**getVehicleBrandList**](V1Api.md#getVehicleBrandList) | **GET** /api/v1/vehicle/brands | 
[**getVehicleFuelTypesList**](V1Api.md#getVehicleFuelTypesList) | **GET** /api/v1/vehicle/fuel-types | 
[**getVehicleModelList**](V1Api.md#getVehicleModelList) | **GET** /api/v1/vehicle/models | 
[**getVehicleNationalTypeList**](V1Api.md#getVehicleNationalTypeList) | **GET** /api/v1/vehicle/national-types | 
[**getVehiclePropertiesList**](V1Api.md#getVehiclePropertiesList) | **GET** /api/v1/vehicle/properties | 
[**getVehicleTypeList**](V1Api.md#getVehicleTypeList) | **GET** /api/v1/vehicle/types | 
[**getVehicleVersionList**](V1Api.md#getVehicleVersionList) | **GET** /api/v1/vehicle/versions | 

<a name="getCountriesList"></a>
# **getCountriesList**
> CountryList getCountriesList()



Get countries

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getCountriesList((error, data, response) => {
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

[**CountryList**](CountryList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getTankTypeList"></a>
# **getTankTypeList**
> TankTypeList getTankTypeList()



Get tank types

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getTankTypeList((error, data, response) => {
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

[**TankTypeList**](TankTypeList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getUserGroupList"></a>
# **getUserGroupList**
> UserGroupList getUserGroupList()



Get user allowed groups

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getUserGroupList((error, data, response) => {
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

[**UserGroupList**](UserGroupList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleBrandList"></a>
# **getVehicleBrandList**
> VehicleBrandList getVehicleBrandList()



Get vehicle brands

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getVehicleBrandList((error, data, response) => {
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

[**VehicleBrandList**](VehicleBrandList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleFuelTypesList"></a>
# **getVehicleFuelTypesList**
> VehicleFuelTypeList getVehicleFuelTypesList()



Get vehicle fuel-types

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getVehicleFuelTypesList((error, data, response) => {
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

[**VehicleFuelTypeList**](VehicleFuelTypeList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleModelList"></a>
# **getVehicleModelList**
> VehicleModelList getVehicleModelList(opts)



Get vehicle models

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
let opts = { 
  'page': "page_example", // String | page
  'perPage': "perPage_example" // String | per_page
};
apiInstance.getVehicleModelList(opts, (error, data, response) => {
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

[**VehicleModelList**](VehicleModelList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleNationalTypeList"></a>
# **getVehicleNationalTypeList**
> VehicleNationalTypeList getVehicleNationalTypeList()



Get vehicle national-types

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getVehicleNationalTypeList((error, data, response) => {
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

[**VehicleNationalTypeList**](VehicleNationalTypeList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehiclePropertiesList"></a>
# **getVehiclePropertiesList**
> VehiclePropertyList getVehiclePropertiesList()



Get vehicle properties

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getVehiclePropertiesList((error, data, response) => {
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

[**VehiclePropertyList**](VehiclePropertyList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleTypeList"></a>
# **getVehicleTypeList**
> VehicleTypeList getVehicleTypeList()



Get vehicle types

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
apiInstance.getVehicleTypeList((error, data, response) => {
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

[**VehicleTypeList**](VehicleTypeList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getVehicleVersionList"></a>
# **getVehicleVersionList**
> VehicleVersionList getVehicleVersionList(opts)



Get vehicle versions

### Example
```javascript
import GkeepApi from 'gkeep_api';
let defaultClient = GkeepApi.ApiClient.instance;


let apiInstance = new GkeepApi.V1Api();
let opts = { 
  'page': "page_example", // String | page
  'perPage': "perPage_example" // String | per_page
};
apiInstance.getVehicleVersionList(opts, (error, data, response) => {
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

[**VehicleVersionList**](VehicleVersionList.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

