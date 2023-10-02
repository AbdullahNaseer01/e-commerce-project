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
    return <p>..Loading..</p>;
  }

  return (
    <div>
      {isAdmin ? (
        <p>Welcome, {authUser?.email}! This is the admin page.</p>
      ) : (
        <p>You don't have permission to access this page. Redirecting...</p>
      )}
    </div>

  );
};

export default Page;
