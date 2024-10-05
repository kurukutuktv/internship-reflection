// app/my-journal/page.tsx
export default function JournalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
      <div className="max-w-2xl w-full p-6">
        <div className="card bg-base-100 shadow-lg mb-4">
          <div className="card-body">
            <h2 className="card-title">OJT Journal</h2>
            <p>
              Throughout my internship at Fligno Software Philippines Inc., I had the opportunity to work on various projects, including:
            </p>
            <ul className="list-disc ml-6">
              <li>Project A: Description and contributions.</li>
              <li>Project B: Description and contributions.</li>
              <li>Project C: Description and contributions.</li>
            </ul>
            <p className="mt-4">
              <strong>Photos and Screenshots:</strong>
            </p>
            {/* Add photos or screenshots here */}
          </div>
        </div>
      </div>
    </div>
  );
}
