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
    instance = new GkeepApi.VehicleStatusTank();
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

  describe('VehicleStatusTank', function() {
    it('should create an instance of VehicleStatusTank', function() {
      // uncomment below and update the code to test VehicleStatusTank
      //var instane = new GkeepApi.VehicleStatusTank();
      //expect(instance).to.be.a(GkeepApi.VehicleStatusTank);
    });

    it('should have the property tankType (base name: "tank_type")', function() {
      // uncomment below and update the code to test the property tankType
      //var instane = new GkeepApi.VehicleStatusTank();
      //expect(instance).to.be();
    });

  });

}));
