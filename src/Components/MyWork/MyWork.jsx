import React, { useState } from 'react';
import './MyWork.css';
import mywork_data from '../../assets/mywork_data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const MyWork = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = 4;

    const numPages = Math.ceil(mywork_data.length / projectsPerPage);
    const indexOfLastProject = (currentPage + 1) * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = mywork_data.slice(indexOfFirstProject, indexOfLastProject);

    const nextPage = () => setCurrentPage((prev) => (prev + 1) % numPages);
    const prevPage = () => setCurrentPage((prev) => (prev - 1 + numPages) % numPages);

    return (
        <div id='work' className="mywork">
            <div className="mywork-title">
                <h1>My Latest Work</h1>
            </div>
            <div className="mywork-container">
                {currentProjects.map((work, index) => (
                    <div key={index} className="work-card">
                        <div className="work-image-container">
                            <img src={work.w_img} alt={work.w_title} className="work-image" />
                        </div>
                        <div className="work-details">
                            <h3 className="work-title">{work.w_title}</h3>
                            <p className="work-description">{work.w_desc}</p>
                            <div className="work-tags">
                                {work.w_tags.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="work-tag">{`#${tag}`}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {numPages > 1 && (
                <div className="pagination-buttons">
                    <button onClick={prevPage} disabled={currentPage === 0} className="nav-button">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <button onClick={nextPage} disabled={currentPage === numPages - 1} className="nav-button">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default MyWork;
