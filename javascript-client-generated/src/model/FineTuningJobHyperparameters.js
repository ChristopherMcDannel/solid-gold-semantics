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
 * The FineTuningJobHyperparameters model module.
 * @module model/FineTuningJobHyperparameters
 * @version 2.0.0
 */
export class FineTuningJobHyperparameters {
  /**
   * Constructs a new <code>FineTuningJobHyperparameters</code>.
   * The hyperparameters used for the fine-tuning job. See the [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   * @alias module:model/FineTuningJobHyperparameters
   * @class
   * @param nEpochs {Object} The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset. \"auto\" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs.
   */
  constructor(nEpochs) {
    this.nEpochs = nEpochs;
  }

  /**
   * Constructs a <code>FineTuningJobHyperparameters</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FineTuningJobHyperparameters} obj Optional instance to populate.
   * @return {module:model/FineTuningJobHyperparameters} The populated <code>FineTuningJobHyperparameters</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FineTuningJobHyperparameters();
      if (data.hasOwnProperty('n_epochs'))
        obj.nEpochs = ApiClient.convertToType(data['n_epochs'], Object);
    }
    return obj;
  }
}

/**
 * The number of epochs to train the model for. An epoch refers to one full cycle through the training dataset. \"auto\" decides the optimal number of epochs based on the size of the dataset. If setting the number manually, we support any number between 1 and 50 epochs.
 * @member {Object} nEpochs
 */
FineTuningJobHyperparameters.prototype.nEpochs = undefined;

