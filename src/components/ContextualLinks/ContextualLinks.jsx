import React from 'react';
import DynamicLink from '../Shared/DynamicLink';
import './ContextualLinks.scss';

const ContextualLinks = ({ links }) => (
  <div className="contextual-links ml-3 ml-lg-0">
    {
      links.map((item) => {
        if (item.type === 'link') {
          return (
            <div className="contextual-links__link" key={item.name}>
              <DynamicLink url={item.url} name={item.name} />
            </div>
          );
        }
        return (
          <div className="contextual-links__section" key={Math.random()}>{item.name}</div>
        );
      })
    }
  </div>
);

export default ContextualLinks;
