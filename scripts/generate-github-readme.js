import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateGitHubReadme = () => {
  const readme = `# 👋 Hi, I'm Damjan Savić - Fullstack Developer

🚀 **Specializing in:** Python | JavaScript | React | Next.js | TypeScript | AI/ML with OLLAMA

## 🎯 Current Focus
- 🤖 Building AI-powered applications with OLLAMA
- 🏢 Developing ERP integration solutions
- 🛒 Creating scalable e-commerce platforms
- ⚡ Automating business processes with Python

## 💻 Tech Stack

### Languages
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### Backend
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=FastAPI&logoColor=white)
![Django](https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

### AI/ML
![OLLAMA](https://img.shields.io/badge/OLLAMA-000000?style=for-the-badge&logo=ai&logoColor=white)
![LangChain](https://img.shields.io/badge/LangChain-121212?style=for-the-badge)

### Databases
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

### DevOps
![Docker](https://img.shields.io/badge/Docker-2CA5E0?style=for-the-badge&logo=docker&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white)

## 📊 GitHub Stats
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=damjansavic&show_icons=true&theme=dark&count_private=true)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=damjansavic&layout=compact&theme=dark)

## 🏆 Featured Projects

### 🤖 [OLLAMA Chat Interface](https://github.com/damjansavic/ollama-chat)
Local AI chat application with privacy-first approach
- **Tech:** Python, FastAPI, React, OLLAMA
- **Features:** Stream responses, conversation history, multiple models

### 🛒 [E-Commerce Automation Suite](https://github.com/damjansavic/ecommerce-automation)
Automated inventory and order management system
- **Tech:** Python, Django, React, PostgreSQL
- **Impact:** 60% reduction in manual processing time

### 📊 [ERP Integration Platform](https://github.com/damjansavic/erp-integration)
Seamless connection between multiple ERP systems
- **Tech:** Python, FastAPI, Docker, RabbitMQ
- **Scale:** Processing 1M+ transactions daily

## 💡 What I Offer

- **🚀 Performance:** Applications optimized for speed and scalability
- **🔒 Security:** Privacy-first AI solutions with OLLAMA
- **📈 Business Impact:** Solutions that deliver measurable ROI
- **🛠️ Full Stack:** From database design to user interface

## 📫 Connect With Me
- 🌐 [Portfolio](https://damjan-savic.com)
- 💼 [LinkedIn](https://linkedin.com/in/damjansavic)
- 📧 [Email](mailto:info@damjan-savic.com)

## 🎯 Open for Opportunities
I'm interested in projects involving:
- AI/ML integration with business applications
- High-performance web applications
- Process automation and optimization
- E-commerce and ERP solutions

---

*"Building the future, one line of code at a time"* 🚀
`;

  return readme;
};

// Generate and save the README
const readme = generateGitHubReadme();
const outputPath = path.join(__dirname, '..', 'github-profile-README.md');

fs.writeFileSync(outputPath, readme, 'utf-8');
console.log(`✅ GitHub Profile README generated successfully at ${outputPath}`);

// Also generate a template for project READMEs
const projectReadmeTemplate = `# Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Python](https://img.shields.io/badge/python-3.8+-blue.svg)](https://www.python.org/downloads/)
[![React](https://img.shields.io/badge/react-18.0+-blue.svg)](https://reactjs.org/)

## 🚀 Overview

Brief description of what this project does and why it's useful.

### 🎯 Key Features
- Feature 1: Description
- Feature 2: Description
- Feature 3: Description

### 💡 Use Cases
- Use case 1
- Use case 2
- Use case 3

## 🛠️ Tech Stack

- **Backend:** Python, FastAPI/Django
- **Frontend:** React, Next.js, TypeScript
- **Database:** PostgreSQL/MongoDB
- **AI/ML:** OLLAMA, LangChain
- **DevOps:** Docker, AWS

## 📦 Installation

\`\`\`bash
# Clone the repository
git clone https://github.com/damjansavic/project-name.git

# Navigate to project directory
cd project-name

# Install dependencies
pip install -r requirements.txt
npm install

# Set up environment variables
cp .env.example .env
\`\`\`

## 🚀 Quick Start

\`\`\`bash
# Start the backend
python main.py

# Start the frontend (in another terminal)
npm run dev
\`\`\`

## 📊 Performance

- **Response Time:** < 100ms
- **Throughput:** 1000+ requests/second
- **Uptime:** 99.9%

## 🔧 Configuration

Key configuration options:

\`\`\`python
# config.py
DATABASE_URL = "postgresql://..."
OLLAMA_MODEL = "llama2"
API_KEY = "your-api-key"
\`\`\`

## 📱 API Documentation

API documentation is available at \`/docs\` when running the application.

### Example Request

\`\`\`bash
curl -X POST "http://localhost:8000/api/v1/process" \\
  -H "Content-Type: application/json" \\
  -d '{"data": "example"}'
\`\`\`

## 🧪 Testing

\`\`\`bash
# Run tests
pytest

# Run with coverage
pytest --cov=app tests/
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Damjan Savić**
- Website: [damjan-savic.com](https://damjan-savic.com)
- LinkedIn: [@damjansavic](https://linkedin.com/in/damjansavic)
- GitHub: [@damjansavic](https://github.com/damjansavic)

---

⭐️ If you find this project useful, please consider giving it a star!
`;

const templatePath = path.join(__dirname, '..', 'project-readme-template.md');
fs.writeFileSync(templatePath, projectReadmeTemplate, 'utf-8');
console.log(`✅ Project README template generated at ${templatePath}`);