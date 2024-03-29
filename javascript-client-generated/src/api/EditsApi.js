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
import {ApiClient} from "../ApiClient";
import {CreateEditRequest} from '../model/CreateEditRequest';
import {CreateEditResponse} from '../model/CreateEditResponse';

/**
* Edits service.
* @module api/EditsApi
* @version 2.0.0
*/
export class EditsApi {

    /**
    * Constructs a new EditsApi. 
    * @alias module:api/EditsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createEdit operation.
     * @callback moduleapi/EditsApi~createEditCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateEditResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates a new edit for the provided input, instruction, and parameters.
     * @param {module:model/CreateEditRequest} body 
     * @param {module:api/EditsApi~createEditCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createEdit(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createEdit");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateEditResponse;

      return this.apiClient.callApi(
        '/edits', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}