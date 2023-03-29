import * as React from 'react';

import UserInfo from '../../interfaces/UserInfo';
import './CVPreview.scss';

const CVPreview = (props: UserInfo) => {
  const { personalInfo, experience, education } = props;
  return (
    <div className='cv-preview'>
      <header>
        {(personalInfo.firstName !== '' || personalInfo.lastName !== '') && (
          <h2>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h2>
        )}
        {personalInfo.address !== '' && (
          <p className='address'>Address: {personalInfo.address}</p>
        )}
        {personalInfo.email !== '' && (
          <p className='email'>Email: {personalInfo.email}</p>
        )}
        {personalInfo.telephone !== '' && (
          <p className='telephone'>Phone: {personalInfo.telephone}</p>
        )}
      </header>
      <div className='experience-container'>
        <h2>Experience</h2>
        {Object.keys(experience).map((key) => {
          return (
            <div key={`experience-${key}`} className={'exp-display-item'}>
              <p className='job-title-display'>{experience[key].jobTitle}</p>
              <p className='company-name-display'>{experience[key].company}</p>
              <p className='exp-date-display'>
                {experience[key].startDate} - {experience[key].endDate}
              </p>
              <p className='duties-display'>{experience[key].duties}</p>
            </div>
          );
        })}
      </div>
      <div className='education-container'>
        <h2>Education</h2>
        {Object.keys(education).map((key) => {
          return (
            <div key={`education-${key}`} className={'edu-display-item'}>
              <p className='degree-display'>
                {education[key].degree}, {education[key].subject}
              </p>
              <p className='institution-display'>
                {education[key].institution}
              </p>
              <p className='edu-date-display'>
                {education[key].startDate}-{education[key].endDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CVPreview;
