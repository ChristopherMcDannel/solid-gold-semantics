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
import {CreateEmbeddingResponseUsage} from './CreateEmbeddingResponseUsage';
import {Embedding} from './Embedding';

/**
 * The CreateEmbeddingResponse model module.
 * @module model/CreateEmbeddingResponse
 * @version 2.0.0
 */
export class CreateEmbeddingResponse {
  /**
   * Constructs a new <code>CreateEmbeddingResponse</code>.
   * @alias module:model/CreateEmbeddingResponse
   * @class
   * @param data {Array.<module:model/Embedding>} The list of embeddings generated by the model.
   * @param model {String} The name of the model used to generate the embedding.
   * @param _object {module:model/CreateEmbeddingResponse.ObjectEnum} The object type, which is always \"embedding\".
   * @param usage {module:model/CreateEmbeddingResponseUsage} 
   */
  constructor(data, model, _object, usage) {
    this.data = data;
    this.model = model;
    this._object = _object;
    this.usage = usage;
  }

  /**
   * Constructs a <code>CreateEmbeddingResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateEmbeddingResponse} obj Optional instance to populate.
   * @return {module:model/CreateEmbeddingResponse} The populated <code>CreateEmbeddingResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateEmbeddingResponse();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [Embedding]);
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('usage'))
        obj.usage = CreateEmbeddingResponseUsage.constructFromObject(data['usage']);
    }
    return obj;
  }
}

/**
 * The list of embeddings generated by the model.
 * @member {Array.<module:model/Embedding>} data
 */
CreateEmbeddingResponse.prototype.data = undefined;

/**
 * The name of the model used to generate the embedding.
 * @member {String} model
 */
CreateEmbeddingResponse.prototype.model = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
CreateEmbeddingResponse.ObjectEnum = {
  /**
   * value: "embedding"
   * @const
   */
  embedding: "embedding"
};
/**
 * The object type, which is always \"embedding\".
 * @member {module:model/CreateEmbeddingResponse.ObjectEnum} _object
 */
CreateEmbeddingResponse.prototype._object = undefined;

/**
 * @member {module:model/CreateEmbeddingResponseUsage} usage
 */
CreateEmbeddingResponse.prototype.usage = undefined;

