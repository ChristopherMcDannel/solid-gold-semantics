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
    describe('CreateChatCompletionRequest', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateChatCompletionRequest();
      });

      it('should create an instance of CreateChatCompletionRequest', function() {
        // TODO: update the code to test CreateChatCompletionRequest
        expect(instance).to.be.a(OpenAiApi.CreateChatCompletionRequest);
      });

      it('should have the property messages (base name: "messages")', function() {
        // TODO: update the code to test the property messages
        expect(instance).to.have.property('messages');
        // expect(instance.messages).to.be(expectedValueLiteral);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property frequencyPenalty (base name: "frequency_penalty")', function() {
        // TODO: update the code to test the property frequencyPenalty
        expect(instance).to.have.property('frequencyPenalty');
        // expect(instance.frequencyPenalty).to.be(expectedValueLiteral);
      });

      it('should have the property logitBias (base name: "logit_bias")', function() {
        // TODO: update the code to test the property logitBias
        expect(instance).to.have.property('logitBias');
        // expect(instance.logitBias).to.be(expectedValueLiteral);
      });

      it('should have the property maxTokens (base name: "max_tokens")', function() {
        // TODO: update the code to test the property maxTokens
        expect(instance).to.have.property('maxTokens');
        // expect(instance.maxTokens).to.be(expectedValueLiteral);
      });

      it('should have the property n (base name: "n")', function() {
        // TODO: update the code to test the property n
        expect(instance).to.have.property('n');
        // expect(instance.n).to.be(expectedValueLiteral);
      });

      it('should have the property presencePenalty (base name: "presence_penalty")', function() {
        // TODO: update the code to test the property presencePenalty
        expect(instance).to.have.property('presencePenalty');
        // expect(instance.presencePenalty).to.be(expectedValueLiteral);
      });

      it('should have the property responseFormat (base name: "response_format")', function() {
        // TODO: update the code to test the property responseFormat
        expect(instance).to.have.property('responseFormat');
        // expect(instance.responseFormat).to.be(expectedValueLiteral);
      });

      it('should have the property seed (base name: "seed")', function() {
        // TODO: update the code to test the property seed
        expect(instance).to.have.property('seed');
        // expect(instance.seed).to.be(expectedValueLiteral);
      });

      it('should have the property stop (base name: "stop")', function() {
        // TODO: update the code to test the property stop
        expect(instance).to.have.property('stop');
        // expect(instance.stop).to.be(expectedValueLiteral);
      });

      it('should have the property stream (base name: "stream")', function() {
        // TODO: update the code to test the property stream
        expect(instance).to.have.property('stream');
        // expect(instance.stream).to.be(expectedValueLiteral);
      });

      it('should have the property temperature (base name: "temperature")', function() {
        // TODO: update the code to test the property temperature
        expect(instance).to.have.property('temperature');
        // expect(instance.temperature).to.be(expectedValueLiteral);
      });

      it('should have the property topP (base name: "top_p")', function() {
        // TODO: update the code to test the property topP
        expect(instance).to.have.property('topP');
        // expect(instance.topP).to.be(expectedValueLiteral);
      });

      it('should have the property tools (base name: "tools")', function() {
        // TODO: update the code to test the property tools
        expect(instance).to.have.property('tools');
        // expect(instance.tools).to.be(expectedValueLiteral);
      });

      it('should have the property toolChoice (base name: "tool_choice")', function() {
        // TODO: update the code to test the property toolChoice
        expect(instance).to.have.property('toolChoice');
        // expect(instance.toolChoice).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "user")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property functionCall (base name: "function_call")', function() {
        // TODO: update the code to test the property functionCall
        expect(instance).to.have.property('functionCall');
        // expect(instance.functionCall).to.be(expectedValueLiteral);
      });

      it('should have the property functions (base name: "functions")', function() {
        // TODO: update the code to test the property functions
        expect(instance).to.have.property('functions');
        // expect(instance.functions).to.be(expectedValueLiteral);
      });

    });
  });

}));
