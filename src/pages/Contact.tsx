"use client"

import React from "react"

import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-20 py-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-accent/15 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p
            className={`text-sm md:text-base font-medium text-accent uppercase tracking-widest mb-4 transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Get in Touch
          </p>
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transform transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-gradient">
              Let's Create Something Amazing
            </span>
          </h2>
          <p
            className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto transform transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <div
              className={`group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">Get in touch via email</p>
                <a
                  href="mailto:your.email@example.com"
                  className="text-accent font-medium hover:text-accent/80 transition-colors flex items-center gap-2"
                >
                  your.email@example.com
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div
              className={`group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground mb-2">Call or text anytime</p>
                <a href="tel:+1234567890" className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center gap-2">
                  +1 (234) 567-890
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            {/* <div
              className={`group relative p-6 rounded-2xl bg-card/50 border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Location</h3>
                <p className="text-muted-foreground mb-2">Based in</p>
                <p className="text-accent font-medium">New York, USA</p>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-2 transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <form
              onSubmit={handleSubmit}
              className="relative p-8 rounded-2xl bg-card/50 border border-border backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl"></div>

              <div className="relative space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder-muted-foreground"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder-muted-foreground"
                      required
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's discuss a project"
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder-muted-foreground"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts, ideas, or project details..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-foreground placeholder-muted-foreground resize-none"
                    required
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="group relative flex-1 px-8 py-3 font-semibold rounded-lg bg-gradient-to-r from-accent via-primary to-accent text-accent-foreground overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/50 hover:scale-105 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        </div>
    </section>
    )
}