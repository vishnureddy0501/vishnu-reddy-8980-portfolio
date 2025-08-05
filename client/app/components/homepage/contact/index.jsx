"use client";
import { FaLightbulb } from "react-icons/fa";
import { useState } from "react";
import {
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Send
} from "lucide-react";

const inputFields = [
  {
    name: "fullName",
    type: "text",
    placeholder: "Your full name",
    icon: <User size={20} />
  },
  {
    name: "email",
    type: "email",
    placeholder: "your.email@example.com",
    icon: <Mail size={20} />
  },
  {
    name: "subject",
    type: "text",
    placeholder: "What's this about?",
    icon: <MessageSquare size={20} />
  }
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div id="contact" className="group relative bg-[#0e1129] transition duration-300 ease-in-out text-white py-20 px-6 md:px-24 overflow-hidden border border-violet-800 rounded-2xl shadow-[0_0_50px_#281b89aa]">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-[#24216833] to-transparent opacity-10 pointer-events-none" />

      <div className="flex flex-col items-center text-center pb-16 px-4">
        <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-[#1a1443] text-white text-2xl font-semibold tracking-wide shadow-[0_0_20px_rgba(112,89,255,0.4)] ring-1 ring-violet-600/50 backdrop-blur-md">
          <FaLightbulb className="text-[#16f2b3] w-6 h-6 drop-shadow-[0_0_10px_#16f2b3]" />
          <span className="bg-gradient-to-r from-[#8f43ff] via-[#8433ff] to-[#16f2b3] bg-clip-text text-transparent">
            Get In Touch
          </span>
        </div>
        <p className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed">
          I'm always open to discussing new opportunities, creative ideas, or collaborations on exciting projects.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left */}
{/* Left */}
<div className="flex-1 space-y-6">
  <h3 className="text-2xl font-semibold text-white">Let’s Connect</h3>
  <p className="text-gray-400">
    Whether you're looking for a dedicated developer, have a project in mind, or just want to say hello,
    I'd love to hear from you. Let's build something amazing!
  </p>

  <div className="space-y-6 text-gray-300">
    {/* Email */}
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-[#131a3a] text-[#16f2b3] shadow-[0_0_15px_#16f2b366]">
        <Mail size={20} />
      </div>
      <div>
        <div className="font-semibold text-white">Email</div>
        <div className="text-sm text-gray-400">cse4096@gmail.com</div>
      </div>
    </div>

    {/* Phone */}
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-[#131a3a] text-[#16f2b3] shadow-[0_0_15px_#16f2b366]">
        <Phone size={20} />
      </div>
      <div>
        <div className="font-semibold text-white">Phone</div>
        <div className="text-sm text-gray-400">+91 9565314883</div>
      </div>
    </div>

    {/* Location */}
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-[#131a3a] text-[#16f2b3] shadow-[0_0_15px_#16f2b366]">
        <MapPin size={20} />
      </div>
      <div>
        <div className="font-semibold text-white">Location</div>
        <div className="text-sm text-gray-400">Lucknow, Uttar Pradesh, India</div>
      </div>
    </div>
  </div>

  {/* Subtitle / Badge */}
  <div className="text-white text-[1rem] mt-2 mb-1">
    Open for collaborations & new opportunities
  </div>

  {/* Social Icons */}
  <div className="flex gap-5">
    {[
      { Icon: Linkedin, href: "https://linkedin.com/in/yourname" },
      { Icon: Github, href: "https://github.com/yourusername" },
      { Icon: Twitter, href: "https://twitter.com/yourusername" }
    ].map(({ Icon, href }, i) => (
      <a
        key={i}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 rounded-full border border-[#381e8c] bg-gradient-to-br from-[#ff5f6d] via-[#845ec2] to-[#2f80ed] hover:from-[#845ec2] hover:to-[#ff5f6d] shadow-md transition-colors duration-300"
      >
        <Icon
          size={20}
          className="text-white"
        />
      </a>
    ))}
  </div>

</div>

        {/* Right - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex-1 space-y-6 bg-gradient-to-br from-[#0f132c] to-[#0c1028] border border-[#281b89] rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-3 mb-2 text-xl font-semibold text-white">
            <Send className="text-[#16f2b3]" />
            <span>Send a Message</span>
          </div>

          <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-t" />

          {inputFields.map(({ name, type, placeholder, icon }) => (
            <div
              key={name}
              className="flex items-center px-4 py-3 rounded-lg bg-[#131a3a] border border-transparent focus-within:border-[#16f2b3] transition"
              style={{
                boxShadow:
                  "inset 0 0 0 1px transparent, 0 0 8px rgba(22, 242, 179, 0.2)"
              }}
            >
              <div className="text-[#16f2b3] mr-3">{icon}</div>
              <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none autofill:bg-[#131a3a] autofill:shadow-[inset_0_0_0px_1000px_#131a3a]"
                autoComplete="off"
              />
            </div>
          ))}

          <div className="flex items-start px-4 py-3 rounded-lg bg-[#131a3a] border border-transparent focus-within:border-[#16f2b3] transition">
            <div className="text-[#16f2b3] mt-2 mr-3">
              <MessageSquare size={20} />
            </div>
            <textarea
              name="message"
              placeholder="Tell me about your project or just say hello..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none autofill:bg-[#131a3a] autofill:shadow-[inset_0_0_0px_1000px_#131a3a]"
              autoComplete="off"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 text-sm font-semibold rounded-lg text-black bg-gradient-to-r from-[#16f2b3] via-[#8f43ff] to-[#8433ff] hover:opacity-90 transition-all shadow-[0_0_12px_#16f2b366] flex justify-center items-center gap-2"
          >
            <Send size={18} /> Send Message
          </button>

          <div className="h-1 w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent rounded-b" />
        </form>
      </div>
    </div>
  );
}
