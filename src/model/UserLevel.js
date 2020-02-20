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
* Enum class UserLevel.
* @enum {}
* @readonly
*/
export default class UserLevel {
        /**
         * value: "driver"
         * @const
         */
        driver = "driver";

        /**
         * value: "technical"
         * @const
         */
        technical = "technical";

        /**
         * value: "partner"
         * @const
         */
        partner = "partner";

        /**
         * value: "client"
         * @const
         */
        client = "client";

        /**
         * value: "fleet_manager"
         * @const
         */
        fleet_manager = "fleet_manager";


    /**
    * Returns a <code>UserLevel</code> enum value from a Javascript object name.
    * @param {Object} data The plain JavaScript object containing the name of the enum value.
    * @return {module:model/UserLevel} The enum <code>UserLevel</code> value.
    */
    static constructFromObject(object) {
        return object;
    }
}
