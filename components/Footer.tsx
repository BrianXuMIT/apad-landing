'use client'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black py-12 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/60 text-sm">
            © {new Date().getFullYear()} APADCode. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-white/60">
            <a href="https://www.apadcode.com" className="hover:text-white transition-colors">
              Website
            </a>
            <a href="mailto:hello@apadcode.com" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

