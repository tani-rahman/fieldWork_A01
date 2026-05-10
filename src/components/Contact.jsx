import { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { IoArrowForward } from "react-icons/io5";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email || !formData.message) return;

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section className="bg-[#f4f5f7] min-h-screen py-16 px-6 flex flex-col items-center font-sans">

      {/* HEADER (FIXED) */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-[#1f2f6f] mb-3">
          Contact
        </h2>

        <div className="w-[150px] h-[2px] bg-gray-300 mx-auto relative mb-5">
          <span className="w-[55px] h-[3px] bg-[#3f5bd8] absolute left-1/2 -translate-x-1/2 -top-[1px]" />
        </div>

        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      {/* BODY */}
      <div className="flex flex-col lg:flex-row gap-16 max-w-5xl w-full">

        {/* LEFT */}
        <div className="lg:w-[260px]">
          <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-[#3d52c4] mb-5">
            <BsChatDots size={22} />
          </div>

          <h3 className="text-xl font-bold text-[#3d52c4] mb-2">
            Let's Connect
          </h3>

          <p className="text-sm text-gray-500 mb-8">
            We're here to discuss your vision and explore how we can bring it to life together.
          </p>

          <div className="space-y-5">
            <ContactItem icon={<FiMail />} label="EMAIL US" value="contact@example.com" />
            <ContactItem icon={<FiPhone />} label="CALL US" value="+1 (555) 432-8976" />
            <ContactItem
              icon={<FiMapPin />}
              label="VISIT US"
              value={
                <>
                  547 Madison Avenue <br /> New York, NY 10022
                </>
              }
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <h3 className="text-xl text-[#1a2b6d] mb-6">
            Send us a message
          </h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              label="Full Name"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              focused={focused}
              setFocused={setFocused}
            />
            <Input
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              focused={focused}
              setFocused={setFocused}
            />
          </div>

          <Input
            label="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            focused={focused}
            setFocused={setFocused}
          />

          {/* MESSAGE */}
          <div className="mb-4">
            <label className="text-sm mb-1 block text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
              className={`w-full border rounded-md px-3 py-2 text-sm outline-none transition ${
                focused === "message"
                  ? "border-[#3d52c4] shadow-[0_0_0_3px_rgba(61,82,196,0.1)]"
                  : "border-gray-300"
              }`}
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-semibold transition ${
              submitted
                ? "bg-green-600 text-white"
                : "bg-[#3d52c4] text-white hover:opacity-90"
            }`}
          >
            {submitted ? "Message Sent!" : "Send Message"}
            {!submitted && <IoArrowForward size={16} />}
          </button>
        </div>
      </div>
    </section>
  );
}

/* COMPONENTS */
function ContactItem({ icon, label, value }) {
  return (
    <div className="flex gap-3">
      <div className="text-[#3d52c4] mt-1">{icon}</div>
      <div>
        <p className="text-[10px] font-semibold text-gray-400 tracking-wide">
          {label}
        </p>
        <p className="text-sm text-gray-700">{value}</p>
      </div>
    </div>
  );
}

function Input({ label, name, type = "text", value, onChange, focused, setFocused }) {
  return (
    <div className="flex flex-col flex-1 mb-4">
      <label className="text-sm mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(name)}
        onBlur={() => setFocused("")}
        className={`w-full border rounded-md px-3 py-2 text-sm outline-none transition ${
          focused === name
            ? "border-[#3d52c4] shadow-[0_0_0_3px_rgba(61,82,196,0.1)]"
            : "border-gray-300"
        }`}
      />
    </div>
  );
}