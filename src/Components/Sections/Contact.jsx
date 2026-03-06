import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";
// ======================================================
import HeaderSection from "../Templates/HeaderSection";
import Toast from "../Templates/Toast/Toast";
// ======================================================
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const publicKey = "zdqIsAXr7OgcsK4y5";

  const [formInputs, setFormInputs] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // validation
    const { fullName, email, message } = formInputs;
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setToast({
        show: true,
        message: "Please fill all fields ⚠️",
        type: "error",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "o2utgua",
        "template_jbu4yfa",
        {
          fullName: formInputs.fullName,
          email: formInputs.email,
          message: formInputs.message,
        },
        publicKey,
      )
      .then(() => {
        setLoading(false);
        setToast({
          show: true,
          message: "Message sent successfully 🚀",
          type: "success",
        });

        setFormInputs({
          fullName: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setLoading(false);
        setToast({
          show: true,
          message: "Something went wrong ❌",
          type: "error",
        });
      });
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-(--bg-primary) text-(--text-primary)"
    >
      <HeaderSection
        title="Let's build your next big idea"
        description="Contact"
      />

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast({ ...toast, show: false })}
        />
      )}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="space-y-8">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-(--color-primary)/10 text-(--color-primary) text-2xl">
              <MdOutlineEmail />
            </div>

            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-(--text-secondary)">haitam.nefal@gmail.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-xl bg-(--color-primary)/10 text-(--color-primary) text-2xl">
              <FaLocationDot />
            </div>

            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-(--text-secondary)">Beni Mellal, Morocco</p>
            </div>
          </div>

          {/* Social */}
          <div className="flex gap-4 pt-4">
            <a
              href="#"
              className="p-4 rounded-full bg-(--bg-surface) shadow-md hover:-translate-y-2 hover:bg-(--color-primary) hover:text-white transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="p-4 rounded-full bg-(--bg-surface) shadow-md hover:-translate-y-2 hover:bg-(--color-primary) hover:text-white transition duration-300"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-8 rounded-3xl bg-(--bg-surface) shadow-xl"
        >
          {/* Full Name */}
          <div>
            <label className="block mb-2 font-medium">Full Name</label>

            <input
              type="text"
              value={formInputs.fullName}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  fullName: e.target.value,
                })
              }
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-(--text-secondary)/30 focus:outline-none focus:border-(--color-primary) transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              value={formInputs.email}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  email: e.target.value,
                })
              }
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-(--text-secondary)/30 focus:outline-none focus:border-(--color-primary) transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block mb-2 font-medium">Message</label>

            <textarea
              rows="4"
              value={formInputs.message}
              onChange={(e) =>
                setFormInputs({
                  ...formInputs,
                  message: e.target.value,
                })
              }
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-xl bg-transparent border border-(--text-secondary)/30 focus:outline-none focus:border-(--color-primary) transition resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-full bg-(--color-primary) hover:bg-(--color-primary-hover) disabled:opacity-50 text-white font-medium transition duration-300 shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
