import React from 'react';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  attendees: string;
};

export const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 'event-1',
      title: 'Summer Music Festival',
      date: 'June 15, 2025',
      time: '4:00 PM',
      location: 'Central Park, New York',
      image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      attendees: '5.2K',
    },
    {
      id: 'event-2',
      title: 'Electronic Beats Night',
      date: 'July 8, 2025',
      time: '9:00 PM',
      location: 'Club Neon, Los Angeles',
      image: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      attendees: '1.8K',
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
    <section id="events" className="py-16 relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Experience the magic of live music with our carefully curated events
            featuring your favorite artists.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={item}
              className="bg-dark-700/50 backdrop-blur-sm border border-dark-600 rounded-xl overflow-hidden hover:border-secondary-500/50 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5">
                  <div className="relative h-48 md:h-full">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-dark-800/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-3/5 p-6">
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <Calendar className="h-4 w-4 text-secondary-400" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <Clock className="h-4 w-4 text-secondary-400" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-300">
                      <MapPin className="h-4 w-4 text-secondary-400" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <button className="w-full py-2 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-lg font-medium hover:from-secondary-600 hover:to-primary-600 transition-all duration-300">
                      Get Tickets
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border border-secondary-500 text-secondary-400 rounded-full hover:bg-secondary-500/10 transition-all duration-300 font-semibold">
            View All Events
          </button>
        </div>
      </div>
    </section>
  );
};