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
* The RefuelsListInner model module.
* @module model/RefuelsListInner
* @version 0.0.1
*/
export default class RefuelsListInner {
    /**
    * Constructs a new <code>RefuelsListInner</code>.
    * @alias module:model/RefuelsListInner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>RefuelsListInner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/RefuelsListInner} obj Optional instance to populate.
    * @return {module:model/RefuelsListInner} The populated <code>RefuelsListInner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RefuelsListInner();
                        
            
            if (data.hasOwnProperty('latitude')) {
                obj['latitude'] = ApiClient.convertToType(data['latitude'], 'String');
            }
            if (data.hasOwnProperty('longitude')) {
                obj['longitude'] = ApiClient.convertToType(data['longitude'], 'String');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Number');
            }
            if (data.hasOwnProperty('fuel_cost')) {
                obj['fuel_cost'] = ApiClient.convertToType(data['fuel_cost'], 'Number');
            }
            if (data.hasOwnProperty('fuel_level_on_raise_start')) {
                obj['fuel_level_on_raise_start'] = ApiClient.convertToType(data['fuel_level_on_raise_start'], BigDecimal);
            }
            if (data.hasOwnProperty('fuel_level')) {
                obj['fuel_level'] = ApiClient.convertToType(data['fuel_level'], BigDecimal);
            }
            if (data.hasOwnProperty('filled_fuel_volume')) {
                obj['filled_fuel_volume'] = ApiClient.convertToType(data['filled_fuel_volume'], BigDecimal);
            }
            if (data.hasOwnProperty('capacity')) {
                obj['capacity'] = ApiClient.convertToType(data['capacity'], BigDecimal);
            }
            if (data.hasOwnProperty('distance')) {
                obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} latitude
    */
    latitude = undefined;
    /**
    * @member {String} longitude
    */
    longitude = undefined;
    /**
    * @member {Number} created_at
    */
    created_at = undefined;
    /**
    * @member {Number} fuel_cost
    */
    fuel_cost = undefined;
    /**
    * @member {module:model/BigDecimal} fuel_level_on_raise_start
    */
    fuel_level_on_raise_start = undefined;
    /**
    * @member {module:model/BigDecimal} fuel_level
    */
    fuel_level = undefined;
    /**
    * @member {module:model/BigDecimal} filled_fuel_volume
    */
    filled_fuel_volume = undefined;
    /**
    * @member {module:model/BigDecimal} capacity
    */
    capacity = undefined;
    /**
    * @member {Number} distance
    */
    distance = undefined;




}
