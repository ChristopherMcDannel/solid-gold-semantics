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
import {Error} from './Error';

/**
 * The ErrorResponse model module.
 * @module model/ErrorResponse
 * @version 2.0.0
 */
export class ErrorResponse {
  /**
   * Constructs a new <code>ErrorResponse</code>.
   * @alias module:model/ErrorResponse
   * @class
   * @param error {module:model/Error} 
   */
  constructor(error) {
    this.error = error;
  }

  /**
   * Constructs a <code>ErrorResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ErrorResponse} obj Optional instance to populate.
   * @return {module:model/ErrorResponse} The populated <code>ErrorResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ErrorResponse();
      if (data.hasOwnProperty('error'))
        obj.error = Error.constructFromObject(data['error']);
    }
    return obj;
  }
}

/**
 * @member {module:model/Error} error
 */
ErrorResponse.prototype.error = undefined;
