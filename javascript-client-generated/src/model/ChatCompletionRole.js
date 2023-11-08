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
 * Enum class ChatCompletionRole.
 * @enum {String}
 * @readonly
 */
const ChatCompletionRole = {
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
  tool: "tool",

  /**
   * value: "function"
   * @const
   */
  _function: "function",

  /**
   * Returns a <code>ChatCompletionRole</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/ChatCompletionRole} The enum <code>ChatCompletionRole</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {ChatCompletionRole};