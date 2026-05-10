import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const pricingPlans = [
  {
    title: "NOVA STARTER",
    price: 19,
    button: "Get Started",
  },
  {
    title: "ORBIT STANDARD",
    price: 39,
    button: "Choose Plan",
  },
  {
    title: "ZENITH PLUS",
    price: 59,
    button: "Join Now",
    highlighted: true,
    topPick: true,
  },
  {
    title: "LUMEN ELITE",
    price: 89,
    button: "Discover More",
  },
];

export default function PricingSection() {
  return (
    <>
      <style>
        {`
          .pricing-card{
            background:#fff;
            border:2px solid #ddd;
            border-radius:22px;
            padding:30px;
            min-height:560px;
            position:relative;
            transition:all 0.35s ease;
            cursor:pointer;
          }

          .pricing-card:hover{
            transform:translateY(-12px);
            box-shadow:0 15px 40px rgba(0,0,0,0.12);
            border-color:#4b63d8;
          }

          .pricing-card:hover .pricing-btn{
            background:#243fb7;
          }

          .pricing-card.highlighted{
            background:#eef0ff;
            border-color:#4b63d8;
          }

          .pricing-btn{
            width:100%;
            padding:16px;
            border:none;
            border-radius:14px;
            background:#3f5bd8;
            color:#fff;
            font-size:17px;
            font-weight:700;
            cursor:pointer;
            transition:0.3s;
          }

          .plan-badge{
            display:inline-block;
            background:#d9dff8;
            color:#4b63d8;
            padding:8px 16px;
            border-radius:20px;
            font-size:13px;
            font-weight:700;
            margin-bottom:25px;
          }

          .top-pick{
            position:absolute;
            top:15px;
            right:20px;
            background:#4b63d8;
            color:#fff;
            padding:8px 16px;
            border-radius:20px;
            font-size:13px;
            font-weight:700;
          }
        `}
      </style>

      <section
        style={{
          background: "#f7f7f7",
          padding: "80px 20px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#1f2f6f",
              marginBottom: "10px",
            }}
          >
            Pricing
          </h2>

          <div
            style={{
              width: "150px",
              height: "2px",
              background: "#ccc",
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

          <p style={{ color: "#555" }}>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${
                plan.highlighted ? "highlighted" : ""
              }`}
            >
              {plan.topPick && (
                <div className="top-pick">TOP PICK</div>
              )}

              <div className="plan-badge">{plan.title}</div>

              <p
                style={{
                  color: "#555",
                  lineHeight: "1.8",
                  marginBottom: "30px",
                }}
              >
                Mauris pharetra neque vitae commodo vehicula. Aenean feugiat
                erat sit amet lacus pulvinar, nec iaculis felis tristique.
              </p>

              
              <div style={{ marginBottom: "30px" }}>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#1f2f6f",
                  }}
                >
                  $
                </span>

                <span
                  style={{
                    fontSize: "60px",
                    fontWeight: "800",
                    color: "#1f2f6f",
                  }}
                >
                  {plan.price}
                </span>

                <span
                  style={{
                    fontSize: "20px",
                    color: "#666",
                  }}
                >
                  /mo
                </span>
              </div>

              {/* Features */}
              <div style={{ marginBottom: "35px" }}>
                {[
                  "Praesent malesuada arcu augue et mattis lectus auctor.",
                  "Nullam consectetur nunc vel risus gravida sodales.",
                  "Cras condimentum orci vitae elit posuere consequat.",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "12px",
                      marginBottom: "22px",
                    }}
                  >
                    <FaCheckCircle
                      size={18}
                      color="#4b63d8"
                      style={{ marginTop: "4px" }}
                    />

                    <p
                      style={{
                        margin: 0,
                        color: "#444",
                        lineHeight: "1.7",
                      }}
                    >
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <button className="pricing-btn">{plan.button}</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}