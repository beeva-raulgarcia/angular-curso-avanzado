/**
 * Created by raulgarcia on 17/11/16.
 */
'use strict';

moduleAngular
  .directive('field', function() {
    return {
      require: '^form',
      templateUrl: function(el, attrs){
        return '/scripts/directives/question/fields/'+attrs.type+'.html'
      },
      restrict: 'E',
      scope: {
        label: '=',
        value: '=',
        placeholder: '=',
        name: '=',
        maxlength: '=',
        minlength: '=',
        max: '=',
        min: '=',
        options: '=',
        required: '='
      },
      link: function(scope) {
        scope.myForm = scope.$parent.userForm[scope.name];
      }
    };
  });
