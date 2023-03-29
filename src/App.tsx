import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

import PersonalInfoEditor from './components/PersonalInfoEditor/PersonalInfoEditor';
import EducationEditor from './components/EducationEditor/EducationEditor';
import ExpEditor from './components/ExpEditor/ExpEditor';
import CVPreview from './components/CVPreview/CVPreview';
import templateData from './templateData';
import PersonalInfo from './interfaces/PersonalInfo';
import Education from './interfaces/Education';
import Experience from './interfaces/Experience';

import './App.scss';

const App = () => {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    telephone: '',
  });

  const [experience, setExperience] = useState<{ [key: string]: Experience }>(
    {}
  );
  const [education, setEducation] = useState<{ [key: string]: Education }>({});

  const handlePersonalInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    setPersonalInfo({ ...personalInfo, [field]: e.currentTarget.value });
  };

  const handleAddExperience = () => {
    setExperience({
      ...experience,
      [uuidv4()]: {
        jobTitle: '',
        company: '',
        startDate: '',
        endDate: '',
        duties: '',
      },
    });
  };

  const handleDeleteExperience = (id: string) => {
    let mutatedExperience = Object.assign({}, experience);
    delete mutatedExperience[id];

    setExperience(mutatedExperience);
  };

  const handleExperienceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    id: string
  ) => {
    setExperience({
      ...experience,
      [id]: {
        ...experience[id],
        [field]: e.target.value,
      },
    });
  };

  const handleAddEducation = () => {
    setEducation({
      ...education,
      [uuidv4()]: {
        institution: '',
        degree: '',
        subject: '',
        startDate: '',
        endDate: '',
      },
    });
  };

  const handleDeleteEducation = (id: string) => {
    let mutatedEducation = Object.assign({}, education);
    delete mutatedEducation[id];

    setEducation(mutatedEducation);
  };

  const handleEducationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string,
    id: string
  ) => {
    setEducation({
      ...education,
      [id]: {
        ...education[id],
        [field]: e.target.value,
      },
    });
  };

  const handleUseTemplate = () => {
    setPersonalInfo(templateData.personalInfo);
    setExperience(templateData.experience);
    setEducation(templateData.education);
  };

  return (
    <div className='layout'>
      <header>
        <h1>CV Builder</h1>
      </header>
      <main>
        <div className='cv-builder'>
          <div className='personal-info-container'>
            <h3>Personal Information</h3>
            <PersonalInfoEditor
              defaultValues={personalInfo}
              onChangeHandler={handlePersonalInfoChange}
            />
          </div>
          <div className='experience-container'>
            <h3>Experience</h3>
            <ExpEditor
              experiences={experience}
              handleAddExperience={handleAddExperience}
              handleDeleteExperience={handleDeleteExperience}
              handleExperienceChange={handleExperienceChange}
            />
          </div>
          <div className='education-container'>
            <h3>Education</h3>
            <EducationEditor
              education={education}
              addHandler={handleAddEducation}
              deleteHandler={handleDeleteEducation}
              onChangeHandler={handleEducationChange}
            />
          </div>
          <button className='template-btn' onClick={handleUseTemplate}>
            Use Template Data
          </button>
        </div>
        <CVPreview
          personalInfo={personalInfo}
          experience={experience}
          education={education}
        />
      </main>
      <footer>GitHub</footer>
    </div>
  );
};

export default App;
