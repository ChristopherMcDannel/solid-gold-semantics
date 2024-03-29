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
import {MessageContentTextAnnotationsFileCitationObjectFileCitation} from './MessageContentTextAnnotationsFileCitationObjectFileCitation';

/**
 * The MessageContentTextAnnotationsFileCitationObject model module.
 * @module model/MessageContentTextAnnotationsFileCitationObject
 * @version 2.0.0
 */
export class MessageContentTextAnnotationsFileCitationObject {
  /**
   * Constructs a new <code>MessageContentTextAnnotationsFileCitationObject</code>.
   * A citation within the message that points to a specific quote from a specific File associated with the assistant or the message. Generated when the assistant uses the \&quot;retrieval\&quot; tool to search files.
   * @alias module:model/MessageContentTextAnnotationsFileCitationObject
   * @class
   * @param type {module:model/MessageContentTextAnnotationsFileCitationObject.TypeEnum} Always `file_citation`.
   * @param text {String} The text in the message content that needs to be replaced.
   * @param fileCitation {module:model/MessageContentTextAnnotationsFileCitationObjectFileCitation} 
   * @param startIndex {Number} 
   * @param endIndex {Number} 
   */
  constructor(type, text, fileCitation, startIndex, endIndex) {
    this.type = type;
    this.text = text;
    this.fileCitation = fileCitation;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }

  /**
   * Constructs a <code>MessageContentTextAnnotationsFileCitationObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MessageContentTextAnnotationsFileCitationObject} obj Optional instance to populate.
   * @return {module:model/MessageContentTextAnnotationsFileCitationObject} The populated <code>MessageContentTextAnnotationsFileCitationObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MessageContentTextAnnotationsFileCitationObject();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
      if (data.hasOwnProperty('file_citation'))
        obj.fileCitation = MessageContentTextAnnotationsFileCitationObjectFileCitation.constructFromObject(data['file_citation']);
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
MessageContentTextAnnotationsFileCitationObject.TypeEnum = {
  /**
   * value: "file_citation"
   * @const
   */
  fileCitation: "file_citation"
};
/**
 * Always `file_citation`.
 * @member {module:model/MessageContentTextAnnotationsFileCitationObject.TypeEnum} type
 */
MessageContentTextAnnotationsFileCitationObject.prototype.type = undefined;

/**
 * The text in the message content that needs to be replaced.
 * @member {String} text
 */
MessageContentTextAnnotationsFileCitationObject.prototype.text = undefined;

/**
 * @member {module:model/MessageContentTextAnnotationsFileCitationObjectFileCitation} fileCitation
 */
MessageContentTextAnnotationsFileCitationObject.prototype.fileCitation = undefined;

/**
 * @member {Number} startIndex
 */
MessageContentTextAnnotationsFileCitationObject.prototype.startIndex = undefined;

/**
 * @member {Number} endIndex
 */
MessageContentTextAnnotationsFileCitationObject.prototype.endIndex = undefined;

// Implement OneOfMessageContentTextObjectTextAnnotationsItems interface:
