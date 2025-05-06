'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projects = [
	{
		id: 1,
		title: 'ScreenWriter',
		description: 'A Google Docs style screenplay editor',
		image: '/screenwriter.png',
		url: 'https://github.com/justinreidh/screenwriter',
		tech: ["React", "Next.js", "TailwindCSS", "Node.js", "Express", "PostgreSQL", "Supabase"]
	},
	{
		id: 2,
		title: 'Travel Agency Booking System',
		description: 'A multithreaded Java backend using Spring Boot with an Angular Frontend',
		image: '/travel.jpg',
		tech: ["Java", "Spring Boot", "MySQL", "Angular", "TypeScript", "Docker", "AWS EC2"]
	},
	{
		id: 3,
		title: 'Package Delivery Optimization',
		description: 'A logistics system in Python to schedule and track package delivery using a nearest neighbor algorithm',
		image: '/code.jpg',
		url: 'https://github.com/justinreidh/Delivery-Management-With-Python',
	},
	{
		id: 4,
		title: 'Brawn',
		description: 'A brain arcade with leaderboards, written with Next.js and Node.js',
		image: '/brawn.png',
		url: 'https://github.com/justinreidh/brawns',
		tech: ["React", "Next.js", "Node.js", "TailwindCSS", "Express", "PostgreSQL"],
		
		
	},
];

export default function ProjectsSection() {
	return (
		<section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
			<motion.h2
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6 }}
				className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
			>
				Projects
			</motion.h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project) => (
					<motion.div
						key={project.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: project.id * 0.1 }}
						whileHover={{ scale: 1.02 }}
						className="group relative aspect-video bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-xl overflow-hidden"
					>
						<Image src={project.image} alt={project.title} fill className="object-cover transition-transform group-hover:scale-105" />
						<div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
						<div className="absolute inset-0 p-6 flex flex-col justify-end">
							<h3 className="text-xl font-bold mb-2">{project.title}</h3>
							<p className="text-gray-300 mb-4">{project.description}</p>
							<div className="flex flex-wrap gap-2 mb-2">
								{project.tech?.map((tech) => (
									<span
										key={tech}
										className="text-sm px-4 py-1 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
									>
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-4">
								{project.url ? 
								<Link href={project.url} className="text-sm px-4 py-2 bg-blue-400/30 hover:bg-blue-600/20 rounded-full transition-colors">
									GitHub
								</Link> : null}
								
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
}
