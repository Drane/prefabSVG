'use strict';

function refresh(templateId, $scope, $templateCache, $timeout) {
    $templateCache.remove(templateId);
    $scope.logTemplate = '';
    $timeout(function () {
        $scope.logTemplate = templateId;
    }, 1000);
}

/* Controllers */
function TemplateCtrl($scope, $templateCache, $timeout, $log) {
    $log.info('TemplateCtrl');
    var templateId = 'partials/includes/log-view.html';
    $scope.logTemplate = templateId;
    $scope.refresh = function () {
        refresh(templateId, $scope, $templateCache, $timeout);
    };
};

function LogCtrl($scope, $log) {
    $log.info('LogCtrl');
    $scope.$log = $log;
    $scope.message = 'Hello From LogCtrl!';
}


function HomeCtrl() {
}
HomeCtrl.$inject = [];


function TempCtrl() {
}
TempCtrl.$inject = [];

function JsonController($scope, $log) {
    $log.info('JsonController');
    /*    $scope.refresh = function(){
     refresh(templateId, $scope, $templateCache, $timeout);
     };*/
    $scope.$log = $log;

    var json;
    json = {
        id:"User",
        children:[
            {
                id:"subUser1",
                children:{id:"laatste", children:[]}
            },
            {
                id:"subUser2",
                children:{id:"laatste", children:[]}
            }
        ]
    };
    $scope.json = json;
};
//JsonController.$inject = [];
