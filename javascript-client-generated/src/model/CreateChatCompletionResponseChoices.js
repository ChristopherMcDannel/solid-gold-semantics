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
import {ChatCompletionResponseMessage} from './ChatCompletionResponseMessage';

/**
 * The CreateChatCompletionResponseChoices model module.
 * @module model/CreateChatCompletionResponseChoices
 * @version 2.0.0
 */
export class CreateChatCompletionResponseChoices {
  /**
   * Constructs a new <code>CreateChatCompletionResponseChoices</code>.
   * @alias module:model/CreateChatCompletionResponseChoices
   * @class
   * @param finishReason {module:model/CreateChatCompletionResponseChoices.FinishReasonEnum} The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function. 
   * @param index {Number} The index of the choice in the list of choices.
   * @param message {module:model/ChatCompletionResponseMessage} 
   */
  constructor(finishReason, index, message) {
    this.finishReason = finishReason;
    this.index = index;
    this.message = message;
  }

  /**
   * Constructs a <code>CreateChatCompletionResponseChoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChatCompletionResponseChoices} obj Optional instance to populate.
   * @return {module:model/CreateChatCompletionResponseChoices} The populated <code>CreateChatCompletionResponseChoices</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateChatCompletionResponseChoices();
      if (data.hasOwnProperty('finish_reason'))
        obj.finishReason = ApiClient.convertToType(data['finish_reason'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('message'))
        obj.message = ChatCompletionResponseMessage.constructFromObject(data['message']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>finishReason</code> property.
 * @enum {String}
 * @readonly
 */
CreateChatCompletionResponseChoices.FinishReasonEnum = {
  /**
   * value: "stop"
   * @const
   */
  stop: "stop",

  /**
   * value: "length"
   * @const
   */
  length: "length",

  /**
   * value: "tool_calls"
   * @const
   */
  toolCalls: "tool_calls",

  /**
   * value: "content_filter"
   * @const
   */
  contentFilter: "content_filter",

  /**
   * value: "function_call"
   * @const
   */
  functionCall: "function_call"
};
/**
 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function. 
 * @member {module:model/CreateChatCompletionResponseChoices.FinishReasonEnum} finishReason
 */
CreateChatCompletionResponseChoices.prototype.finishReason = undefined;

/**
 * The index of the choice in the list of choices.
 * @member {Number} index
 */
CreateChatCompletionResponseChoices.prototype.index = undefined;

/**
 * @member {module:model/ChatCompletionResponseMessage} message
 */
CreateChatCompletionResponseChoices.prototype.message = undefined;

