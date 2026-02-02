// ПРОВЕРКА ЗА БИСКВИТКИ ПРИ ЗАРЕЖДАНЕ
window.onload = function() {
    const choice = localStorage.getItem('cookieChoice');
    if (!choice) {
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

function acceptCookies() {
    localStorage.setItem('cookieChoice', 'accepted');
    document.getElementById('cookie-banner').style.display = 'none';
    alert("Благодарим! Вашите предпочитания са запазени.");
}

function rejectCookies() {
    localStorage.setItem('cookieChoice', 'rejected');
    document.getElementById('cookie-banner').style.display = 'none';
    alert("Изборът ви е записан. Сайтът няма да съхранява лични данни.");
}

// ЛОГИКА ЗА ЧАТБОТА
function toggleChat() {
    const chat = document.getElementById('ai-chat-container');
    if (chat.style.display === 'none' || chat.style.display === '') {
        chat.style.display = 'flex';
    } else {
        chat.style.display = 'none';
    }
}

function sendMessage() {
    const input = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    
    if (input.value.trim() !== "") {
        // Текст на потребителя
        const userMsg = document.createElement('p');
        userMsg.className = 'user-msg';
        userMsg.textContent = input.value;
        chatBody.appendChild(userMsg);
        
        const userText = input.value.toLowerCase();
        input.value = "";

        // Скролване надолу
        chatBody.scrollTop = chatBody.scrollHeight;

        // Отговор от Бота (след малко закъснение)
        setTimeout(() => {
            const botMsg = document.createElement('p');
            botMsg.className = 'bot-msg';
            
            if (userText.includes("промоция") || userText.includes("намаление")) {
                botMsg.textContent = "В момента имаме горещи оферти до -50% за фитнес карти и маратонки!";
            } else if (userText.includes("здравей") || userText.includes("привет")) {
                botMsg.textContent = "Здравей! Аз съм твоят спортен асистент. Как мога да ти помогна?";
            } else if (userText.includes("продукти") || userText.includes("купя")) {
                botMsg.textContent = "Разгледайте нашия каталог в секция 'Продукти' за най-добрата екипировка.";
            } else {
                botMsg.textContent = "Интересен въпрос! Моля, свържете се с наш консултант на телефон 096/303 261 за детайли.";
            }
            
            chatBody.appendChild(botMsg);
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);
    }
}

// Позволява изпращане с бутон Enter
document.getElementById('user-input')?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});