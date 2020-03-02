import React, {useState ,useEffect} from 'react';
import './pagination.css';

const Pagination = ({show, currentPage, pageCount, setPage}) => {
    const [pages, setPages] = useState([]);
    useEffect(() => {
        setPages([]);
        for(let i = 1; i <= pageCount; i++) {
            setPages((pages) => {
                return [
                    ...pages,
                    <li
                        key={i}
                        className={`page-item +  ${i === currentPage ? 'active' : ''}`}
                        onClick={() => setPage(i)}
                    >
                        <span className="page-link">
                            {i}
                            {i === currentPage ?
                                <span className="sr-only">(current)</span>
                            : null}
                        </span>
                    </li>
                ]
            })
        }
    }, [currentPage, pageCount]);

    if(!show) return null;
    return (
        <nav>
            <ul className="pagination">
                {pages}
            </ul>
        </nav>
    )
};

export default Pagination;



