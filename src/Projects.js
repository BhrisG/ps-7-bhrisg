import React, { Component } from 'react';
import * as d3 from 'd3';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

export class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        d3.csv('data/projects.csv').then((d) => {
            this.setState({ data: d });
        });
    }
    render() {
        console.log(this.state.data);
        return <div>
            <h1>Projects</h1>
            <p>Here are some of my projects:</p>
            {this.state.data.map((d, i) => {
                return (
                    <div className="text-center">
                        <Card key={"project" + i}>
                            <CardBody>
                                <CardTitle><a href={d.link}>{d.name}</a></CardTitle>
                                <CardText>{d.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>

                )
            })}

            <div className="text-center">
                <p>In memory of my favorite video game, check out this spinning Paper Mario.  Working
                code taken from <a target="_blank" href="https://codepen.io/JTParrett/pen/hktzu">CodePen</a>:</p>
            </div>

            <div className="cube">
                <img src="https://static.tvtropes.org/pmwiki/pub/images/color_splash_paper_mario.png" alt="You like it?"></img>
            </div>
            <footer>
                <p className="text-center">Copyright ©2018 | Chris Gerken | <a href="mailto:csg23@uw.edu">csg23@uw.edu</a></p>
            </footer>
        </div>
    }
}