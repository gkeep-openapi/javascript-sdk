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
    instance = new GkeepApi.FrameHistoryList();
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

  describe('FrameHistoryList', function() {
    it('should create an instance of FrameHistoryList', function() {
      // uncomment below and update the code to test FrameHistoryList
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be.a(GkeepApi.FrameHistoryList);
    });

    it('should have the property latitude (base name: "latitude")', function() {
      // uncomment below and update the code to test the property latitude
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

    it('should have the property longitude (base name: "longitude")', function() {
      // uncomment below and update the code to test the property longitude
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

    it('should have the property batteryLevel (base name: "battery_level")', function() {
      // uncomment below and update the code to test the property batteryLevel
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

    it('should have the property engineStarted (base name: "engine_started")', function() {
      // uncomment below and update the code to test the property engineStarted
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

    it('should have the property isMoving (base name: "is_moving")', function() {
      // uncomment below and update the code to test the property isMoving
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

    it('should have the property fuelLevel (base name: "fuel_level")', function() {
      // uncomment below and update the code to test the property fuelLevel
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

    it('should have the property msgTime (base name: "msg_time")', function() {
      // uncomment below and update the code to test the property msgTime
      //var instane = new GkeepApi.FrameHistoryList();
      //expect(instance).to.be();
    });

  });

}));
