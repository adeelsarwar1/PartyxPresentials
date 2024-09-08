import React from 'react';

const WhoWeAre = () => (
  <section className="mx-28   py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 px-4">
          <div className="py-8">
            {/* Add your spacer equivalent here if needed */}
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 bg-white">
          <div className="py-8">
            <h2 className="text-2xl font-bold  animate-bounce">Who We Are</h2>
            <p className="mt-4">
              We are your <strong>#1 source</strong> for inflatable and party rentals. We pride ourselves in providing the absolute <strong>best “bounce” for your buck</strong> in the industry. With every bounce house rental and every event rental, we focus on providing world-class service so you can focus on having <strong>FUN</strong>.
            </p>
            <p className="mt-4">
              We also pride ourselves in providing <strong>clean and safe rentals</strong> at the most competitive pricing around. Each unit is cleaned and sanitized after every rental to guarantee your safety and satisfaction. We always follow the <strong>strictest safety guidelines</strong> and we absolutely will not sacrifice your safety for business. <strong>EVER</strong>.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SatisfactionGuaranteed = () => (
  <section className="mx-28   py-8">
    <div className="container bg-white mx-auto py-10  px-4">
      <div className="flex flex-wrap">
        <div className="w-full px-4">
          <h2 className="text-2xl text-black font-bold animate-bounce">Satisfaction Guaranteed!</h2>
          <p className="mt-4 text-black">
            When we say your <strong>satisfaction is guaranteed, we mean it</strong>. If we didn’t cover your type of party or event, please feel free to give us a call or message us on our <a href="#io_contactform" className="text-blue-500 underline">Contact Us</a> form. We will promptly respond with any necessary feedback.
          </p>
        </div>
      </div>
    </div>
  </section>
);
const PartyTimeSection = () => (
    <section className="mx-28 my-12 bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          {/* Heading */}
          <h2 className="text-3xl font-bold mb-4 animate-bounce">It's Party Time!</h2>
          
          {/* Text */}
          <p className="text-lg mb-8">
            We have everything you need to throw unforgettable, once in a lifetime events. Whether it’s in your backyard or a huge corporate event, we specialize in making sure your event is a fun, stress-free experience from start to finish.
          </p>
          
          {/* Button */}
          <a 
            href="/BounceHouses/Packages"
            className="inline-block px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg transition-transform transform hover:scale-105"
          >
            Book Now!
          </a>
        </div>
      </div>
    </section>
  );
  

const MyComponent = () => (
  <div>
    <WhoWeAre />
    <SatisfactionGuaranteed />
    <PartyTimeSection/>
  </div>
);

export default MyComponent;
