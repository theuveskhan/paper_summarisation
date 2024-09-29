   // frontend/src/components/PaperCard.js
   import React from 'react';

   const PaperCard = ({ paper }) => {
       return (
           <div>
               <h2>{paper.title}</h2>
               <p>{paper.authors.join(', ')}</p>
               <p>{paper.summary}</p>
               <img src={paper.imageUrl} alt={paper.title} />
               <button>Like</button>
           </div>
       );
   };

   export default PaperCard;