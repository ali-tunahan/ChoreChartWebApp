<div id="top"></div>

[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">A Chore Chart Web Application</h3>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <br />
    ·
    <a href="https://github.com/ali-tunahan/ChoreChartWebApp/issues">Report Bug</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## About The Project

The project is a very simple web application that keeps track of daily chores. I used asp.net for the backend and built a WebAPI. I used various frameworks too listed below.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
* [![Angular][Angular.io]][Angular-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* ![.Net][net-url]


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

Angular cli and nodeJS is needed to run the project.

1. Download Node.js Installer from [node-url]

2. Install Node.js and NPM

3. Run the command below in cmd to install Angular cli
* npm

  ```sh
  npm install -g @angular/cli
  ```


### Installation
1. Clone the repo

   ```sh
   git clone https://github.com/ali-tunahan/ChoreChartWebApp.git
   ```
2. Run the SQLQuery.sql query to create a database (I used SQL Server Express)

3. Insert the location of the database to Backend\DataAccess\Concrete\EntityFramework\ToDoListContext.cs
4. Run the WebAPI
5. Run the frontend

   ```sh
   ng serve
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage
Navigate through pages with the navigation bar above.

In chores page press the + icon to add a chore. You can use filtering options to filter listed chores. You can edit delete or set a chore as finished using the buttons under options.
<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Ali Tunahan Işık - [LinkedIn](https://www.linkedin.com/in/ali-tunahan-işık-921a23230/)

Project Link: [https://github.com/ali-tunahan/ChoreChartWebApp](https://github.com/ali-tunahan/ChoreChartWebApp)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

Use this space to list resources you find helpful and would like to give credit to. I've included a few of my favorites to kick things off!

* [Angular Components Doc](https://material.angular.io/components/categories)
* [Youtube Example Project](https://www.youtube.com/watch?v=Dpv6lUKNL9o)
* [.Net Bootcamp](https://www.youtube.com/watch?v=S_A_VVSQdpU&list=PLqG356ExoxZVN7rC0KmMo0lvECK97VRZg)
* [Img Shields](https://shields.io)
* [Readme Template](https://github.com/othneildrew/Best-README-Template)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
[issues-shield]: https://img.shields.io/bitbucket/issues/ali-tunahan/ChoreChartWebApp?style=for-the-badge
[issues-url]: https://github.com/ali-tunahan/ChoreChartWebApp/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/ali-tunahan-işık-921a23230/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[net-url]: https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&logo=.net&logoColor=white
[node-url]: https://nodejs.org/en/download/
