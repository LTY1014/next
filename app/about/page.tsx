import Link from 'next/link'

export default function About() {
  return (
    <div className="bg-white">
      {/* About Hero Section */}
      <div className="relative bg-gray-900">
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Our Company
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            We are a leading technology company dedicated to innovation and excellence.
          </p>
        </div>
      </div>

      {/* Company History */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Story</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A Journey of Innovation
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Founded in 2010, we have grown from a small startup to a global leader in technology solutions.
            </p>
          </div>

          <div className="mt-10">
            <div className="prose prose-lg mx-auto">
              <p>
                Our company was founded with a simple mission: to make technology accessible and beneficial for everyone.
                Over the years, we have developed innovative solutions that have helped thousands of businesses
                transform their operations and achieve their goals.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible, investing in research and development
                to create the next generation of technological solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Team</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Meet the Experts
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team consists of industry experts and passionate professionals.
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'John Doe',
                  role: 'CEO & Founder',
                  description: 'Visionary leader with 20+ years of industry experience.',
                },
                {
                  name: 'Jane Smith',
                  role: 'CTO',
                  description: 'Technology expert specializing in AI and machine learning.',
                },
                {
                  name: 'Mike Johnson',
                  role: 'Head of Operations',
                  description: 'Operations specialist with a focus on efficiency and growth.',
                },
              ].map((member) => (
                <div key={member.name} className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                    <p className="mt-1 text-sm text-blue-600">{member.role}</p>
                    <p className="mt-2 text-sm text-gray-500">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 