const Test_Entity = require("./../entity/Test_Entity");
const mongoose = require("mongoose");

exports.save = (bus_object) => {
  return new Promise((resolve, reject) => {
    Test_Entity.create(bus_object)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.search = (bus_no) => {
  return new Promise((resolve, reject) => {
    Test_Entity.findOne(bus_no)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getOne = (query1) => {
  return new Promise((resolve, reject) => {
    Test_Entity.findOne(query1)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.getAll = () => {
  return new Promise((resolve, reject) => {
    Test_Entity.find({})
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

exports.update = (query1, bus_object) => {
  return new Promise((resolve, reject) => {
    Test_Entity.findOneAndUpdate(query1, bus_object)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
