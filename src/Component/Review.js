import React from 'react'

function Review() {
  return (
    <div className='mx-28 '>
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-lg rounded-lg">
    <div className="text-center mb-4">
      <h2 className="text-2xl font-bold">Avg Rating: 4.6</h2>
      <img 
        className="mx-auto mt-2"
        src="https://rental.software/images/5star.png" 
        alt="Average Rating" 
      />
    </div>
    <div className="text-center mb-4">
      <h3 className="text-xl italic">What Our Customers Are Saying</h3>
    </div>
    <div className="space-y-4">
      <div className="border p-4 rounded-lg">
        <ul className="list-none">
          <li className="text-xl font-semibold">Paul</li>
          <li className="flex items-center">
            <span className="mr-2">4.2</span>
            <img 
              className="w-6 h-6"
              src="https://rental.software/images/4star.png" 
              alt="Rating"
            />
          </li>
          <li className="text-gray-600">1/30/2012</li>
          <li>
            <p className="text-gray-800">
              You guys rock! My event went so smoothly because of you and your team. Look forward to calling you next year!
            </p>
          </li>
        </ul>
      </div>
      <div className="border p-4 rounded-lg">
        <ul className="list-none">
          <li className="text-xl font-semibold">John</li>
          <li className="flex items-center">
            <span className="mr-2">4.9</span>
            <img 
              className="w-6 h-6"
              src="https://rental.software/images/5star.png" 
              alt="Rating"
            />
          </li>
          <li className="text-gray-600">10/8/2011</li>
          <li>
            <p className="text-gray-800">
              Thanks, you guys rock! My kids loved the bouncer.
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Review
