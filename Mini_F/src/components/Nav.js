import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    event.preventDefault();
    this.props.setPage(event.target.name);
  }

  render() {
    const pages = this.props.pages;
    let retHtml = [];
    pages.forEach( page => {
      if (page.name === this.props.currentPage.name) {
        retHtml.push (
          <li className="nav-item" key={page.name}>
            <a name={page.name} className="nav-link active" href="" onClick={this.onClick}>{page.text}</a>
          </li>
        );
      } else {
        retHtml.push (
          <li className="nav-item" key={page.name}>
            <a name={page.name} className="nav-link" href="" onClick={this.onClick}>{page.text}</a>
          </li>
        );
      }
    }
    );
    return <ul className="nav nav-pills flex-column sidebar">{retHtml}</ul>;
  }
}

export default Nav