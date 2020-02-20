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
* The UserProfileListGeoLocalizationSettings model module.
* @module model/UserProfileListGeoLocalizationSettings
* @version 0.0.1
*/
export default class UserProfileListGeoLocalizationSettings {
    /**
    * Constructs a new <code>UserProfileListGeoLocalizationSettings</code>.
    * @alias module:model/UserProfileListGeoLocalizationSettings
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>UserProfileListGeoLocalizationSettings</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/UserProfileListGeoLocalizationSettings} obj Optional instance to populate.
    * @return {module:model/UserProfileListGeoLocalizationSettings} The populated <code>UserProfileListGeoLocalizationSettings</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserProfileListGeoLocalizationSettings();
                        
            
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('service')) {
                obj['service'] = ApiClient.convertToType(data['service'], 'String');
            }
            if (data.hasOwnProperty('app_id')) {
                obj['app_id'] = ApiClient.convertToType(data['app_id'], 'String');
            }
            if (data.hasOwnProperty('api_key')) {
                obj['api_key'] = ApiClient.convertToType(data['api_key'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {Number} id
    */
    id = undefined;
    /**
    * @member {String} service
    */
    service = undefined;
    /**
    * @member {String} app_id
    */
    app_id = undefined;
    /**
    * @member {String} api_key
    */
    api_key = undefined;
    /**
    * @member {String} login
    */
    login = undefined;
    /**
    * @member {String} password
    */
    password = undefined;




}
