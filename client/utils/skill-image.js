import tailwind from "../app/assets/svg/skills/tailwind.svg";

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case "tailwind":
            return tailwind;
        default:
            break;
    }
};
