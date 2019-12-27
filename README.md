# dotenv-sandbox

### Background information

* **process.env** is a global variable injected by Node at runtime. It represents the state of the system environment at the time when the app starts.

* **provisioning** is the act of providing environment variables

* **dotenv** is an application level tool that loads environment variables from a `.env` file into the `process.env` global variable.

* **best practice** is to keep the `.env` file out of any version control, hence is highly adviced to add the `.env` to the `.gitignore` file.

### Use cases
When creating a node app, you don’t want to hardcode in your source code sensitive information such as **passwords** or **api keys**. The same applies to specific configurations which might differ between DEV, TEST and PROD environments; you cannot have them hardcoded in your source code. A possible solution is to keep those information in environment variables (similarly to what Azure, Netlify and Heroku expect)

### Dependencies (for this repo specifically)

* **dotenv**
* **express**