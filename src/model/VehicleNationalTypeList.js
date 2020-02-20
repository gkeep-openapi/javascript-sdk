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
import VehicleNationalTypeListInner from './VehicleNationalTypeListInner';

/**
* The VehicleNationalTypeList model module.
* @module model/VehicleNationalTypeList
* @version 0.0.1
*/
export default class VehicleNationalTypeList extends Array {
    /**
    * Constructs a new <code>VehicleNationalTypeList</code>.
    * @alias module:model/VehicleNationalTypeList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>VehicleNationalTypeList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleNationalTypeList} obj Optional instance to populate.
    * @return {module:model/VehicleNationalTypeList} The populated <code>VehicleNationalTypeList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleNationalTypeList();
            ApiClient.constructFromObject(data, obj, 'VehicleNationalTypeListInner');
            
            
        }
        return obj;
    }





}