// src/i18n/locales/en/portfolio/projects/smart-warehouse.ts
export const smartWarehouse = {
    meta: {
        slug: 'smart-warehouse',
        title: "Intelligent Warehouse Management with Computer Vision",
        description: "AI-powered system for real-time inventory management and warehouse process optimization",
        excerpt: "Development of an autonomous warehouse management system with Computer Vision, IoT sensors, and Machine Learning for precise inventory tracking.",
        date: "2024-06",
        category: "AI & Automation",
        client: "LogiTech Solutions GmbH",
        duration: "4 months",
        url: "https://warehouse-demo.example.com",
        repository: "",
        documentation: "/case-studies/smart-warehouse",
        published: true,
        featured: true,
        technologies: ["YOLOv8", "Python", "FastAPI", "React", "PostgreSQL", "Docker", "Kubernetes", "IoT", "MQTT"],
        tags: ["Computer Vision", "Machine Learning", "IoT", "Edge Computing", "Automation"]
    },
    content: {
        intro: "A mid-sized logistics provider transformed their manual warehouse management through a fully automated system combining Computer Vision, IoT sensors, and Machine Learning.",

        challenge: {
            title: "The Challenge",
            description: "Manual inventory management led to significant operational issues.",
            points: [
                "Discrepancies between actual and recorded stock of up to 15%",
                "Time-intensive manual inventories (3-4 days per quarter)",
                "Lack of real-time transparency on inventory levels",
                "Inefficient storage space utilization due to lack of optimization",
                "High personnel costs from manual processes"
            ]
        },

        solution: {
            title: "The Solution",
            description: "Development of a fully automated warehouse management system",
            content: "The system combines Computer Vision, IoT sensors, and Machine Learning for continuous, precise inventory tracking without human intervention.",
            points: [
                "AI-powered object detection using high-resolution cameras",
                "IoT weight sensors for validation",
                "Predictive Analytics for inventory optimization",
                "Real-time dashboard with mobile access",
                "Automatic reorder triggers"
            ]
        },

        technical: {
            title: "Technical Implementation",
            description: "The solution is based on a modular microservices architecture with edge computing for real-time processing:",
            points: [
                "YOLOv8 for precise object detection",
                "Edge Computing for <50ms image processing",
                "Apache Kafka for stream processing of 2TB data/day",
                "MQTT-based IoT integration with 200+ sensors",
                "PostgreSQL for data persistence",
                "Kubernetes for scalability"
            ]
        },

        features: {
            title: "Core Features",
            items: [
                {
                    title: "Real-time Object Detection",
                    description: "98.7% accuracy in inventory tracking through AI-powered image recognition",
                    icon: "camera"
                },
                {
                    title: "IoT Sensor Integration",
                    description: "200+ sensors validate CV results through weight measurements",
                    icon: "sensor"
                },
                {
                    title: "Predictive Analytics",
                    description: "Forecasting inventory movements and automatic reordering",
                    icon: "chart"
                },
                {
                    title: "Mobile Dashboard",
                    description: "Real-time access to all warehouse data from anywhere",
                    icon: "mobile"
                }
            ]
        },

        implementation: {
            title: "Implementation Phases",
            phases: [
                {
                    title: "Phase 1: Proof of Concept",
                    duration: "4 weeks",
                    description: "Prototype development and model training",
                    tasks: [
                        "Development of a prototype for one warehouse area",
                        "Training the ML model with 10,000+ annotated images",
                        "Integration of 5 test cameras and 20 IoT sensors",
                        "Validation of detection accuracy"
                    ]
                },
                {
                    title: "Phase 2: Scaling",
                    duration: "8 weeks",
                    description: "Complete rollout to 5,000m² warehouse space",
                    tasks: [
                        "Installation of 45 cameras and 200+ sensors",
                        "Development of real-time dashboard",
                        "Integration with existing ERP system",
                        "Performance optimization"
                    ]
                },
                {
                    title: "Phase 3: Optimization",
                    duration: "4 weeks",
                    description: "Fine-tuning and advanced features",
                    tasks: [
                        "Fine-tuning of ML models",
                        "Implementation of Predictive Analytics",
                        "Mobile app development",
                        "Employee training"
                    ]
                }
            ]
        },

        challenges: {
            title: "Challenges & Solutions",
            items: [
                {
                    challenge: "Varying lighting conditions",
                    solution: "HDR cameras with adaptive image preprocessing and augmented training data"
                },
                {
                    challenge: "Real-time processing of large data volumes",
                    solution: "Edge Computing for preprocessing and Apache Kafka for stream processing"
                },
                {
                    challenge: "Legacy system integration",
                    solution: "Development of an adapter layer with bidirectional synchronization"
                }
            ]
        },

        results: {
            title: "Results",
            description: "The system completely transformed warehouse management:",
            metrics: [
                { label: "Detection accuracy", value: "98.7%" },
                { label: "Inventory time reduction", value: "85%" },
                { label: "Fewer stock discrepancies", value: "60%" },
                { label: "Storage space utilization", value: "+35%" },
                { label: "ROI", value: "14 months" },
                { label: "System uptime", value: "99.95%" }
            ],
            impact: "Real-time transparency enabled proactive decisions and prevented supply bottlenecks. Employees could focus on value-adding activities while AI handled inventory management."
        },

        performance: {
            title: "Performance Metrics",
            metrics: {
                processing: {
                    title: "Processing",
                    items: [
                        "Image processing: <50ms per frame",
                        "API Response Time: p95 < 100ms",
                        "Data processing: 500 events/second",
                        "System Uptime: 99.95%"
                    ]
                },
                scale: {
                    title: "Scaling",
                    items: [
                        "45 cameras active (up to 200 possible)",
                        "200+ IoT sensors",
                        "50+ concurrent users",
                        "50TB data storage"
                    ]
                },
                ml: {
                    title: "ML Performance",
                    items: [
                        "mAP@50: 0.92",
                        "Inference Time: 23ms",
                        "False Positive Rate: <2%",
                        "Model Size: 138MB"
                    ]
                }
            }
        },

        testimonial: {
            text: "The implementation revolutionized our warehouse processes. What used to take days now happens in real-time. The accuracy and efficiency are impressive.",
            author: "Thomas Weber",
            position: "Head of Logistics",
            company: "LogiTech Solutions GmbH"
        },

        learnings: {
            title: "Lessons Learned",
            items: [
                "Edge Computing is essential: Preprocessing directly at the camera reduced network load by 70%",
                "Data quality over quantity: 1,000 high-quality annotations were more valuable than 10,000 automatically generated ones",
                "Iterative development: Early piloting in one area enabled quick adjustments",
                "Change management: Early involvement of employees was crucial for acceptance"
            ]
        },

        future: {
            title: "Future Perspectives",
            description: "The system was designed as a white-label solution and can be deployed in other warehouses with minimal adjustments.",
            plans: [
                "Integration of robotics for automated picking",
                "Extension to external warehouses and mobile units",
                "AI-based prediction of maintenance needs",
                "Blockchain integration for supply chain transparency",
                "AR glasses for warehouse workers with visual hints"
            ]
        }
    }
};

export default smartWarehouse;