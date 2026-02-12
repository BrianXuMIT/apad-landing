import Button from "../ui/Button";
import Container from "../ui/Container";
import EmailSignup from "../shared/EmailSignup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white section-padding">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            Shaping the next era of{" "}
            <span className="heading-gradient">AI you can trust</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up animation-delay-200">
            Answer insightful questions, explore fresh perspectives, and
            discover how AI's evaluation can lead you to the next Level.
          </p>

          <div className="max-w-md mx-auto mb-16 animate-slide-up animation-delay-300">
            <EmailSignup />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16">
            {[
              {
                emoji: "🤖",
                title: "AI's Question",
                desc: "Advanced AI questioning for deep insights",
              },
              {
                emoji: "⚙️",
                title: "AI Tool",
                desc: "Powerful tools for comprehensive evaluation",
              },
              {
                emoji: "🚀",
                title: "Your Journey",
                desc: "Guided path to better hiring decisions",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 transition-all animate-slide-up group"
                style={{ animationDelay: `${index * 100 + 400}ms` }}
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">
                  {item.emoji}
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
