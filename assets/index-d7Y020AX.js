(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const m=document.getElementById("terminal-output"),h=document.getElementById("terminal-header"),o=document.getElementById("terminal-input"),u=document.getElementById("terminal-container"),p=document.getElementById("contact-overlay"),v=document.getElementById("close-contact"),d=document.getElementById("contact-form"),i={help:()=>`Available commands:
  <span class="accent">about</span>    - Learn about me
  <span class="accent">projects</span> - View my work
  <span class="accent">skills</span>   - My technical stack
  <span class="accent">resume</span>   - Download my resume (PDF/Word)
  <span class="accent">certs</span>    - Achievements & Certifications
  <span class="accent">contact</span>  - Open rich contact form
  <span class="accent">clear</span>    - Clear the terminal history
  <span class="accent">help</span>     - Show this help message`,about:()=>`Detail-oriented Front-End Developer with strong proficiency in <span class="accent">HTML, CSS, JavaScript</span>. Experienced in building <span class="accent">responsive, accessible web interfaces</span> with clean, maintainable code. 
  Having Strong Fundamentals in <span class="accent">Cyber Security</span> and passionate about <span class="accent">Ethical Hacking and Red teaming</span> fundamentals. 
  Passionate with front-end development to create cutting-edge solutions. Collaborative, adaptable, and focused on delivering optimized, user-friendly applications.`,projects:()=>`My Key Projects:
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
     - Tech: Node.js, React/TS, VirusTotal API integration.`,skills:()=>`Technical Stack:
  - Languages: JavaScript, Python, Rust, Go
  - Frameworks: React, Next.js, Node.js
  - Tools: Docker, Kubernetes, AWS, Git`,resume:()=>`Download Danish Dhanjal's Resume:
    <div>
      <a href="/resume.pdf" download class="download-btn">📄 Download PDF</a>
      <a href="/resume.docx" download class="download-btn">📝 Download DOCX</a>
    </div>
    <p class="system-msg" style="margin-top: 15px;">Note: Ensure files are in the 'public/' folder.</p>`,contact:()=>(p.classList.remove("hidden"),"Opening contact interface..."),certs:()=>`Achievements & Professional Certifications:
  - <span class="accent">1st Place (Team)</span> - Sabka AI Hackathon 2025, organized by TIET 
    in collaboration with The University of Queensland.
  - <span class="accent">Micro Degree in Cyber Security</span> - IIT-GUWAHATI
  - <span class="accent">Web Development</span> - Udemy 
  - <span class="accent">C & C++ Programming</span> - APTECH, Amritsar`,achievements:()=>i.certs(),clear:()=>(m.innerHTML="","")},T=`
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
`;function c(s,e=!1){if(s==="")return;const t=document.createElement("div");t.className=e?"command-line":"command-output",t.innerHTML=s,m.appendChild(t),u.scrollTop=u.scrollHeight}function b(s){const e=s.trim().toLowerCase();if(c(`<span id="prompt">danishdhanjal@portfolio:~$</span> <span class="command-text">${e}</span>`,!0),e!=="")if(i[e]){const t=i[e]();t&&(e==="clear"?i.clear():c(t))}else c(`<span class="error-msg">Command not found: ${e}. Type 'help' for available commands.</span>`)}const f=document.getElementById("custom-cursor"),y=document.getElementById("cursor-follower");document.addEventListener("mousemove",s=>{const e=s.clientX,t=s.clientY;f.style.left=`${e}px`,f.style.top=`${t}px`,y.style.left=`${e}px`,y.style.top=`${t}px`});document.addEventListener("mouseover",s=>{const e=s.target;(e.tagName==="A"||e.tagName==="BUTTON"||e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.classList.contains("accent")||e.closest(".social-btn"))&&document.body.classList.add("cursor-hover")});document.addEventListener("mouseout",s=>{const e=s.target;(e.tagName==="A"||e.tagName==="BUTTON"||e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.classList.contains("accent")||e.closest(".social-btn"))&&document.body.classList.remove("cursor-hover")});o.addEventListener("keydown",s=>{if(s.key==="Enter"){const e=o.value;b(e),o.value=""}});function g(){p.classList.add("hidden"),o.focus()}v.addEventListener("click",g);d.addEventListener("submit",s=>{s.preventDefault();const e=d.querySelector('input[type="text"]').value||"Someone";g(),c(`<span class="success-msg">[SYSTEM] New message received from ${e}!</span>`),c('<span class="system-msg">Thank you for your message. I will get back to you shortly.</span>'),d.reset()});document.addEventListener("click",()=>{p.classList.contains("hidden")&&o.focus()});async function E(){o.style.display="none";const s=document.querySelectorAll("#prompt");s.forEach(t=>t.style.display="none");const e=[{text:"Initializing system...",color:"system-msg"},{text:"Loading kernel modules...",color:"system-msg"},{text:"Establishing secure connection...",color:"system-msg"},{text:"Access granted.",color:"success-msg"}];for(const t of e)await new Promise(r=>setTimeout(r,400)),c(`<span class="${t.color}">${t.text}</span>`);await new Promise(t=>setTimeout(t,600)),m.innerHTML="",h.innerHTML=T,await new Promise(t=>setTimeout(t,1e3)),o.style.display="block",s.forEach(t=>t.style.display="inline"),o.focus()}E();
