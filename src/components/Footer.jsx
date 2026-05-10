import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaBehance,
  FaDribbble
} from "react-icons/fa";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { IoArrowUp } from "react-icons/io5";

const footerLinks = {
  Studio: ["Our Story", "Design Process", "Portfolio", "Case Studies", "Awards"],
  Services: ["Brand Identity", "Web Design", "Mobile Apps", "Digital Strategy", "Consultation"],
  Resources: ["Design Blog", "Style Guide", "Free Assets", "Tutorials", "Inspiration"],
  Connect: ["Start Project", "Schedule Call", "Join Newsletter", "Follow Updates", "Partnership"],
};

const socialLinks = [
  { name: "Dribbble", icon: FaDribbble },
  { name: "Behance", icon: FaBehance },
  { name: "Instagram", icon: FaInstagram },
  { name: "Linkedin", icon: FaLinkedinIn },
];

const navLinks = ["Home", "About", "Features", "Services", "Portfolio", "Pricing", "Dropdown", "Contact"];
const navSocials = [BsTwitterX, FaFacebookF, FaInstagram, FaLinkedinIn];

export default function ElevateFooter() {
  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, sans-serif", background: "#0f172a", minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      
      {/* Navbar */}
      <nav style={{
        background: "#0f172a",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "0 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <span style={{ color: "#fff", fontWeight: 700, fontSize: "20px" }}>Elevate</span>

        <div style={{ display: "flex", gap: "24px" }}>
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "rgba(255,255,255,0.75)",
                fontSize: "14px",
                textDecoration: "none",
                transition: "0.2s"
              }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.75)"}
            >
              {link}{link === "Dropdown" ? " ▾" : ""}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: "14px" }}>
          {navSocials.map((Icon, i) => (
            <a
              key={i}
              href="#"
              style={{ color: "rgba(255,255,255,0.6)", transition: "0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </nav>

      <div style={{ flex: 1 }} />

      {/* Footer */}
      <footer style={{ background: "#0f172a" }}>

        {/* Main Section */}
        <div style={{ padding: "64px 48px", display: "flex", gap: "48px", flexWrap: "wrap" }}>

          {/* Left */}
          <div style={{ flex: "1 1 300px" }}>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: "26px", marginBottom: "20px" }}>Elevate</div>

            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "14px", marginBottom: "30px", maxWidth: "300px" }}>
              Crafting exceptional digital experiences through thoughtful design and innovative solutions.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { Icon: FiMapPin, text: "123 Creative Boulevard, NY" },
                { Icon: FiPhone, text: "+1 (555) 987-6543" },
                { Icon: FiMail, text: "hello@designstudio.com" },
              ].map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: "10px", color: "#ccc", fontSize: "13px" }}>
                  <Icon size={16} color="#4f7fe8" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div style={{
            flex: "2 1 500px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
            gap: "32px"
          }}>
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 style={{ color: "#fff", marginBottom: "16px", fontSize: "15px" }}>{title}</h4>
                {links.map(link => (
                  <p
                    key={link}
                    style={{
                      color: "#aaa",
                      fontSize: "13px",
                      cursor: "pointer",
                      transition: "0.2s"
                    }}
                    onMouseEnter={e => e.target.style.color = "#fff"}
                    onMouseLeave={e => e.target.style.color = "#aaa"}
                  >
                    {link}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Social */}
        <div style={{ padding: "40px 48px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <h3 style={{ color: "#fff", fontSize: "18px" }}>Stay Inspired</h3>
            <p style={{ color: "#aaa", fontSize: "13px" }}>Get updates monthly.</p>
          </div>

          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {socialLinks.map(({ name, icon: Icon }) => (
              <a
                key={name}
                href="#"
                style={{ display: "flex", gap: "8px", color: "#ccc", fontSize: "13px", alignItems: "center" }}
              >
                <Icon size={16} />
                {name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          padding: "20px 48px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.08)"
        }}>
          <p style={{ color: "#666", fontSize: "12px" }}>© Elevate. All rights reserved.</p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              background: "#4f7fe8",
              border: "none",
              padding: "10px",
              borderRadius: "6px",
              cursor: "pointer"
            }}
          >
            <IoArrowUp size={16} color="#fff" />
          </button>
        </div>

      </footer>
    </div>
  );
}