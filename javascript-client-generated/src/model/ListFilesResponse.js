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
import {OpenAIFile} from './OpenAIFile';

/**
 * The ListFilesResponse model module.
 * @module model/ListFilesResponse
 * @version 2.0.0
 */
export class ListFilesResponse {
  /**
   * Constructs a new <code>ListFilesResponse</code>.
   * @alias module:model/ListFilesResponse
   * @class
   * @param data {Array.<module:model/OpenAIFile>} 
   * @param _object {module:model/ListFilesResponse.ObjectEnum} 
   */
  constructor(data, _object) {
    this.data = data;
    this._object = _object;
  }

  /**
   * Constructs a <code>ListFilesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListFilesResponse} obj Optional instance to populate.
   * @return {module:model/ListFilesResponse} The populated <code>ListFilesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListFilesResponse();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [OpenAIFile]);
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/OpenAIFile>} data
 */
ListFilesResponse.prototype.data = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
ListFilesResponse.ObjectEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list"
};
/**
 * @member {module:model/ListFilesResponse.ObjectEnum} _object
 */
ListFilesResponse.prototype._object = undefined;

