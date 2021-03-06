(function(){
    var app = angular.module("OOBReport",[ ]);

    app.controller('PersonController', ['$scope', function($scope){
        $scope.addPersonInfo = function(person){
            Person.push(person);
            this.person = {};
        };

        $scope.Person = [
            {
                "firstName": "",
                "lastName": "",
                "contactNumber": "",
                "purposeOfTrip": "",
                "filerSTS": "",
                "groupSTS": "",
                "locationContact": [
                    {
                        "locConFirNm": "",
                        "locConLasNm": "",
                        "locConContNum": ""
                    }
                ],
                "fellowTravelers": [
                    {
                        "firstName": "",
                        "lastName": "",
                        "contactNumber": ""
                    }
                ],
                "elevatedRisk": [
                    {
                        "elevRisk": false,
                        "elevRiskContFName": "",
                        "elevRiskContLName": "",
                        "elevRiskContNum": "",
                        "elevRiskContFrm": ""
                    }
                ]
            }
        ];
    }]);

	app.controller('TransportationController', ['$scope', function($scope) {

        $scope.addTransInfo = function (transport) {
            Transport.push(transport);
            this.transport = {};
        };

        $scope.Transport = [
            {
                "departureDay": "",
                "legDestination": "",
                "finalDest": false,
                "type": "",
                "vehicle": [
                    {
                        "type": "",
                        "rental": [
                            {
                                "company": "",
                                "pickupDate": "",
                                "dropoffDate": "",
                                "desc": ""
                            }
                        ],
                        "pub": [
                            {
                                "desc": ""
                            }
                        ],
                        "priv": [
                            {
                                "desc": ""
                            }
                        ]
                    }
                ],
                "plane": [
                    {
                        "type": "",
                        "commercial": [
                            {
                                "flightNum": "",
                                "carrier": "",
                                "departApt": "",
                                "departTime": "",
                                "arrivalApt": "",
                                "arrivalTime": ""
                            }
                        ],
                        "priv": [
                            {
                                "desc": ""
                            }
                        ]
                    }
                ],
                "train": [
                    {
                        "desc": ""
                    }
                ],
                "other": [
                    {
                        "desc": ""
                    }
                ]
            }
        ];
    }]);

    app.controller('LodgingController', ['$scope', function($scope){
    	$scope.addLodgingInfo = function(lodging){
        	Lodging.push(lodging);
        	this.lodging = {};
        };

        $scope.Lodging = [
            {
                "type": "",
                "hotel": [
                    {
                        "name": "",
                        "address": "",
                        "phone": "",
                        "nights": ""
                    }
                ],
                "privateResidence": [
                    {
                        "first": "",
                        "last": "",
                        "address": "",
                        "phone": "",
                        "nights": ""
                    }
                ],
                "other": [
                    {
                        "desc": "",
                        "first": "",
                        "last": "",
                        "nights": ""
                    }
                ]
            }
        ]
	}]);
})();