# HierFoods technical challenge

This repo contains the technical challenge used at the HierFoods tech interview.

The web app runs the UI that a Supplier encounters when a new order is received from a Customer.

The data is emulated by mocking locally a `fetchOrder` API call.

## Folder Structure

The repo is structured as a monorepo, with the following folder structure:

```bash
── api ("API" code that fetches the order data)
── frontend
   ├── components (global UI components used for all the HierFoods apps)
   └── supplier (Supplier React App)
```

## Installation

```bash
1. run `npm install` in the root folder to install all the dependencies (try running npm install --force if you encounter any issues)
2. run npm start:supplier to start the supplier app
3. run npm run test in order to run the tests
```

## Usage

Please familiarize yourself with the app and structure. The requirements for the tasks to be implemented will be presented during the live technical session. 
