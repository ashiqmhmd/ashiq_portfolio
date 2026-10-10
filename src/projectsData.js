import credit1Img from "./resources/credit1.png";
import credit2Img from "./resources/credit2.png";
import credit3Img from "./resources/credit3.png";
import ecommerseImg from "./resources/ecommerse.png";
import ecommerseImg1 from "./resources/ecommerse2.png";
import ecommerseImg2 from "./resources/ecommerse3.png";
import ecommerseImg3 from "./resources/ecommerse-mob.png";
import ecommerseImg4 from "./resources/ecommerse-mob1.png";
import ecommerseImg5 from "./resources/ecommerse-mob2.png";
import ecommerseImg6 from "./resources/ecommerse-mob3.png";
import pos1 from "./resources/pos1.png"
import pos2 from "./resources/pos2.png"
import pos3 from "./resources/pos3.png"
import pos4 from "./resources/pos4.png"
import pos5 from "./resources/pos5.png"
import vote1 from "./resources/vote1.png"
import vote2 from "./resources/vote2.png"
import vote3 from "./resources/vote3.png"
import vote4 from "./resources/vote4.png"
import vote5 from './resources/vote5.png'
import chitty1 from "./resources/chitty1.jpeg"
import chitty2 from "./resources/chitty2.jpeg"
import chitty3 from "./resources/chitty3.jpeg"
import chitty4 from "./resources/chitty4.png"
import lib1 from "./resources/library1.png"
import lib2 from "./resources/library2.png"
import lib3 from "./resources/library3.png"
import tasm1 from "./resources/TasmAI-1.png"
import tasm2 from "./resources/TasmAI-2.png"
import tasm3 from "./resources/TasmAI-3.png"
import tasm4 from "./resources/TasmAI-4.png"
import st1 from "./resources/student1.png"
import st2 from "./resources/Student2.png"
import st3 from "./resources/student3.png"
import Alumini1 from "./resources/Alumini1.png"
import Alumini2 from "./resources/Alumini2.png"
import Alumini3 from "./resources/Alumini3.png"
import Alumini4 from "./resources/Alumini4.png"
import psadmin1 from "./resources/psAdmin1.png"
import psadmin2 from "./resources/psAdmin2.png"
import psadmin3 from "./resources/psAdmin3.png"
import psUser1 from "./resources/psUser1.jpg"
import psUser2 from "./resources/psUser2.jpg"
import psUser3 from "./resources/psUser3.jpg"
import psUser4 from "./resources/psUser4.jpg"
import psmanager1 from "./resources/psmanager1.jpg"
import psmanager2 from "./resources/psmanager2.jpg"
import psmanager3 from "./resources/psmanager3.jpg"
import psmanager4 from "./resources/psmanager4.jpg"
import Gnet from "./resources/Gnet.png"
import Gnet2 from "./resources/Gnet2.png"
import Gnet3 from "./resources/Gnet3.png"
import Gnet4 from "./resources/Gnet4.png"
import csms1 from './resources/csms1.png'
import csms2 from './resources/csms2.png'
import csms3 from './resources/csms3.png'
import csms4 from './resources/csms4.png'
import csms5 from './resources/csms5.png'
import elm1 from './resources/elmelone1.png'
import elm2 from './resources/elmelone2.png'
import elm3 from './resources/elmelone3.png'
import elm4 from './resources/elmelone4.png'
import elm5 from './resources/elmelone5.png'
import elm6 from './resources/elemlone6.png'
import elm7 from './resources/elmelone7.png'
import elm8 from './resources/elmelone8.png'
import obd1 from './resources/obd1.jpeg'
import obd2 from './resources/obd2.jpeg'
import obd3 from './resources/obd3.jpeg'
import english from './resources/english1.png'
import english2 from './resources/english2.png'
import english3 from './resources/english3.png'
import english4 from './resources/english4.png'


export const PROJECTS = [

    {
        name: "Playspots User",
        type: "mobile",
        tagline: "Turf booking & Managing app for users side",
        description: "A users side turf booking and payment management application that helps users to book turfs, payments, and customers",
        stack: ["React Native", "Redux", "Node.js", "MongoDB", "asyncstorage", "firebase", "python", "sentry", "aws",],
        year: "2023",
        images: [psUser1, psUser2, psUser3, psUser4],
        playstore: "https://play.google.com/store/apps/details?id=com.playspots",
        appstore: "https://apps.apple.com/in/app/playspots-sports-facilities/id1451481887"
    },
    {
        name: "Playspots Manager",
        type: "mobile",
        tagline: "Turf managers app for manage their turfs",
        description: "A turf managers app that enables turf owners to manage their turfs, bookings, payments, and customers",
        stack: ["React Native", "Redux", "AsyncStorage", "Node.js", "MongoDB", "Firebase", ".Net", "AWS"],
        year: "2025",
        images: [psmanager1, psmanager2, psmanager3, psmanager4],
        playstore: "https://play.google.com/store/apps/details?id=com.playspots.manager",
        appstore: "https://apps.apple.com/in/app/playspots-manager/id1456987704"
    },

    {
        name: "Credit Manger",
        type: "mobile",
        tagline: "Credit management & calculation analyse App",
        description:
            "A credit management application that helps users track credit accounts, monitor payment history, analyze financial data, and manage outstanding balances through an intuitive dashboard.",
        stack: ["React Native", "Node.js", "Firebase", "AsyncStorage", "Redux"],
        year: "2026",
        images: [credit1Img, credit2Img, credit3Img],
    },
    {
        name: "SmartEnergy",
        type: "web",
        tagline: "Electronic E-Commerse store",
        description:
            "A modern electronics e-commerce platform with product catalog management, shopping cart, order processing, inventory management, user authentication, and secure payment integration.",
        stack: ["Next.js", "Node.js", "MongoDB", "Mern", "Redux", 'React', "Express"],
        year: "2025",
        images: [ecommerseImg, ecommerseImg1, ecommerseImg2,],
    },
    {
        name: "SmartEnergy Mobile",
        type: "mobile",
        tagline: "Electronic E-Commerse store",
        description: "A modern electronics e-commerce platform with product catalog management, shopping cart, order processing, inventory management, user authentication, and secure payment integration.",
        stack: ["React Native", "Asyncstorage", "Redux", "TypeScript", "AWS", "MongoDB"],
        year: "2026",
        images: [ecommerseImg3, ecommerseImg4, ecommerseImg5, ecommerseImg6]
    },
    {
        name: "Zyqiq POS",
        type: "mobile",
        tagline: "POS Billing, Stock & Inventory Management",
        description: "A wholesale and  retail billing and business management application that streamlines point-of-sale operations, inventory tracking, customer management, invoice generation, and sales reporting through a fast and intuitive interface.",
        stack: ["React Native", "Asyncstorage", "Redux", "TypeScript", "AWS", "MongoDB"],
        year: "2026",
        images: [pos1, pos2, pos3, pos4, pos5]
    },
    {
        name: "Gnet Food Delivery",
        type: "mobile",
        tagline: "Smart Food Ordering & Delivery, Built for Saudi Arabia",
        description: "A modern food delivery and digital pickup platform designed for the Saudi market, connecting customers with restaurants through seamless food discovery, real-time order tracking, smart cart management, and flexible delivery or takeaway options. The app also features automated order token management and live order status updates to create a faster and more efficient ordering experience.",
        stack: ["React Native", "TypeScript", "Redux Toolkit", "Node.js", "WebSockets", "Google Maps API", "AWS", "MongoDB"],
        year: "2026",
        images: [Gnet, Gnet2, Gnet3, Gnet4,]
    },
    {
        name: "Playspots admin",
        type: "mobile",
        tagline: "Turf booking & Managing app for admin side",
        description: "A admin side turf booking and payment management application that helps turf owners to manage their turfs, bookings, payments, and customers",
        stack: ["React Native", "Redux", "Node.js", "MongoDB", "asyncstorage", "firebase", "python", "sentry", "aws",],
        year: "2023",
        images: [psadmin1, psadmin2, psadmin3,],
    },
    {
        name: "MES UAE Alumini",
        type: "mobile",
        tagline: "Connect, Network & Grow Together",
        description: "A college alumni platform that enables graduates to browse the alumni directory, search members by batch and blood group, view digital membership cards, receive announcements, explore events, and stay connected with the alumni community through a secure mobile application.",
        stack: ["React Native", "Redux", "AsyncStorage", "Node.js", "MongoDB", "Firebase", ".Net", "AWS"],
        year: "2025",
        images: [Alumini1, Alumini2, Alumini3, Alumini4],
    },
    {
        name: "EleMelone Diet Solution",
        type: "web",
        tagline: "Personalized diet planning and nutrition management solution",
        description:
            "A diet and nutrition management platform designed to support personalized diet plans, client management, and communication between dietitians and their clients, with Twilio integration for messaging and notifications.",
        stack: ["React", "HTML", "CSS", "Java", "Spring Boot", "Twilio"],
        year: "2021",
        images: [elm1, elm2, elm3, elm4, elm5, elm6, elm7, elm8],
    },

    {
        name: "CSMS - Customer Service Management System",
        type: "web",
        tagline: "Automated mobile repair management and technician assignment system",
        description:
            "A mobile phone repair management platform that allows customers to register complaints online, submit device and issue details, and track repair status. Automatically assigns repair jobs to available technicians. Technicians can log in to view assigned jobs and update repair statuses, while administrators manage complaints, technicians, job assignments, and the entire repair workflow through a centralized dashboard.",
        stack: [
            "Java",
            "Spring Boot",
            "Flutter",
            "MySQL",
            "REST APIs"
        ],
        year: "2021",
        images: [csms1, csms2, csms3, csms4, csms5]
    },
    {
        name: "VoteMarkinApp",
        type: "mobile",
        tagline: "Vote marking application for localbody",
        description:
            "A voter management application that enables election teams to search voter records, verify voter details, mark voting status in real time, and efficiently track participation through a fast and intuitive interface.",
        stack: ["ReactNative", "Python", "PostgreSQL", "FastAPI", "sqlLite"],
        year: "2026",
        images: [vote5, vote1, vote2, vote3, vote4]
    },
    {
        name: "CharityApp",
        type: "mobile",
        tagline: "Charity Account Managing & Donations ",
        description: "A mobile application that simplifies chit fund management by enabling members to track installments, view payment history, monitor upcoming dues, and receive real-time notifications, while providing organizers with tools to manage groups, collections, auctions, and member records efficiently.",
        stack: ["React Native", "Expo", "Redux", "Node.js", "MongoDB", "asyncstorage",],
        year: "2025",
        images: [chitty1, chitty2, chitty3, chitty4],
    },
    {
        name: "Library Management",
        type: "mobile",
        tagline: "Library Books management application",
        description: "A Library management application that allows users to manage book records, track book status, manage book records, view book details, manage book details",
        stack: ["React Native", "Redux", "Asyncstorage", "Node.js", "MongoDB", ""],
        year: "2026",
        images: [lib1, lib2, lib3,],
    },
    {
        name: "TasmAI",
        type: "mobile",
        tagline: "Teachers learning & Managing app",
        description: "A mobile application that helps teachers manage students, share lessons, assignments, and notes, track student fees, and communicate through integrated chat, while enabling learners to access educational content and stay updated with their academic progress",
        stack: ["React Native", "Redux", "Node.js", "MongoDB", "asyncstorage", "firebase", "python", "flask", "fastapi", "aws"],
        year: "2025",
        images: [tasm1, tasm2, tasm3, tasm4],
    },
    {
        name: "Student App",
        type: "mobile",
        tagline: "Students Access Teacher Assignments, Notes & Events",
        description: "A student management application that allows students to access assignments, study notes, academic updates, class schedules, fee status, and event information while staying connected with teachers through in-app communication",
        stack: ["React Native", "Redux", "Asyncstorage", "Node.js", "MongoDB", "firebase", "flask", "fastapi", "python", "aws"],
        year: "2025",
        images: [st1, st2, st3,],
    },


    {
        name: "OBD Scanner & Vehicle Monitor",
        type: "mobile",
        tagline: "Real-time vehicle diagnostics and performance monitoring",
        description:
            "A vehicle monitoring application that connects to an OBD-II scanner via Bluetooth to retrieve and display real-time vehicle data. Monitors fuel level, vehicle speed, acceleration, engine coolant temperature, and other diagnostic parameters, helping users track vehicle performance and identify potential issues through live data readings.",
        stack: [
            "React Native",
            "RNBluetoothClassic",
            "OBD-II",
            "Bluetooth"
        ],
        year: "2026",
        images: [obd1, obd2, obd3,]
    },
    {
        name: "FluentAI - AI English Learning App",
        type: "mobile",
        tagline: "Improve your English speaking skills with your personal AI tutor",
        description:
            "An AI-powered English learning application that helps users improve their spoken English through real-time voice conversations with an AI tutor. Users can practice everyday conversations, improve pronunciation, correct grammar mistakes, expand vocabulary, and receive instant feedback on their speaking skills. The app offers interactive speaking sessions, personalized learning recommendations, progress tracking, and conversation topics for different proficiency levels, helping users build confidence and fluency in English.",
        stack: [
            "React Native",
            "TypeScript",
            "Gemini AI",
            "Speech Recognition",
            "Text-to-Speech",
            "REST APIs"
        ],
        year: "2026",
        images: [english, english2, english3, english4]
    }
];
