import React from 'react';
import './blog.scss';
import '../../scss/_utils.scss';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
  return (
    <div className='blog-wrapper'>
      <h2 className='gradient-text'>
        A lot is happening, We are blogging about it.
      </h2>
      <div className='blog grid'>
        <div className='blog__card human'>
          <Article imgUrl={blog02} />
        </div>
        <div className='blog__card chain'>
          <Article imgUrl={blog03} />
        </div>
        <div className='blog__card binary'>
          <Article imgUrl={blog04} />
        </div>
        <div className='blog__card bang'>
          <Article imgUrl={blog05} />
        </div>
        <div className='blog__card tunnel span-two'>
          <Article imgUrl={blog01} />
        </div>
      </div>
    </div>
  );
}

export default Blog;
