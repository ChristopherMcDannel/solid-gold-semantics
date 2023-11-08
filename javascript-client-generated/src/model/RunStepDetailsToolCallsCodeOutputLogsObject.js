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
 * The RunStepDetailsToolCallsCodeOutputLogsObject model module.
 * @module model/RunStepDetailsToolCallsCodeOutputLogsObject
 * @version 2.0.0
 */
export class RunStepDetailsToolCallsCodeOutputLogsObject {
  /**
   * Constructs a new <code>RunStepDetailsToolCallsCodeOutputLogsObject</code>.
   * Text output from the Code Interpreter tool call as part of a run step.
   * @alias module:model/RunStepDetailsToolCallsCodeOutputLogsObject
   * @class
   * @param type {module:model/RunStepDetailsToolCallsCodeOutputLogsObject.TypeEnum} Always `logs`.
   * @param logs {String} The text output from the Code Interpreter tool call.
   */
  constructor(type, logs) {
    this.type = type;
    this.logs = logs;
  }

  /**
   * Constructs a <code>RunStepDetailsToolCallsCodeOutputLogsObject</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RunStepDetailsToolCallsCodeOutputLogsObject} obj Optional instance to populate.
   * @return {module:model/RunStepDetailsToolCallsCodeOutputLogsObject} The populated <code>RunStepDetailsToolCallsCodeOutputLogsObject</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RunStepDetailsToolCallsCodeOutputLogsObject();
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('logs'))
        obj.logs = ApiClient.convertToType(data['logs'], 'String');
    }
    return obj;
  }
}

/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */
RunStepDetailsToolCallsCodeOutputLogsObject.TypeEnum = {
  /**
   * value: "logs"
   * @const
   */
  logs: "logs"
};
/**
 * Always `logs`.
 * @member {module:model/RunStepDetailsToolCallsCodeOutputLogsObject.TypeEnum} type
 */
RunStepDetailsToolCallsCodeOutputLogsObject.prototype.type = undefined;

/**
 * The text output from the Code Interpreter tool call.
 * @member {String} logs
 */
RunStepDetailsToolCallsCodeOutputLogsObject.prototype.logs = undefined;

// Implement OneOfRunStepDetailsToolCallsCodeObjectCodeInterpreterOutputsItems interface: