import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useState } from "react";

/**
 * This function verifies the user using an email code that is delivered.
 */
export function VerifyEmailForm(): JSX.Element {
  const router                          = useRouter();
  const [code, setCode]                 = useState("");
  const { isLoaded, signUp, setActive } = useSignUp();

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
      const error    = JSON.stringify(err, null, 2);
      const errorObj = JSON.parse(error);
      console.log(errorObj.errors[0].message);
    }
  };
  return (
    <form>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="password" className="font-medium cursor-pointer">
          Password
        </label>
        <Input
          type="verifyEmail"
          required
          className="p-3 bg-white"
          placeholder="Please enter the code"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        ></Input>
      </div>
      <Button className="w-full rounded-lg" onClick={onPressVerify}>
        Verify Email
      </Button>
    </form>
  );
}
