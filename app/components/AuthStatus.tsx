import React from 'react'
import { useSession } from "next-auth/react";
import Link from 'next/link';
import { IoLogIn, IoLogOut } from "react-icons/io5";


const AuthStatus = ({currentPath}:{currentPath:string}) => {
    const { status, data: session } = useSession();
    console.log(session);

    if(status=='loading') return  <div className="skeleton border-r-4  w-12 h-12  shrink-0"></div>

  return (
    <div className="flex-none">
    {status == "unauthenticated" && (
      <Link
        href={"/api/auth/signin"}
        className={`btn btn-ghost text-l mx-1 bg-zinc-100 hover:bg-zinc-300 ${
          currentPath == "/login" && " bg-pink-100 text-pink-500"
        }`}
      >
        <IoLogIn />
        Login
      </Link>
    )}

    {status == "authenticated" && (
      <>
      <div className="mx-4  p-1 rounded-md text-sm text-zinc-200">Hi {session.user?.name}</div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button">
          <div className="avatar w-[50px]">
            <div className="w-24 mask mask-squircle">
              <img src={session.user?.image!} />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content flex flex-col justify-between items-center gap-4 z-[1] menu py-5 shadow bg-base-100 rounded-box w-auto"
          >
          <li className="bg-violet-200 p-1 rounded-md" >{session.user?.email}</li>
          <li className="mt-8">
            <Link
              href={"/api/auth/signout"}
              className={`btn btn-ghost text-sm mx-1 p-2  bg-zinc-100 hover:bg-zinc-300 ${
                currentPath == "/login" && " bg-pink-100 text-pink-500"
              }`}
            >
              <IoLogOut />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
    )}
  </div>
  )
}

export default AuthStatus