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
    describe('ListPaginatedFineTuningJobsResponse', function() {
      beforeEach(function() {
        instance = new OpenAiApi.ListPaginatedFineTuningJobsResponse();
      });

      it('should create an instance of ListPaginatedFineTuningJobsResponse', function() {
        // TODO: update the code to test ListPaginatedFineTuningJobsResponse
        expect(instance).to.be.a(OpenAiApi.ListPaginatedFineTuningJobsResponse);
      });

      it('should have the property data (base name: "data")', function() {
        // TODO: update the code to test the property data
        expect(instance).to.have.property('data');
        // expect(instance.data).to.be(expectedValueLiteral);
      });

      it('should have the property hasMore (base name: "has_more")', function() {
        // TODO: update the code to test the property hasMore
        expect(instance).to.have.property('hasMore');
        // expect(instance.hasMore).to.be(expectedValueLiteral);
      });

      it('should have the property _object (base name: "object")', function() {
        // TODO: update the code to test the property _object
        expect(instance).to.have.property('_object');
        // expect(instance._object).to.be(expectedValueLiteral);
      });

    });
  });

}));
