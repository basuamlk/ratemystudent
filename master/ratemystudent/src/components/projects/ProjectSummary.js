import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return (
    <div className = "card z-depth-0 project-summary">
    <div className ="card-content grey-text text -darken-1">
        <span className = "card-title">{project.name}</span>
        <p className = "grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
    </div>
</div>
    )
}

export default ProjectSummary;