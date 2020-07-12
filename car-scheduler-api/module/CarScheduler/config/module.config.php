<?php
 return array(
    'controllers' => array(
        'invokables' => array(
            'CarScheduler\Controller\CarScheduler' => 'CarScheduler\Controller\CarSchedulerController',
        ),
    ),

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

    'view_manager' => array(
        'template_path_stack' => array(
            'CarScheduler' => __DIR__ . '/../view',
        ),
    ),
);

?>