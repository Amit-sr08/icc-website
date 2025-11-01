import { Link } from 'react-router-dom'

const Courses = () => {
  const courses = [
    {
      id: 'foundation',
      title: 'Foundation Course',
      grades: '8th - 10th',
      description:
        'Build a strong foundation in Mathematics and Science for future competitive exams. Perfect for early preparation.',
      features: [
        'Conceptual clarity',
        'Regular assessments',
        'Doubt solving sessions',
        'Parent-teacher meetings',
      ],
      duration: 'Full Academic Year',
      icon: '📚',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 'neet',
      title: 'NEET Coaching',
      grades: '11th - 12th',
      description:
        'Comprehensive preparation for National Eligibility cum Entrance Test (NEET) with expert faculty and proven strategies.',
      features: [
        'Expert faculty team',
        'Comprehensive study material',
        'Regular mock tests',
        'Previous year paper analysis',
      ],
      duration: '2 Years / 1 Year',
      icon: '🏥',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 'jee',
      title: 'JEE Coaching',
      grades: '11th - 12th',
      description:
        'Intensive preparation for Joint Entrance Examination (JEE Mains & Advanced) with focus on problem-solving skills.',
      features: [
        'Advanced problem solving',
        'Test series program',
        'Personalized mentoring',
        'Rank improvement strategies',
      ],
      duration: '2 Years / 1 Year',
      icon: '⚙️',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 'cet',
      title: 'CET Coaching',
      grades: '12th',
      description:
        'Focused preparation for Maharashtra Common Entrance Test (MHT-CET) with state-specific exam patterns.',
      features: [
        'CET-specific syllabus',
        'Mock CET tests',
        'Quick revision modules',
        'Score improvement techniques',
      ],
      duration: '1 Year',
      icon: '🎯',
      color: 'from-orange-500 to-orange-600',
    },
    {
      id: 'crash',
      title: 'Crash Courses',
      grades: 'All Classes',
      description:
        'Intensive short-term courses for quick revision and last-minute preparation before exams.',
      features: [
        'Rapid revision',
        'Important topics coverage',
        'Quick doubt clearing',
        'Exam tips & strategies',
      ],
      duration: '1-3 Months',
      icon: '🚀',
      color: 'from-red-500 to-red-600',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-amber-100">
              Our Courses
            </h1>
            <p className="text-xl text-amber-100/90">
              Comprehensive programs designed to help you achieve your academic goals
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-white/30">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className="card overflow-hidden transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {/* Course Header */}
                <div className="bg-brand-dark text-amber-100 p-8">
                  <div className="text-5xl mb-4">{course.icon}</div>
                  <h2 className="font-serif text-2xl font-bold mb-2">{course.title}</h2>
                  <p className="text-amber-200/80 font-medium">{course.grades}</p>
                </div>

                {/* Course Body */}
                <div className="p-8">
                  <p className="text-gray-600/90 mb-8 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="font-serif font-bold mb-4">
                      Key Features:
                    </h3>
                    <ul className="space-y-3">
                      {course.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-amber-700 mr-3 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-600/90">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Duration */}
                  <div className="mb-8 pb-8 border-b border-gray-200/50">
                    <p className="text-gray-600/90">
                      <span className="font-medium">Duration:</span> {course.duration}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link
                    to="/contact"
                    className="btn-cta w-full text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 bg-black">
        <div className="site-container">
          <div className="max-w-4xl mx-auto">
            <div className="p-8 md:p-12" data-aos="fade-up">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-center text-amber-100 tracking-tight">
                Course Selection Guidance
              </h2>
              <p className="text-lg text-gray-200 leading-relaxed mb-8">
                Not sure which course is right for you? Our expert counselors are here to
                help you choose the best path based on your academic background, career
                goals, and aspirations. We offer free counseling sessions to guide you
                through the selection process.
              </p>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-block bg-amber-400 hover:bg-amber-500 text-black px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Talk to Our Experts
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses

