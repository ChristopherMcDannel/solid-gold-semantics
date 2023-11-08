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
 * The FineTuneEvent model module.
 * @module model/FineTuneEvent
 * @version 2.0.0
 */
export class FineTuneEvent {
  /**
   * Constructs a new <code>FineTuneEvent</code>.
   * Fine-tune event object
   * @alias module:model/FineTuneEvent
   * @class
   * @param createdAt {Number} 
   * @param level {String} 
   * @param message {String} 
   * @param _object {module:model/FineTuneEvent.ObjectEnum} 
   */
  constructor(createdAt, level, message, _object) {
    this.createdAt = createdAt;
    this.level = level;
    this.message = message;
    this._object = _object;
  }

  /**
   * Constructs a <code>FineTuneEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FineTuneEvent} obj Optional instance to populate.
   * @return {module:model/FineTuneEvent} The populated <code>FineTuneEvent</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FineTuneEvent();
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Number');
      if (data.hasOwnProperty('level'))
        obj.level = ApiClient.convertToType(data['level'], 'String');
      if (data.hasOwnProperty('message'))
        obj.message = ApiClient.convertToType(data['message'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
    }
    return obj;
  }
}

/**
 * @member {Number} createdAt
 */
FineTuneEvent.prototype.createdAt = undefined;

/**
 * @member {String} level
 */
FineTuneEvent.prototype.level = undefined;

/**
 * @member {String} message
 */
FineTuneEvent.prototype.message = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
FineTuneEvent.ObjectEnum = {
  /**
   * value: "fine-tune-event"
   * @const
   */
  fineTuneEvent: "fine-tune-event"
};
/**
 * @member {module:model/FineTuneEvent.ObjectEnum} _object
 */
FineTuneEvent.prototype._object = undefined;

