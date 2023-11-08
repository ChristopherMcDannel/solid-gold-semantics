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
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenAiApi);
  }
}(this, function(expect, OpenAiApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('CreateEmbeddingRequest', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateEmbeddingRequest();
      });

      it('should create an instance of CreateEmbeddingRequest', function() {
        // TODO: update the code to test CreateEmbeddingRequest
        expect(instance).to.be.a(OpenAiApi.CreateEmbeddingRequest);
      });

      it('should have the property input (base name: "input")', function() {
        // TODO: update the code to test the property input
        expect(instance).to.have.property('input');
        // expect(instance.input).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property encodingFormat (base name: "encoding_format")', function() {
        // TODO: update the code to test the property encodingFormat
        expect(instance).to.have.property('encodingFormat');
        // expect(instance.encodingFormat).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
