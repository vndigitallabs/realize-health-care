export type Service = {
  title: string;
  description: string;
  cta: string;
  /** Future dedicated landing page path (see route architecture). */
  path: string;
};

export const services: Service[] = [
  {
    title: "Psychiatric Consultation",
    description:
      "Professional psychiatric assessment, diagnosis and treatment planning where appropriate.",
    cta: "Book Consultation",
    path: "/psychiatric-consultation/",
  },
  {
    title: "Depression Care",
    description:
      "Professional assessment and treatment support for people experiencing depression and related concerns.",
    cta: "Learn More",
    path: "/depression-treatment/",
  },
  {
    title: "Anxiety Care",
    description: "Assessment and treatment support for anxiety-related concerns.",
    cta: "Learn More",
    path: "/anxiety-treatment/",
  },
  {
    title: "Bipolar Disorder Care",
    description:
      "Professional psychiatric assessment and ongoing treatment support for bipolar disorder.",
    cta: "Learn More",
    path: "/bipolar-disorder-care/",
  },
  {
    title: "OCD Care",
    description: "Assessment and treatment support for obsessive-compulsive disorder.",
    cta: "Learn More",
    path: "/ocd-care/",
  },
  {
    title: "Family Counselling",
    description:
      "Support for families navigating mental-health concerns, communication challenges and related difficulties.",
    cta: "Talk to Our Team",
    path: "/family-counselling/",
  },
  {
    title: "Women's Mental Health",
    description: "Mental-health support for women across different stages of life.",
    cta: "Learn More",
    path: "/womens-mental-health/",
  },
  {
    title: "Child & Adolescent Psychiatry",
    description: "Professional mental-health assessment and support for children and adolescents.",
    cta: "Learn More",
    path: "/child-adolescent-psychiatry/",
  },
];

export const pillars = [
  {
    title: "Clinical Assessment",
    description: "Understand the individual's concerns through professional assessment.",
  },
  {
    title: "Personalised Treatment",
    description: "Care plans are developed according to individual needs.",
  },
  {
    title: "Multidisciplinary Support",
    description: "Psychiatric, psychological and counselling expertise where appropriate.",
  },
  {
    title: "Family Support",
    description: "Families can receive guidance and support when appropriate.",
  },
  {
    title: "Continuity of Care",
    description: "Follow-up support based on the individual's treatment needs.",
  },
  {
    title: "Respectful Environment",
    description:
      "A professional environment where people can discuss sensitive concerns with dignity.",
  },
];

export const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Call, WhatsApp or request an appointment.",
  },
  {
    number: "02",
    title: "Initial Consultation",
    description: "Discuss the concerns with the appropriate clinical professional.",
  },
  {
    number: "03",
    title: "Assessment",
    description:
      "The clinician evaluates the individual's situation and identifies appropriate next steps.",
  },
  {
    number: "04",
    title: "Personalised Care Plan",
    description:
      "Where appropriate, the clinician recommends treatment, counselling, follow-up or other support.",
  },
];

export const faqs = [
  {
    q: "What happens during a psychiatric consultation?",
    a: "A consultation usually begins with a conversation about the concerns you or your family member have noticed. The clinician asks about symptoms, history, sleep, daily functioning and any relevant medical background, and may carry out a clinical assessment. Based on that discussion the clinician explains their understanding of the situation and the options available. No diagnosis or treatment is decided before an assessment takes place.",
  },
  {
    q: "When should someone consult a psychiatrist?",
    a: "People generally seek a consultation when emotional, behavioural, sleep, mood or thinking-related difficulties begin to affect daily life, work, studies or relationships, or when a family member notices a persistent change. A consultation is a way to understand what is happening — it does not mean a condition is present.",
  },
  {
    q: "Do you provide counselling?",
    a: "Yes. Psychological assessment and counselling are provided by our clinical psychologist using evidence-based approaches such as CBT and DBT, for children, adolescents, adults and couples, where clinically appropriate.",
  },
  {
    q: "Do you provide family counselling?",
    a: "Yes. Family counselling and parent guidance are available where appropriate, and families can also speak with our team about how best to support a relative.",
  },
  {
    q: "Do you provide child and adolescent psychiatry?",
    a: "Yes. Mental-health assessment and support for children and adolescents is available, including emotional and behavioural concerns and developmental or academic difficulties.",
  },
  {
    q: "Do you provide women's mental-health services?",
    a: "Yes. Our team includes a consultant psychiatrist focused on women's mental health, including pregnancy and postpartum mental health and stress-related concerns.",
  },
  {
    q: "How can I book an appointment?",
    a: "You can call the clinic, message us on WhatsApp, or submit the consultation request form on this page. Our team will get in touch to arrange a suitable time.",
  },
  {
    q: "Where is Realize Healthcare located?",
    a: "Realize Healthcare is located in Hyderabad, Telangana. The verified clinic address and directions are shown in the location section of this page.",
  },
  {
    q: "How long does a consultation take?",
    a: "The duration can vary depending on the nature of the consultation and what the clinician needs to understand. Our team can give you an indication when your appointment is arranged.",
  },
  {
    q: "Can a family member contact the clinic first?",
    a: "Yes. Family members often make the first contact. You can speak with our team about your concerns and about the appropriate next step, including how to approach the conversation with your relative.",
  },
];

/**
 * Verified reviews only. Add entries the clinic has permission to publish —
 * never fabricate names, ratings, diagnoses or outcomes. An empty array renders
 * a neutral placeholder instead of invented social proof.
 */
export type Testimonial = { quote: string; attribution: string };
export const testimonials: Testimonial[] = [];

/** Google reviews URL, if the clinic has approved linking to it. */
export const reviewsUrl = "";

/**
 * Genuine Realize Healthcare photographs only. Add CDN asset URLs here; until
 * then the gallery shows clearly-labelled slots for the clinic administrator.
 */
export type FacilityPhoto = { src: string; alt: string; label: string };
export const facilityPhotos: FacilityPhoto[] = [];
export const facilitySlots = [
  "Exterior",
  "Reception",
  "Consultation room",
  "Doctor consultation",
  "Team",
  "Waiting area",
];
