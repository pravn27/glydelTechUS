
app.directive('autoComplete',function(){
	return {
		restrict :"A",
		transclude: true,
		link:function(scope,elem,attrs){
			console.log(elem)
			elem.autocomplete({
				source: function(req,resp){
					$.getJSON("/companies/all.json?search="+req.term,function(res){
						var data=[]
						$.each(res.data,function(i,d){
							data.push({"label":d.name,"value":d.name,"data":d})
						})
						resp(data);
					});
				},
				select:function(a,b){
					scope.vehicle.id=b["item"]["data"]["_id"]["$oid"]
				}
			})
		}
	}
})
app.directive('datepicker', function() {
    return {
        restrict: 'A',
        require : 'ngModel',
        link : function (scope, element, attrs, ngModelCtrl) {
            $(function(){
                element.datepicker({
                    dateFormat:'mm/dd/yy',
                    onSelect:function (date) {
                        scope.$apply(function () {
                            ngModelCtrl.$setViewValue(date);
                        });
                    }
                });
            });
        }
    }
});
app.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                        scope.$apply(function(){
                                scope.$eval(attrs.ngEnter);
                        });
                        
                        event.preventDefault();
                }
            });
        };
});