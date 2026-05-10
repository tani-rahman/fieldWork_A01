import React from "react";
import {
  CheckCircle,
  Shield,
  BarChart3,
  Users,
  Cpu,
  Cloud,
  LineChart,
} from "lucide-react";

export default function FeaturesSection() {
  const cards = [
    {
      title: "Performance Optimization",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      icon: <Cpu size={20} />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      title: "Security First",
      desc: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.",
      icon: <Shield size={20} />,
      color: "from-purple-500 to-indigo-400",
    },
    {
      title: "Growth Analytics",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet consectetur adipisci velit.",
      icon: <BarChart3 size={20} />,
      color: "from-pink-500 to-red-400",
    },
    {
      title: "Team Collaboration",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      icon: <Users size={20} />,
      color: "from-green-400 to-teal-400",
    },
  ];

  const bottomFeatures = [
    {
      title: "AI-Powered Automation",
      desc: "Streamline your workflow with intelligent automation that adapts to your unique business needs and scales effortlessly.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Cloud Integration",
      desc: "Seamlessly connect with your existing tools and access your data securely from anywhere in the world.",
      icon: <Cloud size={24} />,
    },
    {
      title: "Team Collaboration",
      desc: "Empower your team with real-time collaboration features that bring your organization closer together.",
      icon: <Users size={24} />,
    },
    {
      title: "Advanced Analytics",
      desc: "Transform raw data into actionable insights with powerful analytics that guide strategic decision-making.",
      icon: <LineChart size={24} />,
    },
  ];

  return (
    <section className="bg-[#f7f8fc] py-20 px-6">
      <div className="max-w-7xl mx-auto">

       <div style={{ textAlign: "center", marginBottom: "60px" }}>
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            color: "#1f2f6f",
            marginBottom: "10px",
          }}
        >
          Features
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
          <p className="text-gray-500 mt-4 max-w-xl mx-auto text-sm">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm p-10 grid lg:grid-cols-2 gap-12 items-center">

        
          <div>
            <span className="bg-indigo-100 text-indigo-600 text-xs font-semibold px-4 py-2 rounded-full">
              Core Features
            </span>

            <h3 className="text-4xl font-bold text-[#1d2b6b] leading-tight mt-6">
              Innovative Solutions for Modern Business
            </h3>

            <p className="text-gray-500 mt-6 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Advanced Technology Integration",
                "24/7 Professional Support",
                "Scalable Business Solutions",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-indigo-500" />
                  <span className="text-[#1d2b6b] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-[#fafbff] rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className={`w-full h-1 rounded-full bg-gradient-to-r ${card.color} mb-5`}></div>

                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-indigo-500 mb-4">
                  {card.icon}
                </div>

                <h4 className="text-lg font-semibold text-[#1d2b6b] mb-3">
                  {card.title}
                </h4>

                <p className="text-gray-500 text-sm leading-6">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16">
          {bottomFeatures.map((feature, index) => (
            <div
              key={index}
              className="group p-5 rounded-2xl">

              {/* ICON */}
              <div className="w-12 h-12 rounded-xl border border-indigo-200 flex items-center justify-center text-indigo-500 mb-5 transition-all duration-300 
              group-hover:border-indigo-600 group-hover:scale-110">
                {feature.icon}
              </div>

              {/* TITLE */}
              <h4 className="text-xl font-semibold text-[#1d2b6b] mb-3 transition group-hover:text-indigo-600">
                {feature.title}
              </h4>

              <p className="text-gray-500 leading-7 text-sm">
                {feature.desc}
              </p>

            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-4 mt-14">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition">
            Get Started Today
          </button>

          <button className="text-indigo-600 border border-gray-300 hover:border-indigo-500 hover:text-indigo-600 px-8 py-3 rounded-lg font-medium transition">
            View Demo
          </button>
        </div>

      </div>
    </section>
  );
}