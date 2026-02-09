import React from "react";

const SKILL_GROUPS = [
  {
    label: "Testing",
    skills: ["Manual", "Functional", "Regression", "API", "Database", "UAT", "Performance"],
    style: "bg-blue-600/15 text-blue-700 border border-blue-200",
  },
  {
    label: "Automation & Frameworks",
    skills: ["Selenium", "Appium", "WebdriverIO", "TestNG", "Cucumber", "Mocha", "Allure"],
    style: "bg-slate-100 text-slate-700 border border-slate-300",
  },
  {
    label: "API & Tools",
    skills: ["Postman", "Newman", "JMeter"],
    style: "bg-blue-600/10 text-slate-700",
  },
  {
    label: "Cloud & DevOps",
    skills: ["AWS Lambda", "DynamoDB", "S3", "Git", "GitHub", "Jenkins"],
    style: "bg-slate-100 text-slate-700 border border-slate-200",
  },
  {
    label: "Process & Concepts",
    skills: ["Jira", "Trello", "SDLC", "STLC", "OOP"],
    style: "bg-blue-600/10 text-slate-700",
  },
  {
    label: "Code",
    skills: ["Java", "JavaScript", "Apex"],
    style: "bg-blue-600/20 text-blue-800 font-medium border border-blue-200",
  },
];

function Technologies() {
  return (
    <div className="mt-24 px-5 lg:p-5 text-slate-800">
      <h2 className="text-center">
        <span className="text-4xl uppercase fancy-link tracking-widest text-blue-600">
          Skills
        </span>
      </h2>
      <div className="max-w-4xl mx-auto mt-14 px-2 space-y-8">
        {SKILL_GROUPS.map((group) => (
          <div key={group.label} className="text-center">
            <p className="text-xs uppercase tracking-wider text-slate-500 mb-3 font-medium">
              {group.label}
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`px-3 py-1.5 rounded-full text-sm ${group.style}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
