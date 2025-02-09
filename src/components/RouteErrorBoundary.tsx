import { useRouteError, isRouteErrorResponse, useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react';

const RouteErrorBoundary = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  let title = 'Something went wrong';
  let message = 'An unexpected error occurred';

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = 'Page not found';
      message = "The page you're looking for doesn't exist or has been moved.";
    } else {
      title = `Error ${error.status}`;
      message = error.statusText || 'An error occurred while processing your request.';
    }
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === 'string') {
    message = error;
  }

  return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-black">
        <div className="max-w-md w-full text-center">
          <AlertTriangle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">{title}</h1>
          <p className="text-white/70 mb-8">{message}</p>
          <div className="flex items-center justify-center gap-4">
            <button
                onClick={() => navigate(-1)}
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
            <button
                onClick={() => navigate('/')}
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Home className="h-4 w-4" />
              Home Page
            </button>
          </div>
        </div>
      </div>
  );
};

export default RouteErrorBoundary;
