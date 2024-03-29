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
import BigDecimal from './BigDecimal';
import VehicleStatusTank from './VehicleStatusTank';

/**
* The VehicleStatusTanks model module.
* @module model/VehicleStatusTanks
* @version 1.0.0
*/
export default class VehicleStatusTanks {
    /**
    * Constructs a new <code>VehicleStatusTanks</code>.
    * @alias module:model/VehicleStatusTanks
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleStatusTanks</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleStatusTanks} obj Optional instance to populate.
    * @return {module:model/VehicleStatusTanks} The populated <code>VehicleStatusTanks</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleStatusTanks();
                        
            
            if (data.hasOwnProperty('fuel_level')) {
                obj['fuel_level'] = ApiClient.convertToType(data['fuel_level'], BigDecimal);
            }
            if (data.hasOwnProperty('smoothed_fuel_level')) {
                obj['smoothed_fuel_level'] = ApiClient.convertToType(data['smoothed_fuel_level'], BigDecimal);
            }
            if (data.hasOwnProperty('fuel_level_on_raise_start')) {
                obj['fuel_level_on_raise_start'] = ApiClient.convertToType(data['fuel_level_on_raise_start'], BigDecimal);
            }
            if (data.hasOwnProperty('tank')) {
                obj['tank'] = VehicleStatusTank.constructFromObject(data['tank']);
            }
        }
        return obj;
    }

    /**
    * @member {module:model/BigDecimal} fuel_level
    */
    fuel_level = undefined;
    /**
    * @member {module:model/BigDecimal} smoothed_fuel_level
    */
    smoothed_fuel_level = undefined;
    /**
    * @member {module:model/BigDecimal} fuel_level_on_raise_start
    */
    fuel_level_on_raise_start = undefined;
    /**
    * @member {module:model/VehicleStatusTank} tank
    */
    tank = undefined;




}
