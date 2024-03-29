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
 * The CreateEditResponseChoices model module.
 * @module model/CreateEditResponseChoices
 * @version 2.0.0
 */
export class CreateEditResponseChoices {
  /**
   * Constructs a new <code>CreateEditResponseChoices</code>.
   * @alias module:model/CreateEditResponseChoices
   * @class
   * @param finishReason {module:model/CreateEditResponseChoices.FinishReasonEnum} The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, or `content_filter` if content was omitted due to a flag from our content filters. 
   * @param index {Number} The index of the choice in the list of choices.
   * @param text {String} The edited result.
   */
  constructor(finishReason, index, text) {
    this.finishReason = finishReason;
    this.index = index;
    this.text = text;
  }

  /**
   * Constructs a <code>CreateEditResponseChoices</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateEditResponseChoices} obj Optional instance to populate.
   * @return {module:model/CreateEditResponseChoices} The populated <code>CreateEditResponseChoices</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateEditResponseChoices();
      if (data.hasOwnProperty('finish_reason'))
        obj.finishReason = ApiClient.convertToType(data['finish_reason'], 'String');
      if (data.hasOwnProperty('index'))
        obj.index = ApiClient.convertToType(data['index'], 'Number');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>finishReason</code> property.
 * @enum {String}
 * @readonly
 */
CreateEditResponseChoices.FinishReasonEnum = {
  /**
   * value: "stop"
   * @const
   */
  stop: "stop",

  /**
   * value: "length"
   * @const
   */
  length: "length"
};
/**
 * The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, `length` if the maximum number of tokens specified in the request was reached, or `content_filter` if content was omitted due to a flag from our content filters. 
 * @member {module:model/CreateEditResponseChoices.FinishReasonEnum} finishReason
 */
CreateEditResponseChoices.prototype.finishReason = undefined;

/**
 * The index of the choice in the list of choices.
 * @member {Number} index
 */
CreateEditResponseChoices.prototype.index = undefined;

/**
 * The edited result.
 * @member {String} text
 */
CreateEditResponseChoices.prototype.text = undefined;

