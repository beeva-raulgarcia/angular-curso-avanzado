'use strict';

moduleAngular
  .directive('question', function() {
    return {
      templateUrl: '/scripts/directives/question/question.html',
      restrict: 'E',
      scope: {

      },
      link: function(scope) {
        scope.fields = {
            text: {
                label:'Campo de texto',
                name:'texto',
                placeholder: 'Introduzca aquí algo',
                minlength:'2',
                maxlength:'20',
                required:'true',
                value: null
            },
            email: {
                label: 'Un correo',
                name: 'mail',
                placeholder: 'Un correo aquí',
                required: true,
                value: null
            },
            number: {
                label: 'Un número',
                name: 'numero',
                min: 2,
                max: 60,
                required: true,
                value: null
            },
            date: {
                label: 'Una fecha',
                name: 'fecha',
                min: '1983-08-02',
                max: '2014-08-20',
                required: true,
                value: null
            },
            color: {
                label: 'Un color',
                name: 'color',
                required: false,
                value: null
            },
            radio: {
                label: 'Género',
                name: 'gender',
                options: [
                    {name:'Mujer', selected: false},
                    {name:'Hombre', selected: true},
                    {name:'Otro', selected: false}
                ],
                required: true,
                value: 'Hombre'
            },
            check: {
                label: '',
                name: 'acepto',
                options: [
                    { name: 'Acepto las condiciones que no me he leído', selected: false }
                ],
                required: true,
                value: null
            }
          };
        scope.resume = [];

        scope.submit = function(isValid) {


            let data = [];
            if(isValid){
                for(let f in scope.fields){
                    data.push({name: scope.fields[f].name, value: scope.fields[f].value });
                    //console.log(scope.fields[f]);
                }
                scope.resume = data;
                $('#modal .modal').modal();
            }
        };
        }
    };
  });
