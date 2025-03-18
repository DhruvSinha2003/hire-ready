"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { UserButton } from "@clerk/nextjs";
import {
  BarChart,
  CheckSquare,
  Clock,
  FileText,
  List,
  Plus,
  Search,
  Upload,
  Video,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [jobDescription, setJobDescription] = useState("");

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/home" className="flex items-center gap-2">
            <CheckSquare className="h-6 w-6 text-[#0077B5]" />
            <span className="text-xl font-bold">HireReady</span>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: "w-8 h-8",
                  },
                }}
                afterSignOutUrl="/"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 bg-gray-50">
        <div className="container py-6 md:py-8 px-4 md:px-6">
          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Quick Start</CardTitle>
                    <CardDescription>
                      Create a new interview preparation session
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="job-description">Job Description</Label>
                        <Textarea
                          id="job-description"
                          placeholder="Paste the job description here..."
                          className="min-h-[100px]"
                          value={jobDescription}
                          onChange={(e) => setJobDescription(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume</Label>
                        <div className="flex items-center justify-center w-full">
                          <label
                            htmlFor="resume-upload"
                            className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                          >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-2 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="text-xs text-gray-500">
                                PDF, DOCX (MAX. 5MB)
                              </p>
                            </div>
                            <Input
                              id="resume-upload"
                              type="file"
                              className="hidden"
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-[#0077B5] hover:bg-[#005885]">
                      Generate Interview Questions
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Recent Activity</CardTitle>
                    <CardDescription>
                      Your recent interview preparations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#E6F7FF] p-2">
                          <FileText className="h-4 w-4 text-[#0077B5]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Frontend Developer Interview
                          </p>
                          <p className="text-xs text-gray-500">
                            Completed 2 days ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#E6F7FF] p-2">
                          <Video className="h-4 w-4 text-[#0077B5]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Behavioral Questions Practice
                          </p>
                          <p className="text-xs text-gray-500">
                            Recorded 5 days ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="rounded-full bg-[#E6F7FF] p-2">
                          <List className="h-4 w-4 text-[#0077B5]" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-sm font-medium">
                            Technical Interview Prep
                          </p>
                          <p className="text-xs text-gray-500">
                            Created 1 week ago
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Activity
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Your Stats</CardTitle>
                    <CardDescription>
                      Interview preparation progress
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-2">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-[#0077B5]" />
                          <span className="text-sm">Practice Time</span>
                        </div>
                        <span className="font-medium">3.5 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Video className="h-4 w-4 text-[#0077B5]" />
                          <span className="text-sm">Recordings</span>
                        </div>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-[#0077B5]" />
                          <span className="text-sm">Question Sets</span>
                        </div>
                        <span className="font-medium">5</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <BarChart className="mr-2 h-4 w-4" />
                      View Detailed Analytics
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="interviews" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Interviews</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search interviews..."
                      className="w-full rounded-md pl-8 md:w-[300px]"
                    />
                  </div>
                  <Button className="bg-[#0077B5] hover:bg-[#005885]">
                    <Plus className="mr-2 h-4 w-4" />
                    New Interview
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item}>
                    <CardHeader>
                      <CardTitle>Frontend Developer Interview</CardTitle>
                      <CardDescription>
                        Created on March 15, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Questions
                          </span>
                          <span className="font-medium">15</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Type</span>
                          <span className="font-medium">Technical</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Status</span>
                          <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                            Completed
                          </span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">View</Button>
                      <Button variant="outline">Practice Again</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="recordings" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Recordings</h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Search recordings..."
                      className="w-full rounded-md pl-8 md:w-[300px]"
                    />
                  </div>
                  <Button className="bg-[#0077B5] hover:bg-[#005885]">
                    <Video className="mr-2 h-4 w-4" />
                    New Recording
                  </Button>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <Card key={item}>
                    <CardHeader>
                      <CardTitle>Tell me about yourself</CardTitle>
                      <CardDescription>
                        Recorded on March 17, 2025
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video bg-gray-100 rounded-md flex items-center justify-center">
                        <Video className="h-12 w-12 text-gray-400" />
                      </div>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Duration
                          </span>
                          <span className="font-medium">2:45</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            Question Type
                          </span>
                          <span className="font-medium">Behavioral</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline">Play</Button>
                      <Button variant="outline">Download</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="analytics" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">Your Analytics</h2>
                <Button variant="outline">
                  <BarChart className="mr-2 h-4 w-4" />
                  Export Report
                </Button>
              </div>

              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Total Practice Time
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">8.5 hours</div>
                    <p className="text-xs text-green-500">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Completed Interviews
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">24</div>
                    <p className="text-xs text-green-500">
                      +8% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Recordings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">18</div>
                    <p className="text-xs text-green-500">
                      +15% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium text-gray-500">
                      Question Sets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">12</div>
                    <p className="text-xs text-green-500">
                      +5% from last month
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Practice Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of your interview practice by type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                    <p className="text-gray-500">
                      Chart visualization would go here
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
