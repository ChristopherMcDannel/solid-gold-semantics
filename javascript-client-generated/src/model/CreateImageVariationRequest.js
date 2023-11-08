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
 * The CreateImageVariationRequest model module.
 * @module model/CreateImageVariationRequest
 * @version 2.0.0
 */
export class CreateImageVariationRequest {
  /**
   * Constructs a new <code>CreateImageVariationRequest</code>.
   * @alias module:model/CreateImageVariationRequest
   * @class
   * @param image {Blob} The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
   */
  constructor(image) {
    this.image = image;
  }

  /**
   * Constructs a <code>CreateImageVariationRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateImageVariationRequest} obj Optional instance to populate.
   * @return {module:model/CreateImageVariationRequest} The populated <code>CreateImageVariationRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateImageVariationRequest();
      if (data.hasOwnProperty('image'))
        obj.image = ApiClient.convertToType(data['image'], 'Blob');
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], Object);
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('response_format'))
        obj.responseFormat = ApiClient.convertToType(data['response_format'], 'String');
      if (data.hasOwnProperty('size'))
        obj.size = ApiClient.convertToType(data['size'], 'String');
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
    }
    return obj;
  }
}

/**
 * The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square.
 * @member {Blob} image
 */
CreateImageVariationRequest.prototype.image = undefined;

/**
 * The model to use for image generation. Only `dall-e-2` is supported at this time.
 * @member {Object} model
 */
CreateImageVariationRequest.prototype.model = undefined;

/**
 * The number of images to generate. Must be between 1 and 10. For `dall-e-3`, only `n=1` is supported.
 * @member {Number} n
 * @default 1
 */
CreateImageVariationRequest.prototype.n = 1;

/**
 * Allowed values for the <code>responseFormat</code> property.
 * @enum {String}
 * @readonly
 */
CreateImageVariationRequest.ResponseFormatEnum = {
  /**
   * value: "url"
   * @const
   */
  url: "url",

  /**
   * value: "b64_json"
   * @const
   */
  b64Json: "b64_json"
};
/**
 * The format in which the generated images are returned. Must be one of `url` or `b64_json`.
 * @member {module:model/CreateImageVariationRequest.ResponseFormatEnum} responseFormat
 * @default 'url'
 */
CreateImageVariationRequest.prototype.responseFormat = 'url';

/**
 * Allowed values for the <code>size</code> property.
 * @enum {String}
 * @readonly
 */
CreateImageVariationRequest.SizeEnum = {
  /**
   * value: "256x256"
   * @const
   */
  _256x256: "256x256",

  /**
   * value: "512x512"
   * @const
   */
  _512x512: "512x512",

  /**
   * value: "1024x1024"
   * @const
   */
  _1024x1024: "1024x1024"
};
/**
 * The size of the generated images. Must be one of `256x256`, `512x512`, or `1024x1024`.
 * @member {module:model/CreateImageVariationRequest.SizeEnum} size
 * @default '1024x1024'
 */
CreateImageVariationRequest.prototype.size = '1024x1024';

/**
 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
 * @member {String} user
 */
CreateImageVariationRequest.prototype.user = undefined;
