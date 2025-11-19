// ✅ Import your images
import orthoImg from "../assets/images/blog/blog1.jpg";
import nephroImg from "../assets/images/blog/blog1.jpg";
import aiImg from "../assets/images/blog/blog1.jpg";

// ✅ Import Link from React Router
import { Link } from "react-router-dom";

const Blog = () => {
  const blogs = [
    {
      title: "Transform Your Practice with Expert Orthopaedic Billing Services",
      slug: "orthopaedic-billing",
      img: orthoImg,
      desc: "Orthopaedic practices face complex billing challenges such as accurate documentation, coding, and timely claims submission. Expert billing services streamline processes and enhance revenue management.",
    },
    {
      title: "A Comprehensive Guide to Nephrology Medical Billing: Best Practices and Services",
      slug: "nephrology-billing",
      img: nephroImg,
      desc: "Nephrology billing plays a key role in maintaining the financial health of kidney care providers. With rising patient numbers, accurate billing and claims are crucial for success.",
    },
    {
      title: "Artificial Intelligence in Medical Billing",
      slug: "ai-in-billing",
      img: aiImg,
      desc: "AI is revolutionizing medical billing by enhancing accuracy, automating claim processing, and improving efficiency in healthcare revenue management systems.",
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Latest Blog Posts</h2>
        <div className="row gy-5">
          {blogs.map((blog, index) => (
            <div key={index} className="col-lg-6 col-xl-4 col-md-6">
              <div className="card border-0 shadow-sm h-100 blog-card overflow-hidden d-flex flex-column">
                <div className="position-relative overflow-hidden">
                  <Link to={`/blog/${blog.slug}`}>
                    <img
                      src={blog.img}
                      alt={blog.title}
                      className="img-fluid w-100 blog-img"
                      style={{
                        height: "230px",
                        objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                    />
                  </Link>
                </div>
                <div className="card-body p-4 d-flex flex-column">
                  <h5 className="fw-semibold mb-3">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-dark text-decoration-none hover-link"
                    >
                      {blog.title}
                    </Link>
                  </h5>
                  <p className="text-muted flex-grow-1">{blog.desc}</p>
                  <div className="mt-auto">
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="btn btn-outline-primary mt-3 read-more-btn"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        .blog-card:hover .blog-img {
          transform: scale(1.05);
        }

        .hover-link:hover {
          color: #f67d4a !important;
        }

        .read-more-btn {
          border-color: #f67d4a !important;
          color: #f67d4a !important;
          transition: all 0.3s ease;
        }

        .read-more-btn:hover {
          background-color: #f67d4a !important;
          color: #fff !important;
        }

        @media (max-width: 768px) {
          .blog-card img {
            height: 200px !important;
          }
        }

        @media (max-width: 576px) {
          .blog-card img {
            height: 180px !important;
          }
          .card-body {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Blog;
