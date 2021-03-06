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
    describe('createUserProfile', function() {
      it('should call createUserProfile successfully', function(done) {
        //uncomment below and update the code to test createUserProfile
        //instance.createUserProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createVehicleCategory', function() {
      it('should call createVehicleCategory successfully', function(done) {
        //uncomment below and update the code to test createVehicleCategory
        //instance.createVehicleCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUserProfile', function() {
      it('should call deleteUserProfile successfully', function(done) {
        //uncomment below and update the code to test deleteUserProfile
        //instance.deleteUserProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVehicleCategory', function() {
      it('should call deleteVehicleCategory successfully', function(done) {
        //uncomment below and update the code to test deleteVehicleCategory
        //instance.deleteVehicleCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('enableVehicleMaintenance', function() {
      it('should call enableVehicleMaintenance successfully', function(done) {
        //uncomment below and update the code to test enableVehicleMaintenance
        //instance.enableVehicleMaintenance(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAlertList', function() {
      it('should call getAlertList successfully', function(done) {
        //uncomment below and update the code to test getAlertList
        //instance.getAlertList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAlertsStatus', function() {
      it('should call getAlertsStatus successfully', function(done) {
        //uncomment below and update the code to test getAlertsStatus
        //instance.getAlertsStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getCurrentUserProfile', function() {
      it('should call getCurrentUserProfile successfully', function(done) {
        //uncomment below and update the code to test getCurrentUserProfile
        //instance.getCurrentUserProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFleetStatus', function() {
      it('should call getFleetStatus successfully', function(done) {
        //uncomment below and update the code to test getFleetStatus
        //instance.getFleetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNotificationSettings', function() {
      it('should call getNotificationSettings successfully', function(done) {
        //uncomment below and update the code to test getNotificationSettings
        //instance.getNotificationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRelatedUserProfiles', function() {
      it('should call getRelatedUserProfiles successfully', function(done) {
        //uncomment below and update the code to test getRelatedUserProfiles
        //instance.getRelatedUserProfiles(function(error) {
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
    describe('getVehicleCategory', function() {
      it('should call getVehicleCategory successfully', function(done) {
        //uncomment below and update the code to test getVehicleCategory
        //instance.getVehicleCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleCategoryList', function() {
      it('should call getVehicleCategoryList successfully', function(done) {
        //uncomment below and update the code to test getVehicleCategoryList
        //instance.getVehicleCategoryList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehicleStatus', function() {
      it('should call getVehicleStatus successfully', function(done) {
        //uncomment below and update the code to test getVehicleStatus
        //instance.getVehicleStatus(function(error) {
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
    describe('getVehiclesFrameHistory', function() {
      it('should call getVehiclesFrameHistory successfully', function(done) {
        //uncomment below and update the code to test getVehiclesFrameHistory
        //instance.getVehiclesFrameHistory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehiclesRefuels', function() {
      it('should call getVehiclesRefuels successfully', function(done) {
        //uncomment below and update the code to test getVehiclesRefuels
        //instance.getVehiclesRefuels(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVehiclesStoppedConsumptions', function() {
      it('should call getVehiclesStoppedConsumptions successfully', function(done) {
        //uncomment below and update the code to test getVehiclesStoppedConsumptions
        //instance.getVehiclesStoppedConsumptions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('refreshApiToken', function() {
      it('should call refreshApiToken successfully', function(done) {
        //uncomment below and update the code to test refreshApiToken
        //instance.refreshApiToken(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNotificationSettings', function() {
      it('should call updateNotificationSettings successfully', function(done) {
        //uncomment below and update the code to test updateNotificationSettings
        //instance.updateNotificationSettings(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateUserProfile', function() {
      it('should call updateUserProfile successfully', function(done) {
        //uncomment below and update the code to test updateUserProfile
        //instance.updateUserProfile(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVehicle', function() {
      it('should call updateVehicle successfully', function(done) {
        //uncomment below and update the code to test updateVehicle
        //instance.updateVehicle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateVehicleCategory', function() {
      it('should call updateVehicleCategory successfully', function(done) {
        //uncomment below and update the code to test updateVehicleCategory
        //instance.updateVehicleCategory(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
