const SUBCATEGORY = require('../model/subcategory');

exports.AddsubCategory = async function (req, res, next) {
    try {

        if (!req.body.name || !req.body.category) {
            throw new Error("Please Enter Valid Field")
        }
        const data = await SUBCATEGORY.create(req.body)
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

exports.GetsubCategory = async function (req, res, next) {
    try {
        const data = await SUBCATEGORY.find().populate("category")
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

exports.DeletesubCategory = async function (req, res, next) {
    try {
        await SUBCATEGORY.findByIdAndDelete(req.query.id)
        res.status(201).json({
            message: "Data Delete Successfully",
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
};

exports.UpdatesubCategory = async function (req, res, next) {
    try {
        await SUBCATEGORY.findByIdAndUpdate(req.query.id, req.body)
        res.status(200).json({
            message: "Data Update Successful"
        })
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
    }
};