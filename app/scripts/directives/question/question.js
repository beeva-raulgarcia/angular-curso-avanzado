'use strict';

moduleAngular
  .directive('question', function() {
    return {
      // template: '<div ng-include src="questionUrl()"></div>',
      templateUrl: '/scripts/directives/question/question.html',
      restrict: 'E',
      scope: {

      },
      link: function(scope) {


      }
    };
  });
