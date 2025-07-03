
// File: chatbot.js

document.addEventListener("DOMContentLoaded", () => {
  const chatbot = document.getElementById('chatbot');
  const chatMessages = document.getElementById('chatMessages');
  const messageInput = document.getElementById('messageInput');
  const languageSelect = document.getElementById('languageSelect') || { value: 'id' };

  window.toggleChatbot = function () {
    chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
  }

  function addMessage(text, sender = 'bot') {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${sender}`;
    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.textContent = '';
    msgDiv.appendChild(bubble);
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    if (sender === 'bot') {
      let i = 0;
      const typing = setInterval(() => {
        if (i < text.length) {
          bubble.textContent += text.charAt(i);
          i++;
        } else {
          clearInterval(typing);
        }
      }, 25);
    } else {
      bubble.textContent = text;
    }
  }

  window.sendMessage = function () {
    const msg = messageInput.value.trim();
    if (!msg) return;

    addMessage(msg, 'user');
    messageInput.value = '';

    setTimeout(() => {
      const lang = languageSelect.value || 'id';
      let response = '';

      try {
        response = lang === 'id' ? getBotResponseID(msg) : getBotResponseEN(msg);
      } catch (err) {
        response = "Oops, bot gagal menjawab. Periksa file responnya!";
        console.error("Error getting bot response:", err);
      }

      addMessage(response, 'bot');
    }, 500);
  }

  window.handleKeyPress = function (e) {
    if (e.key === 'Enter') sendMessage();
  }

  window.changeLanguage = function () {
    const lang = languageSelect.value;
    const greeting = lang === 'id'
      ? "Halo! Saya AI Assistant. Ada yang bisa saya bantu? 😊"
      : "Hello! I'm your AI Assistant. How can I help you? 😊";

    chatMessages.innerHTML = '';
    addMessage(greeting, 'bot');
  }
});
