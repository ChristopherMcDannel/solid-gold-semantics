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
import {FineTuneEvent} from './FineTuneEvent';

/**
 * The ListFineTuneEventsResponse model module.
 * @module model/ListFineTuneEventsResponse
 * @version 2.0.0
 */
export class ListFineTuneEventsResponse {
  /**
   * Constructs a new <code>ListFineTuneEventsResponse</code>.
   * @alias module:model/ListFineTuneEventsResponse
   * @class
   * @param data {Array.<module:model/FineTuneEvent>} 
   * @param _object {module:model/ListFineTuneEventsResponse.ObjectEnum} 
   */
  constructor(data, _object) {
    this.data = data;
    this._object = _object;
  }

  /**
   * Constructs a <code>ListFineTuneEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListFineTuneEventsResponse} obj Optional instance to populate.
   * @return {module:model/ListFineTuneEventsResponse} The populated <code>ListFineTuneEventsResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListFineTuneEventsResponse();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], [FineTuneEvent]);
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/FineTuneEvent>} data
 */
ListFineTuneEventsResponse.prototype.data = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
ListFineTuneEventsResponse.ObjectEnum = {
  /**
   * value: "list"
   * @const
   */
  list: "list"
};
/**
 * @member {module:model/ListFineTuneEventsResponse.ObjectEnum} _object
 */
ListFineTuneEventsResponse.prototype._object = undefined;

