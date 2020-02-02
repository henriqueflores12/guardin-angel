const mysql = require('mysql')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllUserPosts = (req, res) => {
  // SELECT ALL USERS POSTS
  pool.query('SELECT * FROM posts WHERE ?', {user_id: `${req.params.id}`}, (err, rows) => {
    if (err){
      return handleSQLError(res, err)
    }
    return res.json(rows);
  });
}

const getPostById = (req, res) => {
  // SELECT USERS WHERE ID = <REQ PARAMS ID>
  pool.query('SELECT * FROM posts WHERE ?', {id: `${req.params.postId}`}, (err, rows) => {
    if (err) return handleSQLError(res, err)
    return res.json(rows);
  })
}

const createPost = (req, res) => {
  console.log("REQPARAMS:", req.params.id)
  console.log(req.body,"here i am dude")
  let sql = 'insert into posts (description,location) value (?,?)'
const replacements = [req.body.description,req.body.location]
sql = mysql.format(sql, replacements)
  pool.query(sql,  (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ newId: results.insertId });
  })
}



const updatePostById = (req, res) => {
  // UPDATE USERS AND SET FIRST AND LAST NAME WHERE ID = <REQ PARAMS ID>
  pool.query(`UPDATE posts SET ? WHERE id = ${req.params.postId}`, {date: `${req.body.date}`, time: `${req.body.time}`, location: `${req.body.location}`, description: `${req.body.description}`}, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.send(req.body);
  })
}

const deletePostById = (req, res) => {
  // DELETE FROM USERS WHERE FIRST NAME = <REQ PARAMS FIRST_NAME>
  pool.query(`DELETE FROM posts WHERE ?`, {id: `${req.params.postId}`}, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json({ message: `Deleted ${results.affectedRows} post(s)` });
  })
}

module.exports = {
  getAllUserPosts,
  getPostById,
  createPost,
  updatePostById,
  deletePostById
}