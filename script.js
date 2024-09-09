const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");



let userMessage;
const API_KEY = "";

const createChatLi = (message, className) =>{
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}
const generateResponse = (userMessage) => {
    if (userMessage.includes("hi")) {
        return "1.Book Ticket 2.Cancel Ticket 3.Ticket Status";
    }
    else if (userMessage.includes("1")) {
        return "Enter locaion"
    }
    else if (userMessage.includes("trichy")) {
        return "Enter museum name"
    }
    else if (userMessage.includes("rail museum")) {
        return "RS 50 | proceed to pay?(y/n)"
    }
    else if (userMessage.includes("y")) {
        return "ticket booked| ticket id=111"
    }
    else if (userMessage.includes("2")) {
        return "enter ticket id"
    }else if (userMessage.includes("444")) {
        return "ticket canceled"
    }
    else if (userMessage.includes("555")) {
        return "ticket=booked"
    }
    else {
        return "Enter valid option:"
    }
    console.log(userMessage)
    console.log(messages["Hi"])
}

const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

    setTimeout(() => {
        chatbox.appendChild(createChatLi(generateResponse(userMessage), "incoming"));
        

    }, 600);
}
sendChatBtn.addEventListener("click", handleChat)
