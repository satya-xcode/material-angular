export interface Project {
  id: string;
  title: string;
  description: string;
  long_description: string;
  tech: string[];
  images: string[];
  github: string;
  demo: string;
}

export interface UserData {
  name: string;
  title: string;
  short_bio: string;
  about: string;
  skills: string[];
  projects: Project[];
  contact: {
    email: string;
    phone: string;
  };
  social: {
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
