import React from 'react';
import { Play, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { AudioVisualizer } from './AudioVisualizer';
import { useMusicPlayer } from '../context/MusicPlayerContext';

export const Hero: React.FC = () => {
  const { playTrack } = useMusicPlayer();

  const handleDemoPlay = () => {
    playTrack({
      id: 'demo-1',
      title: 'Summer Vibes',
      artist: 'Electronic Dreams',
      cover: 'https://images.pexels.com/photos/1647975/pexels-photo-1647975.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    });
  };

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary-500/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary-500/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              <span className="block">Discover the</span>
              <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                Future of Music
              </span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Immerse yourself in a world of high-quality sound, exclusive releases, and personalized music recommendations.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleDemoPlay}
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center gap-2 hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-primary-500/25"
              >
                <Play className="h-5 w-5" /> Play Demo
              </button>
              <button className="px-6 py-3 bg-dark-600 border border-gray-700 rounded-full flex items-center gap-2 hover:bg-dark-500 transition-all duration-300 font-semibold">
                <Download className="h-5 w-5" /> Download App
              </button>
            </div>
          </motion.div>

          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Music Experience" 
                  className="w-64 h-64 object-cover rounded-full border-4 border-primary-500/30 shadow-xl shadow-primary-500/20 animate-float"
                />
              </div>
              <AudioVisualizer />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};