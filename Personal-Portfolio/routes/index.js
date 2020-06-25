/*
 * File Name: index.js
 * Author's name:  Abhijeet Rana
 * Website name: Personal Portfolio
 * File description: This javascript file consists of all the coding with the help of which we will be able to render each view.
*/
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Personal Portfolio' });
});
/* GET aboutme page. */
router.get('/aboutme', function (req, res) {
    res.render('aboutme', { title: 'About Me' });
});
/* GET projects info page */
router.get('/projects', function (req, res) {
    res.render('projects', { title: 'My Projects' });
});
/* GET services and skills page. */
router.get('/services', function (req, res) {
    res.render('services', { title: 'Services' });
});
/* GET contactme info page. */
router.get('/contactme', function (req, res) {
    res.render('contactme', { title: 'Contact Me' });
});

module.exports = router;