"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Experiences with different tech stacks, combined with suitable software architectural patterns like Pub-Sub Architecture, Distributed Systems and Client-Server Architecture.",
    href: " ",
  },
  {
    num: "02",
    title: "Cross-Platform Mobile Development",
    description:
      "Expertly design responsive mobile applications with Flutter and React-Native.",
    href: " ",
  },
  {
    num: "03",
    title: "Software Testing",
    description:
      "My expertise spans API testing, unit testing, and integration testing, with practical experience using tools like JUnit, Maven, and Postman.",
    href: "",
  },
  {
    num: "04",
    title: "Systems Development",
    description:
      "Experience with developing hardware and software systems that communicate via MQTT and Arduino.",
    href: " ",
  },
];

import { motion } from "framer-motion";
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 ">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 ">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    target="_blank"
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    {service.name}
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-white/60 ">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
/*
const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2.4,
              duration: 0.4,
              ease: "easeIn",
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover">
                    {service.num}
                    <Link href={service.href}>
                      <BsArrowDownRight />
                    </Link>
                  </div>
                  
                  <h2>{service.title}</h2>
                  
                  <p>{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
*/
export default Services;
