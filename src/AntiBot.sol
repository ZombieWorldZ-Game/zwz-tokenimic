// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

abstract contract AntiBot is Ownable {
    mapping(address => bool) public whiteList;
    bool public antiBotEnabled = true;

    event WhiteListUpdate(address[] newWhiteList, address[] removedWhiteList);
    event AntibotEnabled(bool enable);

    function modifyWhiteList(address[] memory newWhiteList, address[] memory removedWhiteList) public onlyOwner {
        for (uint256 index; index < newWhiteList.length; index++) {
            whiteList[newWhiteList[index]] = true;
        }
        for (uint256 index; index < removedWhiteList.length; index++) {
            whiteList[removedWhiteList[index]] = false;
        }

        emit WhiteListUpdate(newWhiteList, removedWhiteList);
    }

    function setAntiBot(bool _enable) external onlyOwner {
        antiBotEnabled = _enable;
        emit AntibotEnabled(_enable);
    }
}
