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
 * The ChatCompletionRequestMessageContentPartImageImageUrl model module.
 * @module model/ChatCompletionRequestMessageContentPartImageImageUrl
 * @version 2.0.0
 */
export class ChatCompletionRequestMessageContentPartImageImageUrl {
  /**
   * Constructs a new <code>ChatCompletionRequestMessageContentPartImageImageUrl</code>.
   * @alias module:model/ChatCompletionRequestMessageContentPartImageImageUrl
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>ChatCompletionRequestMessageContentPartImageImageUrl</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatCompletionRequestMessageContentPartImageImageUrl} obj Optional instance to populate.
   * @return {module:model/ChatCompletionRequestMessageContentPartImageImageUrl} The populated <code>ChatCompletionRequestMessageContentPartImageImageUrl</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatCompletionRequestMessageContentPartImageImageUrl();
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
      if (data.hasOwnProperty('detail'))
        obj.detail = ApiClient.convertToType(data['detail'], 'String');
    }
    return obj;
  }
}

/**
 * Either a URL of the image or the base64 encoded image data.
 * @member {String} url
 */
ChatCompletionRequestMessageContentPartImageImageUrl.prototype.url = undefined;

/**
 * Allowed values for the <code>detail</code> property.
 * @enum {String}
 * @readonly
 */
ChatCompletionRequestMessageContentPartImageImageUrl.DetailEnum = {
  /**
   * value: "auto"
   * @const
   */
  auto: "auto",

  /**
   * value: "low"
   * @const
   */
  low: "low",

  /**
   * value: "high"
   * @const
   */
  high: "high"
};
/**
 * Specifies the detail level of the image.
 * @member {module:model/ChatCompletionRequestMessageContentPartImageImageUrl.DetailEnum} detail
 * @default 'auto'
 */
ChatCompletionRequestMessageContentPartImageImageUrl.prototype.detail = 'auto';
