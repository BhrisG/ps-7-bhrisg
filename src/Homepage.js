import React, { Component } from 'react';


class Homepage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>This site is created temporarily for INFO 340, in Problem Set 7, by Chris Gerken.</p>

                <p>Before navigating around, please pay attention to the following details:</p>
                <ul>
                    <li>This is a <a target="_blank" href="https://goo.gl/4xRmd5">website</a>.</li>
                    <li>Do <a target="_blank" href="https://goo.gl/1mp5pJ">not</a> touch anything that does not belong to you.</li>
                    <li>This <a href="/">link</a> does absolutely nothing.</li>
                    <li>This last line is filler text.</li>
                </ul>

                <p className="text-center">And although this is random, here are some of my favorite EDM artists:</p>
                <div className="pics text-center">
                    <img src="./data/zomb.png" alt="Zomboy album cover."></img>
                    <img src="./data/illenium.png" alt="Illenium Awake album cover."></img>
                    <img src="./data/sland.png" alt="Slander album cover."></img>
                </div>

                <footer>
                    <p className="text-center">Copyright ©2018 | Chris Gerken | <a href="mailto:csg23@uw.edu">csg23@uw.edu</a></p>
                </footer>
            </div>
        )
    }
}

export { Homepage };