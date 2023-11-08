# OpenAiApi.CreateEditRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instruction** | **String** | The instruction that tells the model how to edit the prompt. | 
**model** | **AnyOfCreateEditRequestModel** | ID of the model to use. You can use the &#x60;text-davinci-edit-001&#x60; or &#x60;code-davinci-edit-001&#x60; model with this endpoint. | 
**input** | **String** | The input text to use as a starting point for the edit. | [optional] [default to &#x27;&#x27;]
**n** | **Number** | How many edits to generate for the input and instruction. | [optional] [default to 1]
**temperature** | **Number** | What sampling temperature to use, between 0 and 2. Higher values like 0.8 will make the output more random, while lower values like 0.2 will make it more focused and deterministic.  We generally recommend altering this or &#x60;top_p&#x60; but not both.  | [optional] [default to 1]
**topP** | **Number** | An alternative to sampling with temperature, called nucleus sampling, where the model considers the results of the tokens with top_p probability mass. So 0.1 means only the tokens comprising the top 10% probability mass are considered.  We generally recommend altering this or &#x60;temperature&#x60; but not both.  | [optional] [default to 1]
