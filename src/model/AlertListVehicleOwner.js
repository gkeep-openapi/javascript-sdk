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
* The AlertListVehicleOwner model module.
* @module model/AlertListVehicleOwner
* @version 0.0.1
*/
export default class AlertListVehicleOwner {
    /**
    * Constructs a new <code>AlertListVehicleOwner</code>.
    * @alias module:model/AlertListVehicleOwner
    * @class
    */

    constructor() {
        
        
        
    }

    /**
    * Constructs a <code>AlertListVehicleOwner</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/AlertListVehicleOwner} obj Optional instance to populate.
    * @return {module:model/AlertListVehicleOwner} The populated <code>AlertListVehicleOwner</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AlertListVehicleOwner();
                        
            
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstname')) {
                obj['firstname'] = ApiClient.convertToType(data['firstname'], 'String');
            }
            if (data.hasOwnProperty('lastname')) {
                obj['lastname'] = ApiClient.convertToType(data['lastname'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('company')) {
                obj['company'] = ApiClient.convertToType(data['company'], 'String');
            }
            if (data.hasOwnProperty('company_short_name')) {
                obj['company_short_name'] = ApiClient.convertToType(data['company_short_name'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {String} email
    */
    email = undefined;
    /**
    * @member {String} firstname
    */
    firstname = undefined;
    /**
    * @member {String} lastname
    */
    lastname = undefined;
    /**
    * @member {String} phone
    */
    phone = undefined;
    /**
    * @member {String} company
    */
    company = undefined;
    /**
    * @member {String} company_short_name
    */
    company_short_name = undefined;
    /**
    * @member {Number} id
    */
    id = undefined;




}
