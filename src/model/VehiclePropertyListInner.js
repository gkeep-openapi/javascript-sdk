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
* The VehiclePropertyListInner model module.
* @module model/VehiclePropertyListInner
* @version 0.0.1
*/
export default class VehiclePropertyListInner {
    /**
    * Constructs a new <code>VehiclePropertyListInner</code>.
    * @alias module:model/VehiclePropertyListInner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehiclePropertyListInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehiclePropertyListInner} obj Optional instance to populate.
    * @return {module:model/VehiclePropertyListInner} The populated <code>VehiclePropertyListInner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehiclePropertyListInner();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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




}
