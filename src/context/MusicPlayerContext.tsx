import React, { createContext, useContext, useState } from 'react';
import { MusicPlayer } from '../components/MusicPlayer';
import { Track } from '../types';

type MusicPlayerContextType = {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  togglePlayPause: () => void;
  closePlayer: () => void;
};

const MusicPlayerContext = createContext<MusicPlayerContextType | null>(null);

export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within a MusicPlayerProvider');
  }
  return context;
};

export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playTrack = (track: Track) => {
    if (currentTrack?.id === track.id) {
      togglePlayPause();
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const closePlayer = () => {
    setCurrentTrack(null);
    setIsPlaying(false);
  };

  return (
    <MusicPlayerContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        togglePlayPause,
        closePlayer,
      }}
    >
      {children}
      <MusicPlayer />
    </MusicPlayerContext.Provider>
  );
};