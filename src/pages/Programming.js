import React from 'react'
import NavBar from "../components/NavBar";
import "../styles/Programming.css"
import "../styles/App.css"



export default function Programming(props) {
    let project = props.project;
    let page = project.page;
    const nextSection = React.useRef();
    const goTo = (ref) => {
        ref.current.scrollIntoView({ behavior: "smooth", })
    }

    return (<div className='Programming' ref={nextSection}>
        <div>
            <NavBar selected="Portfolio" />
        </div>

        <img className='main' src={project.image} alt={project.title} />
        <h1 className='main'>{project.title}</h1>

        <Divider title="Overview" />

        <div className='overview'>
            <div className='overview_info'>
                <p className='overview title'>
                    <b className='overview'>
                        Overview
                    </b>
                </p>
                <p className='overview'>
                    {page.overview}
                </p>
            </div>
            <div>
                <p className='overview title'>
                    <b className='overview'>
                        Class
                    </b>
                </p>
                <p className='overview'>
                    {project.class}
                </p>
            </div>

            <div>
                <p className='overview title'>
                    <b className='overview'>
                        Timeline
                    </b>
                </p>
                <p className='overview'>
                    {project.date}
                </p>
            </div>

            <div>
                <p className='overview title'>
                    <b className='overview'>
                        Tools
                    </b>
                </p>
                <p className='overview'>
                    {project.tools}
                </p>
            </div>
        </div>

        <div className='proj_links'>
            {("figma" in page.links) && <a href={page.links.figma} target="_blank" rel="noopener noreferrer">
                <svg className='stroke' viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 12.375C11.25 10.2864 12.0797 8.28338 13.5565 6.80653C15.0334 5.32969 17.0364 4.5 19.125 4.5H27V20.25H19.125C17.0364 20.25 15.0334 19.4203 13.5565 17.9435C12.0797 16.4666 11.25 14.4636 11.25 12.375Z" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27 4.5H34.875C35.9092 4.5 36.9332 4.70369 37.8886 5.09945C38.8441 5.4952 39.7122 6.07527 40.4435 6.80653C41.1747 7.5378 41.7548 8.40593 42.1505 9.36137C42.5463 10.3168 42.75 11.3408 42.75 12.375C42.75 13.4092 42.5463 14.4332 42.1505 15.3886C41.7548 16.3441 41.1747 17.2122 40.4435 17.9435C39.7122 18.6747 38.8441 19.2548 37.8886 19.6506C36.9332 20.0463 35.9092 20.25 34.875 20.25H27V4.5Z" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M27 28.125C27 27.0908 27.2037 26.0668 27.5994 25.1114C27.9952 24.1559 28.5753 23.2878 29.3065 22.5565C30.0378 21.8253 30.9059 21.2452 31.8614 20.8494C32.8168 20.4537 33.8408 20.25 34.875 20.25C35.9092 20.25 36.9332 20.4537 37.8886 20.8494C38.8441 21.2452 39.7122 21.8253 40.4435 22.5565C41.1747 23.2878 41.7548 24.1559 42.1505 25.1114C42.5463 26.0668 42.75 27.0908 42.75 28.125C42.75 29.1592 42.5463 30.1832 42.1505 31.1386C41.7548 32.0941 41.1747 32.9622 40.4435 33.6935C39.7122 34.4247 38.8441 35.0048 37.8886 35.4006C36.9332 35.7963 35.9092 36 34.875 36C33.8408 36 32.8168 35.7963 31.8614 35.4006C30.9059 35.0048 30.0378 34.4247 29.3065 33.6935C28.5753 32.9622 27.9952 32.0941 27.5994 31.1386C27.2037 30.1832 27 29.1592 27 28.125V28.125Z" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.25 43.875C11.25 41.7864 12.0797 39.7834 13.5565 38.3065C15.0334 36.8297 17.0364 36 19.125 36H27V43.875C27 45.9636 26.1703 47.9666 24.6935 49.4435C23.2166 50.9203 21.2136 51.75 19.125 51.75C17.0364 51.75 15.0334 50.9203 13.5565 49.4435C12.0797 47.9666 11.25 45.9636 11.25 43.875Z" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M11.25 28.125C11.25 26.0364 12.0797 24.0334 13.5565 22.5565C15.0334 21.0797 17.0364 20.25 19.125 20.25H27V36H19.125C17.0364 36 15.0334 35.1703 13.5565 33.6935C12.0797 32.2166 11.25 30.2136 11.25 28.125Z" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                Explore the Figma Prototype
            </a>}
            {("figma" in page.links) && <div style={{ height: '1vw' }}></div>}
            {("github" in page.links) && <a href={page.links.github} target="_blank" rel="noopener noreferrer">
                <svg className='stroke' viewBox="0 0 49 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_273_363)" filter="url(#filter0_d_273_363)">
                        <path d="M32.3346 40.3343V33.2393C32.4034 32.3651 32.2853 31.4863 31.9882 30.6612C31.691 29.8362 31.2217 29.0839 30.6113 28.4543C36.368 27.8126 42.418 25.6309 42.418 15.6209C42.4175 13.0613 41.4329 10.5998 39.668 8.74594C40.5037 6.50654 40.4446 4.03125 39.503 1.83428C39.503 1.83428 37.3396 1.19261 32.3346 4.54761C28.1327 3.40878 23.7033 3.40878 19.5013 4.54761C14.4963 1.19261 12.333 1.83428 12.333 1.83428C11.3913 4.03125 11.3322 6.50654 12.168 8.74594C10.3899 10.6136 9.40426 13.0973 9.41797 15.6759C9.41797 25.6126 15.468 27.7943 21.2246 28.5093C20.6215 29.1326 20.1563 29.8759 19.8594 30.6908C19.5625 31.5057 19.4404 32.3741 19.5013 33.2393V40.3343M19.5013 34.8343C10.3346 37.5843 10.3346 30.2509 6.66797 29.3343L19.5013 34.8343Z" stroke-width="3.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <filter id="filter0_d_273_363" x="-1" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_273_363" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_273_363" result="shape" />
                        </filter>
                        <clipPath id="clip0_273_363">
                            <rect width="44" height="44" transform="translate(3)" />
                        </clipPath>
                    </defs>
                </svg>

                {(page.links.github.includes("github")) ? "See the GitHub Repository" : "GitHub Repository Available on Request"}
            </a>}
            {("github" in page.links) && <div style={{ height: '1vw' }}></div>}
            {("medium" in page.links) && <a href={page.links.medium} target="_blank" rel="noopener noreferrer">
                <svg className='fill' viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1875 37.5C12.1875 32.1562 16.5312 27.8125 21.875 27.8125H34.375V21.875H21.875C13.25 21.875 6.25 28.875 6.25 37.5C6.25 46.125 13.25 53.125 21.875 53.125H34.375V47.1875H21.875C16.5312 47.1875 12.1875 42.8438 12.1875 37.5ZM25 40.625H50V34.375H25V40.625ZM53.125 21.875H40.625V27.8125H53.125C58.4688 27.8125 62.8125 32.1562 62.8125 37.5C62.8125 42.8438 58.4688 47.1875 53.125 47.1875H40.625V53.125H53.125C61.75 53.125 68.75 46.125 68.75 37.5C68.75 28.875 61.75 21.875 53.125 21.875Z" />
                </svg>
                Read the Medium Article
            </a>}
        </div>
        {page.structure.map(e => {
            if (e.type === "divider") return <Divider title={e.title} />
            else if (e.type === "section") return <Section title={e.title} subtitle={e.subtitle} description={e.description} />
            else if (e.type === "centerImage") return <CenterImage image={e.image} alt={e.alt} caption={e.caption} />
            else if (e.type === "inlineImage") return <ImageInline image={e.image} alt={e.alt} caption={e.caption} />
            else if (e.type === "emptySection") return <EmptySection description={e.description} />
            return <span></span>;
        })}

        <div onClick={() => goTo(nextSection)} style={{ cursor: 'pointer' }}>
            <svg className="uparrow" width="73" height="73" viewBox="0 0 73 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.1673 36.5L16.4561 40.7888L33.459 23.8163L33.459 60.8334L39.5423 60.8334L39.5423 23.8163L56.5148 40.8192L60.834 36.5L36.5007 12.1667L12.1673 36.5Z" />
            </svg>
            <h3>Return to Top</h3>
        </div>
    </div>)
}

export function Divider(props) {
    return (
        <div className='seperator'>
            <h1 className='main divider'> {props.title} </h1>
        </div>
    )
}

export function Section(props) {
    return (
        <div className='section'>
            <div className='titles'>
                <p className='overview align bar'><b>{props.title}</b></p>
                <p className='suboverview align'>{props.subtitle}</p>
            </div>
            <div className='descriptor'>
                <p className='descriptor'>{props.description}</p>
            </div>
        </div>
    )
}

export function CenterImage(props) {
    return (
        <figure>
            <img className='centerImage' src={props.image} alt={props.alt} />
            <figcaption> {props.caption} </figcaption>
        </figure>
    )
}


export function ImageInline(props) {
    return (
        <div className='section'>
            <div className='titles'>
                <div className='caption'>
                    <p className='caption'>
                        {props.caption}
                    </p>
                </div>
            </div>
            <div className='descriptor'>
                <img className='full' src={props.image} alt={props.alt} />
            </div>
        </div>
    )
}

export function EmptySection(props) {
    return (
        <div className='section'>
            <div className='titles'>
            </div>
            <div className='descriptor'>
                <p className='descriptor'>{props.description}</p>
            </div>
        </div>
    )
}