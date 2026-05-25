# Hybrid Contrast Technical Editorial Portfolio

An ultra-premium, interactive developer portfolio website specifically customized for high-fidelity AI/NLP, systems, and database engineering. 

Rather than standard glowing dark-mode layouts, this design takes inspiration from **high-end architectural blueprints, engineering sheets, and print editorials**, matching stark Obsidian Charcoal blocks with clean, warm Alabaster Sand canvases.

---

## 🛠️ System Specifications & Design Concept

### Theme: Hybrid Chiaroscuro Editorial
*   **Hero, Terminal Console, and Footer Sections (Stark Dark)**: Obsidian Charcoal (`#0a0b0f` to `#14161f`) with electric neon highlights, creating a high-tech console feeling.
*   **About Me, Milestones, and Skills Sections (Elegant Light)**: Warm Sand/Alabaster paper texture (`#faf9f5`) contrasted against deep carbon typography (`#0f0f0f`), resembling a print journal.
*   **Structure**: Clean 90-degree industrial grid borders (`1px solid`) with offset drop shadows.

### Interactive Subsystems
1.  **Real-Time Cursor Telemetry**: Hovering over the Hero section tracks your current pixel coordinates `X` and `Y` in real-time, giving the page an active technical vibe.
2.  **Typewriter Subsystem**: Cycles through developer focus titles.
3.  **Project dossiers accordion**: Dossiers expand dynamically on click into split-screen modules—light-themed technical specifications on the left, dark-themed system compilation output logs on the right.
4.  **Interactive RAG Console CLI**: A retro-style system console simulator supporting keyboard input and shortcut clicks for commands like `/help`, `/about`, `/skills`, `/projects`, `/contact`, and `/clear` with typing simulators.
5.  **Telemetry Data clock**: Active date-time clock tracking in the main telemetry banner.
6.  **Quick Action Email Copy**: Integrated email copier with a success dialogue notification.

---

## ⚡ Local Setup & Execution

Since the portfolio has **zero external framework dependencies**, you can run it instantly without running `npm install` or pulling complex dependencies.

### Option A: Double-Click
Simply double-click the `index.html` file in your system file explorer to boot it instantly in any modern web browser.

### Option B: Local Python Server (Recommended)
To serve the files locally and replicate standard server behaviors:
```bash
# Run inside your portfolio directory
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

---

## 🚀 Step-by-Step GitHub Pages Deployment Guide

To host this website for free under your personal **`https://<your-username>.github.io`** domain, follow these simple steps:

### Step 1: Create a GitHub Repository
1.  Log in to your [GitHub Account](https://github.com).
2.  Create a **new public repository** named: **`yourusername.github.io`** (replace `yourusername` with your actual GitHub account username).
    *   *Note: If you already have a site at `yourusername.github.io`, you can name it `portfolio` instead and deploy it to `yourusername.github.io/portfolio`!*

### Step 2: Initialize Git & Commit Files locally
Open your terminal inside this project directory (`/media/vrunda/New Volume/Projects/portfolio`) and run:

```bash
# 1. Initialize empty Git repository
git init

# 2. Add all portfolio files to index stage
git add .

# 3. Create your first commit
git commit -m "feat: initialize hybrid contrast technical portfolio"

# 4. Standardize the default branch name to main
git branch -M main
```

### Step 3: Link Repository & Push
Map your local folder to your GitHub project and push the files (replace `yourusername` with your account name):

```bash
# 1. Add your remote repository origin
git remote add origin https://github.com/yourusername/yourusername.github.io.git

# 2. Push local commits to remote repository
git push -u origin main
```

### Step 4: Expose GitHub Pages (If using a repository name other than `yourusername.github.io`)
If you created a repository named `portfolio` instead of `yourusername.github.io`:
1.  Go to your project repository on GitHub.
2.  Click on **Settings** (top tab navigation) -> **Pages** (left side panel).
3.  Under **Build and deployment**, set the source to **Deploy from a branch**.
4.  Set the Branch to **`main`** and folder to **`/ (root)`**, then click **Save**.

### Step 5: Test
Your website will be live in 1–2 minutes! Open:
**`https://yourusername.github.io`** (or `https://yourusername.github.io/portfolio`) to view it live!
# vrunda.github.io
