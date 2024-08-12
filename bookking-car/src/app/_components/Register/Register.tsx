"use client";
import React from "react";
import "./style.css";
import Image from "next/image";
import Link from "next/link";
type Props = {};

export default function Register({}: Props) {
  return (
    <div className="register flex justify-center items-center">
      <div className="w-1/2 h-full p-10 regis-form">
        <div className="flex justify-center items-center">
          <Image className="Image" src={"/add-user.png"} width={128} height={128} alt="" />
        </div>
        <form className="from" action="" method="post">
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              ชื่อ
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              นามสกุล
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              ชื่อเล่น
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="text"
              placeholder="Nick Name"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              อีเมลล์
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              รหัสผ่าน
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              ยืนยันรหัสผ่าน
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl" htmlFor="">
              เบอร์โทร
            </label>
            <input
              required
              className="-none focus:outline-none text-white"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-register file ">
            <label className="text-white text-xl" htmlFor="">
              ใบขับขี่
            </label>
            <input
              required
              className="input-1 -none focus:outline-none text-white"
              type="file"
              placeholder="Name"
            />
          </div>
          <div className="input-register file">
            <label className="text-white text-xl" htmlFor="">
              ภาพโปรไฟล์
            </label>
            <input
              required
              className="input-1 -none  focus:outline-none text-white "
              type="file"
              placeholder="Name"
            />
          </div>
          <div className=" button flex justify-center ">
            <div className="w-1/2 ">
              <span
              >
                <button
                  type="submit"
                  className="button-submit mb-2 w-full text-center text-white text-xl rounded-3xl"
                >
                  ยืนยันการลงทะเบียน
                </button>
              </span>

              <Link href={"/"}>
                <button className="button-register mt-2 w-1/2 text-center text-white text-xl rounded-3xl ">
                  ล็อคอิน
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
