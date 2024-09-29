import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PaperCard from './PaperCard';

const PaperList = () => {
    const [papers, setPapers] = useState([]);

    useEffect(() => {
        const fetchPapers = async () => {
            const response = await axios.get('http://localhost:5000/api/papers');
            setPapers(response.data);
        };
        fetchPapers();
    }, []);

    return (
        <div>
            {papers.map(paper => (
                <PaperCard key={paper._id} paper={paper} />
            ))}
        </div>
    );
};

export default PaperList;
