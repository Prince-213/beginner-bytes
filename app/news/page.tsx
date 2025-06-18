"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

import { Label } from "@/components/label";
import { Input } from "@/components/input";
import { createNewsee } from "@/lib/actions/crud";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const page = () => {
  return (
    <div
      className=" w-full h-screen flex flex-col items-center justify-center
  "
    >
      <div className=" w-[90%] lg:w-[30%] mx-auto space-y-[10vh]">
        <div className=" space-y-6">
          <h1 className=" text-5xl text-balance font-semibold leading-[3.5rem]">
            Dear people of the internet, {"don't"} miss Future Tech updates
          </h1>
          <p className=" text-gray-500">
            Join us to gain insights from keynote speakers, participate in
            interactive workshops, and discover cutting-edge advancements
            shaping the future of technology.
          </p>
        </div>

        <SignupFormDemo />
      </div>
    </div>
  );
};

export default page;

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

function SignupFormDemo() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createNewsee({
        email,
      });
      toast.success("You have been added to our newsletter list :)");
    } catch (error) {
      console.error(error);
      toast.error("Error adding you to newsletter :(");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="shadow-input mx-auto w-full rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
        Tech Insight Newsletter
      </h2>
      <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
        Insert your e-mail address
      </p>

      <form
        className="mt-8 transition-all duration-500"
        onSubmit={handleSubmit}
      >
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>

        <button
          className="group/btn flex items-center justify-center relative block h-14 w-full rounded-md bg-gradient-to-br from-blue-700 to-blue-900 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className=" flex items-center justify-center w-full space-x-2">
              <Loader2 className=" animate-spin" />
              <p>Submitting...</p>
            </div>
          ) : (
            <p>Sign up &rarr;</p>
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}
