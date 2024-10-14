import React from "react";
import Image from 'next/image'
import { BiMessageSquare } from "react-icons/bi";
import { FaRetweet } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { HiOutlineUpload } from "react-icons/hi";

const FeedCard: React.FC = () => {
  return (<div className="border-t-[1px] border-neutral-700 p-4 pb-1 hover:cursor-pointer transition-all">
    <div className="grid grid-cols-12">
        <div className="col-span-1">
            <Image className="rounded-full" src='https://avatars.githubusercontent.com/u/139532908?v=4' alt="user-imag" height={50} width={50}/>
        </div>
        <div className="col-span-11">
            <h5 className="pl-2 text-sm font-bold text-zinc-100" >Karthik Sbrsh</h5>
            <p className="pl-2 pt-1 text-sm font-normal text-zinc-300 tracking-tight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ab dignissimos sit fugit impedit autem ipsum adipisci. Eligendi eaque ipsam, tempora et, facilis a aliquid, natus provident ea libero nobis?</p>
            <div className="flex justify-between items-center pl-1 mt-1 text-base text-zinc-600">
                <div className="rounded-full p-2 hover:bg-sky-900 hover:bg-opacity-25 hover:text-sky-400 transition-all">
                    <BiMessageSquare className=""/>
                </div>
                <div className="rounded-full p-2 hover:bg-green-900 hover:bg-opacity-25 hover:text-green-500 transition-all">
                    <FaRetweet className=""/>
                </div>
                <div className="rounded-full p-2 hover:bg-pink-900 hover:bg-opacity-25 hover:text-pink-400 transition-all">
                    <AiOutlineHeart className=""/>
                </div>
                <div className="rounded-full p-2 hover:bg-cyan-900 hover:bg-opacity-25 hover:text-cyan-400 transition-all">
                    <HiOutlineUpload className=""/>
                </div>
            </div>
        </div>
    </div>
  </div>);
};

export default FeedCard;