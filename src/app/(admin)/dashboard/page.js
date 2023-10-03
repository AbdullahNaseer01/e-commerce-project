'use client'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { authUser, setIsLoading, isLoading, admins, isAdmin, Admin, setAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && authUser) {
      isAdmin()
      try {
        if (!Admin) {
          router.push('/');
        }

      } catch (error) {
        console.error('Error checking admin status:', error);
        // Handle the error as needed
        router.push("/")
      }
    }
    else {
      router.push("/")
    }
  }, [authUser, isAdmin, isLoading, router]);
  if (isLoading) {
    return <div className={`fixed min-h-screen min-w-full bg-white inset-0 flex items-center justify-center z-50 ${isLoading ? 'block' : 'hidden'}`}>
      <div className="z-10 bg-white p-4 rounded-lg shadow-lg">
        <img src="Loader.gif" alt="Loading" className="mx-auto w-16 h-16" /> {/* Loader image */}
        <p className="text-center mt-4">Loading...</p>
      </div>
    </div>
  }

  return (
    <div>
      {isAdmin ? (
        <p>Welcome, {authUser?.email}! This is the admin page.</p>
      ) : (
        <p>You dont have permission to access this page. Redirecting...</p>
      )}
    </div>

  );
};

export default Page;
