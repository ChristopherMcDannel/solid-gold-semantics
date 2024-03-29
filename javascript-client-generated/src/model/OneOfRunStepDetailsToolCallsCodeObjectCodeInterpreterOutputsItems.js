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
 * The OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems model module.
 * @module model/OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems
 * @version 2.0.0
 */
export class OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems {
  /**
   * Constructs a new <code>OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems</code>.
   * @alias module:model/OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems} obj Optional instance to populate.
   * @return {module:model/OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems} The populated <code>OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems();
    }
    return obj;
  }
}
