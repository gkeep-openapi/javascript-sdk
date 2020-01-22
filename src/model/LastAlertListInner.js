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

import ApiClient from '../ApiClient';
import BigDecimal from './BigDecimal';

/**
* The LastAlertListInner model module.
* @module model/LastAlertListInner
* @version 0.0.1
*/
export default class LastAlertListInner {
    /**
    * Constructs a new <code>LastAlertListInner</code>.
    * @alias module:model/LastAlertListInner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>LastAlertListInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/LastAlertListInner} obj Optional instance to populate.
    * @return {module:model/LastAlertListInner} The populated <code>LastAlertListInner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LastAlertListInner();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('frame_id')) {
                obj['frame_id'] = ApiClient.convertToType(data['frame_id'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
            if (data.hasOwnProperty('sensor')) {
                obj['sensor'] = ApiClient.convertToType(data['sensor'], Object);
            }
            if (data.hasOwnProperty('imei')) {
                obj['imei'] = ApiClient.convertToType(data['imei'], 'String');
            }
            if (data.hasOwnProperty('import_status')) {
                obj['import_status'] = ApiClient.convertToType(data['import_status'], 'Number');
            }
            if (data.hasOwnProperty('msg_time')) {
                obj['msg_time'] = ApiClient.convertToType(data['msg_time'], 'Number');
            }
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'Number');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'Number');
            }
            if (data.hasOwnProperty('co2')) {
                obj['co2'] = ApiClient.convertToType(data['co2'], 'Number');
            }
            if (data.hasOwnProperty('fuel_consumption')) {
                obj['fuel_consumption'] = ApiClient.convertToType(data['fuel_consumption'], 'Number');
            }
            if (data.hasOwnProperty('fuel_levels')) {
                obj['fuel_levels'] = ApiClient.convertToType(data['fuel_levels'], [BigDecimal]);
            }
            if (data.hasOwnProperty('aligned_fuel_levels')) {
                obj['aligned_fuel_levels'] = ApiClient.convertToType(data['aligned_fuel_levels'], 'String');
            }
            if (data.hasOwnProperty('fuel_level')) {
                obj['fuel_level'] = ApiClient.convertToType(data['fuel_level'], BigDecimal);
            }
            if (data.hasOwnProperty('vehicle_id')) {
                obj['vehicle_id'] = ApiClient.convertToType(data['vehicle_id'], 'Number');
            }
            if (data.hasOwnProperty('vehicle')) {
                obj['vehicle'] = ApiClient.convertToType(data['vehicle'], Object);
            }
            if (data.hasOwnProperty('driver_id')) {
                obj['driver_id'] = ApiClient.convertToType(data['driver_id'], 'Number');
            }
            if (data.hasOwnProperty('is_day_off')) {
                obj['is_day_off'] = ApiClient.convertToType(data['is_day_off'], 'Boolean');
            }
            if (data.hasOwnProperty('is_maintenance_enabled')) {
                obj['is_maintenance_enabled'] = ApiClient.convertToType(data['is_maintenance_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} frame_id
    */
    frame_id = undefined;
    /**
    * @member {String} version
    */
    version = undefined;
    /**
    * @member {Object} sensor
    */
    sensor = undefined;
    /**
    * @member {String} imei
    */
    imei = undefined;
    /**
    * @member {Number} import_status
    */
    import_status = undefined;
    /**
    * @member {Number} msg_time
    */
    msg_time = undefined;
    /**
    * @member {Number} latitude
    */
    latitude = undefined;
    /**
    * @member {Number} longitude
    */
    longitude = undefined;
    /**
    * @member {Number} co2
    */
    co2 = undefined;
    /**
    * @member {Number} fuel_consumption
    */
    fuel_consumption = undefined;
    /**
    * @member {Array.<module:model/BigDecimal>} fuel_levels
    */
    fuel_levels = undefined;
    /**
    * @member {String} aligned_fuel_levels
    */
    aligned_fuel_levels = undefined;
    /**
    * @member {module:model/BigDecimal} fuel_level
    */
    fuel_level = undefined;
    /**
    * @member {Number} vehicle_id
    */
    vehicle_id = undefined;
    /**
    * @member {Object} vehicle
    */
    vehicle = undefined;
    /**
    * @member {Number} driver_id
    */
    driver_id = undefined;
    /**
    * @member {Boolean} is_day_off
    */
    is_day_off = undefined;
    /**
    * @member {Boolean} is_maintenance_enabled
    */
    is_maintenance_enabled = undefined;




}