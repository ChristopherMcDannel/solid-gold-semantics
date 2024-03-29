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
import {ChatCompletionToolFunction} from './ChatCompletionToolFunction';

/**
 * The ChatCompletionTool model module.
 * @module model/ChatCompletionTool
 * @version 2.0.0
 */
export class ChatCompletionTool {
  /**
   * Constructs a new <code>ChatCompletionTool</code>.
   * @alias module:model/ChatCompletionTool
   * @class
   * @param type {module:model/ChatCompletionTool.TypeEnum} The type of the tool. Currently, only `function` is supported.
   * @param _function {module:model/ChatCompletionToolFunction} 
   */
  constructor(type, _function) {
    this.type = type;
    this._function = _function;
  }

  /**
   * Constructs a <code>ChatCompletionTool</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChatCompletionTool} obj Optional instance to populate.
   * @return {module:model/ChatCompletionTool} The populated <code>ChatCompletionTool</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ChatCompletionTool();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('function'))
        obj._function = ChatCompletionToolFunction.constructFromObject(data['function']);
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
ChatCompletionTool.TypeEnum = {
  /**
   * value: "function"
   * @const
   */
  _function: "function"
};
/**
 * The type of the tool. Currently, only `function` is supported.
 * @member {module:model/ChatCompletionTool.TypeEnum} type
 */
ChatCompletionTool.prototype.type = undefined;

/**
 * @member {module:model/ChatCompletionToolFunction} _function
 */
ChatCompletionTool.prototype._function = undefined;

