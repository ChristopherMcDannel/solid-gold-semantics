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
 * The ThreadObject model module.
 * @module model/ThreadObject
 * @version 2.0.0
 */
export class ThreadObject {
  /**
   * Constructs a new <code>ThreadObject</code>.
   * Represents a thread that contains [messages](/docs/api-reference/messages).
   * @alias module:model/ThreadObject
   * @class
   * @param id {String} The identifier, which can be referenced in API endpoints.
   * @param _object {module:model/ThreadObject.ObjectEnum} The object type, which is always `thread`.
   * @param createdAt {Number} The Unix timestamp (in seconds) for when the thread was created.
   * @param metadata {Object} Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long. 
   */
  constructor(id, _object, createdAt, metadata) {
    this.id = id;
    this._object = _object;
    this.createdAt = createdAt;
    this.metadata = metadata;
  }

  /**
   * Constructs a <code>ThreadObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ThreadObject} obj Optional instance to populate.
   * @return {module:model/ThreadObject} The populated <code>ThreadObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ThreadObject();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Number');
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
    }
    return obj;
  }
}

/**
 * The identifier, which can be referenced in API endpoints.
 * @member {String} id
 */
ThreadObject.prototype.id = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
ThreadObject.ObjectEnum = {
  /**
   * value: "thread"
   * @const
   */
  thread: "thread"
};
/**
 * The object type, which is always `thread`.
 * @member {module:model/ThreadObject.ObjectEnum} _object
 */
ThreadObject.prototype._object = undefined;

/**
 * The Unix timestamp (in seconds) for when the thread was created.
 * @member {Number} createdAt
 */
ThreadObject.prototype.createdAt = undefined;

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long. 
 * @member {Object} metadata
 */
ThreadObject.prototype.metadata = undefined;

