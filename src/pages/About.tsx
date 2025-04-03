import React from 'react';
import { Award, Users, Globe, Lightbulb, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ab from './ab.jpeg'

function About() {
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const pages = [
    {
      title: "Welcome to YANTRA 2K25",
      content: "YANTRA 2K25 is the flagship technical symposium of Meenakshi Sundararajan Engineering College, bringing together the brightest minds in engineering to compete, collaborate, and innovate.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Our Legacy",
      content: "Since its inception, YANTRA has been at the forefront of technical innovation in collegiate events. Our symposium has grown from a small departmental event to a nationally recognized platform for showcasing engineering talent.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Events & Competitions",
      content: "From innovative challenges to fun competitions, YANTRA 2K25 offers a diverse range of events that cater to various engineering disciplines. Our events are designed to test skills, foster innovation, and promote healthy competition.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Innovation Hub",
      content: "YANTRA 2K25 features cutting-edge technical events, workshops, and competitions aligned with industry trends. From AI and robotics to sustainable technology, we cover the full spectrum of modern engineering challenges.",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "National Recognition",
      content: "With participation from over 100 colleges across India, YANTRA has established itself as one of the most prestigious technical symposiums in the country. Our events attract talent from all corners of the nation.",
      image: "https://images.unsplash.com/photo-1517732306149-e8f829eb588a?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Full-screen background video */}
      <div className="fixed inset-0 w-full h-full z-0">
        {!isVideoLoaded && (
          <div className="absolute inset-0 bg-black animate-pulse"></div>
        )}
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={handleVideoLoad}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.15)' }}
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/1080p?loc=external&oauth2_token_id=1747418641&signature=cf0f8447e4f4bd2912bc419b5c121f418eb7e2c018d2c689b7d61c1c8438f238" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <Link to="/" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 mb-8">
            <ChevronLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">About YANTRA 2K25</h1>

          {/* Rest of the content remains unchanged */}
          <div className="max-w-4xl mx-auto mb-16">
            <Swiper
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-120%', 0, -500],
                  rotate: [0, 0, -90],
                },
                next: {
                  shadow: true,
                  translate: ['120%', 0, -500],
                  rotate: [0, 0, 90],
                },
              }}
              grabCursor={true}
              modules={[EffectCreative, Navigation, Pagination]}
              className="w-full"
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + ' bg-yellow-400"></span>';
                },
              }}
            >
              {pages.map((page, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-black/30 rounded-lg overflow-hidden backdrop-blur-sm">
                    <div className="relative h-64">
                      <img 
                        src={ab} 
                        alt={page.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50"></div>
                      <h2 className="absolute bottom-0 left-0 right-0 p-6 text-3xl font-bold bg-gradient-to-t from-black/80">
                        {page.title}
                      </h2>
                    </div>
                    <div className="p-8">
                      <p className="text-lg text-gray-300 leading-relaxed">
                        {page.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="swiper-button-prev bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="swiper-button-next bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Event Highlights */}
          <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Event Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
                <div className="text-gray-300">Technical Events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">5</div>
                <div className="text-gray-300">Non technical events</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">Exicted prizes</div>
                <div className="text-gray-300">for all participants</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/" 
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition inline-block"
            ><a href="#events" 
            >Register Now</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;