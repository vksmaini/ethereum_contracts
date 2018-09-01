const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'cupboard film finish tower stage science language rug sketch harvest inmate keep',
  'https://rinkeby.infura.io/v3/42e413efe3fb4550941046ebf6f9c498'
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract deployed to', result.options.address);
  } catch (e) {
    console.log('Error', e);
  }
};

deploy();
