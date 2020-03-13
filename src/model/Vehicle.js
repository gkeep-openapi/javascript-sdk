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
import ModelObject from './ModelObject';
import VehicleBrand from './VehicleBrand';
import VehicleCategory from './VehicleCategory';
import VehicleCategoryType from './VehicleCategoryType';
import VehicleCountry from './VehicleCountry';
import VehicleDriver from './VehicleDriver';
import VehicleModel from './VehicleModel';
import VehicleNavSystem from './VehicleNavSystem';
import VehicleOwner from './VehicleOwner';
import VehicleSensor from './VehicleSensor';
import VehicleTankPosition from './VehicleTankPosition';
import VehicleTanks from './VehicleTanks';
import VehicleTechnical from './VehicleTechnical';
import VehicleVersion from './VehicleVersion';

/**
* The Vehicle model module.
* @module model/Vehicle
* @version 1.0.0
*/
export default class Vehicle {
    /**
    * Constructs a new <code>Vehicle</code>.
    * @alias module:model/Vehicle
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>Vehicle</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Vehicle} obj Optional instance to populate.
    * @return {module:model/Vehicle} The populated <code>Vehicle</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Vehicle();
                        
            
            if (data.hasOwnProperty('photo_path')) {
                obj['photo_path'] = ApiClient.convertToType(data['photo_path'], 'String');
            }
            if (data.hasOwnProperty('total_day_off')) {
                obj['total_day_off'] = ApiClient.convertToType(data['total_day_off'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('brand')) {
                obj['brand'] = VehicleBrand.constructFromObject(data['brand']);
            }
            if (data.hasOwnProperty('model')) {
                obj['model'] = VehicleModel.constructFromObject(data['model']);
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = VehicleVersion.constructFromObject(data['version']);
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = VehicleCountry.constructFromObject(data['country']);
            }
            if (data.hasOwnProperty('owner')) {
                obj['owner'] = VehicleOwner.constructFromObject(data['owner']);
            }
            if (data.hasOwnProperty('driver')) {
                obj['driver'] = VehicleDriver.constructFromObject(data['driver']);
            }
            if (data.hasOwnProperty('groups')) {
                obj['groups'] = ApiClient.convertToType(data['groups'], [ModelObject]);
            }
            if (data.hasOwnProperty('initial_consumption')) {
                obj['initial_consumption'] = ApiClient.convertToType(data['initial_consumption'], BigDecimal);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('nav_system_object_uid')) {
                obj['nav_system_object_uid'] = ApiClient.convertToType(data['nav_system_object_uid'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('registration')) {
                obj['registration'] = ApiClient.convertToType(data['registration'], 'String');
            }
            if (data.hasOwnProperty('release_year')) {
                obj['release_year'] = ApiClient.convertToType(data['release_year'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = VehicleCategoryType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('technical')) {
                obj['technical'] = VehicleTechnical.constructFromObject(data['technical']);
            }
            if (data.hasOwnProperty('nav_system')) {
                obj['nav_system'] = VehicleNavSystem.constructFromObject(data['nav_system']);
            }
            if (data.hasOwnProperty('sensor')) {
                obj['sensor'] = VehicleSensor.constructFromObject(data['sensor']);
            }
            if (data.hasOwnProperty('tanks')) {
                obj['tanks'] = ApiClient.convertToType(data['tanks'], [VehicleTanks]);
            }
            if (data.hasOwnProperty('tank_position')) {
                obj['tank_position'] = VehicleTankPosition.constructFromObject(data['tank_position']);
            }
            if (data.hasOwnProperty('is_maintenance_enabled')) {
                obj['is_maintenance_enabled'] = ApiClient.convertToType(data['is_maintenance_enabled'], 'Boolean');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = VehicleCategory.constructFromObject(data['category']);
            }
            if (data.hasOwnProperty('ptac')) {
                obj['ptac'] = ApiClient.convertToType(data['ptac'], 'String');
            }
            if (data.hasOwnProperty('eligible_for_ticpe')) {
                obj['eligible_for_ticpe'] = ApiClient.convertToType(data['eligible_for_ticpe'], 'String');
            }
            if (data.hasOwnProperty('eligible_for_tsvr')) {
                obj['eligible_for_tsvr'] = ApiClient.convertToType(data['eligible_for_tsvr'], 'String');
            }
            if (data.hasOwnProperty('national_type')) {
                obj['national_type'] = ApiClient.convertToType(data['national_type'], 'String');
            }
            if (data.hasOwnProperty('fuel_type')) {
                obj['fuel_type'] = ApiClient.convertToType(data['fuel_type'], 'String');
            }
            if (data.hasOwnProperty('property')) {
                obj['property'] = ApiClient.convertToType(data['property'], 'String');
            }
            if (data.hasOwnProperty('box_id')) {
                obj['box_id'] = ApiClient.convertToType(data['box_id'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} photo_path
    */
    photo_path = undefined;
    /**
    * @member {Number} total_day_off
    */
    total_day_off = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {module:model/VehicleBrand} brand
    */
    brand = undefined;
    /**
    * @member {module:model/VehicleModel} model
    */
    model = undefined;
    /**
    * @member {module:model/VehicleVersion} version
    */
    version = undefined;
    /**
    * @member {String} comment
    */
    comment = undefined;
    /**
    * @member {module:model/VehicleCountry} country
    */
    country = undefined;
    /**
    * @member {module:model/VehicleOwner} owner
    */
    owner = undefined;
    /**
    * @member {module:model/VehicleDriver} driver
    */
    driver = undefined;
    /**
    * @member {Array.<module:model/ModelObject>} groups
    */
    groups = undefined;
    /**
    * @member {module:model/BigDecimal} initial_consumption
    */
    initial_consumption = undefined;
    /**
    * @member {String} name
    */
    name = undefined;
    /**
    * @member {String} nav_system_object_uid
    */
    nav_system_object_uid = undefined;
    /**
    * @member {String} photo
    */
    photo = undefined;
    /**
    * @member {String} registration
    */
    registration = undefined;
    /**
    * @member {Number} release_year
    */
    release_year = undefined;
    /**
    * @member {module:model/VehicleCategoryType} type
    */
    type = undefined;
    /**
    * @member {module:model/VehicleTechnical} technical
    */
    technical = undefined;
    /**
    * @member {module:model/VehicleNavSystem} nav_system
    */
    nav_system = undefined;
    /**
    * @member {module:model/VehicleSensor} sensor
    */
    sensor = undefined;
    /**
    * @member {Array.<module:model/VehicleTanks>} tanks
    */
    tanks = undefined;
    /**
    * @member {module:model/VehicleTankPosition} tank_position
    */
    tank_position = undefined;
    /**
    * @member {Boolean} is_maintenance_enabled
    */
    is_maintenance_enabled = undefined;
    /**
    * @member {module:model/VehicleCategory} category
    */
    category = undefined;
    /**
    * @member {String} ptac
    */
    ptac = undefined;
    /**
    * @member {String} eligible_for_ticpe
    */
    eligible_for_ticpe = undefined;
    /**
    * @member {String} eligible_for_tsvr
    */
    eligible_for_tsvr = undefined;
    /**
    * @member {String} national_type
    */
    national_type = undefined;
    /**
    * @member {String} fuel_type
    */
    fuel_type = undefined;
    /**
    * @member {String} property
    */
    property = undefined;
    /**
    * @member {String} box_id
    */
    box_id = undefined;




}
