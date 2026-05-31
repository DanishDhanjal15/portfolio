import './style.css'

const terminalOutput = document.getElementById('terminal-output');
const terminalHeader = document.getElementById('terminal-header');
const terminalInput = document.getElementById('terminal-input');
const termContainer = document.getElementById('terminal-container');
const contactOverlay = document.getElementById('contact-overlay');
const closeContactBtn = document.getElementById('close-contact');
const contactForm = document.getElementById('contact-form');

// Entry overlay elements
const entryOverlay = document.getElementById('entry-overlay');
const matrixCanvas = document.getElementById('matrix-canvas');
const bootLog = document.getElementById('boot-log');
const bootName = document.getElementById('boot-name');
 

const COMMANDS = {
  help: () => `Available commands:
  <span class="accent">about</span>    - Learn about me
  <span class="accent">projects</span> - View my work
  <span class="accent">skills</span>   - My technical stack
  <span class="accent">resume</span>   - Download my resume (PDF/Word)
  <span class="accent">certs</span>    - Achievements & Certifications
  <span class="accent">contact</span>  - Open contact form
  <span class="accent">github</span>   - Visit my GitHub profile
  <span class="accent">linkedin</span> - Connect on LinkedIn
  <span class="accent">clear</span>    - Clear the terminal history
  <span class="accent">help</span>     - Show this help message`,

  about: () => `Detail-oriented Front-End Developer with strong proficiency in <span class="accent">HTML, CSS, JavaScript</span>. Experienced in building <span class="accent">responsive, accessible web interfaces</span> with clean, maintainable code. 
  Having Strong Fundamentals in <span class="accent">Cyber Security</span> and passionate about <span class="accent">Ethical Hacking and Red teaming</span> fundamentals. 
  Passionate with front-end development to create cutting-edge solutions. Collaborative, adaptable, and focused on delivering optimized, user-friendly applications.`,

  projects: () => `My Key Projects:
  1. <span class="accent">[MAJOR] DanishRecon – Advanced Vulnerability Reconnaissance Platform</span>  <a href="https://github.com/DanishDhanjal15/HackOwasp_Project" target="_blank" class="accent">[ GitHub ↗ ]</a>
     - Tech: Python, PyQt5, NetworkX, SQLite
     - Unified security platform automating multi-stage recon workflows:
       service discovery, vulnerability scanning, subdomain enumeration.
     - Threat context engine mapping services to CVEs with CVSS scoring
       and MITRE ATT&CK techniques for risk-based prioritization.
     - Visual attack-path mapping using NetworkX to analyze chained
       vulnerability exploit vectors.
     - Automated reporting with compliance mapping (PCI-DSS, NIST, CIS)
       and multi-format export (PDF, HTML, JSON).

  2. <span class="accent">Protego: AI-Powered Personal Safety Platform</span>  <a href="https://github.com/DanishDhanjal15/Protego" target="_blank" class="accent">[ GitHub ↗ ]</a>
     - Full-stack safety platform with real-time monitoring and SOS alerts.
     - Tech: FastAPI, PostgreSQL, JWT, Twilio SMS.
     - AI: Integrated Whisper & LLMs for automated distress detection.

  3. <span class="accent">Aegis: Agentic AI for Home IoT Security</span>  <a href="https://github.com/DanishDhanjal15/Aegis" target="_blank" class="accent">[ GitHub ↗ ]</a>
     - Plug-and-play security appliance for autonomous threat detection.
     - Features: IoT profiling, Honeypots (deception), and real-time defense.
     - Unified risk dashboard for everything from TVs to wearables.`,

  skills: () => `Technical Stack:
  - Languages: JavaScript, Python, C, C++
  - Frameworks: CyberSecurity, Web Development
  - Tools: Docker, Git`,

  resume: () => {
    return `Download Danish Dhanjal's Resume:
    <div>
      <a href="/resume.pdf" download class="download-btn">📄 Download PDF</a>
    </div>`;
  },

  contact: () => {
    contactOverlay.classList.remove('hidden');
    return 'Opening contact interface...';
  },

  github: () => {
    window.open('https://github.com/DanishDhanjal15', '_blank');
    return '<span class="accent">Opening GitHub profile...</span> <a href="https://github.com/DanishDhanjal15" target="_blank" class="accent">https://github.com/DanishDhanjal15</a>';
  },

  linkedin: () => {
    window.open('https://www.linkedin.com/in/danish-dhanjal-b2a2a9254/', '_blank');
    return '<span class="accent">Opening LinkedIn profile...</span> <a href="https://www.linkedin.com/in/danish-dhanjal-b2a2a9254/" target="_blank" class="accent">linkedin.com/in/danish-dhanjal-b2a2a9254</a>';
  },

  certs: () => `Achievements & Professional Certifications:
  - <span class="accent">1st Place (Team)</span> - Sabka AI Hackathon 2025, organized by TIET 
    in collaboration with The University of Queensland.
  - <span class="accent">Micro Degree in Cyber Security</span> - IIT-GUWAHATI
  - <span class="accent">Web Development</span> - Udemy 
  - <span class="accent">C & C++ Programming</span> - APTECH, Amritsar`,

  achievements: () => COMMANDS.certs(),

  clear: () => {
    terminalOutput.innerHTML = '';
    return '';
  }
};

const WELCOME_BANNER = `
<div class="ascii-banner">
██████╗  █████╗ ███╗   ██╗██╗███████╗██╗  ██╗    ██████╗ ██╗  ██╗ █████╗ ███╗   ██╗     ██╗ █████╗ ██╗     
██╔══██╗██╔══██╗████╗  ██║██║██╔════╝██║  ██║    ██╔══██╗██║  ██║██╔══██╗████╗  ██║     ██║██╔══██╗██║     
██║  ██║███████║██╔██╗ ██║██║███████╗███████║    ██║  ██║███████║███████║██╔██╗ ██║     ██║███████║██║     
██║  ██║██╔══██║██║╚██╗██║██║╚════██║██╔══██║    ██║  ██║██╔══██║██╔══██║██║╚██╗██║██   ██║██╔══██║██║     
██████╔╝██║  ██║██║ ╚████║██║███████║██║  ██║    ██████╔╝██║  ██║██║  ██║██║ ╚████║╚█████╔╝██║  ██║███████╗
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝╚══════╝╚═╝  ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚════╝ ╚═╝  ╚═╝╚══════╝

                ██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
                ██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
                ██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
                ██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
                ██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
                ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 
</div>
<p class="system-msg">Welcome to Danish Dhanjal's interactive portfolio. Type 'help' to see available commands.</p>
`;

// Command history tracking
let commandHistory = [];
let historyIndex = -1;

function writeToTerminal(content, isCommand = false) {
  if (content === '') return;

  const div = document.createElement('div');
  div.className = isCommand ? 'command-line' : 'command-output';
  div.innerHTML = content;
  terminalOutput.appendChild(div);

  // Auto scroll to bottom
  termContainer.scrollTop = termContainer.scrollHeight;
}

function handleCommand(input) {
  const trimmedInput = input.trim().toLowerCase();

  // Add to command history (avoid duplicates of last command)
  if (trimmedInput !== '' && (commandHistory.length === 0 || commandHistory[commandHistory.length - 1] !== trimmedInput)) {
    commandHistory.push(trimmedInput);
  }
  historyIndex = commandHistory.length;

  // Re-echo the command
  writeToTerminal(`<span id="prompt">danishdhanjal@portfolio:~$</span> <span class="command-text">${trimmedInput}</span>`, true);

  if (trimmedInput === '') return;

  if (COMMANDS[trimmedInput]) {
    const result = COMMANDS[trimmedInput]();
    if (result) {
      if (trimmedInput === 'clear') {
        COMMANDS.clear();
      } else {
        writeToTerminal(result);
      }
    }
  } else {
    writeToTerminal(`<span class="error-msg">Command not found: ${trimmedInput}. Type 'help' for available commands.</span>`);
  }
}

// Custom Cursor Logic
const globalCursor = document.getElementById('custom-cursor');
const globalFollower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
  const x = e.clientX;
  const y = e.clientY;

  globalCursor.style.left = `${x}px`;
  globalCursor.style.top = `${y}px`;

  // Follower with extra delay (CSS transition handles part of it)
  globalFollower.style.left = `${x}px`;
  globalFollower.style.top = `${y}px`;
});

// Global hover effects using event delegation
document.addEventListener('mouseover', (e) => {
  const target = e.target;
  const isInteractive =
    target.tagName === 'A' ||
    target.tagName === 'BUTTON' ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.classList.contains('accent') ||
    target.closest('.social-btn');

  if (isInteractive) {
    document.body.classList.add('cursor-hover');
  }
});

document.addEventListener('mouseout', (e) => {
  const target = e.target;
  const isInteractive =
    target.tagName === 'A' ||
    target.tagName === 'BUTTON' ||
    target.tagName === 'INPUT' ||
    target.tagName === 'TEXTAREA' ||
    target.classList.contains('accent') ||
    target.closest('.social-btn');

  if (isInteractive) {
    document.body.classList.remove('cursor-hover');
  }
});

// Event Listeners
terminalInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const value = terminalInput.value;
    handleCommand(value);
    terminalInput.value = '';
  } else if (e.key === 'ArrowUp') {
    // Navigate backwards through history
    e.preventDefault();
    if (historyIndex > 0) {
      historyIndex--;
      terminalInput.value = commandHistory[historyIndex];
    }
  } else if (e.key === 'ArrowDown') {
    // Navigate forwards through history
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      terminalInput.value = commandHistory[historyIndex];
    } else {
      // At the end of history, clear input
      historyIndex = commandHistory.length;
      terminalInput.value = '';
    }
  }
});

// Close Contact Overlay
function closeContact() {
  contactOverlay.classList.add('hidden');
  terminalInput.focus();
}

closeContactBtn.addEventListener('click', closeContact);

// Handle Form Submission with Formspree
contactForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name') || 'Someone';

  // Show loading state
  const submitBtn = contactForm.querySelector('.btn-primary');
  const originalText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<span>⏳</span> Sending...';
  submitBtn.disabled = true;

  try {
    const response = await fetch(contactForm.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (response.ok) {
      // Success
      closeContact();
      writeToTerminal(`<span class="success-msg">[SYSTEM] ✓ Message received from ${name}!</span>`);
      writeToTerminal('<span class="system-msg">Thank you for your message. I will get back to you shortly.</span>');
      contactForm.reset();
    } else {
      // Error from Formspree
      throw new Error('Form submission failed');
    }
  } catch (error) {
    // Network or other error
    writeToTerminal(`<span class="error-msg">[ERROR] Failed to send message. Please try again or email directly.</span>`);
  } finally {
    // Reset button state
    submitBtn.innerHTML = originalText;
    submitBtn.disabled = false;
  }
});

// Focus terminal input on any click
document.addEventListener('click', () => {
  if (contactOverlay.classList.contains('hidden')) {
    terminalInput.focus();
  }
});

// Initial load
async function startupSequence() {
  terminalInput.style.display = 'none';
  const promptArr = document.querySelectorAll('#prompt');
  promptArr.forEach(p => p.style.display = 'none');

  // Hide mobile commands during startup
  const mobileCommands = document.getElementById('mobile-commands');
  if (mobileCommands) {
    mobileCommands.style.display = 'none';
  }

  // Show Banner in header
  terminalHeader.innerHTML = WELCOME_BANNER;

  await new Promise(r => setTimeout(r, 1000));
  terminalInput.style.display = 'block';
  promptArr.forEach(p => p.style.display = 'inline');

  // Show mobile commands after startup completes
  if (mobileCommands) {
    mobileCommands.style.display = '';
  }

  terminalInput.focus();
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function setTerminalVisible(visible) {
  if (!termContainer) return;
  termContainer.style.visibility = visible ? 'visible' : 'hidden';
}

function resizeMatrixCanvas(canvas) {
  const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  canvas.width = Math.floor(window.innerWidth * dpr);
  canvas.height = Math.floor(window.innerHeight * dpr);
  const ctx = canvas.getContext('2d');
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  return ctx;
}

function startMatrixRain(canvas) {
  if (!canvas) return { stop: () => {} };

  let running = true;
  let ctx = resizeMatrixCanvas(canvas);

  const fontSize = 14;
  const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const columns = () => Math.ceil(window.innerWidth / fontSize);

  let drops = new Array(columns()).fill(0).map(() => Math.random() * 50);

  function onResize() {
    ctx = resizeMatrixCanvas(canvas);
    drops = new Array(columns()).fill(0).map(() => Math.random() * 50);
  }
  window.addEventListener('resize', onResize, { passive: true });

  function draw() {
    if (!running) return;

    // Slight trail
    ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.font = `${fontSize}px JetBrains Mono, monospace`;
    ctx.fillStyle = 'rgba(46, 160, 67, 0.85)';

    for (let i = 0; i < drops.length; i++) {
      const text = chars[Math.floor(Math.random() * chars.length)];
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);

      if (y > window.innerHeight && Math.random() > 0.975) {
        drops[i] = 0;
      } else {
        drops[i] += 1;
      }
    }

    requestAnimationFrame(draw);
  }

  requestAnimationFrame(draw);

  return {
    stop: () => {
      running = false;
      window.removeEventListener('resize', onResize);
    }
  };
}

async function runEntrySequence() {
  // If overlay isn't present, just start the terminal normally.
  if (!entryOverlay || !bootLog || !bootName || !matrixCanvas) {
    await startupSequence();
    return;
  }

  // Hide terminal until entry finishes
  setTerminalVisible(false);

  const matrix = startMatrixRain(matrixCanvas);

  const lines = [
    '[SYSTEM] Initializing BIOS...',
    '[SYSTEM] Performing POST (Power-On Self-Test)...',
    '[SYSTEM] Detecting hardware components...',
    '[SYSTEM] Loading boot loader...',
    '[SYSTEM] Initializing kernel...',
    '[SYSTEM] Mounting root filesystem...',
    '[SYSTEM] Starting system services...',
    '[SYSTEM] Configuring network interfaces...',
    '[SYSTEM] Initializing graphical subsystem...',
    '[SYSTEM] Loading user environment...',
    '[SYSTEM] Performing final system checks...',
    '[SYSTEM] SYSTEM READY'
  ];

  bootLog.innerHTML = '';
  bootName.classList.add('hidden');
  bootName.setAttribute('aria-hidden', 'true');

  for (const line of lines) {
    const span = document.createElement('span');
    span.className = 'boot-line';
    span.innerHTML = `<span class="boot-tag">[SYSTEM]</span>${line.replace('[SYSTEM]', '')}`;
    bootLog.appendChild(span);
    await sleep(180 + Math.random() * 110);
  }

  await sleep(250);
  bootName.classList.remove('hidden');
  bootName.setAttribute('aria-hidden', 'false');

  await sleep(650);
  entryOverlay.classList.add('hidden');
  entryOverlay.setAttribute('aria-hidden', 'true');

  await sleep(650);
  matrix.stop();
  setTerminalVisible(true);
  await startupSequence();
}

// Mobile Command Buttons
const mobileCommandBtns = document.querySelectorAll('.cmd-btn');
mobileCommandBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const command = btn.getAttribute('data-command');
    terminalInput.value = command;
    handleCommand(command);
    terminalInput.value = '';
    terminalInput.focus();
  });
});

// Swipe Gesture Support for Command History
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

const terminalContainer = document.getElementById('terminal-container');

terminalContainer.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

terminalContainer.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  handleSwipe();
}, { passive: true });

function handleSwipe() {
  const swipeThreshold = 50;
  const horizontalSwipe = Math.abs(touchEndX - touchStartX);
  const verticalSwipe = Math.abs(touchEndY - touchStartY);

  // Only trigger if horizontal swipe is dominant
  if (horizontalSwipe > verticalSwipe && horizontalSwipe > swipeThreshold) {
    if (touchEndX < touchStartX) {
      // Swipe left - forward in history (like down arrow)
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (touchEndX > touchStartX) {
      // Swipe right - backward in history (like up arrow)
      if (historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    }
  }
}

runEntrySequence();
