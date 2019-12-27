# dotenv-sandbox

### Background information

* **process.env** is a global variable injected by Node at runtime. It represents the state of the system environment at the time when the app starts.

* **provisioning** is the act of providing environment variables

* **dotenv** is an application level tool that loads environment variables from a `.env` file into the `process.env` global variable.

### Use cases
When creating a node app, you don’t want to hardcode in your source code sensitive information such as **passwords**, **tokens**, **api keys**, etc... The same applies to specific configurations which might differ between DEV, TEST and PROD environments; you cannot have them hardcoded in your source code. A possible solution is to keep those information in environment variables (similarly to what Azure, Netlify and Heroku expect)

### Configuration Steps

1. Create a `.env` file in the root of your project
2. Fill in every required value one per line `VARIABLE_NAME=value`
3. As early as possible in your application, require and configure dotenv `require('dotenv').config()`
4. It is now possible to access any variable from your code by using the syntax `process.env.VARIABLE_NAME`

### Example

```js
require("dotenv").config()
const express = require("express");
const app = express();
const port = process.env.PORT;

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}!`);
})
```

### Best Practice

* **Do not commit** your .env file; keep it out of any version control. It is highly adviced to add the `.env` to the `.gitignore` file.

* **Do not maintain** multiple `.env` files. Just keep a single one.

* **Do not implement** any logic in your code to handle already set environment variables; `dotenv` does not overwrite them

### Dependencies (for this repo specifically)

* **dotenv**
* **express**