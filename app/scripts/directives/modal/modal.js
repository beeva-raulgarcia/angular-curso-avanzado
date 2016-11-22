'use strict';

moduleAngular
	.directive('modal', function() {
		return {
        templateUrl: '/scripts/directives/modal/modal.html',
        restrict: 'EA',
        scope: {
            title: '@',
            resume: '@'
        },
        link: function(scope) {
            scope.$watch('resume', function(resume){
               scope.parsedResume =  JSON.parse(resume);
            });
        }
    }
  });
