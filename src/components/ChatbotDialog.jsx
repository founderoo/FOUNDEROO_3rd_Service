import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, X } from 'lucide-react';

const ChatbotDialog = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const callGitHubAPI = async (chatMessages) => {
    const response = await fetch('https://models.github.ai/inference/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          ...chatMessages
        ],
        temperature: 1.0,
        top_p: 1.0,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      throw new Error(`API call failed: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
  };

  const handleSubmit = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const response = await callGitHubAPI(newMessages);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error calling GitHub API:', error);
      setMessages([
        ...newMessages,
        { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl shadow-xl w-full max-w-3xl h-[85vh] flex flex-col overflow-hidden font-sans">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-purple-100 dark:bg-brand-purple-900 rounded-lg flex items-center justify-center">
              <Bot className="w-4 h-4 text-brand-purple-600" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-base font-semibold text-neutral-900 dark:text-white">Founderoo AI</span>
              <span className="text-xs text-neutral-500 dark:text-neutral-400">Ask Anything About Founderoo</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-neutral-600 dark:hover:text-white transition-colors p-1.5 rounded-lg"
          >
            <X className="w-4 h-4" />
          </button>
        </div>


        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6 scroll-smooth">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex max-w-[85%] items-start gap-3 ${message.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${message.role === 'user' ? 'bg-brand-purple-600' : 'bg-neutral-200 dark:bg-neutral-800'}`}>
                  {message.role === 'user'
                    ? <User className="w-4 h-4 text-white" />
                    : <Bot className="w-4 h-4 text-neutral-700 dark:text-white" />
                  }
                </div>
                <div
                  className={`px-4 py-3 rounded-2xl text-sm leading-relaxed break-words ${message.role === 'user'
                      ? 'bg-brand-purple-600 text-white'
                      : 'bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100'
                    }`}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}

          {/* Typing... */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="flex max-w-[85%] items-center gap-3">
                <div className="w-8 h-8 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-neutral-700 dark:text-white" />
                </div>
                <div className="px-4 py-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 text-sm text-neutral-500 dark:text-neutral-400">
                  Thinking...
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-5 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-end gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              className="w-full px-4 py-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder-neutral-500 dark:placeholder-neutral-400 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-brand-purple-600"
              disabled={isLoading}
            />
            <button
              onClick={handleSubmit}
              disabled={!input.trim() || isLoading}
              className="bg-brand-purple-600 hover:bg-brand-purple-700 text-white p-3 rounded-xl transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotDialog;
