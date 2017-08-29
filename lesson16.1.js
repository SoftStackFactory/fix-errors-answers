function myFunction() {
  var myObject = {
     objProperty: "some text",
     objMethod: function() {
		console.log(this.objProperty);
		}
     };
  myObject.objMethod();
} 
myFunction()