import Link from "next/link";
import Container from "../ui/Container";

const footerLinks = {
  platform: ["Discover", "About", "Careers", "Services"],
  company: ["Technology", "Work", "Contact us", "Blog"],
  business: ["LinkedIn", "Work", "Services", "Technology"],
  getInTouch: ["Contact Now", "Request Demo", "Support", "Partners"],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-bold mb-4">Platform</h3>
            <ul className="space-y-2">
              {footerLinks.platform.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Business</h3>
            <ul className="space-y-2">
              {footerLinks.business.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Get in touch</h3>
            <ul className="space-y-2">
              {footerLinks.getInTouch.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                ANDCloud
              </span>
              <p className="text-sm text-gray-400 mt-2 max-w-md">
                An artificial intelligence platform that can help company to
                choose the best talent to work with us.
              </p>
              <p className="text-xs text-gray-500 mt-1">ANDCloud 2020</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1"
              >
                Visit Website
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1"
              >
                Explore More
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1"
              >
                Contact Now
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm px-3 py-1"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2026 ANDCloud. All rights reserved.</p>
            <p className="mt-2 font-medium">LEARN MORE ON ANDCLOUD.COM</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
