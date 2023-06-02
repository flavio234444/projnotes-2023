...
// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = (req, res) => {

};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  add,
  addPost,
};