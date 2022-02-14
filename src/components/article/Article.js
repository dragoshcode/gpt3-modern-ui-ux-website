import React from 'react';
import './article.scss';
import '../../scss/_utils.scss';

function Article({ imgUrl }) {
  return (
    <>
      <img src={imgUrl} alt='blog' />
      <div className='blog__card-data'>
        <p>Sep 26, 2021</p>
        <h2>GPT-3 and Open AI is the future. Let us exlore how it is?</h2>
      </div>
      <a href='/'>Read Full Article</a>
    </>
  );
}

export default Article;
