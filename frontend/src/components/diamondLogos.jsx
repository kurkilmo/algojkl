import React, { useEffect, useState } from 'react';
import client from './contentful'; // Assuming you have a Contentful client instance configured.

const DiamondCollabs = () => {
  const [collabs, setCollabs] = useState([]);

  useEffect(() => {
    client.getEntries({
      content_type: 'diamondCollab',
    }).then(response => {
      if (response.items && Array.isArray(response.items)) {
        const collabsData = response.items.map(item => ({
          id: item.fields.diamondCollabId,
          title: item.fields.diamondCollabTitle,
          logo: item.fields.diamondCollabLogo?.fields?.file?.url,
          url: item.fields.diamondCollabUrl,
        }));
        setCollabs(collabsData);
      } else {
        console.error("No items found in Contentful response");
      }
    }).catch(console.error);
  }, []);

  return (
    <div className="collab-logos-container">
      {collabs.length === 0 ? (
        <p>Loading Diamond Collabs...</p>
      ) : (
        collabs.map(collab => (
          <div key={collab.id} className="diamond-collab-card">
            {collab.logo && (
              <img
                src={collab.logo}
                alt={collab.title}
                className="collab-logo"
              />
            )}
            <a href={collab.url} target="_blank" rel="noopener noreferrer">
            </a>
          </div>
        ))
      )}
    </div>
  );
};

export default DiamondCollabs;
