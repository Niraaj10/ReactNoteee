export default function Loader() {
    return (
      <div className="space-y-3 mt-4 animate-pulse">
        {[1, 2].map((item) => (
          <div
            key={item}
            className="border rounded p-3 flex flex-col gap-2"
          >
            <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
            <div className="h-3 w-full bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>
    );
  }
  