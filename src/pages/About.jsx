import { Link } from 'react-router-dom'

const About = () => {
  const whyChooseICC = [
    {
      icon: '🎓',
      title: 'Experienced Faculty',
      description:
        'Our team of expert educators brings years of experience and a passion for teaching.',
    },
    {
      icon: '📖',
      title: 'Comprehensive Curriculum',
      description:
        'Well-structured syllabus covering all aspects of competitive exams with regular updates.',
    },
    {
      icon: '💯',
      title: 'Proven Track Record',
      description:
        'Consistent top performers in NEET, JEE, and CET with impressive success rates.',
    },
    {
      icon: '🏆',
      title: 'Individual Attention',
      description:
        'Small batch sizes ensuring personalized attention and doubt-solving sessions.',
    },
    {
      icon: '📊',
      title: 'Regular Assessments',
      description:
        'Frequent tests and mock exams to track progress and identify improvement areas.',
    },
    {
      icon: '🎯',
      title: 'Focus on Success',
      description:
        'Dedicated approach towards helping students achieve their career goals.',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-amber-100">
              Our Story
            </h1>
            <p className="text-xl text-amber-100/90">
              Empowering dreams, nurturing excellence, and shaping futures through dedicated education
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-white/50">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Vision */}
            <div
              className="card p-8"
              data-aos="fade-right"
            >
              <div className="text-5xl mb-6">👁️</div>
              <h2 className="font-serif text-3xl font-bold mb-4">
                Our Vision
              </h2>
              <p className="text-gray-600/90 leading-relaxed">
                To be the most trusted and preferred coaching institute in Maharashtra,
                recognized for nurturing academic excellence and holistic development of
                students. We envision creating a learning ecosystem where every student
                realizes their full potential and achieves their dreams.
              </p>
            </div>

            {/* Mission */}
            <div
              className="card p-8"
              data-aos="fade-left"
            >
              <div className="text-5xl mb-6">🎯</div>
              <h2 className="font-serif text-3xl font-bold mb-4">
                Our Mission
              </h2>
              <p className="text-gray-600/90 leading-relaxed">
                To provide quality education through expert guidance, comprehensive study
                materials, and personalized attention. We are committed to fostering a
                culture of excellence, innovation, and continuous improvement to help
                students excel in competitive examinations and build successful careers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-24 bg-white/30">
        <div className="site-container">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 tracking-tight">
              Our Teaching Philosophy
            </h2>
            <div className="card p-8 md:p-12">
              <p className="text-xl text-gray-600/90 leading-relaxed mb-12">
                At Icchapurti Coaching Classes, we believe that every student is unique
                and deserves personalized attention. Our teaching philosophy is built on
                three core principles:
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div data-aos="fade-up" data-aos-delay="100">
                  <div className="text-4xl mb-6">🧠</div>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    Concept Clarity
                  </h3>
                  <p className="text-gray-600/90">
                    Ensuring deep understanding of fundamental concepts before moving to
                    advanced topics.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                  <div className="text-4xl mb-6">⚡</div>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    Practice & Application
                  </h3>
                  <p className="text-gray-600/90">
                    Regular practice through tests, assignments, and real exam simulations.
                  </p>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                  <div className="text-4xl mb-6">💪</div>
                  <h3 className="font-serif text-xl font-bold mb-3">
                    Confidence Building
                  </h3>
                  <p className="text-gray-600/90">
                    Building confidence through encouragement, motivation, and positive
                    reinforcement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose ICC */}
      <section className="py-24 bg-black/5">
        <div className="site-container">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
            Why Choose Icchapurti Coaching Classes?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseICC.map((item, index) => (
              <div
                key={index}
                className="card p-8 transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-5xl mb-6">{item.icon}</div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600/90 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-dark text-white">
        <div className="site-container text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 tracking-tight text-amber-100" data-aos="fade-up">
            Join Our Success Story
          </h2>
          <p className="text-xl mb-8 text-amber-200/80" data-aos="fade-up" data-aos-delay="100">
            Be part of a community that values excellence and achievement
          </p>
          <Link
            to="/contact"
            className="btn-cta"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

