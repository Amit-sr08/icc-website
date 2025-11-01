import { useState } from 'react'

const Results = () => {
  const [selectedYear, setSelectedYear] = useState('2025')
  const [selectedExam, setSelectedExam] = useState('all')

  const results = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      exam: 'NEET',
      year: '2025',
      score: '720/720',
      rank: 'AIR 45',
      course: 'NEET Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+1',
    },
    {
      id: 2,
      name: 'Priya Sharma',
      exam: 'NEET',
      year: '2025',
      score: '715/720',
      rank: 'AIR 89',
      course: 'NEET Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+2',
    },
    {
      id: 3,
      name: 'Amit Patel',
      exam: 'JEE',
      year: '2025',
      score: '345/360',
      rank: 'AIR 156',
      course: 'JEE Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+3',
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      exam: 'NEET',
      year: '2025',
      score: '710/720',
      rank: 'AIR 234',
      course: 'NEET Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+4',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      exam: 'CET',
      year: '2025',
      score: '195/200',
      rank: 'State Rank 12',
      course: 'CET Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+5',
    },
    {
      id: 6,
      name: 'Anjali Mehta',
      exam: 'NEET',
      year: '2025',
      score: '705/720',
      rank: 'AIR 456',
      course: 'NEET Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+6',
    },
    {
      id: 7,
      name: 'Rohit Agarwal',
      exam: 'JEE',
      year: '2025',
      score: '342/360',
      rank: 'AIR 289',
      course: 'JEE Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+7',
    },
    {
      id: 8,
      name: 'Kavya Nair',
      exam: 'NEET',
      year: '2024',
      score: '698/720',
      rank: 'AIR 678',
      course: 'NEET Coaching',
      image: 'https://via.placeholder.com/200x250?text=Student+8',
    },
  ]

  const years = ['2025', '2024', '2023']
  const exams = ['all', 'NEET', 'JEE', 'CET']

  const filteredResults = results.filter((result) => {
    const yearMatch = result.year === selectedYear
    const examMatch = selectedExam === 'all' || result.exam === selectedExam
    return yearMatch && examMatch
  })

  const neet2025Results = results.filter(
    (result) => result.exam === 'NEET' && result.year === '2025'
  )

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-black text-white py-32">
        <div className="site-container">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 tracking-tight text-amber-100">
              Our Results
            </h1>
            <p className="text-xl text-amber-100/90">
              Celebrating the achievements of our students who made us proud
            </p>
          </div>
        </div>
      </section>

      {/* NEET 2025 Highlights */}
      <section className="py-24 bg-white/30">
        <div className="site-container">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-12 tracking-tight">
            NEET 2025 Toppers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neet2025Results.map((topper, index) => (
              <div
                key={topper.id}
                className="card overflow-hidden transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative">
                  <img
                    src={topper.image}
                    alt={topper.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-brand-dark text-amber-100 px-3 py-1 rounded-full text-sm font-bold">
                    #{topper.rank}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">
                    {topper.name}
                  </h3>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600/90">
                      <span className="font-semibold">Score:</span> {topper.score}
                    </p>
                    <p className="text-sm text-gray-600/90">
                      <span className="font-semibold">Rank:</span> {topper.rank}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 bg-black">
        <div className="site-container">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6">
            {/* Year Filter */}
            <div className="flex items-center gap-3">
              <label className="font-serif text-lg font-medium text-amber-100">Year:</label>
              <div className="flex gap-2">
                {years.map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedYear === year
                        ? 'bg-amber-400 text-black shadow-lg'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20'
                    }`}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>

            {/* Exam Filter */}
            <div className="flex items-center gap-3">
              <label className="font-serif text-lg font-medium text-amber-100">Exam:</label>
              <div className="flex gap-2">
                {exams.map((exam) => (
                  <button
                    key={exam}
                    onClick={() => setSelectedExam(exam)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedExam === exam
                        ? 'bg-amber-400 text-black shadow-lg'
                        : 'bg-white/10 text-gray-200 hover:bg-white/20'
                    }`}
                  >
                    {exam === 'all' ? 'All' : exam}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="py-24 bg-black/5">
        <div className="site-container">
          {filteredResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((result, index) => (
                <div
                  key={result.id}
                  className="card overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="relative">
                    <img
                      src={result.image}
                      alt={result.name}
                      className="w-full h-72 object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-brand-dark text-amber-100 px-4 py-2 rounded-lg font-bold shadow-lg">
                      {result.exam} {result.year}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-serif text-2xl font-bold mb-6">
                      {result.name}
                    </h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600/90 font-medium">Score:</span>
                        <span className="font-serif text-xl font-bold text-amber-900">
                          {result.score}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600/90 font-medium">Rank:</span>
                        <span className="font-serif text-xl font-bold text-amber-900">
                          {result.rank}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600/90 font-medium">Course:</span>
                        <span className="font-medium text-gray-800/90">
                          {result.course}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="font-serif text-xl text-gray-800">
                No results found for the selected filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-brand-dark">
        <div className="site-container">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight text-white">
              Our Success Statistics
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center" data-aos="fade-up">
                <div className="font-serif text-5xl font-bold text-amber-300 mb-3">500+</div>
                <p className="text-gray-200">Students Enrolled</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="font-serif text-5xl font-bold text-amber-300 mb-3">95%</div>
                <p className="text-gray-200">Success Rate</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="font-serif text-5xl font-bold text-amber-300 mb-3">100+</div>
                <p className="text-gray-200">Top Rankers</p>
              </div>
              <div className="text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="font-serif text-5xl font-bold text-amber-300 mb-3">15+</div>
                <p className="text-gray-200">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Results

