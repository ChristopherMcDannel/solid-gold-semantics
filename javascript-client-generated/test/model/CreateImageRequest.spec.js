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
    describe('CreateImageRequest', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateImageRequest();
      });

      it('should create an instance of CreateImageRequest', function() {
        // TODO: update the code to test CreateImageRequest
        expect(instance).to.be.a(OpenAiApi.CreateImageRequest);
      });

      it('should have the property prompt (base name: "prompt")', function() {
        // TODO: update the code to test the property prompt
        expect(instance).to.have.property('prompt');
        // expect(instance.prompt).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property n (base name: "n")', function() {
        // TODO: update the code to test the property n
        expect(instance).to.have.property('n');
        // expect(instance.n).to.be(expectedValueLiteral);
      });

      it('should have the property quality (base name: "quality")', function() {
        // TODO: update the code to test the property quality
        expect(instance).to.have.property('quality');
        // expect(instance.quality).to.be(expectedValueLiteral);
      });

      it('should have the property responseFormat (base name: "response_format")', function() {
        // TODO: update the code to test the property responseFormat
        expect(instance).to.have.property('responseFormat');
        // expect(instance.responseFormat).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property style (base name: "style")', function() {
        // TODO: update the code to test the property style
        expect(instance).to.have.property('style');
        // expect(instance.style).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

    });
  });

}));
