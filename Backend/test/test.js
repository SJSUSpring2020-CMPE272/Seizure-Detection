var chai = require("chai"),
  chaiHttp = require("chai-http");
chai.use(chaiHttp);
const api_host = "http://localhost";
const api_port = "3001";
const api_url = api_host + ":" + api_port;

var expect = chai.expect;

it("Test server status", function(done) {
  chai
    .request(api_url)
    .get("/donor/servercheck")
    .send()
    .end(function(err, res) {
      expect(res).to.have.status(200);
      expect(res.text).to.equal("Welcome to Handshake server");
      done();
    });
});

it("Check login", function(done) {
  chai
    .request(api_url)
    .post("/donor/login")
    .send({ student: { email: "pc@gmail.com", password: "army#123" } })
    // .set('Authorization','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoicEBrMS5jb20iLCJpYXQiOjE1ODI3MzcxOTJ9.1_RixhYYpvFS-h4doEQEczZQwMDrFxF1xDnEl5cNKY4')
    .end(function(err, res) {
      expect(res).to.have.status(201);
      expect(res.body.user.isLogin).to.equal(true);
      done();
    });
});

it("Check register", function(done) {
  chai
    .request(api_url)
    .post("/donor/register")
    .send({
      student: {
        email: "puneetjyots@gnail.com",
        password: "puneet123",
        name: "Puneet",
        college: "UCI"
      }
    })
    .end(function(err, res) {
      expect(res).to.have.status(201);
      expect(res.body.user.isRegister).to.equal(true);
      done();
    });
});
