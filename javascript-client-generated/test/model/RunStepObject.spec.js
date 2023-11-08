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
    describe('RunStepObject', function() {
      beforeEach(function() {
        instance = new OpenAiApi.RunStepObject();
      });

      it('should create an instance of RunStepObject', function() {
        // TODO: update the code to test RunStepObject
        expect(instance).to.be.a(OpenAiApi.RunStepObject);
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

      it('should have the property threadId (base name: "thread_id")', function() {
        // TODO: update the code to test the property threadId
        expect(instance).to.have.property('threadId');
        // expect(instance.threadId).to.be(expectedValueLiteral);
      });

      it('should have the property runId (base name: "run_id")', function() {
        // TODO: update the code to test the property runId
        expect(instance).to.have.property('runId');
        // expect(instance.runId).to.be(expectedValueLiteral);
      });

      it('should have the property type (base name: "type")', function() {
        // TODO: update the code to test the property type
        expect(instance).to.have.property('type');
        // expect(instance.type).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property stepDetails (base name: "step_details")', function() {
        // TODO: update the code to test the property stepDetails
        expect(instance).to.have.property('stepDetails');
        // expect(instance.stepDetails).to.be(expectedValueLiteral);
      });

      it('should have the property lastError (base name: "last_error")', function() {
        // TODO: update the code to test the property lastError
        expect(instance).to.have.property('lastError');
        // expect(instance.lastError).to.be(expectedValueLiteral);
      });

      it('should have the property expiredAt (base name: "expired_at")', function() {
        // TODO: update the code to test the property expiredAt
        expect(instance).to.have.property('expiredAt');
        // expect(instance.expiredAt).to.be(expectedValueLiteral);
      });

      it('should have the property cancelledAt (base name: "cancelled_at")', function() {
        // TODO: update the code to test the property cancelledAt
        expect(instance).to.have.property('cancelledAt');
        // expect(instance.cancelledAt).to.be(expectedValueLiteral);
      });

      it('should have the property failedAt (base name: "failed_at")', function() {
        // TODO: update the code to test the property failedAt
        expect(instance).to.have.property('failedAt');
        // expect(instance.failedAt).to.be(expectedValueLiteral);
      });

      it('should have the property completedAt (base name: "completed_at")', function() {
        // TODO: update the code to test the property completedAt
        expect(instance).to.have.property('completedAt');
        // expect(instance.completedAt).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

    });
  });

}));
