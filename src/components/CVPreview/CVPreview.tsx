import * as React from 'react';

import UserInfo from '../../interfaces/UserInfo';
import './CVPreview.scss';

class CVPreview extends React.Component<UserInfo> {
  render() {
    const { personalInfo, experience, education } = this.props;
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
          {Object.keys(experience).map((key) => {
            return (
              <div key={`experience-${key}`} className={'exp-display-item'}>
                <p className='job-title-display'>{experience[key].jobTitle}</p>
                <p className='company-name-display'>
                  {experience[key].company}
                </p>
                <p className='exp-date-display'>
                  {experience[key].startDate} - {experience[key].endDate}
                </p>
                <p className='duties-display'>{experience[key].duties}</p>
              </div>
            );
          })}
        </div>
        <div className='education-container edu-display-item'>
          {Object.keys(education).map((key) => {
            return (
              <div key={`education-${key}`} className={'edu-display-item'}>
                {education[key].institution}
                {education[key].degree}
                {education[key].subject}
                {education[key].startDate}
                {education[key].endDate}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CVPreview;
