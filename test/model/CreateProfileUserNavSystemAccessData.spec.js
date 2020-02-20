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
    instance = new GkeepApi.CreateProfileUserNavSystemAccessData();
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

  describe('CreateProfileUserNavSystemAccessData', function() {
    it('should create an instance of CreateProfileUserNavSystemAccessData', function() {
      // uncomment below and update the code to test CreateProfileUserNavSystemAccessData
      //var instane = new GkeepApi.CreateProfileUserNavSystemAccessData();
      //expect(instance).to.be.a(GkeepApi.CreateProfileUserNavSystemAccessData);
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instane = new GkeepApi.CreateProfileUserNavSystemAccessData();
      //expect(instance).to.be();
    });

    it('should have the property password (base name: "password")', function() {
      // uncomment below and update the code to test the property password
      //var instane = new GkeepApi.CreateProfileUserNavSystemAccessData();
      //expect(instance).to.be();
    });

    it('should have the property username (base name: "username")', function() {
      // uncomment below and update the code to test the property username
      //var instane = new GkeepApi.CreateProfileUserNavSystemAccessData();
      //expect(instance).to.be();
    });

    it('should have the property apikey (base name: "apikey")', function() {
      // uncomment below and update the code to test the property apikey
      //var instane = new GkeepApi.CreateProfileUserNavSystemAccessData();
      //expect(instance).to.be();
    });

  });

}));
