import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useSignUp } from "@clerk/nextjs";
import { useState } from "react";
import { toast } from "react-toastify";

/**
 * Renders a sign-up form component.
 *
 * @return {JSX.Element} The sign-up form component.
 */
export function SignUpForm(): JSX.Element {
  const { isLoaded, signUp }                          = useSignUp();
  const [emailAddress, setEmailAddress]               = useState("");
  const [password, setPassword]                       = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  if (!isLoaded) {
    // Handle loading state
    return <>Loading...</>;
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      const error    = JSON.stringify(err, null, 2);
      const errorObj = JSON.parse(error);
      toast.error(errorObj.errors[0].longMessage.replace(/"/g, " "));
    }
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="email" className="font-medium cursor-pointer">
          Email Address
        </label>
        <Input
          placeholder="Enter your email"
          id="email"
          name="email"
          required
          onChange={(e) => setEmailAddress(e.target.value)}
          className="p-3 border-gray-200"
        ></Input>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="password" className="font-medium cursor-pointer">
          Password
        </label>
        <Input
          hasIcon
          type="password"
          id="password"
          name="password"
          required
          className="p-3 border-gray-200"
          onChange={(e) => setPassword(e.target.value)}
        ></Input>
      </div>
      <Button type="submit" className="w-full rounded-lg">
        Sign Up
      </Button>
    </form>
  );
}
