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
 * The AnyOfCreateTranslationRequestModel model module.
 * @module model/AnyOfCreateTranslationRequestModel
 * @version 2.0.0
 */
export class AnyOfCreateTranslationRequestModel {
  /**
   * Constructs a new <code>AnyOfCreateTranslationRequestModel</code>.
   * @alias module:model/AnyOfCreateTranslationRequestModel
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>AnyOfCreateTranslationRequestModel</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AnyOfCreateTranslationRequestModel} obj Optional instance to populate.
   * @return {module:model/AnyOfCreateTranslationRequestModel} The populated <code>AnyOfCreateTranslationRequestModel</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new AnyOfCreateTranslationRequestModel();
    }
    return obj;
  }
}
