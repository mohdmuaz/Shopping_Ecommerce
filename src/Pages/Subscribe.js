import React from 'react';

const Newsletter = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <form>
          <p className="text-center text-lg text-gray-700 mb-6">
            Subscribe To The E Shop Store For Latest Updates.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="w-full md:w-2/3">
              <input
                type="email"
                className="form-control border border-gray-300 rounded-md px-4 py-3 w-full text-sm"
                placeholder="Enter Your Email.."
                name="email"
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-md hover:bg-yellow-500 transition duration-300 text-sm"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
