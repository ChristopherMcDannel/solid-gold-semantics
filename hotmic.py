# hotmic.py

import sounddevice as sd
import wavio as wv

def record_audio(audio_queue, freq=44100, duration=5):
    print('Recording')
    file_counter = 0
    while True:
        # Start recorder with the given values
        recording = sd.rec(int(duration * freq), samplerate=freq, channels=2)

        # Record audio for the given number of seconds
        sd.wait()

        # Alternate between two files
        filename = f"recording{file_counter % 2}.wav"
        wv.write(filename, recording, freq, sampwidth=2)
        
        # Put the filename into the queue for the transcribe thread
        audio_queue.put(filename)
        
        file_counter += 1
