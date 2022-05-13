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
import UpdateVehicleVehicle from './UpdateVehicleVehicle';

/**
* The UpdateVehicle model module.
* @module model/UpdateVehicle
* @version 1.0.0
*/
export default class UpdateVehicle {
    /**
    * Constructs a new <code>UpdateVehicle</code>.
    * @alias module:model/UpdateVehicle
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UpdateVehicle</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UpdateVehicle} obj Optional instance to populate.
    * @return {module:model/UpdateVehicle} The populated <code>UpdateVehicle</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateVehicle();
                        
            
            if (data.hasOwnProperty('vehicle')) {
                obj['vehicle'] = UpdateVehicleVehicle.constructFromObject(data['vehicle']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/UpdateVehicleVehicle} vehicle
    */
    vehicle = undefined;




}
