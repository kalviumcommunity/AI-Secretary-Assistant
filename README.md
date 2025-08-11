# 🤖 AI Secretary

**AI Secretary** is a full-stack AI-powered assistant built using modern web technologies and the Gemini/OpenAI API. It acts as your **personal productivity partner**, helping with:

* Writing emails  
* Building code  
* Generating documents  
* Automating repetitive tasks

Users can input instructions or upload documents (briefs, notes, requirements), and the assistant completes the tasks **intelligently using that context—no supervision needed.**

---

## 🔧 Core Concepts

### 🧠 Prompting

* Dynamic, structured prompts help the LLM (Gemini or GPT-4) understand user intent.
* Prompts are adapted to task types (e.g., email, code, summary).
* Uploaded files or user input are used for enhanced context and relevance.

### 📊 Structured Output

* Outputs are returned in clean, structured `JSON` or `Markdown`.
* This supports seamless integration into UI components or automation tools.

**Example Output:**

```json
{
  "task": "email",
  "to": "hr@example.com",
  "subject": "Delay Notification",
  "body": "Dear HR, I would like to inform you that..."
}
```

### ⚙️ Function Calling

* Enables real-world automation from AI-generated output.
* Backend functions include:
  * Sending emails  
  * Generating PDFs  
  * Creating to-do lists  
  * Scheduling meetings  
* Functions are passed into the model, which decides when and how to use them.

### 🔍 RAG (Retrieval-Augmented Generation)

* Improves accuracy for personalized or document-based questions.
* How it works:
  * Uploaded files are chunked and stored in a vector database.
  * On query, relevant chunks are retrieved by similarity search.
  * Retrieved content is included in the prompt for grounded, factual responses.

---

## ⚙️ Implementation Stack

* **Frontend:** React or Vite + TailwindCSS  
* **Backend:** Node.js (Express or Next.js API Routes)  
* **LLM:** Gemini API / OpenAI GPT-4  
* **RAG:** Local Vector DB (e.g., Chroma, Weaviate, in-memory)  
* **Auth:** JWT-based session handling  
* **File Upload:** Upload → Parse → Chunk → Store for context building  

---

## ✅ Evaluation Criteria

### ✔️ Correctness

* All answers are grounded in user-uploaded documents or inputs.
* Function calling ensures output is accurately interpreted and executed.

### ⚡ Efficiency

* Chunked documents and templated prompts optimize performance.
* Local vector search reduces latency.

### 📈 Scalability

* Modular and serverless-friendly (Vercel, Render).
* Vector DB and function handler components scale independently.
* Gemini/OpenAI APIs scale naturally for production usage.

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