import { Button } from "@/components/button";
import { LayoutMain } from "@/components/layout";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Page() {
  const { isLoaded, signUp, setActive }               = useSignUp();
  const [emailAddress, setEmailAddress]               = useState("");
  const [password, setPassword]                       = useState("");
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode]                               = useState("");
  const router                                        = useRouter();
  if (!isLoaded) {
    // Handle loading state
    return null;
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
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async (e: any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });
      if (completeSignUp.status !== "complete") {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2));
      }
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.push("/");
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };
  return (
    <LayoutMain>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-sm w-full max-w-xl p-10 rounded-lg">
          {!pendingVerification ? (
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="email" className="font-medium cursor-pointer">
                  Email Address
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="p-3 rounded-lg border border-gray-200 bg-white outline-none font-medium"
                  placeholder="Enter your email"
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 mb-5">
                <label
                  htmlFor="password"
                  className="font-medium cursor-pointer"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  className="p-3 rounded-lg border border-gray-200 bg-white outline-none font-medium"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full rounded-lg">
                Sign Up
              </Button>
            </form>
          ) : (
            <>
              <form>
                <div className="flex flex-col gap-2 mb-5">
                  <label
                    htmlFor="password"
                    className="font-medium cursor-pointer"
                  >
                    Password
                  </label>
                  <input
                    value={code}
                    name="password"
                    className="p-3 rounded-lg border border-gray-200 bg-white outline-none font-medium"
                    placeholder="Code..."
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <Button className="w-full rounded-lg" onClick={onPressVerify}>
                  Verify Email
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </LayoutMain>
  );
}
