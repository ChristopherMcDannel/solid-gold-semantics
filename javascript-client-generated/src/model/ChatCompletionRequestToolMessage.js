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
 * The ChatCompletionRequestToolMessage model module.
 * @module model/ChatCompletionRequestToolMessage
 * @version 2.0.0
 */
export class ChatCompletionRequestToolMessage {
  /**
   * Constructs a new <code>ChatCompletionRequestToolMessage</code>.
   * @alias module:model/ChatCompletionRequestToolMessage
   * @class
   * @param role {module:model/ChatCompletionRequestToolMessage.RoleEnum} The role of the messages author, in this case `tool`.
   * @param content {String} The contents of the tool message.
   * @param toolCallId {String} Tool call that this message is responding to.
   */
  constructor(role, content, toolCallId) {
    this.role = role;
    this.content = content;
    this.toolCallId = toolCallId;
  }

  /**
   * Constructs a <code>ChatCompletionRequestToolMessage</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatCompletionRequestToolMessage} obj Optional instance to populate.
   * @return {module:model/ChatCompletionRequestToolMessage} The populated <code>ChatCompletionRequestToolMessage</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatCompletionRequestToolMessage();
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('tool_call_id'))
        obj.toolCallId = ApiClient.convertToType(data['tool_call_id'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
ChatCompletionRequestToolMessage.RoleEnum = {
  /**
   * value: "tool"
   * @const
   */
  tool: "tool"
};
/**
 * The role of the messages author, in this case `tool`.
 * @member {module:model/ChatCompletionRequestToolMessage.RoleEnum} role
 */
ChatCompletionRequestToolMessage.prototype.role = undefined;

/**
 * The contents of the tool message.
 * @member {String} content
 */
ChatCompletionRequestToolMessage.prototype.content = undefined;

/**
 * Tool call that this message is responding to.
 * @member {String} toolCallId
 */
ChatCompletionRequestToolMessage.prototype.toolCallId = undefined;

// Implement ChatCompletionRequestMessage interface:
