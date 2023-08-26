# main.py

import threading
import queue
import whisper
from hotmic import record_audio
from transcriber import transcribe_audio

if __name__=="__main__":
    model = whisper.load_model("small.en")

    # Shared queue to communicate between threads
    audio_queue = queue.Queue()

    # Start threads
    mic_thread = threading.Thread(target=record_audio, args=(audio_queue,))
    write_thread = threading.Thread(target=transcribe_audio, args=(audio_queue, model))
    
    mic_thread.start()
    write_thread.start()
    
    mic_thread.join()
    write_thread.join()
