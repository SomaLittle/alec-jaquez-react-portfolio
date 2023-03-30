import React, { Component } from 'react';

import PortfolioItem from './portfolio-item';

export default class PortfolioContainer extends Component {
    constructor() {
        super()
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Project 1"},
                {title: "Project2"}, 
                {title: "Project3"}
            ]
        };
    }

    portfolioItems() { 

        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                
                {this.portfolioItems()}
            </div>
        )
    }
}