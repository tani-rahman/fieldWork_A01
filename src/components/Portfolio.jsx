import React from "react";
import {
  FaEye,
  FaRegFileAlt,
  FaArrowRight,
} from "react-icons/fa";

const portfolioData = [
  {
    category: "MANAGEMENT CONSULTING",
    title: "Enterprise Transformation Initiative",
    year: "2024",
    image:
      "/portfolio-3.webp",
    desc:
      "Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
    stat1: "+42%",
    stat1Label: "ROI IMPROVEMENT",
    stat2: "18 Months",
    stat2Label: "TIMELINE",
  },
  {
    category: "FINANCIAL SERVICES",
    title: "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.",
    year: "2024",
    image:
      "/portfolio-7.webp",
    desc:
      "Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    stat1: "-35%",
    stat1Label: "RISK REDUCTION",
    stat2: "100%",
    stat2Label: "COMPLIANCE",
  },
  {
    category: "TECHNOLOGY SOLUTIONS",
    title: "Cloud Migration & Infrastructure Modernization",
    year: "2023",
    image:
      "/portfolio-9.webp",
    desc:
      "Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. Quisque velit nisi, pretium ut lacinia in, elementum id enim.",
    stat1: "$2.4M",
    stat1Label: "COST SAVINGS",
    stat2: "99.9%",
    stat2Label: "UPTIME",
  },
  {
    category: "ENTERPRISE SOLUTIONS",
    title: "Global ERP System Integration",
    year: "2023",
    image:
      "/portfolio-11.webp",
    desc:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.",
    stat1: "+58%",
    stat1Label: "EFFICIENCY GAIN",
    stat2: "12,000+",
    stat2Label: "USERS",
  },
];

export default function Portfolio() {
  return (
    <>
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          body{
            margin:0;
            padding:0;
            font-family:Arial, sans-serif;
          }

          .portfolio-section{
            background:#f7f7f7;
            padding:80px 20px;
          }

          .portfolio-title{
            text-align:center;
            margin-bottom:50px;
          }

          .portfolio-title h2{
            font-size:42px;
            color:#1f2f6f;
            margin-bottom:10px;
          }

          .line{
            width:150px;
            height:2px;
            background:#ccc;
            margin:0 auto 20px;
            position:relative;
          }

          .line span{
            width:55px;
            height:3px;
            background:#3f5bd8;
            position:absolute;
            left:50%;
            transform:translateX(-50%);
            top:-1px;
          }

          .portfolio-title p{
            color:#555;
          }

          .filter-buttons{
            display:flex;
            justify-content:center;
            flex-wrap:wrap;
            gap:12px;
            margin-bottom:45px;
          }

          .filter-btn{
            padding:12px 20px;
            border:1px solid #d7d7d7;
            background:#fff;
            color:#1f2f6f;
            font-size:13px;
            font-weight:600;
            cursor:pointer;
            transition:0.3s;
          }

          .filter-btn.active,
          .filter-btn:hover{
            background:#3f5bd8;
            color:#fff;
            border-color:#3f5bd8;
          }

          .portfolio-grid{
            max-width:1250px;
            margin:auto;
            display:grid;
            grid-template-columns:repeat(auto-fit, minmax(450px, 1fr));
            gap:22px;
          }

          .portfolio-card{
            background:#fff;
            border:1px solid #ddd;
            overflow:hidden;
            border-radius:4px;
            transition:0.35s ease;
          }

          .portfolio-card:hover{
            transform:translateY(-10px);
            box-shadow:0 12px 30px rgba(0,0,0,0.12);
          }

          .portfolio-image{
            position:relative;
            overflow:hidden;
            height:320px;
          }

          .portfolio-image img{
            width:100%;
            height:100%;
            object-fit:cover;
            transition:0.5s ease;
          }

          .portfolio-card:hover .portfolio-image img{
            transform:scale(1.08);
          }

          .category-badge{
            position:absolute;
            top:14px;
            left:14px;
            background:#fff;
            color:#3f5bd8;
            padding:7px 14px;
            font-size:11px;
            font-weight:700;
            letter-spacing:0.5px;
          }

          .portfolio-content{
            padding:24px;
          }

          .title-row{
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:12px;
          }

          .title-row h3{
            margin:0;
            font-size:22px;
            color:#1f2f6f;
          }

          .year{
            color:#888;
            font-size:13px;
          }

          .description{
            color:#666;
            line-height:1.8;
            font-size:15px;
            margin-bottom:24px;
          }

          .portfolio-footer{
            display:flex;
            justify-content:space-between;
            align-items:center;
            flex-wrap:wrap;
            gap:20px;
            border-top:1px solid #eee;
            padding-top:20px;
          }

          .stats{
            display:flex;
            gap:35px;
          }

          .stat small{
            display:block;
            color:#999;
            font-size:10px;
            margin-bottom:5px;
          }

          .stat h4{
            margin:0;
            color:#1f2f6f;
            font-size:18px;
          }

          .buttons{
            display:flex;
            gap:12px;
          }

          .portfolio-btn{
            display:flex;
            align-items:center;
            gap:8px;
            padding:10px 18px;
            border:1px solid #3f5bd8;
            background:#fff;
            color:#3f5bd8;
            font-size:13px;
            font-weight:600;
            cursor:pointer;
            transition:0.3s;
          }

          .portfolio-btn:hover{
            background:#3f5bd8;
            color:#fff;
          }

          @media(max-width:768px){
            .portfolio-grid{
              grid-template-columns:1fr;
            }

            .portfolio-image{
              height:250px;
            }

            .portfolio-footer{
              flex-direction:column;
              align-items:flex-start;
            }
          }
        `}
      </style>

      <section className="portfolio-section">
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#1f2f6f",
              marginBottom: "10px",
            }}
          >
            Portfolio
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

          <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <div className="filter-buttons">
          <button className="filter-btn active">All Projects</button>
          <button className="filter-btn">Consulting</button>
          <button className="filter-btn">Financial Services</button>
          <button className="filter-btn">Technology</button>
          <button className="filter-btn">Enterprise Solutions</button>
        </div>

        <div className="portfolio-grid">
          {portfolioData.map((item, index) => (
            <div className="portfolio-card" key={index}>
             
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />

                <div className="category-badge">
                  {item.category}
                </div>
              </div>

              <div className="portfolio-content">
                <div className="title-row">
                  <h3>{item.title}</h3>

                  <span className="year">{item.year}</span>
                </div>

                <p className="description">{item.desc}</p>

                <div className="portfolio-footer">
                  <div className="stats">
                    <div className="stat">
                      <small>{item.stat1Label}</small>
                      <h4>{item.stat1}</h4>
                    </div>

                    <div className="stat">
                      <small>{item.stat2Label}</small>
                      <h4>{item.stat2}</h4>
                    </div>
                  </div>

                  <div className="buttons">
                    <button className="portfolio-btn">
                      <FaEye />
                      View
                    </button>

                    <button className="portfolio-btn">
                      <FaRegFileAlt />
                      Case Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
