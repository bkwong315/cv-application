import Experience from './Experience';
import Education from './Education';

interface UserInfo {
  personalInfo: {
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    telephone: string;
  };
  experience: { [key: string]: Experience };
  education: { [key: string]: Education };
}

export default UserInfo;
