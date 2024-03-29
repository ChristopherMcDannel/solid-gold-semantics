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
 * The AnyOfCreateTranscriptionRequestModel model module.
 * @module model/AnyOfCreateTranscriptionRequestModel
 * @version 2.0.0
 */
export class AnyOfCreateTranscriptionRequestModel {
  /**
   * Constructs a new <code>AnyOfCreateTranscriptionRequestModel</code>.
   * @alias module:model/AnyOfCreateTranscriptionRequestModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnyOfCreateTranscriptionRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnyOfCreateTranscriptionRequestModel} obj Optional instance to populate.
   * @return {module:model/AnyOfCreateTranscriptionRequestModel} The populated <code>AnyOfCreateTranscriptionRequestModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnyOfCreateTranscriptionRequestModel();
    }
    return obj;
  }
}
