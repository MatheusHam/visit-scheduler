# visit-scheduler

As a test I`m developing a webpage and an API that will interact to schedule visits for our customers. It will consist of a Homepage with a single option to process a schedule request, registering it on our database.

Steps:

[X] Create Repository

[X] Use GitFlow branching model

[X] Database - Cars Table

[ ] Database - Availability Table

[ ] CRUD 

[ ] Create/Map API Endpoints

[ ] Basic React APP

[ ] Customize Page

[ ] ADD Api requests

[ ] Final Tests


# Development Journal

In the first day of development, I started by chosing the gitflow branching model.

To build the PHP RESTful Api I`ve chosen the Zend Framework. So first of all I installed PHP 7.4.8 from: https://www.php.net/downloads

Then to build a project skeleton with zend I had to insall composer.phar, wich can be downloaded from https://getcomposer.org/download/ 

As an option you can also run the commands below to download it, and set up the minimal skeleton project:

```
php -r "readfile('https://getcomposer.org/installer');" | php


php composer.phar create-project --repository-url="https://packages.zendframework.com" zendframework/skeleton-application visit-scheduler/car-scheduler-api

```

After setting up zf skeleton I`ve started writing our API configs and routes, with the information on zf website and some articles I could build the 'car-scheduler-api\module\CarScheduler' folder wich in a nutshell contains the custom routes, functions and configs extending zf standards.

The first Route built at 'car-scheduler-api\module\CarScheduler\config\module.config.php':

```
    //First Route Attempt
    'router' => array(
        'routes' => array(
            'cars' => array(
                'type'    => 'segment',
                'options' => array(
                    'route'    => '/cars[/][:action][/:id]',
                    'constraints' => array(
                        'action' => '[a-zA-Z][a-zA-Z0-9_-]*',
                        'id'     => '[0-9]+',
                    ),
                    'defaults' => array(
                        'controller' => 'CarScheduler\Controller\CarScheduler',
                        'action'     => 'index',
                    ),
                ),
            ),
        ),
    ),
```

Even though this route already identifies actions on the Controller using actions "add, get, edit, delete" I`ll be confirming if this can attend the standard "GET, POST, PUT, PATCH, DELETE" methods that I'm used to.

The carsscheduler.db also in the car-scheduler-api\module\CarScheduler folder, was built using SQL syntax and is ready for the first tests:
```
CREATE TABLE cars (
    id    INT (11)      NOT NULL,
    name  VARCHAR (100) NOT NULL,
    specs VARCHAR (100) NOT NULL,
    price DOUBLE        NOT NULL,
    PRIMARY KEY (
        id
    )
);
```

---

13/07/2020

Today I had to rework the API module, and after that I decided to start the front-end part of our application. So I had to come up with a structure using React + Redux + MaterialUI Components. After some testing I came up with a structure that I can know work on the design.

Running npm start on our visits-app now we get this first view:

![alt text](https://imgur.com/PihzSzu)
