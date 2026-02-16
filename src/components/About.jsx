import React from "react";

const CITIES = [
  "Toronto", "Mississauga", "Brampton", "Oakville",
  "Burlington", "Milton", "Vaughan", "Richmond Hill",
  "Markham", "Scarborough", "Etobicoke", "North York",
  "Pickering", "Ajax", "Whitby", "Oshawa",
];

const STATS = [
  { value: "Local", label: "Owner-operated" },
  { value: "Insured", label: "Commercial coverage" },
  { value: "GTA-Wide", label: "Service area" },
  { value: "Flexible", label: "Scheduling options" },
];

const About = () => (
  <section id="about" className="section-padding bg-gray-900">
    <div className="section-container">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* Story */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6 sm:mb-8">
            About CV Transport
          </h2>
          <div className="space-y-4 text-gray-400 text-base sm:text-lg leading-relaxed">
            <p>
              CV Transport Solutions was founded with one simple goal: make
              appliance delivery in the Greater Toronto Area fast, affordable,
              and stress-free.
            </p>
            <p>
              We're a local, owner-operated business — not a faceless
              corporation. When you call us, you talk to a real person who
              cares about getting your appliance delivered safely and on time.
            </p>
            <p>
              From Mississauga to Scarborough, Brampton to Oakville, we know
              the GTA inside and out. Whether it's a single fridge to a
              home or a truckload of appliances for a retailer, we handle
              every delivery with the same level of care and professionalism.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 mt-8 sm:mt-10">
            {STATS.map((item) => (
              <div key={item.value} className="border-l-2 border-yellow-400 pl-4">
                <p className="text-xl sm:text-2xl font-bold text-white">
                  {item.value}
                </p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service area */}
        <div className="bg-gray-800/50 rounded-2xl p-6 sm:p-8 border border-gray-700/50">
          <h3 className="text-xl font-bold text-white mb-2">
            Our Service Area
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mb-6">
            We deliver across the Greater Toronto Area, including:
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3">
            {CITIES.map((city) => (
              <div key={city} className="flex items-center gap-2.5 text-gray-300 text-sm sm:text-base">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                {city}
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-gray-500 italic">
            Don't see your area? Call us — we likely cover it.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;
