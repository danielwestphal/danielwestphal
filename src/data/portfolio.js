import RayTracer from "../images/portfolio/raytracer.png"
import Chronicle from "../images/portfolio/chronicle.png"
import Portfolio from "../images/portfolio/portfolio.png"
import Sudoku from "../images/portfolio/sudoku.png"
import TSE from "../images/portfolio/tse.png"
import TSECrawler from "../images/portfolio/tse/crawler.png"
import TSEIndexer from "../images/portfolio/tse/indexer.png"
import TSEIndexerFile from "../images/portfolio/tse/indexer_file.png"
import TSEQuerier from "../images/portfolio/tse/querier.png"
import SimpleBalls from "../images/portfolio/raytracer/1/SimpleBalls.png"
import ReflectingBalls from "../images/portfolio/raytracer/1/ReflectingBalls.png"
import RefractingBalls from "../images/portfolio/raytracer/1/RefractingBalls.png"
import JensenBox from "../images/portfolio/raytracer/1/JensenBox.png"
import QuadLight from "../images/portfolio/raytracer/1/QuadLight.png"
import ManyBalls from "../images/portfolio/raytracer/1/ManyBalls.png"
import Ajax from "../images/portfolio/raytracer/2/Ajax.png"
import BunnyDragons from "../images/portfolio/raytracer/2/BunnyDragons.png"
import LoewenfeildBox from "../images/portfolio/raytracer/2/LoewenfeildBox.png"
import LoewenfeildWhite from "../images/portfolio/raytracer/2/LoewenfeildWhite.png"
import NefertitiWhite from "../images/portfolio/raytracer/2/NefertitiWhite.png"
import SimpleGeometry from "../images/portfolio/raytracer/2/SimpleGeometry.png"
import SponzaBuddha from "../images/portfolio/raytracer/2/SponzaBuddha.png"
import AjaxTextured from "../images/portfolio/raytracer/3/AjaxTextured.png"
import Earth from "../images/portfolio/raytracer/3/Earth.png"
import FresnelBlendBlue from "../images/portfolio/raytracer/3/FresnelBlendBlue.png"
import FresnelBlendBlack from "../images/portfolio/raytracer/3/FresnelBlendBlack.png"
import LoewenfeildTextured from "../images/portfolio/raytracer/3/LoewenfeildTextured.png"
import NefertitiTextured from "../images/portfolio/raytracer/3/NefertitiTextured.png"
import Table from "../images/portfolio/raytracer/3/Table.png"
import Teapot from "../images/portfolio/raytracer/3/Teapot.png"
import Marble from "../images/portfolio/raytracer/3/Marble.png"
import TexturedBox from "../images/portfolio/raytracer/3/TexturedBox.png"
import AjaxNormals from "../images/portfolio/raytracer/4/AjaxNormals.png"
import OdysseyMATS from "../images/portfolio/raytracer/4/OdysseyMATS.png"
import Phong from "../images/portfolio/raytracer/4/Phong.png"
import VeachMATS from "../images/portfolio/raytracer/4/VeachMATS.png"
import BlinnPhong from "../images/portfolio/raytracer/5/BlinnPhong.png"
import JensenBoxNEE from "../images/portfolio/raytracer/5/JensenBoxNEE.png"
import OdysseyMIS from "../images/portfolio/raytracer/5/OdysseyMIS.png"
import VeachMIS from "../images/portfolio/raytracer/5/VeachMIS.png"
import VeachNEE from "../images/portfolio/raytracer/5/VeachNEE.png"
import Clock from "../images/portfolio/raytracer/final/Clock.png"
import Oren0 from "../images/portfolio/raytracer/final/Oren0.png"
import Oren20 from "../images/portfolio/raytracer/final/Oren20.png"
import Oren100 from "../images/portfolio/raytracer/final/Oren100.png"
import Final from "../images/portfolio/raytracer/final/Final.png"
import ShinyGeometry from "../images/portfolio/raytracer/final/ShinyGeometry.png"

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
                    type: "inlineImage",
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
                    type: "inlineImage",
                    image: TSEIndexer,
                    alt: "Crawler Demo",
                    caption: "The output of the indexer running on the crawled webpages from above"
                },
                {
                    type: "inlineImage",
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
                    type: "inlineImage",
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
            overview: "This ray tracer is the cumulation of a terms worth of work in COSC 87. A ray tracer simulates the path of light in a scene to create a photorealistic image. Most scenes shown here were pre-arranged, but, for several, I tried my hand at creating my own scene in Blender. It was done entirely independently, with the exception of the final project which was done with a partner.",
            links: {
                github: "mailto:dew.23@dartmouth.edu"
            },
            structure: [
                { type: "divider", title: "Features" },
                {
                    type: "section", title: "Simple Ray Tracing",
                    subtitle: "A very basic ray tracer",
                    description: "The first step in this project was creating a basic renderer. I did this by using a backward ray tracing technique. Since only a very small percentage of light in a scene will actually hit an eye, it is more efficient to start tracing photons of light from the eye and 'reverse calculate' what the color of that light would be. We can do this many times and take an average of the color to make the image look better."
                },
                {
                    type: "emptySection",
                    description: "We can determine the color of an individual photon by implementing algorithms that determine the direction that light scatters and the color attenuation of that light based on the shape, material, and color of an object."
                },
                {
                    type: "emptySection",
                    description: "I first implemented a collision algorithm for spheres and an attenuation algorithm for lambertian (matte) materials."
                },

                {
                    type: "inlineImage",
                    image: SimpleBalls,
                    caption: "A simple render of two lambertian spheres"

                },
                {
                    type: "emptySection",
                    description: "I then implemented a metal material that acts similarly to a mirror."
                },
                {
                    type: "inlineImage",
                    image: ReflectingBalls,
                    caption: "A simple render of a metal sphere and a lambertian sphere"
                },
                {
                    type: "emptySection",
                    description: "Lastly, I implemented a dielectric (glass-like) material, which reflects and refracts light depending on the angle of incidence and other factors."
                },
                {
                    type: "inlineImage",
                    image: RefractingBalls,
                    caption: "A simple render of a dielectric sphere and a lambertian sphere"
                },
                {
                    type: "emptySection",
                    description: "Now that we've implemented some basic material types we can make some more complicated scenes."
                },
                {
                    type: "inlineImage",
                    image: JensenBox,
                    caption: "A 'Jensen Box'"
                },
                {
                    type: "inlineImage",
                    image: QuadLight,
                    caption: "A series of marbles with a small light source"
                },
                {
                    type: "inlineImage",
                    image: ManyBalls,
                    caption: "Many marbles in an open area, focused on the middle"
                },
                {
                    type: "section", title: "Efficient Ray Tracing",
                    subtitle: "Making the ray tracer faster using bounding volume hierarchies",
                    description: "Scenes take increasingly longer to render the more objects you put in them since you have to check for more and more collisions. Since I wanted to be able to render mesh objects (composed of thousands of triangles), I have to make the algorithm more efficient."
                },
                {
                    type: "inlineImage",
                    image: SimpleGeometry,
                    caption: "A simple example of how meshes can be used to create shapes we haven't implemented"
                },
                {
                    type: "emptySection",
                    description: "I do this by creating 'bounding volume heirarchies'. The idea behind this is that if a light ray is on the right side of the scene, there is no point in checking for any collisions on the left side of the scene. This simple observation makes it so that doubling the number of objects in a scene only increases the render time by a small percentage (<10%)."
                },
                {
                    type: "emptySection",
                    description: "After implementing a collision algorithm for triangles and making our collision checker more efficient, we can render more complicated and interesting scenes."
                },
                {
                    type: "inlineImage",
                    image: Ajax,
                    caption: "A sculpture of Ajax using a mesh"
                },
                {
                    type: "inlineImage",
                    image: LoewenfeildWhite,
                    caption: "A sculpture of Loewenfeld using a mesh"
                },
                {
                    type: "inlineImage",
                    image: LoewenfeildBox,
                    caption: "A sculpture of Loewenfeld in a box"
                },
                {
                    type: "inlineImage",
                    image: NefertitiWhite,
                    caption: "A sculpture of Nefertiti using a mesh"
                },
                {
                    type: "inlineImage",
                    image: BunnyDragons,
                    caption: "A scene consisting of bunnies and dragons"
                },
                {
                    type: "inlineImage",
                    image: SponzaBuddha,
                    caption: "A scene consisting of statue of Buddha in a museum"
                },
                {
                    type: "section", title: "Textures",
                    subtitle: "Implementing different textures, such as marble, checkerboard, custom, and fresnel blend",
                    description: "The next step in the project was to implement different textures. The way that a texture appears on an object depends on the shape of the object. Thus, we implement texture mapping for every shape which tells the renderer how a texture maps to a location on that shape."
                },
                {
                    type: "emptySection",
                    description: "I first implemented a checker pattern."
                },
                {
                    type: "inlineImage",
                    image: Teapot,
                    caption: "A checkered teapot in a box"
                },
                {
                    type: "emptySection",
                    description: "And then a marble texture."
                },
                {
                    type: "inlineImage",
                    image: Marble,
                    caption: "A marble on a marbled floor"
                },
                {
                    type: "emptySection",
                    description: "Lastly, I implemented image texturing. This lets a user specify an image to map to an object."
                },
                {
                    type: "inlineImage",
                    image: TexturedBox,
                    caption: "A textured box, where the texture wraps after it ends"
                },
                {
                    type: "inlineImage",
                    image: Earth,
                    caption: "A textured sphere of the earth (a globe)"
                },
                {
                    type: "inlineImage",
                    image: AjaxTextured,
                    caption: "A sculpture of Ajax, but now textured"
                },
                {
                    type: "inlineImage",
                    image: LoewenfeildTextured,
                    caption: "A sculpture of Loewenfeld, but now textured"
                },
                {
                    type: "inlineImage",
                    image: NefertitiTextured,
                    caption: "A sculpture of Nefertiti, but now textured"
                },
                {
                    type: "emptySection",
                    description: "I also implemented a new material called a Fresnel blend that is a mix of a lambertian and dielectric material."
                },
                {
                    type: "inlineImage",
                    image: FresnelBlendBlack,
                    caption: "A series of marbles with a black Fresnel blend"
                },
                {
                    type: "inlineImage",
                    image: FresnelBlendBlue,
                    caption: "A series of marbles with a blue Fresnel blend"
                },
                {
                    type: "emptySection",
                    description: "Finally, I tried my own hand at creating an original scene in Blender using meshes and textures."
                },
                {
                    type: "inlineImage",
                    image: Table,
                    caption: "My own scene: 'Table for One'"
                },
                {
                    type: "section", title: "Sampling Materials",
                    subtitle: "Using Monte Carlo integration to directly sample materials",
                    description: "I then implemented material sampling. Material sampling computes the attenuation and color of light reflected off of an object by computing the likelihood of a ray scattering in the direction that it does and attenuating the ray based on that probability. This is effectively using Monte Carlo simulations more explicity to build a more powerful renderer. This involves rewriting and adding to our materials to allow this to happen."
                },
                {
                    type: "emptySection",
                    description: "In order to use this material sampling we have to create an integrator. An integrator essentially tells the renderer how to render a scene and compute the colors of pixels. For example, one integrator I built computes the color of an object based only on the direction it hits it."
                },
                {
                    type: "inlineImage",
                    image: AjaxNormals,
                    caption: "An example of an integrator based on the normals"
                },
                {
                    type: "emptySection",
                    description: "I then built out the integrator to use for the material sampling."
                },
                {
                    type: "inlineImage",
                    image: OdysseyMATS,
                    caption: "A scene created using material sampling"
                },
                {
                    type: "inlineImage",
                    image: VeachMATS,
                    caption: "Another scene created using material sampling"
                },
                {
                    type: "emptySection",
                    description: "I also implemented a Phong (glossy) material."
                },
                {
                    type: "inlineImage",
                    image: Phong,
                    caption: "A scene containing phong spheres using material sampling"
                },
                {
                    type: "section", title: "Sampling Lights",
                    subtitle: "Using Monte Carlo integration to directly sample lights",
                    description: "My next step was to also implement sampling lights using the same approach as discussed above. I also implemented a new integrator for this, called a next event estimator."
                },
                {
                    type: "inlineImage",
                    image: VeachNEE,
                    caption: "A significantly less noisy image produced using next event estimation"
                },
                {
                    type: "inlineImage",
                    image: JensenBoxNEE,
                    caption: "A significantly less noisy Jensen Box produced using next event estimation"
                },
                {
                    type: "emptySection",
                    description: "Next, I built an integrator called multiple importance sampling that combines next event estimation with material sampling to produce less noisy images."
                },
                {
                    type: "inlineImage",
                    image: OdysseyMIS,
                    caption: "A very clean image produced using multiple importance sampling"
                },
                {
                    type: "inlineImage",
                    image: VeachMIS,
                    caption: "A very clean image produced using multiple importance sampling"
                },
                {
                    type: "emptySection",
                    description: "Lastly, I implemented one more material called Blinn Phong, which is a more complicated, rougher looking varient of the phong material."
                },
                {
                    type: "inlineImage",
                    image: BlinnPhong,
                    caption: "A series of blinn phong spheres"
                },
                {
                    type: "section", title: "Final Project",
                    subtitle: "Adding additional functionality and creating our own scene (partner project)",
                    description: "The theme for the final project was 'it's what's on the inside that counts'. My partner and I decided to create a scene of a person looking into a mirror and seeing their own skeleton. We also implemented some new features, including a disk feature with texture mapping."
                },
                {
                    type: "inlineImage",
                    image: Clock,
                    caption: "A disk shape with a clock texture mapped to it"
                },
                {
                    type: "emptySection",
                    description: "We also created microfacet textures, which are textures that occur when light gets trapped in the surface of a rough material."
                },
                {
                    type: "inlineImage",
                    image: Oren20,
                    caption: "Microfacet material with a low roughness coefficient"
                },
                {
                    type: "inlineImage",
                    image: Oren100,
                    caption: "Microfacet material with a high roughness coefficient"
                },
                {
                    type: "emptySection",
                    description: "We also implemented a shinier metal material"
                },
                {
                    type: "inlineImage",
                    image: ShinyGeometry,
                    caption: "Shiny chromatic material"
                },
                {
                    type: "emptySection",
                    description: "We put these all together to create our final render. We created the scene ourselves using Blender."
                },
                {
                    type: "inlineImage",
                    image: Final,
                    caption: "The final render"
                },
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