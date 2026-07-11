import React, { useState } from "react";
import { ArrowLeft, Search, Smartphone, Globe, Briefcase } from "lucide-react";
import { ProjectCard, Reveal } from "./home";
import { PROJECTS } from "./projectsData";

export default function AllProjects() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const handleBack = (e) => {
        e.preventDefault();
        window.location.hash = "#/";
    };

    const filteredProjects = PROJECTS.filter((p) => {
        const matchesCategory =
            selectedCategory === "all" || p.type === selectedCategory;

        const searchText = `${p.name} ${p.tagline} ${p.description} ${p.stack.join(" ")}`.toLowerCase();
        const matchesSearch = searchText.includes(searchQuery.toLowerCase().trim());

        return matchesCategory && matchesSearch;
    });

    const categories = [
        { id: "all", label: "All Projects", count: PROJECTS.length },
        { id: "mobile", label: "Mobile Apps", count: PROJECTS.filter((p) => p.type === "mobile").length },
        { id: "web", label: "Web Apps", count: PROJECTS.filter((p) => p.type === "web").length },
    ];

    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }} className="text-white pb-24">
            {/* Header / Nav */}
            <div
                style={{
                    position: "sticky",
                    top: 0,
                    zIndex: 50,
                    background: "rgba(11,15,26,0.75)",
                    backdropFilter: "blur(10px)",
                    borderBottom: "1px solid var(--border)",
                }}
                className="py-4"
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
                    <a
                        href="#/"
                        onClick={handleBack}
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        className="text-lg font-bold tracking-tight hover:opacity-80 transition"
                    >
                        MOHAMMED ASHIQ<span style={{ color: "var(--accent-2)" }}>.</span>
                    </a>

                    <a
                        href="#/"
                        onClick={handleBack}
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            border: "1px solid var(--border)",
                            color: "var(--text-muted)",
                            background: "rgba(255,255,255,0.02)",
                        }}
                        className="text-xs font-semibold px-4 py-2 rounded-full hover:border-white/20 hover:text-white transition flex items-center gap-1.5 duration-300"
                    >
                        <ArrowLeft size={14} /> Back to Home
                    </a>
                </div>
            </div>

            {/* Content Area */}
            <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-16">
                {/* Hero section for projects page */}
                <Reveal>
                    <div className="mb-12">
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-2)" }} className="text-xs tracking-widest uppercase mb-3">
                            Full Portfolio
                        </div>
                        <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
                            All Projects
                        </h1>
                        <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-base sm:text-lg max-w-2xl leading-relaxed">
                            An archive of mobile applications, web systems, and full-stack solutions built using React Native, Flutter, Next.js, and Node.js.
                        </p>
                    </div>
                </Reveal>

                {/* Filter and Search Bar Container */}
                <Reveal delay={0.08}>
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 pb-6 border-b border-white/[0.05]">
                        {/* Search Input */}
                        <div className="relative w-full md:max-w-md">
                            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                                <Search size={16} />
                            </span>
                            <input
                                type="text"
                                placeholder="Search by name, tech stack, tagline..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    background: "rgba(255,255,255,0.02)",
                                    border: "1px solid var(--border)",
                                    borderRadius: "12px",
                                    color: "var(--text)",
                                    fontFamily: "'Inter', sans-serif",
                                    outline: "none",
                                }}
                                className="w-full pl-10 pr-4 py-3 text-sm focus:border-white/30 transition duration-300"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    style={{ color: "var(--text-muted)" }}
                                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs hover:text-white"
                                >
                                    Clear
                                </button>
                            )}
                        </div>

                        {/* Category Tabs */}
                        <div
                            style={{
                                background: "rgba(255,255,255,0.01)",
                                border: "1px solid var(--border)",
                                padding: "4px"
                            }}
                            className="flex rounded-xl w-full md:w-auto"
                        >
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setSelectedCategory(cat.id)}
                                    style={{
                                        fontFamily: "'Inter', sans-serif",
                                        background: selectedCategory === cat.id ? "var(--surface-2)" : "transparent",
                                        color: selectedCategory === cat.id ? "var(--text)" : "var(--text-muted)",
                                        border: selectedCategory === cat.id ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
                                    }}
                                    className="flex-1 md:flex-none text-xs font-semibold px-4 py-2 rounded-lg transition duration-200 flex items-center justify-center gap-1.5"
                                >
                                    {cat.id === "mobile" ? (
                                        <Smartphone size={12} />
                                    ) : cat.id === "web" ? (
                                        <Globe size={12} />
                                    ) : (
                                        <Briefcase size={12} />
                                    )}
                                    {cat.label}
                                    <span
                                        style={{
                                            background: selectedCategory === cat.id ? "rgba(212,255,61,0.15)" : "rgba(255,255,255,0.05)",
                                            color: selectedCategory === cat.id ? "var(--accent-2)" : "var(--text-muted)",
                                        }}
                                        className="text-[10px] px-1.5 py-0.5 rounded-md"
                                    >
                                        {cat.count}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Projects Grid */}
                <div className="grid sm:grid-cols-2 gap-6">
                    {filteredProjects.map((project, idx) => (
                        <ProjectCard key={project.name} project={project} index={idx} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <Reveal>
                        <div
                            style={{
                                border: "1px dashed var(--border)",
                                borderRadius: "18px",
                                background: "rgba(255,255,255,0.01)"
                            }}
                            className="py-20 text-center flex flex-col items-center justify-center"
                        >
                            <div className="p-4 rounded-full bg-white/5 mb-4 text-white/50">
                                <Search size={28} />
                            </div>
                            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-bold mb-2">
                                No projects found
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-sm max-w-sm">
                                We couldn't find any projects matching "{searchQuery}" under this category. Try adjusting your search query or switching tabs.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery("");
                                    setSelectedCategory("all");
                                }}
                                style={{
                                    fontFamily: "'JetBrains Mono', monospace",
                                    background: "var(--accent)",
                                    color: "#0B0F1A",
                                }}
                                className="mt-6 text-xs font-semibold px-5 py-2.5 rounded-full hover:brightness-110 transition duration-200"
                            >
                                Reset Filters
                            </button>
                        </div>
                    </Reveal>
                )}
            </main>
        </div>
    );
}
