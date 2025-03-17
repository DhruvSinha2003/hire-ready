"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { SignIn } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { CheckSquare, ArrowLeft } from "lucide-react"

export default function SignInPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2">
          <CheckSquare className="h-6 w-6 text-[#0077B5]" />
          <span className="text-xl font-bold">HireReady</span>
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => router.back()} className="text-sm text-gray-500">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
        </div>
      </div>
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-[#0077B5]">Welcome back</h1>
            <p className="text-gray-500">Sign in to your account to continue</p>
          </div>
          <div className="w-full">
            <SignIn
              appearance={{
                elements: {
                  rootBox: "mx-auto w-full",
                  card: "shadow-none",
                  formButtonPrimary: "bg-[#0077B5] hover:bg-[#005885]",
                  footerActionLink: "text-[#0077B5] hover:text-[#005885]",
                  formFieldInput: "border-gray-300 focus:border-[#0077B5] focus:ring-[#0077B5]",
                },
              }}
              routing="path"
              path="/sign-in"
              signUpUrl="/sign-up"
            />
          </div>
          <div className="text-center text-sm">
            <p className="text-gray-500">
              Don&apos;t have an account?{" "}
              <Link href="/sign-up" className="font-medium text-[#0077B5] hover:text-[#005885]">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

