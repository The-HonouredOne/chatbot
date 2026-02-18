import { useState } from "react";
import { getCompanyReply } from "./useChatEngine";
import { useRef, useEffect } from "react";


export default function ChatUI() {
    const [messages, setMessages] = useState([
        { text: "Welcome to Paarsiv Tech 👋 How can I help you?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const bottomRef = useRef(null);



    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);



    const sendMessage = (messageText) => {
        if (!messageText.trim()) return;

        const userMessage = { text: messageText, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);

        const reply = getCompanyReply(messageText);

        setIsTyping(true);

        setTimeout(() => {
            setMessages((prev) => [...prev, { text: reply, sender: "bot" }]);
            setIsTyping(false);
        }, 800);
    };

    const handleSend = () => {
        sendMessage(input);
        setInput("");
    };



    const suggestedQuestions = [
        "What are your pricing plans?",
        "What services do you offer?",
        "How does your process work?",
        "How can I contact support?"
    ];

    return (
        <>

            {isOpen ? (
                <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-xl rounded-xl flex flex-col z-50">

                    
                    <div className="flex justify-between items-center bg-blue-600 text-white px-4 py-2 rounded-t-xl">
                        <span className="font-medium">Paarsiv Tech</span>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:scale-110 transition"
                        >
                            ✕
                        </button>
                    </div>

                    
                    <div className="flex-1 overflow-y-auto space-y-2 p-3">
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

                        {isTyping && (
                            <div className="bg-gray-100 p-2 rounded w-fit">
                                <span className="animate-bounce">•</span>
                                <span className="animate-bounce delay-100">•</span>
                                <span className="animate-bounce delay-200">•</span>
                            </div>
                        )}

                        <div ref={bottomRef} />
                    </div>


                   
                    <div className="px-3 pb-2 flex flex-wrap gap-2">
                        {suggestedQuestions.map((question, index) => (
                            <button
                                key={index}
                                onClick={() => sendMessage(question)}
                                className="text-xs bg-gray-100 hover:bg-blue-100 px-3 py-1 rounded-full transition"
                            >
                                {question}
                            </button>
                        ))}
                    </div>

                 
                    <div className="flex p-3 border-t">
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
                className="fixed bottom-10 right-6 w-30 h-30 cursor-pointer z-50 group"
            >

            
                <div className="absolute bottom-30 right-0 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Click here to ask questions
                </div>

              
                <img
                    src="/Ai Robot Vector Art.gif"
                    alt="Chatbot"
                    className="w-full h-full object-contain hover:scale-105 transition-transform duration-200"
                />
            </div>
            }




        </>
    );
}
