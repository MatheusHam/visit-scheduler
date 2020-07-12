# visit-scheduler

As a test I`m developing a webpage and an API that will interact to schedule visits for our customers. It will consist of a Homepage with a single option to process a schedule request, registering it on our database.

Steps:

[x] Create Repository

[x] Use GitFlow branching model

[ ] Database - Cars Table

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

