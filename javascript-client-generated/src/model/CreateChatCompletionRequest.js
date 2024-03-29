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
import {ApiClient} from '../ApiClient';
import {ChatCompletionFunctions} from './ChatCompletionFunctions';
import {ChatCompletionRequestMessage} from './ChatCompletionRequestMessage';
import {ChatCompletionTool} from './ChatCompletionTool';
import {ChatCompletionToolChoiceOption} from './ChatCompletionToolChoiceOption';
import {CreateChatCompletionRequestResponseFormat} from './CreateChatCompletionRequestResponseFormat';

/**
 * The CreateChatCompletionRequest model module.
 * @module model/CreateChatCompletionRequest
 * @version 2.0.0
 */
export class CreateChatCompletionRequest {
  /**
   * Constructs a new <code>CreateChatCompletionRequest</code>.
   * @alias module:model/CreateChatCompletionRequest
   * @class
   * @param messages {Array.<module:model/ChatCompletionRequestMessage>} A list of messages comprising the conversation so far. [Example Python code](https://cookbook.openai.com/examples/how_to_format_inputs_to_chatgpt_models).
   * @param model {Object} ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API.
   */
  constructor(messages, model) {
    this.messages = messages;
    this.model = model;
  }

  /**
   * Constructs a <code>CreateChatCompletionRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateChatCompletionRequest} obj Optional instance to populate.
   * @return {module:model/CreateChatCompletionRequest} The populated <code>CreateChatCompletionRequest</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateChatCompletionRequest();
      if (data.hasOwnProperty('messages'))
        obj.messages = ApiClient.convertToType(data['messages'], [ChatCompletionRequestMessage]);
      if (data.hasOwnProperty('model'))
        obj.model = ApiClient.convertToType(data['model'], Object);
      if (data.hasOwnProperty('frequency_penalty'))
        obj.frequencyPenalty = ApiClient.convertToType(data['frequency_penalty'], 'Number');
      if (data.hasOwnProperty('logit_bias'))
        obj.logitBias = ApiClient.convertToType(data['logit_bias'], {'String': 'Number'});
      if (data.hasOwnProperty('max_tokens'))
        obj.maxTokens = ApiClient.convertToType(data['max_tokens'], 'Number');
      if (data.hasOwnProperty('n'))
        obj.n = ApiClient.convertToType(data['n'], 'Number');
      if (data.hasOwnProperty('presence_penalty'))
        obj.presencePenalty = ApiClient.convertToType(data['presence_penalty'], 'Number');
      if (data.hasOwnProperty('response_format'))
        obj.responseFormat = CreateChatCompletionRequestResponseFormat.constructFromObject(data['response_format']);
      if (data.hasOwnProperty('seed'))
        obj.seed = ApiClient.convertToType(data['seed'], 'Number');
      if (data.hasOwnProperty('stop'))
        obj.stop = ApiClient.convertToType(data['stop'], Object);
      if (data.hasOwnProperty('stream'))
        obj.stream = ApiClient.convertToType(data['stream'], 'Boolean');
      if (data.hasOwnProperty('temperature'))
        obj.temperature = ApiClient.convertToType(data['temperature'], 'Number');
      if (data.hasOwnProperty('top_p'))
        obj.topP = ApiClient.convertToType(data['top_p'], 'Number');
      if (data.hasOwnProperty('tools'))
        obj.tools = ApiClient.convertToType(data['tools'], [ChatCompletionTool]);
      if (data.hasOwnProperty('tool_choice'))
        obj.toolChoice = ChatCompletionToolChoiceOption.constructFromObject(data['tool_choice']);
      if (data.hasOwnProperty('user'))
        obj.user = ApiClient.convertToType(data['user'], 'String');
      if (data.hasOwnProperty('function_call'))
        obj.functionCall = ApiClient.convertToType(data['function_call'], Object);
      if (data.hasOwnProperty('functions'))
        obj.functions = ApiClient.convertToType(data['functions'], [ChatCompletionFunctions]);
    }
    return obj;
  }
}

/**
 * A list of messages comprising the conversation so far. [Example Python code](https://cookbook.openai.com/examples/how_to_format_inputs_to_chatgpt_models).
 * @member {Array.<module:model/ChatCompletionRequestMessage>} messages
 */
CreateChatCompletionRequest.prototype.messages = undefined;

/**
 * ID of the model to use. See the [model endpoint compatibility](/docs/models/model-endpoint-compatibility) table for details on which models work with the Chat API.
 * @member {Object} model
 */
CreateChatCompletionRequest.prototype.model = undefined;

/**
 * Number between -2.0 and 2.0. Positive values penalize new tokens based on their existing frequency in the text so far, decreasing the model's likelihood to repeat the same line verbatim.  [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details) 
 * @member {Number} frequencyPenalty
 * @default 0
 */
CreateChatCompletionRequest.prototype.frequencyPenalty = 0;

/**
 * Modify the likelihood of specified tokens appearing in the completion.  Accepts a JSON object that maps tokens (specified by their token ID in the tokenizer) to an associated bias value from -100 to 100. Mathematically, the bias is added to the logits generated by the model prior to sampling. The exact effect will vary per model, but values between -1 and 1 should decrease or increase likelihood of selection; values like -100 or 100 should result in a ban or exclusive selection of the relevant token. 
 * @member {Object.<String, Number>} logitBias
 */
CreateChatCompletionRequest.prototype.logitBias = undefined;

/**
 * The maximum number of [tokens](/tokenizer) to generate in the chat completion.  The total length of input tokens and generated tokens is limited by the model's context length. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens. 
 * @member {Number} maxTokens
 */
CreateChatCompletionRequest.prototype.maxTokens = undefined;

/**
 * How many chat completion choices to generate for each input message.
 * @member {Number} n
 * @default 1
 */
CreateChatCompletionRequest.prototype.n = 1;

/**
 * Number between -2.0 and 2.0. Positive values penalize new tokens based on whether they appear in the text so far, increasing the model's likelihood to talk about new topics.  [See more information about frequency and presence penalties.](/docs/guides/gpt/parameter-details) 
 * @member {Number} presencePenalty
 * @default 0
 */
CreateChatCompletionRequest.prototype.presencePenalty = 0;

/**
 * @member {module:model/CreateChatCompletionRequestResponseFormat} responseFormat
 */
CreateChatCompletionRequest.prototype.responseFormat = undefined;

/**
 * This feature is in Beta.  If specified, our system will make a best effort to sample deterministically, such that repeated requests with the same `seed` and parameters should return the same result. Determinism is not guaranteed, and you should refer to the `system_fingerprint` response parameter to monitor changes in the backend. 
 * @member {Number} seed
 */
CreateChatCompletionRequest.prototype.seed = undefined;

/**
 * Up to 4 sequences where the API will stop generating further tokens. 
 * @member {Object} stop
 */
CreateChatCompletionRequest.prototype.stop = undefined;

/**
 * If set, partial message deltas will be sent, like in ChatGPT. Tokens will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available, with the stream terminated by a `data: [DONE]` message. [Example Python code](https://cookbook.openai.com/examples/how_to_stream_completions). 
 * @member {Boolean} stream
 * @default false
 */
CreateChatCompletionRequest.prototype.stream = false;

/**
 * What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or `top_p` but not both. 
 * @member {Number} temperature
 * @default 1
 */
CreateChatCompletionRequest.prototype.temperature = 1;

/**
 * An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or `temperature` but not both. 
 * @member {Number} topP
 * @default 1
 */
CreateChatCompletionRequest.prototype.topP = 1;

/**
 * A list of tools the model may call. Currently, only functions are supported as a tool. Use this to provide a list of functions the model may generate JSON inputs for. 
 * @member {Array.<module:model/ChatCompletionTool>} tools
 */
CreateChatCompletionRequest.prototype.tools = undefined;

/**
 * @member {module:model/ChatCompletionToolChoiceOption} toolChoice
 */
CreateChatCompletionRequest.prototype.toolChoice = undefined;

/**
 * A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids). 
 * @member {String} user
 */
CreateChatCompletionRequest.prototype.user = undefined;

/**
 * Deprecated in favor of `tool_choice`.  Controls which (if any) function is called by the model. `none` means the model will not call a function and instead generates a message. `auto` means the model can pick between generating a message or calling a function. Specifying a particular function via `{\"name\": \"my_function\"}` forces the model to call that function.  `none` is the default when no functions are present. `auto`` is the default if functions are present. 
 * @member {Object} functionCall
 */
CreateChatCompletionRequest.prototype.functionCall = undefined;

/**
 * Deprecated in favor of `tools`.  A list of functions the model may generate JSON inputs for. 
 * @member {Array.<module:model/ChatCompletionFunctions>} functions
 */
CreateChatCompletionRequest.prototype.functions = undefined;

