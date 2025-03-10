export function getExperience(req, res) {
    const experience = [
      { company: "Tech Corp", role: "Software Developer", duration: "2021 - Present" },
      { company: "Web Solutions", role: "Frontend Developer", duration: "2019 - 2021" },
    ];
    res.json(experience);
  }
  