"use client";

// Import the useUserAuth hook
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    // Display some of the user's information
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center">
        {user ? (
          <>
            <p className="text-lg mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button
              onClick={firebaseSignOut}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Sign Out
            </button>
            <div className="mt-4">
              <Link href="/week-9/shopping-list" className="text-blue-500 hover:underline">
                Go to Shopping List
              </Link>
            </div>
          </>
        ) : (
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Sign In with GitHub
          </button>
        )}
      </div>
    </div>
  );
}
