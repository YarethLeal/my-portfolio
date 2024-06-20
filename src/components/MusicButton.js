import React, { useState } from 'react';

function MusicButton() {
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleMusic = () => {
        const audioElement = document.getElementById('background-music');
        audioElement.volume = 0.08;
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <button id="audio-button" onClick={toggleMusic}>
                {isPlaying ?<i class="bi bi-volume-mute"></i> :<i class="bi bi-volume-up"></i>}
            </button>
        </div>
    );
}
export default MusicButton;