import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Wrapper from "@/components/wrapper";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { title } from "process";

interface Course {
  title: string;
  description?: string;
  optional?: boolean;
  important?: boolean;
}

interface Curriculum {
  title: string;
  courses: Array<Course>;
}

export default function Home() {
  const majors = [
    {
      title: "Artificial Intelligence",
    },
    {
      title: "Bio Technology",
    },
    {
      title: "Cloud Computing",
    },
    {
      title: "Cyber Security",
    },
    {
      title: "Data Science",
    },
    {
      title: "Game Development",
    },
    {
      title: "Software Development",
    },
  ];

  const minors = [
    {
      title: "Web Design",
    },
    {
      title: "Economics",
    },
    {
      title: "Finance",
    },
  ];

  const curriculumData: Curriculum[] = [
    {
      title: "Term 1",
      courses: [
        {
          title: "Fundamentals of Computers",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        },
        {
          title: "Fundamentals of Programming",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
          important: true,
        },
        {
          title: "Maths for CS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        },
        {
          title: "Communication Skills, Networking and Team Building",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
        },
      ],
    },
    {
      title: "Term 2",
      courses: [
        // {
        //   title: "Data Structures and Algorithms",
        // },
        {
          title: "Object-oriented programming",
          important: true,
        },

        {
          title: "Probability and Statistics",
        },

        {
          title: "Problem Solving and Logical Thinking",
        },
        {
          title: "Elective 1",
          optional: true,
        },
      ],
    },
    {
      title: "Term 3",
      courses: [
        // {
        //   title: "Intermediate Data Structures and Algorithms",
        // },
        {
          title: "Data Structures and Algorithms",
          important: true,
        },
        {
          title: "Internet 101",
        },
        {
          title: "Database management systems",
          important: true,
        },

        {
          title: "Elective 2",
          optional: true,
        },
      ],
    },
    {
      title: "Term 4",
      courses: [
        {
          title: "Intermediate Data Structures and Algorithms",
          important: true,
        },
        {
          title: "Operating System",
          important: true,
        },
        {
          title: "App/Web Development 101",
        },
        {
          title: "Productivity and Work Efficiency",
        },
      ],
    },
    {
      title: "Term 5",
      courses: [
        {
          title: "Advance Data Structures and Algorithms",
          important: true,
        },
        {
          title: "Python and Machine Learning",
        },
        {
          title: "App/Web Development 202",
        },
        {
          title: "Elective 3",
          optional: true,
        },
      ],
    },

    {
      title: "Term 6",
      courses: [
        {
          title: "Fundamentals of Web Development",
        },
        {
          title: "Discrete mathematics",
        },
        {
          title: "Computer Networks ",
          important: true,
        },
        {
          title: "Elective 4",
          optional: true,
        },
      ],
    },
    {
      title: "Term 7",
      courses: [
        {
          title: "System Design",
        },

        {
          title: "Computer Networks",
        },

        {
          title: "Elective 4",
          optional: true,
        },
      ],
    },
    {
      title: "Term 8",
      courses: [
        {
          title: "Cloud Computing",
        },
        {
          title: "Product Management",
        },

        {
          title: "Elective 8",
          optional: true,
        },

        {
          title: "Elective 8",
          optional: true,
        },
      ],
    },
    {
      title: "Term 9",
      courses: [
        {
          title: "Advance Java",
        },
        {
          title: "Data Mining",
        },
        {
          title: "Elective 6",
          optional: true,
        },
        {
          title: "Elective 6",
          optional: true,
        },
      ],
    },
    {
      title: "Term 10",
      courses: [
        {
          title: "Software Engineering",
        },
        {
          title: "Project",
        },
        {
          title: "Elective 9",
          optional: true,
        },
        {
          title: "Elective 10",
          optional: true,
        },
      ],
    },
    {
      title: "Term 11",
      courses: [
        {
          title: "Cyber Security",
        },
        {
          title: "Project",
        },
        {
          title: "Elective 11",
          optional: true,
        },
        {
          title: "Elective 12",
          optional: true,
        },
      ],
    },
    {
      title: "Term 12",
      courses: [
        {
          title: "Project Management",
        },
        {
          title: "Project",
        },
        {
          title: "Elective 11",
          optional: true,
        },
        {
          title: "Elective 12",
          optional: true,
        },
      ],
    },
  ];

  return (
    <>
      <Wrapper className="min-h-screen">
        <nav>
          <div>Neon School</div>
          <div></div>
        </nav>
        <div className="flex justify-center items-center h-screen">
          <div className="text-[40px] font-bold flex">
            <span className="border-b-4 border-orange-700 mr-1">Neon</span>
            <div className="border-b-4 border-blue-700 mr-1">International</div>
            <div className="border-b-4 border-purple-700">
              School of technology
            </div>
          </div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className="text-center">{`BS in Computer Science with {major} and {minor}`}</div>
      </Wrapper>
      <Wrapper>
        <div>Majors</div>

        <div className="grid grid-cols-3 gap-4 py-2">
          {majors.map((major, index) => (
            <Card key={index}>
              <div className="p-4">{major.title}</div>
            </Card>
          ))}
        </div>
      </Wrapper>
      <Wrapper>
        <div>Minors</div>
        <div className="grid grid-cols-3 gap-4 py-2">
          {minors.map((major, index) => (
            <Card key={index}>
              <div className="p-4">{major.title}</div>
            </Card>
          ))}
        </div>
      </Wrapper>

      <Wrapper>
        <div className="text-3xl font-bold ">
          <span className="border-b-4 border-orange-700">Curriculum</span>
        </div>
        <Card className="bg-blue-800 my-5">
          <CardHeader>
            <CardTitle className="text-blue-100">Freshman Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {curriculumData.slice(0, 3).map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.courses.map((course, index) => (
                      <div key={index} className="py-2">
                        {/* <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription> */}
                        <div className="flex gap-2">
                          <div className="p-1">{index + 1}</div>
                          <div
                            className={cn(
                              "font-medium bg-red-100 p-1 rounded-lg",
                              course.optional && "bg-blue-100",
                              course.important && "bg-teal-100"
                            )}
                          >
                            <div>{course.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-green-800  my-5">
          <CardHeader>
            <CardTitle className="text-green-100">Sophomore Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {curriculumData.slice(3, 6).map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.courses.map((course, index) => (
                      <div key={index} className="py-2">
                        {/* <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription> */}
                        <div className="flex gap-2">
                          <div className="p-1">{index + 1}</div>
                          <div
                            className={cn(
                              "font-medium bg-red-100 p-1 rounded-lg",
                              course.optional && "bg-blue-100",
                              course.important && "bg-teal-100"
                            )}
                          >
                            <div>{course.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="w-full bg-slate-200 font-medium rounded-lg text-black  p-10 flex flex-col gap-5 text-[18px]">
          <div className="border-b-2 border-slate-400 text-center">
            Choose a Path
          </div>

          <div className="flex justify-around px-44">
            <div>
              <div>Get Full Time Internship</div>
              <div>Exit with Diploma</div>
              <div>Take a 2 year break from Degree</div>
            </div>
            <div>
              <div>Choose a Speciation</div>
              <div>Choose Electives</div>
            </div>
          </div>
        </div>

        <Card className="bg-yellow-800  my-5">
          <CardHeader>
            <CardTitle className="text-yellow-100">Junior Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {curriculumData.slice(6, 9).map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.courses.map((course, index) => (
                      <div key={index} className="py-2">
                        {/* <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription> */}
                        <div className="flex gap-2">
                          <div className="p-1">{index + 1}</div>
                          <div
                            className={cn(
                              "font-medium bg-red-100 p-1 rounded-lg",
                              course.optional && "bg-blue-100",
                              course.important && "bg-teal-100"
                            )}
                          >
                            <div>{course.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-rose-800  my-5">
          <CardHeader>
            <CardTitle className="text-rose-100">Senior Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              {curriculumData.slice(9, 12).map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.courses.map((course, index) => (
                      <div key={index} className="py-2">
                        {/* <CardTitle>{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription> */}
                        <div className="flex gap-2">
                          <div className="p-1">{index + 1}</div>
                          <div
                            className={cn(
                              "font-medium bg-red-100 p-1 rounded-lg",
                              course.optional && "bg-blue-100",
                              course.important && "bg-teal-100"
                            )}
                          >
                            <div>{course.title}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </Wrapper>
    </>
  );
}
