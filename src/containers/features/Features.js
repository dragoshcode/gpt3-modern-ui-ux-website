import React from 'react';
import './features.scss';
import '../../scss/_utils.scss';
import { Feature } from '../../components';

function Features() {
  const featuresDetails = [
    {
      id: 1,
      title: 'Improving end distrusts instantly',
      text: 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.',
    },
    {
      id: 2,
      title: 'Become the tended active',
      text: 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.',
    },
    {
      id: 3,
      title: 'Message or am nothing',
      text: 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.',
    },
    {
      id: 4,
      title: 'Really boy law county',
      text: 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.',
    },
  ];

  return (
    <div className='features grid'>
      <div className='features__title flex-col'>
        <h2 className='gradient-text'>
          The Future is Now and You Just Need To Realize It. Step into Future
          Today Make it Happen.
        </h2>
        <button>Request Early Access to Get Started</button>
      </div>
      <div className='features__details flex-col'>
        {featuresDetails.map((item) => (
          <div className='features__details-card flex' key={item.id}>
            <Feature title={item.title} text={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Features;
