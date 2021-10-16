import {BigNumber} from '@ethersproject/bignumber';
import {SignerWithAddress} from '@nomiclabs/hardhat-ethers/dist/src/signers';
import {expect} from 'chai';
import {ethers} from 'hardhat';

describe('ZwZTokenAntiBotTest', function () {
  let owner: SignerWithAddress;
  let account1: SignerWithAddress;
  let account2: SignerWithAddress;

  this.beforeEach(async function () {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    [owner, account1, account2] = await ethers.getSigners();
  });

  it('Antibot on', async function () {
    const ZwZToken = await ethers.getContractFactory('ZwZToken');
    const token = await ZwZToken.deploy();

    // only owner can transfer if antibot enable and
    await token.transfer(account1.address, BigNumber.from(20));
    expect(await token.balanceOf(account1.address)).to.equal(20);

    await expect(
      token.connect(account1).transfer(account2.address, BigNumber.from(10))
    ).to.revertedWith('Anti Bot');

    // test add to white list
    await expect(token.modifyWhiteList([account1.address], [])).to.emit(
      token,
      'WhiteListUpdate'
    );

    // could transfer
    await token
      .connect(account1)
      .transfer(account2.address, BigNumber.from(10));
    expect(await token.balanceOf(account1.address)).to.equal(10);
    expect(await token.balanceOf(account2.address)).to.equal(10);

    // test remove white list
    await token.modifyWhiteList([], [account1.address]);
    await expect(
      token.connect(account1).transfer(account2.address, BigNumber.from(10))
    ).to.revertedWith('Anti Bot');

    expect(await token.balanceOf(account1.address)).to.equal(10);
  });

  it('Antibot off', async function () {
    const ZwZToken = await ethers.getContractFactory('ZwZToken');
    const token = await ZwZToken.deploy();
    await expect(token.setAntiBot(false))
      .to.emit(token, 'AntibotEnabled')
      .withArgs(false);

    // only owner can transfer if antibot enable and
    await token.transfer(account1.address, BigNumber.from(20));
    expect(await token.balanceOf(account1.address)).to.equal(20);

    // could transfer
    await token
      .connect(account1)
      .transfer(account2.address, BigNumber.from(10));
    expect(await token.balanceOf(account1.address)).to.equal(10);
    expect(await token.balanceOf(account2.address)).to.equal(10);

    await expect(token.setAntiBot(true))
      .to.emit(token, 'AntibotEnabled')
      .withArgs(true);

    await expect(
      token.connect(account1).transfer(account2.address, BigNumber.from(10))
    ).to.revertedWith('Anti Bot');
  });
});
