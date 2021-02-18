## Learning the Framework SAP UI5 using documentation from openSAP

## IDE: SAP WEB IDE Full-Stack

## Setup

You can import this repository to SAP Web IDE or run it standalone. Choose the scenario that fits your needs:

### SAP Web IDE (recommended)

1. Right-click on your workspace, and choose **Git > Clone Repository**.

2. In the dialog *Clone Git Repository*, enter the URL `https://github.com/cuongtm95/learning_sapui5`.

3. In the *Git Ignore System Files* dialog, choose **Do it later**.

4. A folder is added to your workspace.

5. Open the index.html file to get a searchable list of course exercises

6. In the `webapp` folder for the unit your choice (e.g. `w2u3\webapp`), right-click on the `index.html` or `mockServer.html` file, and choose **Run > Run as Web Application** to browse the course exercises.

### Local Installation

1. Clone this repository to your local machine:

``` console
git clone https://github.com/cuongtm95/learning_sapui5
```

2. Go to the repository, and install the [UI5 Build and Development Tooling](https://github.com/SAP/ui5-tooling) as well as other dependencies to run the course repository:

``` console
npm install
```

3. Run a local webserver to browse the course exercises. A browser window displaying all available units will open automatically.

> *Note:* The repository is using [OpenUI5 npm packages](https://www.npmjs.com/org/openui5) - with week 3 we add SAPUI5-exclusive controls which will not run in this scenario. You can switch the bootstrap to our SAUPUI5 CDN to make them work: `https://ui5.sap.com/resources/sap-ui-core.js`

## Checking Your Code Exercises

use this in index.html
```<script src="https://sap.github.io/openSAP-ui5-course/Validator.js"></script>```
