﻿# <img src="Frontend/public/bulb.png" alt="OMEX Banner" width="35" height="35" /> OMEX - AI Code Optimization Platform

## ✨ Overview

OMEX is an advanced AI-powered code optimization platform designed to help developers write better, cleaner, and more efficient code. Leveraging the power of Google's Gemini AI, OMEX provides a suite of tools for code optimization, generation, complexity analysis, and comparison.

## 🛠️ Features

### 💡 Code Optimization
- **Smart Analysis**: Identifies inefficiencies, bugs, and potential improvements in your code
- **Best Practices**: Suggests industry-standard coding practices
- **Performance Enhancement**: Recommends optimizations to improve execution time and resource usage

### 🤖 Code Generation
- **Multi-language Support**: Generates code in multiple programming languages (JavaScript, Python, Java, C++, etc.)
- **Customizable**: Tailor the generated code to your specific requirements
- **Best Practices**: Follows coding standards and best practices

### 📊 Complexity Analysis
- **Time & Space Complexity**: Analyzes the computational complexity of your algorithms
- **Bottleneck Identification**: Pinpoints inefficient operations that lead to performance issues
- **Optimization Recommendations**: Suggests alternative approaches for better performance

### 🔄 Code Comparison
- **Line-by-Line Analysis**: Quickly identifies logical and syntax errors between code snippets
- **Critical Error Detection**: Focuses on important issues that would cause code to fail
- **Concise Explanations**: Provides brief, actionable insights about each error

## 🖥️ Tech Stack

- **Frontend**: React, Tailwind CSS, Prism.js
- **Backend**: Node.js, Express
- **AI**: Google Gemini AI
- **Other Tools**: React Router, Axios, React Markdown

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/omex-code-optimizer.git
   cd omex-code-optimizer
   ```

2. Install dependencies:
   ```bash
   # Install backend dependencies
   cd BackEnd
   npm install

   # Install frontend dependencies
   cd ../Frontend
   npm install
   ```

3. Create a `.env` file in the BackEnd directory:
   ```
   PORT=5000
   GOOGLE_GEMINI_KEY=your_gemini_api_key
   ```

4. Create a `.env` file in the Frontend directory:
   ```
   VITE_BACKEND_URL=http://localhost:5000
   ```

5. Start the application:
   ```bash
   # Start backend
   cd BackEnd
   npm start

   # Start frontend (in a new terminal)
   cd Frontend
   npm run dev
   ```

6. Open your browser and navigate to `http://localhost:5173`

## 📱 Responsive Design

OMEX features a fully responsive design that works seamlessly across desktop, tablet, and mobile devices, ensuring a great user experience regardless of screen size.

## 🔒 Security

- All code analysis is performed securely
- No code is stored permanently on our servers
- API keys are properly secured and never exposed to the client

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

If you have any questions or feedback, please reach out to us at contact@omex.com.

---

Built with ❤️ by the OMEX Team




