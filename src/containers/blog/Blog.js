import React from 'react';
import './blog.scss';
import '../../scss/_utils.scss';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

function Blog() {
  return (
    <div className='blog'>
      <div className='blog__card'>
        <Article imgUrl={blog01}/>
      </div>
      <div className='blog__card'>
        <Article imgUrl={blog02}/>
      </div>
      <div className='blog__card'>
        <Article imgUrl={blog03}/>
      </div>
      <div className='blog__card'>
        <Article imgUrl={blog04}/>
      </div>
      <div className='blog__card'>
        <Article imgUrl={blog05}/>
      </div>
    </div>
  );
}

export default Blog;
