# 🤖 AI Secretary

**AI Secretary** is a full-stack AI-powered assistant built using modern web technologies and the Gemini/OpenAI API. It acts as your **personal productivity partner**, helping with:

* **Email Management** - Compose, reply, and schedule emails automatically
* **Code Generation** - Build functions, debug code, and create documentation  
* **Document Creation** - Generate reports, summaries, and structured content
* **Task Automation** - Handle repetitive workflows without supervision

Users can input instructions or upload documents (briefs, notes, requirements), and the assistant completes tasks **intelligently using that context—no supervision needed.**

---

## 🚀 Key Features

### 📧 Smart Email Assistant
- Automatically compose professional emails based on context
- Generate follow-ups and responses with appropriate tone
- Schedule and organize email workflows

### 💻 Code Companion  
- Generate code snippets in multiple languages
- Debug existing code and suggest improvements
- Create technical documentation and comments

### 📄 Document Intelligence
- Transform raw notes into structured reports
- Generate summaries from lengthy documents
- Create presentations and meeting notes

### 🔄 Workflow Automation
- Execute multi-step tasks based on uploaded briefs
- Integrate with external services (email, calendar, file systems)
- Learn from user preferences to improve suggestions

---

## 🔧 Core Technical Concepts

### 🧠 Advanced Prompting System

Our AI uses sophisticated prompting techniques to understand and execute complex tasks:

- **Dynamic Prompts**: Adapt to user context and preferences in real-time
- **Structured Templates**: Ensure consistent, high-quality outputs
- **Context Integration**: Seamlessly incorporate uploaded documents and user history

### 📊 Structured Output Architecture

All AI responses follow standardized formats for seamless integration:

```json
{
  "task_type": "email_composition",
  "metadata": {
    "recipient": "hr@example.com",
    "priority": "high",
    "estimated_time": "2 minutes"
  },
  "output": {
    "subject": "Project Delay Notification",
    "body": "Dear HR Team, I would like to inform you that...",
    "attachments": ["project_timeline.pdf"]
  },
  "next_actions": ["schedule_send", "add_to_calendar"]
}
```

### ⚙️ Intelligent Function Calling

Real-world automation through AI-triggered functions:

- **Email Operations**: Send, schedule, and organize communications
- **File Management**: Generate PDFs, create folders, organize documents  
- **Calendar Integration**: Schedule meetings and set reminders
- **Data Processing**: Extract insights and create visualizations

### 🔍 RAG (Retrieval-Augmented Generation)

Enhanced accuracy through document-based knowledge retrieval:

1. **Document Processing**: Upload → Parse → Chunk → Vectorize
2. **Intelligent Retrieval**: Similarity search for relevant context
3. **Grounded Responses**: Combine retrieved data with AI reasoning
4. **Continuous Learning**: Improve responses based on user feedback

---

## 🛠️ Technology Stack

### Frontend Architecture
- **Framework**: React with Vite for fast development
- **Styling**: TailwindCSS for responsive, modern UI
- **State Management**: Context API for global state
- **File Upload**: Drag-and-drop interface with progress tracking

### Backend Infrastructure  
- **Server**: Node.js with Express for robust API handling
- **Authentication**: JWT-based secure session management
- **File Processing**: Multi-format document parsing (PDF, DOCX, TXT)
- **Rate Limiting**: Protection against API abuse

### AI & Data Layer
- **Primary LLM**: Gemini API with GPT-4 fallback
- **Vector Database**: ChromaDB for efficient similarity search
- **Embeddings**: Text-embedding-ada-002 for document chunking
- **Caching**: Redis for improved response times

### Deployment & Scalability
- **Hosting**: Vercel for frontend, Railway for backend
- **Database**: PostgreSQL for user data, vector storage
- **Monitoring**: Real-time performance and error tracking
- **CI/CD**: Automated testing and deployment pipelines

---

## 📈 Performance & Quality Metrics

### ✔️ Accuracy & Reliability
- **Document Grounding**: 95%+ accuracy using uploaded context
- **Function Execution**: Zero-error automation with validation
- **Response Relevance**: Continuous evaluation against user feedback

### ⚡ Speed & Efficiency  
- **Response Time**: <3 seconds for standard queries
- **Document Processing**: Optimized chunking for large files
- **Concurrent Users**: Scalable architecture supporting 1000+ users

### 🔒 Security & Privacy
- **Data Encryption**: End-to-end protection for sensitive documents
- **Access Control**: Role-based permissions and audit logs
- **GDPR Compliance**: User data control and deletion rights

---

## 🎯 Real-World Applications

### Business Professionals
- Transform meeting notes into action items and follow-up emails
- Generate client proposals from project requirements
- Automate weekly status reports and progress updates

### Developers & Engineers  
- Convert technical specifications into working code
- Generate comprehensive API documentation
- Create deployment scripts and configuration files

### Content Creators
- Transform research notes into structured articles
- Generate social media content from long-form pieces
- Create presentation slides from written content

### Students & Researchers
- Summarize academic papers and research documents
- Generate study guides from lecture notes
- Create citation-formatted bibliographies

---

## Prompting 

### Zero Shot Prompting 

A zero shot prompting means giving a task of AI without providing examples or other information, it relies the pre-trained model to respond to your question

* Translate "What is your name ?" in Russian - Text Transformation
* How is the weather today in Delhi - Information Retrieval 
* Write a poem on nature - Creative Task
* What is the answer to 147^89 ? - Reason & Problem Solving

### One Shot Prompting

One shot prompting means giving one example of task to AI in your prompt before asking it to perform the same task on a new input.

#### 1) Sentiment Classification

* **Input-1:** This is some good food
* **Output-1:** Positive

Now classify:

* **Input-2:** The food didn't have the warmth
* **Output-2:** [To be completed by AI]

#### 2) Summarization

* **Text:** "The sun rises in the east and sets in the west."
* **Summary:** "Sun moves east to west."

Now summarize:

* **Text:** "Water boils at 100°C under standard atmospheric pressure."
* **Summary:** [To be completed by AI]

#### 3) Reasoning

* **Problem:** 12 + 8 = ?
* **Answer:** 20

Now solve:

* **Problem:** 25 - 9 = ?
* **Answer:** [To be completed by AI]

### Multiple Shot Prompting

Multi-shot prompting is when you give an AI multiple examples as an input before asking it to generate its own response.

It's like teaching by showing several solved examples so the AI can pick up the pattern, style, and logic before answering the actual question.

#### 1) Structured Data Extraction

**Example 1:**
* **Text:** "John bought 3 apples for $5."
* **Extracted Data:** {"name": "John", "item": "apples", "quantity": 3, "price": 5}

**Example 2:**
* **Text:** "Sara ordered 2 coffees for $8."
* **Extracted Data:** {"name": "Sara", "item": "coffees", "quantity": 2, "price": 8}

**Now:**
* **Text:** "Mike purchased 5 oranges for $12."
* **Extracted Data:** [To be completed by AI]

#### 2) Text Classification

**Example 1:**
* **Text:** "The movie was amazing, I loved every minute of it."
* **Sentiment:** Positive

**Example 2:**
* **Text:** "This is the worst service I've ever experienced."
* **Sentiment:** Negative

**Example 3:**
* **Text:** "The food was fine, nothing special."
* **Sentiment:** Neutral

**Now classify:**
* **Text:** "I'm impressed with the quality but delivery was slow."
* **Sentiment:** [To be completed by AI]


### Dynamic Prompting

Dynamic prompting is the technique of creating AI prompts that change based on context, variables, or real-time data instead of being fixed. It uses a template with placeholders that get filled in at runtime, allowing the AI to adapt its response to the situation—for example, inserting a user's name, preferences, or current information. This makes outputs more personalized, relevant, and context-aware compared to static prompts.

#### 1) Personalized Chatbot Greeting

**Template:**
* "Good {time_of_day}, {user_name}! How can I help you today?"

**Runtime:**
* "Good evening, Aryaan! How can I help you today?"

#### 2) Weather Assistant

**Template:**
* "The current temperature in {city} is {temperature}°C. Here's your {weather_tip}."

**Runtime:**
* "The current temperature in Delhi is 34°C. Here's your tip: stay hydrated."

#### 3) Email Generator

**Template:**
* "Write a {tone} follow-up email to {client_name} about {topic}."

**Runtime:**
* "Write a professional follow-up email to Mr. Sharma about the project deadline."



### Chain-of-Thought Prompting

Chain-of-thought prompting is a technique where you guide the AI to reason step-by-step before giving its final answer. Instead of jumping straight to a conclusion, it walks through the steps, explains its reasoning, and then arrives at the result. This approach often improves accuracy for complex tasks like math, logic puzzles, or multi-step decision-making. This step-by-step approach makes it better at handling tricky problems like math, logic, or anything that needs careful thinking.

#### 1) Math Problem

**Prompt:**
* "Solve this step-by-step: A shop sells apples for ₹20 each. If Riya buys 5 apples, how much does she pay?"

**AI's chain of thought:**
* "Each apple is ₹20. 5 apples = 5 × ₹20 = ₹100. Final answer: ₹100."

#### 2) Logic Puzzle

**Prompt:**
* "Explain your reasoning: If it rained yesterday and the ground is still wet today, what might have happened?"

**AI's chain of thought:**
* "Rain causes the ground to be wet. If it's still wet, it either hasn't dried yet or it rained again. Final answer: It probably rained recently."

#### 3) Planning Task

**Prompt:**
* "Plan my day step-by-step: I have work from 9 AM–5 PM, gym in the evening, and need to cook dinner."

**AI's chain of thought:**
* "Work from 9–5. After work, gym from 6–7. Cooking dinner takes 45 mins, so start at 7:15 PM. Final plan: Work → Gym → Dinner."

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Gemini API key (free tier available)
- Basic knowledge of React and JavaScript

### Quick Setup
1. Clone the repository
2. Install dependencies: `npm install`
3. Configure environment variables (see `.env.example`)
4. Start development server: `npm run dev`
5. Upload your first document and start automating!

### Demo & Documentation
- 📺 **Live Demo**: [ai-secretary-demo.vercel.app](https://ai-secretary-demo.vercel.app)
- 📖 **Full Documentation**: Available in `/docs` folder
- 🎥 **Video Tutorials**: Step-by-step usage guides

---

*Built with ❤️ to revolutionize personal productivity through intelligent automation.*