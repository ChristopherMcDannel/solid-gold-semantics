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
 * The CreateMessageRequest model module.
 * @module model/CreateMessageRequest
 * @version 2.0.0
 */
export class CreateMessageRequest {
  /**
   * Constructs a new <code>CreateMessageRequest</code>.
   * @alias module:model/CreateMessageRequest
   * @class
   * @param role {module:model/CreateMessageRequest.RoleEnum} The role of the entity that is creating the message. Currently only `user` is supported.
   * @param content {String} The content of the message.
   */
  constructor(role, content) {
    this.role = role;
    this.content = content;
  }

  /**
   * Constructs a <code>CreateMessageRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateMessageRequest} obj Optional instance to populate.
   * @return {module:model/CreateMessageRequest} The populated <code>CreateMessageRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateMessageRequest();
      if (data.hasOwnProperty('role'))
        obj.role = ApiClient.convertToType(data['role'], 'String');
      if (data.hasOwnProperty('content'))
        obj.content = ApiClient.convertToType(data['content'], 'String');
      if (data.hasOwnProperty('file_ids'))
        obj.fileIds = ApiClient.convertToType(data['file_ids'], ['String']);
      if (data.hasOwnProperty('metadata'))
        obj.metadata = ApiClient.convertToType(data['metadata'], Object);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>role</code> property.
 * @enum {String}
 * @readonly
 */
CreateMessageRequest.RoleEnum = {
  /**
   * value: "user"
   * @const
   */
  user: "user"
};
/**
 * The role of the entity that is creating the message. Currently only `user` is supported.
 * @member {module:model/CreateMessageRequest.RoleEnum} role
 */
CreateMessageRequest.prototype.role = undefined;

/**
 * The content of the message.
 * @member {String} content
 */
CreateMessageRequest.prototype.content = undefined;

/**
 * A list of [File](/docs/api-reference/files) IDs that the message should use. There can be a maximum of 10 files attached to a message. Useful for tools like `retrieval` and `code_interpreter` that can access and use files.
 * @member {Array.<String>} fileIds
 */
CreateMessageRequest.prototype.fileIds = undefined;

/**
 * Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long. 
 * @member {Object} metadata
 */
CreateMessageRequest.prototype.metadata = undefined;

