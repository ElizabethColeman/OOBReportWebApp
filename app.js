/**
 * Created by Beth on 2/12/2015.
 */

(function(){
    var app = angular.module('OOBReport',[ ]);

    app.controller('ElevatedRiskController', function () {
        if ($("elevated_risk_check").click())
            $("elevated_risk_situation").show();
    });
})();

