const Model = require("../models/team.model.js");
const findAllData = async (params) => {
  const { convertFieldsToAggregateObject } = require("../helper/index.js");
  try {
    const {
      keyword,
      limit = 10,
      offset = 0,
      status = null,
      searchValue = false,
      selectValue = "name position image status social type ordering createdAt",
      sortQuery = "ordering",
      _id = "",
      featured = null,
      type = null,
    } = params;
    const select = selectValue && selectValue.replaceAll(",", " ");
    const selectProjectParams = convertFieldsToAggregateObject(select, " ");
    let query = { deletedAt: null };
    const myAggregate = Model.aggregate([
      { $match: query },

      { $project: { ...selectProjectParams } },
    ]);
    const result = await Model.aggregatePaginate(myAggregate, {
      offset: offset,
      limit: limit,
      sort: sortQuery,
    });

    return { status: 200, message: "list fetch", ...result };
  } catch (err) {
    return { status: 404, message: "not creted ", result: "not created" };
  }
};

const manage = async (params) => {
  try {
    if (params.id) {
      newData = await Model.findByIdAndUpdate(
        params.id,
        { ...params, updatedBy: null },
        { new: true }
      );
    } else {
      newData = await new Model({
        ...params,
        createdBy: params.authUser ? params.authUser._id : null,
      }).save();
    }
  } catch (err) {
    return err.message;
  }
};
module.exports = {
  findAllData,
  addData: manage,
  editData: manage,
};
