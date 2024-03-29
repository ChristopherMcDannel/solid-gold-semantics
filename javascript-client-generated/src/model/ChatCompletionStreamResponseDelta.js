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
import {ChatCompletionMessageToolCallChunk} from './ChatCompletionMessageToolCallChunk';
import {ChatCompletionStreamResponseDeltaFunctionCall} from './ChatCompletionStreamResponseDeltaFunctionCall';

/**
 * The ChatCompletionStreamResponseDelta model module.
 * @module model/ChatCompletionStreamResponseDelta
 * @version 2.0.0
 */
export class ChatCompletionStreamResponseDelta {
  /**
   * Constructs a new <code>ChatCompletionStreamResponseDelta</code>.
   * A chat completion delta generated by streamed model responses.
   * @alias module:model/ChatCompletionStreamResponseDelta
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChatCompletionStreamResponseDelta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatCompletionStreamResponseDelta} obj Optional instance to populate.
   * @return {module:model/ChatCompletionStreamResponseDelta} The populated <code>ChatCompletionStreamResponseDelta</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatCompletionStreamResponseDelta();
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('function_call'))
        obj.functionCall = ChatCompletionStreamResponseDeltaFunctionCall.constructFromObject(data['function_call']);
      if (data.hasOwnProperty('tool_calls'))
        obj.toolCalls = ApiClient.convertToType(data['tool_calls'], [ChatCompletionMessageToolCallChunk]);
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
    }
    return obj;
  }
}

/**
 * The contents of the chunk message.
 * @member {String} content
 */
ChatCompletionStreamResponseDelta.prototype.content = undefined;

/**
 * @member {module:model/ChatCompletionStreamResponseDeltaFunctionCall} functionCall
 */
ChatCompletionStreamResponseDelta.prototype.functionCall = undefined;

/**
 * @member {Array.<module:model/ChatCompletionMessageToolCallChunk>} toolCalls
 */
ChatCompletionStreamResponseDelta.prototype.toolCalls = undefined;

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
ChatCompletionStreamResponseDelta.RoleEnum = {
  /**
   * value: "system"
   * @const
   */
  system: "system",

  /**
   * value: "user"
   * @const
   */
  user: "user",

  /**
   * value: "assistant"
   * @const
   */
  assistant: "assistant",

  /**
   * value: "tool"
   * @const
   */
  tool: "tool"
};
/**
 * The role of the author of this message.
 * @member {module:model/ChatCompletionStreamResponseDelta.RoleEnum} role
 */
ChatCompletionStreamResponseDelta.prototype.role = undefined;

