// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/presets/ERC20PresetFixedSupply.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "./AntiBot.sol";

contract ZwZToken is ERC20PresetFixedSupply, AntiBot {
    using SafeMath for uint256;

    uint256 public maxSupply = 1000 * 10**6 * 10**18;

    constructor() ERC20PresetFixedSupply("Zombie World Z", "ZwZ", maxSupply, msg.sender) {
        whiteList[owner()] = true;
    }

    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal virtual override {
        if (!whiteList[sender] && antiBotEnabled) {
            revert("Anti Bot");
        }

        super._transfer(sender, recipient, amount);
    }
}
