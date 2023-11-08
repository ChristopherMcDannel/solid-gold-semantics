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
 * The Model model module.
 * @module model/Model
 * @version 2.0.0
 */
export class Model {
  /**
   * Constructs a new <code>Model</code>.
   * Describes an OpenAI model offering that can be used with the API.
   * @alias module:model/Model
   * @class
   * @param id {String} The model identifier, which can be referenced in the API endpoints.
   * @param created {Number} The Unix timestamp (in seconds) when the model was created.
   * @param _object {module:model/Model.ObjectEnum} The object type, which is always \"model\".
   * @param ownedBy {String} The organization that owns the model.
   */
  constructor(id, created, _object, ownedBy) {
    this.id = id;
    this.created = created;
    this._object = _object;
    this.ownedBy = ownedBy;
  }

  /**
   * Constructs a <code>Model</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model} obj Optional instance to populate.
   * @return {module:model/Model} The populated <code>Model</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Model();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'Number');
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('owned_by'))
        obj.ownedBy = ApiClient.convertToType(data['owned_by'], 'String');
    }
    return obj;
  }
}

/**
 * The model identifier, which can be referenced in the API endpoints.
 * @member {String} id
 */
Model.prototype.id = undefined;

/**
 * The Unix timestamp (in seconds) when the model was created.
 * @member {Number} created
 */
Model.prototype.created = undefined;

/**
 * Allowed values for the <code>_object</code> property.
 * @enum {String}
 * @readonly
 */
Model.ObjectEnum = {
  /**
   * value: "model"
   * @const
   */
  model: "model"
};
/**
 * The object type, which is always \"model\".
 * @member {module:model/Model.ObjectEnum} _object
 */
Model.prototype._object = undefined;

/**
 * The organization that owns the model.
 * @member {String} ownedBy
 */
Model.prototype.ownedBy = undefined;
