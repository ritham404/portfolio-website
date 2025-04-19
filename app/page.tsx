import Image from "next/image"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {ThemeToggle} from "@/components/ui/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">Amrithraj N</div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#experience" className="text-sm font-medium hover:text-primary">
              Experience
            </a>
            <a href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </a>
            <a href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </a>
            <a href="#education" className="text-sm font-medium hover:text-primary">
              Education
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
            
          </nav>
         

          <a
            href="/Amrithraj N.pdf"
            download
            className="hidden md:inline-flex"
          >
            <Button>Download CV</Button>
          </a>
          {/* <a>
            <ThemeToggle />
            </a> */}

          <Button variant="outline" size="icon" className="md:hidden">
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
              className="h-4 w-4"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-50 to-gray-100 py-20 md:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Amrithraj N</h1>
            <h2 className="text-2xl md:text-3xl text-gray-600">Frontend Developer Passionate About Open-Source</h2>
            <p className="text-gray-600 max-w-md">
              Based in Mangalore, Karnataka, India. Building modern web experiences with a focus on clean code and user
              experience.
            </p>
            <div className="flex gap-4">
              <Button>Contact Me</Button>
              <Button variant="outline">View Projects</Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/ritham404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/amrith-raj-n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="mailto:amrithnraj@gmail.com" className="text-gray-600 hover:text-primary">
                <Mail className="h-6 w-6" />
              </a>
              <a href="tel:+917994134420" className="text-gray-600 hover:text-primary">
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="relative h-80 w-80 mx-auto md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse"></div>
            <Image
              src="/Amrith.jpg?height=400&width=400"
              alt="Amrithraj N"
              width={400}
              height={400}
              className="rounded-full object-cover relative h-80 p-4 w-80 md:h-96 md:w-96"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              I'm a Frontend Developer with a passion for creating intuitive and responsive web applications. Currently
              pursuing my Bachelor's degree in Computer Science with Artificial Intelligence at Sahyadri College of
              Engineering and Management.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As an organizer for the Sahyadri Open Source Community, I've led initiatives that brought together
              industry experts and students, fostering a culture of collaboration and innovation.
            </p>
            <p className="text-lg text-gray-700">
              I'm constantly exploring new technologies and frameworks to enhance my skills and create better user
              experiences. My goal is to build applications that are not only functional but also accessible and
              enjoyable to use.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Technical Intern</CardTitle>
                    <CardDescription className="text-lg">Vishwayon Software</CardDescription>
                  </div>
                  <Badge>Oct 2023 - Nov 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Worked with open-source technologies such as Docker, PostgreSQL, PHP, and CoreErp-CE to enhance
                    development workflows and improve system functionality.
                  </li>
                  <li>
                    Gained hands-on experience in deploying and managing Docker containers, optimizing databases using
                    PostgreSQL, and integrating PHP-based applications for seamless deployment.
                  </li>
                  <li>
                    Developed a foundational understanding of enterprise resource planning (ERP) systems by contributing
                    to CoreErp-CE and supporting key development processes for improved business solutions.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Organizer</CardTitle>
                    <CardDescription className="text-lg">Sahyadri Open Source Community</CardDescription>
                  </div>
                  <Badge>Jun 2023 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Organized Synergia-DevHost 2024 hosting 15+ industry speakers and 1000+ attendees over 3 days.
                  </li>
                  <li>
                    Leading a team of 25 members, enhancing technical and leadership skills, and promoting open-source,
                    with over 10 Workshops, 6 Coding Events and 3 Hackathons.
                  </li>
                  <li>Collaborated with GDSC, IEEE, and FOSS Mangalore to create a vibrant tech community.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>AlumniPortal</CardTitle>
                  <Badge>Oct 2024</Badge>
                </div>
                <CardDescription>HTML, CSS, JS, Python</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed the frontend for AlumniPortal, successfully facilitating details of 120+ Alumni.</li>
                  <li>
                    Implemented a LinkedIn scraping mechanism to retrieve alumni data, automating process of seamless
                    profile updates.
                  </li>
                  <li>
                    Integrated the Google Sheets API to store and retrieve alumni data, enabling efficient data
                    management.
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Samvaad</CardTitle>
                  <Badge>December 2023</Badge>
                </div>
                <CardDescription>HTML, CSS, Python, RASA Framework</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    Developed frontend for an AI-based chatbot aimed at assisting government officials, using HTML, CSS,
                    and Python.
                  </li>
                  <li>
                    Integrated the RASA framework for conversational AI, enhancing the chatbot to understand and respond
                    effectively.
                  </li>
                  <li>
                    Contributed to the project as part of a Smart India Hackathon Finalist team, showcasing innovation
                    in AI-driven solutions for government services.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="tools">Developer Tools</TabsTrigger>
                <TabsTrigger value="technologies">Technologies</TabsTrigger>
              </TabsList>
              <TabsContent value="languages" className="mt-6">
                <div className="flex flex-wrap gap-3">
                  {["C", "Python", "HTML", "CSS", "JavaScript"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="tools" className="mt-6">
                <div className="flex flex-wrap gap-3">
                  {["VS Code", "Git", "Postman", "Docker", "Wordpress", "Onshape"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="technologies" className="mt-6">
                <div className="flex flex-wrap gap-3">
                  {["React.js", "PostgreSQL", "Linux"].map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>Sahyadri College of Engineering and Management</CardTitle>
                    <CardDescription className="text-lg">
                      Bachelor of Engineering in Computer Science with Artificial Intelligence
                    </CardDescription>
                  </div>
                  <Badge>Nov 2022 - Jun 2026</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">SGPA: 8.65</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>H.H.S.I.B. Higher Secondary School</CardTitle>
                    <CardDescription className="text-lg">
                      Higher Secondary Education with Combination of PCMB
                    </CardDescription>
                  </div>
                  <Badge>Nov 2020 - Mar 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Percentage: 97%</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Achievements</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Smart India Hackathon</CardTitle>
                  <Badge>December 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>Developed the ChatBot Samvaad within 36 Hours of the Hackathon. QIS Ongole</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>2nd Place Poster Presentation Competition</CardTitle>
                  <Badge>Nov 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p>Presented Idea and Poster for the Mini Project Titled QCNN Model for Disease Detection. SCEM</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Contact Me</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Get In Touch</h3>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-600" />
                <a href="mailto:amrithnraj@gmail.com" className="text-gray-700 hover:text-primary">
                  amrithnraj@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-600" />
                <a href="tel:+917994134420" className="text-gray-700 hover:text-primary">
                  +91 7994134420
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-gray-600" />
                <a
                  href="https://linkedin.com/in/amrith-raj-n"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary"
                >
                  linkedin.com/in/amrith-raj-n
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-gray-600" />
                <a
                  href="https://github.com/ritham404"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-primary"
                >
                  github.com/ritham404
                </a>
              </div>
            </div>
            <div>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-lg font-semibold">Amrithraj N</p>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://github.com/ritham404"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/amrith-raj-n"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:amrithnraj@gmail.com" className="text-gray-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </a>
              <a href="tel:+917994134420" className="text-gray-400 hover:text-white">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Amrithraj N. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

