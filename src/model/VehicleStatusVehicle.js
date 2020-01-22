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
import VehicleStatusVehicleDriver from './VehicleStatusVehicleDriver';

/**
* The VehicleStatusVehicle model module.
* @module model/VehicleStatusVehicle
* @version 0.0.1
*/
export default class VehicleStatusVehicle {
    /**
    * Constructs a new <code>VehicleStatusVehicle</code>.
    * @alias module:model/VehicleStatusVehicle
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleStatusVehicle</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleStatusVehicle} obj Optional instance to populate.
    * @return {module:model/VehicleStatusVehicle} The populated <code>VehicleStatusVehicle</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleStatusVehicle();
                        
            
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = VehicleStatusVehicleDriver.constructFromObject(data['driver']);
            }
        }
        return obj;
    }

    /**
    * @member {Number} capacity
    */
    capacity = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {module:model/VehicleStatusVehicleDriver} driver
    */
    driver = undefined;




}