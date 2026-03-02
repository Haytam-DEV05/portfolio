import HeaderSection from "../Templates/HeaderSection";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
      py-24 px-6
      bg-(--bg-primary)
      text-(--text-primary)
      "
    >
      <HeaderSection
        title="Let's build your next big idea"
        description="Contact"
      />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* LEFT SIDE - Info */}
        <div className="space-y-8" data-aos="fade-up">
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
              className="
              p-4 rounded-full
              bg-(--bg-surface)
              shadow-md
              hover:-translate-y-2
              hover:bg-(--color-primary)
              hover:text-white
              transition duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
              p-4 rounded-full
              bg-(--bg-surface)
              shadow-md
              hover:-translate-y-2
              hover:bg-(--color-primary)
              hover:text-white
              transition duration-300
              "
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <form
          data-aos="zoom-out-right"
          className="
          space-y-6 p-8 rounded-3xl
          bg-(--bg-surface)
          shadow-xl
          animate-slideRight
          "
        >
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              className="
              w-full px-4 py-3 rounded-xl
              bg-transparent
              border border-(--text-secondary)/30
              focus:outline-none
              focus:border-(--color-primary)
              transition
              "
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="
              w-full px-4 py-3 rounded-xl
              bg-transparent
              border border-(--text-secondary)/30
              focus:outline-none
              focus:border-(--color-primary)
              transition
              "
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="4"
              className="
              w-full px-4 py-3 rounded-xl
              bg-transparent
              border border-(--text-secondary)/30
              focus:outline-none
              focus:border-(--color-primary)
              transition
              resize-none
              "
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            className="
            w-full py-3 rounded-full
            bg-(--color-primary)
            hover:bg-(--color-primary-hover)
            text-white font-medium
            transition duration-300
            shadow-lg
            "
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
