import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, FileText, Video, CheckSquare, ArrowRight } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <CheckSquare className="h-6 w-6 text-[#0077B5]" />
            <span className="text-xl font-bold">HireReady</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-[#0077B5] transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:text-[#0077B5] transition-colors">
              How It Works
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-[#0077B5] transition-colors">
              Testimonials
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="text-sm font-medium hover:text-[#0077B5] transition-colors">
              Sign In
            </Link>
            <Link href="/sign-up">
              <Button className="bg-[#0077B5] hover:bg-[#005885] text-white">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-[#0077B5]">
                  Prepare for your dream job interview with confidence
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  HireReady helps you practice for interviews with personalized question sets based on job descriptions
                  and your resume.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/sign-up">
                    <Button className="bg-[#0077B5] hover:bg-[#005885] text-white">Get Started Free</Button>
                  </Link>
                  <Link href="#how-it-works">
                    <Button variant="outline" className="border-[#0077B5] text-[#0077B5]">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Interview preparation dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0077B5]">
                  Features designed for interview success
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Everything you need to prepare for your next interview and land your dream job.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#E6F7FF] p-3">
                  <FileText className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold">Job Description Analysis</h3>
                <p className="text-center text-gray-500">
                  Paste any job description and get a personalized checklist of skills and topics to prepare for.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#E6F7FF] p-3">
                  <CheckCircle className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold">Tailored Question Sets</h3>
                <p className="text-center text-gray-500">
                  Receive customized technical or behavioral questions based on your resume and the job requirements.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-[#E6F7FF] p-3">
                  <Video className="h-6 w-6 text-[#0077B5]" />
                </div>
                <h3 className="text-xl font-bold">Practice Recordings</h3>
                <p className="text-center text-gray-500">
                  Record yourself answering questions with timed responses to perfect your delivery and confidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0077B5]">
                  How HireReady works
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  A simple process to help you prepare for your next interview.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white">1</div>
                <h3 className="text-xl font-bold">Paste Job Description</h3>
                <p className="text-gray-500">Input the job description you're applying for to analyze requirements.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white">2</div>
                <h3 className="text-xl font-bold">Upload Resume</h3>
                <p className="text-gray-500">Share your resume to personalize your interview preparation.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white">3</div>
                <h3 className="text-xl font-bold">Select Focus Areas</h3>
                <p className="text-gray-500">Choose what types of questions you want to practice with.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0077B5] text-white">4</div>
                <h3 className="text-xl font-bold">Practice & Record</h3>
                <p className="text-gray-500">Answer questions and record yourself to review and improve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#0077B5]">
                  What our users say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  HireReady has helped thousands of job seekers land their dream jobs.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#0077B5"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-gray-500">
                    "HireReady helped me prepare for my technical interview at a top tech company. The personalized
                    questions were spot on!"
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <div className="h-10 w-10 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Software Engineer</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#0077B5"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-gray-500">
                    "The video recording feature was a game-changer. I could see my nervous habits and fix them before
                    the real interview."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <div className="h-10 w-10 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-gray-500">Product Manager</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between space-y-4 rounded-lg border p-6 shadow-sm">
                <div>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="#0077B5"
                        stroke="none"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-4 text-gray-500">
                    "I landed my dream job after using HireReady for just two weeks. The behavioral questions were
                    exactly what I needed to practice."
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-100 p-1">
                    <div className="h-10 w-10 rounded-full bg-gray-300" />
                  </div>
                  <div>
                    <p className="font-medium">Jessica Williams</p>
                    <p className="text-sm text-gray-500">Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-[#0077B5]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to ace your next interview?
                </h2>
                <p className="max-w-[700px] text-gray-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Join thousands of job seekers who have successfully prepared with HireReady.
                </p>
              </div>
              <Link href="/sign-up">
                <Button className="bg-white text-[#0077B5] hover:bg-gray-100">
                  Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-2 md:gap-4 md:w-1/3">
            <Link href="/" className="flex items-center gap-2">
              <CheckSquare className="h-6 w-6 text-[#0077B5]" />
              <span className="text-xl font-bold">HireReady</span>
            </Link>
            <p className="text-sm text-gray-500">Helping job seekers prepare for interviews with confidence.</p>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Product</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#features" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Features
                </Link>
                <Link href="#how-it-works" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  How It Works
                </Link>
                <Link href="#testimonials" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Testimonials
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Company</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  About
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Blog
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Careers
                </Link>
              </nav>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium">Legal</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Privacy
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Terms
                </Link>
                <Link href="#" className="text-sm text-gray-500 hover:text-[#0077B5]">
                  Cookie Policy
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t py-6">
          <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
            <p className="text-xs text-gray-500">© {new Date().getFullYear()} HireReady. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-500 hover:text-[#0077B5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0077B5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-[#0077B5]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

