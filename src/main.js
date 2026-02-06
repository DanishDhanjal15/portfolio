import './style.css'

const terminalOutput = document.getElementById('terminal-output');
const terminalHeader = document.getElementById('terminal-header');
const terminalInput = document.getElementById('terminal-input');
const termContainer = document.getElementById('terminal-container');
const contactOverlay = document.getElementById('contact-overlay');
const closeContactBtn = document.getElementById('close-contact');
const contactForm = document.getElementById('contact-form');

const COMMANDS = {
  help: () => `Available commands:
  <span class="accent">about</span>    - Learn about me
  <span class="accent">projects</span> - View my work
  <span class="accent">skills</span>   - My technical stack
  <span class="accent">resume</span>   - Download my resume (PDF/Word)
  <span class="accent">certs</span>    - Achievements & Certifications
  <span class="accent">contact</span>  - Open contact form
  <span class="accent">clear</span>    - Clear the terminal history
  <span class="accent">help</span>     - Show this help message`,

  about: () => `Detail-oriented Front-End Developer with strong proficiency in <span class="accent">HTML, CSS, JavaScript</span>. Experienced in building <span class="accent">responsive, accessible web interfaces</span> with clean, maintainable code. 
  Having Strong Fundamentals in <span class="accent">Cyber Security</span> and passionate about <span class="accent">Ethical Hacking and Red teaming</span> fundamentals. 
  Passionate with front-end development to create cutting-edge solutions. Collaborative, adaptable, and focused on delivering optimized, user-friendly applications.`,

  projects: () => `My Key Projects:
  1. <span class="accent">Protego: AI-Powered Personal Safety Platform</span>
     - Full-stack safety platform with real-time monitoring and SOS alerts.
     - Tech: FastAPI, PostgreSQL, JWT, Twilio SMS.
     - AI: Integrated Whisper & LLMs for automated distress detection.

  2. <span class="accent">Aegis: Agentic AI for Home IoT Security</span>
     - Plug-and-play security appliance for autonomous threat detection.
     - Features: IoT profiling, Honeypots (deception), and real-time defense.
     - Unified risk dashboard for everything from TVs to wearables.

  3. <span class="accent">Phishing Detection and Response System</span>
     - Production-ready app for real-time phishing URL detection.
     - Tech: Node.js, React/TS, VirusTotal API integration.`,

  skills: () => `Technical Stack:
  - Languages: JavaScript, Python, Rust, Go
  - Frameworks: React, Next.js, Node.js
  - Tools: Docker, Kubernetes, AWS, Git`,

  resume: () => {
    return `Download Danish Dhanjal's Resume:
    <div>
      <a href="/resume.pdf" download class="download-btn">📄 Download PDF</a>
      <a href="/resume.docx" download class="download-btn">📝 Download DOCX</a>
    </div>
    <p class="system-msg" style="margin-top: 15px;">Note: Ensure files are in the 'public/' folder.</p>`;
  },

  contact: () => {
    contactOverlay.classList.remove('hidden');
    return 'Opening contact interface...';
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

  const startupLines = [
    { text: 'Initializing system...', color: 'system-msg' },
    { text: 'Loading kernel modules...', color: 'system-msg' },
    { text: 'Establishing secure connection...', color: 'system-msg' },
    { text: 'Access granted.', color: 'success-msg' },
  ];

  for (const line of startupLines) {
    await new Promise(r => setTimeout(r, 400));
    writeToTerminal(`<span class="${line.color}">${line.text}</span>`);
  }

  await new Promise(r => setTimeout(r, 600));
  terminalOutput.innerHTML = '';

  // Show Banner in header
  terminalHeader.innerHTML = WELCOME_BANNER;

  await new Promise(r => setTimeout(r, 1000));
  terminalInput.style.display = 'block';
  promptArr.forEach(p => p.style.display = 'inline');
  terminalInput.focus();
}

startupSequence();
