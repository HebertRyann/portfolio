import { useEffect, useRef, useState } from 'react';
import { FiPlayCircle, FiPauseCircle } from 'react-icons/fi';
import {
  Container,
} from './styles';

interface PlayerProps {
  audioSource: string;
}
const Player: React.FC<PlayerProps> = ({ audioSource }) => {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPLaying] = useState(false);

  const audioRef = useRef(new Audio(audioSource));
  const audioIntervalRef = useRef<NodeJS.Timeout>();
  const isReady = useRef(false);

  const { duration } = audioRef.current;
  

  const startTimer = () => {
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
    }

    audioIntervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        console.log('Endend');
        setIsPLaying(false);
        setTrackProgress(0);
      } else {
        setTrackProgress(Math.round(audioRef.current.currentTime));
      }
    }, 1000);
  };

  const onScrub = (value: string) => {
    if (audioIntervalRef.current) {
      clearInterval(audioIntervalRef.current);
    }
    audioRef.current.currentTime = Number(value);
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPLaying(true);
    }
    startTimer();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startTimer();
      console.log('Playing');
    } else {
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
      }
      audioRef.current?.pause();
      console.log('Paused');
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
      if (audioIntervalRef.current) {
        clearInterval(audioIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    audioRef.current?.pause();

    audioRef.current = new Audio(audioSource);
    setTrackProgress(Math.round(audioRef.current.currentTime));

    if (isReady.current) {
      audioRef.current?.play();
      setIsPLaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [audioSource]);

  useEffect(() => {
    console.log(Math.floor(duration), '<- duration total');
    console.log(Math.round(audioRef.current.currentTime), '<- current time');
    console.log(trackProgress, '<- trackprogress');
  }, [duration, trackProgress]);

  return (
    <Container>
      {isPlaying ? (
        <FiPauseCircle
          size={40}
          color="#fff"
          onClick={() => setIsPLaying(false)}
        />
      ) : (
        <FiPlayCircle
          size={40}
          color="#fff"
          onClick={() => setIsPLaying(true)}
        />
      )}
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={Math.floor(duration) || `${Math.floor(duration)}`}
        onChange={event => onScrub(event.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        // style={{ background: trackStyle }}
      />
    </Container>
  )
};
export default Player;