const TOPIC = require('../model/topic');
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage: storage })

exports.AddTopic =async function (req, res, next) {
    try {
      req.body.image = req.file.filename
      if (!req.body.name || !req.body.description || !req.body.image || !req.body.subcategory) {
        throw new Error("Please Enter Valid Field")
      }
      const data = await TOPIC.create(req.body)
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

exports.GetTopic =async function (req, res, next) {
    try {
      const data = await TOPIC.find().populate( "subcategory").populate({
        path: 'subcategory',
        populate: {
          path: 'category'
        }
      });
      res.status(201).json({
        message: "Data Collect Successfully",
        data
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };

exports.DeleteTopic = async function (req, res, next) {
    try {
      await TOPIC.findByIdAndDelete(req.query.id)
      res.status(201).json({
        message: "Data Delete Successfully",
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };

exports.UpdateTopic = async function (req, res, next) {
    try {
      await TOPIC.findByIdAndUpdate(req.query.id, req.body)
      res.status(200).json({
        message: "Data Update Successful"
      })
    } catch (error) {
      res.status(404).json({
        message: error.message
      })
    }
  };