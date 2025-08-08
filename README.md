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


### Zero Shot Prompting 

  A zero shot prompting means giving a task of AI without providing examples or other information , it relies the pre-trained model to respond to your question

 * Translate "What is your name ?" in Russian - Text Transformation
 * How is the weather today in Delhi - Information Retrival 
 * Write a poem on nature - Creative Task
 * What is the answer to 147^89 ? - Reason & Problem Solving

 