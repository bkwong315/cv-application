import Experience from './Experience';
import Education from './Education';
import PersonalInfo from './PersonalInfo';

interface UserInfo {
  personalInfo: PersonalInfo;
  experience: { [key: string]: Experience };
  education: { [key: string]: Education };
}

export default UserInfo;
