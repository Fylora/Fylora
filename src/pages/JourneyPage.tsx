import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const JourneyPage = () => {
    return (
        <Layout>
            <div className="container max-w-4xl py-16 md:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="space-y-12"
                >
                    <div className="text-center md:text-left space-y-4">
                        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                            Our Journey
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                            "Built because using PDF tools became unnecessarily painful."
                        </p>
                        <div className="h-1 w-20 fylora-gradient-bg rounded-full mt-6 mx-auto md:mx-0"></div>
                    </div>

                    <div className="mt-16 relative pl-8 md:pl-0 md:ml-48">
                        {/* Elegant Vertical Line */}
                        <div className="absolute left-[15px] md:-left-0 top-3 bottom-0 w-[2px] bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

                        <div className="space-y-16">
                            {/* Timeline Item: 2026 - Launched */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative"
                            >
                                <div className="absolute -left-[23px] md:-left-[7px] top-2.5 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                                <span className="block mb-3 md:absolute md:-left-[15rem] md:top-1.5 text-base md:text-lg font-bold text-primary w-52 md:text-right">2026 &mdash; Fylora Launched</span>
                                <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <strong className="font-display text-2xl text-foreground block mb-3">The Beginning</strong>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Fylora started with one simple frustration &mdash; online PDF tools were slow, filled with ads, confusing, and sometimes unsafe. We wanted to build a better way.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Timeline Item: The Shift */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="absolute -left-[20px] md:-left-[4px] top-3 w-2.5 h-2.5 rounded-full bg-border ring-4 ring-background"></div>
                                <div className="bg-card/50 border border-border/30 rounded-2xl p-6 md:p-8">
                                    <strong className="font-display text-2xl text-foreground block mb-3">The Shift</strong>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Instead of adding more complexity, we decided to remove it. No clutter. No forced signups. No chaos. Just the tools you need.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Timeline Item: The Build */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="relative"
                            >
                                <div className="absolute -left-[20px] md:-left-[4px] top-3 w-2.5 h-2.5 rounded-full bg-border ring-4 ring-background"></div>
                                <div className="bg-card/50 border border-border/30 rounded-2xl p-6 md:p-8">
                                    <strong className="font-display text-2xl text-foreground block mb-3">The Build</strong>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Built fully using AI-assisted development and modern web technologies, Fylora securely focuses on speed, extreme privacy, and simplicity.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Timeline Item: Software Services */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="relative"
                            >
                                <div className="absolute -left-[23px] md:-left-[7px] top-2.5 w-4 h-4 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                                <span className="block mb-3 md:absolute md:-left-[15rem] md:top-1.5 text-base md:text-lg font-bold text-primary w-52 md:text-right">2026 &mdash; Software Services</span>
                                <div className="bg-card border border-border/50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                                    <strong className="font-display text-2xl text-foreground block mb-3">Today</strong>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Today, Fylora offers powerful PDF tools and is expanding into software services &mdash; helping ambitious businesses build digital products the right way.
                                    </p>
                                </div>
                            </motion.div>

                            {/* Timeline Item: Future Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                className="relative"
                            >
                                <div className="absolute -left-[23px] md:-left-[7px] top-2.5 w-4 h-4 rounded-full bg-primary ring-4 ring-background shadow-[0_0_15px_rgba(var(--primary),0.5)] animate-pulse"></div>
                                <span className="block mb-3 md:absolute md:-left-[15rem] md:top-1.5 text-base md:text-lg font-bold text-foreground w-52 md:text-right">Future &mdash; Expansion</span>
                                <div className="bg-gradient-to-br from-card to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-md">
                                    <strong className="font-display text-2xl text-foreground block mb-3">Vision</strong>
                                    <p className="text-foreground text-lg leading-relaxed font-medium">
                                        We're building beautiful tools that just work.<br />
                                        <span className="text-primary mt-2 block">Clean. Fast. Private.</span>
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </Layout>
    );
};

export default JourneyPage;
