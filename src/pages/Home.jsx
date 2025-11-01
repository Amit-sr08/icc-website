import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../assets/pics/logo.png'
import videoSrc from '../assets/pics/icc.mp4'
import img1 from '../assets/pics/image.png'
import img2 from '../assets/pics/image copy.png'
import img3 from '../assets/pics/image copy 2.png'
import img4 from '../assets/pics/image copy 3.png'
import img5 from '../assets/pics/image copy 4.png'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroSloganIndex, setHeroSloganIndex] = useState(0)
  const [heroVisible, setHeroVisible] = useState(true)
  const autoRef = useRef(null)

  const toppers = [
    {
      name: 'Rajesh Kumar',
      exam: 'NEET 2025',
      score: '720/720',
      rank: 'AIR 45',
      image: 'https://via.placeholder.com/200x250?text=Student+1',
    },
    {
      name: 'Priya Sharma',
      exam: 'NEET 2025',
      score: '715/720',
      rank: 'AIR 89',
      image: 'https://via.placeholder.com/200x250?text=Student+2',
    },
    {
      name: 'Amit Patel',
      exam: 'JEE Mains 2025',
      score: '345/360',
      rank: 'AIR 156',
      image: 'https://via.placeholder.com/200x250?text=Student+3',
    },
    {
      name: 'Sneha Reddy',
      exam: 'NEET 2025',
      score: '710/720',
      rank: 'AIR 234',
      image: 'https://via.placeholder.com/200x250?text=Student+4',
    },
  ]

  const highlights = [
    {
      icon: '🎯',
      title: 'Top NEET Results',
      description: 'Consistently producing top rankers in NEET with expert guidance.',
    },
    {
      icon: '👨‍🏫',
      title: 'Expert Faculty',
      description: 'Experienced teachers with proven track records in competitive exams.',
    },
    {
      icon: '📚',
      title: 'Comprehensive Study Material',
      description: 'Well-structured study materials and regular assessments.',
    },
    {
      icon: '🏫',
      title: 'Modern Classrooms',
      description: 'Fully equipped classrooms with modern teaching aids.',
    },
  ]

  // Gallery slogans in Marathi to overlay on images
  const gallerySlogans = [
    'Udgirचा गर्व — ICC',
    'तंत्र + ममता = परिणाम',
    'रोज 1 तास अतिरिक्त — फरक दिसेल',
    'नोट्स आणि चहा — आयुष्याचे मूळ घटक',
    'स्वप्न बघा. मेहनत करा. यश मिळवा.'
  ]

  // Hero slogans (auto-rotating every 5s; manual controls also supported)
  const heroSlogans = [
    'स्वप्न बघा. मेहनत करा. यश मिळवा.',
    'शिक्षण हे उज्ज्वल भविष्यातील चावी आहे',
    'आत्मविश्वास घ्या — पुढे चला!',
    'ज्ञानाची वाट हाकते — चला!',
    'लहान पाऊल — मोठा बदल',
    'नेहमी पुढे पाहा, मागे नव्हे'
  ]

  // start/stop auto-rotation
  const startAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(() => {
      // fade out, change, fade in
      setHeroVisible(false)
      setTimeout(() => {
        setHeroSloganIndex((i) => (i + 1) % heroSlogans.length)
        setHeroVisible(true)
      }, 450)
    }, 5000)
  }

  useEffect(() => {
    startAuto()
    return () => {
      if (autoRef.current) clearInterval(autoRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [heroSlogans.length])

  const goToIndex = (idx) => {
    if (autoRef.current) clearInterval(autoRef.current)
    setHeroVisible(false)
    setTimeout(() => {
      setHeroSloganIndex((idx + heroSlogans.length) % heroSlogans.length)
      setHeroVisible(true)
      startAuto()
    }, 250)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % toppers.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [toppers.length])

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-primary-red via-red-600 to-primary-darkBlue text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center" data-aos="fade-up">
            <div className="mx-auto mb-8 flex justify-center">
              <img
                src={logoImage}
                alt="Icchapurti Coaching Classes Logo"
                className="h-40 md:h-48 w-auto object-contain drop-shadow-2xl"
              />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Transform Your Future at Icchapurti
            </h1>
            <p className="text-2xl md:text-3xl mb-8 font-light text-amber-100">
              Where Learning Blossoms Into Success
            </p>
            <div className="flex items-center justify-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="100">
              <button
                onClick={() => goToIndex(heroSloganIndex - 1)}
                aria-label="Previous slogan"
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className={`px-6 py-4 bg-white/5 backdrop-blur-sm rounded-full text-yellow-100 font-bold text-xl md:text-2xl lg:text-3xl transition-all duration-500 ${heroVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                {heroSlogans[heroSloganIndex]}
              </div>

              <button
                onClick={() => goToIndex(heroSloganIndex + 1)}
                aria-label="Next slogan"
                className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full shadow-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary px-8 py-4 text-lg shadow-xl hover:scale-105"
              >
                Join Now
              </Link>
              <Link
                to="/contact"
                className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Talk to Our Experts
              </Link>
              <a
                href="#"
                className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                Download Brochure
              </a>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24">
            <path
              d="M0 120L50 110C100 100 200 80 300 70C400 60 500 60 600 65C700 70 800 80 900 85C1000 90 1100 90 1150 90L1200 90V120H1150C1100 120 1000 120 900 120C800 120 700 120 600 120C500 120 400 120 300 120C200 120 100 120 50 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white/50">
        <div className="site-container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Experience Excellence at ICC
              </h2>
              <p className="text-xl text-gray-600/90 max-w-2xl mx-auto">
                Watch how we transform students' lives through quality education and dedicated mentorship
              </p>
            </div>
            
            <div 
              className="relative card overflow-hidden bg-black"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Video Player */}
              <div className="relative h-[82vh]">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  controlsList="nodownload"
                  poster=""
                >
                  <source src={videoSrc} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Optional overlay for additional styling */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none"></div>
              </div>
              
              {/* Video Info Badge */}
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full font-semibold shadow-lg">
                🎓 Our Story
              </div>
            </div>
            
            {/* Video Stats/Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center card p-6" data-aos="fade-up" data-aos-delay="100">
                <div className="text-4xl font-serif font-bold text-amber-800 mb-2">500+</div>
                <div className="text-sm text-gray-600/90">Happy Students</div>
              </div>
              <div className="text-center card p-6" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl font-serif font-bold text-amber-800 mb-2">100+</div>
                <div className="text-sm text-gray-600/90">Top Rankers</div>
              </div>
              <div className="text-center card p-6" data-aos="fade-up" data-aos-delay="300">
                <div className="text-4xl font-serif font-bold text-amber-800 mb-2">15+</div>
                <div className="text-sm text-gray-600/90">Years Experience</div>
              </div>
              <div className="text-center card p-6" data-aos="fade-up" data-aos-delay="400">
                <div className="text-4xl font-serif font-bold text-amber-800 mb-2">95%</div>
                <div className="text-sm text-gray-600/90">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppers Carousel */}
      <section className="py-24 bg-white/30">
        <div className="site-container">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Our Star Achievers
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden card">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {toppers.map((topper, index) => (
                  <div key={index} className="min-w-full">
                    <div className="bg-white p-8 md:p-12">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0" data-aos="fade-right">
                          <img
                            src={topper.image}
                            alt={topper.name}
                            className="w-48 h-60 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                        <div className="text-center md:text-left" data-aos="fade-left">
                          <h3 className="font-serif text-3xl font-bold mb-4">
                            {topper.name}
                          </h3>
                          <p className="text-xl text-gray-600/90 mb-4">
                            {topper.exam}
                          </p>
                          <div className="space-y-3">
                            <p className="text-2xl font-serif font-semibold text-amber-800">
                              Score: {topper.score}
                            </p>
                            <p className="text-2xl font-serif font-semibold text-amber-800/90">
                              Rank: {topper.rank}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Carousel Controls */}
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev - 1 + toppers.length) % toppers.length)
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % toppers.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {toppers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-primary-red w-8'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-white/50">
        <div className="site-container">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Why Choose ICC?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="card p-8 hover:shadow-xl transition-all hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-6xl mb-6">{highlight.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {highlight.title}
                </h3>
                <p className="text-gray-600/90 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus & Classrooms Gallery */}
      <section className="py-24 bg-white/30">
        <div className="site-container">
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight"
            data-aos="fade-up"
          >
            Our Campus
          </h2>
          <p
            className="text-center text-xl text-gray-600/90 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Step into our modern classrooms and inspiring learning spaces — each designed for focused education and student success.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[img1, img2, img3, img4, img5].map((src, i) => (
              <div
                key={i}
                className="card overflow-hidden group"
                data-aos="fade-up"
                data-aos-delay={50 * i}
              >
                <img
                  src={src}
                  alt={`Campus ${i + 1}`}
                  className="w-full h-64 object-cover transform transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-base md:text-lg text-white font-serif">{gallerySlogans[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="site-container text-center">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-8 tracking-tight text-amber-100" data-aos="fade-up">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-xl mb-12 text-amber-100/90" data-aos="fade-up" data-aos-delay="100">
            Join hundreds of successful students shaping their future at Icchapurti Coaching
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center" data-aos="fade-up" data-aos-delay="200">
            <Link
              to="/contact"
              className="btn-primary px-8 py-4 text-lg shadow-xl hover:scale-105"
            >
              Enroll Now
            </Link>
            <Link
              to="/contact"
              className="bg-white/10 border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              Request a Callback
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 
            className="text-4xl font-bold text-center mb-4 text-primary-darkBlue"
            data-aos="fade-up"
          >
            Visit Our Campus
          </h2>
          <p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Located in the heart of Udgir, our campus is easily accessible and equipped with modern facilities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div 
              className="rounded-2xl overflow-hidden shadow-lg h-[400px]"
              data-aos="fade-right"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.0579797537777!2d76.77892582283652!3d18.39516729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c53dfc3664e7%3A0x2e00c637984db630!2s94RF%2B67J%2C%20Ram%20Nagar%2C%20Khadkali%2C%20Udgir%2C%20Maharashtra%20413517!5e0!3m2!1sen!2sin!4v1699516458773!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ICC Location Map"
              ></iframe>
            </div>
            
            <div 
              className="space-y-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div>
                <h3 className="text-2xl font-bold text-primary-darkBlue mb-2">Our Address</h3>
                <p className="text-lg text-gray-600">
                  94RF+67J, Ram Nagar, Khadkali,<br />
                  Udgir, Maharashtra 413517
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary-darkBlue mb-2">Nearby Landmarks</h3>
                <ul className="text-lg text-gray-600 space-y-2">
                  <li>• Ram Nagar Area</li>
                  <li>• Near TAJ Medical General</li>
                  <li>• Khankha Galli</li>
                  <li>• Khadkali, Udgir</li>
                </ul>
              </div>
              
              <Link
                to="/contact"
                className="inline-block bg-primary-red text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-red-600 transition-all shadow-xl hover:scale-105 mt-4"
              >
                Get Directions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

