import React from "react";
import "../assets/components.css";

const EXPERIENCES = [
  {
    role: "Software Engineer in Test",
    company: "Drive lah",
    companyUrl: "https://www.drivelah.sg/",
    location: "Remote",
    period: "May 2025 – Present",
    highlights: [
      "Backend and API testing across booking, trip lifecycle, payments, and payouts; validated pricing, discounts, credits, fees, and recalculation logic.",
      "End-to-end testing of payout pipelines: creation, execution, reconciliation, and payment state transitions.",
      "Cross-system data validation across Sharetribe Flex, internal pipelines, and backend services.",
      "Validated AWS event-driven workflows (Lambda, DynamoDB, message queues, background consumers).",
      "Built and maintained automation with Appium (mobile) and WebdriverIO (web) for critical user and admin workflows.",
    ],
  },
  {
    role: "Salesforce Developer",
    company: "TwinForce Solutions Limited",
    companyUrl: "https://twinforce.net/",
    location: "Dhaka, Bangladesh",
    period: "May 2024 – January 2025",
    highlights: [
      "Developed and customized UI components to enhance user interfaces and streamline booking workflows.",
      "Developed and maintained test scenarios and test cases for the Promotions Module.",
      "Executed exploratory and regression testing across sandbox and production deployments.",
      "Wrote Salesforce Apex test classes to automate validation for business-critical classes.",
    ],
  },
  {
    role: "QA Automation Engineer Intern",
    company: "a1qa",
    companyUrl: "https://www.a1qa.com/",
    location: "Remote",
    period: "December 2023 – April 2024",
    highlights: [
      "Executed manual testing based on defined test scenarios and test cases.",
      "Developed automated test scripts using Selenium WebDriver, Java, and TestNG.",
      "Integrated automated test execution into CI/CD pipelines.",
      "Introduced BDD using Cucumber and Gherkin for test clarity and cross-team alignment.",
    ],
  },
];

function Experience() {
  return (
    <div className="my-15 mt-24 px-6 py-6 lg:px-10 lg:py-8 text-slate-800">
      <h2 className="text-center">
        <span className="text-4xl uppercase fancy-link tracking-widest text-blue-600">
          Experience
        </span>
      </h2>
      <div className="max-w-3xl mx-auto mt-14 space-y-10 px-2 sm:px-4">
        {EXPERIENCES.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="relative pl-6 md:pl-8 border-l-2 border-slate-400">
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600" />
            <div className="pb-2 mt-0 flex flex-col gap-0">
              <h3 className="text-xl font-semibold text-blue-600 leading-tight mt-0">
                {exp.role}
              </h3>
              <p className="text-slate-700 font-medium leading-snug">
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded">
                    {exp.company}
                  </a>
                ) : (
                  exp.company
                )}
                <span className="text-slate-500 font-normal">
                  {" "}
                  · {exp.location}
                </span>
              </p>
              <p className="text-sm text-blue-600/90 leading-snug">
                {exp.period}
              </p>
            </div>
            <ul className="space-y-2 text-slate-600 text-sm leading-relaxed">
              {exp.highlights.map((item, i) => (
                <li key={i} className="flex items-start gap-2 flex-nowrap">
                  <span className="text-blue-600 shrink-0 leading-relaxed">
                    •
                  </span>
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Experience;
