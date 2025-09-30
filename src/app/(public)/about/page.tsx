import Image from "next/image";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

export const metadata = {
    title: "About Me | Portfolio",
    description:
        "Learn more about Abdullah Al Towsif – Software Engineer, developer, and tech enthusiast.",
};

export default function AboutPage() {
    return (
        <section className="max-w-6xl mx-auto px-6 py-32">
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
                About Me
            </h1>

            <div className="grid gap-10 md:grid-cols-2 items-center">
                {/* Profile Image */}
                <div className="flex justify-center">
                    <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                        <Image
                            src="/bleach.jpg" // 👉 replace with your actual image in /public
                            alt="Profile Picture"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h2 className="text-2xl font-semibold">Abdullah Al Towsif</h2>
                    <p className="text-muted-foreground text-sm mt-1">
                        Computer Science & Engineering Student | Aspiring Software Engineer
                    </p>

                    <p className="mt-4 text-base leading-relaxed">
                        Highly passionate and confident Computer Science and Engineering student, with a strong foundation in programming and web development. Dedicated to continuous learning and problem-solving. Committed to achieving my dream of
                        becoming a successful Software Engineer by growing in coding and problem-solving.
                    </p>

                    {/* Contact Info */}
                    <div className="mt-6 space-y-3 text-sm">
                        <p className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            <a href="mailto: abdullah.al.towsif2002@gmail.com" className="hover:underline">
                                abdullah.al.towsif2002@gmail.com
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            <a href="tel: +8801641413635" className="hover:underline">
                                +8801641413635
                            </a>
                        </p>
                        <p className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary" />
                            Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className="mt-16">
                <h3 className="text-xl font-semibold mb-6">Skills</h3>
                <div className="flex flex-wrap gap-3">
                    {[
                        "C",
                        "C++",
                        "Python",
                        "JavaScript",
                        "TypeScript",
                        "React.js",
                        "Next.js",
                        "Node.js",
                        "Express.js",
                        "MongoDB",
                        "PostgreSQL",
                        "Tailwind CSS",
                    ].map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-2 bg-muted rounded-full text-sm font-medium shadow-sm"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>

            {/* Educational Timeline Section - Fixed */}
            <div className="mt-16">
                <h3 className="text-xl font-semibold mb-6">Education</h3>
                <div className="relative border-l border-muted-foreground/30 pl-8 space-y-10">
                    {[
                        {
                            role: "National Institute of Textile Engineering and Research",
                            company: "University",
                            period: "Feb 2022 – Present",
                            description:
                                "Bachelor of Science in Computer Science and Engineering",
                        },
                        {
                            role: "Cda Public School & College",
                            company: "College",
                            period: "2020",
                            description:
                                "Higher Secondary Certificate",
                        },
                        {
                            role: "Chandgaon N.M.C Adarsha High School",
                            company: "School",
                            period: "2018",
                            description:
                                "Secondary School Certificate",
                        },
                    ].map((job, idx) => (
                        <div key={idx} className="relative">
                            {/* Fixed Timeline dot */}
                            <div className="absolute -left-[34px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center shadow-sm">
                                <Briefcase className="w-3 h-3 text-white" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold">{job.role}</h4>
                                <p className="text-sm text-muted-foreground">
                                    {job.company} • {job.period}
                                </p>
                                <p className="mt-2 text-sm leading-relaxed">
                                    {job.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
