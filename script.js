document.addEventListener("DOMContentLoaded", () => {
  const chatbotWindow = document.getElementById("chatbot-window");
  const toggleBtn = document.getElementById("chatbot-toggle");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const messageInput = document.getElementById("message-input");
  const chatMessages = document.getElementById("chat-messages");
  const languageSelect = document.getElementById("language-selector");
  const typingIndicator = document.getElementById("typing-indicator");

  // === Toggle Chatbot Window ===
  toggleBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "flex";
    document.getElementById("notification-badge").style.display = "none";
  });

  closeBtn.addEventListener("click", () => {
    chatbotWindow.style.display = "none";
  });

  // === Send Message Events ===
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
      let response;

      try {
        response = lang === "id" ? getBotResponseID(msg) : getBotResponseEN(msg);
      } catch (err) {
        response = "Oops, bot gagal menjawab. Cek file responnya.";
        console.error("Response error:", err);
      }

      appendMessage(response, "bot");
    }, 600);
  }

  function appendMessage(text, sender) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `message ${sender}-message`;
    msgDiv.innerHTML = `
      <div class="message-avatar">
        <i class="fas fa-${sender === "bot" ? "robot" : "user"}"></i>
      </div>
      <div class="message-content"><p></p></div>
    `;
    const messageText = msgDiv.querySelector("p");
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Bot typing effect
    if (sender === "bot") {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          messageText.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 25);
    } else {
      messageText.textContent = text;
    }
  }

  function showTyping() {
    typingIndicator.style.display = "flex";
  }

  function hideTyping() {
    typingIndicator.style.display = "none";
  }

  // === Language Change Event ===
  languageSelect.addEventListener("change", () => {
    const greeting =
      languageSelect.value === "id"
        ? "Halo! Saya AI Assistant. Ada yang bisa saya bantu? 😊"
        : "Hello! I'm your AI Assistant. How can I help you? 😊";

    chatMessages.innerHTML = "";
    appendMessage(greeting, "bot");
  });
});
