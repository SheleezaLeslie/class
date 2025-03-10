export function getSkills(req, res) {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "HTML & CSS",
    "Git & GitHub",
    "SQL",
    "Problem Solving",
    "Agile Development",
  ];
  res.json(skills);
}
