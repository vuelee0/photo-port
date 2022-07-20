import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            <div className="my-2">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                praesentium ullam quod esse quidem repellendus provident dolores. 
                Aperiam perferendis rerum, perspiciatis deserunt qui necessitatibus 
                sunt fuga nisi sint deleniti quasi?
                </p>
            </div>
        </section>
    );
}

export default About;