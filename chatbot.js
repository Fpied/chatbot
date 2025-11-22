async function sendMessageToBot(message) {
  const response = await fetch("https://hook.eu1.make.com/uwz2nsjo2ahj1vd8n4ko3nrhlp9t7lao", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  const data = await response.text();
  alert("Bot: " + data);
}

function openChat() {
  const msg = prompt("Votre message :");
  if (msg) sendMessageToBot(msg);
}

document.body.innerHTML += `<button onclick="openChat()" style="position:fixed;bottom:20px;right:20px;padding:15px;background:#007BFF;color:white;border-radius:50%;border:none;cursor:pointer;">💬</button>`;
