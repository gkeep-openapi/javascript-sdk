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
    instance = new GkeepApi.VehicleStatus();
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

  describe('VehicleStatus', function() {
    it('should create an instance of VehicleStatus', function() {
      // uncomment below and update the code to test VehicleStatus
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be.a(GkeepApi.VehicleStatus);
    });

    it('should have the property fuelLevel (base name: "fuel_level")', function() {
      // uncomment below and update the code to test the property fuelLevel
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property fuelLevelOnRaiseStart (base name: "fuel_level_on_raise_start")', function() {
      // uncomment below and update the code to test the property fuelLevelOnRaiseStart
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property isVehicleStop (base name: "is_vehicle_stop")', function() {
      // uncomment below and update the code to test the property isVehicleStop
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property isEngineStop (base name: "is_engine_stop")', function() {
      // uncomment below and update the code to test the property isEngineStop
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property batteryLevel (base name: "battery_level")', function() {
      // uncomment below and update the code to test the property batteryLevel
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property vehicle (base name: "vehicle")', function() {
      // uncomment below and update the code to test the property vehicle
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

    it('should have the property tanks (base name: "tanks")', function() {
      // uncomment below and update the code to test the property tanks
      //var instane = new GkeepApi.VehicleStatus();
      //expect(instance).to.be();
    });

  });

}));