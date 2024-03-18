import { TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from '@mui/lab'
import Timeline from '@mui/lab/Timeline'
import { Typography, useMediaQuery } from '@mui/material'
import '../styles/work.css'
import TimelineDate from '../components/TimelineDate'
import { TWorkHistory } from '../types'

const data: TWorkHistory[] = [
  {
    title: 'Jr Software Developer',
    company: 'Eurofins TestOil',
    desktopDate: 'Present',
    mobileDates: '2022 - Present',
    description: 'Developed new features and supported the customer portal using React and TypeScript. Automated tasks using custom CLIs, Bash scripts, and Python scripts. Enhanced functionality and supported the internal legacy lab management system built in ASP. Developed a multitude of C# Rest APIs to facilitate inter-application communication and data exchange. Developed stored procedures using SQL Server to extract and analyze business-critical data.',
    connector: true,
  },
  {
    title: 'Tech Elevator',
    company: 'Coding Bootcamp',
    desktopDate: '2021',
    mobileDates: '2021',
    description: 'Completed a 14 week full stack coding bootcamp focusing on .Net, SQL Sever, JavaScript, and VueJS.',
    connector: true,
  },
  {
    title: 'Helpdesk Technician',
    company: 'Eurofins TestOil',
    desktopDate: '2020',
    mobileDates: '2020-2021',
    description: 'Served as the primary point of contact for IT support and troubleshooting across all systems and hardware. Improved network infrastructure by implementing multiple VLANs for segmentation and security. Modified the existing Active Directory setup to use role based authentication. Built physical VM hosts to create a cluster in VMWare. Leveraged SQL Server to compose queries for customers and to support the lab software.',
    connector: true,
  },
  {
    title: 'IT Administrator',
    company: 'Delaware North Sportservice',
    desktopDate: '2020',
    mobileDates: '2019-2020',
    description: 'Managed a team of four college interns, overseeing IT projects and providing technical solutions. Conducted troubleshooting of point-of-sale systems, computer hardware, and software. Played a critical role in a full-scale technology upgrade by planning and implementing the project. Automated frequent tasks using Microsoft Power Apps.',
    connector: true,
  },
  {
    title: 'Cleveland State University',
    company: 'Bachelors Degree in Information Systems',
    desktopDate: '2019',
    mobileDates: '2019',
    connector: true,
  },
  {
    title: 'IT Intern',
    company: 'Delaware North Sportservice',
    desktopDate: '2019',
    mobileDates: '2019',
    description: 'Supported point-of-sale systems and credit card devices on game days at the Cleveland Guardians stadium. Acquired comprehensive troubleshooting skills for Windows 7+, printers, phones, and other office technologies.',
    connector: false,
  },
]

const WorkHistory = () => {
  const mobile = useMediaQuery('(max-width:800px)')

  const Desktop = () => {
    return (
      <Timeline style={{ paddingTop: '0px' }}>
        {data.map(x => {
          return (
            <TimelineItem position='alternate-reverse'>
              <TimelineSeparator>
                <TimelineDate date={x.desktopDate} />
                {x.connector ? <TimelineConnector /> : null}
              </TimelineSeparator>
              <TimelineContent style={{ paddingBottom: '60px' }}>
                <div className='content-container'>
                  <Typography className='job-title' fontSize={'x-large'}>{x.title}</Typography>
                  <Typography className='company' fontSize={'smaller'}>{x.company}</Typography>
                  <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
                    {x.description}
                  </Typography>
                </div>
              </TimelineContent>
            </TimelineItem>
          )
        })}
      </Timeline>
    )
  }

  const Mobile = () => {
    return (
      <div id='timeline-container'>
        {data.map(x => {
          return (
            <div className='content-container'>
              <Typography className='job-title' fontSize={'larger'}>{x.title}</Typography>
              <Typography className='company' fontSize={'smaller'}>{x.company}</Typography>
              <Typography className='date' fontSize={'small'}>{x.mobileDates}</Typography>
              <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
                {x.description}
              </Typography>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className='work-container'>
      <p id='title'>Professional Experience</p>
      {mobile ? <Mobile /> : <Desktop />}
    </div>
  )
}

export default WorkHistory