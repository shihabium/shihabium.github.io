"use client";


import { useEffect } from "react";
import { getCurrentSession } from "@/lib/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn, signOut } from "@/services/authService";
import { isAdmin } from "@/services/adminService";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const session = await getCurrentSession();

    if (!session) return;

    const admin = await isAdmin(session.user.email!);

    if (!admin) {
      await signOut();
      return;
    }

    router.replace("/admin/dashboard");
  }

  async function handleLogin() {
    try {
      setLoading(true);

      const { data, error } = await signIn(
        email,
        password
      );

      if (error) {
        alert(error.message);
        return;
      }

      if (!data.user) {
        alert("Login Failed");
        return;
      }

      const admin = await isAdmin(
        data.user.email!
      );

      if (!admin) {
        await signOut();

        alert("Access Denied");

        return;
      }

      router.replace("/admin/dashboard");

    } catch (err) {

      console.error(err);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  }

  return (

    <div className="flex min-h-screen items-center justify-center bg-[#050816]">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-black text-white">
          Admin Login
        </h1>

        <p className="mt-3 text-center text-white/50">
          Secure CMS Access
        </p>

        <div className="mt-10 space-y-5">

          <input
            type="email"
            placeholder="Email"

            value={email}

            onChange={(e) =>
              setEmail(e.target.value)
            }

            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"

            value={password}

            onChange={(e) =>
              setPassword(e.target.value)
            }

            className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
          />

          <button

            onClick={handleLogin}

            disabled={loading}

            className="w-full rounded-2xl bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 py-4 font-semibold text-white"

          >

            {loading
              ? "Signing In..."
              : "Sign In"}

          </button>

        </div>

      </div>

    </div>

  );
}