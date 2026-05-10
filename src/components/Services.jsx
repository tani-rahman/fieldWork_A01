import React, { useState } from "react";

import {
  HiOutlineBolt,
  HiOutlineChartBar,
  HiOutlineUsers,
} from "react-icons/hi2";

import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const services = [
  {
    id: 1,
    title: "Comprehensive Business Solutions",
    description:
      "We provide enterprise-grade services designed to drive measurable results for organizations of all sizes. Our proven methodologies and experienced team ensure successful project delivery and long-term partnership value.",
  },

];

const serviceCards = [
  {
    id: 1,
    tag: "STRATEGY",
    icon: <HiOutlineBolt />,
    title: "Strategic Business Consulting",
    description:
      "Our strategic consulting services help organizations identify growth opportunities, optimize operations, and implement sustainable business practices. We work closely with leadership teams to develop actionable roadmaps aligned with corporate objectives.",
    bullets: [
      "Market Analysis & Research",
      "Business Process Optimization",
      "Growth Strategy Development",
      "Performance Metrics & KPIs",
    ],
  },
  {
    id: 2,
    tag: "TECHNOLOGY",
    icon: <IoShieldCheckmarkOutline />,
    title: "Enterprise Technology Solutions",
    description:
      "Donec sollicitudin molestie malesuada nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.",
    bullets: [
      "System Integration Services",
      "Cloud Infrastructure Management",
      "Cybersecurity Solutions",
      "Enterprise Software Development",
    ],
  },
  {
    id: 3,
    tag: "HR SOLUTIONS",
    icon: <HiOutlineUsers />,
    title: "Talent Management & Development",
    description:
      "Proin eget tortor risus quisque velit nisi pretium ut lacinia in elementum. Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Pellentesque in ipsum id orci porta dapibus curabitur arcu erat accumsan id imperdiet et.",
    bullets: [
      "Executive Recruitment",
      "Leadership Training Programs",
      "Organisational Development",
      "Performance Management Systems",
    ],
  },
  {
    id: 4,
    tag: "ANALYTICS",
    icon: <HiOutlineChartBar />,
    title: "Data Analytics & Business Intelligence",
    description:
      "Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec velit neque auctor sit amet aliquam vel ullamcorper sit amet ligula.",
    bullets: [
      "Predictive Analytics Modeling",
      "Data Warehouse Solutions",
      "Dashboard & Reporting Tools",
      "Machine Learning Integration",
    ],
  },
];

const stats = [
  { value: "850+", label: "PROJECTS COMPLETED" },
  { value: "98%", label: "CLIENT SATISFACTION" },
  { value: "15+", label: "YEARS EXPERIENCE" },
];

const Services = () => {
  const [learnHover, setLearnHover] = useState(null);

  return (
    <div className="bg-[#f4f5f8]">

      <section className="py-20 px-6 lg:px-12">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#1f2f6f",
            marginBottom: "10px",
          }}
        >
          Services
        </h2>

        <div
          style={{
            width: "150px",
            height: "2px",
            background: "#cfcfcf",
            margin: "0 auto 20px",
            position: "relative",
          }}
        >
          <span
            style={{
              width: "55px",
              height: "3px",
              background: "#3f5bd8",
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: "-1px",
            }}
          />
        </div>

          <p className="text-black max-w-2xl mx-auto leading-7">
           Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 py-10 border-b border-gray-300"
            >
              <div>
                <h3 className="text-2xl font-semibold text-[#2b3aaf] mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8 max-w-4xl">
                  {service.description}
                </p>
              </div>

              <button className="bg-[#3b48c8] hover:bg-[#2d39a8] text-white px-6 py-3 rounded-lg font-semibold transition">
                Request Consultation
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Cards Section ===== */}
      <section className="px-6 lg:px-12 pb-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {serviceCards.map((card) => (
            <div
              key={card.id}
              className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* Top */}
              <div className="flex items-center justify-between mb-5">

                {/* Icon */}
                <div
                  className="
                  w-14 h-14 rounded-xl
                  bg-[#eef0fb]
                  flex items-center justify-center
                  text-[#3b48c8] text-2xl
                  transition-all duration-300
                  group-hover:bg-[#3b48c8]
                  group-hover:text-white
                  "
                >
                  {card.icon}
                </div>

                {/* Tag */}
                <span className="text-xs font-semibold text-[#3b48c8] border border-[#c5caf5] bg-[#f0f1fd] px-3 py-1 rounded-md tracking-wide">
                  {card.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#1a2060] mb-4 leading-snug">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-8 mb-6">
                {card.description}
              </p>

              {/* Bullet List */}
              <ul className="space-y-4 mb-8">
                {card.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <FaCheck className="text-[#3b48c8] text-sm" />
                    {bullet}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <button
  onMouseEnter={() => setLearnHover(card.id)}
  onMouseLeave={() => setLearnHover(null)}
  className="p-5 border-t border-gray-200 text-[#3b48c8] font-semibold flex items-center gap-2 transition-all w-full"
   >
  Learn More

  <span
    className={`transition-all duration-300 ${
      learnHover === card.id ? "translate-x-2" : ""
    }`}
  >
    →
  </span>
</button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 lg:p-14 flex flex-col lg:flex-row justify-between gap-10">

          {/* Left */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#1a2060] mb-4">
              Ready to Transform Your Business?
            </h2>

            <p className="text-gray-500 leading-7 max-w-xl mb-8">
             Partner with our experienced team to develop tailored solutions that drive sustainable growth. Schedule a consultation with our specialists to discuss your organizational needs and objectives.
            </p>

            <div className="flex gap-5 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-[#1a2060]">
                    {stat.value}
                  </h3>

                  <p className="text-xs tracking-widest text-gray-400 mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 min-w-55">
            <button className="bg-[#3b48c8] hover:bg-[#2d39a8] text-white px-6 py-4 rounded-lg font-semibold transition">
              Get Started
            </button>

            <button className="border-2 border-[#3b48c8] text-[#3b48c8] hover:bg-[#f0f1fd] px-6 py-4 rounded-lg font-semibold transition">
              View Case Studies
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Services;