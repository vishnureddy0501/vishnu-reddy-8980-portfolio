import { FiSend } from "react-icons/fi";

export default function InputBox({ input, setInput, onSend, loading }) {
  return (
    <form onSubmit={onSend} className="flex gap-2 p-3 border-t border-[#25213b]">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-[#1a1443] border border-[#25213b] rounded-xl px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-gradient-to-br from-[#8433ff] via-[#8f43ff] to-[#16f2b3] p-2 rounded-xl flex items-center justify-center hover:scale-105 transition-transform disabled:opacity-50"
      >
        <FiSend className="text-white" size={18} />
      </button>
    </form>
  );
}
