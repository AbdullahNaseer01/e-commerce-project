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
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../../firebase/Auth';
import { useRouter } from 'next/navigation';

const Page = () => {
  const { authUser, setIsLoading, isLoading, isAdmin } = useAuth();
  // const admins = ["mianabdullah125125@gmail.com"];
  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (authUser && authUser.email) {
  //     console.log("user is available outer if is running")
  //     if (!admins.includes(authUser.email)) {
  //       console.log("user is not admin inner if is running")
  //       router.push('/');
  //     } else {
  //       console.log("loading false and user is an admin else is running")
  //       setIsLoading(false); // User is an admin, set loading to false
  //     }
  //   } else {
  //     console.log("loading false and user is not authenticated")
  //     setIsLoading(false); // User is not authenticated, set loading to false
  //   }
  // }, [authUser, router]);



  // useEffect(() => {
  //   isAdmin()
  //     .then
  //   {
  //     if (isAdmin == false) {
  //       router.push("/")
  //     }
  //   }
  // }, [authUser, router])

  // if(isAdmin == false){
  //   console.log("router if is runnign form admin index ")
  //   router.push("/")
  // }
  useEffect(() => {
    if (!isLoading && authUser) {
      isAdmin()
        .then((IsAdmin) => {
          if (!IsAdmin) {
            router.push('/');
          }
        })
        .catch((error) => {
          console.error('Error checking admin status:', error);
          // Handle the error as needed
        });
    }
  }, [authUser, isAdmin, isLoading, router]);
  if (isLoading) {
    return <p>..................................................................................Loading...</p>;
  }

  return (
    // <div>
    //   {isAdmin ? (
    //     <p>Welcome, {authUser?.email}! This is the admin page.</p>
    //   ) : (
    //     <p>You don't have permission to access this page. Redirecting...</p>
    //   )}
    // </div>
    <>
      admin page
    </>
  );
};

export default Page;
