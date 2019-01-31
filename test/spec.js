const phantom  = require('phantom')
const {expect} = require('chai')

let instance = null
let page = null

before(async function () {
  instance = await phantom.create();
  page = await instance.createPage();
  await page.on('onResourceRequested', function(requestData) {
    console.info('Requesting', requestData.url);
  });
})

after (async () => {
  await instance.exit()
});

beforeEach(async function() {
  await page.open('http://localhost:8080/demos/test/phantomjs/app/');
})

describe('GraphComponent', function () {

  it('should create GraphComponent in DOM', async () => {
    const divId = await page.evaluate(function () {
      return graphComponent.div.id
    })
    expect(divId).to.equal('graphComponent')
  })

})
