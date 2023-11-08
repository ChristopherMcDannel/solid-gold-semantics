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
import {CompletionUsage} from './CompletionUsage';
import {CreateChatCompletionFunctionResponseChoices} from './CreateChatCompletionFunctionResponseChoices';

/**
 * The CreateChatCompletionFunctionResponse model module.
 * @module model/CreateChatCompletionFunctionResponse
 * @version 2.0.0
 */
export class CreateChatCompletionFunctionResponse {
  /**
   * Constructs a new <code>CreateChatCompletionFunctionResponse</code>.
   * Represents a chat completion response returned by model, based on the provided input.
   * @alias module:model/CreateChatCompletionFunctionResponse
   * @class
   * @param id {String} A unique identifier for the chat completion.
   * @param choices {Array.<module:model/CreateChatCompletionFunctionResponseChoices>} A list of chat completion choices. Can be more than one if `n` is greater than 1.
   * @param created {Number} The Unix timestamp (in seconds) of when the chat completion was created.
   * @param model {String} The model used for the chat completion.
   * @param _object {module:model/CreateChatCompletionFunctionResponse.ObjectEnum} The object type, which is always `chat.completion`.
   */
  constructor(id, choices, created, model, _object) {
    this.id = id;
    this.choices = choices;
    this.created = created;
    this.model = model;
    this._object = _object;
  }

  /**
   * Constructs a <code>CreateChatCompletionFunctionResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChatCompletionFunctionResponse} obj Optional instance to populate.
   * @return {module:model/CreateChatCompletionFunctionResponse} The populated <code>CreateChatCompletionFunctionResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateChatCompletionFunctionResponse();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('choices'))
        obj.choices = ApiClient.convertToType(data['choices'], [CreateChatCompletionFunctionResponseChoices]);
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], 'String');
      if (data.hasOwnProperty('system_fingerprint'))
        obj.systemFingerprint = ApiClient.convertToType(data['system_fingerprint'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('usage'))
        obj.usage = CompletionUsage.constructFromObject(data['usage']);
    }
    return obj;
  }
}

/**
 * A unique identifier for the chat completion.
 * @member {String} id
 */
CreateChatCompletionFunctionResponse.prototype.id = undefined;

/**
 * A list of chat completion choices. Can be more than one if `n` is greater than 1.
 * @member {Array.<module:model/CreateChatCompletionFunctionResponseChoices>} choices
 */
CreateChatCompletionFunctionResponse.prototype.choices = undefined;

/**
 * The Unix timestamp (in seconds) of when the chat completion was created.
 * @member {Number} created
 */
CreateChatCompletionFunctionResponse.prototype.created = undefined;

/**
 * The model used for the chat completion.
 * @member {String} model
 */
CreateChatCompletionFunctionResponse.prototype.model = undefined;

/**
 * This fingerprint represents the backend configuration that the model runs with.  Can be used in conjunction with the `seed` request parameter to understand when backend changes have been made that might impact determinism. 
 * @member {String} systemFingerprint
 */
CreateChatCompletionFunctionResponse.prototype.systemFingerprint = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
CreateChatCompletionFunctionResponse.ObjectEnum = {
  /**
   * value: "chat.completion"
   * @const
   */
  chatCompletion: "chat.completion"
};
/**
 * The object type, which is always `chat.completion`.
 * @member {module:model/CreateChatCompletionFunctionResponse.ObjectEnum} _object
 */
CreateChatCompletionFunctionResponse.prototype._object = undefined;

/**
 * @member {module:model/CompletionUsage} usage
 */
CreateChatCompletionFunctionResponse.prototype.usage = undefined;

