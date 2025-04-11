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
import bb from "../public/bb.jpeg"
import sp from "../public/sp.jpeg"
import tr from "../public/tr.jpeg"
import ms from "../public/ms.jpeg"
import ci from "../public/ci.jpeg"
import fo from "../public/fo.jpeg" 
import pm from "../public/pm.jpeg"
import mh from "../public/mh.jpeg"
import rs from "../public/rs.jpeg"
import wh from "../public/wh.jpeg"
import GoogleMap from "../public/components/GoogleMap.tsx";



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
      image: ms,
      link:"https://docs.google.com/forms/d/e/1FAIpQLScWW7otrGhWQMpbs4L5YrDEBRV5BMi1M5NsLoQClOxfVv9VRQ/viewform"
     
    },
    {
      title: "Buzz Blitz",
      description: "A fast-paced technical quiz combined with a connection round where participants link clues to form engineering-related terms or concepts.",
      coed:"Student Coordinator ",
      name :"Thiru",
      no :"9566974598",
      name1 :"Vishnu",
      no1 :"9159830266",
      link:"https://docs.google.com/forms/d/e/1FAIpQLScx5k7j6Uk8MhL0ep3Ipt8PdE0ngOK7PIhAU4IMLEzaD5RtRw/viewform?usp=header",
      image: bb
  
    },
    {
      title: "Who Am I ?",
      description: "A guessing game where participants identify mechanical engineering terms based on sequentially revealed clues.",
      coed:"Student Coordinator ",
      name :"Anand",
      no :"9360378035",
      name1 :"Hariharan",
      no1 :"9445338220",
      link:"https://docs.google.com/forms/d/e/1FAIpQLScWN0N8r2pa6MwB7ywvj79T-M-ZFICGKREwIG00iI5Bt7G0SA/viewform",
      image: wh

    },
    {
    
      title: "Clash of Ideas",
      description: "Teams engage in a structured debate on current mechanical engineering challenges or innovations, honing critical thinking and communication skills.",
      coed:"Student Coordinator ",
      name :"Aarthi",
      no :"7538880346",
      name1 :"Sriram",
      no1 :"9443700344",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSeTUunTcJt4JDO7YDJ4jV3033WsQeDKl52lzhwToE9gpq0GAA/viewform",
      image: ci
    },
    {
      title: "Startup pitch",
      description: "Participants pitch creative ideas or startups to a panel of 'investors' (judges)",
      coed:"Student Coordinator ",
      name :"Lingesh",
      no :"9361961738",
      name1 :"Munishwaran",
      no1 :"9361103942",
      link:"https://docs.google.com/forms/d/e/1FAIpQLSesEgi6UVQ4BT3oxNJfza9MnXZmxCPR8eS8_tyVAbL_GofnGA/viewform",
      image: sp
    } 
  ];
 
const logos = [
  { src: msec, alt: "Institute Logo" },
  { src: yantra, alt: "Yantra 2K25" },
  { src: torque, alt: "TorqueX" },
 
];
  const nonTechnicalEvents = [
    {
      title: "Find Out",
      description: "A guessing game in which one member should act to guess the picture from another member ",
      image: fo,
      name :"Yadhavan",
      no :"9751579464",
      name1 :"Sriram Kannan",
      no1 :"7871759996",
      coed:"Student Coordinator ",
      link1:"https://docs.google.com/forms/d/e/1FAIpQLSeSsZjGEWZPQKG0t_n9Gp932IWe4w1Yf526nd4yE9vbS2t6Dg/viewform",
      
    },
    {
      title: "Picto memo",
      description: "A memory game in which the teams should write maximum number of objects from a scenery.",
      image: pm,
      name :"Tharun",
      no :"9342346062",
      name1 :"Yunis edwin",
      no1 :"7395956584",
      coed:"Student Coordinator ",
      link1:"https://docs.google.com/forms/d/e/1FAIpQLSeIh4SMdTQwNtEd3fvUUWbWgw34TD-1eZd5d3fu-hI0jz89eg/viewform",
    },
    {
      title: "Rapid Sketch",
      description: "A fun guessing game where team members interpret and identify technical components based on quick sketches drawn by teammates.",
      image: rs,
      name :"Tharun vignesh",
      no :"9080092239",
      name1 :"Mohana Vignesh",
      no1 :"9381171150",
      coed:"Student Coordinator ",
      link1:"https://docs.google.com/forms/d/e/1FAIpQLSe2pGPfgOD1OCPhy7zpjUMG2boeOgIk1q-A8w5154O3ENc2dw/viewform?usp=header"
    },
    {
      title: "Musical chair",
      description: "A game in which the participants to sit when the audio stops.",
      name :"Razeen",
      no :"9626154357",
      name1 :"Yogeshwaran",
      no1 :"7338830707",
      coed:"Student Coordinator ",
      link1:"https://docs.google.com/forms/d/e/1FAIpQLSejH-BDFinQxqTRMeTbbR8wux20HKae3FPzHMaOHRwtSCFDmw/viewform?usp=header",
      image:mh
    },
    {
      title: "Treasure Hunt",
      description: "A hunt with clues related to engineering or general knowledge.",
      image: tr,
      name :"Rahul Ram",
      no :"6381133082",
      name1 :"Vimal",
      no1 :"6369572408",
      link1:"https://docs.google.com/forms/d/e/1FAIpQLSdpBhe1NHw8Hn00zMTu7ObXRuHzeqfbixHpB4mebb1naPQY7Q/viewform?usp=header",
      coed:"Student Coordinator "
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
  <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 items-center justify-items-center">
        {logos.map((logo, index) => (
          <div 
            key={index} 
            className="w-full max-w-[200px] p-4 transition-transform duration-300 hover:scale-105"
          >
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
</div>

        {/* Navigation */}
        <nav className="bg-black/0 backdrop-blur-sm  border-b border-yellow-400/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold">YANTRA 2K25</h1>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-10">
                <Link to="/" className="hover:text-yellow-400 transition">HOME</Link>
                <a href="#events" className="hover:text-yellow-400 transition">EVENTS</a>
                {/* <a href="#sponsors" className="hover:text-yellow-400 transition">Sponsors</a> */}
                <Link to="/about" className="hover:text-yellow-400 transition">ABOUT</Link>
                <a href="#contact" className="hover:text-yellow-400 transition">CONTACT</a>
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
                  {/* <a href="#sponsors" className="hover:text-yellow-400 transition">Sponsors</a> */}
                  <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                  <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative pt-10 flex items-center justify-center text-center">
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
                  <li>• Registration deadline: April 14th</li>
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
                    <div className="relative mb-4 overflow-hidden rounded-lg md:flex md:items-center md: mb-4">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-64 md:h-80 md:w-full object-cover transform group-hover:scale-110 transition duration-500"
                      />

                    </div>
                    <h3 className="text-xl text-yellow-400 font-bold text-center mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-center mb-4">{event.description}</p>
                    <h3 className="text-xl text-yellow-400 text-center mb-3">{event.coed}</h3>
                    <div className="sm:grid sm:grid-cols-2 flex cols-2 mb-2" ><p>{event.name} <br></br>contact: {event.no}</p> <p className="  md:text-right ml-20 ">{event.name1}<br></br>contact: {event.no1}</p></div>
                     <a href={event.link}><button className="w-full bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-300 transition">
                      Register
                    </button></a>
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
                        className="w-full h-64 md:full object-cover transform group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <h3 className="text-xl text-yellow-400 font-bold text-center mb-2">{event.title}</h3>
                    <p className="text-gray-300 text-center mb-4">{event.description}</p>
                    <h3 className="text-xl text-yellow-400 text-center mb-3">{event.coed}</h3>
                    {/* <div className="md:grid md:grid-cols-2 flex cols-2 mb-2" ><p>{event.name} <br></br>contact:{event.no}</p> <p className="md:text-right  ml-20 "> {event.name1}<br></br>contact:{event.no1}</p></div> */}
                    <div className="sm:grid sm:grid-cols-2 flex cols-2 mb-2" ><p>{event.name} <br></br>contact: {event.no}</p> <p className="  md:text-right ml-20 ">{event.name1}<br></br>contact: {event.no1}</p></div>
                    <a href={event.link1}><button  className="w-full bg-yellow-400 text-black px-4 py-2 rounded font-bold hover:bg-yellow-300 transition">
                    Register
                    </button></a>
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
   
        {/* Staff Section */}
        <section id="contact" className="py-20 bg-black/50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Department</h2>

            {/* Department Heads */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Head of Department</h3>
                <p className="text-lg">Dr. S. SanthanaKrishnan</p>
                <p className="text-lg">Contact:  90038 46046</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">Assistant HOD</h3>
                <p className="text-lg">Mr. K. Ayyanar</p>
                <p className="text-lg">Contact:   +91 7604800911</p>
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
                <h4 className="font-bold mb-2">Student Coordinator 1</h4>
                <p>Vignesh</p>
                <p className="text-sm text-gray-400">Contact: +91 7708929927</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Student Coordinator 2</h4>
                <p>Srikanth</p>
                <p className="text-sm text-gray-400">Contact: +91 7200064438</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Student Coordinator 3</h4>
                <p>Hadson vimal</p>
                <p className="text-sm text-gray-400">Contact: +91 8122861175</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2"> Student Coordinator 4</h4>
                <p>Venkat Prabhu R</p>
                <p className="text-sm text-gray-400">Contact: +91 7010492020 </p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Student Coordinator 5</h4>
                <p>Yuvan shankar T</p>
                <p className="text-sm text-gray-400">Contact: +91 9150823211</p>
              </div>
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="font-bold mb-2">Student Coordinator 6</h4>
                <p>P karthikeyan</p>
                <p className="text-sm text-gray-400">Contact: +919940020432</p>
              </div>
              
            </div>
          </div>
        </section>
       <section id="contact" className="py-16 bg-black/50 backdrop-blur-sm">        
        <div className="w-full max-w-3xl mx-auto rounded-lg shadow-lg bg-black/70 sm:p-20 p-9">
        <div className="flex items-center gap-2 mb-4">
         <MapPin className="w-6 h-6 text-blue-500" />
         <h1 className="text-2xl font-bold text-gray-200">College Location</h1>
        </div>
        <p className="text-gray-400 mb-6">
            Meenakshi Sundararajan Engineering College, Kodambakkam, Chennai
        </p>
          <GoogleMap />
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
  <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-1 items-center">
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
