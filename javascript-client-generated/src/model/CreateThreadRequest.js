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
import {CreateMessageRequest} from './CreateMessageRequest';

/**
 * The CreateThreadRequest model module.
 * @module model/CreateThreadRequest
 * @version 2.0.0
 */
export class CreateThreadRequest {
  /**
   * Constructs a new <code>CreateThreadRequest</code>.
   * @alias module:model/CreateThreadRequest
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CreateThreadRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateThreadRequest} obj Optional instance to populate.
   * @return {module:model/CreateThreadRequest} The populated <code>CreateThreadRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateThreadRequest();
      if (data.hasOwnProperty('messages'))
        obj.messages = ApiClient.convertToType(data['messages'], [CreateMessageRequest]);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
    }
    return obj;
  }
}

/**
 * A list of [messages](/docs/api-reference/messages) to start the thread with.
 * @member {Array.<module:model/CreateMessageRequest>} messages
 */
CreateThreadRequest.prototype.messages = undefined;

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long. 
 * @member {Object} metadata
 */
CreateThreadRequest.prototype.metadata = undefined;

