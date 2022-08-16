import RayTracer from "../images/portfolio/raytracer.png"
import Chronicle from "../images/portfolio/chronicle.png"
import Portfolio from "../images/portfolio/portfolio.png"
import Sudoku from "../images/portfolio/sudoku.png"
import TSE from "../images/portfolio/tse.png"

export const portfolio = [
    {
        image: Portfolio,
        tags: ["Programming"],
        title: "Personal Website",
        date: "July 2022 - Present",
        people: "Just Me!",
        class: "Personal",
        tools: "React JS, CSS, Figma",
        description: "My very own personal website!",
        link: "/portfolio/website"
    },
    {
        image: Chronicle,
        tags: ["UI / UX"],
        title: "Chronicle",
        date: "April - June 2022 (3 weeks)",
        people: "Me, Justin Chong",
        class: "COSC 25.01: UI UX Design",
        tools: "Figma",
        description: "A tablet app where family members can create collaborative digital stories to preserve precious memories.",
        link: "/portfolio/chronicle"
    },
    {
        image: Sudoku,
        tags: ["Programming"],
        title: "Sudoku Solver",
        date: "May - June 2022 (3 weeks)",
        people: "Me, Three Others",
        class: "COSC 50: Software Design & Implementation",
        tools: "C, Bash, Git",
        description: "Sudoku solver and creator utilizing TCP server/client architecture.",
        link: "/portfolio/sudoku"
    },
    {
        image: TSE,
        tags: ["Programming"],
        title: "Tiny Search Engine",
        date: "April - May 2022 (4 weeks)",
        people: "Just Me!",
        class: "COSC 50: Software Design & Implementation",
        tools: "C, Bash",
        description: "A search engine that crawls through web pages, indexes them, and queries them.",
        link: "/portfolio/tse"
    },
    {
        image: RayTracer,
        tags: ["Programming"],
        title: "Ray-Tracer",
        date: "September - November 2021 (10 weeks)",
        people: "Me, Abigail Owen",
        class: "COSC 87: Rendering Algorithms",
        tools: "C++, Blender",
        description: "Custom ray-tracing algorithm to generate photorealistic images.",
        link: "/portfolio/ray-tracer"
    }

]

/*
Strucutre:

{
    image: "link to image",
    tags: ["Digital Art", "UI / UX", "Programming"],
    title: "Sculpture",
    date: "Fall 2021",
    description: "Custom ray-tracing algorithm for dielectric, matte, and reflective surfaces."
}


*/