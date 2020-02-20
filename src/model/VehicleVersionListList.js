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
import VehicleBrandListInner from './VehicleBrandListInner';
import VehicleModelListList from './VehicleModelListList';

/**
* The VehicleVersionListList model module.
* @module model/VehicleVersionListList
* @version 0.0.1
*/
export default class VehicleVersionListList {
    /**
    * Constructs a new <code>VehicleVersionListList</code>.
    * @alias module:model/VehicleVersionListList
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleVersionListList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleVersionListList} obj Optional instance to populate.
    * @return {module:model/VehicleVersionListList} The populated <code>VehicleVersionListList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleVersionListList();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = VehicleBrandListInner.constructFromObject(data['brand']);
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = VehicleModelListList.constructFromObject(data['model']);
            }
            if (data.hasOwnProperty('started_at')) {
                obj['started_at'] = ApiClient.convertToType(data['started_at'], 'Number');
            }
            if (data.hasOwnProperty('ended_at')) {
                obj['ended_at'] = ApiClient.convertToType(data['ended_at'], 'String');
            }
            if (data.hasOwnProperty('tonnage')) {
                obj['tonnage'] = ApiClient.convertToType(data['tonnage'], 'Number');
            }
            if (data.hasOwnProperty('power')) {
                obj['power'] = ApiClient.convertToType(data['power'], 'Number');
            }
            if (data.hasOwnProperty('power_cv')) {
                obj['power_cv'] = ApiClient.convertToType(data['power_cv'], 'Number');
            }
            if (data.hasOwnProperty('axes')) {
                obj['axes'] = ApiClient.convertToType(data['axes'], 'String');
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
    * @member {module:model/VehicleBrandListInner} brand
    */
    brand = undefined;
    /**
    * @member {module:model/VehicleModelListList} model
    */
    model = undefined;
    /**
    * @member {Number} started_at
    */
    started_at = undefined;
    /**
    * @member {String} ended_at
    */
    ended_at = undefined;
    /**
    * @member {Number} tonnage
    */
    tonnage = undefined;
    /**
    * @member {Number} power
    */
    power = undefined;
    /**
    * @member {Number} power_cv
    */
    power_cv = undefined;
    /**
    * @member {String} axes
    */
    axes = undefined;




}