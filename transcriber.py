# transcriber.py

import whisper

def transcribe_audio(audio_queue, model):
    while True:
        # Wait for a filename from the record thread
        filename = audio_queue.get()
        
        audio = whisper.load_audio(filename)
        audio = whisper.pad_or_trim(audio)
        
        mel = whisper.log_mel_spectrogram(audio).to(model.device)
        options = whisper.DecodingOptions(language= 'en', fp16=False)
        result = whisper.decode(model, mel, options)

        print(result.text)
