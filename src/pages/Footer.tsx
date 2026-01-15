import { Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/akashad14",
      label: "Visit GitHub profile",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/akashdeep-singh-613644224/",
      label: "Visit LinkedIn profile",
    },
  ]

  const quickLinks = [
    { href: "#Home", label: "Home" },
    { href: "#About", label: "About" },
    { href: "#Projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <footer className="w-full bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 border-t border-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">

        <div className="mb-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Portfolio</h3>
            <p className="text-sm text-slate-400">
              Crafting beautiful web experiences with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Navigation</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-sm text-slate-400 transition-colors hover:text-purple-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Contact</h4>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Email: akashdeep0599@gmail.com</p>
              <p>Location: Mohali, India</p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Follow</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Button
                    key={social.name}
                    asChild
                    size="icon"
                    className="bg-slate-800 text-purple-400 hover:bg-purple-600 hover:text-white"
                    aria-label={social.label}
                  >
                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                      <Icon size={18} />
                    </a>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {currentYear} Akash. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-slate-500 hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-slate-500 hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
