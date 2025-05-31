import React, { useEffect, useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMusicPlayer } from '../context/MusicPlayerContext';

export const MusicPlayer: React.FC = () => {
  const { currentTrack, isPlaying, togglePlayPause, closePlayer } = useMusicPlayer();
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
      interval = window.setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isPlaying]);

  if (!currentTrack) return null;

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseInt(e.target.value));
    if (parseInt(e.target.value) === 0) {
      setIsMuted(true);
    } else if (isMuted) {
      setIsMuted(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-dark-800/95 backdrop-blur-md border-t border-dark-600"
      >
        <div className="container mx-auto px-4">
          <div className="py-4 flex items-center">
            {/* Album Art and Info */}
            <div className="flex items-center flex-1 mr-4">
              <div className="w-12 h-12 rounded-md overflow-hidden mr-3 flex-shrink-0">
                <img 
                  src={currentTrack.cover} 
                  alt={currentTrack.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm truncate">{currentTrack.title}</h4>
                <p className="text-gray-400 text-xs truncate">{currentTrack.artist}</p>
              </div>
            </div>

            {/* Player Controls */}
            <div className="hidden md:flex flex-col items-center flex-1">
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipBack className="h-5 w-5" />
                </button>
                <button 
                  onClick={togglePlayPause}
                  className="p-2 bg-primary-500 rounded-full hover:bg-primary-600 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </button>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <SkipForward className="h-5 w-5" />
                </button>
              </div>
              
              <div className="w-full max-w-md mt-2 px-4">
                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Volume Control */}
            <div className="hidden lg:flex items-center space-x-2 flex-1 justify-end">
              <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors">
                {isMuted || volume === 0 ? (
                  <VolumeX className="h-5 w-5" />
                ) : (
                  <Volume2 className="h-5 w-5" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 accent-primary-500"
              />
              <button
                onClick={closePlayer}
                className="ml-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Mobile Play Button */}
            <div className="flex md:hidden items-center">
              <button 
                onClick={togglePlayPause}
                className="p-2 bg-primary-500 rounded-full hover:bg-primary-600 transition-colors mr-2"
              >
                {isPlaying ? (
                  <Pause className="h-5 w-5" />
                ) : (
                  <Play className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={closePlayer}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};