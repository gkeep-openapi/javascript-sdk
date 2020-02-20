/**
 * Gkeep API
 * Gkeep API
 *
 * OpenAPI spec version: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GkeepApi);
  }
}(this, function(expect, GkeepApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GkeepApi.V1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('V1Api', function() {
    describe('getCountriesList', function() {
      it('should call getCountriesList successfully', function(done) {
        //uncomment below and update the code to test getCountriesList
        //instance.getCountriesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getTankTypesList', function() {
      it('should call getTankTypesList successfully', function(done) {
        //uncomment below and update the code to test getTankTypesList
        //instance.getTankTypesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleBrandList', function() {
      it('should call getVehicleBrandList successfully', function(done) {
        //uncomment below and update the code to test getVehicleBrandList
        //instance.getVehicleBrandList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleFuelTypesList', function() {
      it('should call getVehicleFuelTypesList successfully', function(done) {
        //uncomment below and update the code to test getVehicleFuelTypesList
        //instance.getVehicleFuelTypesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleModelList', function() {
      it('should call getVehicleModelList successfully', function(done) {
        //uncomment below and update the code to test getVehicleModelList
        //instance.getVehicleModelList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleNationalTypeList', function() {
      it('should call getVehicleNationalTypeList successfully', function(done) {
        //uncomment below and update the code to test getVehicleNationalTypeList
        //instance.getVehicleNationalTypeList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehiclePropertiesList', function() {
      it('should call getVehiclePropertiesList successfully', function(done) {
        //uncomment below and update the code to test getVehiclePropertiesList
        //instance.getVehiclePropertiesList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleTypeList', function() {
      it('should call getVehicleTypeList successfully', function(done) {
        //uncomment below and update the code to test getVehicleTypeList
        //instance.getVehicleTypeList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleVersionList', function() {
      it('should call getVehicleVersionList successfully', function(done) {
        //uncomment below and update the code to test getVehicleVersionList
        //instance.getVehicleVersionList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));