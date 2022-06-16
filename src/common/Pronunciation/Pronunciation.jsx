import React, { useRef } from 'react';
import { AiFillPlayCircle } from 'react-icons/ai/index.js';
import { PronunciationWrapper, Icon } from './Pronunciation.style.jsx';
import useDictionary from '~/hooks/useDictionary.jsx';

const Pronunciation = () => {
  const {
    results: audioBase64, loading, error, word,
  } = useDictionary('audio', 'audioBase64');

  const audioRef = useRef();

  const playSound = () => {
    const audioEl = audioRef.current;

    if (audioEl.paused) {
      audioEl.play();
    } else {
      audioEl.pause();
      audioEl.currentTime = 0;
      audioEl.play();
    }
  };

  return (
    <PronunciationWrapper>
      <Icon onClick={playSound}>
        <AiFillPlayCircle />
      </Icon>
      <audio
        controls
        ref={audioRef}
        src={audioBase64}
      >
        <track
          kind="captions"
        />
      </audio>
    </PronunciationWrapper>
  );
};

export default Pronunciation;
