import RayTracer from "../images/portfolio/raytracer.png"
import Chronicle from "../images/portfolio/chronicle.png"
import Portfolio from "../images/portfolio/portfolio.png"
import Sudoku from "../images/portfolio/sudoku.png"
import TSE from "../images/portfolio/tse.png"
import TSECrawler from "../images/portfolio/tse/crawler.png"
import TSEIndexer from "../images/portfolio/tse/indexer.png"
import TSEIndexerFile from "../images/portfolio/tse/indexer_file.png"
import TSEQuerier from "../images/portfolio/tse/querier.png"

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
        link: "/portfolio/website",
        page: {
            overview: "hi",
            links: {
                github: "https://github.com/danielwestphal/danielwestphal",
                figma: "https://www.figma.com/file/7bqWKjDGBYeyBMLNIxCUd0/Personal-Website?node-id=0%3A1"
            },
            structure: [
                { type: "divider", title: "Process" }
            ]
        }
    },
    {
        image: Chronicle,
        tags: ["UI / UX"],
        title: "Chronicle",
        date: "April - June 2022 (3 weeks)",
        people: "Me, Justin Chong",
        class: "COSC 25.01: UI UX Design",
        tools: "Figma, UX Research",
        description: "A tablet app where family members can create collaborative digital stories to preserve precious memories.",
        link: "/portfolio/chronicle",
        page: {
            overview: "hi",
            links: {
                figma: "https://www.figma.com/file/UN2AQC525WpNJZtvke3sRk/Final_Chong_Westphal?node-id=203%3A3701",
                medium: "https://medium.com/@daniel.e.westphal.23/chronicle-ffe2deadd2bf"
            },
            structure: [
                { type: "divider", title: "Process" },
                { type: "section", title: "User Interviews", subtitle: "Who we spoke to and what we learned", description: "descroption!" },
            ]
        }
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
        link: "/portfolio/sudoku",
        page: {
            overview: "hi",
            links: {
                github: "mailto:dew.23@dartmouth.edu"
            },
            structure: [
                { type: "divider", title: "Features" }
            ]
        }
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
        link: "/portfolio/tse",
        page: {
            overview: "This Tiny Search Engine (tse) was made for my final individual project for COSC 50. The purpose of the tse is to simulate how search engines work (albeit on a smaller and simpler scale). The tse is able to crawl through and download webpages from a source, index the words on those pages, and then query and rank the pages based off of search terms. Testing was implemented for every component.",
            links: {
                github: "mailto:dew.23@dartmouth.edu"
            },
            structure: [
                { type: "divider", title: "Features" },
                {
                    type: "section",
                    title: "Crawler",
                    subtitle: "./crawler seedURL pageDirectory max_depth",
                    description: "The crawler takes in a designated seedURL and crawls all pages reachable from that URL up to a specified max_depth. The HTML files of the website that it crawls through are saved to the pageDirectory."
                },
                {
                    type: "centerImage",
                    image: TSECrawler,
                    alt: "Crawler Demo",
                    caption: "The output of the crawler running on a contained seed url"
                },
                {
                    type: "section",
                    title: "Indexer",
                    subtitle: "./indexer pageDirectory indexFilename",
                    description: "The TSE indexer is a standalone program that reads the document files produced by the TSE crawler, builds an index, and writes that index to a file. An index contains a count of how many time every word appears in each page."
                },
                {
                    type: "centerImage",
                    image: TSEIndexer,
                    alt: "Crawler Demo",
                    caption: "The output of the indexer running on the crawled webpages from above"
                },
                {
                    type: "centerImage",
                    image: TSEIndexerFile,
                    alt: "Crawler Output File",
                    caption: "The output.out file generated; we see webpage number 4 contains the word eniac one time"
                },
                {
                    type: "section", title: "Querier",
                    subtitle: "./querier pageDirectory indexFilename",
                    description: "The TSE Querier reads the index produced by the Indexer and the page files produced by the Crawler, to interactively answer written queries entered by the user. Queries can contain logic (e.g. dogs OR cats, dogs AND cats) and results are returned to the user ranked."
                },
                {
                    type: "centerImage",
                    image: TSEQuerier,
                    alt: "Querier Demo",
                    caption: "The output of the querier; fuzzquery generates random queries to search for to facilitate testing"
                }
            ]
        }
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
        link: "/portfolio/ray-tracer",
        page: {
            overview: "hi",
            links: {
                github: "mailto:dew.23@dartmouth.edu"
            },
            structure: [
                { type: "divider", title: "Features" }
            ]
        }
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