const icon = (slug, color) =>
  `https://cdn.simpleicons.org/${slug}${color ? `/${color}` : ""}`;

const skillsData = {
  "Programming Languages": [
    { name: "Python", icon: icon("python") },
    { name: "C++", icon: icon("cplusplus") },
    { name: "JavaScript", icon: icon("javascript") },
    { name: "TypeScript", icon: icon("typescript") },
  ],
  "Frontend Technologies": [
    { name: "React.js", icon: icon("react") },
    { name: "Next.js", icon: icon("nextdotjs") },
    { name: "Vue.js", icon: icon("vuedotjs") },
    { name: "Vuex", icon: icon("vuedotjs") },
    { name: "Redux", icon: icon("redux") },
    { name: "React Native", icon: icon("react") },
    { name: "HTML5", icon: icon("html5") },
    { name: "CSS3", icon: icon("css") },
    { name: "Tailwind CSS", icon: icon("tailwindcss") },
    { name: "shadcn/ui", icon: icon("shadcnui") },
  ],
  "Libraries, APIs & Services": [
    { name: "AG Grid", icon: icon("aggrid") },
    { name: "Quill.js", icon: icon("quill") },
    { name: "Highcharts", icon: icon("highcharts") },
    { name: "D3.js", icon: icon("d3") },
    { name: "Chart.js", icon: icon("chartdotjs") },
    { name: "Axios", icon: icon("axios") },
    { name: "Amazon S3", icon: icon("amazons3") },
    { name: "CDN", icon: icon("cloudflare") },
    { name: "WebSockets", icon: icon("socketdotio") },
  ],
  "Backend & Data": [
    { name: "Node.js", icon: icon("nodedotjs") },
    { name: "Express.js", icon: icon("express") },
    { name: "REST APIs", icon: icon("openapiinitiative") },
    { name: "Authentication", icon: icon("auth0") },
    { name: "JWT", icon: icon("jsonwebtokens") },
    { name: "OAuth", icon: icon("auth0") },
    { name: "MongoDB", icon: icon("mongodb") },
    { name: "Redis", icon: icon("redis") },
  ],
  "Architecture & System Design": [
    { name: "Microservices", icon: icon("kubernetes") },
    { name: "Microfrontends", icon: icon("webpack") },
    { name: "Event-Driven Architecture", icon: icon("apachekafka") },
    { name: "Distributed Systems", icon: icon("apachekafka") },
    { name: "System Design", icon: icon("diagramsdotnet") },
    { name: "RBAC", icon: icon("auth0") },
  ],
  "Tools & Core Skills": [
    { name: "Git/GitHub", icon: icon("github") },
    { name: "Docker", icon: icon("docker") },
    { name: "Data Structures", icon: icon("codecademy") },
    { name: "Algorithms", icon: icon("leetcode") },
    { name: "Problem Solving", icon: icon("leetcode") },
    { name: "Performance Optimization", icon: icon("lighthouse") },
  ],
};

export default skillsData;
