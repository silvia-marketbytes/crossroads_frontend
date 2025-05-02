import MBBSBg from "../../../assets/Services/course/MBBSBg.webp";
import AusBg from "../../../assets/Ausbildung Banner/ausbildung a_result.webp";
import MBBSBgIndia from "../../../assets/Ausbildung Banner/ausbildung b_result.webp";
 
import MBBSBg2 from "../../../assets/Ausbildung/Ausbildung A_result.webp";
import MBBSBg3 from "../../../assets/Ausbildung/Ausbildung B_result.webp";
import AusBg2 from "../../../assets/Ausbildung/Ausbildung C_result.webp";
import AusBg3 from "../../../assets/Ausbildung/Ausbildung A_result.webp";
 
export const courses = [
  {
    id: 1,
    title: "MBBS",
    image: MBBSBg,
  },
  {
    id: 2,
    title: "Ausbildung",
    image: AusBg,
  },
];
 
export const tabContent = {
  MBBS: [
    {
      id: 1,
      tab: "India",
      images: [MBBSBgIndia, MBBSBg2, MBBSBg3],
      content: [
        {
          title: "Course Overview",
          description:
            "The Bachelor of Medicine, Bachelor of Surgery (MBBS) is a highly sought-after undergraduate degree, leading to careers as doctors, surgeons, and specialists across various fields.",
        },
        {
          title: "Regulatory Body",
          description:
            "The program is overseen by the National Medical Commission (NMC) to maintain excellence and quality standards in medical education across India.",
        },
        {
          title: "Eligibility Criteria",
          subItems: [
            "Completion of 10+2 with Physics, Chemistry, and Biology.",
            "Minimum 50% aggregate marks (for general category candidates).",
          ],
        },
        {
          title: "Program Duration",
          description:
            "The MBBS course in India lasts 5.5 years, comprising 4.5 years of academic training and a compulsory 1-year internship.",
        },
        {
          title: "Admission Procedure",
          description:
            "Entry is determined by NEET scores, followed by counseling managed by the Medical Counselling Committee (MCC) or state bodies.",
        },
        {
          title: "Key Subjects",
          subItems: [
            "Core pre-clinical topics (Anatomy, Physiology, Biochemistry).",
            "Essential para-clinical areas (Pathology, Pharmacology, Microbiology).",
            "Advanced clinical training (Medicine, Surgery, Pediatrics).",
          ],
        },
        {
          title: "Professional Pathways",
          description:
            "Graduates can embark on careers as general physicians, specialists, or researchers, with prospects in healthcare facilities and educational institutions.",
        },
        {
          title: "Licensure Process",
          description:
            "Post-MBBS, registration with the NMC or State Medical Council is required to legally practice medicine in India.",
        },
      ],
    },
    {
      id: 2,
      tab: "Abroad",
      images: [MBBSBgIndia, MBBSBg2, MBBSBg3],
      content: [
        {
          title: "Course Overview",
          description:
            "MBBS programs abroad offer global exposure and opportunities to study in top medical institutions with advanced facilities.",
        },
        {
          title: "Regulatory Body",
          description:
            "Programs are regulated by international medical councils, varying by country (e.g., WHO, ECFMG for the USA).",
        },
        {
          title: "Eligibility Criteria",
          subItems: [
            "Completion of 10+2 with Physics, Chemistry, and Biology.",
            "Minimum marks may vary by country (typically 50-60%).",
            "Some countries require entrance exams like MCAT or NEET.",
          ],
        },
        {
          title: "Duration",
          description:
            "Duration varies by country, typically ranging from 5 to 6 years, including internships.",
        },
      ],
    },
  ],
  Ausbildung: [
    {
      id: 1,
      tab: "Germany",
      images: [AusBg, AusBg2, AusBg3],
      content: [
        {
          title: "Course Overview",
          description:
            "Ausbildung is a vocational training program in Germany that combines theoretical education with practical on-the-job training, preparing students for careers in various industries such as healthcare, IT, engineering, and hospitality.",
        },
        {
          title: "Regulatory Body",
          description:
            "Regulated by the German Federal Institute for Vocational Education and Training (BIBB) and regional chambers of commerce (IHK).",
        },
        {
          title: "Eligibility Criteria",
          subItems: [
            "Completion of secondary education (equivalent to 10th or 12th grade).",
            "Basic knowledge of the German language (typically B1/B2 level, depending on the program).",
            "Some programs may require specific skills or prior qualifications.",
          ],
        },
        {
          title: "Program Duration",
          description:
            "Typically lasts 2 to 3.5 years, depending on the profession and prior qualifications.",
        },
        {
          title: "Admission Procedure",
          description:
            "Requires applying directly to companies offering Ausbildung positions, followed by interviews and, in some cases, aptitude tests. A training contract is signed upon acceptance.",
        },
        {
          title: "Key Features",
          subItems: [
            "Dual education system: classroom learning at vocational schools and hands-on training at workplaces.",
            "Paid training: trainees receive a stipend during the program.",
            "High employability: graduates are often hired by the training company.",
          ],
        },
        {
          title: "Professional Pathways",
          description:
            "Graduates can work as skilled professionals in Germany or other countries, pursue further education, or start their own businesses in their trained field.",
        },
        {
          title: "Visa and Work Permit",
          description:
            "Non-EU candidates require a vocational training visa, which can lead to a work permit upon successful completion of the program.",
        },
      ],
    },
    {
      id: 2,
      tab: "Other Countries",
      images: [AusBg, AusBg2, AusBg3],
      content: [
        {
          title: "Course Overview",
          description:
            "Vocational training programs similar to Ausbildung are offered in countries like Austria and Switzerland, focusing on practical skills and industry-specific training.",
        },
        {
          title: "Regulatory Body",
          description:
            "Varies by country (e.g., State Secretariat for Education in Switzerland, AMS in Austria).",
        },
        {
          title: "Eligibility Criteria",
          subItems: [
            "Completion of secondary education.",
            "Language proficiency in the country’s official language (e.g., German for Austria/Switzerland).",
            "Program-specific requirements may apply.",
          ],
        },
        {
          title: "Duration",
          description:
            "Typically ranges from 2 to 4 years, depending on the country and profession.",
        },
      ],
    },
  ],
};
 
export const whyChoose = {
  MBBS: [
    {
      title: "Affordable Education",
      description:
        "MBBS programs in India offer high-quality education at a fraction of the cost compared to many international institutions.",
    },
    {
      title: "Globally Recognized Degree",
      description:
        "Degrees from NMC-approved institutions are recognized worldwide, enabling graduates to practice medicine globally.",
    },
    {
      title: "Extensive Clinical Exposure",
      description:
        "Indian medical colleges provide hands-on clinical training in diverse healthcare settings, preparing students for real-world challenges.",
    },
  ],
  Ausbildung: [
    {
      title: "Paid Training",
      description:
        "Trainees receive a monthly stipend during the Ausbildung program, making it financially sustainable.",
    },
    {
      title: "High Employability",
      description:
        "Germany’s Ausbildung system is renowned for its strong industry connections, often leading to permanent jobs upon completion.",
    },
    {
      title: "Global Opportunities",
      description:
        "Skills acquired through Ausbildung are highly valued, offering career prospects in Germany and internationally.",
    },
  ],
};
 