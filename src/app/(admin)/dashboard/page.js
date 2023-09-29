// import React from 'react'
// import { useAuth } from '../../../../firebase/Auth'
// import { useRouter } from 'next/navigation';


// const page = () => {
//   const {authUser} = useAuth();
//   const admins = ["mianabdullah125125@gmail.com" , ];

//   useEffect(() => {
//     // Check if the current route is in the allowedRoutes array
//     if (!admins.includes(authUser)) {
//       // Redirect to a specific route (e.g., the homepage)
//       router.push('/');
//       return;
//     } else {
//       // Continue with the rest of your component code only if the route is allowed
// // allow the user 
//     }
//   }, [authUser, router]);
  
//   return (
//     <div>this is the index page</div>
//   )
// }

// export default page

'use client'
import React, { useEffect } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { authUser } = useAuth();
  const admins = ["mianabdullah125125@gmail.com"]; // Define the admin email(s) here

  const router = useRouter(); // Initialize the 'router' instance

  useEffect(() => {
    // Check if authUser exists and has an email property
    if (authUser && authUser.email) {
      // Check if the current user's email is in the 'admins' array
      console.log("if part is running from admin")
      if (!admins.includes(authUser.email)) {
        // Redirect to a specific route (e.g., the homepage)
        console.log("admin check runnign" , authUser)
        router.push('/');
      }
      // No need for an 'else' condition; code execution continues here only for admin users
    } else {
      // Handle the case when authUser is not available
      // You can redirect the user or display an error message
      console.log("ëlse part is running from admin")
      router.push('/'); // Redirect to the homepage or another appropriate route
    }
  }, [authUser, router]);

  return (
    <div>
      {admins.includes(authUser?.email) ? (
        <p>Welcome, {authUser.email}! This is the admin page.</p>
      ) : (
        <p>You don't have permission to access this page. Redirecting...</p>
      )}
    </div>
  );
};

export default Page;
