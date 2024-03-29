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
 * The RunStepDetailsToolCallsFunctionObjectFunction model module.
 * @module model/RunStepDetailsToolCallsFunctionObjectFunction
 * @version 2.0.0
 */
export class RunStepDetailsToolCallsFunctionObjectFunction {
  /**
   * Constructs a new <code>RunStepDetailsToolCallsFunctionObjectFunction</code>.
   * The definition of the function that was called.
   * @alias module:model/RunStepDetailsToolCallsFunctionObjectFunction
   * @class
   * @param name {String} The name of the function.
   * @param _arguments {String} The arguments passed to the function.
   * @param output {String} The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
   */
  constructor(name, _arguments, output) {
    this.name = name;
    this._arguments = _arguments;
    this.output = output;
  }

  /**
   * Constructs a <code>RunStepDetailsToolCallsFunctionObjectFunction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunStepDetailsToolCallsFunctionObjectFunction} obj Optional instance to populate.
   * @return {module:model/RunStepDetailsToolCallsFunctionObjectFunction} The populated <code>RunStepDetailsToolCallsFunctionObjectFunction</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RunStepDetailsToolCallsFunctionObjectFunction();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('arguments'))
        obj._arguments = ApiClient.convertToType(data['arguments'], 'String');
      if (data.hasOwnProperty('output'))
        obj.output = ApiClient.convertToType(data['output'], 'String');
    }
    return obj;
  }
}

/**
 * The name of the function.
 * @member {String} name
 */
RunStepDetailsToolCallsFunctionObjectFunction.prototype.name = undefined;

/**
 * The arguments passed to the function.
 * @member {String} _arguments
 */
RunStepDetailsToolCallsFunctionObjectFunction.prototype._arguments = undefined;

/**
 * The output of the function. This will be `null` if the outputs have not been [submitted](/docs/api-reference/runs/submitToolOutputs) yet.
 * @member {String} output
 */
RunStepDetailsToolCallsFunctionObjectFunction.prototype.output = undefined;

