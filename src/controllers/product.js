const modelProduct = require('../models/productMd')

module.exports = {
  getAll: (req, res) => {
    const queryParams = {
      sort: req.query.sort,
      type: req.query.type,
      search: req.query.search,
      field : req.query.field,
      page : req.query.page,
      limit : req.query.limit 
    }
    modelProduct.getAll(queryParams)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },

  getBy: (req, res) => {
    const queryShow = {
      collect : req.body.collect
    }
    modelProduct.getByName(queryShow)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },

  insertProduct: (req, res) => {
    const data = {
      name: req.body.name,
      unit: req.body.unit,
      branch: req.body.branch
    }

    modelProduct.insertProduct(data)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  updateProduct: (req, res) => {
    const data = {
      name: req.body.name,
      unit: req.body.unit,
      branch: req.body.branch
    }

    const id = {
      id: req.params.id
    }

    modelProduct.updateProduct(data, id)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  },
  
  deleteProduct: (req, res) => {
    const id = {
      id: req.params.id
    }
    modelProduct.deleteProduct(id)
      .then(result => res.json(result))
      .catch(err => console.log(err))
  }
}