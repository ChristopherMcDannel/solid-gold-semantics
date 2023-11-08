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
 * The CreateFileRequest model module.
 * @module model/CreateFileRequest
 * @version 2.0.0
 */
export class CreateFileRequest {
  /**
   * Constructs a new <code>CreateFileRequest</code>.
   * @alias module:model/CreateFileRequest
   * @class
   * @param file {Blob} The File object (not file name) to be uploaded. 
   * @param purpose {module:model/CreateFileRequest.PurposeEnum} The intended purpose of the uploaded file.  Use \"fine-tune\" for [Fine-tuning](/docs/api-reference/fine-tuning) and \"assistants\" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning. 
   */
  constructor(file, purpose) {
    this.file = file;
    this.purpose = purpose;
  }

  /**
   * Constructs a <code>CreateFileRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateFileRequest} obj Optional instance to populate.
   * @return {module:model/CreateFileRequest} The populated <code>CreateFileRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateFileRequest();
      if (data.hasOwnProperty('file'))
        obj.file = ApiClient.convertToType(data['file'], 'Blob');
      if (data.hasOwnProperty('purpose'))
        obj.purpose = ApiClient.convertToType(data['purpose'], 'String');
    }
    return obj;
  }
}

/**
 * The File object (not file name) to be uploaded. 
 * @member {Blob} file
 */
CreateFileRequest.prototype.file = undefined;

/**
 * Allowed values for the <code>purpose</code> property.
 * @enum {String}
 * @readonly
 */
CreateFileRequest.PurposeEnum = {
  /**
   * value: "fine-tune"
   * @const
   */
  fineTune: "fine-tune",

  /**
   * value: "assistants"
   * @const
   */
  assistants: "assistants"
};
/**
 * The intended purpose of the uploaded file.  Use \"fine-tune\" for [Fine-tuning](/docs/api-reference/fine-tuning) and \"assistants\" for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning. 
 * @member {module:model/CreateFileRequest.PurposeEnum} purpose
 */
CreateFileRequest.prototype.purpose = undefined;

