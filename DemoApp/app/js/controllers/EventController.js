(function () {

  'use strict';

  angular.module('eventsApp').controller('EventController',['$scope',EventController]);

  function EventController($scope){

    $scope.bindsnippet = 'Bind this';
$scope.bool = true;
$scope.bstyle = {color:'blue'};
$scope.bclass = 'blue';
$scope.sortorder = '-name';

    var vm = this;

    vm.event = {
      name: 'Angular Boot Camp',
      date: '1288323623006',
      time: '10:30 am',
      location: {
        address: 'Google Headquarters',
        city: 'Mountain View',
        province: 'CA'
      },
      imageUrl: '/img/angularjs-logo.png',
      sessions: [
        {
          name: 'Directives Masterclass',
          creatorName: 'Bob Smith',
          duration: 1,
          level: 'Advanced',
          abstract: 'In this session you will learn the ins and outs of directives!',
          upVoteCount: 0
        },
        {
          name: 'Scopes for fun and profit',
          creatorName: 'John Doe',
          duration: 2,
          level: 'Introductory',
          abstract: 'This session will take a closer look at scopes. Learn what they do, how they do it, and how to get them to do it for you.',
          upVoteCount: 3
        },
        {
          name: 'Well Behaved Controllers',
          creatorName: 'Jane Doe',
          duration: 4,
          level: 'Intermediate Introductory',
          abstract: 'Controllers are the beginning of everything Angular does. Learn how to craft controllers that will win the respect of your friends and neighbors',
          upVoteCount: 0
        }
      ]
    };

    vm.upVoteSession=function(session){
      session.upVoteCount++;
    }
    vm.downVoteSession=function(session){
      session.upVoteCount--;
    }

  };

})();
