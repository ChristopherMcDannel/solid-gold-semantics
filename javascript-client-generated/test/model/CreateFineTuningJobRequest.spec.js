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
    describe('CreateFineTuningJobRequest', function() {
      beforeEach(function() {
        instance = new OpenAiApi.CreateFineTuningJobRequest();
      });

      it('should create an instance of CreateFineTuningJobRequest', function() {
        // TODO: update the code to test CreateFineTuningJobRequest
        expect(instance).to.be.a(OpenAiApi.CreateFineTuningJobRequest);
      });

      it('should have the property model (base name: "model")', function() {
        // TODO: update the code to test the property model
        expect(instance).to.have.property('model');
        // expect(instance.model).to.be(expectedValueLiteral);
      });

      it('should have the property trainingFile (base name: "training_file")', function() {
        // TODO: update the code to test the property trainingFile
        expect(instance).to.have.property('trainingFile');
        // expect(instance.trainingFile).to.be(expectedValueLiteral);
      });

      it('should have the property hyperparameters (base name: "hyperparameters")', function() {
        // TODO: update the code to test the property hyperparameters
        expect(instance).to.have.property('hyperparameters');
        // expect(instance.hyperparameters).to.be(expectedValueLiteral);
      });

      it('should have the property suffix (base name: "suffix")', function() {
        // TODO: update the code to test the property suffix
        expect(instance).to.have.property('suffix');
        // expect(instance.suffix).to.be(expectedValueLiteral);
      });

      it('should have the property validationFile (base name: "validation_file")', function() {
        // TODO: update the code to test the property validationFile
        expect(instance).to.have.property('validationFile');
        // expect(instance.validationFile).to.be(expectedValueLiteral);
      });

    });
  });

}));
