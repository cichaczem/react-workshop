import React from 'react';
import Header from '../components/shared/Header';

export default (props) => {
  return (
    <div>
      <Header />
      <section className="main" aria-role="main">
        {props.children}
      </section>
    </div>
  )
}
