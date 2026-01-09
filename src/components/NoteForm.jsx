import { useState } from "react";

export default function NoteForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    onAdd({
      id: Date.now(),
      title,
      description,
    });

    setTitle("");
    setDescription("");
    setError("");
  }

  function handleTitleChange(e) {
    setTitle(e.target.value);
    if (e.target.value.trim()) setError("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
        className="w-full border rounded-lg px-3 py-2 mb-1 focus:outline-none focus:ring focus:border-blue-400"
      />

      {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring focus:border-blue-400"
      />

      <button
        type="submit"
        disabled={!title.trim()}
        className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
  );
}
