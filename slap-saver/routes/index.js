var express = require('express');
var router = express.Router();

/* GET home page. */
// NOTE: 기본 홈 화면
router.get('/', function (req, res, next) {
  res.render('index', { title: '기본 홈 화면' });
});

// NOTE: 설정 화면 페이지
router.get('/profile', function (req, res, next) {
  res.render('index', { title: '설정 화면' });
});

// NOTE: 제보 화면 페이지
router.get('/reporter', function (req, res, next) {
  res.render('index', { title: '제보 화면' });
});

// NOTE: 유저 로그인 페이지
router.get('/login', function (req, res, next) {
  res.render('login', { title: '유저 로그인1!' });
});

// NOTE: 유저 로그인 요청
router.post('/login', function (req, res, next) {
  res.send(req.body);
});

// NOTE: 유저 회원가입 페이지
router.get('/signup', function (req, res, next) {
  res.render('signup', { title: '유저 회원가입!!' });
});

// NOTE: 유저 회원가입 요청
router.post('/signup', function (req, res, next) {
  res.send(req.body);
});

module.exports = router;
