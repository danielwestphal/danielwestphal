import Ajax from "../images/portfolio/ajax.png"
import Tree from "../images/portfolio/tree.png"
import Marble from "../images/portfolio/jensen_box.png"
import Chronicle from "../images/portfolio/chronicle.png"

export const portfolio = [
    {
        image: Chronicle,
        tags: ["UI / UX"],
        title: "Chronicle",
        date: "Spring 2022",
        description: "A tablet app where family members can create collaborative digital stories to preserve precious memories.",
        link: "/portfolio/chronicle"
    },
    {
        image: Ajax,
        tags: ["Digital Art", "Programming"],
        title: "Sculpture",
        date: "Fall 2021",
        description: "Custom ray-tracing algorithm for dielectric, matte, and reflective surfaces.",
        link: "/portfolio/sculpture"
    },
    {
        image: Marble,
        tags: ["Digital Art", "Programming"],
        title: "Marbles",
        date: "Fall 2021",
        description: "Custom ray-tracing algorithm for dielectric, matte, and reflective surfaces.",
        link: "/portfolio/marbles"
    },
    {
        image: Tree,
        tags: ["Digital Art", "Programming"],
        title: "Tree",
        date: "Spring 2019",
        description: "A simple tree created using recursive programming in Processing (Java based language).",
        link: "/portfolio/tree"
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