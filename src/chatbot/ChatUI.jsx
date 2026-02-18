import { useState } from "react";
import { getCompanyReply } from "./useChatEngine";

export default function ChatUI() {
    const [messages, setMessages] = useState([
        { text: "Welcome to Surendra Tech 👋 How can I help you?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);

        const reply = getCompanyReply(input);

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
        }, 300);

        setInput("");
    };

    return (
        <>

            {isOpen ? (
                <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col p-3 z-50">

                    <div className="flex-1 overflow-y-auto space-y-2">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded max-w-[75%] ${msg.sender === "user"
                                    ? "bg-blue-600 text-white ml-auto"
                                    : "bg-gray-100"
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex mt-2">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && handleSend()}
                            className="flex-1 border p-2 rounded outline-none"
                            placeholder="Ask about our services or pricing..."
                        />
                        <button
                            onClick={handleSend}
                            className="bg-blue-600 text-white px-4 ml-2 rounded"
                        >
                            Send
                        </button>
                    </div>
                </div>
            ) : <div
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-10 right-6 w-35 h-35 cursor-pointer z-50"
            >
                <p>click here to ask questions</p>
                <img
                    src="/Ai Robot Vector Art.gif"
                    alt="Chatbot"
                    className="w-full h-full object-contain"
                />
            </div>}




        </>
    );
}
