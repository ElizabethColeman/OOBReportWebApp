/**
 * Created by Beth on 4/9/2015.
 */

describe("OOB Report Unit Tests", function () {

    // Arrange
    beforeEach(angular.mock.module("OOBReport"));

    describe("submitting info from page to model", function(){

        it("adds a person to model", function(){
        // Act
        // Create a person
        // Test the method
        // Assert: See if the two are the same
            var mockScope = {};

            var person = {
                "firstName": "Jon",
                "lastName": "Moores",
                "contactNumber": "417-326-1234",
                "purposeOfTrip": "college outreach",
                "filerSTS": "Teach English",
                "groupSTS": "Teach English",
                "locationContact": [
                    {
                        "locConFirNm": "Elizabeth",
                        "locConLasNm": "Coleman",
                        "locConContNum": "605-842-1234"
                    }
                ],
                "fellowTravelers": [
                    {
                        "firstName": "Joe",
                        "lastName": "Miler",
                        "contactNumber": "417-844-1234"
                    }
                ],
                "elevatedRisk": [
                    {
                        "elevRisk": false,
                        "elevRiskContFName": "Julie",
                        "elevRiskContLName": "McGlaughlin",
                        "elevRiskContNum": "417-328-1234",
                        "elevRiskContFrm": "phone"
                    }
                ]
            }
        }); // it

        it("adds transportation to model", function(){
            var transport = {
                "departureDay": "05-08-15",
                "legDestination": "Beijing",
                "finalDest": false,
                "type": "place",
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
                                "desc": "Josh Oryall is flying us in his private plane."
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
        }); // it

        it("adds lodging to model", function(){
            var lodging = {
                "type": "hotel",
                "hotel": [
                    {
                        "name": "Mariot",
                        "address": "1234 Tenth Avenue North",
                        "phone": "1-800-294-2642",
                        "nights": "14"
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
        }); // it
    }); // describe
}); // describe
