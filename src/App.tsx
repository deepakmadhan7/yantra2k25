import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, MapPin, Bus, Code, Music, Brain, Gamepad, Mic, Camera, Rocket, AlertCircle, Calendar, Wallet, ChevronLeft, ChevronRight, Database, Notebook as Robot, Contact } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import bg from "../public/bg.mp4"
import yantra from "../public/yantra3.png"
import torque from "../public/torque3.png"
import msec from "../public/msec3.png"
import l from "../public/l.png"

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  const technicalEvents = [
    {
      title: "Mindspark",
      description: "Participants present their research or innovative ideas on engineering topics, showcasing analytical and presentation skills.",
      coed:"Student Coordinator ",
      name :"Aananthi",
      no :"9444432730",
      name1 :"Dilli ganesh",
      no1 :"9361103942",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
      icon: Gamepad
     
    },
    {
      title: "Buzz Blitz",
      description: "A fast-paced technical quiz combined with a connection round where participants link clues to form engineering-related terms or concepts.",
      coed:"Student Coordinator ",
      name :"Thiru",
      no :"9566974598",
      name1 :"Vishnu",
      no1 :"9159830266",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
      icon: Camera
    },
    {
      title: "Who Am I ?",
      description: "A guessing game where participants identify mechanical engineering terms based on sequentially revealed clues.",
      coed:"Student Coordinator ",
      name :"Anand",
      no :"9360378035",
      name1 :"Hariharan",
      no1 :"9445338220",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80",
      icon: Mic
    },
    {
    
      title: "Clash of Ideas",
      description: "Teams engage in a structured debate on current mechanical engineering challenges or innovations, honing critical thinking and communication skills.",
      coed:"Student Coordinator ",
      name :"Aarthi",
      no :"7538880346",
      name1 :"Sriram",
      no1 :"9443700344",
      image: "https://images.unsplash.com/photo-1543536448-d209d2d13a1c?auto=format&fit=crop&w=800&q=80",
      icon: Camera
    },
    {
      title: "Startup pitch",
      description: "Participants pitch creative ideas or startups to a panel of 'investors' (judges)",
      coed:"Student Coordinator ",
      name :"Lingesh",
      no :"9361961738",
      name1 :"Munishwaran",
      no1 :"9361103942",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80",
      icon: Music
    } 
  ];

  const nonTechnicalEvents = [
    {
      title: "Find Out",
      description: "A guessing game in which one member should act to guess the picture from another member ",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
      name :"Yadhavan",
      no :"9751579464",
      name1 :"Sriram Kannan",
      no1 :"7871759996",
      coed:"Student Coordinator ",
      icon: Code,
      link:"https://docs.google.com/forms/d/e/1FAIpQLSc_i9eBP3RywTdOUBQYShw1y_NiPguiWoWQ8fkUsQP1FVKWUA/viewform?usp=dialog",
      
    },
    {
      title: "Picto memo",
      description: "A memory game in which the teams should write maximum number of objects from a scenery.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
      name :"Tharun",
      no :"9342346062",
      name1 :"Yunis edwin",
      no1 :"7395956584",
      coed:"Student Coordinator ",
      icon: Brain,
      link:"https://docs.google.com/forms/d/e/1FAIpQLSc_i9eBP3RywTdOUBQYShw1y_NiPguiWoWQ8fkUsQP1FVKWUA/viewform?usp=dialog",
    },
    {
      title: "Rapid Sketch",
      description: "A fun guessing game where team members interpret and identify technical components based on quick sketches drawn by teammates.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
      name :"Tharun vignesh",
      no :"9080092239",
      name1 :"Mohana Vignesh",
      no1 :"9381171150",
      coed:"Student Coordinator ",
      icon: Rocket
    },
    {
      title: "Musical chair",
      description: "A game in which the participants to sit when the audio stops.",
      name :"Razeen",
      no :"9626154357",
      name1 :"Yogrshwaran",
      no1 :"7338830707",
      coed:"Student Coordinator ",
      image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
      icon: Database
    },
    {
      title: "Treasure Hunt",
      description: "A hunt with clues related to engineering or general knowledge.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      name :"Ragul Ram",
      no :"6381133082",
      name1 :"Vimal",
      no1 :"6369572408",
      coed:"Student Coordinator ",
      icon: Robot
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white relative">
      {/* Full-screen background video using local file from public folder */}
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
          style={{ filter: 'brightness(0.75)' }}
        >
          {/* Using the video from the public folder instead of Vimeo */}
          <source src={bg} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">
        {/* Top Logo Bar */}
        <div className="relative z-10">
  {/* Top Logo Bar */}
  <div className="bg-black/0 backdrop-blur-sm py-2">
    <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={msec} alt="MSEC Logo" className="h-40 w-45 opacity-100" />
      </div>

      {/* Event Name with Spinning Icon */}
      <div className="flex items-center space-x-2">
        <img src={yantra} alt="MSEC Logo" className="w-58 h-60 text-yellow-400 animate-rotate-slow" />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        <img src={torque} alt="MSEC Logo" className="w-50 h-40 text-yellow-400" />
      </div>
    </div>
  </div>
</div>

        {/* Navigation */}
        <nav className="bg-black/0 backdrop-blur-sm py-2 border-b border-yellow-400/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">YANTRA 2K25</h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                <a href="#events" className="hover:text-yellow-400 transition">Events</a>
                <a href="#sponsors" className="hover:text-yellow-400 transition">Sponsors</a>
                <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
              </div>

              {/* Mobile Menu Button */}
              <button onClick={toggleMenu} className="md:hidden">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                  <a href="#events" className="hover:text-yellow-400 transition">Events</a>
                  <a href="#sponsors" className="hover:text-yellow-400 transition">Sponsors</a>
                  <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                  <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pt-1 md min-h-screen flex items-center justify-center text-center">
          <div className="relative z-10 max-w-4xl mx-auto px-4 bg-black/0 py-12 rounded-lg backdrop-blur-sm">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meenakshi Sundararajan Engineering College
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
              YANTRA 2K25
            </h2>
            <p className="text-xl md:text-2xl mb-8">
              A National Level Technical Symposium
                       (April 16th)
            </p>
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition"> <a href="#events" 
             >Register Now</a>
            </button>
          </div>
        </section>

        {/* Important Instructions Section */}
        <section className="py-16 bg-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-center mb-8">
              <AlertCircle className="text-yellow-400 w-8 h-8 mr-3" />
              <h2 className="text-3xl font-bold text-center">Important Instructions</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition">
                <div className="flex items-center mb-4">
                  <Calendar className="text-yellow-400 w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">Event Date</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• April 16th, 2025</li>
                  <li>• Registration deadline: April 10th</li>
                  {/* <li>• Reporting time: 8:30 AM</li> */}
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition">
                <div className="flex items-center mb-4">
                  <Wallet className="text-yellow-400 w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">Registration Details</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Registration fee: Free</li>
                  {/* <li>• Register fee</li> */}
                  <li>• Includes lunch and refreshments</li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 rounded-lg border border-yellow-400/20 hover:border-yellow-400/40 transition">
                <div className="flex items-center mb-4">
                  <AlertCircle className="text-yellow-400 w-6 h-6 mr-3" />
                  <h3 className="text-xl font-semibold">Requirements</h3>
                </div>
                <ul className="space-y-2 text-gray-300">
                  <li>• Valid college ID card mandatory</li>
                  {/* <li>• Laptop required for coding events</li> */}
                  <li>• Professional dress code</li>
                </ul>
              </div>
            </div>

            <div className="mt-12 bg-yellow-400/10 p-6 rounded-lg border border-yellow-400/20">
              <h3 className="text-xl font-semibold mb-4 text-yellow-400">How To Reach Us</h3>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Train : Near Kodambakkam Railway Station
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2">•</span>
                  Bus : Near Liberty Bus Stop
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Events Section */}
        <section id="events" className="py-20">
          {/* Technical Events */}
          <div className="max-w-6xl mx-auto px-4 mb-20">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Technical Events</h2>
            <Swiper
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-360%', 0, -500],
                  rotate: [0, 0, -90],
                },
                next: {
                  shadow: true,
                  translate: ['360%', 0, -500],
                  rotate: [0, 0, 90],
                },
              }}
              grabCursor={true}
              modules={[EffectCreative, Navigation, Pagination]}
              className="w-full"
              navigation={{
                prevEl: '.swiper-button-prev-tech',
                nextEl: '.swiper-button-next-tech',
              }}
              pagination={{
                clickable: true,
              }}
            >
              {technicalEvents.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <event.icon className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                    <h3 className="text-xl text-yellow-400 font-bold text-center mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-center mb-4">{event.description}</p>
                    <h3 className="text-xl text-yellow-400 text-center mb-4">{event.coed}</h3>
                    <div className=" grid md:grid-cols-2  " ><p>Name :{event.name} <br></br>contact:{event.no}</p> <p className=" text-right ml-12 ">Name : {event.name1}<br></br>contact:{event.no1}</p></div>
                    <button className="w-full bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-300 transition">
                      Register
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons for Technical Events */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="swiper-button-prev-tech bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="swiper-button-next-tech bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Non-Technical Events */}
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Non-Technical Events</h2>
            <Swiper
              effect={'creative'}
              creativeEffect={{
                prev: {
                  shadow: true,
                  translate: ['-360%', 0, -500],
                  rotate: [0, 0, -90],
                },
                next: {
                  shadow: true,
                  translate: ['360%', 0, -500],
                  rotate: [0, 0, 90],
                },
              }}
              grabCursor={true}
              modules={[EffectCreative, Navigation, Pagination]}
              className="w-full"
              navigation={{
                prevEl: '.swiper-button-prev-nontech',
                nextEl: '.swiper-button-next-nontech',
              }}
              pagination={{
                clickable: true,
              }}
            >
              {nonTechnicalEvents.map((event, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-white/10 p-10 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                    <div className="relative mb-4 overflow-hidden rounded-lg">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <event.icon className="w-8 h-8 text-yellow-400" />
                      </div>
                    </div>
                    <h3 className="text-xl text-yellow-400 font-bold text-center mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-center mb-4">{event.description}</p>
                    <h3 className="text-xl text-yellow-400 text-center mb-4">{event.coed}</h3>
                    <div className="sm:flex sm:cls-2 md:ml-1 m-3" ><p>Name :{event.name} <br></br>contact:{event.no}</p> <p className=" text-right ml-12 ">Name : {event.name1}<br></br>contact:{event.no1}</p></div>
                    <button className="w-full bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-300 transition">
                     <a href={event.link}>Register</a> 
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons for Non-Technical Events */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button className="swiper-button-prev-nontech bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button className="swiper-button-next-nontech bg-yellow-400 text-black p-3 rounded-full hover:bg-yellow-300 transition">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-20 bg-black/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16 text-yellow-400">Our Sponsors</h2>

            {/* Platinum Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Platinum Sponsors</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?auto=format&fit=crop&w=800&q=80"
                    alt="Tech Corp Logo"
                    className="w-full h-32 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
                    alt="Innovation Labs Logo"
                    className="w-full h-32 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=800&q=80"
                    alt="Future Systems Logo"
                    className="w-full h-32 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
              </div>
            </div>

            {/* Gold Sponsors */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Gold Sponsors</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80"
                    alt="Digital Solutions Logo"
                    className="w-full h-24 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80"
                    alt="Tech Innovators Logo"
                    className="w-full h-24 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1554774853-719586f82d77?auto=format&fit=crop&w=800&q=80"
                    alt="Future Tech Logo"
                    className="w-full h-24 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                  <img
                    src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=800&q=80"
                    alt="Next Gen Systems Logo"
                    className="w-full h-24 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                  />
                </div>
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Silver Sponsors</h3>
              <div className="grid md:grid-cols-5 gap-4">
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg backdrop-blur-sm hover:bg-white/20 transition group">
                    <img
                      src={`https://images.unsplash.com/photo-${1550000000000 + index}?auto=format&fit=crop&w=800&q=80`}
                      alt={`Silver Sponsor ${index + 1}`}
                      className="w-full h-20 object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Sponsor CTA */}
            {/* <div className="mt-16 text-center"> 
              <h3 className="text-2xl font-bold mb-4">Become a Sponsor</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join us in fostering innovation and supporting the next generation of engineers.
                Contact us to learn about our sponsorship packages and benefits.
              </p>
              <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
                Get Sponsorship Details
              </button>
            </div>*/}
          </div>
        </section>

        {/* Staff Section */}
        <section id="contact" className="py-20 bg-black/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Department</h2>

            {/* Department Heads */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Head of Department</h3>
                <p className="text-lg">Dr. S. Kamatchi Sankaran</p>
                <p className="text-lg">Contact: 9751339664</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Assistant HOD</h3>
                <p className="text-lg">Dr. S. SanthanaKrishnan</p>
                <p className="text-lg">Contact:  90038 46046</p>
              </div>
            </div>

            {/* Staff Coordinators */}
            <h3 className="text-2xl font-bold text-center mb-8">Staff Coordinators</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg">Mr. K. Ayyanar</p>
                <p className="text-sm text-gray-400">Contact: +91 7604800911 </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <p className="text-lg">Mr. K. Rajkumar</p>
                <p className="text-sm text-gray-400">Contact: +91 8695152412</p>
              </div>
            </div>

            {/* Student Coordinators */}
            <h3 className="text-2xl font-bold text-center mb-8">Student Coordinators</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">President</h4>
                <p>Vignesh</p>
                <p className="text-sm text-gray-400">Contact: +91 7708929927</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Vice President</h4>
                <p>Srikanth</p>
                <p className="text-sm text-gray-400">Contact: +91 7200064438</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Technical Head</h4>
                <p>Hadson vimal</p>
                <p className="text-sm text-gray-400">Contact: +91 8122861175</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2"> Technical Head</h4>
                <p>Venkat Prabhu R</p>
                <p className="text-sm text-gray-400">Contact: +91 7010492020 </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Non Technical Head</h4>
                <p>Yuvan shankar T</p>
                <p className="text-sm text-gray-400">Contact: +91 9150823211</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Non Technical Head</h4>
                <p>P karthikeyan</p>
                <p className="text-sm text-gray-400">Contact: +919940020432</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black/80 backdrop-blur-sm py-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <MapPin className="text-yellow-400" />
                <p>Arcot Road, Kodambakkam, Chennai-24</p>
              </div>
              <div className="flex items-center space-x-4">
                <Bus className="text-yellow-400" />
                <p>Easily accessible by public transport</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <p>© 2025 Meenakshi Sundararajan Engineering College. All rights reserved.</p>
              <div className="text-left mt-8">
              <div className="text-left mt-8">
  <p className="font-bold text-lg mb-4">Developers</p>
  <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 gap-1 items-center">
    <a href="https://www.linkedin.com/in/deepak-m-2a72472a2" target="_blank" className="flex flex-col items-center space-y-2">
      <img src="l.png" alt="Deepak M - LinkedIn" className="h-10 w-10" />
      <span className="text-center">Deepak M</span>
    </a>
    <a href="https://www.linkedin.com/in/jaiakash-r-1779a92a1" target="_blank" className="flex flex-col items-center space-y-2">
      <img src="l.png" alt="Jaiakash R - LinkedIn" className="h-10 w-10" />
      <span className="text-center">Jaiakash R</span>
    </a>
    <a href="https://www.linkedin.com/in/aadhithya-narayanan-k-s-29a3a5344" target="_blank" className="flex flex-col items-center space-y-2">
      <img src="l.png" alt="Aadhithya Narayanan K S - LinkedIn" className="h-10 w-10" />
      <span className="text-center">Aadhithya Narayanan</span>
    </a>
    <a href="https://www.linkedin.com/in/your-profile" target="_blank" className="flex flex-col items-center space-y-2">
      <img src="l.png" alt="Ramasubramanian - LinkedIn" className="h-10 w-10" />
      <span className="text-center">Rama   subramanian</span>
    </a>
  </div>
</div>
</div>

             
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;