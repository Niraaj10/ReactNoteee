import './App.css';
import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";

const STORAGE_KEY = "notes_app_notes";

export default function App() {
  const [notes, setNotes] = useState(() => {
    const storedNotes = localStorage.getItem(STORAGE_KEY);
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  const [loading, setLoading] = useState(true);

  // Loader simulation only
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Persist notes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  function addNote(note) {
    setNotes((prev) => [...prev, note]);
  }

  function deleteNote(id) {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <img src="bg.webp" alt="bg" className="absolute z-0 top-0 left-0 w-full h-full object-cover" />
      <div className="w-full max-w-2xl backdrop-blur-lg bg-gray-50/20 border-white rounded-2xl shadow p-6 relative z-50">
        <h1 className="text-2xl font-bold mb-4 text-center">Notes App</h1>

        <NoteForm onAdd={addNote} />

        {loading && <Loader />}

        {!loading && notes.length === 0 && <EmptyState />}

        {!loading && notes.length > 0 && (
          <NoteList notes={notes} onDelete={deleteNote} />
        )}
      </div>
    </div>
  );
}
