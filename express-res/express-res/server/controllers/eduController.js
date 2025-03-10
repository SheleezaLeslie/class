export function getEducation(req, res) {
  const education = [
    { school: "????????? College", degree: "Bachelor of ?!!?!?!", year: "2020" },
    { school: "Tech Institute", degree: "Master of Technology", year: "1777" },
  ];
  res.json(education);
}

// express docs say controller files are modular. 
// everything sure is a lot easier to look at when it's separated