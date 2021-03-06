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
import VehiclePropertyListInner from './VehiclePropertyListInner';

/**
* The VehiclePropertyList model module.
* @module model/VehiclePropertyList
* @version 1.0.0
*/
export default class VehiclePropertyList extends Array {
    /**
    * Constructs a new <code>VehiclePropertyList</code>.
    * @alias module:model/VehiclePropertyList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>VehiclePropertyList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehiclePropertyList} obj Optional instance to populate.
    * @return {module:model/VehiclePropertyList} The populated <code>VehiclePropertyList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehiclePropertyList();
            ApiClient.constructFromObject(data, obj, 'VehiclePropertyListInner');
            
            
        }
        return obj;
    }





}
