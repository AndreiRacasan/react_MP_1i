import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];

  const checkNum = (n) => {
    if (n > people.length - 1) {
      return 0;
    }

    if (n < 0) {
      return people.length - 1;
    }

    return n;
  }

  const nextPerson = () => {
    setIndex((i) => {
      return checkNum(++i);
    })
  }

  const prevPerson = () => {
    setIndex((i) => {
      return checkNum(--i);
    })
  }

  const randomPerson = () => {
    setIndex(Math.floor(Math.random() * people.length));
  }

  return <article className="review">
    <div className="img-container">
      <img src={image} alt={name} className="person-img" />
      <span className="quote-icon">
        <FaQuoteRight />
      </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{job}</p>
    <p className="info">{text}</p>
    <div className="button-container">
      <button>
        <FaChevronLeft className="prev-btn" onClick={prevPerson} />
      </button>
      <button>
        <FaChevronRight className="next-btn" onClick={nextPerson} />
      </button>
    </div>
    <button className="random-btn" onClick={randomPerson}>
        Surprise Me
      </button>
  </article>;
};

export default Review;
