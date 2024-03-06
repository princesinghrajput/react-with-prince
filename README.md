# Day-03: Create-react-app & Import Exports:
# Creating a React App with Create React App (CRA)

This guide will walk you through the process of creating a new React application using Create React App (CRA). Additionally, it will provide an overview of importing and exporting components using default and named exports.

## Installing Create React App (CRA)

To create a new React app, we'll use Create React App, a tool built by Facebook for generating React boilerplate code.

### Using NPX

Open your terminal and run the following command:

npx create-react-app my-react-app


## Importing and Exporting in React

In React, we often need to import and export components to organize our code and make it more modular. There are two main types of exports: default exports and named exports.

### Default Export

A default export allows you to export one module per file. You can import a default export using any name you like. Let's say we have a component named `MyComponent`:

```javascript
// MyComponent.js
const MyComponent = () => {
  // Component logic here
};

export default MyComponent;

```


