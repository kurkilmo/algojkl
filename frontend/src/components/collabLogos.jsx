import React, { useEffect, useState } from 'react';
import client from './contentful';

const CollabCards = () => {
  const [collabs, setCollabs] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'collabs'
    }).then(response => {
      if (response.items && Array.isArray(response.items)) {
        const collabs = response.items.map(item => {
          return {
            id: item.fields.collabId,
            logo: item.fields.collabLogo,
            url: item.fields.collabUrl
          };
        });
        setCollabs(collabs);
      } else {
        console.error("No items found in Contentful response");
      }
    }).catch(console.error);
  }, []);

  return (
    <div className="collab-logos-container">
      {collabs.length === 0 ? (
        <p>Loading collaborations...</p>
      ) : (
        collabs.map(collab => (
          <a key={collab.id} href={collab.url} target="_blank" rel="noopener noreferrer">
            <img
              src={collab.logo.fields.file.url}
              alt={`Logo of ${collab.url}`}
              className="collab-logo"
            />
          </a>
        ))
      )}
    </div>
  );
};

export default CollabCards;
