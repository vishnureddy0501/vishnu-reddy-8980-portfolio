"use client";

import { useState } from "react";
import { FaLightbulb } from "react-icons/fa";
import {
  Mail,
  User,
  MessageSquare,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Code2,
} from "lucide-react";
import GlowCard from "../../helper/glow-card";

import { personalData } from "@/utils/data/personal-data";

const inputFields = [
  {
    name: "fullName",
    type: "text",
    placeholder: "Your full name",
    icon: <User size={20} />,
  },
  {
    name: "email",
    type: "email",
    placeholder: "your.email@example.com",
    icon: <Mail size={20} />,
  },
  {
    name: "subject",
    type: "text",
    placeholder: "What's this about?",
    icon: <MessageSquare size={20} />,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // { type: "success" | "error", message: string }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const url = process.env.NODE_ENV == 'development' ? process.env.NEXT_PUBLIC_DEV_BACKEND_URL : process.env.NEXT_PUBLIC_PROD_BACKEND_URL
      const res = await fetch(`${url}/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: personalData.email, // emails land in your inbox
          subject: formData.subject,
          text: `
From: ${formData.fullName} (${formData.email})
Message: ${formData.message}
          `,
        }),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus({ type: "success", message: "Message sent successfully ✅" });
      setFormData({ fullName: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Failed to send message ❌" });
    } finally {
      setLoading(false);
    }
  };

  const socials = [
    { Icon: Linkedin, href: personalData.linkedIn },
    { Icon: Github, href: personalData.github },
    { Icon: Code2, href: personalData.leetcode },
  ];

  return (
    <GlowCard key={'contact-section'} identifier={'contact-section-data'}>
      <section
        id="contact"
        className="relative bg-[#0e1129] text-white py-10 px-6 md:px-24 border border-violet-800 rounded-2xl shadow-[0_0_50px_#281b89aa] overflow-hidden"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#24216833] to-transparent opacity-10 pointer-events-none" />

        {/* Heading */}
        <div className="flex flex-col items-center text-center pb-16 px-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 mb-6 rounded-full bg-[#1a1443] text-2xl font-semibold shadow-[0_0_20px_rgba(112,89,255,0.4)] ring-1 ring-violet-600/50 backdrop-blur-md">
            <FaLightbulb className="text-[#16f2b3] w-6 h-6" />
            <span className="bg-gradient-to-r from-[#8f43ff] via-[#8433ff] to-[#16f2b3] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </div>
          <p className="text-gray-400 max-w-xl text-lg leading-relaxed">
            I'm always open to discussing new opportunities, creative ideas, or
            collaborations on exciting projects.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Section */}
          <div className="flex-1 space-y-6">
            <h3 className="text-2xl font-semibold">Let’s Connect</h3>
            <p className="text-gray-400">
              Whether you're looking for a dedicated developer, have a project in
              mind, or just want to say hello, I'd love to hear from you.
            </p>

            <div className="space-y-6 text-gray-300">
              {/* Email */}
              <ContactInfo icon={<Mail size={20} />} label="Email" value={personalData.email} />
              {/* Phone */}
              <ContactInfo icon={<Phone size={20} />} label="Phone" value={personalData.phone} />
              {/* Location */}
              <ContactInfo icon={<MapPin size={20} />} label="Location" value={personalData.address} />
            </div>

            <p className="text-white mt-2">Open for collaborations & new opportunities</p>

            {/* Socials */}
            <div className="flex gap-5">
              {socials.map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-[#381e8c] bg-gradient-to-br from-[#ff5f6d] via-[#845ec2] to-[#2f80ed] hover:opacity-80 transition"
                >
                  <Icon size={20} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Form */}
          <form
            onSubmit={handleSubmit}
            className="flex-1 space-y-6 bg-gradient-to-br from-[#0f132c] to-[#0c1028] border border-[#281b89] rounded-xl p-6 shadow-lg"
          >
            <div className="flex items-center gap-3 mb-2 text-xl font-semibold">
              <Send className="text-[#16f2b3]" />
              <span>Send a Message</span>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent rounded-t" />

            {inputFields.map(({ name, type, placeholder, icon }) => (
              <InputField
                key={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={formData[name]}
                onChange={handleChange}
                icon={icon}
              />
            ))}

            <TextareaField
              name="message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 text-sm font-semibold rounded-lg text-black bg-gradient-to-r from-[#16f2b3] via-[#8f43ff] to-[#8433ff] hover:opacity-90 transition flex justify-center items-center gap-2 shadow-[0_0_12px_#16f2b366]"
            >
              {loading ? "Sending..." : <><Send size={18} /> Send Message</>}
            </button>

            {status && (
              <p
                className={`text-sm mt-2 ${status.type === "success" ? "text-green-400" : "text-red-400"
                  }`}
              >
                {status.message}
              </p>
            )}

            <div className="h-1 w-full bg-gradient-to-r from-transparent via-violet-600 to-transparent rounded-b" />
          </form>
        </div>
      </section>
    </GlowCard>
  );
}

/* ---- Reusable Components ---- */

function ContactInfo({ icon, label, value }) {
  return (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-full bg-[#131a3a] text-[#16f2b3] shadow-[0_0_15px_#16f2b366]">
        {icon}
      </div>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-sm text-gray-400">{value}</div>
      </div>
    </div>
  );
}

function InputField({ name, type, placeholder, value, onChange, icon }) {
  return (
    <div className="flex items-center px-4 py-3 rounded-lg bg-[#131a3a] border border-transparent focus-within:border-[#16f2b3] transition">
      <div className="text-[#16f2b3] mr-3">{icon}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        autoComplete="off"
      />
    </div>
  );
}

function TextareaField({ name, value, onChange }) {
  return (
    <div className="flex items-start px-4 py-3 rounded-lg bg-[#131a3a] border border-transparent focus-within:border-[#16f2b3] transition">
      <div className="text-[#16f2b3] mt-2 mr-3">
        <MessageSquare size={20} />
      </div>
      <textarea
        name={name}
        placeholder="Tell me about your project or just say hello..."
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none"
        autoComplete="off"
      />
    </div>
  );
}
