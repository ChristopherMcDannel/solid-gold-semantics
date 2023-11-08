/*
 * OpenAI API
 * The OpenAI REST API. Please see https://platform.openai.com/docs/api-reference for more details.
 *
 * OpenAPI spec version: 2.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.50
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';

/**
 * The OneOfCreateThreadAndRunRequestToolsItems model module.
 * @module model/OneOfCreateThreadAndRunRequestToolsItems
 * @version 2.0.0
 */
export class OneOfCreateThreadAndRunRequestToolsItems {
  /**
   * Constructs a new <code>OneOfCreateThreadAndRunRequestToolsItems</code>.
   * @alias module:model/OneOfCreateThreadAndRunRequestToolsItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfCreateThreadAndRunRequestToolsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfCreateThreadAndRunRequestToolsItems} obj Optional instance to populate.
   * @return {module:model/OneOfCreateThreadAndRunRequestToolsItems} The populated <code>OneOfCreateThreadAndRunRequestToolsItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfCreateThreadAndRunRequestToolsItems();
    }
    return obj;
  }
}
