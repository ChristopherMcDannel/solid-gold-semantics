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
    describe('CreateChatCompletionFunctionResponse', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateChatCompletionFunctionResponse();
      });

      it('should create an instance of CreateChatCompletionFunctionResponse', function() {
        // TODO: update the code to test CreateChatCompletionFunctionResponse
        expect(instance).to.be.a(OpenAiApi.CreateChatCompletionFunctionResponse);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property choices (base name: "choices")', function() {
        // TODO: update the code to test the property choices
        expect(instance).to.have.property('choices');
        // expect(instance.choices).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property systemFingerprint (base name: "system_fingerprint")', function() {
        // TODO: update the code to test the property systemFingerprint
        expect(instance).to.have.property('systemFingerprint');
        // expect(instance.systemFingerprint).to.be(expectedValueLiteral);
      });

      it('should have the property _object (base name: "object")', function() {
        // TODO: update the code to test the property _object
        expect(instance).to.have.property('_object');
        // expect(instance._object).to.be(expectedValueLiteral);
      });

      it('should have the property usage (base name: "usage")', function() {
        // TODO: update the code to test the property usage
        expect(instance).to.have.property('usage');
        // expect(instance.usage).to.be(expectedValueLiteral);
      });

    });
  });

}));
