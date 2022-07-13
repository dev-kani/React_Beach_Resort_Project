import React, { Component } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, minima.'
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, minima.'
      },
      {
        icon: <FaShuttleVan />,
        title: "free Shuttle",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, minima.'
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, minima.'
      }
    ]
  }

  render() {
    return (
      <section className='services'>
        <Title title='services' />
        <div className='services-center'>
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Services