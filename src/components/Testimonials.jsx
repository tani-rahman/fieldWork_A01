import { useEffect } from "react";

const testimonials = [
  {
    id: 1,
    stars: 5,
    text: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.",
    name: "Rachel Bennett",
    title: "Strategy Director",
    avatar:
      "/image1.png",
    featured: false,
  },
  {
    id: 2,
    stars: 5,
    text: "Exceptional service delivery and innovative solutions have transformed our business operations.",
    name: "Daniel Morgan",
    title: "Chief Innovation Officer",
    avatar:
      "/image2.png",
    featured: true,
  },
  {
    id: 3,
    stars: 5,
    text: "Strategic partnership has enabled seamless digital transformation and operational excellence.",
    name: "Emma Thompson",
    title: "Digital Lead",
    avatar:
      "/image3.png",
    featured: false,
  },
];

const Stars = ({ count }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="18" height="18" viewBox="0 0 18 18">
        <polygon
          points="9,1 11.5,6.5 17.5,7.2 13,11.5 14.3,17.5 9,14.5 3.7,17.5 5,11.5 0.5,7.2 6.5,6.5"
          fill="#F59E0B"
        />
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ testimonial }) => {
  return (
    <div
      className={`relative p-6 rounded-xl border transition-all duration-300 bg-white hover:-translate-y-1 ${
        testimonial.featured
          ? "border-blue-500 shadow-md"
          : "border-gray-200 shadow-sm"
      }`}
    >
      {testimonial.featured && (
        <div className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded">
          Featured
        </div>
      )}

      <Stars count={testimonial.stars} />

      <p className="text-sm text-gray-600 leading-relaxed mb-5">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-3 border-t pt-4">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full border"
        />

        <div>
          <div className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </div>
          <div className="text-xs text-gray-500">{testimonial.title}</div>
        </div>
      </div>
    </div>
  );
};

export default function Testimonials() {
  useEffect(() => {
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&family=Lora&family=Playfair+Display:wght@700&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);
  }, []);

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center py-16 px-5">
      <div className="max-w-6xl w-full">

        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "42px",
              fontWeight: "700",
              color: "#1f2f6f",
              marginBottom: "10px",
            }}
          >
            Testimonials
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

          <p className="text-sm text-gray-500 max-w-md mx-auto">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

    
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
