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
import AlertListDriver from './AlertListDriver';
import AlertListVehicleOwner from './AlertListVehicleOwner';
import VehicleListGroups from './VehicleListGroups';
import VehicleListSensor from './VehicleListSensor';

/**
* The VehicleListList model module.
* @module model/VehicleListList
* @version 0.0.1
*/
export default class VehicleListList {
    /**
    * Constructs a new <code>VehicleListList</code>.
    * @alias module:model/VehicleListList
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>VehicleListList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/VehicleListList} obj Optional instance to populate.
    * @return {module:model/VehicleListList} The populated <code>VehicleListList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VehicleListList();
                        
            
            if (data.hasOwnProperty('gkeep_id')) {
                obj['gkeep_id'] = ApiClient.convertToType(data['gkeep_id'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = AlertListVehicleOwner.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = AlertListDriver.constructFromObject(data['driver']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [VehicleListGroups]);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('sensor')) {
                obj['sensor'] = VehicleListSensor.constructFromObject(data['sensor']);
            }
            if (data.hasOwnProperty('last_alert_at')) {
                obj['last_alert_at'] = ApiClient.convertToType(data['last_alert_at'], 'Number');
            }
            if (data.hasOwnProperty('first_frame_at')) {
                obj['first_frame_at'] = ApiClient.convertToType(data['first_frame_at'], 'Number');
            }
            if (data.hasOwnProperty('is_maintenance_enabled')) {
                obj['is_maintenance_enabled'] = ApiClient.convertToType(data['is_maintenance_enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
    * @member {String} gkeep_id
    */
    gkeep_id = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {module:model/AlertListVehicleOwner} owner
    */
    owner = undefined;
    /**
    * @member {module:model/AlertListDriver} driver
    */
    driver = undefined;
    /**
    * @member {Array.<module:model/VehicleListGroups>} groups
    */
    groups = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} photo
    */
    photo = undefined;
    /**
    * @member {module:model/VehicleListSensor} sensor
    */
    sensor = undefined;
    /**
    * @member {Number} last_alert_at
    */
    last_alert_at = undefined;
    /**
    * @member {Number} first_frame_at
    */
    first_frame_at = undefined;
    /**
    * @member {Boolean} is_maintenance_enabled
    */
    is_maintenance_enabled = undefined;




}
