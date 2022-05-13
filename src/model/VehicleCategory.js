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
* The VehicleCategory model module.
* @module model/VehicleCategory
* @version 1.0.0
*/
export default class VehicleCategory {
    /**
    * Constructs a new <code>VehicleCategory</code>.
    * @alias module:model/VehicleCategory
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleCategory</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleCategory} obj Optional instance to populate.
    * @return {module:model/VehicleCategory} The populated <code>VehicleCategory</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleCategory();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('consumption')) {
                obj['consumption'] = ApiClient.convertToType(data['consumption'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {Number} consumption
    */
    consumption = undefined;




}
