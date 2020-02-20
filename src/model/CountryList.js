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
import CountryListInner from './CountryListInner';

/**
* The CountryList model module.
* @module model/CountryList
* @version 0.0.1
*/
export default class CountryList extends Array {
    /**
    * Constructs a new <code>CountryList</code>.
    * @alias module:model/CountryList
    * @class
    * @extends Array
    */

    constructor() {
        super();
        
        
        return this;
    }

    /**
    * Constructs a <code>CountryList</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/CountryList} obj Optional instance to populate.
    * @return {module:model/CountryList} The populated <code>CountryList</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryList();
            ApiClient.constructFromObject(data, obj, 'CountryListInner');
            
            
        }
        return obj;
    }





}