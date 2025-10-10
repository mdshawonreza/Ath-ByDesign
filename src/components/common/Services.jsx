import React from 'react';
import servicesData from '../../data/servicesData';
import SectionsHead from './SectionsHead';

const Services = () => {
  return (
    <section id="services" className="py-16 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <SectionsHead heading="Our Advantages" />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {servicesData.map((item) => {
            const { id, icon: Icon, title, info } = item; // dynamically render icon

            return (
              <div
                key={id}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="text-4xl text-orange-500 mb-4" />
                <h4 className="text-lg font-semibold mb-2">{title}</h4>
                <p className="text-gray-500 text-sm">{info}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
