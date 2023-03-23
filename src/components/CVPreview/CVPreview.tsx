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
              <div className={`experience-${key}`}>
                {experience[key].jobTitle}
                {experience[key].company}
                {experience[key].startDate}
                {experience[key].endDate}
                {experience[key].duties}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default CVPreview;
