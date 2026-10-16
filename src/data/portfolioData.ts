export interface Project {
  id: string;
  title: string;
  category: 'Full Stack' | 'Backend & APIs' | 'Geolocation & Realtime' | 'Enterprise';
  tagline: string;
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  architectureDetails: {
    systemDesign: string;
    keyModules: string[];
    databaseModel: string;
    apis: string[];
  };
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tags?: string[] }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
  technologies: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  score: string;
  completedYear: string;
  coursework: string[];
}

export const PERSONAL_INFO = {
  name: "Sonu Jangir",
  title: "MERN Stack Developer & Backend Engineer",
  tagline: "Building scalable APIs, robust database architectures, and production-ready web applications.",
  location: "Jaipur, Rajasthan, India",
  phone: "+91 6377184793",
  phoneRaw: "6377184793",
  email: "sonujangir992002@gmail.com",
  github: "https://github.com/Sonu7788",
  githubUsername: "Sonu7788",
  linkedin: "https://linkedin.com/in/sonujangirpilani",
  linkedinUsername: "sonujangirpilani",
  resumePath: "/Sonu_Jangir_Resume.pdf",
  bio: "MERN Stack Developer with 6 months of hands-on internship and full-time experience building production-oriented web applications, REST APIs, authentication flows, CRUD systems, dashboards, and database-driven modules. Strong in React, Next.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Sequelize, and PostGIS API integration. Experienced across healthcare, sports, commerce, education, travel, hyperlocal delivery, hotel, and community-management platforms.",
  careerObjective: "To grow as a strong MERN/Node.js engineer by building scalable APIs, reliable database-driven systems, and production-ready applications while deepening expertise in cloud computing, distributed systems, performance optimization, and backend architecture."
};

export const METRICS = [
  { label: "Production & Client Projects", value: "9+", sub: "Healthcare, Delivery, Commerce & SaaS" },
  { label: "Production Experience", value: "6 Mos", sub: "Internship + Full-Time at Objectg Square" },
  { label: "Databases Mastered", value: "4", sub: "PostgreSQL, MySQL, MongoDB & PostGIS" },
  { label: "MCA Academic CGPA", value: "8.0", sub: "UEM Jaipur (Completed 2026)" },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Engineering & APIs",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: 90, tags: ["Runtime", "Async", "Event Loop"] },
      { name: "Express.js", level: 92, tags: ["REST APIs", "Middleware", "Routing"] },
      { name: "RESTful API Design", level: 95, tags: ["CRUD", "Pagination", "JSON"] },
      { name: "Authentication & Security", level: 90, tags: ["JWT", "Bcrypt", "RBAC"] },
      { name: "RBAC & Permissions", level: 92, tags: ["Custom Middleware", "Roles"] },
      { name: "Input Validation", level: 88, tags: ["Joi", "Express-Validator", "Sanitization"] },
    ]
  },
  {
    title: "Databases & ORMs",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: 88, tags: ["Relational", "ACID", "Constraints"] },
      { name: "PostGIS", level: 84, tags: ["Geospatial", "Coordinates", "ST_Distance"] },
      { name: "MySQL", level: 88, tags: ["Indexing", "Foreign Keys", "Joins"] },
      { name: "MongoDB & Mongoose", level: 90, tags: ["NoSQL", "Aggregations", "Schemas"] },
      { name: "Sequelize ORM", level: 92, tags: ["Migrations", "Associations", "Hooks"] },
    ]
  },
  {
    title: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: 90, tags: ["Hooks", "Context API", "Components"] },
      { name: "Next.js", level: 85, tags: ["App Router", "SSR", "API Routes"] },
      { name: "JavaScript (ES6+)", level: 92, tags: ["Async/Await", "Promises", "Closures"] },
      { name: "Tailwind CSS", level: 92, tags: ["Responsive UI", "Flexbox", "Grid"] },
      { name: "HTML5 & CSS3", level: 95, tags: ["Semantic", "Cross-Browser", "Styles"] },
    ]
  },
  {
    title: "Integrations & Services",
    iconName: "Zap",
    skills: [
      { name: "Razorpay", level: 86, tags: ["Payment Gateway", "Webhooks", "Orders"] },
      { name: "Firebase & FCM", level: 85, tags: ["Push Notifications", "Cloud Messaging"] },
      { name: "SMTP & Nodemailer", level: 88, tags: ["Transactional Emails", "Templates"] },
      { name: "File Uploads", level: 90, tags: ["Multer", "Cloud Storage", "Validation"] },
      { name: "Third-Party REST APIs", level: 92, tags: ["HTTP Clients", "Integration"] },
    ]
  },
  {
    title: "DevOps & Tooling",
    iconName: "Terminal",
    skills: [
      { name: "Git & GitHub", level: 90, tags: ["Branching", "Pull Requests", "Workflows"] },
      { name: "PM2", level: 85, tags: ["Process Management", "Cluster", "Logs"] },
      { name: "Linux / Server Ops", level: 82, tags: ["Ubuntu VPS", "Nginx", "Bash"] },
      { name: "Postman", level: 94, tags: ["API Testing", "Collections", "Environments"] },
      { name: "VS Code", level: 95, tags: ["IDE", "Extensions", "Productivity"] },
      { name: "AI-Assisted Dev", level: 92, tags: ["Cursor", "Claude", "Antigravity"] },
    ]
  },
  {
    title: "Core Computer Science",
    iconName: "Cpu",
    skills: [
      { name: "Data Structures & Algorithms", level: 82, tags: ["Arrays", "Trees", "Graphs"] },
      { name: "Database Management Systems", level: 88, tags: ["Normalization", "Transactions", "Indexes"] },
      { name: "Computer Networks & OS", level: 80, tags: ["TCP/IP", "HTTP/HTTPS", "Concurrency"] },
      { name: "Java (Core & OOP)", level: 80, tags: ["Collections", "Exceptions", "GC"] },
      { name: "Android / Kotlin Basics", level: 75, tags: ["Activities", "Android Studio"] },
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "drmate",
    title: "DrMate — Healthcare & Clinic Management",
    category: "Full Stack",
    tagline: "Enterprise clinic orchestration platform with granular role-based permissions and diagnostic billing.",
    description: "A comprehensive healthcare operations platform powering doctor, patient, and clinical staff workflows, appointment scheduling, patient records, consultation reports, diagnostic orders, and financial billing.",
    highlights: [
      "Engineered multi-level clinic-member roles, designations, authentication, and custom permission-checking middleware.",
      "Architected doctor-patient appointment lifecycle with real-time slot checking and cancellation handling.",
      "Built diagnostic order tracking, consultation note generation, and integrated clinic billing modules.",
      "Designed normalized MySQL relational schema managed via Sequelize ORM with secure transaction support."
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "Sequelize", "MySQL", "JWT Auth", "Tailwind CSS"],
    featured: true,
    architectureDetails: {
      systemDesign: "Three-tier architecture with React/Next.js frontend communicating with Express.js REST API layer secured by custom RBAC permission middleware and MySQL database.",
      keyModules: ["Doctor & Staff Roster", "Appointment Booking Engine", "Electronic Health Records (EHR)", "Diagnostic Billing & Invoicing", "RBAC Permission Matrix"],
      databaseModel: "Relational schema with Users, Roles, ClinicMembers, Appointments, Consultations, Diagnostics, and Invoices with foreign-key constraints and indexes.",
      apis: [
        "POST /api/v1/auth/clinic-login",
        "GET /api/v1/appointments/doctor/:doctorId/slots",
        "POST /api/v1/consultations/diagnostics/order",
        "GET /api/v1/billing/invoices/summary"
      ]
    }
  },
  {
    id: "hyperlocal-delivery",
    title: "Hyperlocal Delivery & Rider Tracking System",
    category: "Geolocation & Realtime",
    tagline: "PostgreSQL/PostGIS geospatial dispatch engine with real-time parcel lifecycle and Firebase Cloud Messaging.",
    description: "An advanced location-based parcel and food logistics platform executing instant rider matching based on geospatial distance calculations, parcel transit state machines, and real-time event-driven push notifications.",
    highlights: [
      "Implemented PostgreSQL with PostGIS extension for spatial queries, coordinate indexing, and distance calculation (ST_DistanceSphere).",
      "Built rider assignment algorithm dispatching closest active riders to pickup coordinates within radius threshold.",
      "Engineered strict parcel lifecycle state machine (Created -> Assigned -> Picked Up -> In Transit -> Delivered).",
      "Integrated Firebase Cloud Messaging (FCM) to trigger background push notifications at every delivery milestone."
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "PostGIS", "Firebase / FCM", "REST APIs", "Geospatial Queries"],
    featured: true,
    architectureDetails: {
      systemDesign: "Geospatially-indexed event-driven backend utilizing PostGIS spatial indexing for high-frequency rider coordinate updates and delivery matching paired with FCM messaging queues.",
      keyModules: ["PostGIS Spatial Query Engine", "Rider Dispatching Algorithm", "Parcel Lifecycle State Machine", "Event-Driven FCM Dispatcher"],
      databaseModel: "PostgreSQL spatial tables with geometry(Point, 4326) columns, GIST spatial indexes on rider coordinates and delivery pickup/dropoff points.",
      apis: [
        "POST /api/v1/riders/location-ping (Lat, Long, Status)",
        "POST /api/v1/deliveries/assign-nearest (ParcelId, PickupCoords)",
        "PATCH /api/v1/deliveries/:id/status-transition",
        "GET /api/v1/parcels/:trackingId/live-status"
      ]
    }
  },
  {
    id: "apnavyapar",
    title: "ApnaVyapar — Multi-Seller Commerce APIs",
    category: "Backend & APIs",
    tagline: "Multi-vendor commerce backend with vendor KYC, split order handling, and item-level status workflows.",
    description: "A robust scalable commerce backend engine enabling multiple merchants to onboard, complete KYC verification, list categorized product catalogs, and process split customer orders with individual item tracking.",
    highlights: [
      "Built end-to-end seller onboarding with KYC document validation and secure multipart image uploads.",
      "Engineered multi-seller order splitting logic where a single customer cart branches into independent seller fulfillment pipelines.",
      "Implemented order-item-level status management (Pending, Accepted, Packed, Shipped, Delivered, Returned).",
      "Structured product catalog with hierarchical categories, variant attributes, inventory locks, and price validations."
    ],
    technologies: ["Node.js", "Express.js", "Sequelize ORM", "MySQL", "Multer", "JWT", "Input Validation"],
    featured: true,
    architectureDetails: {
      systemDesign: "Decoupled modular architecture separating Seller KYC, Catalog Management, and Multi-Vendor Order Processing with transactional integrity.",
      keyModules: ["Seller KYC Verification", "Catalog & Category Hierarchy", "Multi-Seller Cart Splitter", "Item-Level Status Machine"],
      databaseModel: "MySQL relational design with Sellers, Stores, Products, ProductVariants, Orders, and OrderItems with composite status indexes.",
      apis: [
        "POST /api/v1/sellers/kyc-submit",
        "POST /api/v1/products/create-variant",
        "POST /api/v1/orders/checkout-split",
        "PATCH /api/v1/orders/:orderId/items/:itemId/status"
      ]
    }
  },
  {
    id: "society-management",
    title: "Society & Community Housing Management",
    category: "Enterprise",
    tagline: "Multi-wing residential community management platform with unit hierarchies, billing, and resident approvals.",
    description: "Administrative enterprise platform for gated residential communities and apartment complexes, managing buildings, wings, units, flats, amenity bookings, recurring maintenance subscriptions, and resident visitor approvals.",
    highlights: [
      "Designed PostgreSQL database schemas capturing complex residential hierarchies (Society -> Buildings -> Wings -> Flat Types -> Units).",
      "Built resident onboarding and verification pipelines with administrative approval workflows.",
      "Engineered amenity reservation system with conflict detection and automated maintenance subscription ledger.",
      "Created secure role-based access for Society Admins, Security Guards, and Residents."
    ],
    technologies: ["Node.js", "Express.js", "PostgreSQL", "REST APIs", "Sequelize", "RBAC", "Validation"],
    featured: false,
    architectureDetails: {
      systemDesign: "Relational administrative backbone with structured hierarchical normalization and transactional safety for maintenance accounting.",
      keyModules: ["Society Hierarchy Builder", "Resident Approval Engine", "Amenity Booking Scheduler", "Maintenance Fee Billing"],
      databaseModel: "PostgreSQL relational schema with cascade rules, unit status flags, and ledger tables for monthly maintenance collections.",
      apis: [
        "GET /api/v1/societies/:id/wings-units-tree",
        "POST /api/v1/residents/request-onboarding",
        "PATCH /api/v1/admin/residents/:id/approve",
        "POST /api/v1/amenities/reserve-slot"
      ]
    }
  },
  {
    id: "hotel-management",
    title: "Hotel Management & Booking Platform",
    category: "Enterprise",
    tagline: "Comprehensive hotel operations API suite spanning room inventory, banquet events, POS, and guest KYC.",
    description: "An operational hospitality management engine handling dynamic room availability calendars, direct guest reservations, banquet hall bookings, Point-of-Sale (POS) dining charges, and guest identity KYC verification.",
    highlights: [
      "Implemented dynamic room inventory engine preventing double-bookings through database row-level locking.",
      "Built banquet and conference hall booking workflows with custom deposit and approval stages.",
      "Integrated Hotel POS billing module to attach restaurant and room-service charges directly to guest folios.",
      "Developed secure guest KYC document upload and identity verification APIs."
    ],
    technologies: ["Node.js", "Express.js", "Sequelize", "MySQL", "File Uploads", "POS Billing"],
    featured: false,
    architectureDetails: {
      systemDesign: "Transaction-safe booking engine designed to handle peak seasonal reservation concurrency with zero race conditions.",
      keyModules: ["Room Inventory & Calendar", "Banquet Event Planner", "Guest Folio & POS Billing", "Guest KYC Verification"],
      databaseModel: "MySQL schema with Rooms, RoomTypes, Bookings, GuestKYC, BanquetReservations, and POSInvoices.",
      apis: [
        "GET /api/v1/rooms/check-availability",
        "POST /api/v1/bookings/reserve-room",
        "POST /api/v1/pos/post-room-charge",
        "POST /api/v1/guest/upload-kyc"
      ]
    }
  },
  {
    id: "sportslivv",
    title: "SportsLivv — Sports Management Platform",
    category: "Full Stack",
    tagline: "Interactive sports operations dashboard and administration interface for matches, players, and venues.",
    description: "A sports operations platform designed for managing sporting tournaments, team rosters, match schedules, venue allocations, and live score updates through snappy administrative user interfaces.",
    highlights: [
      "Built clean, responsive React interfaces for match coordinators and tournament administrators.",
      "Integrated REST APIs with stateful frontend workflows for live tournament brackets and match data.",
      "Implemented sports operational workflows for referee assignments and equipment scheduling.",
      "Engineered efficient data filtering, search, and pagination for thousands of athletes and team records."
    ],
    technologies: ["React.js", "Node.js", "REST APIs", "Tailwind CSS", "JavaScript (ES6+)"],
    featured: false,
    architectureDetails: {
      systemDesign: "Responsive SPA frontend communicating with a RESTful backend providing fast operational metrics and roster management.",
      keyModules: ["Tournament Bracket Generator", "Team Roster Manager", "Venue Allocation Scheduler", "Admin Control Center"],
      databaseModel: "Normalized data models for Leagues, Tournaments, Teams, Players, Fixtures, and MatchResults.",
      apis: [
        "GET /api/v1/tournaments/:id/fixtures",
        "POST /api/v1/matches/update-score",
        "GET /api/v1/teams/:id/roster"
      ]
    }
  },
  {
    id: "vetpathshala",
    title: "VetPathshala — Education & Veterinary Learning",
    category: "Full Stack",
    tagline: "Educational portal for veterinary science students featuring modular lessons, quizzes, and resources.",
    description: "Specialized learning platform for veterinary students and clinical professionals, offering structured digital curriculum, video lectures, interactive quizzes, and clinical documentation libraries.",
    highlights: [
      "Developed full-featured application modules for course enrollment, video lecture streaming, and study material downloads.",
      "Built clean API integrations bridging the frontend learning dashboard with backend progress tracking databases.",
      "Implemented student assessment modules with quiz scoring and certificate eligibility validation.",
      "Ensured mobile-responsive design for veterinary field workers and students on tablets."
    ],
    technologies: ["React.js", "Node.js", "REST APIs", "Database", "Responsive UI"],
    featured: false,
    architectureDetails: {
      systemDesign: "E-learning architecture with modular content delivery and student progress state management.",
      keyModules: ["Course Player", "Assessment Engine", "Clinical Resource Library", "Student Dashboard"],
      databaseModel: "Relational database capturing Courses, Modules, Lessons, Quizzes, Submissions, and Progress.",
      apis: [
        "GET /api/v1/courses/:id/curriculum",
        "POST /api/v1/quizzes/:id/submit",
        "GET /api/v1/students/progress"
      ]
    }
  },
  {
    id: "exams-courses",
    title: "Exams & Courses Hierarchical Learning Platform",
    category: "Backend & APIs",
    tagline: "High-granularity syllabus taxonomy engine with multi-tier subject/topic trees and role-based subscriptions.",
    description: "Scalable backend architecture designed to structure massive competitive exam syllabi across deep multi-level hierarchies (Exam -> Stream -> Subject -> Topic -> Subtopic) linked with student subscriptions.",
    highlights: [
      "Engineered deeply-nested hierarchical category trees using recursive database relations and Sequelize models.",
      "Implemented role-mapping engine connecting students, instructors, exam creators, and review committees.",
      "Built subscription purchase and course expiration workflows with transactional record verification.",
      "Optimized query performance for deep taxonomy trees using database indexing and lean queries."
    ],
    technologies: ["Node.js", "Express.js", "Sequelize", "MySQL", "REST APIs", "Hierarchy Traversal"],
    featured: false,
    architectureDetails: {
      systemDesign: "Taxonomy backend engine supporting recursive syllabus navigation, user-role access controls, and subscription management.",
      keyModules: ["Taxonomy Tree Builder", "Exam-to-Course Mapping Engine", "Subscription & Access Gatekeeper", "Instructor Role Manager"],
      databaseModel: "MySQL schema with recursive self-referential keys for Topics/Subtopics, Junction tables for Courses-to-Exams, and UserSubscriptions.",
      apis: [
        "GET /api/v1/exams/:id/taxonomy-tree",
        "POST /api/v1/courses/map-to-exam",
        "POST /api/v1/subscriptions/activate-tier"
      ]
    }
  },
  {
    id: "ekloy",
    title: "Ekloy — Travel Platform",
    category: "Full Stack",
    tagline: "Travel booking and itinerary discovery web application with rich destination guides and booking workflows.",
    description: "Modern travel experience platform connecting travelers with custom curated itineraries, destination guides, stay options, and seamless reservation flows.",
    highlights: [
      "Developed responsive user interfaces for destination browsing, package filtering, and customized itinerary building.",
      "Integrated backend APIs for live availability, reservation confirmation, and customer inquiry management.",
      "Built clean interactive components highlighting user reviews, high-resolution photo galleries, and trip inclusions.",
      "Optimized client-side rendering performance for fast page transitions on mobile networks."
    ],
    technologies: ["React.js", "Node.js", "REST APIs", "Tailwind CSS", "JavaScript"],
    featured: false,
    architectureDetails: {
      systemDesign: "User-centric travel commerce platform prioritizing mobile responsiveness, image performance, and booking conversions.",
      keyModules: ["Destination Catalog", "Itinerary Builder", "Booking & Inquiry Handler", "Customer Review Showcase"],
      databaseModel: "Destinations, Packages, Itineraries, Inquiries, and Bookings.",
      apis: [
        "GET /api/v1/destinations/featured",
        "POST /api/v1/inquiries/submit",
        "POST /api/v1/trips/calculate-quote"
      ]
    }
  }
];

export const EXPERIENCE_LIST: ExperienceItem[] = [
  {
    company: "Objectg Square",
    role: "MERN Stack Developer",
    location: "Jaipur, Rajasthan, India",
    period: "6 Months (Internship + Full-Time)",
    type: "Production Experience",
    bullets: [
      "Developed production RESTful APIs using Node.js and Express.js backed by MongoDB, MySQL, and PostgreSQL.",
      "Engineered responsive React interfaces, administrative dashboards, authentication pipelines, and data-driven CRUD modules.",
      "Implemented role-based access control (RBAC), input validation schemas, custom middleware, multipart file uploads, and notification systems.",
      "Configured and maintained Sequelize ORM migrations, Mongoose schemas, Postman API collections, and PM2 production process runners.",
      "Diagnosed and resolved complex backend, database indexing, API integration, and Linux server deployment challenges across live applications.",
      "Contributed throughout the software lifecycle: from initial database modeling and API architecture to frontend integration and testing."
    ],
    technologies: ["React.js", "Next.js", "Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "Sequelize", "Mongoose", "PM2", "Git/GitHub"]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University of Engineering and Management (UEM)",
    location: "Jaipur, Rajasthan, India",
    period: "2024 – 2026",
    score: "CGPA: 8.0 / 10",
    completedYear: "2026",
    coursework: [
      "Advanced Data Structures & Algorithms",
      "Relational & Distributed Database Systems (DBMS)",
      "Web Technologies & Full Stack Development",
      "Computer Networks & Protocols",
      "Operating Systems & Concurrency",
      "Software Engineering & Architecture"
    ]
  }
];

export const BACKEND_STRENGTHS = [
  {
    title: "RESTful API Development & Security",
    icon: "ShieldCheck",
    desc: "Architecting standardized, robust REST APIs with JWT authentication, custom RBAC permission middleware, rate limiting, and centralized error handling.",
    points: ["JSON Web Tokens (JWT) & Refresh Tokens", "Granular Role & Permission Middleware", "Input Sanitization & Schema Validation", "Standardized REST Response Contracts"]
  },
  {
    title: "Database Engineering & Optimization",
    icon: "Database",
    desc: "Designing normalized schemas, complex associations, migrations, and high-performance queries across PostgreSQL, MySQL, and MongoDB.",
    points: ["Sequelize & Mongoose ORM/ODM Master", "Foreign Keys, Constraints & Indexes", "ACID Transactions & Row-Level Locking", "Query Optimization & Aggregation Pipelines"]
  },
  {
    title: "Location-Based Geospatial Systems",
    icon: "MapPin",
    desc: "Leveraging PostgreSQL with the PostGIS spatial extension to power hyperlocal delivery, rider proximity matching, and spatial calculations.",
    points: ["PostGIS ST_Distance & Coordinate Indexing", "Geofencing & Proximity Rider Search", "Coordinate Math & Haversine Implementations", "Optimized Geospatial Indexing (GIST)"]
  },
  {
    title: "Third-Party Integrations & Cloud Services",
    icon: "Zap",
    desc: "Integrating payment gateways, real-time push notifications, transactional mailers, and storage systems into production pipelines.",
    points: ["Razorpay Payment Gateway & Webhooks", "Firebase Cloud Messaging (FCM) Push Notifications", "SMTP & Nodemailer Transactional Mailers", "Multer Multipart & S3/Cloudinary File Handling"]
  },
  {
    title: "DevOps & Production Deployments",
    icon: "Server",
    desc: "Deploying and managing reliable Node.js services on Linux cloud servers with process supervision, reverse proxies, and continuous version control.",
    points: ["PM2 Process Supervisor & Cluster Mode", "Linux / Ubuntu VPS Management", "Git & GitHub Collaboration Workflows", "Production Debugging & Log Auditing"]
  },
  {
    title: "AI-Augmented Development",
    icon: "Sparkles",
    desc: "Accelerating engineering velocity through modern AI workflows including Cursor, Claude, and Antigravity for code generation, debugging, and refactoring.",
    points: ["Context-Driven Prompt Engineering", "Automated Test Case & Mock Generation", "Rapid Bug Triage & Architecture Exploration", "High-Velocity Codebase Delivery"]
  }
];

export const SIMULATED_APIS = [
  {
    id: "health",
    title: "Health Check",
    method: "GET",
    endpoint: "/api/v1/system/health",
    category: "System",
    responseCode: 200,
    responseTime: "14ms",
    responseBody: {
      status: "operational",
      uptime: "99.98%",
      serverTime: "2026-10-15T08:15:00Z",
      runtime: "Node.js v22",
      databases: {
        postgresql: { status: "connected", latency: "3ms", postgis: "enabled" },
        mysql: { status: "connected", latency: "4ms" },
        mongodb: { status: "connected", latency: "6ms" }
      },
      process: {
        memoryUsage: "112MB / 1024MB",
        pm2ClusterWorkers: 2,
        activeConnections: 48
      }
    }
  },
  {
    id: "postgis-riders",
    title: "Geospatial Rider Matching (PostGIS)",
    method: "POST",
    endpoint: "/api/v1/logistics/dispatch/nearby-riders",
    category: "Geospatial",
    requestBody: {
      pickupLocation: {
        latitude: 26.9124,
        longitude: 75.7873,
        address: "Jaipur, Rajasthan"
      },
      searchRadiusKm: 5.0,
      parcelCategory: "ExpressFood"
    },
    responseCode: 200,
    responseTime: "32ms",
    responseBody: {
      success: true,
      queryMethod: "ST_DWithin + ST_DistanceSphere (PostGIS GIST index)",
      totalCandidatesFound: 3,
      selectedOptimalRider: {
        riderId: "RDR_JPR_9041",
        name: "Vikram S.",
        currentCoordinates: [26.9142, 75.7891],
        distanceMeters: 410,
        estimatedTimeToPickup: "2.8 mins",
        vehicleType: "EV Bike",
        rating: 4.9
      },
      backupRiders: [
        { riderId: "RDR_JPR_8820", distanceMeters: 890, estimatedTimeToPickup: "5.1 mins" },
        { riderId: "RDR_JPR_7154", distanceMeters: 1420, estimatedTimeToPickup: "7.4 mins" }
      ]
    }
  },
  {
    id: "clinic-slots",
    title: "DrMate Clinic Roster & RBAC Verification",
    method: "GET",
    endpoint: "/api/v1/clinic/appointments/check-slots?doctor_id=DOC_09&date=2026-10-16",
    category: "Healthcare",
    responseCode: 200,
    responseTime: "21ms",
    responseBody: {
      authenticatedUser: "Sonu Jangir (Admin / Senior Staff)",
      permissionScope: "APPOINTMENTS:READ_WRITE",
      doctor: {
        id: "DOC_09",
        name: "Dr. A. Sharma, MD",
        specialty: "General Medicine",
        consultationFee: "₹600"
      },
      availableSlots: [
        { slotId: "SLOT_1000", time: "10:00 AM", status: "AVAILABLE" },
        { slotId: "SLOT_1030", time: "10:30 AM", status: "BOOKED", patientToken: "PT-421" },
        { slotId: "SLOT_1100", time: "11:00 AM", status: "AVAILABLE" },
        { slotId: "SLOT_1130", time: "11:30 AM", status: "AVAILABLE" }
      ]
    }
  },
  {
    id: "multiseller-order",
    title: "ApnaVyapar Multi-Vendor Order Splitter",
    method: "POST",
    endpoint: "/api/v1/orders/checkout-split",
    category: "Commerce",
    requestBody: {
      customerId: "CUST_9912",
      cartItems: [
        { productId: "PRD_101", sellerId: "SELLER_JAIPUR_CRAFT", qty: 2, price: 850 },
        { productId: "PRD_405", sellerId: "SELLER_RAJ_TEXTILES", qty: 1, price: 1200 }
      ]
    },
    responseCode: 201,
    responseTime: "45ms",
    responseBody: {
      masterOrderId: "ORD_MST_2026_88914",
      totalAmount: 2900,
      splitSellerBatches: [
        {
          sellerId: "SELLER_JAIPUR_CRAFT",
          subOrderId: "SUB_ORD_101_A",
          sellerSubtotal: 1700,
          status: "PENDING_ACCEPTANCE",
          itemsCount: 2
        },
        {
          sellerId: "SELLER_RAJ_TEXTILES",
          subOrderId: "SUB_ORD_101_B",
          sellerSubtotal: 1200,
          status: "PENDING_ACCEPTANCE",
          itemsCount: 1
        }
      ],
      paymentState: "PAID_RAZORPAY_CAPTURED"
    }
  }
];
