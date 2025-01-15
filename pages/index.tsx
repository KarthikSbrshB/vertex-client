import {
  TbBell,
  TbBookmark,
  TbCircleMinus2,
  TbSearch,
  TbUser,
} from "react-icons/tb";
import { BiEnvelope } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import localFont from "next/font/local";
import React, { useCallback } from "react";
import { FaCircleNodes } from "react-icons/fa6";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";

const firaCode = localFont({
  src: "./fonts/FiraCodeTTF.ttf",
  variable: "--font-fira-code",
  weight: "300 700",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface twitterSidebarButton {
  icon: React.ReactNode;
  name: string;
}

const sidebarMenuItems: twitterSidebarButton[] = [
  {
    icon: <GoHomeFill />,
    name: "home",
  },
  {
    icon: <TbSearch />,
    name: "explore",
  },
  {
    icon: <TbBell />,
    name: "notifications",
  },
  {
    icon: <BiEnvelope />,
    name: "messages",
  },
  {
    icon: <TbBookmark />,
    name: "bookmarks",
  },
  {
    icon: <TbUser />,
    name: "profile",
  },
];

export default function Home() {

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {

  }, [])

  return (
    <div className={firaCode.className}>
      <div className="grid grid-cols-17 divide-x-[1px] divide-neutral-700 h-screen w-screen px-52">
        <div className="col-span-4 py-3 flex flex-col">
          <div className="text-4xl font-thin h-fit w-fit self-center rotate-100 hover:text-gray-300 rounded-full p-3 cursor-pointer transition-all">
            <FaCircleNodes />
          </div>
          <div className="my-4 font-medium pr-6 tracking-tight">
            <ul>
              {sidebarMenuItems.map((item) => (
                <li
                  key={item.name}
                  className="flex justify-start items-center gap-3 w-fit my-2 px-5 py-2 hover:bg-zinc-800 rounded-full cursor-pointer transition-all"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-lg">{item.name}</span>
                </li>
              ))}
            </ul>
            <button className="bg-sky-600 bg-opacity-15 border border-cyan-300 text-lg w-full py-2 my-3 rounded-full hover:bg-sky-600 hover:bg-opacity-40``̀ cursor-pointer transition-all">
              create vector
            </button>
          </div>
        </div>
        <div className="col-span-8 h-screen overflow-scroll">
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <div className="col-span-5 p-5">
          <div className="flex flex-col items-center justify-center p-5 bg-sky-600 bg-opacity-15 border border-cyan-300 text-xl tracking-tight font-medium rounded-md">
            <div>New User?</div>
            <div className="font-medium text-sm text-cyan-700 pt-1">
              Register
            </div>
            <div className="pt-3">
              <GoogleLogin onSuccess={(cred) => console.log(cred.credential)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}