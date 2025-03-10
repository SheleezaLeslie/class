export function getOverview(req, res) {
    const overview = {
      name: "Jacob Two-Two",
      description: "Passionate about web development and software engineering with experience in both front-end and back-end technologies."
    };
    res.json(overview);
  }
  