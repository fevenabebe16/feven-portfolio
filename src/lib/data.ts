// ---------------------------------------------------------------------------
// Single source of truth for all site content.
// Every value here is taken directly from Feven's CV. Nothing below is
// invented. If a field is missing, the related UI is designed to hide
// gracefully rather than show a placeholder.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Feven Abebe Bejiga",
  title: "AI/ML Engineer & Data Scientist",
  subtitle: "MSc AI · Qiyas Data Science & AI Engineering · Federated Learning",
  location: "Addis Ababa, Ethiopia",
  email: "fevenabebe777@gmail.com",
  phone: "+251 988 997 925",
  github: "https://github.com/fevenabebe",
  linkedin: "https://www.linkedin.com/in/feven-abebe-459b15211/",
  portfolio: "https://feven-abebe.vercel.app",
  availability: "Immediately",
  careerGoal: "Employment / Internship",
  summary:
    "AI/ML and data science professional with a BSc in Health Informatics and 3+ years of experience in digital health systems and data management, now pursuing an MSc in Artificial Intelligence at Addis Ababa University. Completed the Qiyas Data Science and AI Engineering training, building hands-on skills in machine learning, deep learning, NLP, and model deployment. Co-author of a federated learning paper submitted to PanAfriCon AI 2026. Comfortable across the ML lifecycle — from model development (PyTorch, TensorFlow, Scikit-learn) through deployment (FastAPI, Docker, CI/CD) — and looking to apply AI and data science skills to real-world problems.",
  heroLine:
    "I build AI systems for the conditions they'll actually run in: patchy connectivity, distributed data, limited compute.",
};

export const education = [
  {
    school: "Addis Ababa University – AAiT",
    degree: "Master of Science in Artificial Intelligence",
    dates: "Nov 2024 – Present",
    detail: "",
  },
  {
    school: "University of Gondar",
    degree: "Bachelor of Science in Health Informatics",
    dates: "2022",
    detail: "CGPA 3.86",
  },
];

export const qiyasTraining = {
  program: "Data Science and AI Engineering",
  period: "May 2026 – September 2026 (Completed)",
  competencies: [
    "Python programming, SQL, and data manipulation",
    "Exploratory Data Analysis (EDA), data preprocessing, data visualization, and statistical analysis",
    "Machine learning, deep learning, and Natural Language Processing (NLP), including sentiment analysis",
    "Model development, evaluation, and deployment for practical AI/data science applications",
    "Time series analysis and forecasting, and web scraping",
  ],
};

export const experience = [
  {
    role: "Digital Health Developer",
    org: "CDHi – University of Gondar",
    location: "Gondar, Ethiopia",
    dates: "Jul 2023 – Jan 2026",
    points: [
      "Customized EMR and DHIS2 systems to align with hospital workflows and organizational requirements, working closely with clinical and administrative staff to translate their needs into system configurations.",
      "Implemented the WHO Digital Adaptation Toolkit (DAK) within the University of Gondar Referral Hospital's EMR environment, helping bring the hospital's electronic records in line with national digital health standards.",
      "Managed and maintained MySQL databases underlying the hospital's digital health systems, including data integrity checks and routine database administration.",
      "Generated reports from EMR and DHIS2 data to support hospital decision-making and reporting requirements, alongside core development work.",
      "Developed DHIS2 Tracker tools to support Health and Demographic Survey activities, enabling structured collection and management of survey data.",
      "Built aggregate data-collection tools for ISHO and supported the analysis of the resulting health information.",
      "Customized an open-source project management system to fit CDHi's day-to-day operational requirements.",
    ],
  },
  {
    role: "Fellow",
    org: "Center for Digital Health and Implementation (CDHi)",
    location: "",
    dates: "Nov 2022 – Jun 2023",
    points: [
      "Supported digital health and health information systems activities.",
      "Built practical experience in digital health technologies and health information management.",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  tech: string[];
  problem: string;
  approach: string[];
  contribution: string[];
  featured: boolean;
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "federated-learning-metaheuristics",
    name: "Federated Learning with Metaheuristic Client Selection",
    tagline:
      "A federated learning framework that uses metaheuristic search to choose which clients train each round on non-IID data.",
    tech: ["Python", "PyTorch", "Federated Learning", "FedProx", "Genetic Algorithm", "PSO", "Simulated Annealing"],
    problem:
      "In federated learning, client data is non-IID and every communication round is costly — so which clients get selected to train matters as much as the model itself.",
    approach: [
      "Built a federated learning framework for non-IID client data using PyTorch and FedProx.",
      "Investigated intelligent client-selection strategies using Genetic Algorithm (GA), Particle Swarm Optimization (PSO), and Simulated Annealing (SA).",
      "Designed experiments involving multiple clients, local training, global aggregation, and iterative communication rounds.",
      "Ran all experiments in a resource-constrained, CPU-based PyTorch environment.",
    ],
    contribution: [
      "Designed and ran the experiments across GA, PSO, and SA client-selection strategies.",
      "Evaluated model performance using training loss and classification accuracy across federated rounds.",
      "Co-authored a paper on this work, submitted to PanAfriCon AI 2026.",
    ],
    featured: true,
  },
  {
    slug: "ros2-lane-following-robot",
    name: "ROS2 Autonomous Lane-Following Robot",
    tagline:
      "A simulated robot that perceives lane markings with classical computer vision and steers itself with PID control.",
    tech: ["ROS2 Humble", "Gazebo", "Python", "Computer Vision", "PID Control"],
    problem:
      "Autonomous lane following requires turning a noisy camera feed into a reliable, real-time steering signal.",
    approach: [
      "Developed a lane-following robot simulation using ROS2 Humble and Gazebo.",
      "Implemented computer-vision-based lane detection using image processing and HSV color segmentation.",
      "Built a ROS2 node to calculate lane error and publish control information.",
      "Implemented PID-based steering control for autonomous lane following.",
    ],
    contribution: [
      "Integrated the perception and control components into a single robotics pipeline.",
    ],
    featured: true,
  },
  {
    slug: "house-price-prediction",
    name: "House Price Prediction System",
    tagline:
      "An end-to-end ML system for real-estate price prediction, served through a REST API with CI/CD and a Streamlit front end.",
    tech: ["Python", "Scikit-learn", "CatBoost", "FastAPI", "Streamlit", "Docker", "GitHub Actions"],
    problem:
      "Turning a structured real-estate dataset into a model that's actually usable — not just accurate in a notebook, but served, tested, and deployable.",
    approach: [
      "Implemented data preprocessing, feature engineering, model training, and evaluation.",
      "Built a FastAPI REST API to serve predictions.",
      "Developed a Streamlit interface for interacting with the system.",
      "Containerized the application with Docker and added automated testing via GitHub Actions CI.",
    ],
    contribution: [
      "Built the full pipeline end to end: data processing, model, API, interface, containerization, and CI.",
    ],
    featured: true,
  },
  {
    slug: "fraud-detection-ml",
    name: "Fraud Detection Machine Learning Project",
    tagline:
      "Classification models for detecting fraudulent transactions in highly imbalanced datasets.",
    tech: ["Python", "Scikit-learn", "Random Forest", "Logistic Regression"],
    problem:
      "Fraud is rare relative to legitimate transactions, so standard accuracy metrics are misleading and class imbalance has to be handled deliberately.",
    approach: [
      "Applied preprocessing and evaluation techniques appropriate for imbalanced classification.",
      "Compared Logistic Regression and Random Forest models using F1-score and AUC-PR.",
      "Investigated model performance across different fraud-detection datasets.",
    ],
    contribution: [
      "Built and compared both classification models and selected metrics suited to the class imbalance.",
    ],
    featured: false,
  },
  {
    slug: "ai-agricultural-decision-support",
    name: "AI-Driven Agricultural Decision Support App",
    tagline:
      "An offline-first AI decision-support concept for agricultural extension workers, pairing on-device crop-disease detection with a multilingual RAG knowledge base and chatbot.",
    tech: ["Python", "AI/ML", "Image Classification", "RAG", "Edge AI", "Chatbot"],
    problem:
      "Extension workers and farmers need fast, reliable crop-disease guidance in the field, often without reliable connectivity and across more than one language.",
    approach: [
      "Designed an offline-first AI decision-support concept combining on-device crop-disease image classification for maize and wheat with a multilingual RAG knowledge base.",
      "Built a conversational chatbot interface so farmers and extension workers can ask questions in natural language and get grounded, easy-to-understand answers.",
      "Designed a human-in-the-loop escalation approach for uncertain cases, backed by an early RAG proof of concept.",
    ],
    contribution: [
      "Defined the offline/edge AI architecture, the crop-disease classification approach, and the multilingual RAG and chatbot design.",
    ],
    featured: false,
  },
];

export const skills = {
  Programming: ["Python", "C++", "Java", "JavaScript", "SQL"],
  "Machine Learning": [
    "Supervised Learning",
    "Unsupervised Learning",
    "Classification",
    "Regression",
    "Clustering",
    "Feature Engineering",
    "Model Evaluation",
    "Hyperparameter Optimization",
  ],
  "Deep Learning": ["Neural Networks", "CNNs", "Transformers", "PyTorch", "TensorFlow"],
  "AI & NLP": [
    "Natural Language Processing",
    "Large Language Models (LLMs)",
    "Retrieval-Augmented Generation (RAG)",
    "Hugging Face Transformers",
  ],
  "Computer Vision": ["Image Processing", "Image Classification", "Object Detection", "OpenCV"],
  "Data Science": ["Pandas", "NumPy", "SciPy", "Scikit-learn", "Matplotlib", "Jupyter Notebook"],
  "AI Systems & Development": [
    "FastAPI",
    "Streamlit",
    "REST APIs",
    "Model Inference",
    "PostgreSQL",
    "MySQL",
    "Vector Databases",
  ],
  "Software & Tools": ["Git", "GitHub", "Docker", "GitHub Actions", "Linux/WSL"],
  Robotics: ["ROS2", "Sensor Integration", "Autonomous Navigation", "Gazebo"],
  Other: ["Probabilistic Graphical Models", "Federated Learning", "Optimization Techniques"],
};

export const certifications = [
  { name: "Data Science and AI Engineering", org: "Qiyas, Addis Ababa University · 2026" },
  { name: "SAFEE KAIM", org: "Kifiya AI Mastery Training Program, 10 Academy Women-Only Cohort · 2026" },
  { name: "GCI World April 2026 — Data Science", org: "Matsuo-Iwasawa Laboratory, University of Tokyo · 2026" },
];

export const publications = [
  {
    title:
      "Lightweight Metaheuristic Optimization for Client Selection in Resource-Constrained Federated Learning Systems",
    authors: "Feven Abebe Bejiga, Zehara Yassin, Beakal Gizachew (Addis Ababa University)",
    venue: "Submitted to PanAfriCon AI 2026",
    description:
      "Compares Genetic Algorithm, Particle Swarm Optimization, and Simulated Annealing against random client selection on FEMNIST, CIFAR-10, and CIFAR-100 using FedProx (5 seeds, 100 rounds).",
  },
];

export const languages = [
  { name: "Amharic", level: "Native" },
  { name: "English", level: "Fluent" },
];

// The strongest technical throughline in the CV: federated learning across
// distributed clients, digital-health data across facilities, and edge AI
// for agriculture are all, at core, the same problem — getting AI to work
// across a network of constrained, disconnected nodes. That idea drives the
// visual language of this site (see NetworkCanvas).
export const researchArea = {
  title: "Federated Learning under Client Constraints",
  area: "Distributed Machine Learning",
  description:
    "Research into how federated learning systems should select which clients participate in each training round when client data is non-IID and communication rounds are expensive. The work compares metaheuristic search strategies — Genetic Algorithm, Particle Swarm Optimization, and Simulated Annealing — for client selection, built on PyTorch and FedProx and evaluated on training loss and classification accuracy across rounds. This work is co-authored with Zehara Yassin and Beakal Gizachew and has been submitted to PanAfriCon AI 2026.",
  methodology:
    "Federated averaging with FedProx regularization across multiple simulated clients with non-IID data partitions, with client-selection policies driven by GA, PSO, and SA and compared against standard baselines.",
  status: "Independent project, CPU-based experimental environment",
};
