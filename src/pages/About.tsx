"use client"

import type React from "react"
import { Mail, Phone, MapPin, Cake } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div id="About" className="min-h-screen">
      {/* Header */}
      <div className="pt-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h1>
          <div className="h-1.5 w-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image Section */}
          <div className="flex items-center justify-center animate-scale-in">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl border border-cyan-400/30 hover:border-cyan-400/60 transition-colors duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              <Image
                src="/about1.png"
                alt="Developer at work"
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Text Section */}
          <div className="flex flex-col justify-center space-y-8 animate-slide-in-right">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Who Am I?
              </h2>

              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-lg hover:text-cyan-300 transition-colors duration-300">
                  I&apos;m a Frontend Developer passionate about creating responsive and
                  user-friendly web applications using React.js, Next.js, and
                  JavaScript. I enjoy turning ideas into clean and interactive
                  designs while focusing on UI and performance optimization.
                </p>

                <p className="text-lg hover:text-cyan-300 transition-colors duration-300">
                  Always eager to learn new technologies and improve my skills,
                  I am looking for opportunities to contribute and grow in a
                  dynamic development team.
                </p>
              </div>
            </div>

            {/* Personal Info Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <InfoCard icon={Phone} label="Phone" value="+123 456 7890" />
              <InfoCard icon={Mail} label="Email" value="example@mail.com" />
              <InfoCard icon={MapPin} label="Location" value="India" />
              <InfoCard icon={Cake} label="Birthday" value="Mar 14, 2001" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface InfoCardProps {
  icon: React.ComponentType<{ className?: string }>
  label: string
  value: string
}

function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-300"></div>

      <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
        <div className="flex items-start gap-3">
          <Icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
          <div className="flex-1 min-w-0">
            <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-1">
              {label}
            </p>
            <p className="text-white font-semibold truncate group-hover:text-cyan-300 transition-colors duration-300">
              {value}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
