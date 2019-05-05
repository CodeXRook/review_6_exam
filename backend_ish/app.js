const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const {createUser, readAll, getSingleUser} = require('./routes/users');
const {getAllShows, getShowsByGenreID, getAllShow, postNewshow} = require('./routes/shows');
const {readAllGenres} = require('./routes/genres');
const {readUserComment, postComment} = require('./routes/comments');