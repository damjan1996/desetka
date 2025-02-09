import { useNavigate } from 'react-router-dom';
import { FileQuestion } from 'lucide-react';
import SEO from '../components/SEO';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="404 - Page Not Found"
        description="The page you're looking for doesn't exist."
      />
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <FileQuestion className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl mb-2">Page Not Found</p>
          <p className="text-white/70 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          <div className="space-x-4">
            <button
              onClick={() => navigate(-1)}
              className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Go Back
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Home Page
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFoundPage