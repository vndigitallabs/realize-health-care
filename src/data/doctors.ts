import mahendra from "@/assets/dr-mahendra.jpg.asset.json";
import rishi from "@/assets/dr-rishi.jpg.asset.json";
import sharanya from "@/assets/dr-sharanya.jpg.asset.json";
import kalyan from "@/assets/dr-kalyan.jpg.asset.json";
import pravalika from "@/assets/dr-pravalika.jpg.asset.json";
import indra from "@/assets/dr-indra.jpg.asset.json";
import ravali from "@/assets/dr-ravali.jpg.asset.json";
import chandana from "@/assets/dr-chandana.jpg.asset.json";

export type Doctor = {
  slug: string;
  name: string;
  role: string;
  qualification: string;
  bio: string;
  expertise: string[];
  languages: string;
  consultation: string;
  photo: string;
};

/** Verified clinical-team information supplied by Realize Healthcare. */
export const doctors: Doctor[] = [
  {
    slug: "dr-mahendra-shekar",
    name: "Dr. Mahendra Shekar",
    role: "Chairman and Consultant Neuropsychiatrist",
    qualification: "MBBS, MD (Psychiatry)",
    bio: "Founder of Realize with a vision to provide compassionate, ethical and evidence-based mental healthcare in a safe, stigma-free environment. Specialises in the diagnosis and treatment of a wide range of psychiatric disorders through a multidisciplinary team.",
    expertise: [
      "Depression and Anxiety",
      "OCD and Bipolar Disorder",
      "Schizophrenia",
      "Sleep and Sexual Disorders",
      "Child, Adolescent and Geriatric Psychiatry",
    ],
    languages: "English • Telugu • Hindi",
    consultation: "Mon – Sat: 10:00 AM – 7:00 PM",
    photo: mahendra.url,
  },
  {
    slug: "dr-j-sharanya",
    name: "Dr. J. Sharanya",
    role: "Co-Founder and Vice-Chairperson • Consultant Psychiatrist – Women's and Child Mental Health",
    qualification: "MBBS, MD (Psychiatry)",
    bio: "A compassionate psychiatrist dedicated to comprehensive mental health care for women, children and adolescents, combining timely intervention, empathy and evidence-based treatment. Her warm, patient-centred approach creates a safe, supportive environment where individuals and families feel heard and understood.",
    expertise: [
      "Pregnancy and Postpartum Mental Health",
      "Anxiety, Depression and Stress-related Disorders",
      "Hormonal and Emotional Issues in Women",
      "Child and Adolescent Emotional/Behavioural Concerns",
      "Developmental and Academic Challenges",
      "Parent Guidance and Family Counselling",
    ],
    languages: "English • Telugu • Hindi",
    consultation: "Mon – Sat: 10:00 AM – 6:00 PM",
    photo: sharanya.url,
  },
  {
    slug: "dr-rishi-raj-mohammed",
    name: "Dr. Rishi Raj Mohammed",
    role: "Consultant Psychiatrist • Ex-Consultant, IMH Erragadda",
    qualification: "MBBS, MD (Psychiatry) • APMC/FMR/86939",
    bio: '"My approach to psychiatry is rooted in compassion, clinical excellence and respect for every individual\'s journey. As Ex-Consultant at IMH Erragadda, I have managed a wide spectrum of psychiatric illnesses, including severe and complex mental health conditions. I am committed to delivering evidence-based, personalised care that promotes recovery, dignity and long-term well-being."',
    expertise: [
      "Severe Mental Illness",
      "Schizophrenia and Psychosis",
      "Mood and Anxiety Disorders",
      "Crisis and Inpatient Care",
      "Long-term Recovery Planning",
    ],
    languages: "English • Telugu • Hindi • Urdu",
    consultation: "Mon – Sat: 10:00 AM – 6:00 PM",
    photo: rishi.url,
  },
  {
    slug: "dr-kasapa-kalyan",
    name: "Dr. Kasapa Kalyan",
    role: "Consultant Psychiatrist",
    qualification: "MBBS, MD (Psychiatry)",
    bio: '"I believe that every individual deserves compassionate, respectful and evidence-based mental health care. I strive to understand each person\'s unique challenges and provide personalised treatment that addresses both symptoms and overall well-being, helping patients regain confidence and restore healthy relationships."',
    expertise: [
      "Sexual Health",
      "Schizophrenia",
      "Mood and Anxiety Disorders",
      "Comprehensive Psychiatric Management",
      "Family Counselling",
    ],
    languages: "English • Telugu • Hindi",
    consultation: "Mon – Sat: 11:00 AM – 6:00 PM",
    photo: kalyan.url,
  },
  {
    slug: "s-pravalika-naidu",
    name: "S. Pravalika Naidu",
    role: "Clinical Psychologist",
    qualification: "MA Psychology",
    bio: '"Psychological well-being is the foundation of a balanced and meaningful life. Effective therapy begins with listening, understanding and building a strong therapeutic relationship. I provide comprehensive psychological assessments and personalised counselling using evidence-based approaches for children, adolescents, adults and families."',
    expertise: [
      "Cognitive Behaviour Therapy (CBT)",
      "Dialectical Behaviour Therapy (DBT)",
      "Individual Therapy",
      "Couple and Marital Counselling",
      "Career Counselling",
      "Stress Management",
    ],
    languages: "English • Telugu • Hindi",
    consultation: "Mon – Sat: 10:00 AM – 6:00 PM",
    photo: pravalika.url,
  },
  {
    slug: "dr-ravali",
    name: "Dr. Ravali",
    role: "Consultant General Physician",
    qualification: "MBBS, MD (General Medicine)",
    bio: "Addresses the physical health needs of patients receiving psychiatric care alongside their mental health treatment, from detailed medical evaluation to the management of co-existing illnesses.",
    expertise: [
      "Comprehensive Medical Evaluation",
      "Co-existing Illness Management",
      "Preventive Health",
    ],
    languages: "English • Telugu • Hindi",
    consultation: "Mon – Sat: 10:00 AM – 5:00 PM",
    photo: ravali.url,
  },
  {
    slug: "dr-chandana",
    name: "Dr. Chandana",
    role: "Consultant Pulmonologist",
    qualification: "MBBS, MD (Pulmonology)",
    bio: "Evaluates and manages respiratory health, providing pulmonary function evaluation and preventive respiratory care to support overall well-being alongside mental-health treatment.",
    expertise: ["Pulmonary Function Testing", "Preventive Respiratory Care"],
    languages: "English • Telugu • Hindi",
    consultation: "Mon – Sat: 11:00 AM – 5:00 PM",
    photo: chandana.url,
  },
  {
    slug: "dr-indra-sekhar",
    name: "Dr. Indra Sekhar",
    role: "Consultant Critical Care Physician",
    qualification: "MBBS, MD, Diploma in Critical Care Medicine",
    bio: "Manages medical emergencies and high-risk situations, specialising in the early recognition of medical complications and stabilisation of critically ill patients, providing an added layer of safety within the clinical team.",
    expertise: ["Critical Care Stabilisation", "Emergency Medical Care"],
    languages: "English • Telugu • Hindi",
    consultation: "On-Call 24×7 • OPD Mon – Sat",
    photo: indra.url,
  },
];
