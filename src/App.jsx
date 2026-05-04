import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import BlogListing from './pages/BlogListing';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Default redirect to /blogs */}
          <Route index element={<Navigate to="/blogs" replace />} />
          
          {/* Blog Routes */}
          <Route path="blogs" element={<BlogListing />} />
          <Route path="blogs/:slug" element={<BlogDetail />} />
          
          {/* Fallback 404 */}
          <Route 
            path="*" 
            element={
              <div className="flex flex-col items-center justify-center min-h-[60vh]">
                <h2 className="text-3xl font-bold">404 - Page Not Found</h2>
                <p className="mt-4 text-gray-600">The content you are looking for doesn't exist.</p>
              </div>
            } 
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;