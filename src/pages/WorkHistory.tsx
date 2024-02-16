import { TimelineConnector, TimelineContent, TimelineItem, TimelineSeparator } from '@mui/lab'
import Timeline from '@mui/lab/Timeline'
import { Typography, useMediaQuery } from '@mui/material'
import '../styles/work.css'
import TimelineDate from '../components/TimelineDate'


const WorkHistory = () => {
  const mobile = useMediaQuery('(max-width:800px)')

  const DesktopView = () => {
    return (
      <div id='timeline-container'>
        <Timeline style={{ paddingTop: '0px' }}>
          <TimelineItem position='alternate-reverse'>
            <TimelineSeparator>
              <TimelineDate date={'present'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ paddingBottom: '60px' }}>
              <div className='content-container'>
                <Typography className='job-title' fontSize={'x-large'}>Jr Software Developer</Typography>
                <Typography className='company' fontSize={'smaller'}>Eurofins TestOil - Strongsville, OH</Typography>
                <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
                  Contributed to the development and maintenance of the customer portal using ReactJS with TypeScript.
                  Built command-line-interfaces, bash scripts, and python scripts to automate tasks.
                  Worked on and maintained the legacy Laboratory Information Management System built in ASP Classic.
                  Constructed C# web APIs to facilitate inter-application communication and data exchange.
                  Developed stored procedures using Microsoft SQL Server to extract and analyze business-critical data.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position='alternate-reverse'>
            <TimelineSeparator>
              <TimelineDate date={'2021'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ paddingBottom: '60px' }}>
              <div className='content-container'>
                <Typography className='job-title' fontSize={'x-large'}>Tech Elevator</Typography>
                <Typography className='company' fontSize={'smaller'}>Coding Bootcamp</Typography>
                <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
                  Completed a 16 week full stack coding bootcamp focusing on .Net, SQL Sever, JavaScript, and VueJS.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position='alternate-reverse'>
            <TimelineSeparator>
              <TimelineDate date={'2020'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent style={{ paddingBottom: '60px' }}>
              <div className='content-container'>
                <Typography className='job-title' fontSize={'x-large'}>Helpdesk Technician</Typography>
                <Typography className='company' fontSize={'smaller'}>Eurofins TestOil</Typography>
                <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
                  Primary point of contact for initial IT support and technical troubleshooting across all systems and hardware.
                  Improved network infrastructure by implementing multiple VLANs for segmentation and patch panels.
                  Modified the existing Active Directory setup to use role based authentication.
                  Built physical hosts to create a proper cluster in VMWare.
                  Used Microsoft SQL Server to run queries for customers and to support our front end software.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position='alternate-reverse'>
            <TimelineSeparator>
              <TimelineDate date={'2019'} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='content-container'>
                <Typography className='job-title' fontSize={'x-large'}>IT Administrator</Typography>
                <Typography className='company' fontSize={'smaller'}>Delaware North Sportservice</Typography>
                <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
                  Managed a team of four college interns, overseeing IT projects and providing technical solutions.
                  Conducted troubleshooting of point-of-sale systems, computer hardware, and software.
                  Led a full-scale technology upgrade by implementing new POS systems, network infrastructure, computers, and phones.
                  Improved efficiency by creating MS Power Apps and comprehensive documentation for streamlined
                  processes, including SOPs, deployment, and inventory tracking.
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem position='alternate-reverse'>
            <TimelineSeparator>
              <TimelineDate date={'2019'} />
            </TimelineSeparator>
            <TimelineContent style={{ paddingBottom: '60px' }}>
              <div className='content-container'>
                <Typography className='job-title' fontSize={'x-large'}>Cleveland State University</Typography>
                <Typography className='company' fontSize={'smaller'}>Bachelors Degree in Information Systems</Typography>
              </div>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    )
  }

  const MobileView = () => {
    return (
      <div id='timeline-container' style={{ textAlign: 'left' }}>
        <div className='content-container'>
          <Typography className='job-title' fontSize={'medium'}>Jr Software Developer</Typography>
          <Typography className='company' fontSize={'smaller'}>Eurofins TestOil - Strongsville, OH</Typography>
          <Typography className='date' fontSize={'small'}>2022 - Present</Typography>
          <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
            Contributed to the development and maintenance of the customer portal using ReactJS with TypeScript.
            Built command-line-interfaces, bash scripts, and python scripts to automate tasks.
            Worked on and maintained the legacy Laboratory Information Management System built in ASP Classic.
            Constructed C# web APIs to facilitate inter-application communication and data exchange.
            Developed stored procedures using Microsoft SQL Server to extract and analyze business-critical data.
          </Typography>
        </div>

        <div className='content-container'>
          <Typography className='job-title' fontSize={'larger'}>Tech Elevator</Typography>
          <Typography className='company' fontSize={'smaller'}>Coding Bootcamp</Typography>
          <Typography className='date' fontSize={'small'}>2021</Typography>
          <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
            Completed a 16 week full stack coding bootcamp focusing on .Net, SQL Sever, JavaScript, and VueJS.
          </Typography>
        </div>

        <div className='content-container'>
          <Typography className='job-title' fontSize={'larger'}>Helpdesk Technician</Typography>
          <Typography className='company' fontSize={'smaller'}>Eurofins TestOil</Typography>
          <Typography className='date' fontSize={'small'}>2020 - 2021</Typography>
          <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
            Primary point of contact for initial IT support and technical troubleshooting across all systems and hardware.
            Improved network infrastructure by implementing multiple VLANs for segmentation and patch panels.
            Modified the existing Active Directory setup to use role based authentication.
            Built physical hosts to create a proper cluster in VMWare.
            Used Microsoft SQL Server to run queries for customers and to support our front end software.
          </Typography>
        </div>

        <div className='content-container'>
          <Typography className='job-title' fontSize={'larger'}>IT Administrator</Typography>
          <Typography className='company' fontSize={'smaller'}>Delaware North Sportservice</Typography>
          <Typography className='date' fontSize={'small'}>2019 - 2020</Typography>
          <Typography className='job-description' fontSize={'small'} style={{ lineHeight: '20px' }}>
            Managed a team of four college interns, overseeing IT projects and providing technical solutions.
            Conducted troubleshooting of point-of-sale systems, computer hardware, and software.
            Led a full-scale technology upgrade by implementing new POS systems, network infrastructure, computers, and phones.
            Improved efficiency by creating MS Power Apps and comprehensive documentation for streamlined
            processes, including SOPs, deployment, and inventory tracking.
          </Typography>
        </div>

        <div className='content-container'>
          <Typography className='job-title' fontSize={'larger'}>Cleveland State University</Typography>
          <Typography className='company' fontSize={'smaller'}>Bachelors Degree in Information Systems</Typography>
          <Typography className='date' fontSize={'small'}>2019</Typography>
        </div>

      </div>
    )
  }

  return (
    <>
      <div className='work-container'>
        <p id='title'>Professional History</p>
        {mobile ? <MobileView /> : <DesktopView />}
      </div >
    </>
  )
}

export default WorkHistory