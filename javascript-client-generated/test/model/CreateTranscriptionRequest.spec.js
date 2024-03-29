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
    describe('CreateTranscriptionRequest', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateTranscriptionRequest();
      });

      it('should create an instance of CreateTranscriptionRequest', function() {
        // TODO: update the code to test CreateTranscriptionRequest
        expect(instance).to.be.a(OpenAiApi.CreateTranscriptionRequest);
      });

      it('should have the property file (base name: "file")', function() {
        // TODO: update the code to test the property file
        expect(instance).to.have.property('file');
        // expect(instance.file).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property language (base name: "language")', function() {
        // TODO: update the code to test the property language
        expect(instance).to.have.property('language');
        // expect(instance.language).to.be(expectedValueLiteral);
      });

      it('should have the property prompt (base name: "prompt")', function() {
        // TODO: update the code to test the property prompt
        expect(instance).to.have.property('prompt');
        // expect(instance.prompt).to.be(expectedValueLiteral);
      });

      it('should have the property responseFormat (base name: "response_format")', function() {
        // TODO: update the code to test the property responseFormat
        expect(instance).to.have.property('responseFormat');
        // expect(instance.responseFormat).to.be(expectedValueLiteral);
      });

      it('should have the property temperature (base name: "temperature")', function() {
        // TODO: update the code to test the property temperature
        expect(instance).to.have.property('temperature');
        // expect(instance.temperature).to.be(expectedValueLiteral);
      });

    });
  });

}));
