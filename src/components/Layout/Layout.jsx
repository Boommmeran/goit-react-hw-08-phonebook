import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import AppBar from 'components/AppBar';
import Loader from 'components/Loader';


export default function Layout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
