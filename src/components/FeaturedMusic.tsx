import React from 'react';
import { Play, Heart, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useMusicPlayer } from '../context/MusicPlayerContext';
import { Track } from '../types';

export const FeaturedMusic: React.FC = () => {
  const { playTrack } = useMusicPlayer();

  const featuredTracks: Track[] = [
    {
      id: 'track-1',
      title: 'Midnight Dreams',
      artist: 'Luna Echo',
      cover: 'https://images.pexels.com/photos/1671630/pexels-photo-1671630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Electronic',
      duration: '3:45',
    },
    {
      id: 'track-2',
      title: 'Neon City',
      artist: 'Cyber Wave',
      cover: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Synthwave',
      duration: '4:12',
    },
    {
      id: 'track-3',
      title: 'Desert Journey',
      artist: 'Ambient Tales',
      cover: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Ambient',
      duration: '5:30',
    },
    {
      id: 'track-4',
      title: 'Ocean Waves',
      artist: 'Chill Masters',
      cover: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Chillout',
      duration: '3:58',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="music" className="py-16 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Tracks</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Discover the latest and greatest tracks from our curated collection.
            Click on any track to listen to a preview.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredTracks.map((track) => (
            <motion.div
              key={track.id}
              variants={item}
              className="bg-dark-700/50 backdrop-blur-sm rounded-xl overflow-hidden border border-dark-600 hover:border-primary-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={track.cover}
                  alt={track.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => playTrack(track)}
                    className="p-3 bg-primary-500 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300 hover:bg-primary-600"
                  >
                    <Play className="h-6 w-6" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{track.artist}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-dark-600 px-2 py-1 rounded-full">
                    {track.genre}
                  </span>
                  <span className="text-xs text-gray-400">{track.duration}</span>
                </div>
                <div className="flex justify-between mt-4">
                  <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    <Heart className="h-5 w-5" />
                  </button>
                  <button className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                    <Share2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-primary-500 text-primary-400 rounded-full hover:bg-primary-500/10 transition-all duration-300 font-semibold">
            View All Tracks
          </button>
        </div>
      </div>
    </section>
  );
};