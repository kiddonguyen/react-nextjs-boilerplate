import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { LayoutMain } from "@/components/layout";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/router";
import { useState } from "react";
export default function SignInForm() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword]         = useState("");
  const router                          = useRouter();
  // start the sign In process.
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        router.push("/");
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage);
    }
  };
  return (
    <LayoutMain>
      <h1>Sign In</h1>
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-sm w-full max-w-xl p-10 rounded-lg">
          <form onSubmit={handleSubmit}>
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
              Sign In
            </Button>
          </form>
        </div>
      </div>
    </LayoutMain>
  );
}
