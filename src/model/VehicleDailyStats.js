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

import ApiClient from '../ApiClient';

/**
* The VehicleDailyStats model module.
* @module model/VehicleDailyStats
* @version 1.0.0
*/
export default class VehicleDailyStats {
    /**
    * Constructs a new <code>VehicleDailyStats</code>.
    * @alias module:model/VehicleDailyStats
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleDailyStats</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleDailyStats} obj Optional instance to populate.
    * @return {module:model/VehicleDailyStats} The populated <code>VehicleDailyStats</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleDailyStats();
                        
            
            if (data.hasOwnProperty('engine_on_time')) {
                obj['engine_on_time'] = ApiClient.convertToType(data['engine_on_time'], 'Number');
            }
            if (data.hasOwnProperty('stopped_time')) {
                obj['stopped_time'] = ApiClient.convertToType(data['stopped_time'], 'Number');
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
            if (data.hasOwnProperty('fuel_cost')) {
                obj['fuel_cost'] = ApiClient.convertToType(data['fuel_cost'], 'Number');
            }
            if (data.hasOwnProperty('consumption')) {
                obj['consumption'] = ApiClient.convertToType(data['consumption'], 'Number');
            }
            if (data.hasOwnProperty('average_consumption')) {
                obj['average_consumption'] = ApiClient.convertToType(data['average_consumption'], 'Number');
            }
            if (data.hasOwnProperty('average_consumption_hour')) {
                obj['average_consumption_hour'] = ApiClient.convertToType(data['average_consumption_hour'], 'Number');
            }
            if (data.hasOwnProperty('abnormal_consumption')) {
                obj['abnormal_consumption'] = ApiClient.convertToType(data['abnormal_consumption'], 'Number');
            }
            if (data.hasOwnProperty('real_consumption')) {
                obj['real_consumption'] = ApiClient.convertToType(data['real_consumption'], 'Number');
            }
            if (data.hasOwnProperty('objective')) {
                obj['objective'] = ApiClient.convertToType(data['objective'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} engine_on_time
    */
    engine_on_time = undefined;
    /**
    * @member {Number} stopped_time
    */
    stopped_time = undefined;
    /**
    * @member {Number} distance
    */
    distance = undefined;
    /**
    * @member {Number} fuel_cost
    */
    fuel_cost = undefined;
    /**
    * @member {Number} consumption
    */
    consumption = undefined;
    /**
    * @member {Number} average_consumption
    */
    average_consumption = undefined;
    /**
    * @member {Number} average_consumption_hour
    */
    average_consumption_hour = undefined;
    /**
    * @member {Number} abnormal_consumption
    */
    abnormal_consumption = undefined;
    /**
    * @member {Number} real_consumption
    */
    real_consumption = undefined;
    /**
    * @member {String} objective
    */
    objective = undefined;




}
