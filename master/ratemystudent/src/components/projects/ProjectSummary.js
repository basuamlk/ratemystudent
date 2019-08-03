import React from 'react';

const ProjectSummary = ({project}) => {
    return (
    <div className = "card z-depth-0 project-summary">
    <div className ="card-content grey-text text -darken-1">
        <span className = "card-title">{project.title}</span>
        <p>Test stuff lolol</p>
        <p className = "grey-text">date test thing</p>
    </div>
</div>
    )
}

export default ProjectSummary;