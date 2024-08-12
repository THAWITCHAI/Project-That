import Image from "next/image";
import React from "react";
import "./style.css";
import Link from "next/link";
type Props = {};

export default function Login({}: Props) {
  return (
    <div className="login text-3xl w-6/12 h-1/2 rounded-3xl">
      <div className=" flex justify-center items-center">
        <Image
          src={"/people.png"}
          width={128}
          height={128}
          alt=""
          className="Image"
        />
      </div>
      <div className="input-form">
        <div className="input mb-2 h-12 flex justify-center items-center">
          <Image className="image-input" src={"/user.png"} width={32} height={32} alt="" />
          <input
            type="text"
            className="w-auto -none focus:outline-none"
            placeholder="อีเมลล์"
          />
        </div>
        <div className="input  h-12 flex justify-center items-center">
          <Image className="image-input" src={"/padlock.png"} width={32} height={32} alt="" />
          <input
            type="text"
            className="w-auto -none focus:outline-none"
            placeholder="รหัสผ่าน"
          />
        </div>
      </div>
      <div className="btn">
        <Link href={"/"}>
          <button className="button-submit mb-2 w-full text-center">
            เข้าสู่ระบบ
          </button>
        </Link>

        <hr />
        <Link href={"/register"}>
          <button className="button-register mt-2 w-1/2 text-center">
            ลงทะเบียน
          </button>
        </Link>
      </div>
    </div>
  );
}
