<?php
/**
 * @link      http://github.com/zendframework/ZendSkeletonApplication for the canonical source repository
 * @copyright Copyright (c) 2005-2016 Zend Technologies USA Inc. (http://www.zend.com)
 * @license   http://framework.zend.com/license/new-bsd New BSD License
 */

namespace Application\Controller;

use Zend\Mvc\Controller\AbstractActionController;
use Zend\View\Model\JsonModel;

class IndexController extends AbstractActionController
{
    public function indexAction()
    {
        $result = new JsonModel(array(
            'car' => ['name' => 'Fiat Argo',
                        'specs' => 'REX FULL V8 4P AUTOMATICO',
                        'price'=> '$100.000',
                        'city'=> 'Osasco - SP'],
            'days' => ['01/08', '02/08', '03/08', '04/08', '05/08', '06/08'],
            'timeschedules' => ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00']
            ));
     
            return $result;
    }
}
