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
        <div className="flex justify-center items-center Image-box">
          <Image className="Image" src={"/add-user.png"} width={128} height={128} alt="" />
        </div>
        <form className="from border" action="" method="post">
          <div className="input-register border">
            <label className="text-white text-xl border" htmlFor="">
              ชื่อ
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="input-register border">
            <label className="text-white text-xl border" htmlFor="">
              นามสกุล
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="input-register border">
            <label className="text-white text-xl border" htmlFor="">
              ชื่อเล่น
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="text"
              placeholder="Nick Name"
            />
          </div>
          <div className="input-register border">
            <label className="text-white text-xl border" htmlFor="">
              อีเมลล์
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="email"
              placeholder="Your Email"
            />
          </div>
          <div className="input-register border">
            <label className="text-white text-xl border" htmlFor="">
              รหัสผ่าน
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="input-register ">
            <label className="text-white text-xl border" htmlFor="">
              ยืนยันรหัสผ่าน
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="input-register border">
            <label className="text-white text-xl border" htmlFor="">
              เบอร์โทร
            </label>
            <input
              required
              className="-none focus:outline-none text-white border"
              type="text"
              placeholder="Phone Number"
            />
          </div>
          <div className="input-register file border">
            <label className="text-white text-xl border" htmlFor="">
              ใบขับขี่
            </label>
            <input
              required
              className="input-1 -none focus:outline-none text-white border"
              type="file"
              placeholder="Name"
            />
          </div>
          <div className="input-register file">
            <label className="text-white text-xl border" htmlFor="">
              ภาพโปรไฟล์
            </label>
            <input
              required
              className="input-1 -none  focus:outline-none text-white border"
              type="file"
              placeholder="Name"
            />
          </div>
          <div className=" button flex justify-center border">
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
