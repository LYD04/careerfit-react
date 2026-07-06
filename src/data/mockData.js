export const user = {
  name: "Yedam",
  targetRole: "Marketing Intern",
  company: "Google Korea",
  university: "Beijing Normal University",
};

// export const metrics = [
//   { label: 'Current CV Match', value: '76%', helper: 'Strong potential for this role' },
//   { label: 'Interview Readiness', value: '42%', helper: '4 of 10 questions completed' },
//   { label: 'Skill Gaps', value: '6', helper: 'Most important: Google Analytics' },
// ];

export const newActions = [
  "Add measurable results to internship bullet points.",
  "Prepare an honest answer for missing GA4 experience.",
  "Practice three role-specific interview questions.",
];

export const metrics = [
  {
    label: "Current CV Match",
    value: "76%",
    helper: "Strong potential for this role",
  },
  {
    label: "Skill Gaps",
    value: "6",
    helper: "Most important: Google Analytics",
  },
];

export const keywordGaps = [
  {
    keyword: "Meta Ads",
    status: "Found",
    recommendation: "Strengthen with metrics",
  },
  {
    keyword: "Google Analytics",
    status: "Missing",
    recommendation: "Add only if real; prepare gap answer",
  },
  {
    keyword: "Campaign Reporting",
    status: "Partial",
    recommendation: "Add specific reports or KPIs",
  },
  {
    keyword: "CRM",
    status: "Missing",
    recommendation: "Mention related tools if used",
  },
  {
    keyword: "Stakeholder Communication",
    status: "Partial",
    recommendation: "Add collaboration example",
  },
];

export const applications = [
  {
    company: "Google Korea",
    role: "Marketing Intern",
    match: "76%",
    readiness: "42%",
    status: "Editing",
  },
  {
    company: "Naver",
    role: "Growth Intern",
    match: "82%",
    readiness: "58%",
    status: "Ready",
  },
  {
    company: "Toss",
    role: "Brand Intern",
    match: "69%",
    readiness: "20%",
    status: "Draft",
  },
];

export const interviewQuestions = [
  {
    type: "Self-introduction",
    question: "Tell me about yourself and why this role fits your background.",
  },
  {
    type: "Behavioral",
    question: "Describe a campaign you managed from planning to execution.",
  },
  {
    type: "Role-specific",
    question: "How would you measure campaign performance for this role?",
  },
  {
    type: "Skill gap defense",
    question:
      "Your CV does not mention Google Analytics. How would you handle this requirement?",
  },
];
