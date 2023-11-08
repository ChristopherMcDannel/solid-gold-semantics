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
 * The OneOfCreateFineTuneRequestHyperparametersNEpochs model module.
 * @module model/OneOfCreateFineTuneRequestHyperparametersNEpochs
 * @version 2.0.0
 */
export class OneOfCreateFineTuneRequestHyperparametersNEpochs {
  /**
   * Constructs a new <code>OneOfCreateFineTuneRequestHyperparametersNEpochs</code>.
   * @alias module:model/OneOfCreateFineTuneRequestHyperparametersNEpochs
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>OneOfCreateFineTuneRequestHyperparametersNEpochs</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfCreateFineTuneRequestHyperparametersNEpochs} obj Optional instance to populate.
   * @return {module:model/OneOfCreateFineTuneRequestHyperparametersNEpochs} The populated <code>OneOfCreateFineTuneRequestHyperparametersNEpochs</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new OneOfCreateFineTuneRequestHyperparametersNEpochs();
    }
    return obj;
  }
}
