import Globe from "@/components/lightswind/globe";
import { motion } from "framer-motion";
import { GlowingCards, GlowingCard } from "@/components/lightswind/glowing-cards";
import { TeamCarousel } from "@/components/lightswind/team-carousel";
import { SlidingLogoMarquee } from "@/components/lightswind/sliding-logo-marquee";
import { BentoGrid, BentoGridItem } from "@/components/lightswind/bento-grid";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/lightswind/accordion";
import { testimonials, features, techLogos, projects, faqs } from "@/lib/data";
import {
	Star,
	Code,
	ShieldCheck,
	ShoppingCart,
	LayoutDashboard,
	Smartphone,
	Bot,
	ArrowRight,
} from "lucide-react";

const iconMap = {
	Star: <Star />,
	Code: <Code />,
	ShieldCheck: <ShieldCheck />,
};

const projectIconMap = {
	ShoppingCart: <ShoppingCart />,
	LayoutDashboard: <LayoutDashboard />,
	Smartphone: <Smartphone />,
	Bot: <Bot />,
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

			{/* Projects Section */}
			<section className="py-20 w-full">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl font-bold text-center text-white mb-12">
						Featured Projects
					</h2>
					<BentoGrid className="max-w-4xl mx-auto">
						{projects.map((item, i) => (
							<BentoGridItem
								key={i}
								title={item.title}
								description={item.description}
								header={
									<img
										src={item.header}
										alt={item.title}
										className="w-full h-full object-cover rounded-lg"
									/>
								}
								icon={projectIconMap[item.icon]}
								className={item.className}
							/>
						))}
					</BentoGrid>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="py-20 w-full bg-black">
				<div className="container mx-auto px-4 max-w-3xl">
					<h2 className="text-4xl font-bold text-center text-white mb-12">
						Frequently Asked Questions
					</h2>
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq, index) => (
							<AccordionItem value={`item-${index + 1}`} key={index}>
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent>{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-20 w-full">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-4xl font-bold text-white mb-4">
						Let's Build Something Amazing
					</h2>
					<p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
						Have a project in mind? I'm available for freelance work and
						collaborations. Let's connect and turn your ideas into reality.
					</p>
					<button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center mx-auto group">
						Get in Touch{" "}
						<ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
					</button>
				</div>
			</section>
		</div>
	);
}