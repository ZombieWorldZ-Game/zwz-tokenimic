import {expect} from '../chai-setup';

import {ethers, deployments, getNamedAccounts} from 'hardhat';

describe('Token contract', function () {
  it('Deployment should assign the total supply of tokens to the owner', async function () {
    await deployments.fixture(['ZwZToken']);
    const {deployer} = await getNamedAccounts();
    const Token = await ethers.getContract('ZwZToken');
    const ownerBalance = await Token.balanceOf(deployer);
    const supply = await Token.totalSupply();
    expect(ownerBalance).to.equal(supply);
  });
});
