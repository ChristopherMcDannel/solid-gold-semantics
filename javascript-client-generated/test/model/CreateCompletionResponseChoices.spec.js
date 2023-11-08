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
    describe('CreateCompletionResponseChoices', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateCompletionResponseChoices();
      });

      it('should create an instance of CreateCompletionResponseChoices', function() {
        // TODO: update the code to test CreateCompletionResponseChoices
        expect(instance).to.be.a(OpenAiApi.CreateCompletionResponseChoices);
      });

      it('should have the property finishReason (base name: "finish_reason")', function() {
        // TODO: update the code to test the property finishReason
        expect(instance).to.have.property('finishReason');
        // expect(instance.finishReason).to.be(expectedValueLiteral);
      });

      it('should have the property index (base name: "index")', function() {
        // TODO: update the code to test the property index
        expect(instance).to.have.property('index');
        // expect(instance.index).to.be(expectedValueLiteral);
      });

      it('should have the property logprobs (base name: "logprobs")', function() {
        // TODO: update the code to test the property logprobs
        expect(instance).to.have.property('logprobs');
        // expect(instance.logprobs).to.be(expectedValueLiteral);
      });

      it('should have the property text (base name: "text")', function() {
        // TODO: update the code to test the property text
        expect(instance).to.have.property('text');
        // expect(instance.text).to.be(expectedValueLiteral);
      });

    });
  });

}));
