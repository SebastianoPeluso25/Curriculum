<script>
  import { onMount } from "svelte";
  import { Sparkles, X, Send, MessageCircle } from "lucide-svelte";
  import { bookData } from "$lib/competenceData.js";

  let isExpanded = false;
  let isPanelOpen = false;
  let selectedCategory = null;
  let aiResponse = null;
  let isTyping = false;

  const categories = [
    {
      id: "mobile",
      label: "📱 App / Mobile Developer",
      match: ["Mobile", "App", "Flutter", "React Native"],
    },
    {
      id: "web",
      label: "🌐 Sviluppatore Web",
      match: ["Sviluppo Web", "Web", "html", "CSS", "javascript", "PHP"],
    },
    {
      id: "frontend",
      label: "🎨 Frontend / Web Designer",
      match: ["Sviluppo frontend", "Web designer", "SVELTE", "CSS", "html"],
    },
    /*{
      id: "video",
      label: "🎬 Video Editor / Digital",
      match: ["Digital Video", "Video Editor"],
    },*/
    {
      id: "ai",
      label: "🤖 AI / Progetti Software",
      match: ["intelligenza Artificiale", "Python", "C#", "C++", "C"],
    },
    {
      id: "data",
      label: "🗄️ Database / Backend",
      match: ["SQL", "SQLite", "PHP", "Arduino", "Linux"],
    },
  ];

  const responses = {
    mobile: `✅ Ottima scelta! Sono formato come **Mobile App Developer** (ITS ICT Piemonte, livello EQF 5).

Mi occupo di sviluppo app con **React Native** e **Flutter**, oltre a conoscere i fondamenti di C, C++ e C# per progetti nativi.

Ho anche esperienza con **Git & GitHub** per il versionamento e sono abituato a lavorare su progetti completi dalla progettazione alla release.`,

    web: `✅ Perfetto! Lo **sviluppo Web** è una delle mie aree più forti.

Padroneggio:
- **HTML5, CSS3, JavaScript** (vanilla e avanzato)
- **Svelte** (come questo stesso portfolio!)
- **PHP** per il backend
- **MySQL/SQLite** per i database

Creo siti responsive, performanti e curati nel design. Sono sempre aggiornato sulle ultime best practice del web moderno.`,

    frontend: `✅ Eccellente! Il **Frontend** e il **Web Design** sono la mia passione.

Cosa posso fare:
- Interfacce moderne e responsive con **HTML, CSS, JS**
- Componenti riutilizzabili con **Svelte**
- UI/UX curata con attenzione ai dettagli
- Animazioni fluide e micro-interazioni

Rendo ogni progetto unico, bello da vedere e piacevole da usare.`,

    video: `✅ Fantastico! Oltre alla programmazione sono un **Video Editor** appassionato.

- **Digital Video** e post-produzione
- Riprese con **drone** e fotocamere
- Montaggio, color grading, effetti
- Ottima conoscenza della suite **Microsoft Office** per presentazioni

Posso creare contenuti video professionali per il tuo brand o progetto.`,

    ai: `✅ Interessante! Mi sto specializzando anche nel mondo dell'**Intelligenza Artificiale** e dello sviluppo software avanzato.

Competenze tecniche:
- So usare tutti i tool di A.I per sviluppare progetti complessi con una buona architettura
- ** Claude Code **, ** ChatGPT **, ** Gemini ** e molto altro ancora  
- Conoscenze su modelli AI e loro integrazione

Amo imparare tecnologie nuove e sono sempre pronto a sfide stimolanti in questo campo in rapida evoluzione.`,

    data: `✅ Solido! Ho una buona base **backend e database**.

- **SQL, SQLite, MySQL** per la gestione dati
- **PHP** per logiche server-side
- **Linux e Windows** come ambienti di sviluppo
- **Arduino** per progetti IoT ed embedded
- **Git & GitHub** per collaborationi di team

Posso progettare architetture dati complete, dal database alle API.`,
  };

  function getRelevantSkills(categoryMatch) {
    return bookData
      .filter((b) =>
        categoryMatch.some(
          (m) => b.title.toLowerCase().includes(m.toLowerCase())
        )
      )
      .map((b) => b.title);
  }

  onMount(() => {
    setTimeout(() => {
      isExpanded = true;
    }, 600);
  });

  function togglePanel() {
    isPanelOpen = !isPanelOpen;
    if (!isPanelOpen) {
      selectedCategory = null;
      aiResponse = null;
      isTyping = false;
    }
  }

  function selectCategory(cat) {
    selectedCategory = cat;
    aiResponse = null;
    isTyping = true;
    setTimeout(() => {
      aiResponse = responses[cat.id];
      isTyping = false;
    }, 900);
  }

  function goBack() {
    selectedCategory = null;
    aiResponse = null;
    isTyping = false;
  }
</script>

<div class="floating-ai-wrapper">
  {#if isPanelOpen}
    <div class="ai-panel" role="dialog" aria-label="Chat AI Portfolio">
      <div class="panel-header">
        <div class="header-title">
          <div class="ai-icon"><Sparkles size={18} /></div>
          <div>
            <h4>Assistant Portfolio</h4>
            <span class="open-badge-panel">🟢 Open to Work</span>
          </div>
        </div>
        <button class="close-btn" on:click={togglePanel} aria-label="Chiudi">
          <X size={18} />
        </button>
      </div>

      <div class="panel-body">
        {#if !selectedCategory}
          <p class="panel-intro">
            👋 Ciao! Sono Sebastiano. Dimmi che tipo di figura stai cercando e
            ti dirò se sono la persona giusta per te.
          </p>
          <div class="category-list">
            {#each categories as cat}
              <button class="category-btn" on:click={() => selectCategory(cat)}>
                <span class="cat-label">{cat.label}</span>
                <span class="cat-skills">
                  {getRelevantSkills(cat.match).slice(0, 3).join(" · ") ||
                    "Competenze specifiche"}
                </span>
              </button>
            {/each}
          </div>
        {:else}
          <button class="back-btn" on:click={goBack}>← Scegli un'altra categoria</button>

          <div class="chat-bubble user">
            {selectedCategory.label}
          </div>

          {#if isTyping}
            <div class="chat-bubble ai typing">
              <span /><span /><span />
            </div>
          {:else if aiResponse}
            <div class="chat-bubble ai">
              {@html aiResponse.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />')}
            </div>
          {/if}
        {/if}
      </div>
    </div>
  {/if}

  <button
    class={`floating-btn ${isExpanded ? "expanded" : ""} ${isPanelOpen ? "active" : ""}`}
    on:click={togglePanel}
    aria-label="Apri assistente AI portfolio"
  >
    <div class="btn-icon">
      {#if isPanelOpen}
        <X size={22} />
      {:else}
        <MessageCircle size={22} />
      {/if}
    </div>

    {#if isExpanded && !isPanelOpen}
      <div class="btn-text">
        <span class="btn-title">Stai cercando la persona giusta?</span>
        <span class="open-badge">
          <span class="pulse-dot" />
          Open to Work
        </span>
      </div>
    {/if}

    {#if !isPanelOpen}
      <Sparkles class="sparkle-icon" size={14} />
    {/if}
  </button>
</div>

<style>
  .floating-ai-wrapper {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 14px;
  }

  .ai-panel {
    width: 340px;
    max-width: calc(100vw - 48px);
    max-height: 70vh;
    background: #ffffff;
    border-radius: 20px;
    box-shadow:
      0 20px 60px rgba(1, 58, 99, 0.25),
      0 0 0 1px rgba(1, 79, 134, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    animation: slideUp 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    transform-origin: bottom right;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(12px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 18px;
    background: linear-gradient(135deg, #014f86, #468faf);
    color: white;
  }

  .header-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .ai-icon {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7fffd4;
  }

  .header-title h4 {
    margin: 0;
    font-size: 15px;
    font-weight: 600;
  }

  .open-badge-panel {
    display: inline-block;
    margin-top: 4px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(127, 255, 212, 0.18);
    color: #7fffd4;
    padding: 2px 8px;
    border-radius: 999px;
  }

  .close-btn {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: none;
    background: rgba(255, 255, 255, 0.12);
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
  }

  .close-btn:hover {
    background: rgba(255, 255, 255, 0.22);
  }

  .panel-body {
    padding: 18px;
    overflow-y: auto;
    flex: 1;
  }

  .panel-intro {
    margin: 0 0 16px 0;
    font-size: 14px;
    color: #3a4d5f;
    line-height: 1.55;
  }

  .category-list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .category-btn {
    width: 100%;
    text-align: left;
    padding: 13px 14px;
    border-radius: 14px;
    border: 1.5px solid #e0edf5;
    background: #f5fafd;
    cursor: pointer;
    transition: all 0.2s;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .category-btn:hover {
    border-color: #468faf;
    background: #eaf5fa;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(70, 143, 175, 0.12);
  }

  .cat-label {
    font-size: 14px;
    font-weight: 600;
    color: #013a63;
  }

  .cat-skills {
    font-size: 11.5px;
    color: #5a7a94;
    font-weight: 500;
  }

  .back-btn {
    border: none;
    background: transparent;
    color: #014f86;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    padding: 4px 0;
    margin-bottom: 14px;
  }

  .back-btn:hover {
    text-decoration: underline;
  }

  .chat-bubble {
    padding: 12px 14px;
    border-radius: 14px;
    margin-bottom: 12px;
    font-size: 13.5px;
    line-height: 1.6;
  }

  .chat-bubble.user {
    background: linear-gradient(135deg, #014f86, #468faf);
    color: white;
    font-weight: 500;
    border-bottom-right-radius: 4px;
    margin-left: 30px;
  }

  .chat-bubble.ai {
    background: #eef7fb;
    color: #2c3e50;
    border-bottom-left-radius: 4px;
    margin-right: 30px;
    border: 1px solid #d4eaf5;
  }

  .chat-bubble.ai strong {
    color: #013a63;
  }

  .chat-bubble.ai.typing {
    display: flex;
    align-items: center;
    gap: 6px;
    height: 42px;
  }

  .chat-bubble.ai.typing span {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #468faf;
    animation: bounce 1.2s infinite;
  }

  .chat-bubble.ai.typing span:nth-child(2) {
    animation-delay: 0.15s;
  }

  .chat-bubble.ai.typing span:nth-child(3) {
    animation-delay: 0.3s;
  }

  @keyframes bounce {
    0%, 60%, 100% {
      transform: translateY(0);
      opacity: 0.5;
    }
    30% {
      transform: translateY(-6px);
      opacity: 1;
    }
  }

  .floating-btn {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 18px;
    border-radius: 999px;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #014f86 0%, #468faf 50%, #013a63 100%);
    color: white;
    font-family: inherit;
    box-shadow:
      0 8px 28px rgba(1, 58, 99, 0.4),
      0 0 0 1px rgba(127, 255, 212, 0.18),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  .floating-btn::before {
    content: "";
    position: absolute;
    inset: -50%;
    background: radial-gradient(
      circle,
      rgba(127, 255, 212, 0.22) 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.4s;
  }

  .floating-btn:hover::before {
    opacity: 1;
  }

  .floating-btn:hover {
    transform: translateY(-2px);
    box-shadow:
      0 12px 36px rgba(1, 58, 99, 0.48),
      0 0 0 1px rgba(127, 255, 212, 0.28);
  }

  .floating-btn:active {
    transform: translateY(0);
  }

  .floating-btn.expanded {
    border-radius: 999px;
  }

  .floating-btn.active {
    transform: scale(0.96);
  }

  .btn-icon {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(127, 255, 212, 0.18);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #7fffd4;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }

  .btn-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    z-index: 1;
  }

  .btn-title {
    font-size: 13.5px;
    font-weight: 600;
    white-space: nowrap;
  }

  .open-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 3px;
    font-size: 11px;
    font-weight: 600;
    background: rgba(127, 255, 212, 0.18);
    color: #7fffd4;
    padding: 2px 10px;
    border-radius: 999px;
    border: 1px solid rgba(127, 255, 212, 0.3);
  }

  .pulse-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #7fffd4;
    box-shadow: 0 0 0 0 rgba(127, 255, 212, 0.6);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(127, 255, 212, 0.6);
    }
    70% {
      box-shadow: 0 0 0 8px rgba(127, 255, 212, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(127, 255, 212, 0);
    }
  }

  .sparkle-icon {
    position: absolute;
    top: 10px;
    right: 14px;
    color: #7fffd4;
    animation: sparkle-anim 2.4s ease-in-out infinite;
  }

  @keyframes sparkle-anim {
    0%, 100% {
      opacity: 0.4;
      transform: rotate(0deg);
    }
    50% {
      opacity: 1;
      transform: rotate(20deg);
    }
  }

  @media (max-width: 480px) {
    .floating-ai-wrapper {
      right: 14px;
      bottom: 14px;
      gap: 10px;
    }

    .ai-panel {
      width: calc(100vw - 28px);
    }

    .floating-btn {
      padding: 12px 14px;
    }

    .btn-title {
      font-size: 12.5px;
    }
  }
</style>
