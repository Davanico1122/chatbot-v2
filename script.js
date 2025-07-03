document.addEventListener("DOMContentLoaded", () => {
  const chatbotWindow = document.getElementById("chatbot-window");
  const toggleBtn = document.getElementById("chatbot-toggle");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const messageInput = document.getElementById("message-input");
  const chatMessages = document.getElementById("chat-messages");
  const languageSelect = document.getElementById("language-selector");
  const typingIndicator = document.getElementById("typing-indicator");
  const badge = document.getElementById("notification-badge");

  // Tampilkan chatbot
  toggleBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
    if (badge) badge.style.display = "none";
  });

  // Sembunyikan chatbot
  closeBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
  });

  // Kirim pesan saat tombol diklik atau Enter ditekan
  sendBtn.addEventListener("click", sendMessage);
  messageInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  function sendMessage() {
    const msg = messageInput.value.trim();
    if (!msg) return;

    appendMessage(msg, "user");
    messageInput.value = "";

    showTyping();

    setTimeout(() => {
      hideTyping();
      const lang = languageSelect.value;
      let response = "";

      try {
        response = lang === "id" ? getBotResponseID(msg) : getBotResponseEN(msg);
      } catch (err) {
        response = "⚠️ Bot error. Cek file responsenya.";
        console.error("Bot error:", err);
      }

      appendMessage(response, "bot");
    }, 600);
  }

  function appendMessage(text, sender) {
    const messageEl = document.createElement("div");
    messageEl.className = `message ${sender}-message`;
    messageEl.innerHTML = `
      <div class="message-avatar">
        <i class="fas fa-${sender === "bot" ? "robot" : "user"}"></i>
      </div>
      <div class="message-content"><p></p></div>
    `;
    const p = messageEl.querySelector("p");
    chatMessages.appendChild(messageEl);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Efek ketik bot
    if (sender === "bot") {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          p.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 20);
    } else {
      p.textContent = text;
    }
  }

  function showTyping() {
    typingIndicator.style.display = "flex";
  }

  function hideTyping() {
    typingIndicator.style.display = "none";
  }

  // Ganti bahasa dan reset chat
  languageSelect.addEventListener("change", () => {
    chatMessages.innerHTML = "";
    const greeting =
      languageSelect.value === "id"
        ? "Halo! Saya AI Assistant. Ada yang bisa saya bantu? 😊"
        : "Hello! I'm your AI Assistant. How can I help you? 😊";
    appendMessage(greeting, "bot");
  });
});
