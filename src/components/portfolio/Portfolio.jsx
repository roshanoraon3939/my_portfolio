import React from 'react'
import './portfolio.css'
import IMG1 from '../../assests/Kicksup.PNG'
import IMG2 from '../../assests/resume_site.PNG'
import IMG3 from '../../assests/textUtils.PNG'
import IMG4 from '../../assests/newsmani.PNG'
import IMG5 from '../../assests/weather1.png'
import IMG6 from '../../assests/bmi3.PNG'


const data = [
  {
    id:1,
    image:IMG1,
    title:" Kick's Up ",
    github:'https://github.com/roshanoraon3939/Kick-sUp',
    demo:" a React Web Application , in which we will be using Stripe.js and Commerce.js Api's . In this we'll be making a full working e-Commerce site with payment modes using Card. "
  },
  {
    id:2,
    image:IMG2,
    title:'My Resume Site',
    github:'https://github.com/roshanoraon3939/TextUtils',
    demo:" a React Web Application , consisting of my virtual resume .  "
  },
  {
    id:3,
    image:IMG3,
    title:' TextUtils ',
    github:'https://github.com/roshanoraon3939/TextUtils',
    demo:" a React Web Application , which uses the simple javascript to form basic function to be used on text such as count character, change to uppercase orlowercase , etc...."
  },
  {
    id:4,
    image:IMG4,
    title:' News-Mania ',
    github:'https://github.com/roshanoraon3939/News-Mania',
    demo:" a React Web Application , which uses the News-Api and propTypes to fetch news. "
  },
  {
    id:5,
    image:IMG5,
    title:' Weather App ',
    github:'https://github.com/roshanoraon3939/weatherapp',
    demo:" an app to help, find out the live weather data in the current location of the device as well as the weather for any city you can think of! with the help of geolocator packages"
  },
  {
    id:6,
    image:IMG6,
    title:' BMI Calculator ',
    github:'https://github.com/roshanoraon3939/Bmi_Calculator',
    demo:" an app to calculate a user's BMI by taking in input's for them and returning custom output for each different possibilities "
  },

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
      {
        data.map(({id,image,title,github,demo}) => {
          return (
            <article className='portfolio_item'>
            <div className='portfolio_item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className='portfolio_item-cta'>
              <a href={github} className='btn'> Github </a>
            </div>
            <h5>{demo}</h5>
            
        </article>
          )
        })
    }  
      </div>
    </section>
  )
}

export default Portfolio
