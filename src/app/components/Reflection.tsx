// app/reflection/page.tsx
import { FaComments, FaClock, FaLightbulb, FaUserFriends, FaThumbsUp, FaAward } from 'react-icons/fa';

export default function ReflectionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-green-500 flex items-center justify-center">
      <div className="max-w-2xl w-full p-6 space-y-4">

        {/* Reflection Page Card */}
        <div className="card bg-base-100 shadow-lg transition-transform transform hover:scale-105">
          <div className="card-body">
            <h2 className="card-title text-xl font-bold flex items-center">
              <FaComments className="mr-2 text-2xl" /> Reflection Page
            </h2>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaUserFriends className="mr-2 text-xl" /> Department Overview
            </h3>
            <p>The department focuses on software development, utilizing Agile methodologies to enhance productivity and quality.</p>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaThumbsUp className="mr-2 text-xl" /> My Contribution
            </h3>
            <p>I contributed by streamlining processes and enhancing team collaboration through effective communication.</p>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaClock className="mr-2 text-xl" /> Time Management
            </h3>
            <p>I logged over 200 hours of productive work, focusing on key deliverables and meeting deadlines.</p>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaLightbulb className="mr-2 text-xl" /> Key Learnings
            </h3>
            <p>I learned the importance of adaptability, teamwork, and continuous learning in a fast-paced environment.</p>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaAward className="mr-2 text-xl" /> Memorable Experience
            </h3>
            <p>The most memorable event was the team outing, which fostered better relationships among team members.</p>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaComments className="mr-2 text-xl" /> Recommendations
            </h3>
            <p>I recommend more team-building activities to strengthen collaboration and morale.</p>
            
            <h3 className="font-semibold mt-4 flex items-center">
              <FaLightbulb className="mr-2 text-xl" /> Advice for Future Interns
            </h3>
            <p>Be proactive, ask questions, and embrace challenges. Your growth is in your hands.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
