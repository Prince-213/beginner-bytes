"use client";

import { Input } from "@/components/input";
import { createAttendee } from "@/lib/actions/crud";
import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-label";
import { Loader2 } from "lucide-react";

import Image from "next/image";
import React, { useState } from "react";
import { toast } from "sonner";

const handleWhatsAppClick = async () => {
  const whatsappUrl = "https://wa.me/2348166666666";
  window.open(whatsappUrl, "_blank");
};

const page = () => {
  return (
    <div className=" w-full min-h-screen grid grid-cols-1 lg:grid-cols-2 ">
      <div className="  hidden lg:block bg-blue-500 text-white p-10 relative flex items-end  ">
        <Image
          src={"/beginnersbytes/valdhy-mbemba-UiKQL3VR9hY-unsplash.jpg"}
          alt=""
          fill
          className=" object-center object-cover"
        />
        <div className=" space-y-6 z-50">
          <h1 className=" font-bold text-4xl">Event Registration</h1>
          <p className=" max-w-[80%] leading-normal text-gray-300">
            Unleashing Innovation: Join the Global Gathering of Technology
            Leaders and Visionaries
          </p>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        <div className=" w-[90%] lg:w-[70%]">
          <SignupFormDemo />
          <button
            className=" cursor-pointer group/btn shadow-input relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-gray-50 px-2 py-6 font-medium text-black dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_#262626]"
            type="submit"
            onClick={handleWhatsAppClick}
          >
            <Image
              src={"/icons8-whatsapp-96.png"}
              width={32}
              height={32}
              alt=""
            />
            <span className="text-sm text-neutral-700 dark:text-neutral-300">
              More updates at our Whatsapp group
            </span>
            <BottomGradient />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;

function SignupFormDemo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occupation, setOccupation] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createAttendee({
        name,
        email,
        phoneNumber,
        occupation,
      });
      toast.success("Registration successful :)");

      // Small delay to ensure toast is visible before redirect
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const message = `Hi! I just registered for BeginnerBytes. My name is ${name}`;
      const whatsappUrl = `https://wa.me/2348166666666?text=${encodeURIComponent(message)}`;
      window.location.href = whatsappUrl; // More reliable than window.open
    } catch (error) {
      console.error(error);
      toast.error("Registration failed :(");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" ">
      <div className=" space-y-3">
        <h1 className=" font-bold text-4xl">Event Registration</h1>
        <p className=" max-w-[80%] leading-normal text-gray-600">
          Unleashing Innovation: Join the Global Gathering of Technology Leaders
          and Visionaries
        </p>
      </div>

      <form
        className="my-8 grid grid-cols-1 gap-y-4 lg:gap-y-6 transition-all duration-500 "
        onSubmit={handleSubmit}
      >
        <LabelInputContainer>
          <Label htmlFor="firstname">Name</Label>
          <Input
            id="firstname"
            placeholder="Tyler"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Phone Number</Label>
          <Input
            id="password"
            placeholder="234"
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Occupation</Label>
          <select
            id="email"
            className=" border border-2 shadow-md shadow-gray-200 rounded-sm py-3 pl-2"
            onChange={(e) => setOccupation(e.target.value)}
          >
            <option value="">Select Occupation</option>
            <option value="Teacher">Teacher</option>
            <option value="Student">Student </option>
            <option value="Worker">Worker </option>
            <option value="Others">Others </option>
          </select>
        </LabelInputContainer>

        <button
          className="group/btn flex items-center justify-center cursor-pointer relative block h-14   w-full rounded-sm bg-gradient-to-br from-blue-900 to-blue-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit"
          disabled={loading}
        >
          {loading ? (
            <div className=" flex items-center space-x-2">
              <Loader2 className=" animate-spin" />
              <p>Submitting...</p>
            </div>
          ) : (
            <p>Submit</p>
          )}
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

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
