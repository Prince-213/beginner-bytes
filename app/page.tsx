"use client";

import Image from "next/image";
import { Calendar, MapPin, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn, eventDetails, partners, schedules } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import { speakers, workshopTopics } from "@/lib/utils";

import { useRouter } from "next/navigation";

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hoverEffect = {
  scale: 1.03,
  transition: { duration: 0.3 },
};

const tapEffect = {
  scale: 0.98,
};

export default function FutureTechSummit() {
  // Intersection Observer hooks for scroll animations
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [scheduleRef, scheduleInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [speakersRef, speakersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const flyers = [
    {
      alt: "Flyer 1",
      src: "/beginnersbytes/FLYER5.png",
    },
    {
      alt: "Flyer 2",
      src: "/beginnersbytes/FLYER2.png",
    },
    {
      alt: "Flyer 3",
      src: "/beginnersbytes/FLYER1.png",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === flyers.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 3 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [flyers.length]);

  const handleButtonClick = () => {
    // Event details (modify these with your actual event information)
    const eventDetails = {
      title: "Beginners Bite Tech Event",
      description:
        "A tech event for beginners covering programming and digital marketing",
      location: "New Haven, FirstBank",
      startDate: "20240815T090000", // Format: YYYYMMDDTHHMMSS
      timeZone: "UTC", // Change to your timezone if needed
    };

    // Generate Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      eventDetails.title
    )}&details=${encodeURIComponent(
      eventDetails.description
    )}&location=${encodeURIComponent(eventDetails.location)}&dates=${
      eventDetails.startDate
    }&ctz=${eventDetails.timeZone}`;

    // Open Google Calendar in a new tab with pre-filled event
    window.open(googleCalendarUrl, "_blank");
  };

  const router = useRouter();

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      {/* Hero Section */}
      <main
        ref={heroRef}
        className="px-4 md:px-6 lg:px-8 h-fit mt-32 z-20 w-full lg:w-[80%] mx-auto relative"
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="w-[30rem] h-[30rem] bg-gray-300/90 rounded-[50%] blur-3xl absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></div>

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

        <motion.div
          className="max-w-6xl z-50 relative mx-auto text-center md:py-20"
          initial="hidden"
          animate={heroInView ? "show" : "hidden"}
          variants={container}
        >
          {/* Event Details Badges */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2"
            variants={item}
          >
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 border border-blue-500/40 flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full"
            >
              <Calendar className="w-10 h-10 scale-125" size={40} />
              <p>{eventDetails.date}</p>
            </Badge>
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 border border-blue-500/40 flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full"
            >
              <MapPin className="w-10 h-10 scale-125" size={40} />
              <p>{eventDetails.location}</p>
            </Badge>
          </motion.div>

          {/* Main Title with Device Graphic */}
          <motion.div className="relative mb-2" variants={slideUp}>
            <h1 className="lg:text-4xl leading-[3rem] text-4xl bg-gradient-to-b from-neutral-500 to-neutral-900 bg-clip-text text-transparent py-8 font-semibold md:text-6xl lg:text-8xl lg:leading-[4rem]">
              Beginner
              <br className=" lg:block hidden" />
              Bytes
              <span className="relative hidden lg:inline-block ml-4">
                <motion.div
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: -12, opacity: 1 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className=" mr-7 overflow-hidden translate-y-5 relative transition-all duration-150 delay-75 cursor-pointer relative lg:w-[140px] lg:h-[125px] w-[95px] h-[100px] shadow-md border-2 border-gray-300 shadow-gray-400 rounded-2xl "
                >
                  <Image
                    src={
                      "/beginnersbytes/desola-lanre-ologun-kwzWjTnDPLk-unsplash.jpg"
                    }
                    alt=""
                    fill
                  />
                </motion.div>
              </span>
              <div className=" w-full lg:hidden flex items-center justify-center py-5">
                <span className=" relative lg:hidden ml-4">
                  <motion.div
                    initial={{ rotate: 12, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className=" mr-7 overflow-hidden  relative transition-all duration-150 delay-75 cursor-pointer relative lg:w-[128px] lg:h-[135px] w-[75vw] h-[250px] shadow-md border-2 border-gray-300 shadow-gray-400 rounded-2xl "
                  >
                    <Image
                      src={
                        "/beginnersbytes/desola-lanre-ologun-kwzWjTnDPLk-unsplash.jpg"
                      }
                      alt=""
                      fill
                    />
                  </motion.div>
                </span>
              </div>
              2025
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-[15px] font-medium text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Unleashing Innovation: Join the Global Gathering of Technology
            Leaders and Visionaries
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="lg:flex-row flex flex-col lg:space-x-4 space-x-0 space-y-4 lg:space-y-0 items-center justify-center"
            variants={item}
          >
            <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
              <Button
                onClick={() => router.push("/register")}
                className="bg-blue-600 hover:bg-blue-700 text-white w-[11rem] py-6 rounded-full text-base font-medium"
              >
                <p>Register Now</p>
                <Edit className="w-5 h-5 mr-2" />
              </Button>
            </motion.div>
            <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
              <Button
                onClick={handleButtonClick}
                className="bg-blue-600 hover:bg-blue-700 text-white w-[12rem] py-6 rounded-full text-base font-medium"
              >
                <p>Add to Calendar</p>
                <Calendar className="w-5 h-5 mr-2" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </main>

      <motion.section
        ref={contentRef}
        className="lg:w-[80%] w-[95%] w-full mx-auto px-6 py-8"
        initial="hidden"
        animate={contentInView ? "show" : "hidden"}
        variants={fadeIn}
      >
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={container}
        >
          {/* Main Content */}
          <motion.div variants={item} className=" lg:col-span-2">
            <motion.div whileHover={hoverEffect}>
              <Card className="lg:col-span-2 rounded-sm pb-10 h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl overflow-hidden">
                <CardContent className="pt-2 px-8 min-h-full">
                  <div className="min-h-full flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between">
                    <div className="lg:w-[40%] min-h-full flex flex-col justify-between">
                      <div>
                        <h2 className=" text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 leading-tight">
                          Gain Insights at BeginnerBytes
                        </h2>
                        <p className="text-gray-600 mb-6">
                          Join us to connect, learn, and be inspired by the
                          forefront of technological progress.
                        </p>
                      </div>
                      <div className="flex flex-col-reverse gap-4">
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-700 border border-blue-500/40 flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full"
                        >
                          <Calendar className="w-10 h-10 scale-125" size={40} />
                          <p>{eventDetails.date}</p>
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-blue-100 text-blue-700 border border-blue-500/40 flex items-center space-x-1 px-4 py-2 text-sm font-medium rounded-full"
                        >
                          <MapPin className="w-10 h-10 scale-125" size={40} />
                          <p>{eventDetails.location}</p>
                        </Badge>
                      </div>
                    </div>
                    <div className="relative lg:w-[55%] h-[21rem] ">
                      <div className=" border shadow-md rounded-md overflow-hidden">
                        <Image
                          src={`${flyers[currentImageIndex].src}`}
                          alt={flyers[currentImageIndex].alt}
                          fill
                          className="object-cover transition-opacity duration-500"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh]  w-full bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="min-h-full space-y-10 lg:space-y-0 flex flex-col justify-between">
                  <motion.p
                    className="text-2xl font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    This is a tech event where beginners learn programming and
                    digital marketing through hands-on sessions and practical
                    workshops.
                  </motion.p>

                  <motion.p
                    className="text-sm text-gray-400 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    Join Beginners Bytes to learn from expert speakers and get
                    hands-on with the latest tech trends in programming and
                    digital marketing—your gateway to the future of technology!
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="py-3 px-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    Keynote Speakers:
                  </h3>
                  <motion.div
                    className="space-y-6 lg:space-y-3"
                    variants={container}
                  >
                    {speakers.slice(0, 4).map((speaker, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-3"
                        variants={item}
                        whileHover={{ x: 5 }}
                      >
                        <div className="h-20 w-20 lg:w-16 lg:h-16 rounded-2xl antialiased overflow-hidden relative">
                          <Image
                            src={speaker.image || "/placeholder.svg"}
                            alt={speaker.name}
                            fill
                            className="rounded-md object-center object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold lg:text-lg text-xl text-gray-900">
                            {speaker.name}
                          </h4>
                          <p className="text-base lg:text-sm text-gray-600">
                            {speaker.title}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* <motion.div variants={item}>
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="min-h-full flex flex-col justify-between py-3 px-8">
                  <h3 className="text-2xl text-center lg:text-left font-semibold text-gray-900 mb-4">
                    Agenda
                  </h3>
                  <br />
                  <div className="space-y-4">
                    {agenda.map((agenda, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ y: -4 }}
                        initial={{ opacity: 0, y: -40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.3 }}
                        className="flex lg:flex-row flex-col items-center justify-between"
                      >
                        <div className="flex items-center gap-2 mb-2 lg:w-[15%]">
                          <Badge
                            variant="outline"
                            className="text-blue-600 rounded-xl bg-gray-100 text-base font-semibold py-4 w-full"
                          >
                            Day {index + 1}
                          </Badge>
                        </div>
                        <p className="text-base text-center lg:text-left text-gray-600 w-[80%]">
                          {agenda}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div> */}

          <motion.div variants={item} className=" lg:col-span-2">
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="px-8 min-h-full flex flex-col justify-between py-3">
                  <div>
                    <h3 className="lg:text-4xl text-3xl font-semibold text-gray-900 mb-2">
                      Workshops and Sessions
                    </h3>
                    <p className="text-gray-600 lg:text-lg lg:leading-loose mb-4">
                      BeginnerBytes is a dynamic tech event designed for
                      aspiring developers, curious minds, and tech enthusiasts
                      ready to dive into the world of coding, AI, and digital
                      innovation. Whether you&apos;re taking your first steps or
                      leveling up your skills, this is your gateway to hands-on
                      learning, expert insights, and real-world tech
                      applications.
                    </p>
                  </div>
                  <motion.div
                    className="flex flex-wrap gap-2"
                    variants={container}
                  >
                    {workshopTopics.map((topic, index) => (
                      <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="text-sm font-semibold text-blue-700 bg-blue-100 rounded-full px-2 py-2"
                        >
                          {topic}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="px-8 min-h-full flex flex-col justify-between py-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500 mb-3">
                      Unleashing Innovation:
                    </p>
                    <h3 className="text-4xl font-semibold text-gray-900">
                      The Global Gathering of Visionary Leaders
                    </h3>
                  </div>
                  <div>
                    <p className="font-medium text-zinc-600">Partners</p>
                    <InfiniteMovingCards items={partners} />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={item}>
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="px-8 py-3 min-h-full flex flex-col justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Venue
                  </h3>
                  <div className="space-y-5">
                    <div className="flex items-center space-x-5">
                      <div className="flex items-center gap-2 mb-2 w-[15%]">
                        <div className="text-blue-600 flex border items-center justify-center rounded-xl bg-gray-100 text-base font-semibold py-4 w-full">
                          <MapPin size={24} />
                        </div>
                      </div>
                      <div className="w-[80%]">
                        <h1 className="font-semibold">Enugu State</h1>
                        <p className="text-base text-gray-600">
                          New, Heaven Road
                        </p>
                      </div>
                    </div>
                    <div className="w-full">
                      <motion.div whileHover={{ scale: 1.02 }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3964.501964977956!2d7.51204!3d6.4579038!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a3f5379aabc9%3A0xd2e875d8a74597f9!2sFirst%20Bank%20-%20Enugu%20New%20Haven%20Branch!5e0!3m2!1sen!2sng!4v1749557727290!5m2!1sen!2sng"
                          width="300"
                          height="200"
                          className="rounded-xl border-2 border-zinc-600 shadow-[0_3px_10px_rgb(0,0,0,0.2)] min-w-full"
                          style={{
                            border: 0,
                          }}
                          allowFullScreen
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="">
            <motion.div whileHover={hoverEffect}>
              <Card className="rounded-sm h-fit lg:h-[44vh] bg-white border-gray-100 shadow-gray-200 shadow-xl">
                <CardContent className="px-8 min-h-full flex flex-col justify-between py-3">
                  <div>
                    <h3 className="text-4xl font-semibold text-gray-900 mb-4">
                      Join us this year at BeginnerByte 2025
                    </h3>
                    <p className="text-gray-500 mb-4">
                      Secure your spot today! Early bird discounts available
                      until August 31, 2024.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="flex-col flex space-y-4 items-end justify-end w-full">
                      <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
                        <Button
                          onClick={() => router.push("/register")}
                          className="bg-blue-600 hover:bg-blue-700 text-white w-[11rem] py-6 rounded-full text-base font-medium"
                        >
                          <p>Register Now</p>
                          <Edit className="w-5 h-5 mr-2" />
                        </Button>
                      </motion.div>
                      <motion.div whileHover={hoverEffect} whileTap={tapEffect}>
                        <Button
                          onClick={handleButtonClick}
                          className="bg-blue-600 hover:bg-blue-700 text-white w-[12rem] py-6 rounded-full text-base font-medium"
                        >
                          <p>Add to Calendar</p>
                          <Calendar className="w-5 h-5 mr-2" />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <motion.section
        ref={scheduleRef}
        className=" w-[95%] lg:w-[80%] mx-auto px-6 pt-[10vh] lg:pt-[20vh]"
        initial="hidden"
        animate={scheduleInView ? "show" : "hidden"}
        variants={fadeIn}
      >
        {/* Title and Date */}
        <motion.div className="text-center py-4" variants={slideUp}>
          <h1 className="text-5xl font-bold text-gray-900 mb-10">Programme</h1>
          <p className="text-gray-500">
            <span className="font-semibold text-gray-600">Friday</span>{" "}
            {eventDetails.date}
          </p>
        </motion.div>

        {/* Day Tabs */}

        {/* Schedule Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
        >
          {schedules.map((item, index) => (
            <motion.div
              key={index}
              initial={{ y: -20 }}
              whileInView={{ y: 0 }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 space-y-5">
                  {/* Speaker Info or Break Icon */}

                  <div className="flex items-center space-x-4 mb-8">
                    <motion.div
                      className="relative w-[4rem] rounded-2xl overflow-hidden h-[4rem] bg-red-400"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Image
                        src={
                          item.image || "/placeholder.svg?height=60&width=60"
                        }
                        alt={item.name || "Speaker"}
                        fill
                        className="rounded-2xl mr-4 bg-center bg-cover"
                      />
                    </motion.div>
                    <div>
                      <h3 className="font-semibold lg:text-xl text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-base text-gray-600">{item.title}</p>
                    </div>
                  </div>

                  {/* Session Title */}
                  <h2 className=" text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    {item.course}
                  </h2>

                  {/* Description */}
                  <p className="text-gray-600 text-[15px] mb-10 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Time and Venue */}
                  <div className="flex items-center justify-between pt-4">
                    <motion.div whileHover={{ scale: 1.05 }}>
                      <Badge
                        variant={"outline"}
                        className="text-sm p-3 rounded-full font-medium text-blue-700 bg-zinc-100"
                      >
                        {item.time}
                      </Badge>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.section
        ref={speakersRef}
        className="w-[95%] lg:w-[80%] mx-auto px-6 pt-[10vh] lg:pt-[20vh]"
        initial="hidden"
        animate={speakersInView ? "show" : "hidden"}
        variants={fadeIn}
      >
        <motion.h1
          className="text-center text-4xl font-semibold mb-[10vh]"
          variants={slideUp}
        >
          Speakers
        </motion.h1>
        <motion.div
          className="w-full grid grid-cols-1 lg:grid-cols-4 gap-4"
          variants={container}
        >
          {speakers.map((item, index) => (
            <motion.div
              key={index}
              className="w-full hover:scale-105   h-[45vh] rounded-sm overflow-hidden shadow-lg relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Image
                src={item.image}
                alt={"Speaker"}
                fill
                className="rounded-2xl mr-4 bg-center bg-cover "
              />

              <div className="space-y-1 absolute w-full h-full flex flex-col items-start justify-end bg-gradient-to-b from-transparent to-black  pl-6 pb-6  ">
                <motion.h1
                  className="text-3xl font-medium text-zinc-50"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.name}
                </motion.h1>
                <motion.p
                  className="text-zinc-100"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {item.title}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <motion.footer
        className="px-4 md:px-6 lg:px-8 h-fit mt-32 w-full mx-auto relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        <div className="w-[30rem] h-[30rem] bg-gray-300/90 rounded-[50%] blur-3xl absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]"></div>

        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <div className="max-w-6xl z-50 relative mx-auto text-center md:py-20">
          {/* Event Details Badges */}

          <motion.p
            className="text-[15px] font-medium text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Unleashing Innovation
          </motion.p>

          {/* Main Title with Device Graphic */}
          <motion.div
            className="relative mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="lg:text-5xl text-4xl bg-gradient-to-b from-neutral-500 to-neutral-900 bg-clip-text text-transparent pb-8 font-semibold w-full lg:text-8xl leading-[6rem]">
              Beginner
              <br />
              Bytes
              <span className="relative inline-block ml-4">
                <motion.div
                  initial={{ rotate: -12, opacity: 0 }}
                  animate={{ rotate: -12, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <Image
                    src="/marvin-meyer-SYTO3xs06fU-unsplash.jpg"
                    alt="Device mockup"
                    width={128}
                    height={960}
                    className="inline-block shadow-md border-2 border-gray-300 shadow-gray-400 rounded-2xl transform mr-4"
                  />
                </motion.div>
              </span>
              2025
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-[15px] font-medium text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Join the Global Gathering of Technology Leaders and Visionaries
          </motion.p>

          {/* CTA Buttons */}
        </div>

        <motion.div
          className="lg:w-[80%] w-[95%] space-y-6 lg:space-y-0 lg:pt-[10vh] pt-[5vh] pb-[10vh] text-black relative mx-auto flex lg:flex-row flex-col items-center justify-between z-50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="space-y-5">
            <p>Follow us on</p>
            <motion.div
              className="flex items-center space-x-2"
              variants={container}
            >
              {[
                "/icons8-facebook-96(1).png",
                "/icons8-instagram-96.png",
                "/icons8-whatsapp-96.png",
              ].map((icon, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Image src={icon} width={25} height={25} alt="" />
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className=" text-center lg:text-left">
            <p>2025 &copy; All rights reserved</p>
            <p>Built by CODAFRI</p>
          </div>
        </motion.div>
      </motion.footer>
    </div>
  );
}
