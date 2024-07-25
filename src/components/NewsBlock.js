import React from 'react'

const NewsBlock = () => {
  return (
    <div className="flex-shrink max-w-full w-full sm:w-1/3 lg:w-1/4 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
              <div className="flex flex-row sm:block hover-img">
                  <a href="">
                    <img
                      className="max-w-full w-full mx-auto"
                      src="https://placehold.co/600x400"
                      alt="alt title"
                    />
                  </a>
                  <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                    <h3 className="text-lg font-bold leading-tight mb-2">
                      <a href="#">
                        5 Tips to Save Money Booking Your Next Hotel Room
                      </a>
                    </h3>
                    <p className="hidden md:block text-gray-600 leading-tight mb-1">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content.
                    </p>
                    <a className="text-gray-500" href="#">
                      <span className="inline-block h-3 border-l-2 border-red-600 mr-2"></span>
                      Europe
                    </a>
                  </div>
                </div>
              </div>
  )
}

export default NewsBlock