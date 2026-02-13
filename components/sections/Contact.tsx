import React from "react";

const speakerImageUrl =
  "https://res.cloudinary.com/dxboqivs9/image/upload/v1770988194/Image22_eaomgc.png";
const profileImageUrl =
  "https://res.cloudinary.com/dxboqivs9/image/upload/v1770988192/Image21_ypomct.png";

function ScoreRing({
  value,
  label,
  color,
}: {
  value: number;
  label: string;
  color: string;
}) {
  const size = 58;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="text-center">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="mx-auto"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(255,255,255,0.65)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x="50%"
          y="53%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-white font-kanit text-[14px]"
        >
          {value}%
        </text>
      </svg>
      <p className="mt-1 font-kanit text-[14px] text-white">{label}</p>
    </div>
  );
}

export default function Contact() {
  return (
    <section className="w-full bg-white py-16 sm:py-20">
      <div className="mx-auto w-full px-6 sm:px-16">
        <div className="relative overflow-hidden rounded-[22px] bg-gradient-to-r from-[#8C45FF] to-[#992DFF] p-8 sm:p-10 lg:p-12">
          <div className="pointer-events-none absolute -right-24 top-10 h-[280px] w-[280px] rounded-full bg-[#A86BFF]/35 blur-[110px]" />
          <div className="pointer-events-none absolute right-32 bottom-[-120px] h-[260px] w-[260px] rounded-full bg-[#5B6DFF]/20 blur-[120px]" />

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative z-[2] max-w-[470px]">
              <h2 className="font-kanit text-4xl font-medium leading-[1.2] text-white sm:text-5xl">
                Ready to Revolutionize Your Hiring?
              </h2>
              <p className="mt-5 font-kanit text-base leading-relaxed text-[#EEE8FF] sm:text-lg">
                Elevate your hiring process with APAD code&apos;s AI-powered
                interview platform. Join the future of hiring and unlock a new
                level of efficiency, fairness, and insights.
              </p>

              <form className="mt-7 space-y-4">
                <div>
                  <label className="font-kanit text-[28px] text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="font-kanit text-[28px] text-white">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Type your email address"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <div>
                  <label className="font-kanit text-[28px] text-white">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="xxx-xxx-xxxx"
                    className="mt-2 h-[48px] w-full rounded-[14px] border border-white/20 bg-[#C8A7F5]/60 px-4 font-kanit text-sm text-white placeholder:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 inline-flex h-[56px] items-center justify-center rounded-[16px] bg-white px-7 font-kanit text-[34px] text-transparent bg-clip-text bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF] transition-all duration-300 hover:scale-[1.02]"
                >
                  Request Demo
                </button>
              </form>
            </div>

            <div className="relative z-[2] mx-auto w-full max-w-[640px]">
              <img
                src={speakerImageUrl}
                alt="Interview specialist"
                className="mx-auto h-auto w-full max-w-[520px] object-contain"
              />

              <div className="absolute left-[2%] top-[38%] w-[300px] rounded-[22px] border border-[#55B5FF]/70 bg-[#232B41]/78 p-3 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <img
                    src={profileImageUrl}
                    alt="Bonnie profile"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-kanit text-[22px] text-white">Bonnie</p>
                    <p className="font-kanit text-sm text-[#BFC6D8]">
                      Approved
                    </p>
                  </div>
                  <p className="ml-auto font-kanit text-[20px] text-white">
                    95%
                  </p>
                </div>
                <div className="mt-3 h-[6px] w-full rounded-full bg-white/20">
                  <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-[#8C45FF] to-[#2DA8FF]" />
                </div>
              </div>

              <div className="absolute bottom-[3%] right-[2%] w-[280px] overflow-hidden rounded-[28px] border border-[#20303F] bg-[#22262F]/88 p-4 shadow-[0_14px_32px_rgba(0,0,0,0.45)] backdrop-blur-sm">
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#932BFF]/65 to-transparent" />

                <p className="font-kanit text-[34px] leading-none text-white">
                  95%
                </p>
                <p className="mt-1 font-kanit text-sm text-[white]">
                  AI Interview Score Summary
                </p>
                <div className="relative z-[1] mt-4 grid grid-cols-2 gap-x-4 gap-y-3">
                  <ScoreRing
                    value={80}
                    label="Coding Technical"
                    color="#4F6FFF"
                  />
                  <ScoreRing
                    value={90}
                    label="Professionalism"
                    color="#8C45FF"
                  />
                  <ScoreRing value={65} label="Communication" color="#00F2C2" />
                  <ScoreRing value={85} label="Opportunistic" color="#CF4BEA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
