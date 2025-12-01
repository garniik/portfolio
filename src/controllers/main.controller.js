exports.home = (req, res) => {
  res.render("pages/home", { title: "Accueil" });
};

exports.projects = (req, res) => {
  res.render("pages/projects", { title: "Mes projets" });
};

exports.contact = (req, res) => {
  res.render("pages/contact", { title: "Contact" });
};
