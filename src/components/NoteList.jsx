import NoteItem from "./NoteItem";

export default function NoteList({ notes, onDelete }) {
  return (
    <div className="space-y-3 max-h-[500px] overflow-y-auto">
      {notes.map((note) => (
        <NoteItem key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
}
