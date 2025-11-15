import React from "react";
import { useNavigate } from "react-router-dom";
import {
  PenTool,
  FileText,
  Image as ImageIcon,
  Sparkles,
  Star,
  Check,
  Users,
  ArrowRight,
  ZapIcon,
  MessageSquareText,
  ShieldCheck,
  Layers,
  Sparkle,
  Gem,
} from "lucide-react";
// import { assets } from "../assets/assets";

const WatchDemo = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#050814] text-white relative overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 gradient-glow opacity-80 pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />

      {/* Floating blobs */}
      <div className="absolute -top-24 -left-10 w-64 h-64 bg-primary/25 rounded-full blur-3xl float" />
      <div className="absolute bottom-0 -right-16 w-72 h-72 bg-[#009BB3]/30 rounded-full blur-3xl float" />

      <header className="relative max-w-6xl mx-auto pt-24 pb-16 px-6 text-center fade-in">
        <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-gray-300 mb-6 shine">
          <Gem className="w-4 h-4 text-primary" />
          Experience the full power of your AI creation studio
        </span>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
          Build{" "}
          <span className="text-primary neon-pulse">content, visuals</span> &{" "}
          <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-cyan-400 blink-soft">
            career assets
          </span>{" "}
          in minutes.
        </h1>

        {/* <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed fade-up">
          AiVora is your end-to-end AI studio for writing, design, and career
          growth. One workspace, multiple powerful tools — all tuned for speed,
          quality, and your workflow.
        </p> */}

        <TypingEffect
          text="Experience a premium collection of AI tools that help you write, design, analyze, enhance, and automate your creative workflows with incredible speed."
          speed={35}
          eraseSpeed={20}
          delay={1200}
        />

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/ai")}
            className="px-10 py-3 rounded-xl bg-primary text-black font-semibold hover:scale-105 active:scale-95 transition shadow-xl flex items-center gap-2 cursor-pointer"
          >
            Start Creating
          </button>
        </div>

        <div className="mt-14 max-w-4xl mx-auto hover-tilt rounded-3xl flow-through glossy p-[2px] shine">
          <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/10 p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-1 text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mb-2 text-center">
                Live flow
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-center">
                From prompt → article → visuals → resume, in one place.
              </h2>
              <p className="text-gray-300 text-sm sm:text-base text-center">
                Type a topic, generate a polished draft, turn it into images,
                summarize for LinkedIn, and refine your resume
                <br /> All without leaving AiVora.
              </p>
            </div>
            {/* <img
              src={assets.image_tool}
              alt="AiVora preview"
              className="w-full sm:w-60 rounded-2xl object-cover shadow-xl"
            /> */}
          </div>
        </div>
      </header>

      <section className="relative max-w-6xl mx-auto px-6 mt-10 section-fade">
        <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-10">
          Why people actually use AiVora?
        </h2>

        <div className="why-flow-container">
          <div className="why-flow-track">
            <div className="why-card-width">
              <WhyCard
                icon={<ZapIcon className="w-10 h-10 text-primary" />}
                title="Lightning Fast"
                text="Stop losing time to blank docs and Photoshop layers. AiVora helps you go from idea to ready-to-ship content in minutes, not days."
              />
            </div>

            <div className="why-card-width">
              <WhyCard
                icon={<Users className="w-10 h-10 text-primary" />}
                title="Designed for Everyone"
                text=" Whether you're a student, marketer, developer, freelancer or business - AiVora adapts to your needs."
              />
            </div>

            <div className="why-card-width">
              <WhyCard
                icon={<Star className="w-10 h-10 text-primary" />}
                title="Premium Output Quality"
                text="Your content and visuals are clean, structured, and polished enough to send to clients, managers, or hiring managers."
              />
            </div>

            <div className="why-card-width">
              <WhyCard
                icon={<MessageSquareText className="w-10 h-10 text-primary" />}
                title="Instant Real-Time Feedback"
                text="Your content updates live as you type. No waiting, no refresh - creativity flows exactly at your speed."
              />
            </div>

            <div className="why-card-width">
              <WhyCard
                icon={<ShieldCheck className="w-10 h-10 text-primary" />}
                title="Secure by Design"
                text="Your content stays yours. Encrypted inputs, secure processing, and no training on your private data."
              />
            </div>

            <div className="why-card-width">
              <WhyCard
                icon={<Layers className="w-10 h-10 text-primary" />}
                title="Branding Strategy"
                text="Images generated automatically match your article tone, style, and aesthetic - perfect for branding."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 mt-24 section-fade">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold mb-4">
              A single flow, not disconnected tools.
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-5">
              AiVora is built to feel like a creative studio, not a pile of
              random AI forms. Every tool feeds into the next.
            </p>

            <ol className="space-y-4 text-sm sm:text-base">
              <FlowStep
                step="01"
                title="Draft your core piece"
                text="Start with the AI Article Writer. Define your topic and tone, let AI handle structure and depth."
              />
              <FlowStep
                step="02"
                title="Generate visuals that match"
                text="Use the AI Image Generator to build thumbnail, banners, or supporting visuals based on the same prompt."
              />
              <FlowStep
                step="03"
                title="Upgrade your profile and career"
                text="Take that content and feed it into the Resume Review tool for better bullet points, or LinkedIn-ready language."
              />
            </ol>
          </div>

          <div className="lg:w-1/2 flex flex-col gap-6">
            <GlassToolCard
              icon={<PenTool className="w-6 h-6 text-primary" />}
              title="Long-form Article"
              subtitle="Write"
              text="Blog posts, case studies, landing copy."
              //   image={assets.article_tool}
            />
            <GlassToolCard
              icon={<ImageIcon className="w-6 h-6 text-primary" />}
              title="Prompt → Visuals"
              subtitle="Design"
              text="Thumbnails, hero images, campaign visuals."
              //   image={assets.image_tool}
            />
            <GlassToolCard
              icon={<FileText className="w-6 h-6 text-primary" />}
              title="Career Assets"
              subtitle="Grow"
              text="Resume bullets, professional statements, portfolio blurbs."
              //   image={assets.resume_tool}
            />
          </div>
        </div>
      </section>

      <section className="relative max-w-6xl mx-auto px-6 mt-24 pb-28 section-fade">
        <h2 className="text-center text-3xl lg:text-4xl font-semibold mb-14">
          Pick how serious you want to get!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <PricingCard
            title="Free Plan"
            description="Perfect to explore AiVora and run small experiments."
            features={[
              "10 article generations",
              "10 blog titles",
              "Basic dashboard",
              "Access to public community",
            ]}
            onClick={() => navigate("/signup")}
          />
          <PricingCard
            premium
            title="Premium"
            description="For people who actually ship content and want leverage."
            features={[
              "Unlimited articles & titles",
              "AI image generator included",
              "Resume review access",
              "Background & object removal",
              "Priority processing",
            ]}
            onClick={() => navigate("/pricing")}
          />
        </div>
      </section>
    </div>
  );
};

const TypingEffect = ({ text, speed = 35, eraseSpeed = 20, delay = 1200 }) => {
  const [displayed, setDisplayed] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let interval;

    if (!isDeleting) {
      // Typing forward
      interval = setInterval(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex((prev) => prev + 1);

        if (index === text.length) {
          clearInterval(interval);
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    } else {
      // Deleting backwards
      interval = setInterval(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex((prev) => prev - 1);

        if (index === 0) {
          clearInterval(interval);
          setIsDeleting(false);
        }
      }, eraseSpeed);
    }

    return () => clearInterval(interval);
  }, [index, isDeleting, text, speed, eraseSpeed, delay]);

  return (
    <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-up">
      {displayed}
      <span className="border-r-2 border-gray-400 ml-1 animate-pulse"></span>
    </p>
  );
};

const WhyCard = ({ icon, title, text }) => (
  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-7 border border-white/10 hover-tilt shine">
    <div className="mb-4">{icon}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-300 leading-relaxed">{text}</p>
  </div>
);

const FlowStep = ({ step, title, text }) => (
  <li className="flex gap-3 items-start">
    <span className="mt-1 inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 text-xs font-semibold">
      {step}
    </span>
    <div>
      <p className="font-medium text-sm sm:text-base">{title}</p>
      <p className="text-xs sm:text-sm text-gray-300">{text}</p>
    </div>
  </li>
);

const GlassToolCard = ({ icon, title, subtitle, text, image }) => (
  <div className="flow-border rounded-2xl p-0.5">
    <div className="rounded-2xl bg-white/5 backdrop-blur-xl p-4 sm:p-5 border border-white/10 flex gap-4">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-20 h-20 rounded-xl object-cover hidden sm:block"
        />
      )}
      <div className="flex-1">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
          {subtitle}
        </p>
        <div className="flex items-center gap-2 mt-1 mb-1">
          {icon}
          <h3 className="text-base sm:text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-300 text-xs sm:text-sm">{text}</p>
      </div>
    </div>
  </div>
);

const PricingCard = ({ title, description, features, premium }) => (
  <div
    className={`rounded-2xl p-8 hover-tilt ${
      premium
        ? "bg-primary text-black shadow-xl"
        : "bg-white/5 backdrop-blur-xl border border-white/10"
    }`}
  >
    <h3 className="text-2xl font-semibold mb-2">{title}</h3>
    <p
      className={`text-sm mb-6 ${premium ? "text-black/80" : "text-gray-300"}`}
    >
      {description}
    </p>
    <ul className="space-y-3 text-sm">
      {features.map((f, idx) => (
        <li key={idx} className="flex items-center gap-2">
          <Check
            className={`w-5 h-5 ${premium ? "text-black" : "text-primary"}`}
          />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    {/* <button
      onClick={onClick}
      className={`mt-8 w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 ${
        premium
          ? "bg-black text-primary hover:bg-black/90"
          : "bg-white text-black hover:bg-gray-100"
      } transition`}
    >
      {premium ? "Upgrade now" : "Get started"}
      <ArrowRight className="w-4 h-4" />
    </button> */}
  </div>
);

export default WatchDemo;
