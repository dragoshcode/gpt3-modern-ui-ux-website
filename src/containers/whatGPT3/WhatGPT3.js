import React from 'react';
import './whatGPT3.scss';
import '../../scss/_utils.scss';
import { Feature } from '../../components';

function WhatGPT3() {
  return (
    <div className='wgpt3 flex-col' id='wgpt3'>
      <div className='wgpt3__title flex'>
        <Feature
          title={'What is GPT-3'}
          text={
            'We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
          }
        />
      </div>
      <div className='wgpt3__cta'>
        <h2 className='gradient-text'>
          The possibilities are beyond your imagination
        </h2>
        <button className='gradient-text'>Explore the library</button>
      </div>
      <div className='wgpt3__features grid'>
        <Feature
          title={'Chatbots'}
          text={
            'We so opinion friends me message as delight. Whole front do of plate heard oh ought. '
          }
        />
        <Feature
          title={'Knowledgebase'}
          text={
            'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          }
        />
        <Feature
          title={'Education'}
          text={
            'At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'
          }
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
