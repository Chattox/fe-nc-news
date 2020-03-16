import React from 'react';
import { Link } from '@reach/router';

const NavList = props => {
  return (
    <div className="NavList">
      <p>Topics:</p>
      <ul>
        {props.topics.map(topic => {
          return (
            <Link
              key={topic.slug}
              title={topic.description}
              to={`/topics/${topic.slug}`}
            >
              <li>{topic.slug}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
