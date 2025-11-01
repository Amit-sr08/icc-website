import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { EMAILJS_CONFIG } from '../config/emailjs'

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    studentPhone: '',
    parentPhone: '',
    course: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const courses = [
    'Foundation Course (8th-10th)',
    'NEET Coaching',
    'JEE Coaching',
    'CET Coaching',
    'Crash Courses',
    'Other',
  ]

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Check if EmailJS is configured
    if (
      EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      // EmailJS not configured yet, show error or fallback
      console.warn('EmailJS not configured. Please add your credentials in src/config/emailjs.js')
      setIsSubmitting(false)
      setSubmitStatus('error')
      alert('Email service is not configured. Please contact the administrator.')
      return
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)

      // Prepare template parameters for EmailJS
      const templateParams = {
        fullName: formData.fullName,
        studentPhone: formData.studentPhone,
        parentPhone: formData.parentPhone,
        course: formData.course,
        comment: formData.comment || 'No additional comments',
        // Note: Recipient email should be set in EmailJS template dashboard
        // Support Email: icchapurticoachingclasses.udgir@gmail.com
      }

      // Send email via EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      )

      setIsSubmitting(false)
      setSubmitStatus('success')
      // small UX: trigger confetti
      triggerConfetti()

      // Reset form
      setFormData({
        fullName: '',
        studentPhone: '',
        parentPhone: '',
        course: '',
        comment: '',
      })

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000)
    } catch (error) {
      console.error('EmailJS Error:', error)
      setIsSubmitting(false)
      setSubmitStatus('error')
    }
  }

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      url: 'https://wa.me/919876543210',
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      url: '#',
    },
    {
      name: 'YouTube',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      url: '#',
    },
  ]

  // Confetti: create simple DOM pieces inside confettiRef
  const confettiRef = useRef(null)
  const triggerConfetti = (count = 30) => {
    if (!confettiRef.current) return
    const colors = ['#E53935','#F59E0B','#10B981','#3B82F6','#8B5CF6']
    const pieces = []
    for (let i = 0; i < count; i++) {
      const el = document.createElement('div')
      el.className = 'confetti-piece'
      el.style.background = colors[Math.floor(Math.random() * colors.length)]
      el.style.left = Math.random() * 100 + '%'
      el.style.transform = `rotate(${Math.random() * 360}deg)`
      el.style.animationDelay = `${Math.random() * 300}ms`
      el.style.opacity = '0.95'
      confettiRef.current.appendChild(el)
      pieces.push(el)
    }
    // cleanup after animation
    setTimeout(() => {
      pieces.forEach((p) => p.remove())
    }, 3200)
  }

  return (
    <div className="pt-20">
      {/* confetti container */}
      <div ref={confettiRef} className="pointer-events-none fixed inset-0 z-50"></div>
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-amber-100">Contact Us</h1>
            <p className="text-xl text-amber-100/90">
              Take the first step toward excellence — let's discuss your future together
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/50">
        <div className="site-container">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="card p-8" data-aos="fade-right">
              <h2 className="font-serif text-3xl font-bold mb-6">
                Start Your Journey
              </h2>
              
              {submitStatus === 'success' && (
                <div
                  role="status"
                  aria-live="polite"
                  className="mb-6 p-4 rounded-xl border bg-amber-50/60 text-amber-900 flex items-center gap-4 anim-pop glow-success"
                >
                  <svg className="w-6 h-6 text-amber-800 anim-draw" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="font-serif font-bold">Thank you! We'll get back to you soon.</div>
                    <div className="text-sm text-amber-800/90">We've received your message and will respond shortly.</div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div
                  role="alert"
                  aria-live="assertive"
                  className="mb-6 p-4 rounded-xl border bg-red-50/60 text-red-900 flex items-center gap-4 anim-shake glow-error"
                >
                  <svg className="w-6 h-6 text-red-800" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M6 18L18 6M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <div className="font-serif font-bold">Something went wrong.</div>
                    <div className="text-sm text-red-800/90">Please try again or contact us via WhatsApp.</div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <label className="relative block">
                    <span className="sr-only">Full name</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.8.632 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="Full name"
                      className="pl-12 w-full rounded-xl border border-gray-200 bg-white/60 py-3 pr-3 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-red/20 transition"
                    />
                  </label>

                  {/* Student Phone */}
                  <label className="relative block">
                    <span className="sr-only">Student phone</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l1-6H6.4M7 13L5.6 7M7 13l-2 4h12l2-4M16 5h2a2 2 0 012 2v3" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      id="studentPhone"
                      name="studentPhone"
                      value={formData.studentPhone}
                      onChange={handleChange}
                      required
                      placeholder="Student phone number"
                      className="pl-12 w-full rounded-xl border border-gray-200 bg-white/60 py-3 pr-3 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-red/20 transition"
                    />
                  </label>

                  {/* Parent Phone */}
                  <label className="relative block">
                    <span className="sr-only">Parent phone</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l.4 2M7 13h10l1-6H6.4" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleChange}
                      required
                      placeholder="Parent phone number"
                      className="pl-12 w-full rounded-xl border border-gray-200 bg-white/60 py-3 pr-3 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-red/20 transition"
                    />
                  </label>

                  {/* Course Select */}
                  <label className="relative block">
                    <span className="sr-only">Select course</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 002-2V7H3v12a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="pl-12 w-full rounded-xl border border-gray-200 bg-white/60 py-3 pr-3 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-red/20 transition appearance-none"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
                  </label>
                </div>

                {/* Comment */}
                <label className="block">
                  <span className="sr-only">Comment</span>
                  <textarea
                    id="comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Tell us more (questions, preferred time, etc.)"
                    className="w-full rounded-xl border border-gray-200 bg-white/60 py-3 px-4 shadow-sm focus:outline-none focus:ring-4 focus:ring-primary-red/20 transition resize-none"
                  />
                </label>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary flex-1 inline-flex justify-center items-center gap-2 py-3 text-lg transition-all hover:scale-[1.02] disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                      </svg>
                    ) : (
                      'Submit'
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ fullName: '', studentPhone: '', parentPhone: '', course: '', comment: '' })}
                    className="px-5 py-3 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-700 font-medium transition-all"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8" data-aos="fade-left">
              {/* Address */}
              <div className="card p-8">
                <h2 className="font-serif text-3xl font-bold mb-6">
                  Visit Us
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg
                      className="w-6 h-6 text-amber-800 mr-4 mt-1 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                      <p className="text-gray-600">
                        94RF+67J, Ram Nagar, Khadkali, Udgir, Maharashtra 413517
                      </p>
                        <p className="mt-2 text-sm text-primary-darkBlue font-medium">आई-वडिलांची आशीर्वादं तुमच्याबरोबर आहेत — भरोसा ठेवा आणि पुढे चला!</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="card p-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.0579797537777!2d76.77892582283652!3d18.39516729999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc7c53dfc3664e7%3A0x2e00c637984db630!2s94RF%2B67J%2C%20Ram%20Nagar%2C%20Khadkali%2C%20Udgir%2C%20Maharashtra%20413517!5e0!3m2!1sen!2sin!4v1699516458773!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="ICC Location"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Social Media */}
              <div className="card p-8">
                <h2 className="font-serif text-2xl font-bold mb-6">
                  Connect With Us
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 rounded-xl hover:bg-amber-100/10 transition-all group"
                    >
                      <div className="text-amber-800 group-hover:text-amber-900 mb-2">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

