import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { useState } from "react";
import { sendContactMessage } from "../services/contactService";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const result = await sendContactMessage(formData);

      alert(result.message);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      alert("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-slate-50"
    >
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Contact Me
          </h2>

          <p className="text-gray-600 mt-3">
            Let's work together
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              rows="5"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border p-3 rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
            <div className="mt-10 text-center">
  <h3 className="text-xl font-semibold mb-5">
    Connect With Me
  </h3>

  <div className="flex justify-center gap-8 text-3xl">
    <a
      href="https://github.com/ankitumath"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <FaGithub />
    </a>

    <a
      href="https://www.linkedin.com/in/ankit-umath-26b928328/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform"
    >
      <FaLinkedin />
    </a>

    <a
      href="mailto:ankitumath30@gmail.com"
      className="hover:scale-110 transition-transform"
    >
      <FaEnvelope />
    </a>
  </div>
</div>
      </div>
    </section>
  );
}

export default Contact;