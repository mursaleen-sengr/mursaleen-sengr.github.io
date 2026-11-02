// ========== EMBEDDED DATA ==========
// Data is embedded directly to avoid fetch issues on GitHub Pages

const DATA = {
    about: {"summary":{"title":"Professional Summary","text":"AI & ML Engineer with almost 3 years of experience building production-grade LLM applications, RAG systems and agent workflows. I've delivered FastAPI-based AI platforms for healthcare, finance, procurement and Islamic knowledge using LangGraph, Qdrant, AWS and Docker, and I work across fine-tuning, retrieval optimization and scalable Gen-AI backends."},"current":{"role":"Software Engineer (AI/ML)","company":"CodingCops","location":"Lahore, Pakistan"},"info":[{"icon":"fas fa-location-dot","text":"Lahore, Pakistan"},{"icon":"fas fa-phone","text":"+92 307 770 6100"},{"icon":"fas fa-envelope","text":"mursaleen.sengr@gmail.com"}],"stats":[{"value":"~3 yrs","label":"Building production AI"},{"value":"4","label":"Industries: healthcare, finance, procurement, Islamic knowledge"},{"value":"92%","label":"Accuracy on natural-language to SQL"},{"value":"30–40%","label":"Lower word error rate after fine-tuning Whisper"}]},
    
    experience: {"experiences":[{"date":"July 2026 – Present","title":"Software Engineer (AI/ML)","company":"CodingCops","location":"Lahore, Pakistan","responsibilities":["Design and build multi-agent AI systems and text-to-SQL pipelines using LangGraph and self-hosted LLMs.","Optimize prompts, context management and token usage to improve reasoning efficiency on complex natural-language queries across large datasets."]},{"date":"March 2025 – July 2026","title":"AI/ML Engineer","company":"DiveDeepAI","location":"Islamabad, Pakistan","responsibilities":["Built and deployed Generative AI systems using custom and LangGraph-driven RAG pipelines and LLM fine-tuning.","Architected FastAPI backends and managed deployments on AWS EC2 and DigitalOcean.","Led a 3-person engineering team, drove system architecture and mentored junior developers."]},{"date":"August 2024 – February 2025","title":"Jr AI Engineer","company":"Softoo","location":"Islamabad, Pakistan","responsibilities":["Built production-oriented Generative AI proofs of concept with the solution architect, then validated and iterated on them.","Built RAG applications using LangChain, LangGraph, LLMs and vector databases."]}]},
    
    projects: {"projects":[{"icon":"fas fa-stethoscope","title":"Bridge Vet: Veterinary Clinic Platform","domain":"Healthcare","impact":"Vets spend less time on paperwork: SOAP notes, medication lists and follow-ups are drafted by AI in the background after each appointment.","description":["Managed a development team to deliver an end-to-end clinic management system; built a scalable FastAPI, Redis and Celery backend for asynchronous AI SOAP note generation, medication extraction and appointment follow-ups.","Developed a custom RAG-based clinical assistant for dosage calculations, evaluated retrieval accuracy with Langfuse, and built OCR pipelines that automate inventory tracking."],"tags":["Python","FastAPI","Redis","Celery","Gemini","Vector DBs","Langfuse","OCR","AsyncIO","Docker","AWS EC2"],"stats":[{"icon":"fas fa-file-medical","text":"AI-drafted SOAP notes"},{"icon":"fas fa-chart-simple","text":"Retrieval checked in Langfuse"}]},{"icon":"fas fa-mosque","title":"eQRA-AI: Islamic AI Assistant Mobile App","domain":"Consumer app","impact":"App users get sourced answers on fatwas and duas from an assistant that remembers their past conversations and sends timely notifications.","description":["Built the backend for an Islamic AI assistant, deploying dual RAG chatbots for precise fatwa and dua retrieval, with Mem0-powered long-term conversational memory.","Engineered an event-driven notification system using AWS EventBridge, SNS and Lambda to send real-time push notifications through FCM.","Scaled deployments on DigitalOcean App Platform with Redis and Celery on droplets, and self-hosted Grafana Loki for log aggregation. Prototyped a LangGraph multi-tool agent that routes questions between live web search and Qdrant."],"tags":["Python","FastAPI","Mem0","LangGraph","Qdrant","AWS EventBridge","AWS SNS","AWS Lambda","FCM","Redis","Celery","Grafana Loki","DigitalOcean"],"stats":[{"icon":"fas fa-comments","text":"Two RAG chatbots with memory"},{"icon":"fas fa-bell","text":"Event-driven push notifications"}]},{"icon":"fas fa-file-invoice-dollar","title":"Yani: AI Assistant for Chartered Accountants","domain":"Finance","impact":"Accountants check documents against regulations and ask questions of their data in plain English instead of writing SQL.","description":["Built a RAG chatbot for chartered accountants, alongside a document compliance workflow that checks text against regulatory frameworks to map clauses and flag non-compliance.","Implemented database chat with Vanna.ai trained on complex schemas, reaching 92% accuracy in natural language to SQL.","Developed an Autogen multi-agent system that runs exploratory data analysis and generates charts from the extracted SQL data."],"tags":["Python","Vanna.ai","Autogen","RAG","LLMs","Pandas","Matplotlib","Streamlit"],"stats":[{"icon":"fas fa-bullseye","text":"92% NL-to-SQL accuracy"},{"icon":"fas fa-scale-balanced","text":"Automated compliance checks"}]},{"icon":"fas fa-microphone-lines","title":"Fine-Tuning Whisper for Quranic Arabic","domain":"Speech AI","impact":"More accurate transcription of Quran recitation, including the diacritics that general-purpose speech models get wrong.","description":["Built a fine-tuning pipeline for OpenAI's Whisper on 10,000+ Quranic Tarteel audio samples to improve specialized Arabic speech-to-text and phonetic accuracy.","Achieved a 90% improvement in Harakat (diacritic) recognition and cut word error rate by 30–40% against the base model."],"tags":["Python","PyTorch","Hugging Face","Whisper","Audio Processing"],"stats":[{"icon":"fas fa-arrow-trend-up","text":"90% better diacritic recognition"},{"icon":"fas fa-arrow-trend-down","text":"30–40% lower WER"}]}]},
    
    skills: {"categories":[{"name":"Languages","icon":"fas fa-code","skills":[{"name":"Python","logo":"assets/logos/python.svg"},{"name":"SQL","logo":"assets/logos/sql.svg"}]},{"name":"AI/ML & Frameworks","icon":"fas fa-brain","skills":[{"name":"PyTorch","logo":"assets/logos/pytorch.svg"},{"name":"Hugging Face","logo":"assets/logos/huggingface.svg"},{"name":"OpenAI","logo":"assets/logos/openai.svg"},{"name":"Gemini","logo":"assets/logos/gemini.svg"},{"name":"LangChain","logo":"assets/logos/langchain.svg"},{"name":"LangGraph","logo":"assets/logos/langgraph.svg"},{"name":"Autogen","logo":"assets/logos/autogen.svg"},{"name":"Mem0","logo":"assets/logos/mem0.svg"},{"name":"RAG","icon":"fas fa-magnifying-glass-chart"},{"name":"Vanna.ai","icon":"fas fa-table-cells"}]},{"name":"Evaluation & Observability","icon":"fas fa-gauge-high","skills":[{"name":"Langfuse","logo":"assets/logos/langfuse.svg"},{"name":"Grafana Loki","logo":"assets/logos/grafana.svg"},{"name":"LLM Benchmarking","icon":"fas fa-ranking-star"},{"name":"Retrieval Evaluation","icon":"fas fa-list-check"},{"name":"Hallucination Reduction","icon":"fas fa-shield-halved"}]},{"name":"Databases","icon":"fas fa-database","skills":[{"name":"PostgreSQL","logo":"assets/logos/postgresql.svg"},{"name":"Qdrant","logo":"assets/logos/qdrant.svg"},{"name":"FAISS","logo":"assets/logos/faiss.svg"},{"name":"PgVector","logo":"assets/logos/postgresql.svg"},{"name":"Redis","logo":"assets/logos/redis.svg"},{"name":"MongoDB","logo":"assets/logos/mongodb.svg"}]},{"name":"Backend & Infrastructure","icon":"fas fa-server","skills":[{"name":"FastAPI","logo":"assets/logos/fastapi.svg"},{"name":"Celery","logo":"assets/logos/celery.svg"},{"name":"AsyncIO","logo":"assets/logos/python.svg"},{"name":"AWS","logo":"assets/logos/aws.svg"},{"name":"EC2","logo":"assets/logos/aws-ec2.svg"},{"name":"S3","logo":"assets/logos/aws-s3.svg"},{"name":"EventBridge","logo":"assets/logos/aws-eventbridge.svg"},{"name":"SNS","logo":"assets/logos/aws-sns.svg"},{"name":"Lambda","logo":"assets/logos/aws-lambda.svg"},{"name":"DigitalOcean","logo":"assets/logos/digitalocean.svg"},{"name":"Docker","logo":"assets/logos/docker.svg"},{"name":"Linux","logo":"assets/logos/linux.svg"},{"name":"CI/CD","logo":"assets/logos/cicd.svg"},{"name":"Firebase Cloud Messaging","logo":"assets/logos/firebase.svg"}]},{"name":"Data & Apps","icon":"fas fa-chart-pie","skills":[{"name":"Pandas","logo":"assets/logos/pandas.svg"},{"name":"Matplotlib","logo":"assets/logos/matplotlib.svg"},{"name":"Streamlit","logo":"assets/logos/streamlit.svg"},{"name":"OCR","icon":"fas fa-file-image"},{"name":"Web Scraping","icon":"fas fa-spider"}]},{"name":"Tools","icon":"fas fa-screwdriver-wrench","skills":[{"name":"Git","logo":"assets/logos/git.svg"},{"name":"GitHub","logo":"assets/logos/github.svg"},{"name":"GitLab","logo":"assets/logos/gitlab.svg"},{"name":"Postman","logo":"assets/logos/postman.svg"},{"name":"Claude Code","logo":"assets/logos/claude-code.svg"},{"name":"Cursor","logo":"assets/logos/cursor.svg"},{"name":"Antigravity","logo":"assets/logos/antigravity.svg"}]}]},
    
    education: {"degree":{"title":"Bachelor of Science in Software Engineering","institution":"The Islamia University of Bahawalpur","date":"October 2020 – June 2024","cgpa":"3.70/4.00","coursework":"Relevant Coursework: Databases, Object-Oriented Programming, Software Engineering, Data Structures and Algorithms, Artificial Intelligence, Machine Learning, Cloud Computing, Computer Networks","location":"Punjab, Pakistan"},"certifications":[{"title":"Intermediate Python","issuer":"DataCamp","year":"2024"},{"title":"Introduction to Large Language Models","issuer":"Google Cloud","year":"2024"}]},
    
    services: {"intro":"I help teams turn LLMs into products people rely on: accurate, measurable, and running in production.","services":[{"icon":"fas fa-file-circle-question","title":"AI assistants on your own documents","text":"RAG chatbots that answer from your files and policies, show their sources, and are tested for accuracy before launch.","proof":"Bridge Vet, eQRA-AI, Yani"},{"icon":"fas fa-diagram-project","title":"Agents and text-to-SQL","text":"Multi-agent workflows and plain-English database chat, so non-technical staff can get answers without writing queries.","proof":"92% NL-to-SQL accuracy on Yani"},{"icon":"fas fa-sliders","title":"Model fine-tuning","text":"Adapting open models like Whisper and LLMs to your domain, language or terminology when off-the-shelf models fall short.","proof":"30–40% lower WER on Quranic Arabic"},{"icon":"fas fa-server","title":"Production AI backends","text":"FastAPI services with background queues, cloud deployment on AWS or DigitalOcean, and monitoring with Langfuse and Grafana Loki.","proof":"Deployed on AWS EC2, Lambda and DigitalOcean"}],"process":[{"title":"Understand the workflow","text":"Start with the task people do today, the data it uses and what a good answer looks like."},{"title":"Prototype on real data","text":"A working version in days, not a slide deck, so you can judge it with your own examples."},{"title":"Measure before scaling","text":"Track retrieval accuracy, hallucinations, latency and token cost, and fix what the numbers show."},{"title":"Ship and monitor","text":"Deploy with logging and evaluation in place, then keep improving from real usage."}]}
};

// ========== DATA LOADING ==========
async function loadJSON(key) {
    return DATA[key] || null;
}

// ========== ABOUT SECTION RENDERER ==========
// Everything below this line is hand-written. Content comes from data/*.json via build.py.

const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[c]));

const asList = (v) => (Array.isArray(v) ? v : [v]).filter(Boolean);
const slug = (s) => String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// Logos that are dark/monochrome and need inverting in dark mode
const MONO_LOGOS = ['github', 'langchain', 'amazonwebservices', 'apple'];

function renderHero() {
    const a = DATA.about || {};
    const status = document.getElementById('heroStatus');
    if (status && a.current) {
        status.innerHTML = `<span class="status-dot" aria-hidden="true"></span>
            ${esc(a.current.role)} at ${esc(a.current.company)}, ${esc(a.current.location.split(',')[0])}`;
    }

    const proof = document.getElementById('proofStats');
    if (proof) {
        proof.innerHTML = (a.stats || []).map((s) => `
            <div class="proof-item">
                <dt>${esc(s.label)}</dt>
                <dd>${esc(s.value)}</dd>
            </div>`).join('');
    }

    const worked = document.getElementById('workedAt');
    const companies = [...new Set((DATA.experience?.experiences || []).map((j) => j.company))];
    if (worked && companies.length) {
        worked.innerHTML = `Worked at ${companies.map((c) => `<strong>${esc(c)}</strong>`).join('')}`;
    }
}

function renderServices() {
    const d = DATA.services;
    if (!d) return;
    const intro = document.getElementById('servicesIntro');
    if (intro) intro.textContent = d.intro || '';

    const grid = document.getElementById('servicesGrid');
    if (grid) {
        grid.innerHTML = (d.services || []).map((s) => `
            <article class="service">
                <div class="service-icon"><i class="${esc(s.icon)}" aria-hidden="true"></i></div>
                <h3>${esc(s.title)}</h3>
                <p>${esc(s.text)}</p>
                <p class="service-proof"><i class="fas fa-circle-check" aria-hidden="true"></i>${esc(s.proof)}</p>
            </article>`).join('');
    }

    const steps = document.getElementById('processSteps');
    if (steps) {
        steps.innerHTML = (d.process || []).map((p) => `
            <li class="step">
                <h4>${esc(p.title)}</h4>
                <p>${esc(p.text)}</p>
            </li>`).join('');
    }
}

function renderAbout() {
    const d = DATA.about;
    const el = document.getElementById('about-content');
    if (!d || !el) return;

    const info = (d.info || []).map((i) => `
        <li><i class="${esc(i.icon)}" aria-hidden="true"></i>${esc(i.text)}</li>`).join('');

    el.innerHTML = `
        <img class="about-photo" src="profile-photo-640.jpg" alt="Portrait of Muhammad Mursaleen"
             width="640" height="877" loading="lazy">
        <div class="about-side">
            <p class="about-summary">${esc(d.summary?.text)}</p>
            <ul class="about-info">${info}</ul>
        </div>`;
}

// ========== EXPERIENCE ==========
function renderExperience() {
    const list = DATA.experience?.experiences || [];
    const el = document.getElementById('experience-timeline');
    if (!el) return;

    el.innerHTML = list.map((job) => `
        <li class="job" id="job-${slug(job.company)}">
            <p class="job-when">${esc(job.date)}</p>
            <div class="job-body">
                <h3 class="job-title">${esc(job.title)}</h3>
                <p class="job-org"><strong>${esc(job.company)}</strong>, ${esc(job.location)}</p>
                <ul class="job-points">
                    ${asList(job.responsibilities).map((r) => `<li>${esc(r)}</li>`).join('')}
                </ul>
            </div>
        </li>`).join('');
}

// ========== PROJECTS ==========
function renderProjects() {
    const list = DATA.projects?.projects || [];
    const el = document.getElementById('projects-grid');
    if (!el) return;

    el.innerHTML = list.map((p) => `
        <article class="project" id="project-${slug(p.title)}">
            <div>
                <div class="project-top">
                    <div class="project-icon"><i class="${esc(p.icon)}" aria-hidden="true"></i></div>
                    ${p.domain ? `<span class="project-domain">${esc(p.domain)}</span>` : ''}
                </div>
                <h3 class="project-title">${esc(p.title)}</h3>
                ${p.impact ? `<p class="project-impact">${esc(p.impact)}</p>` : ''}
                <ul class="project-metrics">
                    ${(p.stats || []).map((s) => `
                        <li><i class="${esc(s.icon)}" aria-hidden="true"></i>${esc(s.text)}</li>`).join('')}
                </ul>
            </div>
            <div>
                <p class="built-label">What I built</p>
                <ul class="project-desc">
                    ${asList(p.description).map((t) => `<li>${esc(t)}</li>`).join('')}
                </ul>
                <ul class="tags" aria-label="Technologies">
                    ${(p.tags || []).map((t) => `<li>${esc(t)}</li>`).join('')}
                </ul>
            </div>
        </article>`).join('');
}

// ========== SKILLS ==========
function renderSkills() {
    const cats = DATA.skills?.categories || [];
    const el = document.getElementById('skills-container');
    if (!el) return;

    el.innerHTML = cats.map((c) => `
        <div class="skill-row">
            <dt><i class="${esc(c.icon)}" aria-hidden="true"></i>${esc(c.name)}</dt>
            <dd>
                ${(c.skills || []).map((s) => {
                    const fallback = esc(s.icon || 'fas fa-circle');
                    const glyph = s.logo
                        ? `<img src="${esc(s.logo)}" alt="" width="18" height="18" loading="lazy"
                               onerror="this.outerHTML='<i class=&quot;${fallback}&quot; aria-hidden=&quot;true&quot;></i>'">`
                        : `<i class="${fallback}" aria-hidden="true"></i>`;
                    return `<span class="skill"><span class="skill-logo">${glyph}</span>${esc(s.name)}</span>`;
                }).join('')}
            </dd>
        </div>`).join('');
}

// ========== EDUCATION ==========
function renderEducation() {
    const d = DATA.education;
    const el = document.getElementById('education-content');
    if (!d || !el) return;
    const g = d.degree || {};

    el.innerHTML = `
        <div>
            <h3 class="degree-title">${esc(g.title)}</h3>
            <p class="degree-meta">${esc(g.institution)}${g.location ? `, ${esc(g.location)}` : ''}. ${esc(g.date)}</p>
            ${g.cgpa ? `<p class="degree-cgpa">CGPA ${esc(g.cgpa)}</p>` : ''}
            <p class="degree-course">${esc(g.coursework)}</p>
        </div>
        <div>
            <h3 class="certs-title">Certifications</h3>
            <ul class="certs">
                ${(d.certifications || []).map((c) => `
                    <li class="cert">
                        <i class="fas fa-award" aria-hidden="true"></i>
                        <div>
                            <div class="cert-name">${esc(c.title)}</div>
                            <div class="cert-issuer">${esc(c.issuer)}</div>
                        </div>
                        <span class="cert-year">${esc(c.year)}</span>
                    </li>`).join('')}
            </ul>
        </div>`;
}

// ========== RETRIEVAL CONSOLE ==========
// A tiny BM25 search over the portfolio's own data, shown with highlighted matches.

const STOP = new Set(('a an and are as at be by can do does did for from have has had how i in is it its me my ' +
    'of on or that the this to was what when where which who why with you your yours he his him about any ' +
    'ever worked work used use using built build tell show some there their they them').split(' '));

const SYNONYMS = {
    agent: ['agentic', 'agents', 'autogen', 'langgraph'],
    finetune: ['fine', 'tuning', 'whisper'],
    db: ['database', 'databases', 'qdrant', 'postgresql', 'redis', 'mongodb'],
    database: ['databases', 'qdrant', 'postgresql', 'pgvector', 'faiss'],
    cloud: ['aws', 'digitalocean', 'ec2'],
    deploy: ['deployments', 'deploying', 'aws', 'digitalocean'],
    health: ['healthcare', 'clinic', 'clinical', 'veterinary'],
    healthcare: ['clinic', 'clinical', 'veterinary'],
    speech: ['whisper', 'audio', 'transcription'],
    study: ['university', 'degree', 'bachelor'],
    education: ['university', 'degree', 'bachelor', 'coursework'],
    lead: ['led', 'team', 'mentored'],
    team: ['led', 'mentored', 'managed'],
    sql: ['vanna', 'nl-to-sql', 'natural language'],
    llm: ['llms', 'gemini', 'openai'],
    aws: ['eventbridge', 'sns', 'lambda', 'ec2', 's3'],
    text2sql: ['nl-to-sql', 'vanna', 'sql'],
};

function stem(w) {
    w = w.toLowerCase();
    if (w.length > 5 && w.endsWith('ing')) return w.slice(0, -3);
    if (w.length > 4 && w.endsWith('ed')) return w.slice(0, -2);
    if (w.length > 3 && w.endsWith('s') && !w.endsWith('ss')) return w.slice(0, -1);
    return w;
}

const tokenize = (text) => (String(text).toLowerCase().match(/[a-z0-9]+(?:[.\-][a-z0-9]+)*/g) || [])
    .flatMap((t) => (t.includes('-') ? [t, ...t.split('-')] : [t]))
    .filter((t) => !STOP.has(t))
    .map(stem);

function buildChunks() {
    const chunks = [];
    const add = (text, source, href) => chunks.push({ text, source, href });

    if (DATA.about?.summary?.text) {
        add(DATA.about.summary.text, 'About', '#about');
        chunks[chunks.length - 1].boost = 0.7; // general summary, prefer specific work
    }

    (DATA.experience?.experiences || []).forEach((j) => {
        add(`${j.title} at ${j.company} (${j.date}). ${asList(j.responsibilities).join(' ')}`,
            `${j.title}, ${j.company}`, `#job-${slug(j.company)}`);
    });

    (DATA.projects?.projects || []).forEach((p) => {
        asList([p.impact, ...asList(p.description)]).forEach((t) => {
            add(t, p.title.split(':')[0], `#project-${slug(p.title)}`);
            chunks[chunks.length - 1].extra = `${p.title} ${(p.tags || []).join(' ')}`;
        });
    });

    (DATA.skills?.categories || []).forEach((c) => {
        add(`${c.name}: ${(c.skills || []).map((s) => s.name).join(', ')}.`, 'Skills', '#skills');
        chunks[chunks.length - 1].boost = 0.75; // prefer concrete work over skill lists
    });

    const g = DATA.education?.degree;
    if (g) add(`${g.title}, ${g.institution} (${g.date}). CGPA ${g.cgpa}. ${g.coursework}`, 'Education', '#education');
    (DATA.education?.certifications || []).forEach((c) => {
        add(`Certification: ${c.title}, ${c.issuer}, ${c.year}.`, 'Certifications', '#education');
    });

    chunks.forEach((c) => {
        c.tokens = tokenize(`${c.text} ${c.extra || ''}`);
        c.tf = c.tokens.reduce((m, t) => m.set(t, (m.get(t) || 0) + 1), new Map());
    });
    return chunks;
}

let INDEX = null;

function search(query, k = 3) {
    if (!INDEX) {
        const chunks = buildChunks();
        const df = new Map();
        chunks.forEach((c) => new Set(c.tokens).forEach((t) => df.set(t, (df.get(t) || 0) + 1)));
        const avg = chunks.reduce((s, c) => s + c.tokens.length, 0) / Math.max(chunks.length, 1);
        INDEX = { chunks, df, avg };
    }

    const base = tokenize(query);
    const terms = new Set(base);
    base.forEach((t) => (SYNONYMS[t] || []).forEach((s) => tokenize(s).forEach((x) => terms.add(x))));
    if (!terms.size) return { hits: [], terms };

    const N = INDEX.chunks.length;
    const k1 = 1.4, b = 0.75;
    const scored = INDEX.chunks.map((c) => {
        let score = 0;
        terms.forEach((t) => {
            const f = c.tf.get(t);
            if (!f) return;
            const n = INDEX.df.get(t) || 0;
            const idf = Math.log(1 + (N - n + 0.5) / (n + 0.5));
            const weight = base.includes(t) ? 1 : 0.6; // synonyms count a bit less
            score += weight * idf * (f * (k1 + 1)) / (f + k1 * (1 - b + b * c.tokens.length / INDEX.avg));
        });
        return { c, score: score * (c.boost || 1) };
    }).filter((h) => h.score > 0).sort((a, b2) => b2.score - a.score);

    const top = scored[0]?.score || 1;
    return {
        // one passage per source, so results show different projects and roles
        hits: scored.filter((h, i, all) => all.findIndex((x) => x.c.source === h.c.source) === i)
            .slice(0, k).map((h) => ({ ...h.c, rel: h.score / top })).filter((h) => h.rel >= 0.3),
        terms,
    };
}

function highlight(text, terms) {
    return esc(text).replace(/[A-Za-z0-9]+(?:[.\-][A-Za-z0-9]+)*/g, (w) =>
        (terms.has(stem(w)) && !STOP.has(w.toLowerCase()) ? `<mark>${w}</mark>` : w));
}

function trimAround(text, terms, max = 260) {
    if (text.length <= max) return text;
    const words = text.split(/\s+/);
    const first = words.findIndex((w) => terms.has(stem(w.replace(/[^A-Za-z0-9.\-]/g, ''))));
    let start = Math.max(0, first - 8);
    let out = '';
    for (let i = start; i < words.length && (out + words[i]).length < max; i++) out += (out ? ' ' : '') + words[i];
    return (start > 0 ? '… ' : '') + out + ' …';
}

function showResults(query) {
    const box = document.getElementById('askResults');
    if (!box) return;
    const { hits, terms } = search(query);

    if (!hits.length) {
        box.innerHTML = `<p class="hit-empty">Nothing matched "${esc(query)}". Try a tool like LangGraph or Qdrant, or a field like healthcare or finance.</p>`;
        return;
    }
    box.innerHTML = hits.map((h) => `
        <div class="hit">
            <p class="hit-text">${highlight(trimAround(h.text, terms), terms)}</p>
            <p class="hit-source">
                <a href="${h.href}">${esc(h.source)}</a>
                <span>Relevance ${Math.round(h.rel * 100)}%</span>
            </p>
        </div>`).join('');
}

function initConsole() {
    const form = document.getElementById('askForm');
    const input = document.getElementById('askInput');
    const chipsEl = document.getElementById('askChips');
    if (!form || !input || !chipsEl) return;

    const suggestions = [
        'Have you built text-to-SQL?',
        'What have you built with LangGraph?',
        'Healthcare experience',
        'Have you fine-tuned a model?',
        'Which AWS services?',
    ];

    chipsEl.innerHTML = suggestions.map((q) =>
        `<button type="button" class="chip" aria-pressed="false">${esc(q)}</button>`).join('');

    const chips = [...chipsEl.querySelectorAll('.chip')];
    const run = (q, chip) => {
        chips.forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
        showResults(q);
    };

    chips.forEach((chip) => chip.addEventListener('click', () => {
        input.value = chip.textContent;
        run(chip.textContent, chip);
    }));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const q = input.value.trim();
        if (q) run(q, null);
    });

    // Open with one example so visitors see what it does
    input.value = suggestions[0];
    run(suggestions[0], chips[0]);
}

// ========== THEME ==========
function initTheme() {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;
    const root = document.documentElement;
    const sync = () => {
        const dark = root.getAttribute('data-theme') === 'dark';
        btn.innerHTML = `<i class="${dark ? 'fas fa-sun' : 'fas fa-moon'}" aria-hidden="true"></i>`;
        btn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    };
    sync();

    btn.addEventListener('click', () => {
        const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        root.setAttribute('data-theme', next);
        try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
        sync();
    });
}

// ========== NAVIGATION ==========
function initNav() {
    const header = document.getElementById('siteHeader');
    const nav = document.getElementById('siteNav');
    const menu = document.getElementById('menuToggle');
    const links = [...document.querySelectorAll('.nav-link')];

    const setMenu = (open) => {
        nav.classList.toggle('is-open', open);
        menu.setAttribute('aria-expanded', String(open));
        menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.innerHTML = `<i class="${open ? 'fas fa-xmark' : 'fas fa-bars'}" aria-hidden="true"></i>`;
    };
    menu?.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
    links.forEach((l) => l.addEventListener('click', () => setMenu(false)));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the section currently in view
    const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);
    const io = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            links.forEach((l) => l.classList.toggle('is-active', l.getAttribute('href') === `#${entry.target.id}`));
        });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach((s) => io.observe(s));
}

// ========== CONTACT FORM ==========
function initContact() {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const f = new FormData(form);
        const body = `Name: ${f.get('name')}\nEmail: ${f.get('email')}\n\n${f.get('message')}`;
        const subject = `${f.get('topic') || 'Hello'} from ${f.get('name')}`;
        window.location.href = `mailto:mursaleen.sengr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        if (status) status.textContent = 'Your email app should open with the message filled in.';
        form.reset();
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderServices();
    renderAbout();
    renderExperience();
    renderProjects();
    renderSkills();
    renderEducation();
    initConsole();
    initTheme();
    initNav();
    initContact();
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
});

console.log('%cHi there, thanks for looking under the hood.', 'font: 600 14px sans-serif; color:#0e6e6c');
console.log('Want to talk AI engineering? mursaleen.sengr@gmail.com');
