import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Hi! Looking to hire a new team member? I can help you find the right AI agent.",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      let response = "";
      const lowerInput = inputValue.toLowerCase();

      if (lowerInput.includes("sales") || lowerInput.includes("ecommerce") || lowerInput.includes("adam")) {
        response = "Perfect! Adam would be a great fit. He's our E-commerce Specialist who excels at managing WhatsApp outreach, recovering abandoned carts, and keeping customers updated. Would you like me to help you hire Adam?";
      } else if (lowerInput.includes("hr") || lowerInput.includes("employee") || lowerInput.includes("sarah")) {
        response = "Great choice! Sarah is our HR Assistant who can instantly answer employee FAQs and handle onboarding. She learns from your company policies and gets smarter every day. Shall we move forward with hiring Sarah?";
      } else if (lowerInput.includes("legal") || lowerInput.includes("document") || lowerInput.includes("omar")) {
        response = "Excellent! Omar is our Junior Paralegal who can scan thousands of documents to find specific clauses and precedents in seconds. Perfect for legal research. Would you like to hire Omar?";
      } else if (lowerInput.includes("custom") || lowerInput.includes("different") || lowerInput.includes("specific")) {
        response = "I understand you need something more specialized. We can build a custom AI agent tailored to your exact workflow. Would you like to book a consultation call to discuss your requirements?";
      } else if (lowerInput.includes("yes") || lowerInput.includes("hire") || lowerInput.includes("interested")) {
        response = "Wonderful! Let me scroll you to the right section where you can click the 'Hire' button to get started. Our team will reach out within 24 hours to complete the onboarding!";
        setTimeout(() => {
          const agentsSection = document.getElementById("agents");
          agentsSection?.scrollIntoView({ behavior: "smooth" });
        }, 1000);
      } else {
        response = "I'd be happy to help! We have three specialized AI agents available:\n\n• Adam (Sales & E-commerce)\n• Sarah (HR & People Ops)\n• Omar (Legal & Research)\n\nWhich area are you looking to strengthen?";
      }

      const assistantMessage = {
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 800);
  };

  return (
    <>
      {/* Chat Widget */}
      <div
        className={cn(
          "fixed bottom-6 right-6 z-50 transition-all duration-300",
          isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
        )}
      >
        <Card className="w-[380px] h-[500px] shadow-2xl border-border/50 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-accent p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">HireStack Assistant</h3>
                <p className="text-white/80 text-xs">Online now</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3 text-sm whitespace-pre-wrap",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border shadow-sm"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-background">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex gap-2"
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1"
              />
              <Button type="submit" size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </Card>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-gradient-to-br from-primary to-accent text-white",
          "flex items-center justify-center",
          isOpen && "scale-0 opacity-0 pointer-events-none"
        )}
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse" />
      </button>
    </>
  );
};
