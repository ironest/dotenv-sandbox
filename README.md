# dotenv-sandbox

### Background information

* **process.env** is a global variable injected by Node at runtime. It represents the state of the system environment at the time when the app starts.

* **provisioning** is the act of providing environment variables

* **dotenv** is an application level tool that loads environment variables from a `.env` file into the `process.env` global variable.

* **best practice** is to keep the `.env` file out of any version control, hence is highly adviced to add the `.env` to the `.gitignore` file.