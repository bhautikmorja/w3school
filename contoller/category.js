const CATEGORY = require('../model/category');

exports.AddCategory =  async function (req, res, next) {
    try {
  
      if (!req.body.name || !req.body.colorcode) {
        throw new Error("Please Enter Valid Field")
      }
      const data = await CATEGORY.create(req.body)
      res.status(201).json({
        message: "Data Create Successful",
        data
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };

  exports.GetCategory = async function (req, res, next) {
    try {
      const data = await CATEGORY.find()
      res.status.json({
        message: "Data Collect Successfully",
        data
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };

  exports.DeleteQuiz =async function (req, res, next) {
    try {
      await CATEGORY.findByIdAndDelete(req.query.id)
      res.status(201).json({
        message: "Data Delete Successfully",
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };

  exports.UpdateQuiz =async function (req, res, next) {
    try {
      await CATEGORY.findByIdAndUpdate(req.query.id, req.body)
      res.status(200).json({
        message: "Data Update Successful"
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };