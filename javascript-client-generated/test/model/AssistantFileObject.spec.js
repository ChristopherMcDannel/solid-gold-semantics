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
    describe('AssistantFileObject', function() {
      beforeEach(function() {
        instance = new OpenAiApi.AssistantFileObject();
      });

      it('should create an instance of AssistantFileObject', function() {
        // TODO: update the code to test AssistantFileObject
        expect(instance).to.be.a(OpenAiApi.AssistantFileObject);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property _object (base name: "object")', function() {
        // TODO: update the code to test the property _object
        expect(instance).to.have.property('_object');
        // expect(instance._object).to.be(expectedValueLiteral);
      });

      it('should have the property createdAt (base name: "created_at")', function() {
        // TODO: update the code to test the property createdAt
        expect(instance).to.have.property('createdAt');
        // expect(instance.createdAt).to.be(expectedValueLiteral);
      });

      it('should have the property assistantId (base name: "assistant_id")', function() {
        // TODO: update the code to test the property assistantId
        expect(instance).to.have.property('assistantId');
        // expect(instance.assistantId).to.be(expectedValueLiteral);
      });

    });
  });

}));
