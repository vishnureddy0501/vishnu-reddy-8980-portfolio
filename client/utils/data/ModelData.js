import { educations } from "./educations.js";
import { contactsData } from "./contactsData.js";
import { experiences } from "./experience.js";
import { personalData } from "./personal-data.js";
import { projectsData } from "./projects-data.js";
import skillsData from "./skills-data.js";

// --- Helper to format arrays/objects nicely ---
function formatData(title, data) {
	if (Array.isArray(data)) {
		return `${title}:\n${data.map(item => JSON.stringify(item, null, 2)).join("\n")}\n`;
	} else if (typeof data === "object") {
		return `${title}:\n${JSON.stringify(data, null, 2)}\n`;
	} else {
		return `${title}: ${data}\n`;
	}
}

// --- Build the full profile context ---
export const profileContext = `
Here is the full profile information:

${formatData("Personal Data", personalData)}
${formatData("Educations", educations)}
${formatData("Contacts", contactsData)}
${formatData("Experiences", experiences)}
${formatData("Projects", projectsData)}
${formatData("Skills", skillsData)}
`;
