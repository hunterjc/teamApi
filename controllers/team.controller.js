const repository = require("../repository/team.repository");

const findAllData = async (req, res) => {
  let data = await repository.findAllData({ ...req.query, ...req.params });
  return res.status(data.status).send(data);
};

// const findOneData = async (req, res) => {
//   let data = await repository.findOneData({ ...req.body, ...req.params });
//   return res.status(data.status).send(data);
// };

const addData = async (req, res) => {
  let data = await repository.addData(req);
  return res.status(data.status).send(data);
};

// const editData = async (req, res) => {
//   let data = await repository.editData({ ...req.params, ...req.body });
//   return res.status(data.status).send(data);
// };

// const remove = async (req, res) => {
//   let data = await commonRepository.remove({
//     ...req,
//     model: "team",
//     id: req.params.id,
//   });
//   return res.status(data.status).send(data);
// };
// const changeStatus = async (req, res) => {
//   let data = await commonRepository.changeStatus({
//     ...req.body,
//     model: "team",
//   });
//   return res.status(data.status).send(data);
// };
module.exports = {
  findAllData,
  //   findOneData,
  addData,
  //   remove,
  //   changeStatus,
  //   editData,
};
