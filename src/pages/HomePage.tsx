import { Globe } from "@/components/lightswind/globe";
import { motion } from "framer-motion";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { TeamCarousel } from "@/components/lightswind/team-carousel";
import { SlidingLogoMarquee } from "@/components/lightswind/sliding-logo-marquee";
import { testimonials, features, techLogos } from "@/lib/data";
import { Star, Code, ShieldCheck } from "lucide-react";

const iconMap = {
	Star: <Star />,
	Code: <Code />,
	ShieldCheck: <ShieldCheck />,
};

export function HomePage() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative w-full h-screen overflow-hidden flex items-center justify-center"
			>
				<div className="absolute inset-0 bg-grid-white/[0.1] z-0" />
				<div className="container mx-auto px-4 z-10">
					<div className="grid md:grid-cols-2 gap-8 items-center">
						<div className="text-center md:text-left">
							<motion.h1
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="text-4xl md:text-6xl font-bold text-white leading-tight"
							>
								Creative Developer <br />
								<span className="text-gray-400">
									Building Modern Web Experiences
								</span>
							</motion.h1>
							<motion.p
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.4 }}
								className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl mx-auto md:mx-0"
							>
								I craft high-performance, beautiful, and intuitive web
								applications that solve real-world problems and delight users.
							</motion.p>
						</div>
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
							className="w-full h-[400px] md:h-[500px] flex items-center justify-center"
						>
							<Globe className="w-full h-full" />
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Features Section */}
			<section className="py-20 w-full">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center text-white mb-12">
						What I Offer
					</h2>
					<GlowingCards>
						{features.map((feature, index) => (
							<GlowingCard key={index} className="flex flex-col items-center text-center">
								<div className="mb-4 text-purple-400">{iconMap[feature.icon]}</div>
								<h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
								<p className="text-gray-400">{feature.description}</p>
							</GlowingCard>
						))}
					</GlowingCards>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className="py-20 w-full bg-black">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center text-white mb-12">
						Loved by Developers
					</h2>
					<TeamCarousel items={testimonials} />
				</div>
			</section>

			{/* Tech Stack Section */}
			<section className="py-20 w-full">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold text-center text-white mb-12">
						Powering Modern Web Applications
					</h2>
					<SlidingLogoMarquee logos={techLogos} />
				</div>
			</section>
		</div>
	);
}