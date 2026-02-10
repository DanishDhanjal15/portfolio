(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))c(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&c(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const u=document.getElementById("terminal-output"),v=document.getElementById("terminal-header"),o=document.getElementById("terminal-input"),h=document.getElementById("terminal-container"),f=document.getElementById("contact-overlay"),w=document.getElementById("close-contact"),d=document.getElementById("contact-form"),m={help:()=>`Available commands:
  <span class="accent">about</span>    - Learn about me
  <span class="accent">projects</span> - View my work
  <span class="accent">skills</span>   - My technical stack
  <span class="accent">resume</span>   - Download my resume (PDF/Word)
  <span class="accent">certs</span>    - Achievements & Certifications
  <span class="accent">contact</span>  - Open contact form
  <span class="accent">github</span>   - Visit my GitHub profile
  <span class="accent">linkedin</span> - Connect on LinkedIn
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
  - Languages: JavaScript, Python, C, C++
  - Frameworks: CyberSecurity, Web Development
  - Tools: Docker, Git`,resume:()=>`Download Danish Dhanjal's Resume:
    <div>
      <a href="/resume.pdf" download class="download-btn">📄 Download PDF</a>
    </div>`,contact:()=>(f.classList.remove("hidden"),"Opening contact interface..."),github:()=>(window.open("https://github.com/DanishDhanjal15","_blank"),'<span class="accent">Opening GitHub profile...</span> <a href="https://github.com/DanishDhanjal15" target="_blank" class="accent">https://github.com/DanishDhanjal15</a>'),linkedin:()=>(window.open("https://www.linkedin.com/in/danish-dhanjal-b2a2a9254/","_blank"),'<span class="accent">Opening LinkedIn profile...</span> <a href="https://www.linkedin.com/in/danish-dhanjal-b2a2a9254/" target="_blank" class="accent">linkedin.com/in/danish-dhanjal-b2a2a9254</a>'),certs:()=>`Achievements & Professional Certifications:
  - <span class="accent">1st Place (Team)</span> - Sabka AI Hackathon 2025, organized by TIET 
    in collaboration with The University of Queensland.
  - <span class="accent">Micro Degree in Cyber Security</span> - IIT-GUWAHATI
  - <span class="accent">Web Development</span> - Udemy 
  - <span class="accent">C & C++ Programming</span> - APTECH, Amritsar`,achievements:()=>m.certs(),clear:()=>(u.innerHTML="","")},T=`
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
`;let i=[],r=-1;function l(n,e=!1){if(n==="")return;const t=document.createElement("div");t.className=e?"command-line":"command-output",t.innerHTML=n,u.appendChild(t),h.scrollTop=h.scrollHeight}function L(n){const e=n.trim().toLowerCase();if(e!==""&&(i.length===0||i[i.length-1]!==e)&&i.push(e),r=i.length,l(`<span id="prompt">danishdhanjal@portfolio:~$</span> <span class="command-text">${e}</span>`,!0),e!=="")if(m[e]){const t=m[e]();t&&(e==="clear"?m.clear():l(t))}else l(`<span class="error-msg">Command not found: ${e}. Type 'help' for available commands.</span>`)}const g=document.getElementById("custom-cursor"),y=document.getElementById("cursor-follower");document.addEventListener("mousemove",n=>{const e=n.clientX,t=n.clientY;g.style.left=`${e}px`,g.style.top=`${t}px`,y.style.left=`${e}px`,y.style.top=`${t}px`});document.addEventListener("mouseover",n=>{const e=n.target;(e.tagName==="A"||e.tagName==="BUTTON"||e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.classList.contains("accent")||e.closest(".social-btn"))&&document.body.classList.add("cursor-hover")});document.addEventListener("mouseout",n=>{const e=n.target;(e.tagName==="A"||e.tagName==="BUTTON"||e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.classList.contains("accent")||e.closest(".social-btn"))&&document.body.classList.remove("cursor-hover")});o.addEventListener("keydown",n=>{if(n.key==="Enter"){const e=o.value;L(e),o.value=""}else n.key==="ArrowUp"?(n.preventDefault(),r>0&&(r--,o.value=i[r])):n.key==="ArrowDown"&&(n.preventDefault(),r<i.length-1?(r++,o.value=i[r]):(r=i.length,o.value=""))});function b(){f.classList.add("hidden"),o.focus()}w.addEventListener("click",b);d.addEventListener("submit",async n=>{n.preventDefault();const e=new FormData(d),t=e.get("name")||"Someone",c=d.querySelector(".btn-primary"),a=c.innerHTML;c.innerHTML="<span>⏳</span> Sending...",c.disabled=!0;try{if((await fetch(d.action,{method:"POST",body:e,headers:{Accept:"application/json"}})).ok)b(),l(`<span class="success-msg">[SYSTEM] ✓ Message received from ${t}!</span>`),l('<span class="system-msg">Thank you for your message. I will get back to you shortly.</span>'),d.reset();else throw new Error("Form submission failed")}catch{l('<span class="error-msg">[ERROR] Failed to send message. Please try again or email directly.</span>')}finally{c.innerHTML=a,c.disabled=!1}});document.addEventListener("click",()=>{f.classList.contains("hidden")&&o.focus()});async function E(){o.style.display="none";const n=document.querySelectorAll("#prompt");n.forEach(t=>t.style.display="none");const e=[{text:"Initializing system...",color:"system-msg"},{text:"Loading kernel modules...",color:"system-msg"},{text:"Establishing secure connection...",color:"system-msg"},{text:"Access granted.",color:"success-msg"}];for(const t of e)await new Promise(c=>setTimeout(c,400)),l(`<span class="${t.color}">${t.text}</span>`);await new Promise(t=>setTimeout(t,600)),u.innerHTML="",v.innerHTML=T,await new Promise(t=>setTimeout(t,1e3)),o.style.display="block",n.forEach(t=>t.style.display="inline"),o.focus()}E();
