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
 * The ChatCompletionStreamResponseDeltaFunctionCall model module.
 * @module model/ChatCompletionStreamResponseDeltaFunctionCall
 * @version 2.0.0
 */
export class ChatCompletionStreamResponseDeltaFunctionCall {
  /**
   * Constructs a new <code>ChatCompletionStreamResponseDeltaFunctionCall</code>.
   * Deprecated and replaced by &#x60;tool_calls&#x60;. The name and arguments of a function that should be called, as generated by the model.
   * @alias module:model/ChatCompletionStreamResponseDeltaFunctionCall
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChatCompletionStreamResponseDeltaFunctionCall</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatCompletionStreamResponseDeltaFunctionCall} obj Optional instance to populate.
   * @return {module:model/ChatCompletionStreamResponseDeltaFunctionCall} The populated <code>ChatCompletionStreamResponseDeltaFunctionCall</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatCompletionStreamResponseDeltaFunctionCall();
      if (data.hasOwnProperty('arguments'))
        obj._arguments = ApiClient.convertToType(data['arguments'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * The arguments to call the function with, as generated by the model in JSON format. Note that the model does not always generate valid JSON, and may hallucinate parameters not defined by your function schema. Validate the arguments in your code before calling your function.
 * @member {String} _arguments
 */
ChatCompletionStreamResponseDeltaFunctionCall.prototype._arguments = undefined;

/**
 * The name of the function to call.
 * @member {String} name
 */
ChatCompletionStreamResponseDeltaFunctionCall.prototype.name = undefined;

