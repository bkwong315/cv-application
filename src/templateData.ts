import UserInfo from './interfaces/UserInfo';

const templateData: UserInfo = {
  personalInfo: {
    firstName: 'John',
    lastName: 'Doe',
    address: 'Los Angeles, CA',
    email: 'johndoe123@email.com',
    telephone: '(123) 456-7890',
  },
  experience: {
    exp1: {
      jobTitle: 'Job 1 Title',
      company: 'Company 1 Name',
      startDate: '6/3/2020',
      endDate: '4/26/2021',
      duties: 'Description of Duties',
    },
    exp2: {
      jobTitle: 'Job 2 Title',
      company: 'Company 2 Name',
      startDate: '7/12/2021',
      endDate: '6/15/2022',
      duties: 'Description of Duties',
    },
  },
  education: {
    edu1: {
      institution: 'Institution 1 Name',
      degree: 'Bachelor of Science',
      subject: 'Subject',
      startDate: '9/18/2016',
      endDate: '3/28/2020',
    },
    edu2: {
      institution: 'Institution 2 Name',
      degree: "Associate's Degree",
      subject: 'Subject',
      startDate: '9/24/2014',
      endDate: '6/10/2016',
    },
  },
};

export default templateData;
