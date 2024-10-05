// app/page.tsx
import { FaUser, FaThumbsUp, FaThumbsDown, FaTrophy } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
      <div className="max-w-3xl w-full p-6 space-y-8">
        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaUser className="mr-2 text-2xl" /> About Me
            </h2>
            <p className="text-lg">
              I am Randy B. Familara, a Software Engineer and Technical Trainer with over three years of experience in system analysis and programming.
            </p>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaThumbsUp className="mr-2 text-2xl" /> Likes
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li>Learning new programming languages</li>
              <li>Teaching and mentoring</li>
              <li>Collaborating on projects</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaThumbsDown className="mr-2 text-2xl" /> Dislikes
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li>Unclear project requirements</li>
              <li>Negativity in the workplace</li>
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaTrophy className="mr-2 text-2xl" /> Achievements
            </h2>
            <ul className="list-disc ml-6 text-lg">
              <li>Best Programmer 2018</li>
              <li>Best Thesis 2018</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
