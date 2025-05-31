import React from 'react';
import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

type Artist = {
  id: string;
  name: string;
  photo: string;
  genre: string;
  followers: string;
};

export const Artists: React.FC = () => {
  const artists: Artist[] = [
    {
      id: 'artist-1',
      name: 'Aria Nova',
      photo: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Electronic Pop',
      followers: '1.2M',
    },
    {
      id: 'artist-2',
      name: 'Midnight Pulse',
      photo: 'https://images.pexels.com/photos/1427741/pexels-photo-1427741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Synthwave',
      followers: '845K',
    },
    {
      id: 'artist-3',
      name: 'Echo Valley',
      photo: 'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      genre: 'Indie Folk',
      followers: '620K',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="artists" className="py-16 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Artists</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Meet the talented creators behind your favorite tracks and discover
            their unique musical journeys.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {artists.map((artist) => (
            <motion.div
              key={artist.id}
              variants={item}
              className="relative group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src={artist.photo}
                  alt={artist.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-bold mb-1">{artist.name}</h3>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-300">{artist.genre}</span>
                      <span className="text-sm text-primary-400">{artist.followers} followers</span>
                    </div>
                    <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 text-white font-medium bg-primary-500/80 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-primary-500 transition-colors duration-300"
                      >
                        View Profile <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-primary-500 text-primary-400 rounded-full hover:bg-primary-500/10 transition-all duration-300 font-semibold">
            Discover More Artists
          </button>
        </div>
      </div>
    </section>
  );
};