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
    describe('MessageObject', function() {
      beforeEach(function() {
        instance = new OpenAiApi.MessageObject();
      });

      it('should create an instance of MessageObject', function() {
        // TODO: update the code to test MessageObject
        expect(instance).to.be.a(OpenAiApi.MessageObject);
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

      it('should have the property threadId (base name: "thread_id")', function() {
        // TODO: update the code to test the property threadId
        expect(instance).to.have.property('threadId');
        // expect(instance.threadId).to.be(expectedValueLiteral);
      });

      it('should have the property role (base name: "role")', function() {
        // TODO: update the code to test the property role
        expect(instance).to.have.property('role');
        // expect(instance.role).to.be(expectedValueLiteral);
      });

      it('should have the property content (base name: "content")', function() {
        // TODO: update the code to test the property content
        expect(instance).to.have.property('content');
        // expect(instance.content).to.be(expectedValueLiteral);
      });

      it('should have the property assistantId (base name: "assistant_id")', function() {
        // TODO: update the code to test the property assistantId
        expect(instance).to.have.property('assistantId');
        // expect(instance.assistantId).to.be(expectedValueLiteral);
      });

      it('should have the property runId (base name: "run_id")', function() {
        // TODO: update the code to test the property runId
        expect(instance).to.have.property('runId');
        // expect(instance.runId).to.be(expectedValueLiteral);
      });

      it('should have the property fileIds (base name: "file_ids")', function() {
        // TODO: update the code to test the property fileIds
        expect(instance).to.have.property('fileIds');
        // expect(instance.fileIds).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

    });
  });

}));
