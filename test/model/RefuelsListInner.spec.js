/**
 * Gkeep API
 * Gkeep API
 *
 * OpenAPI spec version: 1.0.0
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
    instance = new GkeepApi.RefuelsListInner();
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

  describe('RefuelsListInner', function() {
    it('should create an instance of RefuelsListInner', function() {
      // uncomment below and update the code to test RefuelsListInner
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be.a(GkeepApi.RefuelsListInner);
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property fuelCost (base name: "fuel_cost")', function() {
      // uncomment below and update the code to test the property fuelCost
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property fuelLevelOnRaiseStart (base name: "fuel_level_on_raise_start")', function() {
      // uncomment below and update the code to test the property fuelLevelOnRaiseStart
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property fuelLevel (base name: "fuel_level")', function() {
      // uncomment below and update the code to test the property fuelLevel
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property smoothedFuelLevel (base name: "smoothed_fuel_level")', function() {
      // uncomment below and update the code to test the property smoothedFuelLevel
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property filledFuelVolume (base name: "filled_fuel_volume")', function() {
      // uncomment below and update the code to test the property filledFuelVolume
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property capacity (base name: "capacity")', function() {
      // uncomment below and update the code to test the property capacity
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instane = new GkeepApi.RefuelsListInner();
      //expect(instance).to.be();
    });

  });

}));
