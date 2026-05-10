import React from "react";
import { 
  FaCheck, 
  FaTrophy
} from "react-icons/fa";

import { FiTrendingUp } from "react-icons/fi";
import { BsPlayFill } from "react-icons/bs";

import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { HiOutlineBolt } from "react-icons/hi2";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const featureCards = [
  {
    icon: <IoShieldCheckmarkOutline />,
    title: "Secure Platform",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur.",
  },
  {
    icon: <HiOutlineBolt />,
    title: "Fast Performance",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
  },
  {
    icon: <LiaLayerGroupSolid />,
    title: "Easy Integration",
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    icon: <HiOutlineCog6Tooth />,
    title: "Customizable",
    description:
      "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.",
  },
];

const About = () => {
  return (
    <>
      {/* about */}
      <section className="py-24 bg-[#f8f9fc]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          
         <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#1f2f6f",
            marginBottom: "10px",
          }}
        >
          About
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

            <p className="text-black mt-5 max-w-2xl mx-auto">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem
              sint consectetur velit
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div>
              <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-blue-700 bg-blue-100 rounded-full">
                WHO WE ARE
              </span>

              <h2 className="text-5xl font-bold leading-tight text-[#1b2b6b] mb-6">
                Empowering businesses with intelligent solutions
              </h2>

              <p className="text-black leading-8 mb-10">
                At vero eos et accusamus et iusto odio dignissimos ducimus
                qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint
                occaecati cupiditate non provident.
              </p>

              <div className="grid grid-cols-3 gap-6 py-8 mb-8 border-y border-gray-200">
                <div>
                  <h3 className="text-4xl font-bold text-blue-700">
                    850+
                  </h3>
                  <p className="mt-2 text-black">
                    Active Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-700">
                    99.2%
                  </h3>
                  <p className="mt-2 text-black">
                    Success Rate
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-blue-700">
                    12+
                  </h3>
                  <p className="mt-2 text-black">
                    Years Experience
                  </p>
                </div>
              </div>

              <div className="space-y-5 mb-10">
                {[
                  "Enterprise-grade security and compliance",
                  "24/7 dedicated support team",
                  "Scalable infrastructure for growth",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-6 h-6 bg-blue-600 rounded-full">
                      <FaCheck className="text-xs text-white" />
                    </div>

                    <p className="text-black">{text}</p>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 text-white transition duration-300 transform bg-blue-700 rounded-xl font-semibold shadow-md hover:bg-blue-800 hover:scale-105 hover:shadow-xl">
                  Get Started
                </button>

                <button className="group flex items-center gap-2 px-8 py-4 text-black transition duration-300 border border-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-lg hover:scale-105">
                  <BsPlayFill className="text-lg transition-transform duration-300 group-hover:translate-x-1" />

                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">

              <div className="relative">
                <img
                  src="/about-5.webp"
                  alt="team"
                  className="w-full h-105 object-cover rounded-3xl shadow-xl"
                />

                <div className="absolute top-10 -right-6 flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl">
                    <FaTrophy className="text-xl text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1b2b6b]">
                      95%
                    </h3>

                    <p className="text-sm text-black">
                      Client Retention
                    </p>
                  </div>
                </div>

             
                <div className="absolute bottom-8 -left-6 flex items-center gap-4 px-6 py-4 bg-white rounded-2xl shadow-xl">
                  <div className="flex items-center justify-center w-14 h-14 bg-blue-600 rounded-xl">
                    <FiTrendingUp className="text-xl text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#1b2b6b]">
                      3.2x
                    </h3>

                    <p className="text-sm text-gray-500">
                      ROI Average
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5 mt-5">
                {[
                  "/about-square-12.webp",
                  "/about-square-8.webp",
                ].map((img, i) => (
                  <div
                    key={i}
                    className="group overflow-hidden rounded-2xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
                  >
                    <img
                      src={img}
                      alt="team"
                      className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
<section className="bg-[#f8f9fc] py-24 px-6">
  <div className="max-w-7xl mx-auto">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      {featureCards.map((card, index) => (
        <div
          key={index}
          className="
          bg-white
          rounded-[20px]
          px-8 py-10
          h-full
          transition-all duration-300
          hover:-translate-y-1
          hover:shadow-[0_16px_48px_rgba(79,86,200,0.12)]
          shadow-[0_4px_24px_rgba(79,86,200,0.07)]
          hover:border border-[#8388e4]
          "
        >

         
          <div
            className="
            w-15
            h-15
            rounded-[14px]
            bg-[#eef0fb]
            flex
            items-center
            justify-center
            text-[#4f56c8]
            text-[28px]
            mb-6
            "
          >
            {card.icon}
          </div>

          
          <h3
            className="
            text-[20px]
            font-bold
            text-[#1e2060]
            mb-4
            tracking-[0.3px]
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            {card.title}
          </h3>

          
          <p
            className="
            text-[15px]
            leading-[1.65]
            text-[#6b7280]
            "
          >
            {card.description}
          </p>

        </div>
      ))}

    </div>
  </div>
</section>
    </>
  );
}

export default About;