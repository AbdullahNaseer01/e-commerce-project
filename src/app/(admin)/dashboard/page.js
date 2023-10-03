'use client'
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { authUser, setIsLoading, isLoading, admins, isAdmin, Admin, setAdmin } = useAuth();
  const router = useRouter();

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     isAdmin()
  //     try {
  //       if (!Admin) {
  //         router.push('/');
  //       }

  //     } catch (error) {
  //       console.error('Error checking admin status:', error);
  //       // Handle the error as needed
  //       router.push("/")
  //     }
  //   }
  //   else {
  //     router.push("/")
  //   }
  // }, [authUser, isAdmin, isLoading, router]);

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     isAdmin()
  //       .then((Admin) => {
  //         if (Admin) {
  //           // User is an admin, you can run your admin-specific code here
  //           toast.success("Welcome admin");
  //         } else {
  //           // User is not an admin, redirect to another page
  //           router.push("/");
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error checking admin status:', error);
  //         // Handle the error as needed
  //         router.push("/");
  //       });
  //   } else {
  //     router.push("/");
  //   }
  // }, [authUser, isLoading, router]);

  // useEffect(() => {
  //   if (!isLoading && authUser) {
  //     isAdmin()
  //     if (Admin) {
  //       toast.success("welcome")
  //     }
  //     else {
  //       router.push("/")
  //     }
  //   } else {
  //     router.push('/');
  //   }
  // }, [authUser, isLoading, router]);

  // useEffect(() => {
  //   const checkAdminStatus = async () => {
  //     if (!isLoading && authUser) {
  //       try {
  //         await isAdmin();
  //         // At this point, user data has loaded and isAdmin check is complete
  //         if (!Admin) {
  //           router.push('/');
  //         }
  //       } catch (error) {
  //         console.error('Error checking admin status:', error);
  //         // Handle the error as needed
  //         router.push('/');
  //       }
  //     } else {
  //       router.push('/');
  //     }
  //   };

  //   checkAdminStatus();
  // }, [authUser, isLoading, isAdmin, Admin, router]);



  // useEffect(() => {
  //   const checkAdminStatus = async () => {
  //     if (!isLoading && authUser) {
  //       try {
  //         await isAdmin();
  //         // At this point, user data has loaded and isAdmin check is complete
  //         if (Admin == false) {
  //           router.push('/');
  //           console.log( Admin, "not admin page")
  //         }
  //       } catch (error) {
  //         console.error('Error checking admin status:', error);
  //         // Handle the error as needed
  //         // router.push('/');
  //         console.log(Admin, "catch page")

  //       }
  //     }
  //   };

  //   checkAdminStatus();
  // }, [authUser, isLoading, isAdmin, Admin, router]);

  useEffect(() => {

    isAdmin()
    if (Admin == false) {
      router.push("/")
    }

  }, [authUser, isLoading, isAdmin, Admin, router])





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
