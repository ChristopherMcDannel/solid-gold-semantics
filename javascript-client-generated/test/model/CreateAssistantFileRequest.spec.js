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
    describe('CreateAssistantFileRequest', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateAssistantFileRequest();
      });

      it('should create an instance of CreateAssistantFileRequest', function() {
        // TODO: update the code to test CreateAssistantFileRequest
        expect(instance).to.be.a(OpenAiApi.CreateAssistantFileRequest);
      });

      it('should have the property fileId (base name: "file_id")', function() {
        // TODO: update the code to test the property fileId
        expect(instance).to.have.property('fileId');
        // expect(instance.fileId).to.be(expectedValueLiteral);
      });

    });
  });

}));
