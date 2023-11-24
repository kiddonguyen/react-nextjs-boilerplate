import { LayoutMain } from "@/components/layout";
import { useState } from 'react';
import { SignUpForm } from "./SignUpForm";
import { VerifyEmailForm } from "./VerifyEmailForm";

/**
 * Renders the SignUpPage component.
 *
 * @return {JSX.Element} The rendered SignUpPage component.
 */
export default function SignUpPage(): JSX.Element {
  const [pendingVerification] = useState(false);
  return (
    <LayoutMain>
      <h1>Sign Up</h1>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-sm w-full max-w-xl p-10 rounded-lg">
          {!pendingVerification ? (
            <SignUpForm />
          ) : (
            <>
              <VerifyEmailForm />
            </>
          )}
        </div>
      </div>
    </LayoutMain>
  );
}
