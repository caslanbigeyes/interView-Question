# 2/20

# 合并两个有序数组

```js


    var merge  = function(nums1,m,nums2,n){

        for(let i = 0;i<n;i++){
            nums1[m+i] = nums2[i]
        }
        return nums1.sort((a,b)=>a-b)
    }

```


# serverless  


# docker


# 区块链到底是什么？它具有什么特点？

1. 去中心化
2. 不可篡改
3. 透明可追溯
4. 高容错性
5. 智能合约支持



## 学习区块链 


岗位职责
1、区块链二层链扩容方案工具前端开发；
2、区块链TON生态应用、mini App前端开发;
3. 关注区块链前端前沿技术发展，定期产出行业报告，进行内部培训。
任职要求
1. 扎实的计算机基础知识，熟悉常用的数据结构、算法和设计模式，并能在日常研发中灵活使用；
2. 熟练使用HTML5/CSS3熟练地进行页面开发；
3. 深入理解Web前端开发技术，包括HTML/CSS/JavaScript等，熟悉TypeScript；
4. 熟练掌握React/Nextjs/tailwind CSS等技术；
5. 熟悉区块链技术，熟练使⽤Web3库和API，如Web3.js或Ethers.js等，有实际 Dapp/钱包项目研发经验优先；
6. 熟悉mini app 开发，TON 生态应用开发优先；
7. 熟悉浏览器插件开发的优先；
8. 熟悉智能合约编写优先；
9. EVM RPC、密码学相关知识熟悉者优先；
10.具有良好的学习能力，对新技术能深入学习，对业务能快速理解；



分析 大佬简历

1、 负责组件库的设计和开发以及使用文档编写，基于 Wagmi 和 Ant Design 开发一套适用于海峡链的 Web3
React 组件库，包括基础组件和为海峡链业务场景设计的组件

wagmi介绍 react hooks库 为链上交互设计 


2、选择使用 React Native 开发 App 同时涉及到 Andorid 原生开发，深层链接钱包（签名交易等），使用
Ethers.js 与合约交互并参与盲盒等多个合约编写


# 制作一个链上钱包交易 DEFI 借贷界面
## 1.编写前端界面

地址:  https://zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3--5173--7f809d15.local-credentialless.webcontainer-api.io/

## 2.与区块链交互 


- 选择区块链平台：如果是DeFi借贷，常用的是Ethereum（或兼容的链，如Polygon），可以选择使用Solidity编写智能合约。
- Web3集成：使用web3.js或ethers.js来与智能合约进行交互。连接到用户的钱包（如MetaMask）来进行交易。
- 安装库：npm install ethers 或 npm install web3

```
核心代码： 
import { ethers } from 'ethers';
const provider = new ethers.JsonRpcProvider('YOUR_INFURA_URL');
const wallet = new ethers.Wallet('YOUR_PRIVATE_KEY', provider);
const contract = new ethers.Contract(contractAddress, contractABI, wallet);

```


## 3.智能合约开发
 - 借贷智能合约：编写智能合约，处理借款、还款、利息计算等逻辑。使用Solidity编写，并进行部署。
参考代码：
```
pragma solidity ^0.8.0;

contract DeFiLending {
    mapping(address => uint) public balances;
    mapping(address => uint) public debts;

    function deposit() public payable {
        balances[msg.sender] += msg.value;
    }

    function borrow(uint amount) public {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        debts[msg.sender] += amount;
        payable(msg.sender).transfer(amount);
    }

    function repay(uint amount) public payable {
        require(debts[msg.sender] >= amount, "Repayment exceeds debt");
        debts[msg.sender] -= amount;
        // handle repayment logic
    }
}

```

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LendingPool is ReentrancyGuard, Ownable {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    // 代币地址
    IERC20 public lendingToken;

    // 年化利率（基点）：1% = 100
    uint256 public borrowAPR = 500; // 5%
    uint256 public supplyAPR = 300; // 3%

    // 清算阈值，贷款价值比例（基点）
    uint256 public liquidationThreshold = 7500; // 75%

    // 清算罚金（基点）
    uint256 public liquidationPenalty = 500; // 5%

    // 每个用户的存款数量
    mapping(address => uint256) public deposits;
    
    // 每个用户的借款数量
    mapping(address => uint256) public borrowings;
    
    // 最后一次存款/借款操作的时间戳
    mapping(address => uint256) public lastUpdateTimestamp;

    // 总存款数量
    uint256 public totalDeposits;
    
    // 总借款数量
    uint256 public totalBorrowings;

    // 事件
    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event Borrow(address indexed user, uint256 amount);
    event Repay(address indexed user, uint256 amount);
    event Liquidate(address indexed user, address indexed liquidator, uint256 amount);

    constructor(address _lendingToken) {
        lendingToken = IERC20(_lendingToken);
    }

    // 存款函数
    function deposit(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Amount must be greater than 0");
        
        // 更新存款利息
        updateInterest(msg.sender);
        
        // 转入代币
        lendingToken.safeTransferFrom(msg.sender, address(this), _amount);
        
        // 更新状态
        deposits[msg.sender] = deposits[msg.sender].add(_amount);
        totalDeposits = totalDeposits.add(_amount);
        
        emit Deposit(msg.sender, _amount);
    }

    // 提款函数
    function withdraw(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Amount must be greater than 0");
        
        // 更新存款利息
        updateInterest(msg.sender);
        
        uint256 availableAmount = getWithdrawableAmount(msg.sender);
        require(_amount <= availableAmount, "Insufficient withdrawable amount");
        
        // 更新状态
        deposits[msg.sender] = deposits[msg.sender].sub(_amount);
        totalDeposits = totalDeposits.sub(_amount);
        
        // 转出代币
        lendingToken.safeTransfer(msg.sender, _amount);
        
        emit Withdraw(msg.sender, _amount);
    }

    // 借款函数
    function borrow(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Amount must be greater than 0");
        
        // 更新利息
        updateInterest(msg.sender);
        
        // 检查借款额度
        uint256 borrowableAmount = getBorrowableAmount(msg.sender);
        require(_amount <= borrowableAmount, "Insufficient borrowable amount");
        
        // 更新状态
        borrowings[msg.sender] = borrowings[msg.sender].add(_amount);
        totalBorrowings = totalBorrowings.add(_amount);
        
        // 转出代币
        lendingToken.safeTransfer(msg.sender, _amount);
        
        emit Borrow(msg.sender, _amount);
    }

    // 还款函数
    function repay(uint256 _amount) external nonReentrant {
        require(_amount > 0, "Amount must be greater than 0");
        
        // 更新利息
        updateInterest(msg.sender);
        
        require(borrowings[msg.sender] > 0, "No debt to repay");
        
        uint256 repayAmount = _amount;
        if (_amount > borrowings[msg.sender]) {
            repayAmount = borrowings[msg.sender];
        }
        
        // 转入代币
        lendingToken.safeTransferFrom(msg.sender, address(this), repayAmount);
        
        // 更新状态
        borrowings[msg.sender] = borrowings[msg.sender].sub(repayAmount);
        totalBorrowings = totalBorrowings.sub(repayAmount);
        
        emit Repay(msg.sender, repayAmount);
    }

    // 清算函数
    function liquidate(address _borrower) external nonReentrant {
        require(borrowings[_borrower] > 0, "No debt to liquidate");
        
        // 更新利息
        updateInterest(_borrower);
        
        // 检查是否可以清算
        require(canLiquidate(_borrower), "Cannot liquidate this position");
        
        uint256 debt = borrowings[_borrower];
        uint256 collateral = deposits[_borrower];
        
        // 清算罚金
        uint256 penalty = debt.mul(liquidationPenalty).div(10000);
        uint256 totalDebt = debt.add(penalty);
        
        // 确保不超过抵押品总量
        if (totalDebt > collateral) {
            totalDebt = collateral;
        }
        
        // 转入代币偿还债务
        lendingToken.safeTransferFrom(msg.sender, address(this), debt);
        
        // 更新状态
        borrowings[_borrower] = 0;
        totalBorrowings = totalBorrowings.sub(debt);
        
        // 计算清算人可获得的抵押品数量
        uint256 liquidatorReward = totalDebt;
        deposits[_borrower] = deposits[_borrower].sub(liquidatorReward);
        totalDeposits = totalDeposits.sub(liquidatorReward);
        
        // 转出抵押品给清算人
        lendingToken.safeTransfer(msg.sender, liquidatorReward);
        
        emit Liquidate(_borrower, msg.sender, debt);
    }

    // 更新利息
    function updateInterest(address _user) internal {
        if (lastUpdateTimestamp[_user] == 0) {
            lastUpdateTimestamp[_user] = block.timestamp;
            return;
        }

        uint256 timeElapsed = block.timestamp.sub(lastUpdateTimestamp[_user]);
        
        // 如果用户有存款，计算存款利息
        if (deposits[_user] > 0) {
            uint256 interestEarned = deposits[_user]
                .mul(supplyAPR)
                .mul(timeElapsed)
                .div(365 days)
                .div(10000);
            
            deposits[_user] = deposits[_user].add(interestEarned);
            totalDeposits = totalDeposits.add(interestEarned);
        }
        
        // 如果用户有借款，计算借款利息
        if (borrowings[_user] > 0) {
            uint256 interestAccrued = borrowings[_user]
                .mul(borrowAPR)
                .mul(timeElapsed)
                .div(365 days)
                .div(10000);
            
            borrowings[_user] = borrowings[_user].add(interestAccrued);
            totalBorrowings = totalBorrowings.add(interestAccrued);
        }
        
        lastUpdateTimestamp[_user] = block.timestamp;
    }

    // 获取用户可借款额度
    function getBorrowableAmount(address _user) public view returns (uint256) {
        if (deposits[_user] == 0) {
            return 0;
        }
        
        uint256 maxBorrowable = deposits[_user].mul(liquidationThreshold).div(10000);
        
        if (borrowings[_user] >= maxBorrowable) {
            return 0;
        }
        
        return maxBorrowable.sub(borrowings[_user]);
    }

    // 获取用户可提款额度
    function getWithdrawableAmount(address _user) public view returns (uint256) {
        uint256 collateralNeeded = 0;
        
        if (borrowings[_user] > 0) {
            // 如果有借款，需要保持足够的抵押品
            collateralNeeded = borrowings[_user].mul(10000).div(liquidationThreshold);
        }
        
        if (deposits[_user] <= collateralNeeded) {
            return 0;
        }
        
        return deposits[_user].sub(collateralNeeded);
    }

    // 检查用户是否可以被清算
    function canLiquidate(address _user) public view returns (bool) {
        if (borrowings[_user] == 0) {
            return false;
        }
        
        uint256 collateralNeeded = borrowings[_user].mul(10000).div(liquidationThreshold);
        
        return deposits[_user] < collateralNeeded;
    }

    // 设置借款年化利率（仅管理员）
    function setBorrowAPR(uint256 _newBorrowAPR) external onlyOwner {
        borrowAPR = _newBorrowAPR;
    }

    // 设置存款年化利率（仅管理员）
    function setSupplyAPR(uint256 _newSupplyAPR) external onlyOwner {
        supplyAPR = _newSupplyAPR;
    }

    // 设置清算阈值（仅管理员）
    function setLiquidationThreshold(uint256 _newThreshold) external onlyOwner {
        require(_newThreshold <= 10000, "Threshold too high");
        liquidationThreshold = _newThreshold;
    }

    // 设置清算罚金（仅管理员）
    function setLiquidationPenalty(uint256 _newPenalty) external onlyOwner {
        require(_newPenalty <= 5000, "Penalty too high");
        liquidationPenalty = _newPenalty;
    }
}
```



- 合约部署：使用工具如Hardhat或Truffle来部署智能合约。
npm install --save-dev hardhat：初始化Hardhat项目，编写部署脚本，部署到Ethereum或其他EVM兼容链。

## 后端和数据库
Node.js后端：搭建一个简单的Node.js后端，用来处理用户数据、交易历史、贷款审核等。你可以使用Express来快速搭建API。
数据库：使用MongoDB或PostgreSQL来存储用户的历史借贷记录、钱包地址等信息，确保与前端交互时能获取用户数据。

## 集成与部署
前端部署：使用Vercel、Netlify等平台将前端部署上线。
智能合约部署：将智能合约部署到主网或测试网上（如Rinkeby、Polygon等），并确保前端通过合约地址和ABI正确调用合约功能。
全栈整合：确保前端与后端的数据交互，智能合约与用户钱包的集成，完成整个DeFi借贷功能的交互流程。