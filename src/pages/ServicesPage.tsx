import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const services = [
    {
        title: "Web Development",
        description: "Build modern, responsive, and blazing-fast websites tailored to your unique business needs.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "CMS Development",
        description: "Custom Content Management Systems designed for scale, flexibility, and easy content updates.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "SEO",
        description: "Boost your search engine rankings and drive highly targeted organic traffic to your website.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Digital Marketing",
        description: "Engage your audience and maximize ROI through data-driven digital marketing strategies.",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Graphic Designing",
        description: "Create stunning visuals and strong brand identities that captivate and inspire your audience.",
        image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "UI/UX Designing",
        description: "Design intuitive and beautiful user interfaces that deliver exceptional user experiences.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "Data Analytics / Dashboards",
        description: "Transform complex data into actionable insights through interactive and visual dashboards.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=600&q=80",
    },
    {
        title: "AI Agent Development",
        description: "Automate workflows and enhance customer interactions using advanced AI automation agents.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    }
];

export default function ServicesPage() {
    return (
        <Layout>
            <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 flex flex-col items-center">
                {/* Animated Glow Blobs background */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-40 mix-blend-screen pointer-events-none animate-[pulse_8s_ease-in-out_infinite]" />

                <div className="container relative z-10 px-6 max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-foreground mb-6">
                            Our Professional <span className="fylora-gradient-text">Services</span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground font-light">
                            Partner with us to transform your ideas into exceptional digital experiences. From web development to advanced AI solutions.
                        </p>
                    </motion.div>

                    {/* Services Grid Setup: 1 card mobile, 2 tablet, 3-4 desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group flex flex-col bg-card border border-white/5 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                            >
                                {/* Image Section */}
                                <div className="w-full aspect-[4/3] overflow-hidden bg-muted/20 relative">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10 duration-300" />
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="font-display font-bold text-xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground flex-1 mb-6 leading-relaxed">
                                        {service.description}
                                    </p>

                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button className="w-full h-11 rounded-full fylora-gradient-bg border-none hover:scale-[1.02] transition-transform duration-300 text-white shadow-md font-medium">
                                                Contact Us
                                            </Button>
                                        </DialogTrigger>

                                        {/* Popup Modal */}
                                        <DialogContent className="sm:max-w-[700px] w-[95vw] h-[85vh] sm:h-[800px] p-0 pt-12 overflow-hidden bg-background rounded-3xl border-white/10 shadow-2xl flex flex-col gap-0">
                                            <DialogHeader className="sr-only">
                                                <DialogTitle>Contact Us Formulation</DialogTitle>
                                            </DialogHeader>
                                            <iframe
                                                src="https://docs.google.com/forms/d/e/1FAIpQLScHG6nhR5Q0Si_tcRJaGRmDrW3HVAsK-jT9QLWMdBSnwc2eVA/viewform?embedded=true"
                                                className="w-full flex-1 border-0"
                                                title={`${service.title} Inquiry Form`}
                                            />
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
}
