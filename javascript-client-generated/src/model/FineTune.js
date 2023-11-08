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
import {FineTuneEvent} from './FineTuneEvent';
import {FineTuneHyperparams} from './FineTuneHyperparams';
import {OpenAIFile} from './OpenAIFile';

/**
 * The FineTune model module.
 * @module model/FineTune
 * @version 2.0.0
 */
export class FineTune {
  /**
   * Constructs a new <code>FineTune</code>.
   * The &#x60;FineTune&#x60; object represents a legacy fine-tune job that has been created through the API. 
   * @alias module:model/FineTune
   * @class
   * @param id {String} The object identifier, which can be referenced in the API endpoints.
   * @param createdAt {Number} The Unix timestamp (in seconds) for when the fine-tuning job was created.
   * @param fineTunedModel {String} The name of the fine-tuned model that is being created.
   * @param hyperparams {module:model/FineTuneHyperparams} 
   * @param model {String} The base model that is being fine-tuned.
   * @param _object {module:model/FineTune.ObjectEnum} The object type, which is always \"fine-tune\".
   * @param organizationId {String} The organization that owns the fine-tuning job.
   * @param resultFiles {Array.<module:model/OpenAIFile>} The compiled results files for the fine-tuning job.
   * @param status {String} The current status of the fine-tuning job, which can be either `created`, `running`, `succeeded`, `failed`, or `cancelled`.
   * @param trainingFiles {Array.<module:model/OpenAIFile>} The list of files used for training.
   * @param updatedAt {Number} The Unix timestamp (in seconds) for when the fine-tuning job was last updated.
   * @param validationFiles {Array.<module:model/OpenAIFile>} The list of files used for validation.
   */
  constructor(id, createdAt, fineTunedModel, hyperparams, model, _object, organizationId, resultFiles, status, trainingFiles, updatedAt, validationFiles) {
    this.id = id;
    this.createdAt = createdAt;
    this.fineTunedModel = fineTunedModel;
    this.hyperparams = hyperparams;
    this.model = model;
    this._object = _object;
    this.organizationId = organizationId;
    this.resultFiles = resultFiles;
    this.status = status;
    this.trainingFiles = trainingFiles;
    this.updatedAt = updatedAt;
    this.validationFiles = validationFiles;
  }

  /**
   * Constructs a <code>FineTune</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FineTune} obj Optional instance to populate.
   * @return {module:model/FineTune} The populated <code>FineTune</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new FineTune();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created_at'))
        obj.createdAt = ApiClient.convertToType(data['created_at'], 'Number');
      if (data.hasOwnProperty('events'))
        obj.events = ApiClient.convertToType(data['events'], [FineTuneEvent]);
      if (data.hasOwnProperty('fine_tuned_model'))
        obj.fineTunedModel = ApiClient.convertToType(data['fine_tuned_model'], 'String');
      if (data.hasOwnProperty('hyperparams'))
        obj.hyperparams = FineTuneHyperparams.constructFromObject(data['hyperparams']);
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], 'String');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('organization_id'))
        obj.organizationId = ApiClient.convertToType(data['organization_id'], 'String');
      if (data.hasOwnProperty('result_files'))
        obj.resultFiles = ApiClient.convertToType(data['result_files'], [OpenAIFile]);
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (data.hasOwnProperty('training_files'))
        obj.trainingFiles = ApiClient.convertToType(data['training_files'], [OpenAIFile]);
      if (data.hasOwnProperty('updated_at'))
        obj.updatedAt = ApiClient.convertToType(data['updated_at'], 'Number');
      if (data.hasOwnProperty('validation_files'))
        obj.validationFiles = ApiClient.convertToType(data['validation_files'], [OpenAIFile]);
    }
    return obj;
  }
}

/**
 * The object identifier, which can be referenced in the API endpoints.
 * @member {String} id
 */
FineTune.prototype.id = undefined;

/**
 * The Unix timestamp (in seconds) for when the fine-tuning job was created.
 * @member {Number} createdAt
 */
FineTune.prototype.createdAt = undefined;

/**
 * The list of events that have been observed in the lifecycle of the FineTune job.
 * @member {Array.<module:model/FineTuneEvent>} events
 */
FineTune.prototype.events = undefined;

/**
 * The name of the fine-tuned model that is being created.
 * @member {String} fineTunedModel
 */
FineTune.prototype.fineTunedModel = undefined;

/**
 * @member {module:model/FineTuneHyperparams} hyperparams
 */
FineTune.prototype.hyperparams = undefined;

/**
 * The base model that is being fine-tuned.
 * @member {String} model
 */
FineTune.prototype.model = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
FineTune.ObjectEnum = {
  /**
   * value: "fine-tune"
   * @const
   */
  fineTune: "fine-tune"
};
/**
 * The object type, which is always \"fine-tune\".
 * @member {module:model/FineTune.ObjectEnum} _object
 */
FineTune.prototype._object = undefined;

/**
 * The organization that owns the fine-tuning job.
 * @member {String} organizationId
 */
FineTune.prototype.organizationId = undefined;

/**
 * The compiled results files for the fine-tuning job.
 * @member {Array.<module:model/OpenAIFile>} resultFiles
 */
FineTune.prototype.resultFiles = undefined;

/**
 * The current status of the fine-tuning job, which can be either `created`, `running`, `succeeded`, `failed`, or `cancelled`.
 * @member {String} status
 */
FineTune.prototype.status = undefined;

/**
 * The list of files used for training.
 * @member {Array.<module:model/OpenAIFile>} trainingFiles
 */
FineTune.prototype.trainingFiles = undefined;

/**
 * The Unix timestamp (in seconds) for when the fine-tuning job was last updated.
 * @member {Number} updatedAt
 */
FineTune.prototype.updatedAt = undefined;

/**
 * The list of files used for validation.
 * @member {Array.<module:model/OpenAIFile>} validationFiles
 */
FineTune.prototype.validationFiles = undefined;

