import React, { Component } from 'react';

export class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
                <h1>About Me</h1>
                <p>
                    Hello, my name is Chris Gerken, and I am in the undergraduate Informatics program at the University of Washington.
                    My favorite website <a target="_blank" href="https://mail.google.com/">www.Google.com </a>
                    and I love toying around with technology.  My hobbies include fashion, music, hiking, and exercise and health.
                </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <p>
                    I previously created some data visualization on Gun Violence and Mass Shootings for the same class I am being tasked for
                    creating this website.  You're able to view this page on the <i>Projects</i> tab of this site.  The Gun Control ballot
                    has also starting this November and is a very hot topic given the many incidents revolving these horrific events in the
                    United States.
                </p>

                <p className="text-center">
                    Here is a picture of my dream puppy, a french bulldog.  Do not click it.
                </p>

                <div className="pics text-center">
                    <a target="_blank" href="https://goo.gl/3tsqNu">
                        <img src="https://s7d1.scene7.com/is/image/PETCO/doggydaycare-072617-image-218w-218h-d" alt="French bulldog"></img>
                    </a>
                </div>

                <footer>
                    <p className="text-center">Copyright ©2018 | Chris Gerken | <a href="mailto:csg23@uw.edu">csg23@uw.edu</a></p>
                </footer>
            </div>
        )

    }
}