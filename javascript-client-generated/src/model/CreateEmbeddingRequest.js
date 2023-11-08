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
 * The CreateEmbeddingRequest model module.
 * @module model/CreateEmbeddingRequest
 * @version 2.0.0
 */
export class CreateEmbeddingRequest {
  /**
   * Constructs a new <code>CreateEmbeddingRequest</code>.
   * @alias module:model/CreateEmbeddingRequest
   * @class
   * @param input {Object} Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`) and cannot be an empty string. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. 
   * @param model {Object} ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. 
   */
  constructor(input, model) {
    this.input = input;
    this.model = model;
  }

  /**
   * Constructs a <code>CreateEmbeddingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateEmbeddingRequest} obj Optional instance to populate.
   * @return {module:model/CreateEmbeddingRequest} The populated <code>CreateEmbeddingRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateEmbeddingRequest();
      if (data.hasOwnProperty('input'))
        obj.input = ApiClient.convertToType(data['input'], Object);
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], Object);
      if (data.hasOwnProperty('encoding_format'))
        obj.encodingFormat = ApiClient.convertToType(data['encoding_format'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
    }
    return obj;
  }
}

/**
 * Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for `text-embedding-ada-002`) and cannot be an empty string. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. 
 * @member {Object} input
 */
CreateEmbeddingRequest.prototype.input = undefined;

/**
 * ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them. 
 * @member {Object} model
 */
CreateEmbeddingRequest.prototype.model = undefined;

/**
 * Allowed values for the <code>encodingFormat</code> property.
 * @enum {String}
 * @readonly
 */
CreateEmbeddingRequest.EncodingFormatEnum = {
  /**
   * value: "float"
   * @const
   */
  _float: "float",

  /**
   * value: "base64"
   * @const
   */
  base64: "base64"
};
/**
 * The format to return the embeddings in. Can be either `float` or [`base64`](https://pypi.org/project/pybase64/).
 * @member {module:model/CreateEmbeddingRequest.EncodingFormatEnum} encodingFormat
 * @default 'float'
 */
CreateEmbeddingRequest.prototype.encodingFormat = 'float';

/**
 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
 * @member {String} user
 */
CreateEmbeddingRequest.prototype.user = undefined;
