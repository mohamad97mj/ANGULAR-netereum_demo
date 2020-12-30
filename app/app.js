'use strict';

// Declare app level module which depends on views, and core components
var myApp = angular.module('myApp', [
    // 'ngRoute',
    'ui.router',
    'myApp.view1',
    'myApp.view2',
    // 'myApp.version'
]);
myApp.config(function ($urlRouterProvider, $stateProvider) {


    $urlRouterProvider.when('/home', '/about, /getstarted');

    $stateProvider
    // nested views


        .state('home', {
            url: '/home',
            templateUrl: 'view1/view1.html'

        })

        .state('about', {
            url: '/about',
            templateUrl: 'view2/view2.html'

        })

        .state('getstarted', {
            url: '/getstarted',
            templateUrl: 'view3/getstarted.html',
            controller: function ($scope) {
                // $scope.msg = " this is page number 1";
                // $scope.firstName = "John";
            }

        })

        .state('getstarted1', {
            url: '/getstarted1',
            templateUrl: 'view3/subviews/1.html',
            controller: function () {

                // $scope.$on('$locationChangeStart', function(event) {
                //     var answer = confirm("Are you sure you want to leave this page?")
                //     if (!answer) {
                //         event.preventDefault();
                //     }
                // });
            }

        })
        .state('getstarted2', {
            url: '/getstarted2',
            templateUrl: 'view3/subviews/2.html',
            controller: function ($scope, Exchange1, Currencies1, GetRates1) {

                $scope.currencies = Currencies1;
                $scope.exchange = Exchange1;


                $scope.cal1 = function () {

                    var c1 = $scope.exchange.currency1;
                    var c2 = $scope.exchange.currency2;
                    var r = GetRates1.getRates(c1, c2);
                    $scope.exchange.amount2 = ($scope.exchange.amount1 * (r[0] / r[1])).toFixed(0);

                };
            }
        })

        .state('getstarted3', {
            url: '/getstarted3',
            templateUrl: 'view3/subviews/3.html',
            controller: function ($scope, Exchange1, Currencies1) {

                $scope.currencies2 = Currencies1;
                var exchange = Exchange1;
                $scope.amount1 = exchange.amount1;
                $scope.amount2 = exchange.amount2;
                $scope.currency1 = exchange.currency1;
                $scope.currency2 = exchange.currency2;

            }
        })

        .state('getstarted4', {
            url: '/getstarted4',
            templateUrl: 'view3/subviews/4.html',

            controller: function ($scope, Exchange1, Currencies1) {
                $scope.currencies = Currencies1;
                var exchange = Exchange1;
                $scope.amount1 = exchange.amount1;
                $scope.amount2 = exchange.amount2;
                $scope.currency1 = exchange.currency1;
                $scope.currency2 = exchange.currency2;
            }

        })
        .state('getstarted5', {
            url: '/getstarted5',
            templateUrl: 'view3/subviews/5.html',
            controller: function ($scope, Exchange1, Currencies1, GetRates1) {
                $scope.currencies = Currencies1;
                $scope.exchange = Exchange1;
                $scope.sum = "0";

                $scope.doExchange = function () {
                    document.getElementById("sp1").style.visibility = "visible";
                    document.getElementById("sp2").style.visibility = "visible";
                    document.getElementById("sp3").style.visibility = "visible";
                    document.getElementById("sp4").style.visibility = "visible";
                    document.getElementById("sumRow").style.backgroundColor = "#5cb85c";
                    document.getElementById("status").innerHTML = "Done successfully!";
                    // document.getElementById("sumRow").style.backgroundColor = "#d9534f";
                };

                $scope.cal2 = function () {
                    var c1 = $scope.exchange.currency1;
                    var c2 = $scope.exchange.currency2;
                    var r = GetRates1.getRates(c1, c2);
                    $scope.exchange.amount2 = ($scope.exchange.amount1 * (r[0] / r[1])).toFixed(0);
                    document.getElementById("sp1").style.visibility = "hidden";
                    document.getElementById("sp2").style.visibility = "hidden";
                    document.getElementById("sp3").style.visibility = "hidden";
                    document.getElementById("sp4").style.visibility = "hidden";
                    document.getElementById("status").innerHTML = "";
                    document.getElementById("sumRow").style.backgroundColor = "";

                };
            }
        })

        .state('getstarted6', {
            url: '/getstarted6',
            templateUrl: 'view3/subviews/6.html',
            controller: function ($scope, Exchange1, Exchange2, Currencies1, GetRates1) {
                $scope.currencies = Currencies1;
                $scope.exchange1 = Exchange1;
                $scope.exchange2 = Exchange2;

                $scope.exchange2.amount1 = $scope.exchange1.amount1;
                $scope.exchange2.amount2 = $scope.exchange1.amount2;
                $scope.exchange2.currency1 = $scope.exchange1.currency2;
                $scope.exchange2.currency2 = $scope.exchange1.currency1;


                $scope.sum1 = parseInt($scope.exchange2.amount2) - parseInt($scope.exchange1.amount1);
                $scope.sum2 = parseInt($scope.exchange1.amount2) - parseInt($scope.exchange2.amount1);

                // $scope.sum = "0";
                $scope.doExchange2 = function () {

                    document.getElementById("sp3").style.visibility = "visible";
                    document.getElementById("sp4").style.visibility = "visible";

                    $scope.sum1 = parseInt($scope.exchange1.amount1) - parseInt($scope.exchange2.amount1);
                    $scope.sum2 = parseInt($scope.exchange2.amount2) - parseInt($scope.exchange1.amount2);

                    if ($scope.sum1 === 0) {
                        document.getElementById("sp11").style.display = "block";
                        document.getElementById("sp21").style.display = "block";
                        document.getElementById("sumRow").style.backgroundColor = "#5cb85c";
                        document.getElementById("status").innerHTML = "Done successfully!";

                    } else {
                        document.getElementById("sp1").style.display = "block";
                        document.getElementById("sp2").style.display = "block";
                        document.getElementById("sumRow").style.backgroundColor = "#d9534f";
                        document.getElementById("status2").innerHTML = "Failed!, The amounts are not balanced!, For more information  Go to next page!";

                    }

                };

                $scope.cal3 = function () {

                    document.getElementById("sp3").style.visibility = "hidden";
                    document.getElementById("sp4").style.visibility = "hidden";
                    document.getElementById("sp1").style.display = "none";
                    document.getElementById("sp2").style.display = "none";
                    document.getElementById("sp11").style.display = "none";
                    document.getElementById("sp21").style.display = "none";
                    document.getElementById("sp11").style.display = "none";
                    document.getElementById("sp21").style.display = "none";
                    document.getElementById("sumRow").style.backgroundColor = "";
                    document.getElementById("status").innerHTML = "";
                    document.getElementById("status2").innerHTML = "";

                    var c1 = $scope.exchange1.currency1;
                    var c2 = $scope.exchange1.currency2;
                    var r = GetRates1.getRates(c1, c2);
                    $scope.exchange2.amount2 = ($scope.exchange2.amount1 * (r[0] / r[1])).toFixed(0);

                };
            }
        })

        .state('getstarted7', {
            url: '/getstarted7',
            templateUrl: 'view3/subviews/7.html'

        })
        .state('getstarted8', {
            url: '/getstarted8',
            templateUrl: 'view3/subviews/8.html'

        })
        .state('getstarted9', {
            url: '/getstarted9',
            templateUrl: 'view3/subviews/9.html',
            controller: function ($scope, Exchange1, Exchange2, Currencies1, GetRates1) {

                // $scope.amount100 = 200;
                $scope.amount100 = 200;

                $scope.currencies = Currencies1;
                var exchange1 = Exchange1;
                var exchange2 = Exchange2;
                $scope.amount11 = exchange2.amount1;
                $scope.amount12 = exchange2.amount2;
                $scope.currency1 = exchange1.currency1;
                $scope.currency2 = exchange1.currency2;
                $scope.amount21 = exchange1.amount2;
                $scope.amount22 = exchange1.amount1;

                $scope.cal4 = function () {
                    var c1 = $scope.currency1;
                    var c2 = $scope.currency2;
                    var r = GetRates1.getRates(c1, c2);
                    $scope.amount12 = ($scope.amount11 * (r[0] / r[1])).toFixed(0);
                    document.getElementById("sp1").style.visibility = "hidden";
                    document.getElementById("sp2").style.visibility = "hidden";
                    document.getElementById("sp3").style.visibility = "hidden";
                    document.getElementById("sp4").style.visibility = "hidden";
                    document.getElementById("sp5").style.visibility = "hidden";
                    document.getElementById("sp6").style.visibility = "hidden";
                    document.getElementById("sp7").style.visibility = "hidden";
                    document.getElementById("sp8").style.visibility = "hidden";
                    document.getElementById("sumRow").style.backgroundColor = "";
                    document.getElementById("status").innerHTML = "";
                    exchange2.amount1 = $scope.amount11;
                    exchange2.amount2 = $scope.amount12;


                };

                $scope.doExchange3 = function () {
                    document.getElementById("sp3").style.visibility = "visible";
                    document.getElementById("sp6").style.visibility = "visible";
                    document.getElementById("sp1").style.visibility = "visible";
                    document.getElementById("sp2").style.visibility = "visible";
                    document.getElementById("sp4").style.visibility = "visible";
                    document.getElementById("sp5").style.visibility = "visible";
                    document.getElementById("sp7").style.visibility = "visible";
                    document.getElementById("sp8").style.visibility = "visible";

                    document.getElementById("sumRow").style.backgroundColor = "#5cb85c";
                    document.getElementById("status").innerHTML = "Done successfully!";
                };
            }

        })
        .state('getstarted10', {
            url: '/getstarted10',
            templateUrl: 'view3/subviews/10.html',
            controller: function ($scope, Exchange1, Exchange2, Currencies1, GetRates1) {
            }
        })

        .state('getstarted11', {
            url: '/getstarted11',
            templateUrl: 'view3/subviews/11.html',
            controller: function ($scope, Exchange1, Exchange2, Currencies1, GetRates1) {

                $scope.currencies = Currencies1;
                var exchange1 = Exchange1;
                var exchange2 = Exchange2;
                $scope.amount11 = exchange2.amount1;
                $scope.amount12 = exchange2.amount2;
                $scope.currency1 = exchange1.currency1;
                $scope.currency2 = exchange1.currency2;
                $scope.amount21 = exchange1.amount2;
                $scope.amount22 = exchange1.amount1;


                $scope.credit1 = 3 * Math.abs($scope.amount11 - $scope.amount22) + parseInt($scope.amount11);

                var c1 = $scope.currency1;
                var c2 = $scope.currency2;
                var r = GetRates1.getRates(c1, c2);

                $scope.credit2 = ($scope.credit1 * (r[0] / r[1])).toFixed(0);


                $scope.cal6 = function () {
                    $scope.amount12 = ($scope.amount11 * (r[0] / r[1])).toFixed(0);
                    document.getElementById("sp1").style.visibility = "hidden";
                    document.getElementById("sp2").style.visibility = "hidden";
                    document.getElementById("sp3").style.visibility = "hidden";
                    document.getElementById("sp4").style.visibility = "hidden";
                    document.getElementById("sp5").style.visibility = "hidden";
                    document.getElementById("sp6").style.visibility = "hidden";
                    document.getElementById("sp7").style.visibility = "hidden";
                    document.getElementById("sp8").style.visibility = "hidden";
                    document.getElementById("sumRow").style.backgroundColor = "";
                    document.getElementById("status").innerHTML = "";
                    document.getElementById("status2").innerHTML = "";
                    exchange2.amount1 = $scope.amount11;
                    exchange2.amount2 = $scope.amount12;
                };

                $scope.doExchange5 = function () {

                    var dif = $scope.amount11 - $scope.amount22;
                    var dif2 = $scope.amount12 - $scope.amount21;


                    $scope.min1 =  Math.min(-($scope.amount22 - $scope.amount11), $scope.credit1);
                    $scope.min2 = Math.min(($scope.amount22 - $scope.amount11), $scope.credit1);
                    $scope.min3 = Math.min(-($scope.amount12 - $scope.amount21), $scope.credit2);
                    $scope.min4 = Math.min(($scope.amount12 - $scope.amount21), $scope.credit2);

                    if (Math.abs(dif) > $scope.credit1) {

                        if (dif > 0){

                            $scope.sum1 = dif - $scope.credit1;
                            $scope.sum2 = -(dif2 - $scope.credit2);

                        }

                        else {

                            $scope.sum1 = -dif - $scope.credit1;
                            $scope.sum2 = -(-dif2 - $scope.credit2);

                        }

                        document.getElementById("sumRow").style.backgroundColor = "#d9534f";
                        document.getElementById("status2").innerHTML = "Failed!, It Exceeded the credit limit!";


                    } else {

                        $scope.sum1 = 0;
                        $scope.sum2 = 0;

                        document.getElementById("sumRow").style.backgroundColor = "#5cb85c";
                        document.getElementById("status").innerHTML = "Done successfully!";

                    }

                    document.getElementById("sp3").style.visibility = "visible";
                    document.getElementById("sp6").style.visibility = "visible";
                    document.getElementById("sp1").style.visibility = "visible";
                    document.getElementById("sp2").style.visibility = "visible";
                    document.getElementById("sp4").style.visibility = "visible";
                    document.getElementById("sp5").style.visibility = "visible";
                    document.getElementById("sp7").style.visibility = "visible";
                    document.getElementById("sp8").style.visibility = "visible";

                };
            }

        })

        .state('getstarted12', {
            url: '/getstarted12',
            templateUrl: 'view3/subviews/12.html',


        })

        .state('getstarted13', {
            url: '/getstarted13',
            templateUrl: 'view3/subviews/13.html',
            controller: function ($scope) {


            }

        })

        .state('getstarted14', {
            url: '/getstarted14',
            templateUrl: 'view3/subviews/14.html',
            controller: function ($scope, Currencies1, Channel1) {


                $scope.currencies = [];
                $scope.currencies1 = Currencies1;
                $scope.channel = Channel1;


                $scope.createChannel = function () {

                    $scope.channel.setCurrencies([$scope.currencies[0], $scope.currencies[1]]);

                };
            }

        })
        .state('getstarted15', {
            url: '/getstarted15',
            templateUrl: 'view3/subviews/15.html',
            controller: function ($scope, Channel1) {

                $scope.coordinatorTypes = ['bank', 'trader', 'money changer'];

                //
                //
                var channel = Channel1;

                $scope.currencies = channel.getCurrencies();
                //
                $scope.coordinators1 = [];
                var coordinator1 = {name: " ", type: " ", ownership: " ", currency: $scope.currencies[0]};
                $scope.coordinators1.push(coordinator1);
                $scope.baseNumber1 = 0;
                //
                //

                $scope.count1 = 0;


                $scope.coordinatorNameIds1 = [];
                $scope.coordinatorTypeIds1 = [];
                $scope.coordinatorOwnershipId1s1 = [];
                $scope.coordinatorOwnershipId2s1 = [];
                $scope.coordinatorOwnershipId3s1 = [];

                $scope.coordinatorNameVars1 = [];
                $scope.coordinatorTypeVars1 = [];
                $scope.coordinatorOwnershipNames1 = [];


                var coordinatorNameBaseId1 = "coordinatorName-1";
                var coordinatorTypeBaseId1 = "coordinatorType-1";
                var coordinatorOwnershipBaseId1 = "ownershipType-1";
                var coordinatorOwnershipBaseName1 = "ownershipType1";


                $scope.coordinatorNameIds1[$scope.baseNumber1] = coordinatorNameBaseId1 + $scope.baseNumber1;
                $scope.coordinatorTypeIds1[$scope.baseNumber1] = coordinatorTypeBaseId1 + $scope.baseNumber1;
                $scope.coordinatorOwnershipId1s1[$scope.baseNumber1] = coordinatorOwnershipBaseId1 + $scope.baseNumber1 + "1";
                $scope.coordinatorOwnershipId2s1[$scope.baseNumber1] = coordinatorOwnershipBaseId1 + $scope.baseNumber1 + "2";
                $scope.coordinatorOwnershipId3s1[$scope.baseNumber1] = coordinatorOwnershipBaseId1 + $scope.baseNumber1 + "3";

                $scope.coordinatorOwnershipNames1[$scope.baseNumber1] = coordinatorOwnershipBaseName1 + $scope.baseNumber1;

                $scope.coordinators2 = [];
                var coordinator2 = {name: " ", type: " ", ownership: " ", currency: $scope.currencies[1]};
                $scope.coordinators2.push(coordinator2);
                $scope.baseNumber2 = 0;
                $scope.count2 = 0;

                $scope.coordinatorNameIds2 = [];
                $scope.coordinatorTypeIds2 = [];
                $scope.coordinatorOwnershipId1s2 = [];
                $scope.coordinatorOwnershipId2s2 = [];
                $scope.coordinatorOwnershipId3s2 = [];

                $scope.coordinatorNameVars2 = [];
                $scope.coordinatorTypeVars2 = [];
                $scope.coordinatorOwnershipNames2 = [];

                //
                var coordinatorNameBaseId2 = "coordinatorName-2";
                var coordinatorTypeBaseId2 = "coordinatorType-2";
                var coordinatorOwnershipBaseId2 = "ownershipType-2";

                var coordinatorOwnershipBaseName2 = "ownershipType2";

                $scope.coordinatorNameIds2[$scope.baseNumber2] = coordinatorNameBaseId2 + $scope.baseNumber2;
                $scope.coordinatorTypeIds2[$scope.baseNumber2] = coordinatorTypeBaseId2 + $scope.baseNumber2;
                $scope.coordinatorOwnershipId1s2[$scope.baseNumber2] = coordinatorOwnershipBaseId2 + $scope.baseNumber2 + "1";
                $scope.coordinatorOwnershipId2s2[$scope.baseNumber2] = coordinatorOwnershipBaseId2 + $scope.baseNumber2 + "2";
                $scope.coordinatorOwnershipId3s2[$scope.baseNumber2] = coordinatorOwnershipBaseId2 + $scope.baseNumber2 + "3";

                $scope.coordinatorOwnershipNames2[$scope.baseNumber2] = coordinatorOwnershipBaseName2 + $scope.baseNumber2;


                $scope.addCoordinator1box = function () {
                    //
                    $scope.baseNumber1++;
                    //
                    var coordinator1 = {name: " ", type: " ", ownership: " ", currency: $scope.currencies[0]};
                    $scope.coordinators1.push(coordinator1);
                    //
                    $scope.coordinatorNameIds1[$scope.baseNumber1] = coordinatorNameBaseId1 + $scope.baseNumber1;
                    $scope.coordinatorTypeIds1[$scope.baseNumber1] = coordinatorTypeBaseId1 + $scope.baseNumber1;
                    $scope.coordinatorOwnershipId1s1[$scope.baseNumber1] = coordinatorOwnershipBaseId1 + $scope.baseNumber1 + "1";
                    $scope.coordinatorOwnershipId2s1[$scope.baseNumber1] = coordinatorOwnershipBaseId1 + $scope.baseNumber1 + "2";
                    $scope.coordinatorOwnershipId3s1[$scope.baseNumber1] = coordinatorOwnershipBaseId1 + $scope.baseNumber1 + "3";

                    $scope.coordinatorOwnershipNames1[$scope.baseNumber1] = coordinatorOwnershipBaseName1 + $scope.baseNumber1;

                    //
                    //
                    //
                };
                //
                //

                $scope.addCoordinator2box = function () {

                    $scope.baseNumber2++;

                    var coordinator2 = {name: " ", type: " ", ownership: " ", currency: $scope.currencies[1]};
                    $scope.coordinators2.push(coordinator2);
                    //
                    $scope.coordinatorNameIds2[$scope.baseNumber2] = coordinatorNameBaseId2 + $scope.baseNumber2;
                    $scope.coordinatorTypeIds2[$scope.baseNumber2] = coordinatorTypeBaseId2 + $scope.baseNumber2;
                    $scope.coordinatorOwnershipId1s2[$scope.baseNumber2] = coordinatorOwnershipBaseId2 + $scope.baseNumber2 + "1";
                    $scope.coordinatorOwnershipId2s2[$scope.baseNumber2] = coordinatorOwnershipBaseId2 + $scope.baseNumber2 + "2";
                    $scope.coordinatorOwnershipId3s2[$scope.baseNumber2] = coordinatorOwnershipBaseId2 + $scope.baseNumber2 + "3";

                    $scope.coordinatorOwnershipNames2[$scope.baseNumber2] = coordinatorOwnershipBaseName2 + $scope.baseNumber2;


                };

                $scope.next = function () {

                    var i;
                    for (i = 0; i < $scope.coordinators1.length; i++) {

                        $scope.coordinators1[i].name = $scope.coordinatorNameVars1[i];
                        $scope.coordinators1[i].type = $scope.coordinatorTypeVars1[i];

                        if (document.getElementById($scope.coordinatorOwnershipId1s1[i]).checked) {
                            $scope.coordinators1[i].ownership = document.getElementById($scope.coordinatorOwnershipId1s1[i]).value;
                        } else if (document.getElementById($scope.coordinatorOwnershipId2s1[i]).checked) {
                            $scope.coordinators1[i].ownership = document.getElementById($scope.coordinatorOwnershipId2s1[i]).value;
                        } else if (document.getElementById($scope.coordinatorOwnershipId3s1[i]).checked) {
                            $scope.coordinators1[i].ownership = document.getElementById($scope.coordinatorOwnershipId3s1[i]).value;
                        }

                        $scope.coordinators1[i].currency = $scope.currencies[0];


                        channel.addCoordinator1($scope.coordinators1[i]);
                    }


                    var j;
                    for (j = 0; j < $scope.coordinators2.length; j++) {

                        $scope.coordinators2[j].name = $scope.coordinatorNameVars2[j];
                        $scope.coordinators2[j].type = $scope.coordinatorTypeVars2[j];

                        if (document.getElementById($scope.coordinatorOwnershipId1s2[j]).checked) {
                            $scope.coordinators2[j].ownership = document.getElementById($scope.coordinatorOwnershipId1s2[j]).value;
                        } else if (document.getElementById($scope.coordinatorOwnershipId2s2[j]).checked) {
                            $scope.coordinators2[j].ownership = document.getElementById($scope.coordinatorOwnershipId2s2[j]).value;
                        } else if (document.getElementById($scope.coordinatorOwnershipId3s2[j]).checked) {
                            $scope.coordinators2[j].ownership = document.getElementById($scope.coordinatorOwnershipId3s2[j]).value;
                        }

                        $scope.coordinators2[j].currency = $scope.currencies[1];

                        channel.addCoordinator2($scope.coordinators2[j]);
                    }

                };
            }
        })


        .state('getstarted16', {
            url: '/getstarted16',
            templateUrl: 'view3/subviews/16.html',
            controller: function ($scope, Channel1, Channel2, GetRates1) {


                var channel = Channel1;

                $scope.coordinators = [];
                $scope.coordinators[0] = channel.getCoordinators1();
                $scope.coordinators[1] = channel.getCoordinators2();


                $scope.customersLogs = [];
                $scope.importersLogs = [];
                $scope.exportersLogs = [];

                $scope.baseCurrency = "";
                $scope.requiredCredit = 0;

                $scope.currencies = channel.getCurrencies();

                $scope.agreements = [];
                $scope.customers = [];
                $scope.exchanges = [];

                $scope.availableCredit1 = 0;
                $scope.availableCredit2 = 0;
                $scope.requiredCredit1 = 0;
                $scope.requiredCredit2 = 0;

                $scope.coordinators = channel.getCoordinators1().concat(channel.getCoordinators2());

                $scope.providersCount = 0;
                $scope.customersCount = 0;
                $scope.exchangesCount = 0;

                $scope.scopeProvidersCount = 0;
                $scope.scopeCustomersCount = 0;
                $scope.scopeExchangesCount = 0;

                $scope.customerNameIds = [];
                $scope.customerCoordinatorIds = [];
                $scope.customerAccountBalanceBeforeIds = [];
                $scope.customerAccountBalanceAfterIds = [];
                $scope.customerCurrencyIds = [];

                $scope.customerNameVars = [];
                $scope.customerCoordinatorVars = [];
                $scope.customerAccountBalanceBeforeVars = [];
                $scope.customerAccountBalanceAfterVars = [];
                $scope.customerCurrencyVars = [];


                var customerNameBaseId = "customerName-";
                var customerCoordinatorBaseId = "customerCoordinator-";
                var customerAccountBalanceBeforeBaseId = "customerAccountBalanceBefore-";
                var customerAccountBalanceAfterBaseId = "customerAccountBalanceAfter-";
                var customerCurrencyBaseId = "customerCurrency-";


                var customer = {name: " ", currency: "", coordinator: " ", balanceBefore: " "};
                $scope.customers.push(customer);

                $scope.customerNameIds[$scope.customersCount] = customerNameBaseId + $scope.customersCount;
                $scope.customerCoordinatorIds[$scope.customersCount] = customerCoordinatorBaseId + $scope.customersCount;
                $scope.customerAccountBalanceBeforeIds[$scope.customersCount] = customerAccountBalanceBeforeBaseId + $scope.customersCount;
                $scope.customerAccountBalanceAfterIds[$scope.customersCount] = customerAccountBalanceAfterBaseId + $scope.customersCount;
                $scope.customerCurrencyIds[$scope.customersCount] = customerCurrencyBaseId + $scope.customersCount;

                $scope.addCustomerBox2 = function () {

                    $scope.customersCount++;

                    var customer = {name: " ", currency: "", coordinator: " ", balanceBefore: " "};
                    $scope.customers.push(customer);

                    $scope.customerNameIds[$scope.customersCount] = customerNameBaseId + $scope.customersCount;
                    $scope.customerCoordinatorIds[$scope.customersCount] = customerCoordinatorBaseId + $scope.customersCount;
                    $scope.customerAccountBalanceBeforeIds[$scope.customersCount] = customerAccountBalanceBeforeBaseId + $scope.customersCount;
                    $scope.customerAccountBalanceAfterIds[$scope.customersCount] = customerAccountBalanceAfterBaseId + $scope.customersCount;
                    $scope.customerCurrencyIds[$scope.customersCount] = customerCurrencyBaseId + $scope.customersCount;

                };


                $scope.importerNameIds = [];
                // $scope.importerFieldOfActivityIds = [];
                $scope.importerFeeIds = [];
                $scope.importerCoordinatorIds = [];
                $scope.importerCreditBeforeIds = [];
                $scope.importerCreditAfterIds = [];
                $scope.importerCurrencyIds = [];
                $scope.importerDueToIds = [];


                $scope.exporterNameIds = [];
                // $scope.exporterFieldOfActivityIds = [];
                $scope.exporterFeeIds = [];
                $scope.exporterCoordinatorIds = [];
                $scope.exporterCreditBeforeIds = [];
                $scope.exporterCreditAfterIds = [];
                $scope.exporterCurrencyIds = [];
                $scope.exporterDueToIds = [];

                $scope.importerNameVars = [];
                // $scope.importerFieldOfActivityVars = [];
                $scope.importerCurrencyVars = [];
                $scope.importerCoordinatorVars = [];
                $scope.importerCreditBeforeVars = [];
                $scope.importerCreditAfterVars = [];
                $scope.importerFeeVars = [];
                $scope.importerDueToVars = [];


                $scope.exporterNameVars = [];
                // $scope.exporterFieldOfActivityVars = [];
                $scope.exporterCurrencyVars = [];
                $scope.exporterCoordinatorVars = [];
                $scope.exporterCreditBeforeVars = [];
                $scope.exporterCreditAfterVars = [];
                $scope.exporterFeeVars = [];
                $scope.exporterDueToVars = [];


                var importerNameBaseId = "importerName-";
                // var importerFieldOfActivityBaseId = "importerFieldOfActivity-";
                var importerCoordinatorBaseId = "importerCoordinator-";
                var importerCreditBeforeBaseId = "importerCreditBefore-";
                var importerCreditAfterBaseId = "importerCreditAfter-";
                var importerFeeBaseId = "importerFee-";
                var importerDueToBaseId = "importerDueTo-";


                var exporterNameBaseId = "exporterName-";
                // var exporterFieldOfActivityBaseId = "exporterFieldOfActivity-";
                var exporterCoordinatorBaseId = "exporterCoordinator-";
                var exporterCreditBeforeBaseId = "exporterCreditBefore-";
                var exporterCreditAfterBaseId = "exporterCreditAfter-";
                var exporterFeeBaseId = "exporterFee-";
                var exporterDueToBaseId = "exporterDueTo-";


                var importer = {name: " ", currency: " ", coordinator: " ", credit: "", fee: ""};
                var exporter = {name: " ", currency: " ", coordinator: " ", credit: "", fee: ""};

                var agreement = {importer: importer, exporter: exporter};
                $scope.agreements.push(agreement);

                $scope.importerNameIds[$scope.providersCount] = importerNameBaseId + $scope.providersCount;
                // $scope.importerFieldOfActivityIds[$scope.providersCount] = importerFieldOfActivityBaseId + $scope.providersCount;
                $scope.importerCoordinatorIds[$scope.providersCount] = importerCoordinatorBaseId + $scope.providersCount;
                $scope.importerCreditBeforeIds[$scope.providersCount] = importerCreditBeforeBaseId + $scope.providersCount;
                $scope.importerCreditAfterIds[$scope.providersCount] = importerCreditAfterBaseId + $scope.providersCount;
                $scope.importerFeeIds[$scope.providersCount] = importerFeeBaseId + $scope.providersCount;
                $scope.importerDueToIds[$scope.providersCount] = importerDueToBaseId + $scope.providersCount;

                $scope.exporterNameIds[$scope.providersCount] = exporterNameBaseId + $scope.providersCount;
                // $scope.exporterFieldOfActivityIds[$scope.providersCount] = exporterFieldOfActivityBaseId + $scope.providersCount;
                $scope.exporterCoordinatorIds[$scope.providersCount] = exporterCoordinatorBaseId + $scope.providersCount;
                $scope.exporterCreditBeforeIds[$scope.providersCount] = exporterCreditBeforeBaseId + $scope.providersCount;
                $scope.exporterCreditAfterIds[$scope.providersCount] = exporterCreditAfterBaseId + $scope.providersCount;
                $scope.exporterFeeIds[$scope.providersCount] = exporterFeeBaseId + $scope.providersCount;
                $scope.exporterDueToIds[$scope.providersCount] = exporterDueToBaseId + $scope.providersCount;

                $scope.addProviderBox2 = function () {

                    $scope.providersCount++;

                    var importer = {name: " ", currency: " ", coordinator: " ", credit: "", fee: ""};
                    var exporter = {name: " ", currency: " ", coordinator: " ", credit: "", fee: ""};

                    var agreement = {importer: importer, exporter: exporter};
                    $scope.agreements.push(agreement);

                    $scope.importerNameIds[$scope.providersCount] = importerNameBaseId + $scope.providersCount;
                    // $scope.importerFieldOfActivityIds[$scope.providersCount] = importerFieldOfActivityBaseId + $scope.providersCount;
                    $scope.importerCoordinatorIds[$scope.providersCount] = importerCoordinatorBaseId + $scope.providersCount;
                    $scope.importerCreditBeforeIds[$scope.providersCount] = importerCreditBeforeBaseId + $scope.providersCount;
                    $scope.importerCreditAfterIds[$scope.providersCount] = importerCreditAfterBaseId + $scope.providersCount;
                    $scope.importerFeeIds[$scope.providersCount] = importerFeeBaseId + $scope.providersCount;
                    $scope.importerDueToIds[$scope.providersCount] = importerDueToBaseId + $scope.providersCount;

                    $scope.exporterNameIds[$scope.providersCount] = exporterNameBaseId + $scope.providersCount;
                    // $scope.exporterFieldOfActivityIds[$scope.providersCount] = exporterFieldOfActivityBaseId + $scope.providersCount;
                    $scope.exporterCoordinatorIds[$scope.providersCount] = exporterCoordinatorBaseId + $scope.providersCount;
                    $scope.exporterCreditBeforeIds[$scope.providersCount] = exporterCreditBeforeBaseId + $scope.providersCount;
                    $scope.exporterCreditAfterIds[$scope.providersCount] = exporterCreditAfterBaseId + $scope.providersCount;
                    $scope.exporterFeeIds[$scope.providersCount] = exporterFeeBaseId + $scope.providersCount;
                    $scope.exporterDueToIds[$scope.providersCount] = exporterDueToBaseId + $scope.providersCount;

                };

                $scope.exchangeIdIds = [];
                $scope.exchangeFromIds = [];
                $scope.exchangeToIds = [];
                $scope.exchangeAmount1Ids = [];
                $scope.exchangeAmount2Ids = [];
                $scope.exchangeMaxFeeIds = [];
                $scope.exchangeFeeAmountIds = [];

                $scope.exchangeIdVars = [];
                $scope.exchangeFromVars = [];
                $scope.exchangeToVars = [];
                $scope.exchangeAmount1Vars = [];
                $scope.exchangeAmount2Vars = [];
                $scope.exchangeMaxFeeVars = [];
                $scope.exchangeFeeAmountVars = [];

                var exchangeIdBaseId = "exchangeId-";
                var exchangeFromBaseId = "exchangeFrom-";
                var exchangeToBaseId = "exchangeTo-";
                var exchangeAmount1BaseId = "exchangeAmount1-";
                var exchangeAmount2BaseId = "exchangeAmount2-";
                var exchangeMaxFeeBaseId = "exchangeMaxFee-";
                var exchangeFeeAmountBaseId = "exchangeFeeAmount-";

                var exchange = {ID1: "", from: " ", to1: "", amount1: "", amount2: ""};
                $scope.exchanges.push(exchange);

                $scope.exchangeIdVars[0] = "1";

                $scope.exchangeIdIds[$scope.exchangesCount] = exchangeIdBaseId + $scope.exchangesCount;
                $scope.exchangeFromIds[$scope.exchangesCount] = exchangeFromBaseId + $scope.exchangesCount;
                $scope.exchangeToIds[$scope.exchangesCount] = exchangeToBaseId + $scope.exchangesCount;
                $scope.exchangeAmount1Ids[$scope.exchangesCount] = exchangeAmount1BaseId + $scope.exchangesCount;
                $scope.exchangeAmount2Ids[$scope.exchangesCount] = exchangeAmount2BaseId + $scope.exchangesCount;
                $scope.exchangeMaxFeeIds[$scope.exchangesCount] = exchangeMaxFeeBaseId + $scope.exchangesCount;
                $scope.exchangeFeeAmountIds[$scope.exchangesCount] = exchangeFeeAmountBaseId + $scope.exchangesCount;


                $scope.addExchangeBox2 = function () {

                    $scope.exchangesCount++;
                    var exchange = {ID1: "", from: " ", to1: "", amount1: "", amount2: ""};
                    $scope.exchanges.push(exchange);

                    $scope.exchangeIdIds[$scope.exchangesCount] = exchangeIdBaseId + $scope.exchangesCount;
                    $scope.exchangeFromIds[$scope.exchangesCount] = exchangeFromBaseId + $scope.exchangesCount;
                    $scope.exchangeToIds[$scope.exchangesCount] = exchangeToBaseId + $scope.exchangesCount;
                    $scope.exchangeAmount1Ids[$scope.exchangesCount] = exchangeAmount1BaseId + $scope.exchangesCount;
                    $scope.exchangeAmount2Ids[$scope.exchangesCount] = exchangeAmount2BaseId + $scope.exchangesCount;
                    $scope.exchangeMaxFeeIds[$scope.exchangesCount] = exchangeMaxFeeBaseId + $scope.exchangesCount;
                    $scope.exchangeFeeAmountIds[$scope.exchangesCount] = exchangeFeeAmountBaseId + $scope.exchangesCount;

                    $scope.exchangeIdVars[$scope.exchangesCount] = $scope.exchangesCount + 1;
                };


                $scope.refreshProviders = function () {

                    $scope.availableCredit1 = 0;
                    $scope.availableCredit2 = 0;
                    $scope.requiredCredit1 = 0;
                    $scope.requiredCredit2 = 0;

                    var i;
                    for (i = 0; i < $scope.agreements.length; i++) {

                        $scope.agreements[i].importer.name = $scope.importerNameVars[i];
                        $scope.agreements[i].exporter.name = $scope.exporterNameVars[i];


                        $scope.agreements[i].importer.coordinator = $scope.importerCoordinatorVars[i];
                        $scope.agreements[i].exporter.coordinator = $scope.exporterCoordinatorVars[i];

                        $scope.agreements[i].importer.currency = $scope.importerCurrencyVars[i];
                        $scope.agreements[i].exporter.currency = $scope.exporterCurrencyVars[i];

                        $scope.agreements[i].importer.credit = parseInt($scope.importerCreditBeforeVars[i]);
                        $scope.agreements[i].exporter.credit = parseInt($scope.exporterCreditBeforeVars[i]);

                        $scope.agreements[i].importer.fee = parseInt($scope.importerFeeVars[i]);
                        $scope.agreements[i].exporter.fee = parseInt($scope.exporterFeeVars[i]);

                        if ($scope.agreements[i].importer.currency === $scope.currencies[0]) {
                            $scope.availableCredit1 += parseInt($scope.agreements[i].importer.credit);
                        } else {
                            $scope.availableCredit2 += parseInt($scope.agreements[i].importer.credit);
                        }

                        if ($scope.agreements[i].exporter.currency === $scope.currencies[0]) {
                            $scope.availableCredit1 += parseInt($scope.agreements[i].exporter.credit);
                        } else {
                            $scope.availableCredit2 += parseInt($scope.agreements[i].exporter.credit);
                        }

                        $scope.importersLogs[i] = [];
                        $scope.exportersLogs[i] = [];
                    }


                };

                $scope.refreshCustomers = function () {

                    var i;
                    for (i = 0; i < $scope.customers.length; i++) {

                        // $scope.customers[i].name = $scope.customerNameVars[i];
                        // $scope.customers[i].coordinator = $scope.customerCoordinatorVars[i];
                        // $scope.customers[i].currency = $scope.customerCurrencyVars[i];
                        // $scope.customers[i].balanceBefore = parseInt($scope.customerAccountBalanceBeforeVars[i]);
                        // $scope.customers[i].balanceAfter = parseInt($scope.customerAccountBalanceAfterVars[i]);
                        $scope.customersLogs[i] = [];
                    }
                };


                $scope.f1 = function (counter) {

                    $scope.customerCurrencyVars[counter] = $scope.customerCoordinatorVars[counter].currency;
                };

                $scope.f2 = function (counter) {


                    $scope.importerCurrencyVars[counter] = $scope.importerCoordinatorVars[counter].currency;
                };

                $scope.f3 = function (counter) {
                    $scope.exporterCurrencyVars[counter] = $scope.exporterCoordinatorVars[counter].currency;
                };

                $scope.f4 = function (counter) {

                    var r = GetRates1.getRates($scope.exchangeFromVars[counter].currency, $scope.exchangeToVars[counter].currency);

                    $scope.exchangeAmount2Vars[counter] = ($scope.exchangeAmount1Vars[counter] * (r[0] / r[1])).toFixed(0);


                };

                var ok = true;
                var toBalance = 0;

                var currency1Amounts = 0;
                var currency2Amounts = 0;

                var availableCredit = 0;


                var myRefreshExChanges = function () {
                    currency1Amounts = 0;
                    currency2Amounts = 0;
                    ok = true;

                    var i;
                    for (i = 0; i < $scope.exchanges.length; i++) {

                        $scope.exchanges[i].ID1 = $scope.exchangeIdVars[i];
                        $scope.exchanges[i].from = $scope.exchangeFromVars[i];
                        $scope.exchanges[i].to1 = $scope.exchangeToVars[i];
                        $scope.exchanges[i].amount1 = parseInt($scope.exchangeAmount1Vars[i]);
                        $scope.exchanges[i].amount2 = parseInt($scope.exchangeAmount2Vars[i]);
                        $scope.exchanges[i].maxFee = parseInt($scope.exchangeMaxFeeVars[i]);

                        if ($scope.exchanges[i].from.currency === $scope.currencies[0]) {
                            currency1Amounts -= $scope.exchanges[i].amount1;
                            currency2Amounts += $scope.exchanges[i].amount2;

                        } else {
                            currency2Amounts -= $scope.exchanges[i].amount1;
                            currency1Amounts += $scope.exchanges[i].amount2;

                        }

                    }

                    var r = GetRates1.getRates($scope.currencies[0], $scope.currencies[1]);


                    if (currency1Amounts < 0) {
                        $scope.requiredCredit1 = Math.abs(currency1Amounts);
                        $scope.requiredCredit2 = ($scope.requiredCredit1 * (r[0] / r[1])).toFixed(0);
                        $scope.baseCurrency = $scope.currencies[1];
                        toBalance = (-1) * currency2Amounts;
                        $scope.requiredCredit = $scope.requiredCredit2;
                        availableCredit = $scope.availableCredit2;

                    } else {

                        $scope.requiredCredit2 = Math.abs(currency2Amounts);
                        $scope.requiredCredit1 = ($scope.requiredCredit2 * (r[1] / r[0])).toFixed(0);
                        $scope.baseCurrency = $scope.currencies[0];
                        toBalance = (-1) * currency1Amounts;
                        $scope.requiredCredit = $scope.requiredCredit1;
                        availableCredit = $scope.availableCredit1;
                    }
                };


                // $scope.refreshExchanges = function () {

                // myRefreshExChanges();

                // };


                $scope.exchange = function () {

                    // var totalCredit

                    var i;
                    for (i = 0; i < $scope.exchanges.length; i++) {

                        if ($scope.exchanges[i].amount1 > $scope.exchanges[i].from.balanceBefore) {
                            ok = false;
                            // alert("hello");
                            alert("Exchange failed, not enough account balanceBefore by : " + $scope.exchanges[i].from.name);
                            break;

                        }
                    }

                    if (ok) {

                        if ($scope.requiredCredit > availableCredit) {

                            alert("not enough credit");

                        } else {

                            for (i = 0; i < $scope.exchanges.length; i++) {

                                var j;

                                for (j = 0; j < $scope.customers.length; j++) {
                                    if ($scope.customers[j].name === $scope.exchanges[i].from.name) {

                                        $scope.customerAccountBalanceBeforeVars[j] = parseInt($scope.customerAccountBalanceBeforeVars[j]) - parseInt($scope.exchanges[i].amount1);
                                        $scope.customers[j].balanceBefore = $scope.customerAccountBalanceBeforeVars[j];

                                        var log = {
                                            ID: $scope.exchanges[i].ID1,
                                            to1: $scope.exchanges[i].to1.name,
                                            amount: (-1) * $scope.exchanges[i].amount1
                                        };
                                        $scope.customersLogs[j].push(log);
                                        break;
                                    }

                                }


                                var l;

                                for (l = 0; l < $scope.customers.length; l++) {
                                    if ($scope.customers[l].name === $scope.exchanges[i].to1.name) {

                                        $scope.customerAccountBalanceBeforeVars[l] = parseInt($scope.customerAccountBalanceBeforeVars[l]) + parseInt($scope.exchanges[i].amount2);
                                        $scope.customers[l].balanceBefore = $scope.customerAccountBalanceBeforeVars[l];
                                        var log = {
                                            ID: $scope.exchanges[i].ID1,
                                            from: $scope.exchanges[i].from.name,
                                            amount: $scope.exchanges[i].amount2
                                        };
                                        $scope.customersLogs[l].push(log);

                                        break;
                                    }

                                }

                            }


                            var tempProviders = [];
                            var n;

                            for (n = 0; n < $scope.agreements.length; n++) {
                                if ($scope.agreements[n].importer.currency === $scope.baseCurrency) {
                                    tempProviders.push($scope.agreements[n].importer);

                                } else {
                                    tempProviders.push($scope.agreements[n].exporter);
                                }
                            }

                            tempProviders.sort(function (a, b) {
                                return a.fee - b.fee;
                            });


                            var k;
                            for (k = 0; k < tempProviders.length && toBalance < 0; k++) {

                                var index = 0;
                                var isImporter = false;

                                for (let b = 0; b < $scope.agreements.length; b++) {

                                    if ($scope.agreements[b].importer === tempProviders[k]) {
                                        isImporter = true;
                                        index = b;
                                        break;
                                    } else if ($scope.agreements[b].exporter === tempProviders[k]) {

                                        index = b;
                                        break;
                                    }

                                }

                                if (isImporter) {

                                    var temp = Math.min($scope.importerCreditBeforeVars[index], Math.abs(toBalance));
                                    $scope.importerCreditAfterVars[index] = parseInt($scope.importerCreditBeforeVars[index]) - temp;
                                    toBalance = toBalance + temp;

                                    var temp2;
                                    var r = GetRates1.getRates($scope.agreements[index].importer.currency, $scope.agreements[index].exporter.currency);
                                    temp2 = parseInt((temp * (r[0] / r[1])).toFixed(0));
                                    $scope.exporterCreditAfterVars[index] = parseInt($scope.exporterCreditBeforeVars[index]) + parseInt(temp2);
                                } else {

                                    var temp3 = Math.min($scope.exporterCreditBeforeVars[index], Math.abs(toBalance));
                                    $scope.exporterCreditAfterVars[index] = parseInt($scope.exporterCreditBeforeVars[index]) - temp3;
                                    toBalance = toBalance + temp3;

                                    var temp4;
                                    var r1 = GetRates1.getRates($scope.agreements[index].exporter.currency, $scope.agreements[index].importer.currency);
                                    temp4 = parseInt((temp3 * (r1[0] / r1[1])).toFixed(0));
                                    $scope.importerCreditAfterVars[index] = parseInt($scope.importerCreditBeforeVars[index]) + parseInt(temp4);

                                }

                            }

                        }

                    }

                };

                $scope.next = function () {
                    for (var i = 0; i < $scope.agreements.length; i++) {
                        channel.addAgreement($scope.agreements[i]);
                    }

                    for (var j = 0; j < $scope.customers.length; j++) {
                        channel.addCustomers($scope.customers[j]);
                    }

                };
            }
        })

        .state('getstarted17', {
            url: '/getstarted17',
            templateUrl: 'view3/subviews/17.html',
            controller: function ($scope) {

            }

        })

        .state('getstarted18', {
            url: '/getstarted18',
            templateUrl: 'view3/subviews/18.html',
            controller: function ($scope, Page18, Currencies1, Channel2) {

                var page18 = Page18;
                $scope.channel = Channel2;
                $scope.currentCurrencies = $scope.channel.getCurrencies();
                $scope.currencies1 = Currencies1;

                $scope.indexCurrencies = [];

                let i;
                for (i = 0; i < $scope.channel.getCurrencies().length; i++) {

                    $scope.indexCurrencies.push({index: i + 1, currency: $scope.currentCurrencies[i]});
                }
                $scope.currenciesCount = i;

                // if (!page18.isVisited()) {
                // }

                // $scope.findCurrencyIndex = function (currency) {
                //     for (let i = 0; i < $scope.currentCurrencies.length; i++) {
                //         if ($scope.currentCurrencies[i] === currency) {
                //
                //             return i;
                //
                //         }
                //     }
                // };


                $scope.addCurrencyBox = function () {

                    var newCurrency = "" + $scope.currenciesCount;
                    $scope.currentCurrencies.push(newCurrency);
                    $scope.indexCurrencies.push({index: $scope.currenciesCount + 1, currency: newCurrency});
                    $scope.currenciesCount++;
                };

                $scope.createChannel = function () {

                    for (let i = 0; i < $scope.currentCurrencies.length; i++) {

                        $scope.currentCurrencies[i] = $scope.indexCurrencies[i].currency;
                    }

                    $scope.channel.setCurrencies($scope.currentCurrencies);

                };

                page18.visit();
            }

        })

        .state('getstarted19', {
            url: '/getstarted19',
            templateUrl: 'view3/subviews/19.html',
            controller: function ($scope, Page19, Channel1, Channel2) {

                $scope.coordinatorTypes = ['bank', 'trader', 'money changer'];
                var page19 = Page19;
                $scope.channel = Channel2;

                var coordinatorNameBaseIds = [];
                var coordinatorTypeBaseIds = [];
                var coordinatorOwnershipBaseIds = [];
                var coordinatorOwnershipBaseNames = [];

                for (let j = 0; j < $scope.channel.getCurrencies().length; j++) {

                    coordinatorNameBaseIds[j] = "coordinatorName-" + j;
                    coordinatorTypeBaseIds[j] = "coordinatorType-" + j;
                    coordinatorOwnershipBaseIds[j] = "ownershipType-" + j;
                    coordinatorOwnershipBaseNames[j] = "ownershipType" + j;

                }


                if (!page19.isVisited()) {

                    page19.coordinatorsCount = [];
                    $scope.channel.buildCoordinators();


                    for (let j = 0; j < $scope.channel.getCurrencies().length; j++) {
                        page19.coordinatorsCount[j] = 0;
                    }
                }

                for (let i = 0; i < $scope.channel.getCurrencies().length; i++) {


                    if ($scope.channel.getCoordinators()[i] === undefined || $scope.channel.getCoordinators()[i].length < 1) {

                        $scope.channel.getCoordinators()[i] = [];
                        page19.coordinatorsCount[i] = 0;

                        var tempBoxNameId = coordinatorNameBaseIds[i] + page19.coordinatorsCount[i];
                        var tempBoxTypeId = coordinatorTypeBaseIds[i] + page19.coordinatorsCount[i];
                        var tempOwnershipId = coordinatorOwnershipBaseIds[i] + page19.coordinatorsCount[i];
                        var tempOwnershipName = coordinatorOwnershipBaseNames[i] + page19.coordinatorsCount[i];


                        var coordinator = {
                            name: "",
                            type: "",
                            ownership: "",
                            currency: $scope.channel.getCurrencies()[i],
                            boxNameId: tempBoxNameId,
                            boxTypeId: tempBoxTypeId,
                            boxOwnershipId: tempOwnershipId,
                            boxOwnershipName: tempOwnershipName
                        };

                        $scope.channel.addCoordinator(coordinator, i);
                        page19.coordinatorsCount[i]++;
                    }
                }


                $scope.addCoordinator1box = function (count) {
                    //
                    page19.coordinatorsCount[count]++;
                    //

                    var tempBoxNameId = coordinatorNameBaseIds[count] + page19.coordinatorsCount[count];
                    var tempBoxTypeId = coordinatorTypeBaseIds[count] + page19.coordinatorsCount[count];
                    var tempOwnershipId = coordinatorOwnershipBaseIds[count] + page19.coordinatorsCount[count];
                    var tempOwnershipName = coordinatorOwnershipBaseNames[count] + page19.coordinatorsCount[count];


                    var coordinator = {
                        name: "",
                        type: "",
                        ownership: "",
                        currency: $scope.channel.getCurrencies()[count],
                        boxNameId: tempBoxNameId,
                        boxTypeId: tempBoxTypeId,
                        boxOwnershipId: tempOwnershipId,
                        boxOwnershipName: tempOwnershipName
                    };

                    $scope.channel.addCoordinator(coordinator, count);

                };

                $scope.findCurrencyIndex = function (currency) {
                    for (let i = 0; i < $scope.channel.getCurrencies().length; i++) {
                        if ($scope.channel.getCurrencies()[i] === currency) {
                            return i;

                        }
                    }
                };

                $scope.next = function () {

                };

                page19.visit();
            }

        })

        .state('getstarted20', {
            url: '/getstarted20',
            templateUrl: 'view3/subviews/20.html',
            controller: function ($scope, Channel2, Graph, GetRates1, Page20) {

                // alert("to be sure this is not a cache");


                $scope.channel = Channel2;
                var graph = Graph;
                var page20 = Page20;

                $scope.coordinators = $scope.channel.getCoordinators();
                $scope.currencies = $scope.channel.getCurrencies();

                var copyAllCoordinators = [];
                var copyAgreements = [];

                $scope.allCoordinators = $scope.coordinators[0];
                for (let i = 1; i < $scope.coordinators.length; i++) {
                    $scope.allCoordinators = $scope.allCoordinators.concat($scope.coordinators[i]);
                }

                var customerNameBaseId = "customerName-";
                var customerCoordinatorBaseId = "customerCoordinator-";
                var customerAccountBalanceBeforeBaseId = "customerAccountBalanceBefore-";
                var customerAccountBalanceAfterBaseId = "customerAccountBalanceAfter-";
                var customerCurrencyBaseId = "customerCurrency-";
                var customerRemoveBtnBaseId = "customerRemoveBtn-";

                if (!page20.isVisited()) {

                    page20.turn = 0;
                    page20.providersCount = 0;
                    page20.customersCount = 0;
                    page20.exchangesCount = 0;

                    var tempBoxNameId = customerNameBaseId + $scope.customersCount;
                    var tempBoxCurrencyId = customerCoordinatorBaseId + $scope.customersCount;
                    var tempBoxCoordinatorId = customerAccountBalanceBeforeBaseId + $scope.customersCount;
                    var tempBoxBalanceBeforeId = customerAccountBalanceAfterBaseId + $scope.customersCount;
                    var tempBoxBalanceAfterId = customerCurrencyBaseId + $scope.customersCount;
                    var tempBoxCustomerRemoveBtnId = customerRemoveBtnBaseId + $scope.customersCount;

                    var customer = {
                        name: " ",
                        currency: "",
                        coordinator: " ",
                        balanceBefore: " ",
                        balanceAfter: "",
                        tempBalanceAfter: "",
                        logs1: [],
                        boxNameId: tempBoxNameId,
                        boxCurrencyID: tempBoxCurrencyId,
                        boxCoordinatorId: tempBoxCoordinatorId,
                        boxBalanceBeforeId: tempBoxBalanceBeforeId,
                        boxBalanceAfterId: tempBoxBalanceAfterId,
                        boxRemoveBtnId: tempBoxCustomerRemoveBtnId
                    };

                    $scope.channel.addCustomer(customer);
                }


                $scope.addCustomerBox = function () {

                    page20.customersCount++;

                    var tempBoxNameId = customerNameBaseId + page20.customersCount;
                    var tempBoxCurrencyId = customerCoordinatorBaseId + page20.customersCount;
                    var tempBoxCoordinatorId = customerAccountBalanceBeforeBaseId + page20.customersCount;
                    var tempBoxBalanceBeforeId = customerAccountBalanceAfterBaseId + page20.customersCount;
                    var tempBoxBalanceAfterId = customerCurrencyBaseId + page20.customersCount;
                    var tempBoxCustomerRemoveBtnId = customerRemoveBtnBaseId + page20.customersCount;

                    var customer = {
                        name: " ",
                        currency: "",
                        coordinator: " ",
                        balanceBefore: " ",
                        balanceAfter: "",
                        tempBalanceAfter: "",
                        logs1: [],
                        boxNameId: tempBoxNameId,
                        boxCurrencyID: tempBoxCurrencyId,
                        boxCoordinatorId: tempBoxCoordinatorId,
                        boxBalanceBeforeId: tempBoxBalanceBeforeId,
                        boxBalanceAfterId: tempBoxBalanceAfterId,
                        boxRemoveBtnId: tempBoxCustomerRemoveBtnId
                    };
                    $scope.channel.addCustomer(customer);

                };

                var importerNameBaseId = "importerName-";
                var importerCurrencyBaseId = "importerCurrency-";
                var importerCoordinatorBaseId = "importerCoordinator-";
                var importerCreditBeforeBaseId = "importerCreditBefore-";
                var importerCreditAfterBaseId = "importerCreditAfter-";
                var importerFeeBaseId = "importerFee-";
                var importerDueToBaseId = "importerDueTo-";

                var exporterNameBaseId = "exporterName-";
                var exporterCurrencyBaseId = "importerCurrency-";
                var exporterCoordinatorBaseId = "exporterCoordinator-";
                var exporterCreditBeforeBaseId = "exporterCreditBefore-";
                var exporterCreditAfterBaseId = "exporterCreditAfter-";
                var exporterFeeBaseId = "exporterFee-";
                var exporterDueToBaseId = "exporterDueTo-";

                var agreementRemoveBtnBaseId = "removeBtn-";


                if (!page20.isVisited()) {


                    var tempImporterBoxNameId = importerNameBaseId + page20.providersCount;
                    var tempImporterBoxCoordinatorId = importerCoordinatorBaseId + page20.providersCount;
                    var tempImporterBoxCurrencyId = importerCurrencyBaseId + page20.providersCount;
                    var tempImporterBoxCreditBeforeId = importerCreditBeforeBaseId + page20.providersCount;
                    var tempImporterBoxCreditAfterId = importerCreditAfterBaseId + page20.providersCount;
                    var tempImporterBoxFeeId = importerFeeBaseId + page20.providersCount;
                    var tempImporterBoxDueToId = importerDueToBaseId + page20.providersCount;

                    var tempExporterBoxNameId = exporterNameBaseId + page20.providersCount;
                    var tempExporterBoxCoordinatorId = exporterCoordinatorBaseId + page20.providersCount;
                    var tempExporterBoxCurrencyId = exporterCurrencyBaseId + page20.providersCount;
                    var tempExporterBoxCreditBeforeId = exporterCreditBeforeBaseId + page20.providersCount;
                    var tempExporterBoxCreditAfterId = exporterCreditAfterBaseId + page20.providersCount;
                    var tempExporterBoxFeeId = exporterFeeBaseId + $scope.providersCount;
                    var tempExporterBoxDueToId = exporterDueToBaseId + $scope.providersCount;

                    var tempAgreementBoxRemoveBtnId = agreementRemoveBtnBaseId + page20.providersCount;

                    var importer = {
                        name: " ",
                        currency: " ",
                        coordinator: " ",
                        fee: "",
                        creditBefore: "",
                        dueTo: "",
                        creditAfter: "",
                        tempCreditAfter: "",
                        boxNameId: tempImporterBoxNameId,
                        boxCoordinatorId: tempImporterBoxCoordinatorId,
                        boxCurrencyId: tempImporterBoxCurrencyId,
                        boxCreditBeforeId: tempImporterBoxCreditBeforeId,
                        boxCreditAfterId: tempImporterBoxCreditAfterId,
                        boxFeeId: tempImporterBoxFeeId,
                        boxDueToId: tempImporterBoxDueToId,

                    };
                    var exporter = {
                        name: " ",
                        currency: " ",
                        coordinator: " ",
                        fee: "",
                        creditBefore: "",
                        dueTo: "",
                        creditAfter: "",
                        tempCreditAfter: "",
                        boxNameId: tempExporterBoxNameId,
                        boxCoordinatorId: tempExporterBoxCoordinatorId,
                        boxCurrencyId: tempExporterBoxCurrencyId,
                        boxCreditBeforeId: tempExporterBoxCreditBeforeId,
                        boxCreditAfterId: tempExporterBoxCreditAfterId,
                        boxFeeId: tempExporterBoxFeeId,
                        boxDueToId: tempExporterBoxDueToId
                    };

                    var agreement = {
                        importer: importer,
                        exporter: exporter,
                        boxRemoveBtnId: tempAgreementBoxRemoveBtnId
                    };
                    $scope.channel.addAgreement(agreement);

                }

                $scope.addProviderBox = function () {

                    page20.providersCount++;

                    var tempImporterBoxNameId = importerNameBaseId + page20.providersCount;
                    var tempImporterBoxCoordinatorId = importerCoordinatorBaseId + page20.providersCount;
                    var tempImporterBoxCurrencyId = importerCurrencyBaseId + page20.providersCount;
                    var tempImporterBoxCreditBeforeId = importerCreditBeforeBaseId + page20.providersCount;
                    var tempImporterBoxCreditAfterId = importerCreditAfterBaseId + page20.providersCount;
                    var tempImporterBoxFeeId = importerFeeBaseId + page20.providersCount;
                    var tempImporterBoxDueToId = importerDueToBaseId + page20.providersCount;

                    var tempExporterBoxNameId = exporterNameBaseId + page20.providersCount;
                    var tempExporterBoxCoordinatorId = exporterCoordinatorBaseId + page20.providersCount;
                    var tempExporterBoxCurrencyId = exporterCurrencyBaseId + page20.providersCount;
                    var tempExporterBoxCreditBeforeId = exporterCreditBeforeBaseId + page20.providersCount;
                    var tempExporterBoxCreditAfterId = exporterCreditAfterBaseId + page20.providersCount;
                    var tempExporterBoxFeeId = exporterFeeBaseId + page20.providersCount;
                    var tempExporterBoxDueToId = exporterDueToBaseId + page20.providersCount;

                    var tempAgreementBoxRemoveBtnId = agreementRemoveBtnBaseId + page20.providersCount;

                    var importer = {
                        name: " ",
                        currency: " ",
                        coordinator: " ",
                        fee: "",
                        creditBefore: "",
                        dueTo: "",
                        creditAfter: "",
                        tempCreditAfter: "",
                        boxNameId: tempImporterBoxNameId,
                        boxCoordinatorId: tempImporterBoxCoordinatorId,
                        boxCurrencyId: tempImporterBoxCurrencyId,
                        boxCreditBeforeId: tempImporterBoxCreditBeforeId,
                        boxCreditAfterId: tempImporterBoxCreditAfterId,
                        boxFeeId: tempImporterBoxFeeId,
                        boxDueToId: tempImporterBoxDueToId
                    };
                    var exporter = {
                        name: " ",
                        currency: " ",
                        coordinator: " ",
                        fee: "",
                        creditBefore: "",
                        dueTo: "",
                        creditAfter: "",
                        tempCreditAfter: "",
                        boxNameId: tempExporterBoxNameId,
                        boxCoordinatorId: tempExporterBoxCoordinatorId,
                        boxCurrencyId: tempExporterBoxCurrencyId,
                        boxCreditBeforeId: tempExporterBoxCreditBeforeId,
                        boxCreditAfterId: tempExporterBoxCreditAfterId,
                        boxFeeId: tempExporterBoxFeeId,
                        boxDueToId: tempExporterBoxDueToId
                    };


                    var agreement = {
                        importer: importer,
                        exporter: exporter,
                        boxRemoveBtnId: tempAgreementBoxRemoveBtnId
                    };
                    $scope.channel.addAgreement(agreement);

                };

                var exchangeIdBaseId = "exchangeId-";
                var exchangeFromBaseId = "exchangeFrom-";
                var exchangeToBaseId = "exchangeTo-";
                var exchangeAmount1BaseId = "exchangeAmount1-";
                var exchangeAmount2BaseId = "exchangeAmount2-";
                var exchangeMaxFeeBaseId = "exchangeMaxFee-";
                var exchangeFeeAmountBaseId = "exchangeFeeAmount-";
                var exchangePathBaseId = "exchangePath-";
                var exchangeSubmitBtnBaseId = "exchangeSubmitBtn-";
                var exchangeRemoveBtnBaseId = "exchangeRemoveBtn-";


                if (!page20.isVisited()) {


                    var tempBoxIdId = exchangeIdBaseId + page20.exchangesCount;
                    var tempBoxFromId = exchangeFromBaseId + page20.exchangesCount;
                    var tempBoxToId = exchangeToBaseId + page20.exchangesCount;
                    var tempBoxAmount1Id = exchangeAmount1BaseId + page20.exchangesCount;
                    var tempBoxAmount2Id = exchangeAmount2BaseId + page20.exchangesCount;
                    var tempBoxMaxFeeId = exchangeMaxFeeBaseId + page20.exchangesCount;
                    var tempBoxFeeAmountId = exchangeFeeAmountBaseId + page20.exchangesCount;
                    var tempBoxPathId = exchangePathBaseId + page20.exchangesCount;
                    var tempBoxSubmitBtnId = exchangeSubmitBtnBaseId + page20.exchangesCount;
                    var tempBoxExchangeRemoveBtnId = exchangeRemoveBtnBaseId + page20.exchangesCount;

                    var exchange = {
                        ID1: "",
                        from: " ",
                        to1: "",
                        amount1: "",
                        amount2: "",
                        feeAmount: "",
                        maxFee: "",
                        path: "",
                        turn: "",
                        isSubmitted: false,
                        boxIdId: tempBoxIdId,
                        boxFromId: tempBoxFromId,
                        boxToId: tempBoxToId,
                        boxAmount1Id: tempBoxAmount1Id,
                        boxAmount2Id: tempBoxAmount2Id,
                        boxMaxFeeId: tempBoxMaxFeeId,
                        boxFeeAmountId: tempBoxFeeAmountId,
                        boxPathId: tempBoxPathId,
                        boxSubmitBtnId: tempBoxSubmitBtnId,
                        boxRemoveBtnId: tempBoxExchangeRemoveBtnId

                    };

                    $scope.channel.addExchange(exchange);
                    $scope.channel.getExchanges()[0].ID1 = "1";
                }

                $scope.addExchangeBox = function () {

                    page20.exchangesCount++;


                    var tempBoxIdId = exchangeIdBaseId + page20.exchangesCount;
                    var tempBoxFromId = exchangeFromBaseId + page20.exchangesCount;
                    var tempBoxToId = exchangeToBaseId + page20.exchangesCount;
                    var tempBoxAmount1Id = exchangeAmount1BaseId + page20.exchangesCount;
                    var tempBoxAmount2Id = exchangeAmount2BaseId + page20.exchangesCount;
                    var tempBoxMaxFeeId = exchangeMaxFeeBaseId + page20.exchangesCount;
                    var tempBoxFeeAmountId = exchangeFeeAmountBaseId + page20.exchangesCount;
                    var tempBoxPathId = exchangePathBaseId + page20.exchangesCount;
                    var tempBoxSubmitBtnId = exchangeSubmitBtnBaseId + page20.exchangesCount;
                    var tempBoxExchangeRemoveBtnId = exchangeRemoveBtnBaseId + page20.exchangesCount;

                    var exchange = {
                        ID1: page20.exchangesCount + 1,
                        from: " ",
                        to1: "",
                        amount1: "",
                        amount2: "",
                        feeAmount: "",
                        maxFee: "",
                        path: "",
                        turn: "",
                        isSubmitted: false,
                        boxIdId: tempBoxIdId,
                        boxFromId: tempBoxFromId,
                        boxToId: tempBoxToId,
                        boxAmount1Id: tempBoxAmount1Id,
                        boxAmount2Id: tempBoxAmount2Id,
                        boxMaxFeeId: tempBoxMaxFeeId,
                        boxFeeAmountId: tempBoxFeeAmountId,
                        boxPathId: tempBoxPathId,
                        boxSubmitBtnId: tempBoxSubmitBtnId,
                        boxRemoveBtnId: tempBoxExchangeRemoveBtnId

                    };

                    $scope.channel.addExchange(exchange);

                };


                var disableAgreements = function () {
                    for (let i = 0; i < $scope.channel.getAgreements().length; i++) {

                        document.getElementById($scope.channel.getAgreements()[i].importer.boxNameId).disabled = true;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxCoordinatorId).disabled = true;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxCreditBeforeId).disabled = true;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxFeeId).disabled = true;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxDueToId).disabled = true;

                        document.getElementById($scope.channel.getAgreements()[i].exporter.boxNameId).disabled = true;
                        document.getElementById($scope.channel.getAgreements()[i].exporter.boxCoordinatorId).disabled = true;
                        document.getElementById($scope.channel.getAgreements()[i].exporter.boxCreditBeforeId).disabled = true;
                        // document.getElementById($scope.channel.getAgreements()[i].exporter.boxFeeId).disabled = true;
                        // document.getElementById($scope.channel.getAgreements()[i].exporter.boxDueToId).disabled = true;

                        document.getElementById($scope.channel.getAgreements()[i].boxRemoveBtnId).disabled = true;
                        document.getElementById("addAgreementBtn").disabled = true;

                    }
                };

                var enableAgreements = function () {
                    for (let i = 0; i < $scope.channel.getAgreements().length; i++) {

                        document.getElementById($scope.channel.getAgreements()[i].importer.boxNameId).disabled = false;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxCoordinatorId).disabled = false;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxCreditBeforeId).disabled = false;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxFeeId).disabled = false;
                        document.getElementById($scope.channel.getAgreements()[i].importer.boxDueToId).disabled = false;

                        document.getElementById($scope.channel.getAgreements()[i].exporter.boxNameId).disabled = false;
                        document.getElementById($scope.channel.getAgreements()[i].exporter.boxCoordinatorId).disabled = false;
                        document.getElementById($scope.channel.getAgreements()[i].exporter.boxCreditBeforeId).disabled = false;
                        // document.getElementById($scope.channel.getAgreements()[i].exporter.boxFeeId).disabled = false;
                        // document.getElementById($scope.channel.getAgreements()[i].exporter.boxDueToId).disabled = false;

                        document.getElementById($scope.channel.getAgreements()[i].boxRemoveBtnId).disabled = false;
                        document.getElementById("addAgreementBtn").disabled = false;

                    }

                };

                var disableExchange = function (e) {

                    document.getElementById(e.boxFromId).disabled = true;
                    document.getElementById(e.boxToId).disabled = true;
                    document.getElementById(e.boxAmount1Id).disabled = true;
                    document.getElementById(e.boxRemoveBtnId).disabled = true;
                    document.getElementById(e.boxSubmitBtnId).disabled = true;

                };

                var enableExchange = function (e) {

                    document.getElementById(e.boxFromId).disabled = false;
                    document.getElementById(e.boxToId).disabled = false;
                    document.getElementById(e.boxAmount1Id).disabled = false;
                    document.getElementById(e.boxRemoveBtnId).disabled = false;
                    document.getElementById(e.boxSubmitBtnId).disabled = false;
                    document.getElementById(e.boxSubmitBtnId).innerHTML = "submit";


                };

                var disableExchanges = function () {

                    for (let i = 0; i < $scope.channel.getExchanges().length; i++) {
                        disableExchange($scope.channel.getExchanges()[i]);
                    }

                    document.getElementById("addExchangeBtn").disabled = true;

                };

                var enableExchanges = function () {
                    for (let i = 0; i < $scope.channel.getExchanges().length; i++) {
                        enableExchange($scope.channel.getExchanges()[i]);
                    }

                    document.getElementById("addExchangeBtn").disabled = false;
                };

                var disableCustomers = function () {

                    for (let i = 0; i < $scope.channel.getCustomers().length; i++) {

                        document.getElementById($scope.channel.getCustomers()[i].boxNameId).disabled = true;
                        document.getElementById($scope.channel.getCustomers()[i].boxBalanceBeforeId).disabled = true;
                        document.getElementById($scope.channel.getCustomers()[i].boxCoordinatorId).disabled = true;
                        document.getElementById($scope.channel.getCustomers()[i].boxRemoveBtnId).disabled = true;
                    }

                    document.getElementById("addCustomerBtn").disabled = true;

                };

                var enableCustomers = function () {

                    for (let i = 0; i < $scope.channel.getCustomers().length; i++) {

                        document.getElementById($scope.channel.getCustomers()[i].boxNameId).disabled = false;
                        document.getElementById($scope.channel.getCustomers()[i].boxBalanceBeforeId).disabled = false;
                        document.getElementById($scope.channel.getCustomers()[i].boxCoordinatorId).disabled = false;
                        document.getElementById($scope.channel.getCustomers()[i].boxRemoveBtnId).disabled = false;

                    }

                    document.getElementById("addCustomerBtn").disabled = false;

                };


                // $scope.refreshCustomers = function () {
                //
                //     var i;
                //     for (i = 0; i < $scope.channel.getCustomers().length; i++) {
                //         $scope.channel.getCustomers()[i].tempBalanceAfter = parseInt($scope.channel.getCustomers()[i].balanceBefore);
                //
                //     }
                // };

                $scope.undo = function () {

                    for (let i = 0; i < $scope.channel.getCustomers().length; i++) {

                        $scope.channel.getCustomers()[i].tempBalanceAfter = $scope.channel.getCustomers()[i].balanceBefore;
                        $scope.channel.getCustomers()[i].balanceAfter = "";
                        $scope.channel.getCustomers()[i].logs1 = [];

                    }

                    refreshProviders();

                    // alert("length is " + $scope.channel.getExchanges().length);

                    for (let i = 0; i < $scope.channel.getExchanges().length; i++) {
                        $scope.channel.getExchanges()[i].isSubmitted = false;
                        $scope.channel.getExchanges()[i].maxFee = "";
                        $scope.channel.getExchanges()[i].feeAmount = "";
                        getExchangeFee($scope.channel.getExchanges()[i]);
                        // document.getElementById($scope.channel.getExchanges()[i].boxSubmitBtnId).disabled = false;
                    }

                    page20.turn = 0;

                    enableAgreements();
                    enableExchanges();
                    enableCustomers();
                };


                $scope.setTempBalanceAfter = function (c) {

                    c.tempBalanceAfter = c.balanceBefore;

                };

                $scope.setCustomerCurrency = function (c) {

                    c.currency = c.coordinator.currency;
                };

                $scope.setImporterCurrency = function (i) {


                    i.currency = i.coordinator.currency;
                };

                $scope.setExporterCurrency = function (e) {
                    e.currency = e.coordinator.currency;
                };

                $scope.setExchangeAmount2AndFee = function (e) {

                    var r = GetRates1.getRates(e.from.currency, e.to1.currency);
                    e.amount2 = (e.amount1 * (r[0] / r[1])).toFixed(0);
                    getExchangeFee(e);

                };

                $scope.setExporterCreditBefore = function (a) {


                    for (let i = 0; i< $scope.channel.getAgreements().length; i++){
                        if (a.exporter.name === $scope.channel.getAgreements()[i].exporter.name){

                            var r = GetRates1.getRates(a.importer.currency, a.exporter.currency);
                            a.exporter.creditBefore = ((-1)*(a.importer.creditBefore * r[0] / r[1])).toFixed(2);

                        }

                    }
                };

                var getMaxFee = function (exchange) {


                    var maxFee = 0;
                    var sum = 0;
                    var creditEnough = true;

                    var r = GetRates1.getRates(exchange.from.currency, "Dollar");
                    var amount = (exchange.amount1 * r[0] / r[1]);

                    var path = "";

                    while (sum < Math.floor(amount) && creditEnough) {

                        // alert("sum is : " + sum + "amount is : " + amount.toFixed(0));
                        // alert(" entering while");
                        var fee = 0;

                        for (var k = 0; k < graph.getNodes().length; k++) {

                            graph.getNodes()[k].parent = undefined;

                            if (exchange.from.coordinator === graph.getNodes()[k].coordinator) {
                                graph.getNodes()[k].distance = 0;

                            } else {
                                graph.getNodes()[k].distance = Number.MAX_SAFE_INTEGER;


                            }
                        }


                        for (var i = 1; i < graph.getNodes().length; i++) {
                            for (var j = 0; j < graph.getEdges().length; j++) {


                                var tempSource = graph.getEdges()[j].source;
                                var destination = graph.getEdges()[j].destination;


                                if (tempSource.distance !== Number.MAX_SAFE_INTEGER && destination.distance > (parseInt(tempSource.distance) +
                                    parseInt(graph.getEdges()[j].weights[graph.getEdges()[j].weights.length - 1].fee))) {
                                    // alert("entered if");

                                    destination.distance = parseInt(tempSource.distance) + parseInt(graph.getEdges()[j].weights[graph.getEdges()[j].weights.length - 1].fee);
                                    destination.parent = tempSource;

                                }
                                if (destination.coordinator !== exchange.from.coordinator) {
                                    // alert("the destination parent after is : " + destination.parent.coordinator.name);

                                } else {

                                    // alert("this is tempSource no parent");
                                }
                            }
                        }


                        var source = graph.getNode(exchange.from.coordinator);
                        var tempNode = graph.getNode(exchange.to1.coordinator);
                        var minAmount = Number.MAX_SAFE_INTEGER;

                        if (tempNode.parent === undefined) {
                            var temp100 = "";
                            alert("transaction is not possible!");
                            return temp100;
                        }

                        while (tempNode !== source) {

                            // alert("entering while 0");

                            var tempEdge = graph.getEdge(tempNode.parent, tempNode);

                            // alert("the weights include : ");
                            // for (let i = 0; i < tempEdge.weights.length; i++) alert(tempEdge.weights[i].fee);
                            // alert("and i choose " + tempEdge.weights[tempEdge.weights.length - 1].fee);
                            // alert("weights amount here are : " + tempEdge.weights[tempEdge.weights.length - 1].fee);

                            fee += parseInt(tempEdge.weights[tempEdge.weights.length - 1].fee);
                            minAmount = Math.min(minAmount, tempEdge.weights[tempEdge.weights.length - 1].amount);
                            tempNode = tempNode.parent;

                        }

                        //alert("test for minAmount:" + minAmount);
                        //alert("min amount : " + minAmount);

                        tempNode = graph.getNode(exchange.to1.coordinator);
                        minAmount = Math.min(minAmount, amount - sum);
                        // alert("minimum amount that can be transferred is : " + minAmount);
                        var subPath = "";

                        // alert("destination : " + tempNode.coordinator.name);
                        // alert("tempSource : " + tempSource.coordinator.name);

                        while (tempNode !== source) {

                            // alert("entering while!");
                            var tempEdge2 = graph.getEdge(tempNode.parent, tempNode);
                            var minusEdgeFee = -1 * tempEdge2.weights[tempEdge2.weights.length - 1].fee;

                            var index;
                            for (index = 0; index < graph.getEdges().length; index++) {
                                if (graph.getEdges()[index].destination === tempNode && graph.getEdges()[index].source === tempNode.parent) {
                                    break;
                                }
                            }

                            // if (index < graph.getEdges().length) {
                            //
                            //     var temp = {
                            //         agreementSide1: graph.getEdges()[index].weights[graph.getEdges()[index].weights.length - 1].agreementSide2,
                            //         agreementSide2: graph.getEdges()[index].weights[graph.getEdges()[index].weights.length - 1].agreementSide1,
                            //         amount: minAmount,
                            //         fee: minusEdgeFee
                            //
                            //     };
                            //
                            //     graph.getEdges()[index].weights.push(temp);
                            //
                            // }
                            //
                            // else

                            subPath = tempEdge2.weights[tempEdge2.weights.length - 1].agreementSide1.name + "(" + tempEdge2.weights[tempEdge2.weights.length - 1].agreementSide1.coordinator.name + ")" + " -> " + tempEdge2.weights[tempEdge2.weights.length - 1].agreementSide2.name + "(" + tempEdge2.weights[tempEdge2.weights.length - 1].agreementSide2.coordinator.name + ")" + subPath + "";
                            if (tempNode.parent !== source) {

                                subPath = "-->" + subPath;
                            }


                            graph.addEdge(tempNode, tempNode.parent, graph.getEdges()[index].weights[graph.getEdges()[index].weights.length - 1].agreementSide2, graph.getEdges()[index].weights[graph.getEdges()[index].weights.length - 1].agreementSide1, minAmount, minusEdgeFee);
                            graph.removeEdgeWeight(tempNode.parent, tempNode, minAmount);

                            // graph.addEdgeWeight(index, tempNode, tempNode.parent, minusEdgeFee, minAmount);
                            // alert(subPath);
                            tempNode = tempNode.parent;
                        }


                        var r2 = GetRates1.getRates("Dollar", exchange.from.currency);
                        var minAmountRated = (minAmount * r2[0] / r2[1]).toFixed(0);
                        // alert("test for minAmountRated: " + minAmountRated);

                        path += subPath + ", amount: " + minAmountRated + ", fee: " + fee + "%\n";

                        sum += minAmount;
                        maxFee += (minAmount * fee) / Math.floor(amount);
                        // alert("sum is : " + sum + "min amount is :" +  amount);

                    }

                    exchange.path = path;
                    // alert("path for exchange number" + exchange.ID1 + " is : \n" + path);
                    return Math.max(maxFee, 0);

                };


                var refreshProviders = function () {


                    // for (let h = 0; h < $scope.currencies; h++) {
                    //     $scope.availableCredits[h] = 0;
                    // }
                    var i;
                    for (i = 0; i < $scope.channel.getAgreements().length; i++) {


                        var r = GetRates1.getRates($scope.channel.getAgreements()[i].importer.currency, "Dollar");
                        var r2 = GetRates1.getRates($scope.channel.getAgreements()[i].exporter.currency, "Dollar");

                        var temp = ($scope.channel.getAgreements()[i].importer.creditBefore * (r[0] / r[1]));
                        var temp2 = ($scope.channel.getAgreements()[i].exporter.creditBefore * (r2[0] / r2[1]));


                        $scope.channel.getAgreements()[i].importer.tempCreditAfter = temp;
                        $scope.channel.getAgreements()[i].exporter.tempCreditAfter = temp2;

                        $scope.channel.getAgreements()[i].importer.creditAfter = "";
                        $scope.channel.getAgreements()[i].exporter.creditAfter = "";

                        // $scope.channel.getAgreements()[i].importer.logs1 = [];
                        // $scope.channel.getAgreements()[i].exporter.logs1 = [];
                    }

                };

                $scope.removeProvider = function (a) {

                    for (let i = 0; i < $scope.channel.getAgreements().length; i++) {
                        if ($scope.channel.getAgreements()[i].importer.name === a.importer.name && $scope.channel.getAgreements()[i].exporter.name === a.exporter.name) {
                            $scope.channel.getAgreements().splice(i, 1);
                            break;
                        }
                    }
                };

                $scope.removeCustomer = function (c) {

                    // alert("entered here");
                    // alert("length is : " + $scope.channel.getCustomers().length);

                    for (let i = 0; i < $scope.channel.getCustomers().length; i++) {

                        // alert("entered for ");
                        // alert("customer name is : " + $scope.channel.getCustomers()[i].name);
                        // alert("customer name2 is : " + c.name);
                        if ($scope.channel.getCustomers()[i].name === c.name) {
                            // alert("entered if ");


                            $scope.channel.getCustomers().splice(i, 1);
                            break;
                        }
                    }
                };

                var getExchangeFee = function (e) {

                    // alert("in the function getExchangeFee");
                    refreshProviders();

                    copyAllCoordinators = $scope.allCoordinators.slice();
                    copyAgreements = $scope.channel.getAgreements().slice();

                    graph.buildGraph(copyAllCoordinators, copyAgreements);


                    // alert("exchange length is : " + $scope.channel.getExchanges().length);

                    var i;
                    for (i = 0; i < $scope.channel.getExchanges().length; i++) {
                        // alert("entered for");
                        if ($scope.channel.getExchanges()[i].isSubmitted || $scope.channel.getExchanges()[i] === e) {
                            // alert("entered if");

                            $scope.channel.getExchanges()[i].maxFee = getMaxFee($scope.channel.getExchanges()[i]);
                            $scope.channel.getExchanges()[i].feeAmount = (($scope.channel.getExchanges()[i].amount1 * $scope.channel.getExchanges()[i].maxFee) * 0.01);

                        }


                    }

                };

                var getExchangeFee2 = function () {

                    refreshProviders();

                    copyAllCoordinators = $scope.allCoordinators.slice();
                    copyAgreements = $scope.channel.getAgreements().slice();

                    graph.buildGraph(copyAllCoordinators, copyAgreements);


                    // alert("exchange length is : " + $scope.channel.getExchanges().length);

                    var i;
                    for (i = 0; i < $scope.channel.getExchanges().length; i++) {

                        if ($scope.channel.getExchanges()[i].isSubmitted) {

                            $scope.channel.getExchanges()[i].maxFee = getMaxFee($scope.channel.getExchanges()[i]);
                            $scope.channel.getExchanges()[i].feeAmount = (($scope.channel.getExchanges()[i].amount1 * $scope.channel.getExchanges()[i].maxFee) * 0.01);

                        }
                    }
                };

                $scope.submitExchange = function (e) {


                    if (parseInt(e.amount1) + parseInt(e.feeAmount) > parseInt(e.from.balanceBefore)) {
                        alert("Submit failed, not enough account balance by : " + e.from.name);

                    } else {

                        document.getElementById(e.boxSubmitBtnId).innerHTML = "done";
                        disableAgreements();
                        disableExchange(e);
                        e.isSubmitted = true;
                        e.turn = page20.turn;
                        page20.turn++;

                        var tempIdBefore = e.ID1;
                        e.ID1 = e.turn + 1;


                        for (let i = 0; i < $scope.channel.getExchanges().length; i++) {

                            if (e.ID1 > tempIdBefore) {


                                if ($scope.channel.getExchanges()[i].ID1 <= e.ID1 && $scope.channel.getExchanges()[i].ID1 >= tempIdBefore && $scope.channel.getExchanges()[i] !== e) {
                                    $scope.channel.getExchanges()[i].ID1--;
                                }

                            } else if (e.ID1 < tempIdBefore) {

                                if ($scope.channel.getExchanges()[i].ID1 >= e.ID1 && $scope.channel.getExchanges()[i].ID1 <= tempIdBefore && $scope.channel.getExchanges()[i] !== e)
                                    $scope.channel.getExchanges()[i].ID1++;

                            }
                        }

                        $scope.channel.getExchanges().sort(function (a, b) {
                            return a.ID1 - b.ID1;
                        });

                    }

                    for (let i = 0; i < $scope.channel.getExchanges().length; i++) {
                        if (!$scope.channel.getExchanges()[i].isSubmitted) {
                            getExchangeFee($scope.channel.getExchanges()[i]);
                        }

                    }


                };


                // $scope.refreshProviders = function () {
                //
                //     refreshProviders();
                //
                // };

                $scope.resetPage = function () {

                    $scope.channel.resetChannel();

                    document.getElementById("addExchangeBtn").disable = false;
                    document.getElementById("addCustomerBtn").disable = false;

                    page20.providersCount = 0;
                    page20.exchangesIndexCount = 0;
                    page20.customersCount = 0;
                    page20.turn = 0;

                    var tempBoxNameId = customerNameBaseId + $scope.customersCount;
                    var tempBoxCurrencyId = customerCoordinatorBaseId + $scope.customersCount;
                    var tempBoxCoordinatorId = customerAccountBalanceBeforeBaseId + $scope.customersCount;
                    var tempBoxBalanceBeforeId = customerAccountBalanceAfterBaseId + $scope.customersCount;
                    var tempBoxBalanceAfterId = customerCurrencyBaseId + $scope.customersCount;


                    var customer = {
                        name: " ",
                        currency: "",
                        coordinator: " ",
                        balanceBefore: " ",
                        balanceAfter: "",
                        tempBalanceAfter: "",
                        logs1: [],
                        boxNameId: tempBoxNameId,
                        boxCurrencyID: tempBoxCurrencyId,
                        boxCoordinatorId: tempBoxCoordinatorId,
                        boxBalanceBeforeId: tempBoxBalanceBeforeId,
                        boxBalanceAfterId: tempBoxBalanceAfterId

                    };

                    $scope.channel.addCustomer(customer);

                    var tempImporterBoxNameId = importerNameBaseId + $scope.providersCount;
                    var tempImporterBoxCoordinatorId = importerCoordinatorBaseId + $scope.providersCount;
                    var tempImporterBoxCurrencyId = importerCurrencyBaseId + $scope.providersCount;
                    var tempImporterBoxCreditBeforeId = importerCreditBeforeBaseId + $scope.providersCount;
                    var tempImporterBoxCreditAfterId = importerCreditAfterBaseId + $scope.providersCount;
                    var tempImporterBoxFeeId = importerFeeBaseId + $scope.providersCount;
                    var tempImporterBoxDueToId = importerDueToBaseId + $scope.providersCount;

                    var tempExporterBoxNameId = exporterNameBaseId + $scope.providersCount;
                    var tempExporterBoxCoordinatorId = exporterCoordinatorBaseId + $scope.providersCount;
                    var tempExporterBoxCurrencyId = exporterCurrencyBaseId + $scope.providersCount;
                    var tempExporterBoxCreditBeforeId = exporterCreditBeforeBaseId + $scope.providersCount;
                    var tempExporterBoxCreditAfterId = exporterCreditAfterBaseId + $scope.providersCount;
                    var tempExporterBoxFeeId = exporterFeeBaseId + $scope.providersCount;
                    var tempExporterBoxDueToId = exporterDueToBaseId + $scope.providersCount;

                    var importer = {
                        name: " ",
                        currency: " ",
                        coordinator: " ",
                        fee: "",
                        creditBefore: "",
                        dueTo: "",
                        creditAfter: "",
                        tempCreditAfter: "",
                        boxNameId: tempImporterBoxNameId,
                        boxCoordinatorId: tempImporterBoxCoordinatorId,
                        boxCurrencyId: tempImporterBoxCurrencyId,
                        boxCreditBeforeId: tempImporterBoxCreditBeforeId,
                        boxCreditAfterId: tempImporterBoxCreditAfterId,
                        boxFeeId: tempImporterBoxFeeId,
                        boxDueToId: tempImporterBoxDueToId
                    };
                    var exporter = {
                        name: " ",
                        currency: " ",
                        coordinator: " ",
                        fee: "",
                        creditBefore: "",
                        dueTo: "",
                        creditAfter: "",
                        tempCreditAfter: "",
                        boxNameId: tempExporterBoxNameId,
                        boxCoordinatorId: tempExporterBoxCoordinatorId,
                        boxCurrencyId: tempExporterBoxCurrencyId,
                        boxCreditBeforeId: tempExporterBoxCreditBeforeId,
                        boxCreditAfterId: tempExporterBoxCreditAfterId,
                        boxFeeId: tempExporterBoxFeeId,
                        boxDueToId: tempExporterBoxDueToId
                    };

                    var agreement = {importer: importer, exporter: exporter};
                    $scope.channel.addAgreement(agreement);

                    var tempBoxIdId = exchangeIdBaseId + page20.exchangesCount;
                    var tempBoxFromId = exchangeFromBaseId + page20.exchangesCount;
                    var tempBoxToId = exchangeToBaseId + page20.exchangesCount;
                    var tempBoxAmount1Id = exchangeAmount1BaseId + page20.exchangesCount;
                    var tempBoxAmount2Id = exchangeAmount2BaseId + page20.exchangesCount;
                    var tempBoxMaxFeeId = exchangeMaxFeeBaseId + page20.exchangesCount;
                    var tempBoxFeeAmountId = exchangeFeeAmountBaseId + page20.exchangesCount;
                    var tempBoxPathId = exchangePathBaseId + page20.exchangesCount;

                    var exchange = {
                        ID1: "",
                        from: " ",
                        to1: "",
                        amount1: "",
                        amount2: "",
                        feeAmount: "",
                        maxFee: "",
                        path: "",
                        turn: "",
                        isSubmitted: false,
                        boxIdId: tempBoxIdId,
                        boxFromId: tempBoxFromId,
                        boxToId: tempBoxToId,
                        boxAmount1Id: tempBoxAmount1Id,
                        boxAmount2Id: tempBoxAmount2Id,
                        boxMaxFeeId: tempBoxMaxFeeId,
                        boxFeeAmountId: tempBoxFeeAmountId,
                        boxPathId: tempBoxPathId,

                    };

                    $scope.channel.addExchange(exchange);
                    $scope.channel.getExchanges()[0].ID1 = "1";

                };


                $scope.removeExchange = function (e) {


                    page20.turn--;
                    page20.exchangesCount--;

                    var tempID = e.ID1;

                    for (let i = 0; i < $scope.channel.getExchanges().length; i++) {

                        if ($scope.channel.getExchanges()[i].ID1 === tempID) {
                            $scope.channel.getExchanges().splice(i, 1);
                        }
                    }

                    for (let i = parseInt(tempID) - 1; i < $scope.channel.getExchanges().length; i++) {
                        // alert("IDs are" + $scope.channel.getExchanges()[i].ID1);

                        $scope.channel.getExchanges()[i].ID1--;

                    }
                };


                $scope.exchange = function () {

                    disableExchanges();
                    disableCustomers();
                    disableAgreements();
                    getExchangeFee2();

                    var i;
                    for (i = 0; i < $scope.channel.getExchanges().length; i++) {

                        if ($scope.channel.getExchanges()[i].isSubmitted) {

                            // alert("exchange from is : " + $scope.channel.getExchanges()[i].from.name + ", exchange to is : " + $scope.channel.getExchanges()[i].to1.name);

                            var j;

                            for (j = 0; j < $scope.channel.getCustomers().length; j++) {
                                if ($scope.channel.getCustomers()[j].name === $scope.channel.getExchanges()[i].from.name) {
                                    // alert("to index is " + j);

                                    $scope.channel.getCustomers()[j].tempBalanceAfter = parseInt($scope.channel.getCustomers()[j].tempBalanceAfter) - parseInt($scope.channel.getExchanges()[i].amount1) - parseInt($scope.channel.getExchanges()[i].feeAmount);
                                    $scope.channel.getCustomers()[j].balanceAfter = $scope.channel.getCustomers()[j].tempBalanceAfter;

                                    // alert("tempBalanceAfter is " + $scope.channel.getCustomers()[j].tempBalanceAfter);
                                    // alert("balanceAfter is " + $scope.channel.getCustomers()[j].balanceAfter);


                                    var log = {
                                        ID1: $scope.channel.getExchanges()[i].ID1,
                                        to1: $scope.channel.getExchanges()[i].to1.name,
                                        amount: (-1) * $scope.channel.getExchanges()[i].amount1
                                    };
                                    $scope.channel.getCustomers()[j].logs1.push(log);
                                    break;
                                }

                            }


                            var l;

                            for (l = 0; l < $scope.channel.getCustomers().length; l++) {
                                if ($scope.channel.getCustomers()[l].name === $scope.channel.getExchanges()[i].to1.name) {

                                    $scope.channel.getCustomers()[l].tempBalanceAfter = parseInt($scope.channel.getCustomers()[l].tempBalanceAfter) + parseInt($scope.channel.getExchanges()[i].amount2);
                                    $scope.channel.getCustomers()[l].balanceAfter = $scope.channel.getCustomers()[l].tempBalanceAfter;
                                    // alert($scope.customerAccountBalanceAfterVars[l]);

                                    var log = {
                                        ID1: $scope.channel.getExchanges()[i].ID1,
                                        from: $scope.channel.getExchanges()[i].from.name,
                                        amount: $scope.channel.getExchanges()[i].amount2
                                    };
                                    $scope.channel.getCustomers()[l].logs1.push(log);
                                    break;
                                }

                            }

                        }
                    }

                    // alert("agreements length is : " + $scope.channel.getAgreements().length);


                    for (let o = 0; o < $scope.channel.getAgreements().length; o++) {

                        var r = GetRates1.getRates("Dollar", $scope.channel.getAgreements()[o].importer.currency);
                        var r2 = GetRates1.getRates("Dollar", $scope.channel.getAgreements()[o].exporter.currency);

                        // alert("after" + $scope.channel.getAgreements()[o].importer.name + ", " + $scope.channel.getAgreements()[o].importer.tempCreditAfter);
                        // alert("after" + $scope.channel.getAgreements()[o].exporter.name + ", " + $scope.channel.getAgreements()[o].exporter.tempCreditAfter);


                        var temp = ($scope.channel.getAgreements()[o].importer.tempCreditAfter * (r[0] / r[1]));
                        var temp2 = ($scope.channel.getAgreements()[o].exporter.tempCreditAfter * (r2[0] / r2[1]));



                        $scope.channel.getAgreements()[o].importer.creditAfter = temp;
                        $scope.channel.getAgreements()[o].exporter.creditAfter = temp2;

                    }


                };


                $scope.next = function () {
                    for (var i = 0; i < $scope.channel.getAgreements().length; i++) {
                        $scope.channel.addAgreement($scope.channel.getAgreements()[i]);
                    }

                    for (var j = 0; j < $scope.channel.getCustomers().length; j++) {
                        $scope.channel.addCustomers($scope.channel.getCustomers()[j]);
                    }

                };

                // alert("received here");
                page20.visit();
                // alert("is visited is : " + page20.isVisited());


            }
        })

        .state('getstarted21', {
            url: '/getstarted21',
            templateUrl: 'view3/subviews/21.html',
            controller: function ($scope) {
                // $scope.count = 0;


            }
        });
});

myApp

    .controller('column1Controller', function ($scope) {

        $scope.message = 'column1';

        $scope.galaxies = [
            {
                name: 'Milkyway Galaxy',
                distance: '27,000'
            },
            {
                name: 'Andromeda Galaxy',
                distance: '2,560,000'
            },
            {
                name: 'Sagittarius Dwarf',
                distance: '3.400,000'
            }
        ];
    })

    // let's define the column1 controller that we call up in the about state
    .controller('bottom-rowController', function ($scope) {

        $scope.message = 'bottom row';
        $scope.variables = [];
    });


myApp
    .factory('Exchange1', function () {
        return {currency1: '', currency2: '', amount1: '', amount2: ''};
    })

    .factory('Exchange2', function () {
        return {currency1: '', currency2: '', amount1: '', amount2: ''};
    })

    .factory('Exchange3', function () {
        return {currency1: '', currency2: '', amount1: '', amount2: ''};
    })

    .factory('Currencies1', function () {
        return {'Russia': 'Ruble', 'Iran': 'Rial', 'America': 'Dollar', 'China': 'Yuan'};
    })
    .factory('Channel1', function () {

        var currencies = [];
        var agreements = [];
        var coordinators1 = [];
        var coordinators2 = [];
        var customers = [];

        return {
            getCurrencies: function () {
                return currencies;
            },
            getRelations: function () {
                return agreements;
            },

            getCoordinators1: function () {
                return coordinators1;
            },

            getCoordinators2: function () {
                return coordinators2;
            },

            getCustomers: function () {
                return customers;
            },

            addRelation: function (p) {
                agreements.push(p);
            },


            addCoordinator1: function (c) {
                coordinators1.push(c);
            },


            addCoordinator2: function (c) {
                coordinators2.push(c);
            },

            setCurrencies: function (cs) {
                currencies = cs;

            },

            addCurrency: function (c) {
                currencies.push(c);
            },

            addCustomers: function (c) {
                customers.push(c);
            },

        };
    })
    .factory('Channel2', function () {

        var currencies = [];
        var agreements = [];
        var coordinators = [];
        var customers = [];
        var exchanges = [];

        return {

            resetChannel: function () {

                exchanges = [];
                agreements = [];
                customers = [];

            },

            buildCoordinators: function () {
                var i = 0;
                for (i = 0; i < currencies.length; i++) {
                    coordinators[i] = [];
                }
            },

            getCurrencies: function () {
                return currencies;
            },

            getAgreements: function () {
                return agreements;
            },

            getCustomers: function () {
                return customers;
            },

            getCoordinators: function () {
                return coordinators;
            },

            getExchanges: function () {
                return exchanges;
            },

            addAgreement: function (p) {
                agreements.push(p);
            },

            addExchange: function (e) {
                exchanges.push(e);
            },

            addCoordinator: function (c, index) {
                coordinators[index].push(c);
            },

            addCustomer: function (c) {
                customers.push(c);

            },

            setCurrencies: function (cs) {
                currencies = cs;
            },

            addCustomers: function (c) {
                customers.push(c);
            },


        };

    })

    .factory('Graph', function () {

        var nodes = [];
        var edges = [];

        return {

            resetGraph: function () {
                nodes = [];
                edges = [];
            },

            buildGraph: function (allCoordinators, agreements) {

                this.resetGraph();

                for (let i = 0; i < allCoordinators.length; i++) {
                    this.addNode(allCoordinators[i], null, Number.MAX_SAFE_INTEGER);
                }

                // alert("agreement length is : " + agreements.length);

                for (let i = 0; i < agreements.length; i++) {


                    var temp = parseInt(agreements[i].importer.tempCreditAfter);
                    var temp2 = 0;

                    this.addEdge(this.getNode(agreements[i].exporter.coordinator), this.getNode(agreements[i].importer.coordinator), agreements[i].exporter, agreements[i].importer, temp, agreements[i].importer.fee);
                    // this.addEdge(this.getNode(agreements[i].importer.coordinator), this.getNode(agreements[i].exporter.coordinator), agreements[i].importer, agreements[i].exporter, temp2, agreements[i].importer.fee);
                }

            },

            getNodes: function () {
                return nodes;
            },

            getEdges: function () {
                return edges;

            },

            addNode: function (coordinator, parent, distance) {

                nodes.push({coordinator: coordinator, parent: parent, distance: distance});

            },

            getNode: function (coordinator) {

                var i;
                for (i = 0; i < nodes.length; i++) {

                    if (nodes[i].coordinator === coordinator) {
                        return nodes[i];
                    }
                }
            },

            addEdge: function (source, destination, agreementSide1, agreementSide2, amount, fee) {

                // alert("Entered addEdge");

                for (let i = 0; i < edges.length; i++) {
                    if (edges[i].source === source && edges[i].destination === destination) {


                        this.addEdgeWeight(i, agreementSide1, agreementSide2, amount, fee);


                        return;
                    }
                }

                var edge = {
                    source: source,
                    destination: destination,
                    weights: [{
                        agreementSide1: agreementSide1,
                        agreementSide2: agreementSide2,
                        amount: amount,
                        fee: fee
                    }]
                };

                // alert("add edge : " + "source: " + edge.source.coordinator.name + " destination : " + edge.destination.coordinator.name + "amount is :" + amount + "fee is : "  + fee);
                edges.push(edge);
            },


            addEdgeWeight: function (index, agreementSide1, agreementSide2, amount, fee) {

                // alert("Entered addEdgeWeight");
                // const insertionSort = function (nums) {
                //     for (let i = 1; i < nums.length; i++) {
                //         let j = i;
                //         let temp0 = nums[i];
                //         let tmp = temp0.fee;
                //         while (j > 0 && nums[j - 1].fee < tmp) {
                //             nums[j] = nums[j - 1];
                //             j--;
                //         }
                //         nums[j] = temp0;
                //     }
                //     return nums;
                // };

                edges[index].weights.push({
                    agreementSide1: agreementSide1,
                    agreementSide2: agreementSide2,
                    amount: amount,
                    fee: fee
                });

                // alert("add edge weight : " + "agreementside1: " + edges[index].weights[edges[index].weights.length - 1].agreementSide1.name + "agreementside2: " + edges[index].weights[edges[index].weights.length - 1].agreementSide2.name + "amount is : " + amount+ "fee is : " + fee);


                var length = edges[index].weights.length - 1;
                var min = Number.MAX_SAFE_INTEGER;
                var minIndex = 0;

                // alert("length is : " + edges[index].weights.length);

                for (let i = 0; i < edges[index].weights.length; i++) {
                    if (min > parseInt(edges[index].weights[i].fee)) {
                        min = parseInt(edges[index].weights[i].fee);
                        minIndex = i;
                    }
                    // alert("min is : " + min + ", minIndex is : " + minIndex);

                }
                var temp = edges[index].weights[minIndex];
                edges[index].weights[minIndex] = edges[index].weights[length];
                edges[index].weights[length] = temp;

                for (let k = 0; k < edges[index].weights.length; k++) {

                    // alert("weights after add are : " + edges[index].weights[k].fee);

                }

                //edges[index].weights = insertionSort(edges[index].weights);

                // for (let i = 0; i < edges[index].weights.length; i++) {
                //
                //     alert("weights are : " + edges[index].weights[i].fee);
                //
                // }

            },

            getRates: function (c1, c2) {


                var r1 = 0;
                var r2 = 0;

                switch (c1) {
                    case "Rial":
                        r1 = 1;
                        break;

                    case "Ruble":
                        r1 = 667;
                        break;

                    case "Dollar":
                        r1 = 42000;
                        break;

                    case "Yuan":
                        r1 = 6122;
                        break;
                }

                switch (c2) {
                    case "Rial":
                        r2 = 1;
                        break;
                    case "Ruble":
                        r2 = 667;
                        break;

                    case "Dollar":
                        r2 = 42000;
                        break;

                    case "Yuan":
                        r2 = 6122;
                        break;

                }


                return [r1, r2];
            },

            removeEdgeWeight: function (source, destination, amount) {


                // alert("min amount is : " + amount);
                for (let i = 0; i < edges.length; i++) {

                    if (edges[i].source === source && edges[i].destination === destination) {

                        // alert("amount to remove is : " + amount);
                        // alert("amount before for edge between " + source.coordinator.name + ", " + destination.coordinator.name + "is : " + edges[i].weights[edges[i].weights.length - 1].amount);
                        edges[i].weights[edges[i].weights.length - 1].amount = parseInt(edges[i].weights[edges[i].weights.length - 1].amount) - parseInt(amount);
                        // alert("amount after for edge between " + source.coordinator.name + ", " + destination.coordinator.name + "is : " + edges[i].weights[edges[i].weights.length - 1].amount);


                        // var r = this.getRates("Dollar", edges[i].weights[edges[i].weights.length - 1].agreementSide1.currency);
                        // var r2 = this.getRates("Dollar", edges[i].weights[edges[i].weights.length - 1].agreementSide2.currency);


                        var temp = parseInt(amount) + amount * Math.max(edges[i].weights[edges[i].weights.length - 1].fee, 0) * 0.01;
                        var temp2 = parseInt(amount);

                        // alert("temp2 is : " + temp2);

                        // alert("before" + edges[i].weights[edges[i].weights.length - 1].agreementSide1.name + ", " + edges[i].weights[edges[i].weights.length - 1].agreementSide1.tempCreditAfter);
                        // alert("before" + edges[i].weights[edges[i].weights.length - 1].agreementSide2.name + ", " + edges[i].weights[edges[i].weights.length - 1].agreementSide2.tempCreditAfter);

                        edges[i].weights[edges[i].weights.length - 1].agreementSide1.tempCreditAfter = parseInt(edges[i].weights[edges[i].weights.length - 1].agreementSide1.tempCreditAfter) + temp2;
                        edges[i].weights[edges[i].weights.length - 1].agreementSide2.tempCreditAfter = parseInt(edges[i].weights[edges[i].weights.length - 1].agreementSide2.tempCreditAfter) - temp2;


                        // alert("after" + edges[i].weights[edges[i].weights.length - 1].agreementSide1.name + ", " + edges[i].weights[edges[i].weights.length - 1].agreementSide1.tempCreditAfter);
                        // alert("after" + edges[i].weights[edges[i].weights.length - 1].agreementSide2.name + ", " + edges[i].weights[edges[i].weights.length - 1].agreementSide2.tempCreditAfter);


                        // alert("weights after remove edge apply are : ");
                        // for (let k = 0; k < edges[i].weights.length; k++) {
                        //
                        //     alert(edges[i].weights[k].fee);
                        // }

                        if (edges[i].weights[edges[i].weights.length - 1].amount === 0) {

                            // alert("entered if ");
                            // alert("the edge between " + edges[i].source.coordinator.name + "and " + edges[i].destination.coordinator.name + "is removed");

                            edges[i].weights.pop();

                            if (edges[i].weights.length === 0) {
                                edges.splice(i, 1);

                            } else {

                                var length = edges[i].weights.length - 1;
                                var min = Number.MAX_SAFE_INTEGER;
                                var minIndex = 0;
                                for (let j = 0; j < edges[i].weights.length; j++) {
                                    if (parseInt(edges[i].weights[j].fee) < min) {
                                        min = parseInt(edges[i].weights[j].fee);
                                        minIndex = j;
                                    }

                                }
                                var temp4 = edges[i].weights[minIndex];
                                edges[i].weights[minIndex] = edges[i].weights[length];
                                edges[i].weights[length] = temp4;


                            }


                            // alert("poped with value " + edges[i].weights[edges[i].weights.length - 1].fee);


                        }
                        break;
                    }
                }
            },

            getEdge: function (source, destination) {
                for (let i = 0; i < edges.length; i++) {
                    if (edges[i].source === source && edges[i].destination === destination) {

                        return edges[i];
                    }
                }
            }

        };
    })

    .factory('Edge', function () {

        return {};
    })

    .factory('Importers1', function () {
        return {
            'Russia': ['RuI1', 'RuI2', 'RuI3'],
            'Iran': ['IrI1', 'IrI2', 'IrI3'],
            'America': ['UsI1', 'UsI2', 'UsI3'],
            'China': ['CnI1', 'CnI2', 'CnI3']
        };
    })

    .factory('Exporters1', function () {
        return {
            'Russia': ['RuE1', 'RuE2', 'RuE3'],
            'Iran': ['IrE1', 'IrE2', 'IrE3'],
            'America': ['UsE1', 'UsE2', 'UsE3'],
            'China': ['CnE1', 'CnE2', 'CnE3']
        };
    })
    .factory('Rates1', function () {
        return {
            'Rial': 1,
            'Dollar': 42000,
            'Yuan': 6122,
            'Ruble': 667
        };
    })

    .factory('GetRates1', function () {
        return {
            getRates: function (c1, c2) {


                var r1 = 0;
                var r2 = 0;

                switch (c1) {
                    case "Rial":
                        r1 = 1;
                        break;

                    case "Ruble":
                        r1 = 667;
                        break;

                    case "Dollar":
                        r1 = 42000;
                        break;

                    case "Yuan":
                        r1 = 6122;
                        break;
                }

                switch (c2) {
                    case "Rial":
                        r2 = 1;
                        break;
                    case "Ruble":
                        r2 = 667;
                        break;

                    case "Dollar":
                        r2 = 42000;
                        break;

                    case "Yuan":
                        r2 = 6122;
                        break;

                }


                return [r1, r2];
            }
        };
    })

    .factory('counter', function () {

        var customerCounter = 0;

        return {
            getCustomerCounter: function () {
                return customerCounter;
            },

            increamentCounter: function () {
                customerCounter++;
            }
        };

    })


    .factory('Page18', function () {
        var isVisited = false;

        return {

            visit: function () {
                isVisited = true;
            },

            isVisited: function () {
                return isVisited;
            }

        };
    })

    .factory('Page19', function () {

        var coordinatorsCount = [];
        var isVisited = false;

        return {

            visit: function () {
                isVisited = true;
            },

            isVisited: function () {
                return isVisited;
            }

        };

    })


    .factory('Page20', function () {
        var isVisited = false;

        var turn = 0;
        var providersCount = 0;
        var customersCount = 0;
        var exchangesCount = 0;

        var agreementsBox = [];
        var exchangesBox = [];
        var customersBox = [];


        return {

            visit: function () {
                isVisited = true;
            },

            isVisited: function () {
                return isVisited;
            },

            getAgreementsBox: function () {
                return agreementsBox;
            },

            getExchangesBox: function () {
                return exchangesBox;

            },

            getCustoemrBox: function () {
                return customersBox;
            },

            addAgreementBox: function (a) {
                agreementsBox.push(a);
            },


            addExchangeBox: function (e) {
                exchangesBox.push(e);
            },

            addCustomerBox: function (c) {
                customersBox.push(c);
            }

        };

    })


;


