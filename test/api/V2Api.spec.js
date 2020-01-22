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
    instance = new GkeepApi.V2Api();
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

  describe('V2Api', function() {
    describe('getAlerts', function() {
      it('should call getAlerts successfully', function(done) {
        //uncomment below and update the code to test getAlerts
        //instance.getAlerts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFletLastInfos', function() {
      it('should call getFletLastInfos successfully', function(done) {
        //uncomment below and update the code to test getFletLastInfos
        //instance.getFletLastInfos(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLastAlerts', function() {
      it('should call getLastAlerts successfully', function(done) {
        //uncomment below and update the code to test getLastAlerts
        //instance.getLastAlerts(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserProfile', function() {
      it('should call getUserProfile successfully', function(done) {
        //uncomment below and update the code to test getUserProfile
        //instance.getUserProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicles', function() {
      it('should call getVehicles successfully', function(done) {
        //uncomment below and update the code to test getVehicles
        //instance.getVehicles(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehiclesDailyStats', function() {
      it('should call getVehiclesDailyStats successfully', function(done) {
        //uncomment below and update the code to test getVehiclesDailyStats
        //instance.getVehiclesDailyStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehiclesLatestStats', function() {
      it('should call getVehiclesLatestStats successfully', function(done) {
        //uncomment below and update the code to test getVehiclesLatestStats
        //instance.getVehiclesLatestStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));