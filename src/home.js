import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import {
    Menu, X, Mail, ExternalLink,
    Smartphone, Globe, ArrowUpRight, Code2, Server, Database, Wrench, MapPin,
    ChevronRight, Send, ChevronLeft, ZoomIn, Play, Apple, Briefcase
} from "lucide-react";
import AshiqImg from "./resources/Ashiq.png";
import { PROJECTS } from "./projectsData";

const WHATSAPP_NUMBER = "919544348320";




function Github({ size = 24, color = "currentColor", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function Linkedin({ size = 24, color = "currentColor", ...props }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

function FirebaseIcon({ size = 20, className = "" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.89 15.75L8.53 7.07C8.75 6.64 9.38 6.63 9.61 7.05L11.75 11.02L3.89 15.75Z" fill="#FFC24C" />
            <path d="M12.94 13.16L10.5 8.56C10.28 8.15 9.67 8.14 9.44 8.53L3.5 18.91C3.21 19.41 3.57 20.05 4.15 20.05H11.75L12.94 13.16Z" fill="#FFA611" />
            <path d="M11.75 20.05H20.03C20.61 20.05 20.97 19.41 20.68 18.91L13.13 5.48C12.87 5.02 12.18 5.03 11.93 5.5L11.75 5.83V20.05Z" fill="#F44336" />
        </svg>
    );
}

function FlutterIcon({ size = 20, className = "" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.31 0L2.3 12L8.3 18L24 2.3L14.31 0Z" fill="#02569B" />
            <path d="M14.31 11.33L8.3 17.34L12.3 21.35L24 9.65L14.31 11.33Z" fill="#0175C2" />
            <path d="M12.3 21.35L14.97 24L24 15.03L21.33 12.36L12.3 21.35Z" fill="#13B9FD" />
        </svg>
    );
}

function ReactIcon({ size = 20, className = "" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(30 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(90 12 12)" />
            <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(150 12 12)" />
            <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
        </svg>
    );
}

function PythonIcon({ size = 20, className = "" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg" fill="none">
            <path d="M12.016 0c-2.316 0-4.34.183-5.266.864-.99.73-.96 1.83-.96 1.83l.006 2.217h6.297v.88H5.854s-3.23.013-4.223 2.76c-.927 2.57-.14 5.378-.14 5.378l1.328 1.954V12.99c0-3.344 2.825-4.42 4.42-4.42h5.736v-.88H10.6c0-.986-.14-1.958 1.417-1.958h5.36c.928 0 1.637-.626 1.862-1.638.228-1.01-.225-1.963-1.41-2.434C16.63.784 14.33 0 12.016 0zm3.8 2.052a.684.684 0 1 1 0 1.368.684.684 0 0 1 0-1.368z" fill="#3776AB" />
            <path d="M11.984 24c2.316 0 4.34-.183 5.266-.864.99-.73.96-1.83.96-1.83l-.006-2.217H11.907v-.88h6.24s3.23-.013 4.223-2.76c.927-2.57.14-5.378.14-5.378l-1.328-1.954V11.01c0 3.344-2.825 4.42-4.42 4.42h-5.736v.88H13.4c0 .986.14 1.958-1.417 1.958h-5.36c-.928 0-1.637.626-1.862 1.638-.228 1.01.225 1.963 1.41 2.434C7.37 23.216 9.67 24 11.984 24zm-3.8-2.052a.684.684 0 1 1 0-1.368.684.684 0 0 1 0-1.368z" fill="#FFE873" />
        </svg>
    );
}

function JavaIcon({ size = 20, className = "", color = "#007396" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.74 3.75c-.32 1.1-.38 2.37.56 3.08.72.54 1.54.4 2.22-.16 1.02-.85 1.6-2.48.96-3.82-.44-.92-1.54-1.2-2.32-.78a3 3 0 0 0-1.42 1.68zm4.4-.38c-.3 1.1-.37 2.36.56 3.07.72.54 1.53.4 2.2-.15.93-.78 1.47-2.27.9-3.52-.43-.93-1.53-1.2-2.32-.78a3 3 0 0 0-1.34 1.38zM2.8 19.34c0 1.25.96 2.32 2.2 2.5a24.28 24.28 0 0 0 13.9 0c1.23-.18 2.2-1.25 2.2-2.5V12.1H2.8v7.24zM19.1 12.1h1.1a1 1 0 0 1 1 1v2.5a2.5 2.5 0 0 1-2.5 2.5h-.6v-6z" fill={color} />
        </svg>
    );
}

function SpringIcon({ size = 20, className = "", color = "#6DB33F" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.52 7.7 6.13 9.25L12 17.5V12h5.5l3.75-3.87C22.7 6.52 19.14 4 15 4c-1.1 0-2.12.24-3.05.67L12 2z" fill={color} />
            <path d="M12 22c5.52 0 10-4.48 10-10 0-4.14-2.52-7.7-6.13-9.25L12 6.5V12H6.5L2.75 15.87C1.3 17.48 4.86 20 9 20c1.1 0 2.12-.24 3.05-.67L12 22z" fill={color} opacity="0.8" />
        </svg>
    );
}

function HtmlIcon({ size = 20, className = "" }) {
    return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0z" fill="#E34F26" />
            <path d="M12 2.2v19.6l6.8-2.2 1.5-17.4H12z" fill="#F16529" />
            <path d="M12 9.6H8.5l-.2-2.7H12V4.2H5.5l.8 8.1H12V9.6zm0 5.4l-3.3-.9-.2-2.3H5.1l.4 4.8 6.5 1.8V15zm0-10.8h6.2l-.6 6.9H12v2.7h3.1l-.3 3.6-2.8.8v2.7l5.6-1.5.8-9.8H12V4.2z" fill="#FFF" />
        </svg>
    );
}

/* ---------------------------------------------------------
   DATA — replace with your real projects / details
--------------------------------------------------------- */

const SKILLS = [
    {
        label: "Mobile",
        icon: Smartphone,
        items: ["React Native", "Expo", "React Navigation", "Redux Toolkit", "Native Modules", "Flutter", 'Flutter Hooks', 'Bloc'],
    },
    {
        label: "Frontend",
        icon: Code2,
        items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Html"],
    },
    {
        label: "Backend",
        icon: Server,
        items: ["Node.js", "Express", "GraphQL", "REST APIs", "Socket.io", "Spring Boot", "Firebase", 'python'],
    },
    {
        label: "Data & Infra",
        icon: Database,
        items: ["MongoDB", "PostgreSQL", "Firebase", "Mysql", "AWS", "LocalStorage"],
    },
];



const EXPERIENCE = [
    {
        period: "2023 — Present",
        role: "Co-Founder & Full-Stack Developer",
        org: "Zypheron Solutions",
        detail:
            "Co-founded Zypheron Solutions, delivering end-to-end software solutions including cross-platform mobile apps, web applications, backend services, cloud integrations, and database architecture, while collaborating closely with clients to transform ideas into production-ready products.    "
    },
    {
        period: "2021 — 2023",
        role: "React Native Developer",
        org: "Playspots",
        detail:
            "Developed the organization’s Turf Booking and Management applications using React Native, along with other client projects, published production builds to the Google Play Store and Apple App Store, integrated Sentry for crash monitoring, and enhanced application performance through continuous optimization."

    },

];

/* ---------------------------------------------------------
   SMALL UI PRIMITIVES
--------------------------------------------------------- */

function useInView(threshold = 0.15) {
    const ref = useRef(null);
    const [inView, setInView] = useState(false);
    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    obs.unobserve(node);
                }
            },
            { threshold }
        );
        obs.observe(node);
        return () => obs.disconnect();
    }, [threshold]);
    return [ref, inView];
}

export function Reveal({ children, delay = 0, className = "" }) {
    const [ref, inView] = useInView();
    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "translateY(0px)" : "translateY(24px)",
                transition: `opacity 0.7s ease ${delay}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
            }}
        >
            {children}
        </div>
    );
}

export function Tag({ children }) {
    const text = String(children).toLowerCase().trim();

    let IconComponent = null;

    if (text === "react native" || text === "react.js" || text === "react" || text === "react navigation") {
        IconComponent = <ReactIcon size={12} />;
    } else if (text === "flutter" || text === "flutter hooks") {
        IconComponent = <FlutterIcon size={12} />;
    } else if (text === "firebase") {
        IconComponent = <FirebaseIcon size={12} />;
    } else if (text === "springboot" || text === "spring boot" || text === "spring") {
        IconComponent = <SpringIcon size={12} />;
    } else if (text === "python") {
        IconComponent = <PythonIcon size={12} />;
    } else if (text === "java") {
        IconComponent = <JavaIcon size={12} />;
    } else if (text === "html") {
        IconComponent = <HtmlIcon size={12} />;
    } else if (text === "expo" || text === "bloc" || text === "redux toolkit" || text === "context api" || text === "provider" || text === "riverpod" || text === "getx") {
        IconComponent = <Smartphone size={12} color="var(--accent-2)" />;
    } else if (text === "node.js" || text === "express" || text === "rest apis" || text === "socket.io") {
        IconComponent = <Server size={12} color="var(--accent-2)" />;
    } else if (text.includes("mongo") || text.includes("postgres") || text.includes("mysql") || text.includes("sqlite") || text.includes("realm") || text === "localstorage" || text === "local storage") {
        IconComponent = <Database size={12} color="var(--accent-2)" />;
    } else if (text === "typescript" || text === "javascript" || text === "tailwind css" || text === "framer motion") {
        IconComponent = <Code2 size={12} color="var(--accent-2)" />;
    } else if (text === "aws" || text === "docker") {
        IconComponent = <Globe size={12} color="var(--accent-2)" />;
    } else {
        IconComponent = <Wrench size={12} color="var(--accent-2)" />;
    }

    return (
        <span
            className="tag inline-flex items-center gap-1.5"
            style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.02em",
                padding: "5px 10px",
                borderRadius: "999px",
                border: "1px solid var(--border)",
                color: "var(--text-muted)",
                background: "rgba(255,255,255,0.02)",
                whiteSpace: "nowrap",
            }}
        >
            {IconComponent}
            {children}
        </span>
    );
}

export function ExpandedDeviceModal({ project, onClose }) {
    const isMobile = project.type === "mobile";
    const [activeIndex, setActiveIndex] = useState(0);
    const images = project.images || [];

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const nextImage = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return createPortal(
        <div
            className="fixed inset-0 bg-[#05070C]/90 backdrop-blur-md z-[100] overflow-y-auto cursor-zoom-out animate-fade-in"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="fixed top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full border border-white/10 bg-[#05070C]/80 hover:bg-white/10 hover:border-white/20 transition duration-200 flex items-center justify-center text-white cursor-pointer z-[120] backdrop-blur-sm"
                aria-label="Close modal"
            >
                <X size={20} />
            </button>

            <div
                className="min-h-full flex items-center justify-center p-4 sm:p-6 md:p-10"
            >
                <div
                    className="relative flex flex-col items-center justify-center cursor-default w-full max-w-4xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col lg:flex-row gap-10 items-center justify-center w-full">
                        <div className="flex-shrink-0 flex items-center justify-center relative px-8 lg:px-0">
                            {isMobile ? (
                                <div
                                    style={{
                                        border: "12px solid #1B2233",
                                        borderRadius: "44px",
                                        background: "#05070C",
                                        width: "280px",
                                        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8), 0 0 40px rgba(139,92,246,0.15)",
                                        overflow: "hidden"
                                    }}
                                    className="relative select-none"
                                >
                                    <div
                                        className="absolute top-2.5 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20 flex items-center justify-center"
                                        style={{ pointerEvents: "none" }}
                                    >
                                        <div style={{ width: "30px", height: "3px", background: "#1B2233", borderRadius: "2px" }} />
                                    </div>

                                    <div style={{ height: "500px", position: "relative" }} className="overflow-hidden">
                                        <div
                                            className="w-full h-full flex transition-transform duration-500 ease-in-out"
                                            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                        >
                                            {images.map((img, idx) => (
                                                <img
                                                    key={idx}
                                                    src={img}
                                                    alt={`Screenshot ${idx}`}
                                                    style={{ width: "100%", height: "100%", objectFit: "cover", flexShrink: 0 }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center w-[88%] sm:w-full max-w-2xl select-none">
                                    <div
                                        style={{
                                            border: "12px solid #1F242F",
                                            borderRadius: "20px 20px 0 0",
                                            background: "#05070C",
                                            width: "100%",
                                            boxShadow: "0 25px 50px -12px rgba(0,0,0,0.8)",
                                            overflow: "hidden"
                                        }}
                                        className="relative"
                                    >
                                        <span className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/20 rounded-full z-20" />

                                        <div style={{ aspectRatio: "16/10", position: "relative", overflow: "hidden" }} className="w-full">
                                            <div
                                                className="w-full h-full flex transition-transform duration-500 ease-in-out"
                                                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                                            >
                                                {images.map((img, idx) => (
                                                    <img
                                                        key={idx}
                                                        src={img}
                                                        alt={`Screenshot ${idx}`}
                                                        style={{ width: "100%", height: "100%", objectFit: "cover", flexShrink: 0 }}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            background: "linear-gradient(to bottom, #2d3345, #1B2233)",
                                            width: "112%",
                                            height: "12px",
                                            borderRadius: "0 0 12px 12px",
                                            boxShadow: "0 10px 20px rgba(0,0,0,0.5)"
                                        }}
                                        className="relative"
                                    >
                                        <div
                                            style={{
                                                background: "#0F1420",
                                                width: "60px",
                                                height: "6px",
                                                borderRadius: "0 0 6px 6px"
                                            }}
                                            className="absolute top-0 left-1/2 -translate-x-1/2"
                                        />
                                    </div>
                                </div>
                            )}

                            {images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        style={{
                                            border: "1px solid var(--border)",
                                            background: "rgba(11,15,26,0.6)",
                                            backdropFilter: "blur(4px)"
                                        }}
                                        className="absolute -left-4 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:border-white/30 text-white transition hover:scale-105"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        style={{
                                            border: "1px solid var(--border)",
                                            background: "rgba(11,15,26,0.6)",
                                            backdropFilter: "blur(4px)"
                                        }}
                                        className="absolute -right-4 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center hover:border-white/30 text-white transition hover:scale-105"
                                    >
                                        <ChevronRight size={20} />
                                    </button>
                                </>
                            )}
                        </div>

                        <div
                            style={{
                                border: "1px solid var(--border)",
                                background: "rgba(255,255,255,0.02)",
                                backdropFilter: "blur(8px)"
                            }}
                            className="p-6 sm:p-8 rounded-2xl max-w-md w-full"
                        >
                            <div className="flex items-center gap-2 mb-3">
                                {isMobile ? <Smartphone size={16} color="var(--accent-2)" /> : <Globe size={16} color="var(--accent-2)" />}
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }} className="text-xs uppercase tracking-wider">
                                    {isMobile ? "Mobile app" : "Web app"} · {project.year}
                                </span>
                            </div>
                            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="text-2xl font-bold mb-1">
                                {project.name}
                            </h2>
                            <p style={{ color: "var(--accent-2)" }} className="text-sm font-medium mb-4">{project.tagline}</p>

                            <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-sm leading-relaxed mb-6">
                                {project.description}
                            </p>

                            <div className="mb-6">
                                <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }} className="text-[10px] tracking-wider uppercase mb-2">
                                    Technologies used
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map((s) => (
                                        <Tag key={s}>{s}</Tag>
                                    ))}
                                </div>
                            </div>

                            {(project.playstore || project.appstore) && (
                                <div className="mb-6">
                                    <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }} className="text-[10px] tracking-wider uppercase mb-3">
                                        Get the app
                                    </div>
                                    <div className="flex flex-wrap gap-2.5">
                                        {project.playstore && (
                                            <a
                                                href={project.playstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    border: "1px solid var(--border)",
                                                    background: "rgba(255,255,255,0.02)",
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                }}
                                                className="flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white hover:border-white/20 hover:bg-white/5 transition duration-200"
                                            >
                                                <Play size={12} fill="currentColor" /> Google Play
                                            </a>
                                        )}
                                        {project.appstore && (
                                            <a
                                                href={project.appstore}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                    border: "1px solid var(--border)",
                                                    background: "rgba(255,255,255,0.02)",
                                                    fontFamily: "'JetBrains Mono', monospace",
                                                }}
                                                className="flex items-center gap-2 text-xs px-4 py-2 rounded-full text-white hover:border-white/20 hover:bg-white/5 transition duration-200"
                                            >
                                                <Apple size={12} fill="currentColor" /> App Store
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}

                            {images.length > 1 && (
                                <div className="flex justify-center gap-1.5 mt-2">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.stopPropagation(); setActiveIndex(idx); }}
                                            className="w-2 h-2 rounded-full transition-all"
                                            style={{
                                                background: idx === activeIndex ? "var(--accent-2)" : "rgba(255,255,255,0.2)",
                                                transform: idx === activeIndex ? "scale(1.2)" : "scale(1)"
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}


/* ---------------------------------------------------------
   NAV
--------------------------------------------------------- */

function Nav() {
    const [open, setOpen] = useState(false);
    const links = ["About", "Skills", "Projects", "Experience", "Contact"];

    const scrollTo = (id) => {
        setOpen(false);
        const el = document.getElementById(id.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <div
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                background: "rgba(11,15,26,0.75)",
                backdropFilter: "blur(10px)",
                borderBottom: "1px solid var(--border)",
            }}
        >
            {/* <StatusBar /> */}
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
                <button
                    onClick={() => scrollTo("top")}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }}
                    className="text-lg font-bold tracking-tight"
                >
                    MOHAMMED ASHIQ<span style={{ color: "var(--accent-2)" }}>.</span>
                </button>

                <div className="hidden md:flex items-center gap-8">
                    {links.map((l) => (
                        <button
                            key={l}
                            onClick={() => scrollTo(l)}
                            style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}
                            className="text-sm hover:text-white transition-colors duration-200"
                        >
                            {l}
                        </button>
                    ))}
                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ashiq,%20I'd%20like%20to%20talk%20about%20a%20project!`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            background: "var(--accent)",
                            color: "#0B0F1A",
                        }}
                        className="text-xs font-semibold px-4 py-2 rounded-full hover:brightness-110 transition flex items-center justify-center"
                    >
                        Let's talk
                    </a>
                </div>

                <button className="md:hidden text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {open && (
                <div
                    className="md:hidden px-6 pb-6 flex flex-col gap-4"
                    style={{ borderTop: "1px solid var(--border)" }}
                >
                    {links.map((l) => (
                        <button
                            key={l}
                            onClick={() => scrollTo(l)}
                            style={{ color: "var(--text-muted)" }}
                            className="text-left text-sm pt-3"
                        >
                            {l}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

/* ---------------------------------------------------------
   HERO — phone mockup as the thesis image
--------------------------------------------------------- */

function PhoneMockup() {
    const techs = [
        { name: "React Native", Icon: ReactIcon },
        { name: "Flutter", Icon: FlutterIcon },
        { name: "Firebase", Icon: FirebaseIcon },
        { name: "Spring Boot", Icon: SpringIcon },
        { name: "Python", Icon: PythonIcon },
        { name: "HTML", Icon: HtmlIcon },
        { name: "Java", Icon: JavaIcon },
        { name: "React.js", Icon: ReactIcon },
    ];

    const [visibleCount, setVisibleCount] = useState(0);
    const [showCrying, setShowCrying] = useState(false);

    useEffect(() => {
        if (visibleCount < techs.length) {
            const timer = setTimeout(() => {
                setVisibleCount((prev) => prev + 1);
            }, 600);
            return () => clearTimeout(timer);
        }
    }, [visibleCount, techs.length]);

    useEffect(() => {
        if (showCrying) {
            const timer = setTimeout(() => setShowCrying(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [showCrying]);

    return (
        <div className="relative mx-auto lg:mr-0 lg:ml-auto" style={{ width: "230px" }}>
            <div
                style={{
                    border: "10px solid #1B2233",
                    borderRadius: "38px",
                    background: "#05070C",
                    overflow: "hidden",
                }}
                className="relative phone-container"
            >
                <div
                    style={{ background: "#05070C", height: "22px" }}
                    className="flex items-center justify-center"
                >
                    <div style={{ width: "60px", height: "6px", background: "#1B2233", borderRadius: "4px" }} />
                </div>

                <div
                    style={{
                        height: "420px",
                        background: "linear-gradient(180deg,#131826,#0B0F1A)",
                        position: "relative"
                    }}
                    className="p-4 flex flex-col gap-3 overflow-hidden"
                >
                    {showCrying && (
                        <div
                            className="absolute inset-0 flex items-center justify-center bg-black/75 z-30 animate-fade-in pointer-events-none"
                        >
                            <span className="text-7xl animate-bounce">😭</span>
                        </div>
                    )}

                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "var(--accent-2)" }}>
                        npx react-native run<span className="terminal-cursor">_</span>
                    </div>
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "18px", color: "var(--text)" }}>
                        Hey, I'm Ashiq 👋
                    </div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", lineHeight: 1.5 }}>
                        Building fast, native-feeling apps and the backends that power them.
                    </div>

                    <div className="flex flex-col gap-1 mt-1">
                        {techs.slice(0, visibleCount).map(({ name, Icon }) => (
                            <div
                                key={name}
                                style={{
                                    borderRadius: "6px",
                                    padding: "4px 8px",
                                }}
                                className="flex items-center justify-between status-item"
                            >
                                <div className="flex items-center gap-1.5">
                                    <Icon size={12} />
                                    <span style={{ fontSize: "10px", color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }}>
                                        {name}
                                    </span>
                                </div>
                                <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "var(--accent-2)" }} className="status-dot" />
                            </div>
                        ))}
                    </div>

                    <div className="mt-auto flex gap-2">
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20Ashiq,%20I'd%20like%20to%20hire%20you%20for%20a%20project!`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                height: "34px",
                                borderRadius: "10px",
                                background: "var(--accent)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#0B0F1A",
                                fontFamily: "'Space Grotesk', sans-serif",
                                fontSize: "11px",
                                fontWeight: "bold",
                            }}
                            className="cursor-pointer hover:brightness-110 transition active:scale-95 text-center"
                        >
                            Choose Me
                        </a>
                        <button
                            onClick={() => setShowCrying(true)}
                            style={{
                                width: "34px",
                                height: "34px",
                                borderRadius: "10px",
                                border: "1px solid var(--border)",
                                background: "rgba(255,255,255,0.02)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: "14px",
                            }}
                            className="hover:bg-white/5 transition active:scale-95 cursor-pointer"
                        >
                            🤗
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <section id="top" className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-24 lg:pb-36 grid md:grid-cols-[1.1fr,0.9fr] gap-14 items-center overflow-hidden">
            <div
                className="absolute inset-y-0 right-0 lg:right-[15%] w-full lg:w-1/2 opacity-50 lg:opacity-85 hidden lg:block"
                style={{
                    backgroundImage: `url(${AshiqImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center top",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />
            {/* Vertical fade for desktop */}
            <div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                    background: "linear-gradient(to top, var(--bg) 5%, transparent 30%, transparent 70%, var(--bg) 95%)",
                    pointerEvents: "none",
                    zIndex: 0,
                }}
            />
            {/* Horizontal fade - on desktop it fades from the left */}
            <div
                className="absolute inset-0 pointer-events-none hidden lg:block"
                style={{
                    background: "linear-gradient(to right, var(--bg) 28%, transparent 58%)",
                    zIndex: 0,
                }}
            />
            <Reveal className="relative z-10 p-6 sm:p-8 rounded-2xl border border-white/[0.05] bg-[#0E1322]/40 backdrop-blur-sm lg:p-0 lg:border-none lg:bg-transparent lg:backdrop-blur-none">
                {/* Background photo behind the text box only on mobile/tablet */}
                <div
                    className="absolute inset-0 opacity-55 lg:hidden pointer-events-none"
                    style={{
                        backgroundImage: `url(${AshiqImg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center top",
                        zIndex: -1,
                    }}
                />
                {/* Gradient overlay for contrast and legibility */}
                <div
                    className="absolute inset-0 lg:hidden pointer-events-none"
                    style={{
                        background: "linear-gradient(to bottom, rgba(11, 15, 26, 0.3), var(--bg) 95%)",
                        zIndex: -1,
                    }}
                />
                <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-2)" }} className="text-xs tracking-widest uppercase mb-5 select-none revolve-drop-container cursor-default flex flex-wrap gap-x-2 gap-y-1.5">
                    {"Co-Founder . Full-Stack Developer · React Native Specialist".split(" ").map((word, wordIdx, wordsArr) => {
                        let prevCharsCount = 0;
                        for (let i = 0; i < wordIdx; i++) {
                            prevCharsCount += wordsArr[i].length + 1;
                        }
                        return (
                            <span key={wordIdx} className="inline-block whitespace-nowrap">
                                {word.split("").map((char, charIdx) => {
                                    const delayIndex = prevCharsCount + charIdx;
                                    return (
                                        <span
                                            key={charIdx}
                                            className="revolve-drop-span"
                                            style={{
                                                animationDelay: `${delayIndex * 30}ms`
                                            }}
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </span>
                        );
                    })}
                </div>
                <h1
                    style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)", lineHeight: 1.05 }}
                    className="text-4xl sm:text-[64px] font-bold tracking-tight mb-6"
                >
                    {"MOHAMMED ASHIQ".split("").map((char, index) => (
                        <span
                            key={index}
                            style={{
                                display: "inline-block",
                                animation: "lightSpeedInLeft 0.8s ease-out forwards",
                                animationDelay: `${index * 80}ms`,
                                opacity: 0,
                                whiteSpace: char === " " ? "pre" : "normal",
                            }}
                        >
                            {char}
                        </span>
                    ))}
                </h1>
                <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-base sm:text-lg max-w-xl mb-9 leading-relaxed">
                    I design and build end-to-end digital products, creating high-performance mobile apps with
                    <span style={{ color: "var(--accent-2)", fontWeight: "500" }}> React Native and Flutter</span>, and developing modern web applications with <span style={{ color: "var(--accent-2)", fontWeight: "500" }}>React, Flutter, and HTML</span>, and building scalable backend APIs using <span style={{ color: "var(--accent-2)", fontWeight: "500" }}>Spring,Java,Python and JavaScript, </span>.
                </p>
                <div className="flex flex-wrap gap-4">
                    <a
                        href="#projects"
                        onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }); }}
                        style={{ background: "var(--accent)", color: "#0B0F1A", fontFamily: "'Inter', sans-serif" }}
                        className="text-sm font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:brightness-110 transition"
                    >
                        View my work <ArrowUpRight size={16} />
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        style={{ border: "1px solid var(--border)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
                        className="text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/5 transition"
                    >
                        Get in touch
                    </a>
                    <a
                        href="/ashiqcv.pdf"
                        download="Mohammed_Ashiq_CV.pdf"
                        style={{ border: "1px solid var(--border)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
                        className="text-sm font-semibold px-6 py-3 rounded-full hover:bg-white/5 transition flex items-center gap-1.5"
                    >
                        Download CV
                    </a>
                </div>

                <div className="flex items-center gap-2 mt-10" style={{ color: "var(--text-muted)" }}>
                    <MapPin size={14} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-xs">
                        Open to remote & on-site roles
                    </span>
                </div>

                {/* Tech Stack Divider */}
                <div className="w-full h-px bg-white/5 my-8" />

                {/* Tech Stack Row */}
                <div className="flex flex-col gap-3">
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }} className="text-[10px] tracking-wider uppercase">
                        Technologies
                    </span>
                    <div className="flex flex-wrap gap-3">
                        <div className="tech-icon-circle" style={{ animationDelay: "0ms" }} title="React Native">
                            <ReactIcon size={26} />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "100ms" }} title="Flutter">
                            <FlutterIcon size={26} />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "200ms" }} title="Firebase">
                            <FirebaseIcon size={26} />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "300ms" }} title="Python">
                            <PythonIcon size={26} />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "400ms" }} title="Java">
                            <JavaIcon size={26} color="#F89820" />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "500ms" }} title="Spring Boot">
                            <SpringIcon size={26} color="#6DB33F" />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "600ms" }} title="HTML5">
                            <HtmlIcon size={26} />
                        </div>
                        <div className="tech-icon-circle" style={{ animationDelay: "700ms" }} title="React.js">
                            <ReactIcon size={26} />
                        </div>
                    </div>
                </div>
            </Reveal>

            <Reveal delay={0.15} className="relative z-10 lg:translate-x-14 lg:translate-y-20">
                <PhoneMockup />
            </Reveal>
        </section>
    );
}

/* ---------------------------------------------------------
   ABOUT + SKILLS
--------------------------------------------------------- */

function Section({ id, eyebrow, title, children }) {
    return (
        <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
            <Reveal>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-2)" }} className="text-xs tracking-widest uppercase mb-3">
                    {eyebrow}
                </div>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="text-3xl sm:text-4xl font-bold mb-12 tracking-tight">
                    {title}
                </h2>
            </Reveal>
            {children}
        </section>
    );
}

function About() {
    return (
        <Section id="about" eyebrow="About" title="From layout to database schema">
            <Reveal delay={0.1}>
                <div className="grid md:grid-cols-3 gap-10">
                    <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="md:col-span-2 text-base leading-relaxed">
                        I'm a full-stack software developer specializing in cross-platform mobile applications with React Native and Flutter, modern web applications with React, and scalable backend development using Spring Boot, Python, and JavaScript.

                        My experience covers the complete software development lifecycle, from UI/UX implementation and API development to database design, deployment, and maintenance. I work with PostgreSQL, MySQL, Firebase, SQLite, Realm, and local storage solutions, building secure and efficient data-driven applications. I also have experience integrating AWS cloud services, authentication systems, payment gateways, push notifications, maps, and third-party APIs.

                        For state management, I use Redux Toolkit, Context API, Provider, Riverpod, and GetX to build scalable and maintainable applications. I focus on writing clean, reusable code and delivering high-performance, production-ready solutions for mobile and web platforms.
                        .
                    </p>
                    <div style={{ border: "1px solid var(--border)", borderRadius: "16px", background: "rgba(255,255,255,0.02)" }} className="p-6">
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }} className="text-xs space-y-3">
                            <div className="flex justify-between"><span>Based in</span><span style={{ color: "var(--text)" }}>India</span></div>
                            <div className="flex justify-between"><span>Focus</span><span style={{ color: "var(--text)" }}>Mobile + Full-Stack</span></div>
                            <div className="flex justify-between"><span>Experience</span><span style={{ color: "var(--text)" }}>5+ years</span></div>
                            <div className="flex justify-between"><span>Status</span><span style={{ color: "var(--accent-2)" }}>Available</span></div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}

function Skills() {
    return (
        <Section id="skills" eyebrow="Toolkit" title="What I build with">
            <div className="grid sm:grid-cols-2 gap-5">
                {SKILLS.map((group, i) => (
                    <Reveal key={group.label} delay={i * 0.08}>
                        <div
                            style={{ border: "1px solid var(--border)", borderRadius: "16px", background: "rgba(255,255,255,0.02)" }}
                            className="p-6 h-full hover:border-white/20 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div style={{ background: "var(--surface-2)", borderRadius: "10px" }} className="p-2">
                                    <group.icon size={18} color="var(--accent-2)" />
                                </div>
                                <span style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="font-semibold">
                                    {group.label}
                                </span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <Tag key={item}>{item}</Tag>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------
   PROJECTS — dual frame: phone for RN, browser for web
--------------------------------------------------------- */

function BrowserFrame({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [images]);

    const hasMultiple = images && images.length > 1;

    return (
        <div className="flex flex-col items-center w-full mt-4 project-device">
            {/* Laptop Screen Bezel */}
            <div
                style={{
                    border: "8px solid #1F242F",
                    borderBottom: "10px solid #1F242F",
                    borderRadius: "16px 16px 0 0",
                    background: "#05070C",
                    width: "90%",
                    maxWidth: "280px",
                    boxShadow: "0 15px 35px -15px rgba(0,0,0,0.6)",
                    overflow: "hidden"
                }}
                className="relative"
            >
                {/* Webcam dot */}
                <span className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white/20 rounded-full z-20" />

                {/* Screen Content */}
                <div style={{ height: "140px", position: "relative", overflow: "hidden" }}>
                    {images && images.length > 0 ? (
                        <>
                            <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Showcase ${idx}`}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", flexShrink: 0 }}
                                    />
                                ))}
                            </div>

                            {hasMultiple && (
                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(idx); }}
                                            className="w-1.5 h-1.5 rounded-full transition-all"
                                            style={{
                                                background: idx === activeIndex ? "var(--accent-2)" : "rgba(255,255,255,0.3)"
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div style={{ height: "100%", background: "linear-gradient(135deg,#131826,#0B0F1A)" }} className="p-4 flex flex-col gap-2">
                            <div style={{ width: "60%", height: "8px", borderRadius: "3px", background: "rgba(255,255,255,0.08)" }} />
                            <div style={{ width: "85%", height: "8px", borderRadius: "3px", background: "rgba(255,255,255,0.05)" }} />
                            <div className="flex gap-2 mt-2">
                                <div style={{ flex: 1, height: "40px", borderRadius: "6px", background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.3)" }} />
                                <div style={{ flex: 1, height: "40px", borderRadius: "6px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)" }} />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Laptop Base (Keyboard lower part) */}
            <div
                style={{
                    background: "linear-gradient(to bottom, #2d3345, #1B2233)",
                    width: "100%",
                    maxWidth: "320px",
                    height: "8px",
                    borderRadius: "0 0 8px 8px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
                }}
                className="relative"
            >
                <div
                    style={{
                        background: "#0F1420",
                        width: "40px",
                        height: "4px",
                        borderRadius: "0 0 4px 4px"
                    }}
                    className="absolute top-0 left-1/2 -translate-x-1/2"
                />
            </div>
        </div>
    );
}

function MiniPhoneFrame({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3500);
        return () => clearInterval(interval);
    }, [images]);

    const hasMultiple = images && images.length > 1;

    return (
        <div className="flex justify-center flex-shrink-0 project-device">
            <div
                style={{
                    border: "8px solid #1B2233",
                    borderRadius: "32px",
                    background: "#05070C",
                    width: "150px",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5), inset 0 0 2px rgba(255,255,255,0.15)",
                    overflow: "hidden"
                }}
                className="relative"
            >
                <div
                    className="absolute top-1.5 left-1/2 -translate-x-1/2 w-8 h-2.5 bg-black rounded-full z-20"
                    style={{ pointerEvents: "none" }}
                />

                <div style={{ height: "270px", position: "relative" }} className="flex flex-col">
                    {images && images.length > 0 ? (
                        <>
                            <div className="w-full h-full flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
                                {images.map((img, idx) => (
                                    <img
                                        key={idx}
                                        src={img}
                                        alt={`Showcase ${idx}`}
                                        style={{ width: "100%", height: "100%", objectFit: "cover", flexShrink: 0 }}
                                    />
                                ))}
                            </div>

                            {hasMultiple && (
                                <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
                                    {images.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={(e) => { e.preventDefault(); e.stopPropagation(); setActiveIndex(idx); }}
                                            className="w-1.5 h-1.5 rounded-full transition-all"
                                            style={{
                                                background: idx === activeIndex ? "var(--accent-2)" : "rgba(255,255,255,0.3)"
                                            }}
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    ) : (
                        <div style={{ height: "100%", background: "linear-gradient(180deg,#131826,#0B0F1A)" }} className="p-3.5 flex flex-col gap-2 pt-6">
                            <div style={{ width: "70%", height: "8px", borderRadius: "3px", background: "rgba(255,255,255,0.08)" }} />
                            <div style={{ width: "50%", height: "8px", borderRadius: "3px", background: "rgba(255,255,255,0.05)" }} />
                            <div style={{ flex: 1, marginTop: "12px", borderRadius: "8px", background: "rgba(212,255,61,0.08)", border: "1px solid rgba(212,255,61,0.25)" }} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function ProjectCard({ project, index }) {
    const isMobile = project.type === "mobile";
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <Reveal delay={(index % 2) * 0.1}>
            <div
                style={{ border: "1px solid var(--border)", borderRadius: "18px", background: "rgba(255,255,255,0.02)" }}
                className="p-6 sm:p-7 h-full flex flex-col hover:border-white/20 transition-colors duration-300 group"
            >
                <div className="flex flex-col-reverse gap-4 sm:grid sm:grid-cols-[1fr,auto] sm:gap-6 items-start mb-5">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            {isMobile ? <Smartphone size={14} color="var(--accent-2)" /> : <Globe size={14} color="var(--accent-2)" />}
                            <span style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--text-muted)" }} className="text-[11px] uppercase tracking-wide">
                                {isMobile ? "Mobile app" : "Web app"} · {project.year}
                            </span>
                        </div>
                        <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="text-xl font-bold mb-1">
                            {project.name}
                        </h3>
                        <p style={{ color: "var(--accent-2)" }} className="text-sm">{project.tagline}</p>
                    </div>
                    {isMobile ? (
                        <div
                            className="cursor-zoom-in relative group/device flex-shrink-0"
                            onClick={() => setIsExpanded(true)}
                            title="Click to expand mockup"
                        >
                            <MiniPhoneFrame images={project.images} />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/device:opacity-100 transition-opacity duration-300 rounded-[32px] flex flex-col items-center justify-center gap-1">
                                <ZoomIn size={18} className="text-white animate-pulse" />
                                <span className="text-[9px] font-semibold uppercase tracking-wider text-white">Expand</span>
                            </div>
                        </div>
                    ) : null}
                </div>

                {!isMobile && (
                    <div
                        className="cursor-zoom-in relative group/device w-full flex justify-center mt-4"
                        onClick={() => setIsExpanded(true)}
                        title="Click to expand mockup"
                    >
                        <BrowserFrame images={project.images} />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/device:opacity-100 transition-opacity duration-300 rounded-[16px] flex flex-col items-center justify-center gap-1 w-[90%] max-w-[280px] h-[140px]">
                            <ZoomIn size={18} className="text-white animate-pulse" />
                            <span className="text-[9px] font-semibold uppercase tracking-wider text-white">Expand Screen</span>
                        </div>
                    </div>
                )}

                <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-sm leading-relaxed mt-5 mb-5">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.stack.map((s) => (
                        <Tag key={s}>{s}</Tag>
                    ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full">
                    <button
                        onClick={() => setIsExpanded(true)}
                        style={{ color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
                        className="flex items-center gap-1.5 text-sm font-medium group-hover:gap-2.5 transition-all duration-200 mr-auto"
                    >
                        View case study <ExternalLink size={14} />
                    </button>

                    <div className="flex items-center gap-2">
                        {project.playstore && (
                            <a
                                href={project.playstore}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    border: "1px solid var(--border)",
                                    background: "rgba(255,255,255,0.02)",
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                                className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 transition duration-200"
                            >
                                <Play size={11} fill="currentColor" /> Play Store
                            </a>
                        )}
                        {project.appstore && (
                            <a
                                href={project.appstore}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    border: "1px solid var(--border)",
                                    background: "rgba(255,255,255,0.02)",
                                    fontFamily: "'JetBrains Mono', monospace",
                                }}
                                className="flex items-center gap-1.5 text-[11px] px-3 py-1.5 rounded-full text-white/70 hover:text-white hover:border-white/20 hover:bg-white/5 transition duration-200"
                            >
                                <Apple size={11} fill="currentColor" /> App Store
                            </a>
                        )}
                    </div>
                </div>

                {isExpanded && (
                    <ExpandedDeviceModal project={project} onClose={() => setIsExpanded(false)} />
                )}
            </div>
        </Reveal>
    );
}

function Projects() {
    return (
        <Section id="projects" eyebrow="Selected work" title="Things I've shipped">
            <div className="grid sm:grid-cols-2 gap-6">
                {PROJECTS.slice(0, 3).map((p, i) => (
                    <ProjectCard key={p.name} project={p} index={i} />
                ))}
            </div>
            <Reveal delay={0.15}>
                <div className="flex justify-center mt-12">
                    <a
                        href="#/projects"
                        style={{
                            border: "1px solid var(--border)",
                            color: "var(--text)",
                            fontFamily: "'JetBrains Mono', monospace",
                        }}
                        className="text-xs font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:border-white/20 hover:bg-white/5 transition duration-300"
                    >
                        Explore More Projects <ArrowUpRight size={14} color="var(--accent-2)" />
                    </a>
                </div>
            </Reveal>
        </Section>
    );
}

/* ---------------------------------------------------------
   EXPERIENCE
--------------------------------------------------------- */

function Experience() {
    return (
        <Section id="experience" eyebrow="Career" title="Where I've worked">
            <div className="relative pl-8" style={{ borderLeft: "1px solid var(--border)" }}>
                {EXPERIENCE.map((e, i) => (
                    <Reveal key={e.role + e.org} delay={i * 0.1}>
                        <div className={`relative ${i === EXPERIENCE.length - 1 ? "pb-0" : "pb-10"}`}>
                            <span
                                style={{ background: "var(--accent-2)", left: "-37px" }}
                                className="absolute top-1.5 w-2.5 h-2.5 rounded-full"
                            />
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent-2)" }} className="text-xs mb-2">
                                {e.period}
                            </div>
                            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", color: "var(--text)" }} className="text-lg font-bold mb-1">
                                {e.role} <span style={{ color: "var(--accent-2)" }}>@ {e.org}</span>
                            </h3>
                            <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-sm leading-relaxed max-w-2xl">
                                {e.detail}
                            </p>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------
   CONTACT
--------------------------------------------------------- */

function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sent, setSent] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        setSent(true);
        const text = `Hi Ashiq, my name is ${form.name}. My email is ${form.email}. Message: ${form.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
        window.open(whatsappUrl, "_blank");
    };

    const inputStyle = {
        background: "rgba(255,255,255,0.02)",
        border: "1px solid var(--border)",
        borderRadius: "10px",
        color: "var(--text)",
        fontFamily: "'Inter', sans-serif",
        outline: "none",
    };

    return (
        <Section id="contact" eyebrow="Contact" title="Let's build something">
            <div className="grid md:grid-cols-[0.9fr,1.1fr] gap-14">
                <Reveal>
                    <p style={{ color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }} className="text-base leading-relaxed mb-8 max-w-md">
                        Have a product idea, a role to fill, or just want to talk React Native architecture?
                        My inbox is open.
                    </p>
                    <div className="flex flex-col gap-4">
                        <a href="mailto:ashiqashi8320@gmail.com" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>
                            <Mail size={16} color="var(--accent-2)" /> ashiqashi8320@gmail.com
                        </a>
                        <a href="https://github.com/ashiqmhmd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>
                            <Github size={16} color="var(--accent-2)" /> github.com/mohammedashiq
                        </a>
                        <a href="https://www.linkedin.com/in/mhmdashiq-543776229" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>
                            <Linkedin size={16} color="var(--accent-2)" /> linkedin/mhmdashiq
                        </a>
                        <a href="/ashiqcv.pdf" download="Mohammed_Ashiq_CV.pdf" className="flex items-center gap-3 text-sm hover:text-white transition-colors" style={{ color: "var(--text-muted)" }}>
                            <Briefcase size={16} color="var(--accent-2)" /> Download CV / Resume
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    {sent ? (
                        <div style={{ border: "1px solid var(--border)", borderRadius: "16px", background: "rgba(255,255,255,0.02)" }} className="p-8 text-center">
                            <p style={{ color: "var(--accent-2)", fontFamily: "'Space Grotesk', sans-serif" }} className="text-lg font-semibold mb-2">
                                Message noted.
                            </p>
                            <button
                                onClick={() => {
                                    setForm({ name: "", email: "", message: "" });
                                    setSent(false);
                                }}
                                style={{ border: "1px solid var(--border)", color: "var(--text)", fontFamily: "'Inter', sans-serif" }}
                                className="mt-4 text-xs font-semibold px-4 py-2 rounded-full hover:bg-white/5 transition"
                            >
                                Send another message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submit} className="flex flex-col gap-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    required
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    style={inputStyle}
                                    className="px-4 py-3 text-sm focus:border-white/30"
                                />
                                <input
                                    required
                                    type="email"
                                    placeholder="Your email"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    style={inputStyle}
                                    className="px-4 py-3 text-sm focus:border-white/30"
                                />
                            </div>
                            <textarea
                                required
                                placeholder="What are you building?"
                                rows={5}
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                style={inputStyle}
                                className="px-4 py-3 text-sm resize-none focus:border-white/30"
                            />
                            <button
                                type="submit"
                                style={{ background: "var(--accent)", color: "#0B0F1A", fontFamily: "'Inter', sans-serif" }}
                                className="text-sm font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:brightness-110 transition w-fit"
                            >
                                Send message <Send size={15} />
                            </button>
                        </form>
                    )}
                </Reveal>
            </div>
        </Section>
    );
}

/* ---------------------------------------------------------
   FOOTER
--------------------------------------------------------- */

function Footer() {
    return (
        <footer style={{ borderTop: "1px solid var(--border)" }} className="max-w-6xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span style={{ color: "var(--text-muted)", fontFamily: "'JetBrains Mono', monospace" }} className="text-xs">
                ©  Mohammed Ashiq. Built with React.
            </span>

        </footer>
    );
}

/* ---------------------------------------------------------
   ROOT
--------------------------------------------------------- */

export default function Portfolio() {
    return (
        <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
            <style>{`
        @keyframes lightSpeedInLeft {
          from {
            transform: translate3d(-120%, 0, 0) skewX(30deg);
            opacity: 0;
          }
          60% {
            transform: skewX(-20deg);
            opacity: 1;
          }
          80% {
            transform: skewX(5deg);
            opacity: 1;
          }
          to {
            transform: translate3d(0, 0, 0);
            opacity: 1;
          }
        }
        @keyframes statusSlideIn {
          from {
            opacity: 0;
            transform: translateX(-12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes rowShimmer {
          0% {
            background: rgba(212, 255, 61, 0.18);
            border-color: rgba(212, 255, 61, 0.4);
          }
          100% {
            background: rgba(255, 255, 255, 0.03);
            border-color: rgba(255, 255, 255, 0.06);
          }
        }
        .status-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          animation: statusSlideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards, rowShimmer 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        @keyframes statusDotPulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(212, 255, 61, 0.6);
          }
          70% {
            transform: scale(1.15);
            box-shadow: 0 0 0 4px rgba(212, 255, 61, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(212, 255, 61, 0);
          }
        }
        .status-dot {
          animation: statusDotPulse 2s infinite;
        }
        @keyframes blinkCursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .terminal-cursor {
          animation: blinkCursor 1s step-end infinite;
          margin-left: 2px;
        }
        @keyframes phoneGlowBreathe {
          0% {
            box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(139,92,246,0.3);
          }
          50% {
            box-shadow: 0 0 0 1px rgba(255,255,255,0.1), 0 35px 90px -10px rgba(212,255,61,0.22);
          }
          100% {
            box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(139,92,246,0.3);
          }
        }
        .phone-container {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 30px 80px -20px rgba(139,92,246,0.35);
          animation: phoneGlowBreathe 8s ease-in-out infinite;
          transition: transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .phone-container:hover {
          transform: scale(1.05);
        }
        @keyframes techPopIn {
          from {
            opacity: 0;
            transform: scale(0.6) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .tech-icon-circle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 9999px;
          opacity: 0;
          animation: techPopIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), background 0.3s, border-color 0.3s;
          cursor: pointer;
        }
        .tech-icon-circle:hover {
          transform: scale(1.22) translateY(-4px);
          background: rgba(255, 255, 255, 0.08);
          border-color: var(--accent-2);
        }
      `}</style>
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}