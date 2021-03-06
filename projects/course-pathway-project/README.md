# Course Pathways Project
The goal of this project is create a useable/dynamic tool that allows exploration of student course progression through degrees.
 
### To run locally on your system


* You'll need to have [git](https://git-scm.com/) and [node](https://nodejs.org/en/) installed on your system.

* Clone the project from Command Line:

```
git clone https://github.com/tabulatedreams/UBC-Data-Visualization-Hackathon.git
```

* CD into correct subfolder folder:

```
cd projects/course-pathway-project
```

* Install the dependencies:

```
npm install
```

* Create a data folder

```
mkdir data
```

* Place data, converted to CSV format, into the data directory

* Start node server

```
npm start
```

* Should now be viewable [here](http://localhost:4000/index.html)

* To run test suite
```
npm test
```

* To exit test suite
```
control + c
```

* To build production for faster performance

```
npm run build
```

```
npm run serve
```
