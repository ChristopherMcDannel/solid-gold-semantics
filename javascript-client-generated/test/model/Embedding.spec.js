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
    describe('Embedding', function() {
      beforeEach(function() {
        instance = new OpenAiApi.Embedding();
      });

      it('should create an instance of Embedding', function() {
        // TODO: update the code to test Embedding
        expect(instance).to.be.a(OpenAiApi.Embedding);
      });

      it('should have the property index (base name: "index")', function() {
        // TODO: update the code to test the property index
        expect(instance).to.have.property('index');
        // expect(instance.index).to.be(expectedValueLiteral);
      });

      it('should have the property embedding (base name: "embedding")', function() {
        // TODO: update the code to test the property embedding
        expect(instance).to.have.property('embedding');
        // expect(instance.embedding).to.be(expectedValueLiteral);
      });

      it('should have the property _object (base name: "object")', function() {
        // TODO: update the code to test the property _object
        expect(instance).to.have.property('_object');
        // expect(instance._object).to.be(expectedValueLiteral);
      });

    });
  });

}));
