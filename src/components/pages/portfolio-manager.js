import React, { Component } from 'react';
import axios from 'axios';
import PortfolioSidebarlist from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';

export default class PortfolioManager extends Component {
  constructor() {
    super();

    this.state = {
      portfolioItems: [],
      portfolioToEdit: {}
    }

    this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this)
    this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this)
    this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
    this.handleEditClick = this.handleEditClick.bind(this)
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this)

  }

  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {}
    });
  }

  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem
    })
  }

  handleDeleteClick(portfolioItem) {
    axios.delete(`https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
    { withCredentials: true})
    .then(response => {
      this.setState({
        portfolioItems: this.state.portfolioItems.filter(item => {
          return item.id !== portfolioItem.id
        })
      })

      return response.data;
    })
    .catch(error => {
      console.log("handleDeleteClick error", error);
    });
  }


  handleEditFormSubmission() {
    this.getPortfolioItems();
  }

  handleNewFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
    })
  }

  handleFormSubmissionError(error) {
    console.log('error', error)
  }
  
  getPortfolioItems() {
    axios
      .get("https://alecjaquez.devcamp.space/portfolio/portfolio_items", { withCredentials: true})
      .then (response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items]
        })
      })
      .catch(error => {
        console.log("error in getPortfolioItems", error)
      })
  }

  componentDidMount() {
    this.getPortfolioItems()
  }

  render() {
    return (
      <div className='portfolio-manager-wrapper'>
        <div className='left-column'>
          <PortfolioForm 
            handleEditFormSubmission= {this.handleEditFormSubmission}
            handleNewFormSubmission= {this.handleNewFormSubmission} 
            handleFormSubmissionError = {this.handleFormSubmissionError}
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portfolioToEdit}
          />

        </div>
        
        <div className='right-column'>
          <PortfolioSidebarlist 
          handleDeleteClick={this.handleDeleteClick}
          data={this.state.portfolioItems}
          handleEditClick={this.handleEditClick} />
        </div>
      </div>
    );
  }
}