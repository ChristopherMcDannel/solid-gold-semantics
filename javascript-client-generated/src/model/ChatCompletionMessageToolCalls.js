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
import {ChatCompletionMessageToolCall} from './ChatCompletionMessageToolCall';

/**
 * The ChatCompletionMessageToolCalls model module.
 * @module model/ChatCompletionMessageToolCalls
 * @version 2.0.0
 */
export class ChatCompletionMessageToolCalls extends Array {
  /**
   * Constructs a new <code>ChatCompletionMessageToolCalls</code>.
   * The tool calls generated by the model, such as function calls.
   * @alias module:model/ChatCompletionMessageToolCalls
   * @class
   * @extends Array
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>ChatCompletionMessageToolCalls</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatCompletionMessageToolCalls} obj Optional instance to populate.
   * @return {module:model/ChatCompletionMessageToolCalls} The populated <code>ChatCompletionMessageToolCalls</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatCompletionMessageToolCalls();
      ApiClient.constructFromObject(data, obj, 'ChatCompletionMessageToolCall');
    }
    return obj;
  }
}
