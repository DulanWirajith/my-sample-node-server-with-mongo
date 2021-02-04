const Tests = require("./../database/Test");

// test Registration

exports.testRegistration = (req, res, next) => {
  Tests.save(req.body)
    .then((result) => {
      console.log("Test Addded");
      res.status(200).json({
        messege: "Test Added!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        messege: "Test Registration Failed",
      });
    });
};

// test update

exports.testUpdate = (req, res, next) => {
  Tests.update(
    {
      test_no: req.body.test_no,
    },
    { $set: req.body }
  )
    .then((result) => {
      console.log("Test Updated");
      res.status(200).json({
        messege: "Test Updated!",
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        messege: "Test Update Failed!",
      });
    });
};

// get one test
exports.getTest = (req, res, next) => {
  console.log(req.params.test_no);
  Tests.getOne({
    test_no: req.params.test_no,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get Test Failed!",
      });
    });
};

// get all testes

exports.getTests = (req, res, next) => {
  Tests.getAll({})
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: result,
      });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        message: "Get Tests Failed!",
      });
    });
};
