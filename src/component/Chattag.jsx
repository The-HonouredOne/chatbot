import React, { useState } from "react";

const Chattag = () => {
    const reply = [
        { bot: "Hi there, how can I help you?", user: "hello" },
        { bot: "Hi there, how can I help you?", user: "hii" },
        { bot: "Hi there, how can I help you?", user: "what are you" },
        { bot: "Salesforce is a cloud-based CRM platform.", user: "what is salesforce" },
        { bot: "I am just a bot, but I'm doing great!", user: "how are you" },
    ];
    const premessage = [
        "hello",
        "how are you",
        "what is salesforce"
    ];


    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;


        const userMessage = { text: input, sender: "user" };
        setMessages((prev) => [...prev, userMessage]);


        const foundReply = reply.find(
            (item) => item.user.toLowerCase() === input.toLowerCase()
        );

        const botMessage = {
            text: foundReply ? foundReply.bot : "Sorry, I don't understand.",
            sender: "bot",
        };

        setTimeout(() => {
            setMessages((prev) => [...prev, botMessage]);
        }, 500);

        setInput("");
    };

    return (
        <div className="w-80 h-96 border p-3 flex flex-col">


            <div className="flex-1 overflow-y-auto space-y-2">
                {messages.map((item, index) => (
                    <p
                        key={index}
                        className={`p-2 rounded ${item.sender === "user"
                            ? "bg-blue-500 text-white text-right"
                            : "bg-gray-200 text-left"
                            }`}
                    >
                        {item.text}
                    </p>
                ))}
            </div>

            <div>
                <div className="flex gap-5">
                    {
                        premessage.map((text, index) => (
                            <p
                                key={index}
                                onClick={() => sendMessage(text)}
                                className="border bg-gray-100 rounded px-2 py-1 cursor-pointer hover:bg-gray-200"
                            >
                                {text}
                            </p>
                        ))

                    }



                </div>
                <div className="flex mt-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask a question"
                        className="bg-gray-200 p-2 w-full outline-none"
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                    />
                    <button
                        onClick={handleSend}
                        className="bg-blue-800 text-black  px-3"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chattag;
