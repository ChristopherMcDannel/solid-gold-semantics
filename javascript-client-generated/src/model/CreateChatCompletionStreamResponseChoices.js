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
import {ChatCompletionStreamResponseDelta} from './ChatCompletionStreamResponseDelta';

/**
 * The CreateChatCompletionStreamResponseChoices model module.
 * @module model/CreateChatCompletionStreamResponseChoices
 * @version 2.0.0
 */
export class CreateChatCompletionStreamResponseChoices {
  /**
   * Constructs a new <code>CreateChatCompletionStreamResponseChoices</code>.
   * @alias module:model/CreateChatCompletionStreamResponseChoices
   * @class
   * @param delta {module:model/ChatCompletionStreamResponseDelta} 
   * @param finishReason {module:model/CreateChatCompletionStreamResponseChoices.FinishReasonEnum} The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, `content_filter` if content was omitted due to a flag from our content filters, `tool_calls` if the model called a tool, or `function_call` (deprecated) if the model called a function. 
   * @param index {Number} The index of the choice in the list of choices.
   */
  constructor(delta, finishReason, index) {
    this.delta = delta;
    this.finishReason = finishReason;
    this.index = index;
  }

  /**
   * Constructs a <code>CreateChatCompletionStreamResponseChoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChatCompletionStreamResponseChoices} obj Optional instance to populate.
   * @return {module:model/CreateChatCompletionStreamResponseChoices} The populated <code>CreateChatCompletionStreamResponseChoices</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateChatCompletionStreamResponseChoices();
      if (data.hasOwnProperty('delta'))
        obj.delta = ChatCompletionStreamResponseDelta.constructFromObject(data['delta']);
      if (data.hasOwnProperty('finish_reason'))
        obj.finishReason = ApiClient.convertToType(data['finish_reason'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {module:model/ChatCompletionStreamResponseDelta} delta
 */
CreateChatCompletionStreamResponseChoices.prototype.delta = undefined;

/**
 * Allowed values for the <code>finishReason</code> property.
 * @enum {String}
 * @readonly
 */
CreateChatCompletionStreamResponseChoices.FinishReasonEnum = {
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
 * @member {module:model/CreateChatCompletionStreamResponseChoices.FinishReasonEnum} finishReason
 */
CreateChatCompletionStreamResponseChoices.prototype.finishReason = undefined;

/**
 * The index of the choice in the list of choices.
 * @member {Number} index
 */
CreateChatCompletionStreamResponseChoices.prototype.index = undefined;

