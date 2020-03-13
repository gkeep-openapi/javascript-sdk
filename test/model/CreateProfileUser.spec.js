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
    instance = new GkeepApi.CreateProfileUser();
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

  describe('CreateProfileUser', function() {
    it('should create an instance of CreateProfileUser', function() {
      // uncomment below and update the code to test CreateProfileUser
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be.a(GkeepApi.CreateProfileUser);
    });

    it('should have the property firstname (base name: "firstname")', function() {
      // uncomment below and update the code to test the property firstname
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property lastname (base name: "lastname")', function() {
      // uncomment below and update the code to test the property lastname
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property phone (base name: "phone")', function() {
      // uncomment below and update the code to test the property phone
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property company (base name: "company")', function() {
      // uncomment below and update the code to test the property company
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property companyShortName (base name: "company_short_name")', function() {
      // uncomment below and update the code to test the property companyShortName
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property notifyTimezone (base name: "notify_timezone")', function() {
      // uncomment below and update the code to test the property notifyTimezone
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property lang (base name: "lang")', function() {
      // uncomment below and update the code to test the property lang
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

    it('should have the property navSystemAccessData (base name: "nav_system_access_data")', function() {
      // uncomment below and update the code to test the property navSystemAccessData
      //var instane = new GkeepApi.CreateProfileUser();
      //expect(instance).to.be();
    });

  });

}));
