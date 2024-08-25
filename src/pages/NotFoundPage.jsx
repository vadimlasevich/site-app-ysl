import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <span className="text-4xl">404 Not Found</span>
      <Link to="/" className="button mt-10">
        На главную
      </Link>
    </div>
  );
};

export default NotFoundPage;
