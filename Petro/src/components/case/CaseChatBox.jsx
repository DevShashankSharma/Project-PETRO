import { useState, useRef, useEffect } from "react";
import { Send, User, Shield, CheckCircle2 } from "lucide-react";

const initialMessages = [
    {
        id: 1,
        sender: "user",
        name: "Ravi Sharma",
        message: "Hello Sir, I wanted to know the status of my theft case.",
        time: "10:05 AM",
    },
    {
        id: 2,
        sender: "officer",
        name: "SI Arjun Meena",
        message: "Hi Ravi, your FIR has been registered and is under investigation.",
        time: "10:07 AM",
    },
    {
        id: 3,
        sender: "user",
        name: "Ravi Sharma",
        message: "Thank you, please let me know if there is any update.",
        time: "10:08 AM",
    },
    {
        id: 4,
        sender: "officer",
        name: "SI Arjun Meena",
        message: "Sure, I’ll keep you posted. Our team is working on it.",
        time: "10:10 AM",
    },
];

export default function CaseChatBox() {
    const [messages, setMessages] = useState(initialMessages);
    const [input, setInput] = useState("");
    const [sending, setSending] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = () => {
        if (input.trim()) {
            setSending(true);
            setTimeout(() => {
                const newMessage = {
                    id: messages.length + 1,
                    sender: "user",
                    name: "Ravi Sharma",
                    message: input,
                    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                };
                setMessages([...messages, newMessage]);
                setInput("");
                setSending(false);
            }, 400); // Simulate sending delay
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleSend();
    };

    return (
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-3xl shadow-2xl h-[520px] flex flex-col">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white px-6 py-4 rounded-t-3xl flex items-center gap-3 relative">
                <Shield className="w-7 h-7 text-yellow-300 animate-pulse" />
                <span className="font-bold text-lg tracking-wide">Case Chat Support</span>
                <span className="ml-auto text-xs bg-blue-800/30 px-3 py-1 rounded-full font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Secure
                </span>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-blue-50/60 via-white/80 to-white dark:from-gray-900 dark:via-gray-900/80 dark:to-gray-950 custom-scrollbar">
                {messages.map((msg, idx) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-start" : "justify-end"}`}
                    >
                        <div className={`flex items-end gap-2 ${msg.sender === "user" ? "" : "flex-row-reverse"}`}>
                            {/* Avatar */}
                            <div className={`rounded-full w-9 h-9 flex items-center justify-center shadow-md border-2
                                ${msg.sender === "user"
                                    ? "bg-blue-100 text-blue-700 border-blue-200"
                                    : "bg-indigo-600 text-white border-indigo-400"
                                }`}>
                                {msg.sender === "user" ? <User size={20} /> : <Shield size={20} />}
                            </div>
                            {/* Bubble */}
                            <div
                                className={`max-w-xs md:max-w-sm p-3 rounded-2xl shadow-md text-sm relative group
                                    ${msg.sender === "user"
                                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-bl-none"
                                        : "bg-blue-600 text-white rounded-br-none"
                                    }`}
                            >
                                <div className="font-semibold mb-1 text-xs opacity-80 flex items-center gap-1">
                                    {msg.name}
                                    {msg.sender === "officer" && (
                                        <span className="ml-1 px-2 py-0.5 rounded-full bg-yellow-100 text-yellow-800 text-[10px] font-bold">Officer</span>
                                    )}
                                </div>
                                <div>{msg.message}</div>
                                <div className="text-right text-[10px] mt-1 opacity-60">{msg.time}</div>
                                {/* Message status tick for last user message */}
                                {idx === messages.length - 1 && msg.sender === "user" && (
                                    <span className="absolute bottom-1 right-2 text-blue-400 opacity-80">
                                        <CheckCircle2 size={14} />
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-3 flex items-center gap-3 bg-white dark:bg-gray-900 rounded-b-3xl">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Type your message..."
                    className="flex-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                    disabled={sending}
                />
                <button
                    onClick={handleSend}
                    className={`bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg transition-all duration-150 active:scale-95 flex items-center justify-center disabled:opacity-60`}
                    aria-label="Send"
                    disabled={sending || !input.trim()}
                >
                    <Send size={20} className={sending ? "animate-spin" : ""} />
                </button>
            </div>
        </div>
    );
}
