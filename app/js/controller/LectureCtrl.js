function LectureCtrl($scope, $routeParams) {
    $scope.id = parseInt($routeParams.id);
    $scope.lecture = APP.Data.getLecture($scope.id);
    $scope.teacher = APP.Data.getHuman($scope.lecture.lector_id);
}