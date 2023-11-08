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
import {RunToolCallObjectFunction} from './RunToolCallObjectFunction';

/**
 * The RunToolCallObject model module.
 * @module model/RunToolCallObject
 * @version 2.0.0
 */
export class RunToolCallObject {
  /**
   * Constructs a new <code>RunToolCallObject</code>.
   * Tool call objects
   * @alias module:model/RunToolCallObject
   * @class
   * @param id {String} The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
   * @param type {module:model/RunToolCallObject.TypeEnum} The type of tool call the output is required for. For now, this is always `function`.
   * @param _function {module:model/RunToolCallObjectFunction} 
   */
  constructor(id, type, _function) {
    this.id = id;
    this.type = type;
    this._function = _function;
  }

  /**
   * Constructs a <code>RunToolCallObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunToolCallObject} obj Optional instance to populate.
   * @return {module:model/RunToolCallObject} The populated <code>RunToolCallObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RunToolCallObject();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('function'))
        obj._function = RunToolCallObjectFunction.constructFromObject(data['function']);
    }
    return obj;
  }
}

/**
 * The ID of the tool call. This ID must be referenced when you submit the tool outputs in using the [Submit tool outputs to run](/docs/api-reference/runs/submitToolOutputs) endpoint.
 * @member {String} id
 */
RunToolCallObject.prototype.id = undefined;

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RunToolCallObject.TypeEnum = {
  /**
   * value: "function"
   * @const
   */
  _function: "function"
};
/**
 * The type of tool call the output is required for. For now, this is always `function`.
 * @member {module:model/RunToolCallObject.TypeEnum} type
 */
RunToolCallObject.prototype.type = undefined;

/**
 * @member {module:model/RunToolCallObjectFunction} _function
 */
RunToolCallObject.prototype._function = undefined;
