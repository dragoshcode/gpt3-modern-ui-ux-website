import React from 'react';
import './brand.scss';
import '../../scss/_utils.scss';
import { google, slack, atlassian, shopify, dropbox } from './imports';

function Brand() {
  return (
    <div className='brands flex'>
      <img src={google} alt='google' />
      <img src={slack} alt='slack' />
      <img src={atlassian} alt='atlassian' />
      <img src={dropbox} alt='dropbox' />
      <img src={shopify} alt='shopify' />
    </div>
  );
}

export default Brand;
