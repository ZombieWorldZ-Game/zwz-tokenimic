import {expect} from '../chai-setup';

import {ethers, deployments, getNamedAccounts} from 'hardhat';

describe('Token contract', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    await deployments.fixture(['ZWToken']);
    const {deployer} = await getNamedAccounts();
    const Token = await ethers.getContract('ZWToken');
    const ownerBalance = await Token.balanceOf(deployer);
    const supply = await Token.totalSupply();
    expect(ownerBalance).to.equal(supply);
  });
});
