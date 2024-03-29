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
import {MessageContentTextAnnotationsFilePathObjectFilePath} from './MessageContentTextAnnotationsFilePathObjectFilePath';

/**
 * The MessageContentTextAnnotationsFilePathObject model module.
 * @module model/MessageContentTextAnnotationsFilePathObject
 * @version 2.0.0
 */
export class MessageContentTextAnnotationsFilePathObject {
  /**
   * Constructs a new <code>MessageContentTextAnnotationsFilePathObject</code>.
   * A URL for the file that&#x27;s generated when the assistant used the &#x60;code_interpreter&#x60; tool to generate a file.
   * @alias module:model/MessageContentTextAnnotationsFilePathObject
   * @class
   * @param type {module:model/MessageContentTextAnnotationsFilePathObject.TypeEnum} Always `file_path`.
   * @param text {String} The text in the message content that needs to be replaced.
   * @param filePath {module:model/MessageContentTextAnnotationsFilePathObjectFilePath} 
   * @param startIndex {Number} 
   * @param endIndex {Number} 
   */
  constructor(type, text, filePath, startIndex, endIndex) {
    this.type = type;
    this.text = text;
    this.filePath = filePath;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }

  /**
   * Constructs a <code>MessageContentTextAnnotationsFilePathObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageContentTextAnnotationsFilePathObject} obj Optional instance to populate.
   * @return {module:model/MessageContentTextAnnotationsFilePathObject} The populated <code>MessageContentTextAnnotationsFilePathObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MessageContentTextAnnotationsFilePathObject();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('file_path'))
        obj.filePath = MessageContentTextAnnotationsFilePathObjectFilePath.constructFromObject(data['file_path']);
      if (data.hasOwnProperty('start_index'))
        obj.startIndex = ApiClient.convertToType(data['start_index'], 'Number');
      if (data.hasOwnProperty('end_index'))
        obj.endIndex = ApiClient.convertToType(data['end_index'], 'Number');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
MessageContentTextAnnotationsFilePathObject.TypeEnum = {
  /**
   * value: "file_path"
   * @const
   */
  filePath: "file_path"
};
/**
 * Always `file_path`.
 * @member {module:model/MessageContentTextAnnotationsFilePathObject.TypeEnum} type
 */
MessageContentTextAnnotationsFilePathObject.prototype.type = undefined;

/**
 * The text in the message content that needs to be replaced.
 * @member {String} text
 */
MessageContentTextAnnotationsFilePathObject.prototype.text = undefined;

/**
 * @member {module:model/MessageContentTextAnnotationsFilePathObjectFilePath} filePath
 */
MessageContentTextAnnotationsFilePathObject.prototype.filePath = undefined;

/**
 * @member {Number} startIndex
 */
MessageContentTextAnnotationsFilePathObject.prototype.startIndex = undefined;

/**
 * @member {Number} endIndex
 */
MessageContentTextAnnotationsFilePathObject.prototype.endIndex = undefined;

// Implement OneOfMessageContentTextObjectTextAnnotationsItems interface:
