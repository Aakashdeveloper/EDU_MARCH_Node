let chai = require('chai');
let chaiHttp  = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing  my Rest Api for -ve case', () => {
    it('should  return status 200 for /movies',function(done){
        chai
            .request('http://localhost:6500')
            .get('/movie')
            .then(function(res){
                expect(res).to.have.status(404);
                done();
            })
            .catch(function(err){
                throw(err)
            })
    })
})