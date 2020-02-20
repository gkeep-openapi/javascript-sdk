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

/**
* The VehicleTankType model module.
* @module model/VehicleTankType
* @version 0.0.1
*/
export default class VehicleTankType {
    /**
    * Constructs a new <code>VehicleTankType</code>.
    * @alias module:model/VehicleTankType
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleTankType</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleTankType} obj Optional instance to populate.
    * @return {module:model/VehicleTankType} The populated <code>VehicleTankType</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleTankType();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('gkeep_id')) {
                obj['gkeep_id'] = ApiClient.convertToType(data['gkeep_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} gkeep_id
    */
    gkeep_id = undefined;




}
