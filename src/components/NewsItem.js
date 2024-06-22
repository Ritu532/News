import React, { Component } from 'react'

export class NewsItem extends Component {
  

  render() {
    let {title,description,imageUrl,newsUrl} = this.props;
    return (
      <div className="my-3">
        <div  className="card" >
        <img src={!imageUrl?"https://c.ndtvimg.com/2023-07/piif9e7g_airport-generic_625x300_26_July_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738?ver-20240615.100":imageUrl} className="card-img-top" alt="..."/>
        <div  className="card-body">
          <h5  className="card-title">{title}</h5>
          <p  className="card-text">{description}</p>
          <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem