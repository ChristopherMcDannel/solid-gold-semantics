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
    describe('RunStepDetailsToolCallsCodeObject', function() {
      beforeEach(function() {
        instance = new OpenAiApi.RunStepDetailsToolCallsCodeObject();
      });

      it('should create an instance of RunStepDetailsToolCallsCodeObject', function() {
        // TODO: update the code to test RunStepDetailsToolCallsCodeObject
        expect(instance).to.be.a(OpenAiApi.RunStepDetailsToolCallsCodeObject);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property codeInterpreter (base name: "code_interpreter")', function() {
        // TODO: update the code to test the property codeInterpreter
        expect(instance).to.have.property('codeInterpreter');
        // expect(instance.codeInterpreter).to.be(expectedValueLiteral);
      });

    });
  });

}));
