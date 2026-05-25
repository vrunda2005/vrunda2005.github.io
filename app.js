/* ==========================================================================
   premium Hybrid Contrast Editorial & Grid-Brutalist Portfolio Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------
    // 1. Live Telemetry Clock & Metadata
    // ----------------------------------------------------
    const liveTimeElement = document.getElementById('live-time');
    
    function updateLiveTelemetry() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        
        if (liveTimeElement) {
            liveTimeElement.textContent = `${year}.${month}.${day} // ${hours}:${minutes}:${seconds}`;
        }
    }
    setInterval(updateLiveTelemetry, 1000);
    updateLiveTelemetry();

    // ----------------------------------------------------
    // 2. Blueprint Real-time Coordinate Tracker
    // ----------------------------------------------------
    const coordXElement = document.getElementById('coord-x');
    const coordYElement = document.getElementById('coord-y');
    const heroSection = document.getElementById('hero');

    if (heroSection && coordXElement && coordYElement) {
        heroSection.addEventListener('mousemove', (e) => {
            // Calculate coordinates relative to the hero section
            const rect = heroSection.getBoundingClientRect();
            const x = Math.round(e.clientX - rect.left);
            const y = Math.round(e.clientY - rect.top);
            
            // Pad coordinates with zeroes for a uniform monospaced look
            coordXElement.textContent = String(x).padStart(3, '0');
            coordYElement.textContent = String(y).padStart(3, '0');
        });

        heroSection.addEventListener('mouseleave', () => {
            coordXElement.textContent = '000';
            coordYElement.textContent = '000';
        });
    }

    // ----------------------------------------------------
    // 3. Dynamic Typewriter Effect for Hero Subsection
    // ----------------------------------------------------
    const typedTextSpan = document.getElementById('typed-text');
    const roles = [
        "AI Systems Engineer specialized in agentic architectures.",
        "Full Stack NLP Developer building explainable modeling networks.",
        "Systems Optimizer creating highly efficient graph analyzers.",
        "Developer passionate about robust, deterministic backends."
    ];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 50; // Milliseconds per char

    function typeRole() {
        if (!typedTextSpan) return;
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typedTextSpan.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 20; // Deleting is faster
        } else {
            typedTextSpan.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 50; // Standard typing speed
        }

        // State switching logic
        if (!isDeleting && charIndex === currentRole.length) {
            // Finished typing, pause
            isDeleting = true;
            typingSpeed = 2500; // Hold role for 2.5 seconds
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingSpeed = 500; // Pause briefly before next role
        }

        setTimeout(typeRole, typingSpeed);
    }
    
    // Launch typewriter loop
    setTimeout(typeRole, 1000);

    // ----------------------------------------------------
    // 4. Project Dossier Accordion Controller
    // ----------------------------------------------------
    const dossierCards = document.querySelectorAll('.dossier-card');

    dossierCards.forEach((card) => {
        const header = card.querySelector('.dossier-header');
        const toggleButton = card.querySelector('.dossier-toggle');
        const body = card.querySelector('.dossier-body');

        // Clicking either header or toggle executes expand/collapse
        const toggleDossier = (e) => {
            e.stopPropagation();
            
            const isActive = card.classList.contains('active');
            
            // Collapse all other active cards to enforce grid balance
            dossierCards.forEach((otherCard) => {
                if (otherCard !== card && otherCard.classList.contains('active')) {
                    otherCard.classList.remove('active');
                    const otherButton = otherCard.querySelector('.dossier-toggle');
                    const otherIcon = otherCard.querySelector('.toggle-icon');
                    if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
                    if (otherIcon) otherIcon.textContent = '+';
                }
            });

            // Toggle target card status
            card.classList.toggle('active');
            
            if (toggleButton) {
                toggleButton.setAttribute('aria-expanded', !isActive);
            }
            
            const icon = card.querySelector('.toggle-icon');
            if (icon) {
                icon.textContent = isActive ? '+' : '−';
            }

            // If expanding, smoothly scroll card header into comfortable reading window
            if (!isActive) {
                setTimeout(() => {
                    card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }, 250);
            }
        };

        header.addEventListener('click', toggleDossier);
        if (toggleButton) {
            toggleButton.addEventListener('click', toggleDossier);
        }
    });

    // ----------------------------------------------------
    // 5. Interactive RAG Console CLI Simulator
    // ----------------------------------------------------
    const terminalBody = document.getElementById('terminal-body');
    const terminalInput = document.getElementById('terminal-input');
    const shortcutButtons = document.querySelectorAll('.shortcut-btn');

    // Preconfigured response definitions (formatted monospaced technical feedback logs)
    const commandResponses = {
        '/help': `
<span class="text-yellow">[SYSTEM HELP] AVAILABLE CONSOLE ROUTER CHANNELS:</span>
  <span class="text-green">/about</span>       Explain engineering mindset and pipeline methodologies.
  <span class="text-green">/skills</span>      Output categorized matrix table of languages and scores.
  <span class="text-green">/projects</span>    Expose structural metrics data for built software dossiers.
  <span class="text-green">/contact</span>     Access interactive telemetry copy actions and links.
  <span class="text-green">/clear</span>       Purge terminal output history blocks.
        `,
        '/about': `
<span class="text-cyan">[RETRIEVAL FOUND: Vrunda.Bio.Segment]</span>
--------------------------------------------------------------------------
<span class="text-green">Title:</span> AI Systems & NLP Software Engineer
<span class="text-green">Core Approach:</span> I engineer applications at the nexus of Large Language Models 
and highly-structured backends. My design principles emphasize rigorous 
data validation, determinism (preventing LLM hallucinations), and 
maximizing structural efficiency. I avoid rounded corners, standard styles, 
and bloated layers to guarantee lightning-fast indexing capabilities.
--------------------------------------------------------------------------
        `,
        '/skills': `
<span class="text-cyan">[RETRIEVAL FOUND: Vrunda.Skills.Matrix]</span>
--------------------------------------------------------------------------
<span class="text-yellow">Category             Tech Competency                  Strength Level</span>
--------------------------------------------------------------------------
AI / NLP             Retrieval-Augmented Gen (RAG)    [ 94% - ADVANCED ]
AI / NLP             Transformers (DistilBERT)        [ 90% - ADVANCED ]
AI / NLP             Explainable AI (SHAP/LIME)       [ 96% - EXPERT   ]
AI / NLP             ChromaDB Vector Store            [ 88% - ADVANCED ]
Backend &amp; Systems    Python (FastAPI, NetworkX)       [ 98% - EXPERT   ]
Backend &amp; Systems    Odoo ERP Integration             [ 85% - ADVANCED ]
Backend &amp; Systems    PostgreSQL / Index tuning        [ 87% - ADVANCED ]
Workflows            Git / Automation / CLI           [ 95% - EXPERT   ]
--------------------------------------------------------------------------
        `,
        '/projects': `
<span class="text-cyan">[RETRIEVAL FOUND: Vrunda.Project.Index]</span>
--------------------------------------------------------------------------
<span class="text-green">[DOSSIER_01] Academic Curriculum Graph Analyzer</span>
   Calculates academic program PCI/PSI indexes and identifies degree path 
   rigidities. Built using network graph compilers in Python and NetworkX.
   
<span class="text-green">[DOSSIER_02] RAG-Based AI Academic Copilot</span>
   A context-secured advisement advisor combining local ChromaDB indexing
   with Ollama offline inference pipelines to prevent compliance failures.

<span class="text-green">[DOSSIER_03] Multi-Model Sentiment Pipeline &amp; XAI</span>
   Sentiment classification pipelines using DistilBERT transformers &amp; 
   sequential BiLSTMs, explained mathematically using SHAP &amp; LIME importances.

<span class="text-green">[DOSSIER_04] Odoo Enterprise Library System</span>
   Relational ERP module securing inventory workflows, fine checkout access 
   controls, and concurrent query processing speeds.
--------------------------------------------------------------------------
        `,
        '/contact': `
<span class="text-cyan">[RETRIEVAL FOUND: Vrunda.Contact.Channels]</span>
--------------------------------------------------------------------------
Channel            Endpoint Address
--------------------------------------------------------------------------
GitHub             <a href="https://github.com" target="_blank" style="color: #00e676;">https://github.com/vrunda</a>
LinkedIn           <a href="https://linkedin.com" target="_blank" style="color: #00e676;">https://linkedin.com/in/vrunda</a>
Developer Mail     <a href="mailto:contact@vrunda.dev" style="color: #3377ff;">contact@vrunda.dev</a>
--------------------------------------------------------------------------
<span class="text-yellow">Tip: Use the copy button in the section below to copy my primary email address!</span>
        `
    };

    function appendTerminalOutput(text, type = 'output') {
        const line = document.createElement('p');
        line.className = type === 'input' ? 'terminal-line text-green' : 'terminal-line';
        
        if (type === 'input') {
            line.innerHTML = `<span class="terminal-prompt-symbol">guest@vrunda:~#</span> ${text}`;
            terminalBody.appendChild(line);
        } else {
            // Split by newline and append with typing effect or block insert
            line.innerHTML = text;
            terminalBody.appendChild(line);
        }
        
        // Auto Scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }

    function processCommand(cmdText) {
        const cleanCmd = cmdText.trim();
        if (cleanCmd === '') return;

        // Log the entered command
        appendTerminalOutput(cleanCmd, 'input');

        if (cleanCmd.toLowerCase() === '/clear') {
            terminalBody.innerHTML = `
                <p class="terminal-line text-muted">// Console history purged. Sandbox active.</p>
                <p class="terminal-line text-yellow">// Type '/help' to list all supported console operations.</p>
                <br>
            `;
        } else if (commandResponses.hasOwnProperty(cleanCmd.toLowerCase())) {
            appendTerminalOutput(commandResponses[cleanCmd.toLowerCase()]);
        } else {
            // Handle mock semantic fallbacks
            appendTerminalOutput(`
<span class="text-red">[ROUTING ERROR] Command "${cleanCmd}" not recognized.</span>
Did you mean to run: <span class="text-yellow">/help</span>, <span class="text-yellow">/about</span>, <span class="text-yellow">/skills</span>, or <span class="text-yellow">/projects</span>?
            `);
        }

        // Reset input field
        if (terminalInput) terminalInput.value = '';
    }

    if (terminalInput) {
        terminalInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                processCommand(terminalInput.value);
            }
        });
    }

    shortcutButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const cmd = btn.getAttribute('data-cmd');
            processCommand(cmd);
        });
    });

    // ----------------------------------------------------
    // 6. Copy Email to Clipboard Widget
    // ----------------------------------------------------
    const copyEmailBtn = document.getElementById('copy-email-btn');
    const copySuccessMsg = document.getElementById('copy-success');

    if (copyEmailBtn && copySuccessMsg) {
        copyEmailBtn.addEventListener('click', () => {
            const emailText = "contact@vrunda.dev";
            
            navigator.clipboard.writeText(emailText).then(() => {
                copySuccessMsg.style.display = 'block';
                
                // Fade out after 2.5 seconds
                setTimeout(() => {
                    copySuccessMsg.style.display = 'none';
                }, 2500);
            }).catch(err => {
                console.error('Could not copy email channel address: ', err);
            });
        });
    }

    // ----------------------------------------------------
    // 7. Mobile Responsive Menu Navigation Toggle
    // ----------------------------------------------------
    const mobileToggle = document.getElementById('mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const header = document.getElementById('main-header');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('mobile-open');
            mobileToggle.classList.toggle('open');
            
            // Adjust header background opacity if open
            if (navMenu.classList.contains('mobile-open')) {
                header.style.backgroundColor = '#0a0b0f';
            } else {
                header.style.backgroundColor = 'rgba(10, 11, 15, 0.95)';
            }
        });

        // Auto close drawer when navigation links are triggered
        const navLinks = document.querySelectorAll('.nav-link, .nav-cta');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('mobile-open');
                mobileToggle.classList.remove('open');
                header.style.backgroundColor = 'rgba(10, 11, 15, 0.95)';
            });
        });
    }
});
