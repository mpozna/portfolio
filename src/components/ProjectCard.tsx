import React from 'react'
import { TProject } from '../types'
import GitHubIcon from '@mui/icons-material/GitHub';

interface IProject {
    data: TProject
}

const ProjectCard = ({ data }: IProject) => {
    return (
        <div id='project-card'>
            <div id='card-header'>
                <div>
                    <p id='project-title'>{data.title}</p>
                </div>
                <div>
                    {data.github ?
                        <a href={data.github} target='_blank'>
                            <GitHubIcon color='action' fontSize='large' />
                        </a>
                        : <></>}
                </div>
            </div>
            <div id='project-description-container'>
                <p id='project-description'>{data.description}</p>
            </div>
            <div id='project-image-container'>
                <img id='project-image' src={data.image} />
            </div>
            <p id='project-languages'>Languages: {data.languages}</p>
        </div>
    )
}

export default ProjectCard