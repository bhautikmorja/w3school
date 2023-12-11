var express = require('express');
var router = express.Router();
const categoryController = require('../contoller/category')
const subcategoryController = require('../contoller/subcategory')
const topicController = require('../contoller/topic')
const multer = require('multer')
/* GET home page. */

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
//category
//Create
router.post('/category', categoryController.AddCategory);

//Get
router.get('/categories', categoryController.GetCategories);

//Delete
router.delete('/category', categoryController.DeleteCategory);

//Update
router.put('/category', categoryController.UpdateCategory);


//subcategory
//Create
router.post('/subcategory', subcategoryController.AddsubCategory)

//Get
router.get('/subcategories', subcategoryController.AddsubCategory)

//Delete
router.delete('/subcategory', subcategoryController.AddsubCategory)

//Update
router.put('/subcategory', subcategoryController.AddsubCategory)


//Topic
//Create
router.post('/topic', upload.single('image'), topicController.AddTopic)

//Get
router.get('/topics', topicController.GetTopic)

//Delete
router.delete('/topic', topicController.DeleteTopic)

//Update
router.put('/topic', topicController.UpdateTopic)

module.exports = router;
