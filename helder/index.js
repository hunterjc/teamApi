const convertFieldsToAggregateObject = (fields, demilater = ",") => {
  if (!fields) return { deletedAt: 0, deletedBy: 0 };
  if (typeof fields == "string") {
    fields = fields.trim();
    fields = fields.split(demilater);
  }
  let obj = {};
  for (let el of fields) if (el) obj[el] = 1;

  return obj;
};

module.exports = {
  convertFieldsToAggregateObject,
};
