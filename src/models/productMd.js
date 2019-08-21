const conn = require('../config/db')

module.exports = {
  getAll: (queryParams) => {
    return new Promise((resolve, reject) => {
      const sortBy = queryParams.sort || 'id'
      const typeSort = queryParams.type || 'asc'

      //Search
      const searching = queryParams.search || ''
      const fields = queryParams.field || 'name'
      const searchDefined = queryParams.search != undefined
      const fieldDefined = queryParams.field != undefined
      
      //pagination
      const paging = parseInt(queryParams.page) || 1
      const limitation = queryParams.limit || 5
      const startLimit = (paging > 1) ? (paging * limitation) - limitation : 0
      let totalData = 0
      let totalPage = 0

      //query untuk menghitung total data
      let query = `SELECT COUNT (id) AS total FROM outlet `

      conn.query(query, (err, rows) => {
        if (!err) {
          totalData = rows[0].total
          totalPage = Math.ceil(totalData / limitation)
        } else {
          reject(err)
        }
      
      //query show all outlet
      let query = `SELECT * FROM outlet `

        if(searchDefined || fieldDefined){
          query +=  `WHERE ${fields} LIKE '%${searching}%' `
        }

        query += `ORDER BY ${sortBy} ${typeSort}`

        conn.query(query + ` LIMIT ${limitation} OFFSET ${startLimit}`, (err, result) => {
          if (!err) {
            if (result.length > 0) {
              const response = {
                totalData: totalData,
                page: paging,
                totalPage: totalPage,
                limit: parseInt(limitation),
                values: result
              }
              resolve(response)
            } else {
              const msg = {
                status : 404,
                msg: 'Data not found'
              }
              console.log(err)
              resolve(msg)
            }
          } else {
            reject(err)
          }
        })
      })

    })
  },

  insertProduct: (data) => {
    return new Promise((resolve, reject) => {
      conn.query('INSERT outlet SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  updateProduct: (data, id) => {
    return new Promise((resolve, reject) => {
      conn.query('UPDATE outlet SET ? WHERE ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },
  deleteProduct: (id) => {
    return new Promise((resolve, reject) => {
      conn.query('DELETE FROM outlet WHERE ?', [id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }

}