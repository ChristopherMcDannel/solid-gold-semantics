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
 * The CreateAssistantFileRequest model module.
 * @module model/CreateAssistantFileRequest
 * @version 2.0.0
 */
export class CreateAssistantFileRequest {
  /**
   * Constructs a new <code>CreateAssistantFileRequest</code>.
   * @alias module:model/CreateAssistantFileRequest
   * @class
   * @param fileId {String} A [File](/docs/api-reference/files) ID (with `purpose=\"assistants\"`) that the assistant should use. Useful for tools like `retrieval` and `code_interpreter` that can access files.
   */
  constructor(fileId) {
    this.fileId = fileId;
  }

  /**
   * Constructs a <code>CreateAssistantFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateAssistantFileRequest} obj Optional instance to populate.
   * @return {module:model/CreateAssistantFileRequest} The populated <code>CreateAssistantFileRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateAssistantFileRequest();
      if (data.hasOwnProperty('file_id'))
        obj.fileId = ApiClient.convertToType(data['file_id'], 'String');
    }
    return obj;
  }
}

/**
 * A [File](/docs/api-reference/files) ID (with `purpose=\"assistants\"`) that the assistant should use. Useful for tools like `retrieval` and `code_interpreter` that can access files.
 * @member {String} fileId
 */
CreateAssistantFileRequest.prototype.fileId = undefined;

