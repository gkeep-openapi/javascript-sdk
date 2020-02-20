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
    instance = new GkeepApi.NotificationSettingsInner();
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

  describe('NotificationSettingsInner', function() {
    it('should create an instance of NotificationSettingsInner', function() {
      // uncomment below and update the code to test NotificationSettingsInner
      //var instane = new GkeepApi.NotificationSettingsInner();
      //expect(instance).to.be.a(GkeepApi.NotificationSettingsInner);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GkeepApi.NotificationSettingsInner();
      //expect(instance).to.be();
    });

    it('should have the property notifyByEmail (base name: "notify_by_email")', function() {
      // uncomment below and update the code to test the property notifyByEmail
      //var instane = new GkeepApi.NotificationSettingsInner();
      //expect(instance).to.be();
    });

    it('should have the property notifyBySms (base name: "notify_by_sms")', function() {
      // uncomment below and update the code to test the property notifyBySms
      //var instane = new GkeepApi.NotificationSettingsInner();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new GkeepApi.NotificationSettingsInner();
      //expect(instance).to.be();
    });

    it('should have the property code (base name: "code")', function() {
      // uncomment below and update the code to test the property code
      //var instane = new GkeepApi.NotificationSettingsInner();
      //expect(instance).to.be();
    });

  });

}));