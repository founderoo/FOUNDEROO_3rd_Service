import { Link } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuthStore();

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Access Denied</h2>
          <p className="text-muted-foreground mb-6">You need to sign in to access this page</p>
          <Link
            to="/login"
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90"
          >
            Sign In
          </Link>
        </div>
      </div>
    );
  }

  return children;
};