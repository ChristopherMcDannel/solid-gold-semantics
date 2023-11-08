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
 * The OneOfModifyAssistantRequestToolsItems model module.
 * @module model/OneOfModifyAssistantRequestToolsItems
 * @version 2.0.0
 */
export class OneOfModifyAssistantRequestToolsItems {
  /**
   * Constructs a new <code>OneOfModifyAssistantRequestToolsItems</code>.
   * @alias module:model/OneOfModifyAssistantRequestToolsItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfModifyAssistantRequestToolsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfModifyAssistantRequestToolsItems} obj Optional instance to populate.
   * @return {module:model/OneOfModifyAssistantRequestToolsItems} The populated <code>OneOfModifyAssistantRequestToolsItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfModifyAssistantRequestToolsItems();
    }
    return obj;
  }
}