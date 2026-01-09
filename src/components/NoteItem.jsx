export default function NoteItem({ note, onDelete }) {
    return (
      <div className="border border-white/55 bg-white/25 rounded-lg p-3 flex justify-between items-start">
        <div>
          <h3 className="font-semibold">{note.title}</h3>
          {note.description && (
            <p className="text-sm text-gray-600 mt-1">{note.description}</p>
          )}
        </div>
  
        <button
          onClick={() => onDelete(note.id)}
          className="text-red-500 text-sm hover:text-red-700"
        >
          <img src="delete.svg" alt="delete" className="w-5 h-5 text-red-500" />
        </button>
      </div>
    );
  }
  