import { motion, AnimatePresence } from "motion/react";
import { Book, FileText, Video, Search, Download, ExternalLink, Filter, Loader2, FlaskConical, Shield } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

const resources = [
  {
    id: 1,
    title: "Modern React Patterns",
    type: "eBook",
    category: "Web",
    size: "Online Guide",
    description: "Official modern React documentation and performance patterns.",
    icon: Book,
    color: "bg-blue-100 text-blue-600",
    link: "https://react.dev"
  },
  {
    id: 2,
    title: "Python for Data Science",
    type: "PDF",
    category: "Data",
    size: "Documentation",
    description: "Essential Python guide for data analysis and scientific computing.",
    icon: FileText,
    color: "bg-purple-100 text-purple-600",
    link: "https://docs.python.org/3/tutorial/index.html"
  },
  {
    id: 145,
    title: "Introduction to Cloud Computing",
    type: "Video",
    category: "Cloud",
    size: "Beginner",
    description: "A beginner-friendly overview of cloud concepts, services, and benefits.",
    icon: Video,
    color: "bg-blue-100 text-blue-600",
    link: "https://example.com/cloud-intro"
  },
  {
    id: 3,
    title: "AWS Cloud foundations",
    type: "Video",
    category: "Cloud",
    size: "Video Series",
    description: "Official AWS getting started training and cloud fundamentals.",
    icon: Video,
    color: "bg-orange-100 text-orange-600",
    link: "https://aws.amazon.com/getting-started/"
  },
  {
    id: 4,
    title: "Cyber Security Top 10",
    type: "eBook",
    category: "Security",
    size: "Standard",
    description: "The global standard for web application security awareness.",
    icon: Book,
    color: "bg-red-100 text-red-600",
    link: "https://owasp.org/www-project-top-ten/"
  },
  {
    id: 5,
    title: "Google Design Systems",
    type: "PDF",
    category: "Design",
    size: "Guide",
    description: "Material Design foundations and UI/UX best practices.",
    icon: FileText,
    color: "bg-pink-100 text-pink-600",
    link: "https://m3.material.io"
  },
  {
    id: 6,
    title: "Developer Roadmaps",
    type: "PDF",
    category: "Web",
    size: "Interactive",
    description: "Step-by-step guides and paths to becoming a modern developer.",
    icon: FileText,
    color: "bg-green-100 text-green-600",
    link: "https://roadmap.sh"
  },
  {
    id: 7,
    title: "Cisco CCNA Prep",
    type: "eBook",
    category: "Networking",
    size: "Official Guide",
    description: "Start your networking career with free courses from Cisco Skills for All.",
    icon: Book,
    color: "bg-cyan-100 text-cyan-600",
    link: "https://skillsforall.com/learning-path/getting-started-networking"
  },
  {
    id: 8,
    title: "Packet Tracer Labs",
    type: "PDF",
    category: "Networking",
    size: "Interactive",
    description: "Download and learn the official networking simulation tool used world-wide.",
    icon: FileText,
    color: "bg-teal-100 text-teal-600",
    link: "https://www.netacad.com/courses/packet-tracer"
  },
  {
    id: 9,
    title: "Cisco Academy Portal",
    type: "Video",
    category: "Networking",
    size: "Course Portal",
    description: "Access your dashboard for NetAcad and Skills for All certifications.",
    icon: Video,
    color: "bg-blue-100 text-blue-800",
    link: "https://www.netacad.com/portal/learning"
  },
  {
    id: 10,
    title: "CCNP Enterprise Core",
    type: "eBook",
    category: "Networking",
    size: "Official Prep",
    description: "Official guide for CCNP Enterprise ENCOR 350-401 certification.",
    icon: Book,
    color: "bg-blue-100 text-blue-900",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise.html"
  },
  {
    id: 11,
    title: "Ethical Hacking Course",
    type: "Video",
    category: "Security",
    size: "Full Course",
    description: "Beginner to advanced ethical hacking tutorials and certifications.",
    icon: Video,
    color: "bg-red-100 text-red-700",
    link: "https://www.cybrary.it/course/ethical-hacking"
  },
  {
    id: 12,
    title: "Machine Learning Docs",
    type: "PDF",
    category: "Data",
    size: "Technical",
    description: "Scikit-Learn official documentation for machine learning in Python.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-600",
    link: "https://scikit-learn.org/stable/user_guide.html"
  },
  {
    id: 13,
    title: "TypeScript Deep Dive",
    type: "eBook",
    category: "Web",
    size: "Full Guide",
    description: "The definitive guide to understanding TypeScript for modern web apps.",
    icon: Book,
    color: "bg-blue-100 text-blue-500",
    link: "https://www.typescriptlang.org/docs/"
  },
  {
    id: 14,
    title: "Next.js 15 Mastery",
    type: "PDF",
    category: "Web",
    size: "Official",
    description: "Learn App Router, Server Actions, and advanced Next.js patterns.",
    icon: FileText,
    color: "bg-black text-white",
    link: "https://nextjs.org/docs"
  },
  {
    id: 15,
    title: "Docker Essentials",
    type: "Video",
    category: "Engineering",
    size: "1.5 Hours",
    description: "Containerization fundamentals for developers and DevOps engineers.",
    icon: Video,
    color: "bg-blue-100 text-blue-400",
    link: "https://docs.docker.com/get-started/"
  },
  {
    id: 16,
    title: "Kubernetes Handbook",
    type: "eBook",
    category: "Engineering",
    size: "Admin Guide",
    description: "Managing production clusters with Kubernetes and Helm.",
    icon: Book,
    color: "bg-blue-200 text-blue-700",
    link: "https://kubernetes.io/docs/home/"
  },
  {
    id: 17,
    title: "Cisco DevNet Associate",
    type: "PDF",
    category: "Networking",
    size: "Official",
    description: "Combining networking and software development with Cisco DevNet.",
    icon: FileText,
    color: "bg-sky-100 text-sky-600",
    link: "https://developer.cisco.com/certification/"
  },
  {
    id: 18,
    title: "Azure Cloud Fundamentals",
    type: "Video",
    category: "Cloud",
    size: "Exam AZ-900",
    description: "Microsoft Azure official training modules and certification prep.",
    icon: Video,
    color: "bg-blue-100 text-blue-600",
    link: "https://learn.microsoft.com/en-us/training/azure/"
  },
  {
    id: 19,
    title: "UI Design Principles",
    type: "eBook",
    category: "Design",
    size: "4.5 MB",
    description: "Refactoring UI: A practical guide to beautiful interface design.",
    icon: Book,
    color: "bg-pink-100 text-pink-500",
    link: "https://www.refactoringui.com"
  },
  {
    id: 20,
    title: "MongoDB University",
    type: "Video",
    category: "Data",
    size: "Full Access",
    description: "Learn NoSQL database design and management from the creators.",
    icon: Video,
    color: "bg-green-100 text-green-700",
    link: "https://university.mongodb.com"
  },
  {
    id: 21,
    title: "Tailwind CSS Mastery",
    type: "PDF",
    category: "Web",
    size: "Cheat Sheet",
    description: "Complete utility-first CSS guide for rapid frontend development.",
    icon: FileText,
    color: "bg-cyan-100 text-cyan-500",
    link: "https://tailwindcss.com/docs"
  },
  {
    id: 22,
    title: "Cisco CyberOps Associate",
    type: "eBook",
    category: "Security",
    size: "Official",
    description: "Security operations fundamentals and Cisco security products.",
    icon: Book,
    color: "bg-orange-100 text-orange-700",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/cyberops-associate.html"
  },
  {
    id: 23,
    title: "Laravel for Pros",
    type: "Video",
    category: "Web",
    size: "45 Lectures",
    description: "The PHP framework for Web Artisans. Master Eloquent and Blade.",
    icon: Video,
    color: "bg-red-100 text-red-600",
    link: "https://laracasts.com"
  },
  {
    id: 24,
    title: "Power BI Bootcamp",
    type: "PDF",
    category: "Data",
    size: "Visual Guide",
    description: "Data visualization and business intelligence with Microsoft Power BI.",
    icon: FileText,
    color: "bg-yellow-100 text-yellow-600",
    link: "https://learn.microsoft.com/en-us/power-bi/"
  },
  {
    id: 25,
    title: "Angular Architecture",
    type: "eBook",
    category: "Web",
    size: "v19 Guide",
    description: "Building scalable enterprise applications with Angular signals and standalone components.",
    icon: Book,
    color: "bg-red-100 text-red-500",
    link: "https://angular.dev"
  },
  {
    id: 26,
    title: "SQL Performance Tuning",
    type: "eBook",
    category: "Data",
    size: "Advanced",
    description: "Optimizing complex queries and database schema for high-performance applications.",
    icon: Book,
    color: "bg-indigo-100 text-indigo-700",
    link: "https://use-the-index-luke.com"
  },
  {
    id: 27,
    title: "CompTIA A+ Prep",
    type: "Video",
    category: "Engineering",
    size: "Full Series",
    description: "Complete hardware and software troubleshooting guide for IT professionals.",
    icon: Video,
    color: "bg-orange-100 text-orange-600",
    link: "https://www.professormesser.com/free-a-plus-training/"
  },
  {
    id: 28,
    title: "Juniper Open Learning",
    type: "eBook",
    category: "Networking",
    size: "Certification",
    description: "Free networking certification training from Juniper Networks.",
    icon: Book,
    color: "bg-blue-100 text-blue-900",
    link: "https://learningportal.juniper.net"
  },
  {
    id: 29,
    title: "Red Hat Enterprise Linux",
    type: "PDF",
    category: "Engineering",
    size: "Admin Guide",
    description: "Official RHEL administration guide for enterprise server management.",
    icon: FileText,
    color: "bg-red-200 text-red-800",
    link: "https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9"
  },
  {
    id: 30,
    title: "Cisco Wireless Docs",
    type: "PDF",
    category: "Networking",
    size: "Deployment",
    description: "Enterprise wireless network design and deployment best practices.",
    icon: FileText,
    color: "bg-blue-100 text-blue-400",
    link: "https://www.cisco.com/c/en/us/td/docs/wireless/controller/9800/config-guide/b-wl-dg.html"
  },
  {
    id: 31,
    title: "Go Programming Guide",
    type: "eBook",
    category: "Engineering",
    size: "Technical",
    description: "An introduction to programming in Go, covering concurrency and systems.",
    icon: Book,
    color: "bg-sky-100 text-sky-600",
    link: "https://go.dev/doc/tutorial/getting-started"
  },
  {
    id: 32,
    title: "Vue.js 3 Concepts",
    type: "Video",
    category: "Web",
    size: "Modern",
    description: "Composition API and Vite integration for modern Vue applications.",
    icon: Video,
    color: "bg-green-100 text-green-500",
    link: "https://vuejs.org/guide/introduction.html"
  },
  {
    id: 33,
    title: "Wireshark University",
    type: "Video",
    category: "Networking",
    size: "Analysis",
    description: "Learn packet analysis and network troubleshooting with Wireshark.",
    icon: Video,
    color: "bg-blue-200 text-blue-800",
    link: "https://www.wireshark.org/docs/"
  },
  {
    id: 34,
    title: "Cisco CCNP Security",
    type: "eBook",
    category: "Security",
    size: "350-701 SCOR",
    description: "Implementing and Operating Cisco Security Core Technologies.",
    icon: Book,
    color: "bg-red-100 text-red-900",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-security.html"
  },
  {
    id: 35,
    title: "Network Programmability",
    type: "PDF",
    category: "Engineering",
    size: "Technical",
    description: "Introduction to SDN, APIs, and network automation with Python.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-800",
    link: "https://developer.cisco.com/startnow/"
  },
  {
    id: 36,
    title: "Cisco SD-WAN Guide",
    type: "PDF",
    category: "Networking",
    size: "Official",
    description: "Design and deployment of Cisco Software-Defined WAN solutions.",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    link: "https://www.cisco.com/c/en/us/td/docs/solutions/CVD/SDWAN/cisco-sdwan-design-guide.html"
  },
  {
    id: 37,
    title: "CompTIA Network+ Prep",
    type: "Video",
    category: "Networking",
    size: "N10-008",
    description: "Foundational networking knowledge for entry-level IT roles.",
    icon: Video,
    color: "bg-orange-100 text-orange-700",
    link: "https://www.professormesser.com/network-plus/n10-008/n10-008-training-course/"
  },
  {
    id: 38,
    title: "Cloud Native Networking",
    type: "eBook",
    category: "Cloud",
    size: "Technical",
    description: "Understanding networking in Kubernetes, Istio, and Cilium.",
    icon: Book,
    color: "bg-cyan-100 text-cyan-800",
    link: "https://kubernetes.io/docs/concepts/cluster-administration/networking/"
  },
  {
    id: 39,
    title: "Cisco Enterprise Wireless",
    type: "Video",
    category: "Networking",
    size: "Advanced",
    description: "Implementing and securing high-density wireless networks.",
    icon: Video,
    color: "bg-blue-100 text-blue-500",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/specialist/enterprise/wireless-design.html"
  },
  {
    id: 40,
    title: "BGP Expert Guide",
    type: "PDF",
    category: "Networking",
    size: "Deep Dive",
    description: "Advanced routing protocols, path manipulation, and internet peering.",
    icon: FileText,
    color: "bg-slate-100 text-slate-800",
    link: "https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/26634-bgp-toc.html"
  },
  {
    id: 41,
    title: "AWS Advanced Networking",
    type: "eBook",
    category: "Cloud",
    size: "Specialty",
    description: "AWS Certified Advanced Networking – Specialty prep guide.",
    icon: Book,
    color: "bg-yellow-100 text-yellow-800",
    link: "https://aws.amazon.com/certification/certified-advanced-networking-specialty/"
  },
  {
    id: 42,
    title: "Cisco Collaboration Core",
    type: "PDF",
    category: "Networking",
    size: "CLCOR",
    description: "IP telephony, video terminals, and collaboration infrastructure.",
    icon: FileText,
    color: "bg-purple-100 text-purple-700",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-collaboration.html"
  },
  {
    id: 43,
    title: "Network Security Audit",
    type: "Video",
    category: "Security",
    size: "Practical",
    description: "How to perform vulnerability assessments on enterprise networks.",
    icon: Video,
    color: "bg-red-100 text-red-500",
    link: "https://www.kali.org/docs/"
  },
  {
    id: 44,
    title: "Cisco Firepower Threat",
    type: "eBook",
    category: "Security",
    size: "NGFW Guide",
    description: "Configuration and management of Cisco Firepower Next-Generation Firewalls.",
    icon: Book,
    color: "bg-red-200 text-red-800",
    link: "https://www.cisco.com/c/en/us/td/docs/security/firepower/quick_start/fp2100/firepower-2100-qsg.html"
  },
  {
    id: 45,
    title: "DevOps for Networkers",
    type: "Video",
    category: "Engineering",
    size: "Training",
    description: "CI/CD pipelines for infrastructure as code and network configuration.",
    icon: Video,
    color: "bg-emerald-100 text-emerald-800",
    link: "https://developer.cisco.com/learning/tracks/devnet-associate-prep"
  },
  {
    id: 46,
    title: "Cisco CCNP Data Center",
    type: "eBook",
    category: "Networking",
    size: "350-601 DCCOR",
    description: "Implementing and Operating Cisco Data Center Core Technologies.",
    icon: Book,
    color: "bg-blue-100 text-blue-900",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-data-center.html"
  },
  {
    id: 47,
    title: "Linux Command Line",
    type: "PDF",
    category: "Engineering",
    size: "Basics",
    description: "A complete introduction to the bash shell and terminal commands.",
    icon: FileText,
    color: "bg-slate-800 text-white",
    link: "https://linuxjourney.com/"
  },
  {
    id: 48,
    title: "SQL Injection Guide",
    type: "eBook",
    category: "Security",
    size: "Advanced",
    description: "In-depth look at SQLi prevention and database security best practices.",
    icon: Book,
    color: "bg-red-50 text-red-600",
    link: "https://portswigger.net/web-security/sql-injection"
  },
  {
    id: 49,
    title: "React Native Docs",
    type: "PDF",
    category: "Mobile",
    size: "Official",
    description: "Building native apps with React. Complete components and API guide.",
    icon: FileText,
    color: "bg-blue-50 text-blue-400",
    link: "https://reactnative.dev/docs/getting-started"
  },
  {
    id: 50,
    title: "Cisco SD-Access",
    type: "Video",
    category: "Networking",
    size: "Whitepaper",
    description: "Deploying Software-Defined Access for enterprise networks.",
    icon: Video,
    color: "bg-indigo-100 text-indigo-700",
    link: "https://www.cisco.com/c/en/us/td/docs/solutions/CVD/Campus/cisco-sda-design-guide.html"
  },
  {
    id: 51,
    title: "Cisco CCNP Service Provider",
    type: "eBook",
    category: "Networking",
    size: "Official Cert",
    description: "Core networking technologies and service provider solutions (350-501 SPCOR).",
    icon: Book,
    color: "bg-blue-100 text-blue-900",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-service-provider.html"
  },
  {
    id: 52,
    title: "Google Cloud Professional",
    type: "PDF",
    category: "Cloud",
    size: "Architect",
    description: "Official study guide for Google Cloud Professional Cloud Architect certification.",
    icon: FileText,
    color: "bg-blue-50 text-blue-600",
    link: "https://cloud.google.com/learn/certification/cloud-architect"
  },
  {
    id: 53,
    title: "Docker Networking",
    type: "Video",
    category: "Engineering",
    size: "Deep Dive",
    description: "Understanding bridge, host, and overlay networks in containerized environments.",
    icon: Video,
    color: "bg-blue-100 text-blue-400",
    link: "https://docs.docker.com/network/"
  },
  {
    id: 54,
    title: "Advanced CSS Layouts",
    type: "eBook",
    category: "Web",
    size: "Grid & Flex",
    description: "Mastering complex responsive layouts with CSS Grid and modern Flexbox.",
    icon: Book,
    color: "bg-pink-100 text-pink-600",
    link: "https://web.dev/learn/css/"
  },
  {
    id: 55,
    title: "Cisco Meraki Training",
    type: "Video",
    category: "Networking",
    size: "Full Course",
    description: "Cloud-managed networking fundamentals with Cisco Meraki solutions.",
    icon: Video,
    color: "bg-green-100 text-green-700",
    link: "https://meraki.cisco.com/training/"
  },
  {
    id: 56,
    title: "Python for Data Analysis",
    type: "PDF",
    category: "Data",
    size: "Pandas/NumPy",
    description: "Using Python for data manipulation, cleaning, and sophisticated analysis.",
    icon: FileText,
    color: "bg-yellow-100 text-yellow-700",
    link: "https://pandas.pydata.org/docs/user_guide/index.html"
  },
  {
    id: 57,
    title: "Cybersecurity Analyst+",
    type: "eBook",
    category: "Security",
    size: "CompTIA CySA+",
    description: "Behavioral analytics to networks and devices to prevent, detect and combat cybersecurity threats.",
    icon: Book,
    color: "bg-red-100 text-red-900",
    link: "https://www.comptia.org/certifications/cybersecurity-analyst"
  },
  {
    id: 58,
    title: "Cisco DNA Center Guide",
    type: "PDF",
    category: "Networking",
    size: "Operations",
    description: "Management and automation of campus networks with Cisco DNA Center.",
    icon: FileText,
    color: "bg-indigo-50 text-indigo-700",
    link: "https://www.cisco.com/c/en/us/td/docs/cloud-systems-management/network-automation-and-management/dna-center/2-3-3/user_guide/b_cisco_dna_center_user_guide_2_3_3.html"
  },
  {
    id: 59,
    title: "AWS Security Specialty",
    type: "Video",
    category: "Cloud",
    size: "Training",
    description: "Mastering security, identity, and compliance on the AWS platform.",
    icon: Video,
    color: "bg-orange-100 text-orange-800",
    link: "https://aws.amazon.com/certification/certified-security-specialty/"
  },
  {
    id: 60,
    title: "Redux State Management",
    type: "eBook",
    category: "Web",
    size: "Toolkit",
    description: "The official guide to using Redux Toolkit for complex React applications.",
    icon: Book,
    color: "bg-purple-100 text-purple-600",
    link: "https://redux-toolkit.js.org/introduction/getting-started"
  },
  {
    id: 61,
    title: "Cisco Secure Network Analytics",
    type: "PDF",
    category: "Security",
    size: "Flow Analysis",
    description: "Network visibility and security analytics using Cisco Secure Network Analytics (formerly Stealthwatch).",
    icon: FileText,
    color: "bg-blue-100 text-blue-800",
    link: "https://www.cisco.com/c/en/us/products/security/stealthwatch/index.html"
  },
  {
    id: 62,
    title: "Microservices Patterns",
    type: "eBook",
    category: "Engineering",
    size: "Architectural",
    description: "Design patterns for building resilient and scalable microservices architectures.",
    icon: Book,
    color: "bg-emerald-100 text-emerald-700",
    link: "https://microservices.io/patterns/index.html"
  },
  {
    id: 63,
    title: "Cisco CCNP Collaboration",
    type: "eBook",
    category: "Networking",
    size: "350-801 CLCOR",
    description: "Implementing and Operating Cisco Collaboration Core Technologies.",
    icon: Book,
    color: "bg-purple-100 text-purple-900",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-collaboration.html"
  },
  {
    id: 64,
    title: "AWS Cloud Practitioner",
    type: "Video",
    category: "Cloud",
    size: "Official Prep",
    description: "Foundational cloud concepts and AWS service overview.",
    icon: Video,
    color: "bg-orange-100 text-orange-600",
    link: "https://aws.amazon.com/certification/certified-cloud-practitioner/"
  },
  {
    id: 65,
    title: "Elasticsearch Guide",
    type: "PDF",
    category: "Data",
    size: "Search Engine",
    description: "Distributed, RESTful search and analytics engine fundamentals.",
    icon: FileText,
    color: "bg-blue-100 text-blue-500",
    link: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html"
  },
  {
    id: 66,
    title: "Cisco Unified Communications",
    type: "PDF",
    category: "Networking",
    size: "CUCM Guide",
    description: "Administering Cisco Unified Communications Manager (CUCM).",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    link: "https://www.cisco.com/c/en/us/support/unified-communications/unified-communications-manager-callmanager/series.html"
  },
  {
    id: 67,
    title: "GraphQL Mastery",
    type: "eBook",
    category: "Web",
    size: "Full Course",
    description: "The modern approach to building APIs with GraphQL and Apollo.",
    icon: Book,
    color: "bg-pink-100 text-pink-700",
    link: "https://graphql.org/learn/"
  },
  {
    id: 68,
    title: "Infrastructure as Code",
    type: "Video",
    category: "Engineering",
    size: "Terraform",
    description: "Automating cloud infrastructure with Terraform and HCL.",
    icon: Video,
    color: "bg-indigo-100 text-indigo-600",
    link: "https://developer.hashicorp.com/terraform/tutorials"
  },
  {
    id: 69,
    title: "Cisco Catalyst 9000 Docs",
    type: "PDF",
    category: "Networking",
    size: "Technical",
    description: "Configuration guide for the latest Cisco enterprise switches.",
    icon: FileText,
    color: "bg-sky-100 text-sky-800",
    link: "https://www.cisco.com/c/en/us/td/docs/switches/lan/catalyst9300/software/release/17-3/configuration_guide/b_173_9300_cg.html"
  },
  {
    id: 70,
    title: "Azure Sentinel Guide",
    type: "eBook",
    category: "Security",
    size: "SIEM/SOAR",
    description: "Cloud-native security information and event management.",
    icon: Book,
    color: "bg-blue-100 text-blue-900",
    link: "https://learn.microsoft.com/en-us/azure/sentinel/"
  },
  {
    id: 71,
    title: "Cisco Identity Services Engine",
    type: "PDF",
    category: "Security",
    size: "ISE 3.0",
    description: "Policy management platform for highly secure network access control.",
    icon: FileText,
    color: "bg-blue-200 text-blue-900",
    link: "https://www.cisco.com/c/en/us/td/docs/security/ise/3-0/admin_guide/b_ISE_admin_3_0.html"
  },
  {
    id: 72,
    title: "Site Reliability Engineering",
    type: "eBook",
    category: "Engineering",
    size: "Google SRE",
    description: "How Google runs production systems - the official SRE handbook.",
    icon: Book,
    color: "bg-green-100 text-green-800",
    link: "https://sre.google/sre-book/table-of-contents/"
  },
  {
    id: 73,
    title: "Cisco ACI Fundamentals",
    type: "Video",
    category: "Networking",
    size: "Cisco Live",
    description: "Introduction to Application Centric Infrastructure and SDN.",
    icon: Video,
    color: "bg-blue-100 text-blue-600",
    link: "https://www.cisco.com/c/en/us/solutions/data-center-virtualization/application-centric-infrastructure/index.html"
  },
  {
    id: 74,
    title: "PostgreSQL Advanced",
    type: "PDF",
    category: "Data",
    size: "Performance",
    description: "Mastering indexing, window functions, and vacuuming in Postgres.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-900",
    link: "https://www.postgresql.org/docs/current/index.html"
  },
  {
    id: 75,
    title: "Cisco Nexus 9000",
    type: "eBook",
    category: "Networking",
    size: "NX-OS Guide",
    description: "Operations and configuration of Cisco data center switches.",
    icon: Book,
    color: "bg-blue-100 text-blue-700",
    link: "https://www.cisco.com/c/en/us/td/docs/switches/datacenter/nexus9000/sw/93x/interfaces/configuration/guide/b-cisco-nexus-9000-nx-os-interfaces-configuration-guide-93x.html"
  },
  {
    id: 76,
    title: "Nginx High Performance",
    type: "PDF",
    category: "Engineering",
    size: "Load Balancing",
    description: "Advanced Nginx configuration for security, speed, and reliability.",
    icon: FileText,
    color: "bg-emerald-100 text-emerald-900",
    link: "https://nginx.org/en/docs/"
  },
  {
    id: 77,
    title: "Cisco Wireless Controller",
    type: "Video",
    category: "Networking",
    size: "WLC Config",
    description: "Managing enterprise Wi-Fi with Cisco Wireless LAN Controllers.",
    icon: Video,
    color: "bg-sky-100 text-sky-600",
    link: "https://www.cisco.com/c/en/us/support/wireless/wireless-lan-controller-software/series.html"
  },
  {
    id: 78,
    title: "AWS DevOps Engineer",
    type: "eBook",
    category: "Cloud",
    size: "Professional",
    description: "Official prep for the AWS Certified DevOps Engineer Professional exam.",
    icon: Book,
    color: "bg-orange-100 text-orange-900",
    link: "https://aws.amazon.com/certification/certified-devops-engineer-professional/"
  },
  {
    id: 79,
    title: "RabbitMQ Essentials",
    type: "PDF",
    category: "Engineering",
    size: "Messaging",
    description: "Understanding message brokers and distributed systems with RabbitMQ.",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
    link: "https://www.rabbitmq.com/documentation.html"
  },
  {
    id: 80,
    title: "Cisco SD-WAN Viptela",
    type: "Video",
    category: "Networking",
    size: "Deep Dive",
    description: "Configuring and managing Viptela SD-WAN solutions for enterprise.",
    icon: Video,
    color: "bg-indigo-100 text-indigo-800",
    link: "https://www.cisco.com/c/en/us/support/routers/sd-wan/series.html"
  },
  {
    id: 81,
    title: "Postman API Testing",
    type: "eBook",
    category: "Web",
    size: "Automation",
    description: "Automating API tests and managing environments with Postman.",
    icon: Book,
    color: "bg-orange-50 text-orange-700",
    link: "https://learning.postman.com/docs/getting-started/introduction/"
  },
  {
    id: 82,
    title: "Cisco ISE 3.1 New Features",
    type: "PDF",
    category: "Security",
    size: "Update Guide",
    description: "What's new in Cisco Identity Services Engine version 3.1.",
    icon: FileText,
    color: "bg-blue-50 text-blue-900",
    link: "https://www.cisco.com/c/en/us/td/docs/security/ise/3-1/release_notes/b_ise_31_rn.html"
  },
  {
    id: 83,
    title: "Kubernetes Security",
    type: "Video",
    category: "Engineering",
    size: "CKS Prep",
    description: "Hardening Kubernetes clusters and passing the CKS certification.",
    icon: Video,
    color: "bg-blue-100 text-blue-600",
    link: "https://kubernetes.io/docs/concepts/security/"
  },
  {
    id: 84,
    title: "Cisco Prime Infrastructure",
    type: "PDF",
    category: "Networking",
    size: "Admin Guide",
    description: "Managing traditional networks with Cisco Prime Infrastructure.",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    link: "https://www.cisco.com/c/en/us/support/cloud-systems-management/prime-infrastructure/series.html"
  },
  {
    id: 85,
    title: "Terraform Best Practices",
    type: "eBook",
    category: "Cloud",
    size: "Advanced",
    description: "Scalable Terraform modular architecture and state management.",
    icon: Book,
    color: "bg-purple-100 text-purple-700",
    link: "https://developer.hashicorp.com/terraform/docs"
  },
  {
    id: 86,
    title: "Cisco DNA Spaces",
    type: "Video",
    category: "Networking",
    size: "Location IoT",
    description: "Digitizing physical spaces using Cisco DNA Spaces and wireless IoT.",
    icon: Video,
    color: "bg-cyan-100 text-cyan-700",
    link: "https://www.cisco.com/c/en/us/products/wireless/dna-spaces/index.html"
  },
  {
    id: 87,
    title: "GraphQL Apollo Client",
    type: "PDF",
    category: "Web",
    size: "React Guide",
    description: "Managing local and remote data in React with Apollo Client.",
    icon: FileText,
    color: "bg-pink-100 text-pink-600",
    link: "https://www.apollographql.com/docs/react/"
  },
  {
    id: 88,
    title: "Cisco Umbrella Security",
    type: "eBook",
    category: "Security",
    size: "Cloud Edge",
    description: "Deploying cloud-delivered firewall and DNS-layer security with Umbrella.",
    icon: Book,
    color: "bg-blue-100 text-blue-500",
    link: "https://docs.umbrella.com/deployment-guides/docs"
  },
  {
    id: 89,
    title: "Redis Data Structures",
    type: "Video",
    category: "Data",
    size: "Cache Intro",
    description: "Mastering Redis strings, hashes, lists, and sorted sets.",
    icon: Video,
    color: "bg-red-100 text-red-600",
    link: "https://redis.io/docs/data-types/"
  },
  {
    id: 90,
    title: "Cisco HyperFlex Guide",
    type: "PDF",
    category: "Engineering",
    size: "Hyperconverged",
    description: "Deploying and managing Cisco HyperFlex HX-Series systems.",
    icon: FileText,
    color: "bg-blue-50 text-blue-800",
    link: "https://www.cisco.com/c/en/us/td/docs/hyperconverged_systems/HyperFlex_HX_DataPlatformSoftware/GettingStartedGuide/4_0/b_HyperFlex_Getting_Started_Guide_4_0.html"
  },
  {
    id: 91,
    title: "Mastering Jetpack Compose",
    type: "eBook",
    category: "Mobile",
    size: "Android 15",
    description: "Declarative UI design for modern Android applications.",
    icon: Book,
    color: "bg-green-100 text-green-900",
    link: "https://developer.android.com/jetpack/compose"
  },
  {
    id: 92,
    title: "Cisco Webex APIs",
    type: "PDF",
    category: "Web",
    size: "Developer Docs",
    description: "Building custom integrations and bots for Cisco Webex.",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    link: "https://developer.webex.com/docs/api/basics"
  },
  {
    id: 93,
    title: "Snowflake Data Warehouse",
    type: "Video",
    category: "Data",
    size: "Official",
    description: "Introduction to cloud data warehousing with Snowflake.",
    icon: Video,
    color: "bg-blue-100 text-blue-400",
    link: "https://docs.snowflake.com/en/user-guide-getting-started.html"
  },
  {
    id: 94,
    title: "Cisco ThousandEyes",
    type: "eBook",
    category: "Networking",
    size: "Cloud Vis",
    description: "Network intelligence for the cloud, internet, and SaaS applications.",
    icon: Book,
    color: "bg-indigo-100 text-indigo-900",
    link: "https://docs.thousandeyes.com/"
  },
  {
    id: 95,
    title: "Prisma ORM Mastery",
    type: "PDF",
    category: "Data",
    size: "Database Tool",
    description: "Type-safe database access for Node.js and TypeScript.",
    icon: FileText,
    color: "bg-blue-100 text-blue-900",
    link: "https://www.prisma.io/docs"
  },
  {
    id: 96,
    title: "Cisco Secure Endpoint",
    type: "Video",
    category: "Security",
    size: "AMP Guide",
    description: "Protecting devices with advanced malware protection (Secure Endpoint).",
    icon: Video,
    color: "bg-red-100 text-red-700",
    link: "https://www.cisco.com/c/en/us/products/security/amp-for-endpoints/index.html"
  },
  {
    id: 97,
    title: "Kafka Stream Processing",
    type: "eBook",
    category: "Engineering",
    size: "Real-time",
    description: "Building event-driven architectures with Apache Kafka Streams.",
    icon: Book,
    color: "bg-blue-200 text-blue-900",
    link: "https://kafka.apache.org/documentation/streams/"
  },
  {
    id: 98,
    title: "Cisco AppDynamics",
    type: "PDF",
    category: "Cloud",
    size: "Monitoring",
    description: "Application performance management and observability for complex systems.",
    icon: FileText,
    color: "bg-blue-100 text-blue-800",
    link: "https://docs.appdynamics.com/"
  },
  {
    id: 99,
    title: "Machine Learning Ops",
    type: "Video",
    category: "Data",
    size: "MLOps",
    description: "Deploying and managing machine learning models in production.",
    icon: Video,
    color: "bg-purple-100 text-purple-600",
    link: "https://ml-ops.org/"
  },
  {
    id: 100,
    title: "Cisco Certified Expert",
    type: "eBook",
    category: "Networking",
    size: "CCIE Prep",
    description: "The pinnacle of Cisco certifications. Master enterprise infrastructure.",
    icon: Book,
    color: "bg-slate-900 text-white",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/expert/ccie-enterprise-infrastructure.html"
  },
  {
    id: 101,
    title: "Cisco DNA Center API",
    type: "eBook",
    category: "Networking",
    size: "Developer",
    description: "REST API reference for automation and orchestration with Cisco DNA Center.",
    icon: Book,
    color: "bg-indigo-100 text-indigo-600",
    link: "https://developer.cisco.com/dnacenter/"
  },
  {
    id: 102,
    title: "Google SRE Workbook",
    type: "PDF",
    category: "Engineering",
    size: "Practical",
    description: "Hands-on guide to implementing reliability engineering at scale.",
    icon: FileText,
    color: "bg-green-50 text-green-700",
    link: "https://sre.google/workbook/table-of-contents/"
  },
  {
    id: 103,
    title: "AWS Solutions Architect",
    type: "Video",
    category: "Cloud",
    size: "Associate",
    description: "Official prep course for the SAA-C03 certification. Master VPC, S3, and EC2.",
    icon: Video,
    color: "bg-orange-100 text-orange-500",
    link: "https://aws.amazon.com/certification/certified-solutions-architect-associate/"
  },
  {
    id: 104,
    title: "Cisco Cyber Vision",
    type: "eBook",
    category: "Security",
    size: "Industrial",
    description: "Securing industrial control systems (ICS) and OT environments with Cisco.",
    icon: Book,
    color: "bg-blue-100 text-blue-800",
    link: "https://www.cisco.com/c/en/us/products/security/cyber-vision/index.html"
  },
  {
    id: 105,
    title: "Advanced SQL Patterns",
    type: "PDF",
    category: "Data",
    size: "Optimized",
    description: "Window functions, CTEs, and recursive queries for complex reporting.",
    icon: FileText,
    color: "bg-indigo-50 text-indigo-900",
    link: "https://modern-sql.com"
  },
  {
    id: 106,
    title: "Cisco Intersight Guide",
    type: "Video",
    category: "Cloud",
    size: "Ops Management",
    description: "Hybrid cloud management and orchestration with Cisco Intersight.",
    icon: Video,
    color: "bg-blue-50 text-blue-600",
    link: "https://www.intersight.com/help/home"
  },
  {
    id: 107,
    title: "Kubernetes Best Practices",
    type: "eBook",
    category: "Engineering",
    size: "Cloud Native",
    description: "Production-ready configurations for security, scalability, and monitoring.",
    icon: Book,
    color: "bg-blue-200 text-blue-600",
    link: "https://kubernetes.io/docs/setup/best-practices/"
  },
  {
    id: 108,
    title: "Cisco Secure Firewall",
    type: "PDF",
    category: "Security",
    size: "ASA/FTD",
    description: "Comprehensive guide to Cisco ASA and Firepower Threat Defense (FTD).",
    icon: FileText,
    color: "bg-red-100 text-red-800",
    link: "https://www.cisco.com/c/en/us/products/security/firewalls/index.html"
  },
  {
    id: 109,
    title: "Machine Learning Engineering",
    type: "PDF",
    category: "Data",
    size: "Deploying",
    description: "Building production ML pipelines with TFX and Kubeflow.",
    icon: FileText,
    color: "bg-indigo-100 text-indigo-700",
    link: "https://www.tensorflow.org/tfx/guide"
  },
  {
    id: 110,
    title: "Cisco ThousandEyes API",
    type: "Video",
    category: "Networking",
    size: "Developer",
    description: "Automating network observability tests with ThousandEyes APIs.",
    icon: Video,
    color: "bg-sky-100 text-sky-800",
    link: "https://developer.thousandeyes.com/v6/"
  },
  {
    id: 111,
    title: "React Server Components",
    type: "eBook",
    category: "Web",
    size: "Deep Dive",
    description: "Understanding the future of React rendering and data fetching.",
    icon: Book,
    color: "bg-blue-50 text-blue-400",
    link: "https://react.dev/reference/react/use-server"
  },
  {
    id: 112,
    title: "Cisco Catalyst 9800 WLC",
    type: "PDF",
    category: "Networking",
    size: "WLAN",
    description: "Configuring the latest IOS-XE based wireless controllers for enterprise.",
    icon: FileText,
    color: "bg-blue-100 text-blue-700",
    link: "https://www.cisco.com/c/en/us/support/wireless/catalyst-9800-series-wireless-controllers/series.html"
  },
  {
    id: 113,
    title: "AWS Lambda Patterns",
    type: "Video",
    category: "Cloud",
    size: "Serverless",
    description: "Event-driven architecture and asynchronous processing with AWS Lambda.",
    icon: Video,
    color: "bg-orange-100 text-orange-900",
    link: "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"
  },
  {
    id: 114,
    title: "Cisco Secure Access (SASE)",
    type: "eBook",
    category: "Security",
    size: "Convergence",
    description: "Combining SD-WAN and Cloud Security for secure edge networking.",
    icon: Book,
    color: "bg-indigo-100 text-indigo-900",
    link: "https://www.cisco.com/c/en/us/products/security/sase/index.html"
  },
  {
    id: 115,
    title: "PyTorch Deep Learning",
    type: "PDF",
    category: "Data",
    size: "Technical",
    description: "Mastering neural networks and tensor computation with PyTorch.",
    icon: FileText,
    color: "bg-red-50 text-red-600",
    link: "https://pytorch.org/docs/stable/index.html"
  },
  {
    id: 116,
    title: "Cisco NDFC Guide",
    type: "PDF",
    category: "Networking",
    size: "Data Center",
    description: "Nexus Dashboard Fabric Controller (NDFC) for LAN/SAN management.",
    icon: FileText,
    color: "bg-blue-100 text-blue-900",
    link: "https://www.cisco.com/c/en/us/support/cloud-systems-management/nexus-dashboard-fabric-controller/series.html"
  },
  {
    id: 117,
    title: "Docker Compose Mastery",
    type: "Video",
    category: "Engineering",
    size: "Multicontainer",
    description: "Orchestrating complex multi-service apps with Docker Compose V2.",
    icon: Video,
    color: "bg-blue-100 text-blue-500",
    link: "https://docs.docker.com/compose/"
  },
  {
    id: 118,
    title: "Cisco SD-WAN On-boarding",
    type: "eBook",
    category: "Networking",
    size: "PnP/ZTP",
    description: "Automated device provisioning using Plug-and-Play and Zero Touch Provisioning.",
    icon: Book,
    color: "bg-blue-100 text-blue-600",
    link: "https://www.cisco.com/c/en/us/td/docs/routers/sdwan/configuration/routing/vEdge-20-x/routing-book/m-pnp-guide.html"
  },
  {
    id: 119,
    title: "GraphQL Shield",
    type: "PDF",
    category: "Security",
    size: "API Guard",
    description: "Permission layer for GraphQL servers. Securing your data graph.",
    icon: FileText,
    color: "bg-pink-100 text-pink-700",
    link: "https://github.com/maticzav/graphql-shield"
  },
  {
    id: 120,
    title: "Cisco Live Tech Sessions",
    type: "Video",
    category: "Networking",
    size: "All Access",
    description: "On-demand access to thousands of technical sessions from Cisco experts.",
    icon: Video,
    color: "bg-slate-900 text-white",
    link: "https://www.ciscolive.com/on-demand/on-demand-library.html"
  },
  {
    id: 121,
    title: "Cisco Modeling Labs (CML)",
    type: "eBook",
    category: "Labs",
    size: "Virtual Lab",
    description: "The premier network simulation platform for Cisco network design and testing.",
    icon: Book,
    color: "bg-blue-600 text-white",
    link: "https://developer.cisco.com/docs/modeling-labs/",
    labType: "Emulation"
  },
  {
    id: 122,
    title: "DevNet Sandbox Labs",
    type: "Video",
    category: "Labs",
    size: "Interactive",
    description: "Free, 24x7 access to Cisco hardware and software labs for testing APIs and code.",
    icon: Video,
    color: "bg-emerald-600 text-white",
    link: "https://developer.cisco.com/site/sandbox/",
    labType: "Live Environment"
  },
  {
    id: 123,
    title: "Cisco dCloud Labs",
    type: "eBook",
    category: "Labs",
    size: "Demo Cloud",
    description: "Cloud-based Cisco demos, labs, and training scenarios for over 200 products.",
    icon: Book,
    color: "bg-indigo-600 text-white",
    link: "https://dcloud.cisco.com/",
    labType: "Live Environment"
  },
  {
    id: 124,
    title: "CCNA 200-301 Labs",
    type: "PDF",
    category: "Labs",
    size: "Lab Guide",
    description: "Comprehensive step-by-step lab exercises for CCNA certification prep.",
    icon: FileText,
    color: "bg-blue-100 text-blue-900",
    link: "https://www.netacad.com/courses/networking/ccna-introduction-networks",
    labType: "Simulation"
  },
  {
    id: 125,
    title: "CCNP ENCOR Mock Labs",
    type: "Video",
    category: "Labs",
    size: "Exam Prep",
    description: "Full simulation of the ENCOR 350-401 lab exam environments.",
    icon: Video,
    color: "bg-blue-900 text-white",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-enterprise/ccnp-enterprise-exams.html",
    labType: "Emulation"
  },
  {
    id: 126,
    title: "Cisco Learning Labs",
    type: "Lab",
    category: "Labs",
    size: "Full Access",
    description: "Official Cisco virtual labs for CCNA, CCNP, and CCIE practice.",
    icon: FlaskConical,
    color: "bg-purple-600 text-white",
    link: "https://learningnetworkstore.cisco.com/cisco-learning-labs",
    labType: "Live Environment"
  },
  {
    id: 127,
    title: "Packet Tracer Network Lab",
    type: "Lab",
    category: "Labs",
    size: "Beginner",
    description: "Interactive network simulation and visualization tool for labs.",
    icon: FlaskConical,
    color: "bg-blue-500 text-white",
    link: "https://www.netacad.com/courses/packet-tracer",
    labType: "Simulation"
  },
  {
    id: 128,
    title: "Cyber Security Lab",
    type: "Lab",
    category: "Labs",
    size: "Advanced",
    description: "Live environments for penetration testing and incident response practice.",
    icon: Shield,
    color: "bg-red-600 text-white",
    link: "https://www.netacad.com/courses/cybersecurity/cyberops-associate",
    labType: "Live Environment"
  },
  {
    id: 129,
    title: "Cisco UCS Emulator",
    type: "Lab",
    category: "Labs",
    size: "Compute",
    description: "Simulator for Cisco Unified Computing System to practice server management.",
    icon: FlaskConical,
    color: "bg-blue-600 text-white",
    link: "https://developer.cisco.com/site/ucs-dev-center/",
    labType: "Emulation"
  },
  {
    id: 130,
    title: "Data Center Lab V3",
    type: "Lab",
    category: "Labs",
    size: "Advanced",
    description: "Hands-on labs for Nexus, ACI, and MDS storage networking.",
    icon: FlaskConical,
    color: "bg-indigo-600 text-white",
    link: "https://dcloud.cisco.com/",
    labType: "Live Environment"
  },
  {
    id: 131,
    title: "CCIP Service Provider Lab",
    type: "Lab",
    category: "Labs",
    size: "Service Provider",
    description: "BGP, MPLS, and segment routing labs for service provider networks.",
    icon: FlaskConical,
    color: "bg-slate-900 text-white",
    link: "https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-service-provider.html",
    labType: "Live Environment"
  },
  {
    id: 132,
    title: "Cisco DevNet Sandbox",
    type: "Lab",
    category: "Labs",
    size: "FREE",
    description: "24x7 cloud-based labs for developers to test APIs and code on Cisco platforms.",
    icon: FlaskConical,
    color: "bg-emerald-500 text-white",
    link: "https://developer.cisco.com/site/sandbox/",
    labType: "Live Environment"
  },
  {
    id: 133,
    title: "AWS Cloud Quest",
    type: "Lab",
    category: "Labs",
    size: "Game-based",
    description: "Learn cloud concepts by building solutions in a 3D simulation environment.",
    icon: FlaskConical,
    color: "bg-orange-500 text-white",
    link: "https://aws.amazon.com/training/digital/aws-cloud-quest/",
    labType: "Simulation"
  },
  {
    id: 134,
    title: "Microsoft Learn Labs",
    type: "Lab",
    category: "Labs",
    size: "Sandbox",
    description: "Interactive hands-on modules for Azure, 365, and Dynamics.",
    icon: FlaskConical,
    color: "bg-blue-500 text-white",
    link: "https://learn.microsoft.com/en-us/training/browse/?resource_type=lab",
    labType: "Live Environment"
  },
  {
    id: 135,
    title: "Google Cloud Skills Hub",
    type: "Lab",
    category: "Labs",
    size: "Hands-on",
    description: "Practical cloud training with real-time access to Google Cloud environments.",
    icon: FlaskConical,
    color: "bg-blue-600 text-white",
    link: "https://www.cloudskillsboost.google/",
    labType: "Live Environment"
  },
  {
    id: 136,
    title: "Cisco ISE Sandbox",
    type: "Lab",
    category: "Labs",
    size: "Security Focus",
    description: "Policy management and network access control testing in a safe environment.",
    icon: FlaskConical,
    color: "bg-blue-900 text-white",
    link: "https://developer.cisco.com/site/identity-services-engine/",
    labType: "Live Environment"
  },
  {
    id: 137,
    title: "Juniper vLabs",
    type: "Lab",
    category: "Labs",
    size: "Networking",
    description: "Virtual sandbox for exploring Juniper Networks technologies and Junos OS.",
    icon: FlaskConical,
    color: "bg-green-600 text-white",
    link: "https://jlabs.juniper.net/vlabs/",
    labType: "Emulation"
  },
  {
    id: 138,
    title: "Fortinet Training Lab",
    type: "Lab",
    category: "Labs",
    size: "Security",
    description: "Hands-on cybersecurity labs for FortiGate and Fortinet Security Fabric.",
    icon: FlaskConical,
    color: "bg-red-600 text-white",
    link: "https://training.fortinet.com/",
    labType: "Live Environment"
  },
  {
    id: 139,
    title: "Red Hat Lab Portal",
    type: "Lab",
    category: "Labs",
    size: "Enterprise",
    description: "Test Red Hat Enterprise Linux and OpenShift in live sandbox scenarios.",
    icon: FlaskConical,
    color: "bg-red-700 text-white",
    link: "https://lab.redhat.com/",
    labType: "Live Environment"
  },
  {
    id: 140,
    title: "Packet Tracer 8.3",
    type: "Lab",
    category: "Labs",
    size: "Official",
    description: "The latest version of the network simulation tool with IoT and mobile support.",
    icon: FlaskConical,
    color: "bg-teal-600 text-white",
    link: "https://www.netacad.com/courses/packet-tracer",
    labType: "Simulation"
  },
  {
    id: 141,
    title: "Cisco DNA Center Demo",
    type: "Lab",
    category: "Labs",
    size: "Controller",
    description: "Interactive demo environment for intent-based networking and automation.",
    icon: FlaskConical,
    color: "bg-blue-700 text-white",
    link: "https://dcloud.cisco.com/",
    labType: "Live Environment"
  },
  {
    id: 142,
    title: "DevNet API Labs",
    type: "Lab",
    category: "Labs",
    size: "Coding",
    description: "Step-by-step labs for mastering Meraki, SD-WAN, and DNA Center REST APIs.",
    icon: FlaskConical,
    color: "bg-purple-600 text-white",
    link: "https://developer.cisco.com/learning/tracks",
    labType: "Live Environment"
  },
  {
    id: 143,
    title: "AWS GameDay Lab",
    type: "Lab",
    category: "Labs",
    size: "Challenge",
    description: "Collaborative sandbox where you build and troubleshoot AWS architectures under pressure.",
    icon: FlaskConical,
    color: "bg-orange-600 text-white",
    link: "https://aws.amazon.com/gameday/",
    labType: "Live Environment"
  },
  {
    id: 144,
    title: "Cisco Umbrella Demos",
    type: "Lab",
    category: "Labs",
    size: "Cloud Security",
    description: "Cloud-delivered security labs for DNS, Web, and Firewall-as-a-Service.",
    icon: FlaskConical,
    color: "bg-blue-400 text-white",
    link: "https://umbrella.cisco.com/products/free-trial",
    labType: "Live Environment"
  }
];

const types = ["All", "eBook", "PDF", "Video", "Lab"];
const categories = ["All", "Networking", "Security", "Labs", "Cloud", "Web", "Engineering", "Data", "Mobile"];
const labTypes = ["All", "Simulation", "Emulation", "Live Environment"];

export default function Library() {
  const [viewMode, setViewMode] = useState<'portal' | 'library' | 'labs'>('portal');
  const [activeType, setActiveType] = useState("All");
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLabType, setActiveLabType] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle direct navigation via hash
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash === '#labs') {
        setViewMode('labs');
        setActiveCategory('Labs');
      } else if (hash === '#library-archive') {
        setViewMode('library');
        setActiveCategory('All');
      } else if (hash === '#library') {
        setViewMode('portal');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const filteredResources = useMemo(() => {
    return resources.filter(res => {
      const matchesType = activeType === "All" || res.type === activeType;
      const matchesCategory = activeCategory === "All" || res.category === activeCategory;
      const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           res.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (viewMode === 'labs') {
        const matchesLabType = activeLabType === "All" || (res as any).labType === activeLabType;
        return matchesType && res.category === "Labs" && matchesSearch && matchesLabType;
      }
      return matchesType && matchesCategory && matchesSearch;
    });
  }, [activeType, activeCategory, activeLabType, searchQuery, viewMode]);

  const [selectedResource, setSelectedResource] = useState<typeof resources[0] | null>(null);

  return (
    <section className="py-24 bg-white relative" id="library">
      {/* Invisible anchors for hash navigation */}
      <div id="labs" className="absolute top-0 left-0 h-0 w-0" />
      <div id="library-archive" className="absolute top-0 left-0 h-0 w-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="wait">
          {viewMode === 'portal' ? (
            <motion.div 
              key="portal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-16"
            >
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4 block">Knowledge Hub</span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6">
                  Experience The <span className="text-blue-600">Future</span> of Learning
                </h2>
                <p className="text-gray-600 text-lg">
                  Access our high-tech labs and extensive technical library. 
                  Select a portal below to enter.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <button 
                  onClick={() => {
                    setViewMode('library');
                    setActiveCategory('All');
                  }}
                  className="group relative overflow-hidden bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 transition-all text-left hover:bg-blue-50"
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-20 h-20 bg-blue-100 rounded-[2rem] flex items-center justify-center text-blue-600 mb-8 group-hover:scale-110 transition-transform">
                      <Book className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Digital Library</h3>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed flex-grow">
                      Explore 2,500+ technical eBooks, PDFs, and Video collections 
                      from Cisco and cloud partners.
                    </p>
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-colors">
                      Enter Library <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute -top-12 -right-12 p-12 opacity-5 scale-150 group-hover:scale-125 transition-transform">
                    <Book className="w-64 h-64" />
                  </div>
                </button>

                <button 
                  onClick={() => {
                    setViewMode('labs');
                    setActiveCategory('Labs');
                  }}
                  className="group relative overflow-hidden bg-slate-900 p-8 md:p-12 rounded-[3.5rem] transition-all text-left hover:ring-4 hover:ring-blue-500/20 shadow-2xl"
                >
                  <div className="relative z-10 h-full flex flex-col">
                    <div className="w-20 h-20 bg-blue-500 rounded-[2rem] flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-xl shadow-blue-500/40">
                      <FlaskConical className="w-10 h-10" />
                    </div>
                    <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">High-Tech Labs</h3>
                    <p className="text-blue-100/60 text-lg mb-8 leading-relaxed flex-grow">
                      Interactive virtual environments. Test configs, run simulations, 
                      and master hardware APIs in real-time.
                    </p>
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-500 transition-colors">
                      Power Up Labs <Loader2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute -top-12 -right-12 p-12 opacity-10 scale-150 group-hover:scale-125 transition-transform text-white">
                    <FlaskConical className="w-64 h-64" />
                  </div>
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="content"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="space-y-12"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="max-w-2xl">
                  <button 
                    onClick={() => setViewMode('portal')}
                    className="text-blue-600 text-sm font-bold flex items-center gap-2 mb-6 hover:gap-3 transition-all"
                  >
                    ← Back to Portal Overview
                  </button>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4 uppercase">
                    {viewMode === 'labs' ? 'High-Tech Simulation Zone' : 'Technical Resource Library'}
                  </h2>
                  <p className="text-gray-500 text-lg">
                    {viewMode === 'labs' 
                      ? "Operational virtual labs and sandboxes for hands-on network engineering."
                      : "The complete archive of technical documentation and certification guides."}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveType(type)}
                      className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                        activeType === type 
                          ? "bg-blue-600 text-white shadow-lg" 
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Browse Bar */}
              <div className="bg-gray-50 rounded-[2.5rem] p-8 md:p-10 border border-gray-100 shadow-sm">
                <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
                  {viewMode === 'library' ? (
                    <div className="flex flex-wrap gap-2 flex-grow">
                      <span className="w-full text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Filter Categories</span>
                      {categories.map((cat) => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            activeCategory === cat 
                              ? "bg-gray-900 text-white" 
                              : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2 flex-grow">
                      <span className="w-full text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">Lab Environment Type</span>
                      {labTypes.map((lt) => (
                        <button
                          key={lt}
                          onClick={() => setActiveLabType(lt)}
                          className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
                            activeLabType === lt 
                              ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" 
                              : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                          }`}
                        >
                          {lt}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="relative w-full lg:max-w-md">
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder={`Search ${viewMode === 'labs' ? 'labs' : 'resources'}...`}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-white border border-gray-200 rounded-2xl pl-14 pr-8 py-4 text-sm focus:outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                  {filteredResources.map((res) => (
                    <motion.div
                      layout
                      key={res.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      onClick={() => setSelectedResource(res)}
                      className="group p-8 rounded-[3rem] bg-white border border-gray-100 hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/5 transition-all cursor-pointer flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <div className={`${res.color} p-5 rounded-2xl transition-transform group-hover:scale-110 shadow-lg shadow-current/10`}>
                          <res.icon className="w-7 h-7" />
                        </div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest bg-gray-50 px-3 py-1 rounded-full">
                          {res.size}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <span className="text-blue-600 text-[10px] font-bold tracking-widest uppercase">{res.category}</span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1 leading-tight group-hover:text-blue-600 transition-colors">
                          {res.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                        {res.description}
                      </p>

                      <div className="flex items-center gap-3 pt-6 border-t border-gray-50">
                        <div className="flex-grow bg-gray-50 text-gray-900 py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 group-hover:bg-blue-600 group-hover:text-white transition-all active:scale-95">
                          {viewMode === 'labs' ? 'Initialize Lab Instance' : 'Access Digital Resource'}
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {filteredResources.length === 0 && (
                <div className="py-32 text-center">
                  <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 text-gray-200">
                    <Search className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">No results found in {viewMode}</h3>
                  <p className="text-gray-500 mb-10 max-w-sm mx-auto">Try adjusting your filters or search terms to find what you're looking for.</p>
                  <button 
                    onClick={() => {
                      setActiveType("All");
                      setActiveCategory("All");
                      setActiveLabType("All");
                      setSearchQuery("");
                    }}
                    className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all shadow-xl active:scale-95"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal remains consistent */}
        <AnimatePresence>
          {selectedResource && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedResource(null)}
                className="absolute inset-0 bg-gray-900/80 backdrop-blur-md"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative bg-white rounded-[3.5rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-white/20"
              >
                <div className={`p-12 ${selectedResource.color} bg-opacity-10 flex flex-col items-center text-center`}>
                  <div className={`${selectedResource.color} p-8 rounded-3xl mb-8 shadow-xl`}>
                    <selectedResource.icon className="w-12 h-12" />
                  </div>
                  <span className="text-blue-600 text-xs font-bold tracking-widest uppercase mb-4">{selectedResource.category} Portal</span>
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight leading-tight">{selectedResource.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                    {selectedResource.description}
                  </p>
                </div>

                <div className="p-12 space-y-8 bg-white">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Category</span>
                      <span className="text-lg font-bold text-gray-900">{selectedResource.category}</span>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Version/Level</span>
                      <span className="text-lg font-bold text-gray-900">{selectedResource.size}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a 
                      href={selectedResource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setSelectedResource(null)}
                      className="flex-grow bg-blue-600 text-white p-6 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 active:scale-95"
                    >
                      {selectedResource.category === "Labs" ? (
                        <><FlaskConical className="w-6 h-6" /> Start Lab Instance</>
                      ) : (
                        <><Download className="w-6 h-6" /> Access Material</>
                      )}
                    </a>
                    <button 
                      onClick={() => setSelectedResource(null)}
                      className="px-8 py-6 bg-gray-100 text-gray-600 rounded-2xl font-bold hover:bg-gray-200 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
