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
import {FineTune} from './FineTune';

/**
 * The ListFineTunesResponse model module.
 * @module model/ListFineTunesResponse
 * @version 2.0.0
 */
export class ListFineTunesResponse {
  /**
   * Constructs a new <code>ListFineTunesResponse</code>.
   * @alias module:model/ListFineTunesResponse
   * @class
   * @param data {Array.<module:model/FineTune>} 
   * @param _object {module:model/ListFineTunesResponse.ObjectEnum} 
   */
  constructor(data, _object) {
    this.data = data;
    this._object = _object;
  }

  /**
   * Constructs a <code>ListFineTunesResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListFineTunesResponse} obj Optional instance to populate.
   * @return {module:model/ListFineTunesResponse} The populated <code>ListFineTunesResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListFineTunesResponse();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [FineTune]);
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FineTune>} data
 */
ListFineTunesResponse.prototype.data = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
ListFineTunesResponse.ObjectEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list"
};
/**
 * @member {module:model/ListFineTunesResponse.ObjectEnum} _object
 */
ListFineTunesResponse.prototype._object = undefined;
