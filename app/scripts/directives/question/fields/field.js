/**
 * Created by raulgarcia on 17/11/16.
 */
'use strict';

moduleAngular
  .directive('field', function() {
    return {
      require: '^form',
      templateUrl: function(el, attrs){
        console.log(attrs)
        return '/scripts/directives/question/fields/'+attrs.type+'.html'
      },
      restrict: 'EA',
      scope: {
        label: '@',
        name: '@'
      },
      link: function(scope) {
        scope.myForm = scope.$parent.userForm[scope.name];
      }
    };
  });
