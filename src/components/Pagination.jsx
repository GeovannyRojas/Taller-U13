//import React from 'react';

// eslint-disable-next-line react/prop-types
const Pagination = ({num, setPage}) => {
    return (
        
            <button onClick={() => setPage(num)}>
                {num}
            </button>
        
    );
};

export default Pagination;