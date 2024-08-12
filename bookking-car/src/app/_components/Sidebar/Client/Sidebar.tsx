"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function Sidebar({}: Props) {
  const router = useRouter();

  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set the initial time once the component has mounted (client-side)
    setTime(new Date());

    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:mm:ss
  const formatTime = (date: Date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours} ชั่วโมง : ${minutes} นาที : ${seconds} วินาที`;
  };

  return (
    <div className="w-1/6 h-full bg-[#2C3E50] text-white">
      <div className="p-2 flex justify-end">
        <Image
          src={"/gear.png"}
          width={24}
          height={24}
          alt="setting"
          className="cursor-pointer"
          onClick={(e) => {
            return router.replace("/");
          }}
        />
      </div>
      <div className="profile w-full h-32 flex justify-center ">
        <div className="image-profile  flex justify-center items-center">
          <Image src={"/profile.jpg"} width={120} height={120} alt="Profile" />
        </div>
        <div className="contact-profile  text-white">
          <h1 className="text-2xl text-start pt-5 px-3">
            Thawitchai <br /> <p className="text-lg">User</p>
          </h1>
        </div>
      </div>
      <hr className="mt-5 mb-5" />
      <div className="text-[#ffffff88] mx-2 mb-5">Menu</div>
      <Link href={"#"}>
        <div className="border h-16 m-2 rounded-xl flex justify-start items-center px-5 hover:bg-slate-500 hover:border-none mb-10  menu-btn">
          <Image src={"/appointment.png"} width={32} height={32} alt="Logo" />
          <h1 className="px-5">จองรถ</h1>
        </div>
      </Link>
      <hr className="mt-5 mb-5" />
      <div className="text-[#ffffff88] mx-2 mb-5">Show Data</div>
      <Link href={"#"}>
        <div className="border h-16 m-2 rounded-xl flex justify-start items-center px-5 hover:bg-slate-500 hover:border-none mb-5 menu-btn">
          <Image src={"/to-do-list.png"} width={32} height={32} alt="Logo" />
          <h1 className="px-5">รายการจองรถ</h1>
        </div>
      </Link>
      <Link href={"#"}>
        <div className="border h-16 m-2 rounded-xl flex justify-start items-center px-5 hover:bg-slate-500 hover:border-none mb-5 menu-btn">
          <Image src={"/pickup-car.png"} width={32} height={32} alt="Logo" />
          <h1 className="px-5">รถทั้งหมด</h1>
        </div>
      </Link>
      <hr className="mt-5 mb-5" />
      <div className="text-[#ffffff88] mx-2 mb-5">Show Data</div>
      <Link href={"#"}>
        <div className="border h-16 m-2 rounded-xl flex justify-start items-center px-5 hover:bg-slate-500 hover:border-none mb-20 menu-btn">
          <Image src={"/logout.png"} width={32} height={32} alt="Logo" />
          <h1 className="px-5">ออกจากระบบ</h1>
        </div>
      </Link>
      <div className="h-16 m-2 rounded-xl flex justify-center items-center px-5 hover:bg-slate-500 hover:border-none mb-5 menu-btn">
        <h1 className="text-xl text-yellow-500">{time ? formatTime(time) : "Loading..."}</h1>
      </div>
    </div>
  );
}
