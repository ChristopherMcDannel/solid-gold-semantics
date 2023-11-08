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
import {Image} from './Image';

/**
 * The ImagesResponse model module.
 * @module model/ImagesResponse
 * @version 2.0.0
 */
export class ImagesResponse {
  /**
   * Constructs a new <code>ImagesResponse</code>.
   * @alias module:model/ImagesResponse
   * @class
   * @param created {Number} 
   * @param data {Array.<module:model/Image>} 
   */
  constructor(created, data) {
    this.created = created;
    this.data = data;
  }

  /**
   * Constructs a <code>ImagesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ImagesResponse} obj Optional instance to populate.
   * @return {module:model/ImagesResponse} The populated <code>ImagesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ImagesResponse();
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [Image]);
    }
    return obj;
  }
}

/**
 * @member {Number} created
 */
ImagesResponse.prototype.created = undefined;

/**
 * @member {Array.<module:model/Image>} data
 */
ImagesResponse.prototype.data = undefined;
