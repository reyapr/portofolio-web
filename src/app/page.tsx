/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
'use client'
import { CardBody, CardContainer, CardItem } from "@/app/components/Card3d";
import { FloatingNav } from "@/app/components/FloatingNav";
import { LampContainer } from "@/app/components/Lamp";
import { PinContainer } from "@/app/components/LinkPin";
import { StickyScroll } from "@/app/components/StickyRoll";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tag } from "@/app/components/Tag";

const navItems = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function Home() {
  
  const redirect = (link: string) => {
    window.open(link, "_blank");
  }
  
  const content = [
    {
      title: (<div>
        <p>Xendit - Fullstack Developer</p>
        <p className="text-sm">Aug 2021 - Jan 2024</p>
      </div>),
      description: (<div>
        <p>
          Build and maintain the automation for financial operation and accounting task.
          Work closely cross functional team to build the new feature and maintain the existing feature,
          including the developers, product manager, and the finance team.
        </p>
        <div className="flex flex-wrap">
          <Tag>Typescript</Tag>
          <Tag>Node Js</Tag>
          <Tag>Express</Tag>
          <Tag>Kafka</Tag>
          <Tag>RabbitMq</Tag>
          <Tag>Redis</Tag>
          <Tag>PostgresQL</Tag>
          <Tag>Jest</Tag>
          <Tag>React Js</Tag>
          <Tag>AWS</Tag>
        </div>
      </div>),
      content: (
        <div className="w-full">
          <button onClick={() => redirect("https://xendit.com")}>
            <PinContainer title="www.xendit.com" href="https://xendit.com">
              <div className="flex w-[20rem]">
                <img src="/xendit.png"/>
              </div>
            </PinContainer>
          </button>
        </div>
      )
    },
    {
      title: (<div>
        <p>RevoU - Part Time Lecturer</p>
        <p className="text-sm">Jul 2023 - Present</p>
      </div>),
      description: (<div>
        <p>
          Teach the students to become a fullstack developer.
          Build the class material and assignment for the students,
          including the best practice of software engineering.
        </p>
        <div className="flex flex-wrap">
          <Tag>Javascript</Tag>
          <Tag>Node Js</Tag>
          <Tag>Express</Tag>
          <Tag>MongoDB</Tag>
          <Tag>Jest</Tag>
        </div>
      </div>),
      content: (
        <div className="w-full" >
          <button onClick={() => redirect("https://revou.com")}>
            <PinContainer title="www.revou.com">
              <div className="flex w-[20rem]">
                <img src="/revou.png"/>
              </div>
            </PinContainer>
          </button>
        </div>
      )
    },
    {
      title: (<div>
        <p>Tiket - Backend Engineer</p>
        <p className="text-sm">Jun 2020 - Aug 2021</p>
      </div>),
      description: (<div>
        <p>
          Build and maintain the backend service for flight product.
          Create a ticket issuance service, and integrate with the airline API.
          Build the voucher service and flight alert service.
        </p>
        <div className="flex flex-wrap">
          <Tag>Java</Tag>
          <Tag>MongoDB</Tag>
          <Tag>Kafka</Tag>
          <Tag>RabbitMQ</Tag>
          <Tag>Spring Web Flux</Tag>
        </div>
      </div>),
      content: (
        <div className="w-full" >
          <button onClick={() => redirect("https://tiket.com")}>
            <PinContainer title="www.tiket.com">
              <div className="flex w-[20rem]">
                <img src="/tiket.png"/>
              </div>
            </PinContainer>
          </button>
        </div>
      )
    },
    {
      title: (<div>
        <p>Tiket - Frontend Engineer</p>
        <p className="text-sm">Sep 2019 - May 2020</p>
      </div>),
      description: (<div>
        <p>
          Build and maintain the frontend service for airport transfer product.
          Work closely with the product manager and the design team to build the new feature and maintain the existing feature.
          Build a booking page for the airport transfer product.
        </p>
        <div className="flex flex-wrap">
          <Tag>Typescript</Tag>
          <Tag>React JS</Tag>
          <Tag>React Testing Library</Tag>
        </div>
      </div>),
      content: (
        <div className="w-full">
          <button onClick={() => redirect("https://tiket.com")}>
            <PinContainer title="www.tiket.com" >
              <div className="flex w-[20rem]">
                <img src="/tiket.png"/>
              </div>
            </PinContainer>
          </button>
        </div>
      )
    },
    {
      title: (<div>
        <p>Hijup - Fullstack Developer</p>
        <p className="text-sm">Jul 2018 - Sep 2019</p>
      </div>),
      description: (<div>
        <p>
          Build and maintain hijup travel product.
          Develop internal POS system, for the cashier team.
          Notification enablement for the customer.
        </p>
        <div className="flex flex-wrap">
          <Tag>Typescript</Tag>
          <Tag>React JS</Tag>
          <Tag>Node JS</Tag>
          <Tag>Express</Tag>
          <Tag>GraphQL</Tag>
          <Tag>Big Query</Tag>
          <Tag>Airflow</Tag>
        </div>
      </div>),
      content: (
        <div className="w-full">
          <button onClick={() => redirect("https://hijup.com")}>
            <PinContainer title="www.hijup.com" >
              <div className="flex w-[20rem]">
                <img src="/hijup.png"/>
              </div>
            </PinContainer>
          </button>
        </div>
      )
    },
    {
      title: (<div>
        <p>Hacktiv8 - Part Time Lecturer</p>
        <p className="text-sm">Oct 2018 - April 2023</p>
      </div>),
      description: (<div>
        <p>
          Teaching and mentoring the students about front end using React.
          Build the assignment for the students.
          Teach introduction to programming for the students.
        </p>
        <div className="flex flex-wrap">
          <Tag>Javascript</Tag>
          <Tag>React JS</Tag>
          <Tag>HTML</Tag>
          <Tag>CSS</Tag>
          <Tag>Heroku</Tag>
        </div>
      </div>),
      content: (
        <div className="w-full">
          <button onClick={() => redirect("https://hacktiv8.com")}>
            <PinContainer title="www.hacktiv8.com" >
              <div className="flex w-[20rem]">
                <img src="/hacktiv8.png"/>
              </div>
            </PinContainer>
          </button>
        </div>
      )
    }
  ]
  
  
  return (
    <div className="dark:text-white dark:bg-slate-950 flex min-h-[100vh] flex-col items-center justify-between p-24">
      <FloatingNav navItems={navItems} />
      <div className="w-9/12 text-left">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-left text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            <div className="w-9/12 m-auto">
              <p className="text-2xl font-bold">Hi, my name is</p>
              <p className="text-6xl font-bold mb-4">Renal Apriansyah</p>
              <p className="text-3xl font-bold mb-7">Software Engineer & Lecturer</p>
              <p className="text-xl">
                I&apos;m a fullstack developer that mainly using typescript, 
                but i&apos;m open to any programming language. Currently, 
                I&apos;m also exploring <b>Go</b> programming language to build the backend service.
              </p>
            </div>
          </motion.h1>
        </LampContainer>
      
      </div>
      <div className="w-9/12">
        <div className="flex flex-row">
          <h2 id="about" className="text-4xl font-bold mt-8 mb-8 opacity-80" >About</h2>
          <div className="border dark:border-white/[0.2] h-0 w-10/12 mt-8 mb-8 self-center ml-8"/>
        </div>
        <CardContainer className="inter-var w-max pt-0">
          <CardBody className="pt-0 w-full flex flex-row bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-cyan-400/[0.6] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6  ">
            <div className="flex flex-col w-full pb-0">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white opacity-80 ml-8"
              >
                Software Engineer
              </CardItem>
              <CardItem
                
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 opacity-80 ml-8"
              >
                <p className="mb-3">
                  I have been a software engineer almost 6 years. 
                  Even though I&apos;m graduated from Business Administration major, 
                  I realize someday any simple repitive task would be automated and people who still doing it would be replaced.
                  Finally I decided to learn programming and become a software engineer.
                </p>
                <p className="mb-3">
                  Fast-forward to today, and I’ve had the privilege of working at a big payment gateway start-up, 
                  I also was a lecturer at Hacktiv8, and currently a lecturer at RevoU. 
                  Recently my focus is building an automation for financial operation and accounting task, and teaching people how to code.
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>
                <div className="flex flex-row">
                  <ul className="list-disc ml-4">
                    <li>Typescript</li>
                    <li>Node.js</li>
                    <li>React</li>
                    <li>PostgreSQL</li>
                    <li>Redis</li>
                  </ul>
                  <ul className="list-disc ml-16">
                    <li>Next.js</li>
                    <li>Kafka</li>
                    <li>RabbitMQ</li>
                    <li>AWS</li>
                  </ul>
                </div>
                
              </CardItem>
            </div>
            <div className="mt-4 pb-0">
              <Image
                src="/me.jpeg"
                height={200}
                width={200}
                className="h-3/6 w-auto"
                style={{ borderRadius: "10%" }}
                alt="thumbnail"
              />
            </div>
          </CardBody>
        </CardContainer>
        <div className="flex flex-row">
          <h2 id="experience" className="text-4xl font-bold mt-8 mb-8 opacity-80" >Experience</h2>
          <div className="border dark:border-white/[0.2] h-0 w-10/12 mt-8 mb-8 self-center ml-8"/>
        </div>
        <div className="dark:bg-slate-950 dark:hover:shadow-2xl dark:hover:shadow-cyan-400/[0.6]">
          <StickyScroll content={content} />
        </div>
        <div className="flex flex-row">
          <h2 id="contact" className="text-4xl font-bold mt-8 mb-8 opacity-80" >Contact</h2>
          <div className="border dark:border-white/[0.2] h-0 w-10/12 mt-8 mb-8 self-center ml-8"/>
        </div>
        <div className="m-auto w-6/12 text-center dark:bg-slate-950">
          <div>
            <p className="text-2xl font-bold mb-8">Connect with Me</p>
            <p className="mb-4">
              If you have any inquiries or simply want to drop a friendly message, don't hesitate to reach out. I'm here to respond promptly to your queries and engage in conversation.
            </p>
            <p className="mb-8">I'm also eager to explore new opportunities.</p>
            <a href="mailto:renal.apr@gmail.com" >
              <button className="p-[3px] relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-lg" />
                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                  Connect
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="border dark:border-white/[0.2] h-0 w-8/12 mt-8 mb-8"/>
      <div className="flex flex-row space-x-6">
        <a className="dark:hover:shadow-xl dark:hover:shadow-cyan-400/[0.8]" href="https://github.com/reyapr/" target="_blank"><FaGithub size={30} /></a>
        <a className="dark:hover:shadow-xl dark:hover:shadow-cyan-400/[0.8]" href="https://www.linkedin.com/in/reyapr/" target="_blank"><FaLinkedin size={30} /></a>
        <a className="dark:hover:shadow-xl dark:hover:shadow-cyan-400/[0.8]" href="https://instagram.com/renal_apr/" target="_blank"><FaInstagram size={30} /></a>
      </div>
    </div>
  );
}
