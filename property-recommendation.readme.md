# Property Recommendation
[FEATURE DETAILS AVAILABLE ON VSTS](https://gulfnews.visualstudio.com/_search?text=property%20recommendation&type=workitem&lp=custom-Collection)
This Feature provides a user an alternative for searching properties by presenting an interractive user interface designed to function like a chat application with predefined
questions and options to choose from.

Consists of three main views

  -  Landing: welcome page 
  -  Conversation : An interractive user interface which a behaves like a chat ui with predefined questions and options to collect user search criteria.
  -  search result: A user interface to display the search result, map view and list view.

 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

   The following packages will be needed to be installed on your computer inorder to run this project locally.


[React](https://github.com/facebook/react) Frontend framework.
[Typescript](https://www.typescriptlang.org/) - Typed superset of javascript.
[Material UI](https://material-ui.com/) - React components that implement google material ui.
[React CSSModules](https://github.com/gajus/react-css-modules) - 
CSS files in which all class names and animation names are scoped locally by default.
i.e  module bundler such as webpack to load CSS scoped to a particular document.

[React  Router v4](https://github.com/ReactTraining/react-router).
[Redux](https://github.com/reduxjs/redux).
[React Redux](https://github.com/reduxjs/react-redux)
[Redux Thunk](https://github.com/reduxjs/redux-thunk) - Redux Middleware.
[Redux dev tools Extension](https://www.npmjs.com/package/redux-devtools-extension) - A live-editing time travel environment for redux.

[Device Detect](https://github.com/duskload/react-device-detect) - Detect device and render view according to device type.

[Google maps](https://developers.google.com/maps/documentation/javascript/reference/)
[Leaflet](https://github.com/Leaflet/Leaflet) - Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps.

[React leaflet](https://github.com/PaulLeCam/react-leaflet) -React-Leaflet provides an abstraction of leaflet as react components.

[React leaflet google](https://github.com/Charmatzis/react-leaflet-google) -  Google maps layer as React component for Leaflet build on top of React-Leaflet.

 
### Installing

```
git clone https://gulfnews.visualstudio.com/Getthat-VSTS/_git/getThat-Frontend
```

cd into the folder install dependencies by running the following

```
npm install
```

start the local host by running

```
 npm start
```

## Project Description

## Running the application

  to test the application
  you should have 3 accounts from the ganache cli
  
  Choose and account for each role that you will test
  - Owner -  deploying accont -  
             click on manage tokens menu tab to enter amount to tokens to sell to customers
  - Vendor: use the account you choose for this role to request a venodr account,
            then switch to the owner account using meta mask, and approve the vendor request
            switch back to the vendor account to create stores and add products
            
  - customer: use this account to test purchasing of items 
               select any store, and , click on the products list 
               select a product and enter quantity and add to cart
               

### Running tests

 This project constaians a suite of tests that verify the functionality of the contracts code
 
 These tests cover the following contracts
 -OrderHIstoryManager: Tests verify if the customers order is archived in order history after purchase is completed
 -ProductManager: Tests the functionality of adding, updtating and deleting products
 -ShoppingCartManager: Test the functionality of adding item to a cart, updating, deleting an item and completing purchase
                        as well is products quantity reduction and payment made to the respective vendors
 -SpinelToken: Tests the functionality of the ERC20 TOKEN
 -SpinelTokenSale: Tests the functionality of allowing users to buy Tokens
 -StoreManager: Tests the functionality of the StoreMnager -  Adding, editting and deleting stores 
 -VendorManager: Tests the functionality of VendorManager which allows admin/owner to manage vendors
 -Withdrawable: Tests the functionality of allowing vendors to move funds to their wallet
 
 

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Truffle](https://truffleframework.com/) - Truffle Framework
* [React](https://reactjs.org/) - UI Library
* [Solidity](https://solidity.readthedocs.io/en/v0.4.24/) - Programming language
* [Ethereum](https://www.ethereum.org/) - Blockchain Protocol
* [IPFS](https://rometools.github.io/rome/) - decentralized file storage

 

## Authors

* **Yusuf Kelo** - *Initial work* - [Blockchain-Market-Place](https://github.com/ysfkel/Blockchain-Market-Place)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.


