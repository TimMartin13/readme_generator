// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let userLicense = "";
  switch(license) {
    case "Apache License 2.0":
      userLicense = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU General Public License v3.0":
      userLicense = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "MIT License":
      userLicense = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      break;
    case "The Unlicense":
      userLicense = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
      break;
    case "None":
    default:
  }

  return userLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = "";

  switch(license) {
    case "Apache License 2.0":
      licenseLink = "[Apache 2.0](https://choosealicense.com/licenses/apache-2.0/)";
      break;
    case "GNU General Public License v3.0":
      licenseLink = "[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/";
      break;
    case "MIT License":
      licenseLink = "[MIT](https://choosealicense.com/licenses/mit/)";
      break;
    case "The Unlicense":
      licenseLink = "[Unlicense](https://choosealicense.com/licenses/unlicense/)";
      break;
    case "None":
    default:
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText = "";
  if (license !== "None") {
    licenseText = "## License\n\nLicensed under the " + renderLicenseLink(license) + " license";
  }  
  return licenseText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${ data.title }
  
  ${ renderLicenseBadge(data.license) }

  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  
  ## Description

  ${ data.description }

  ## Installation

  ${ data.instructions }

  ## Usage

  ${ data.usage }

  ## Contributions

  ${ data.contributions }

  ## Tests

  ${ data.tests }
  
  ${ renderLicenseSection(data.license) } 

  ## Questions

  Email: ${ data.email }

  Github: github.com/${ data.github }

`;
}

module.exports = generateMarkdown;
