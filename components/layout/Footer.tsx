import { FaEnvelope } from "react-icons/fa6";
import { SiLinkedin, SiMedium, SiWhatsapp, SiX } from "react-icons/si";
import {
  LINKEDIN_URL,
  MEDIUM_URL,
  SUPPORT_MAILTO,
  WHATSAPP_URL,
  X_URL,
} from "@/lib/links";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="bg-gradient-to-r from-[#8C45FF] via-[#8F35FA] to-[#992DFF]">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-3 sm:px-10 lg:px-16">
          <div className="flex items-center justify-between gap-4">
            <p className="font-kanit text-[14px] text-white">
              © 2026 APADCode, Inc. All rights reserved.
            </p>

            <div className="flex items-center gap-3 text-white">
              <a
                href={SUPPORT_MAILTO}
                aria-label="Email APADCode support"
                className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors duration-300 hover:text-[#FFD35C]"
              >
                <FaEnvelope className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with APADCode on WhatsApp"
                className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors duration-300 hover:text-[#25D366]"
              >
                <SiWhatsapp className="h-4 w-4" />
              </a>
              <a
                href={MEDIUM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="APADCode on Medium"
                className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors duration-300 hover:text-[#00D084]"
              >
                <SiMedium className="h-4 w-4" />
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="APADCode on LinkedIn"
                className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors duration-300 hover:text-[#7CC2FF]"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="APADCode on X"
                className="inline-flex h-8 w-8 items-center justify-center text-white transition-colors duration-300 hover:text-[#C5D5FF]"
              >
                <SiX className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
