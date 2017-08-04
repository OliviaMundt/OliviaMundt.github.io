
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCgJ39Ow-k8HFJHO4AIAImLwP1KO5n9iOA",
    authDomain: "bakkommentarer.firebaseapp.com",
    databaseURL: "https://bakkommentarer.firebaseio.com",
    projectId: "bakkommentarer",
    storageBucket: "",
    messagingSenderId: "188379443454"
  };
  firebase.initializeApp(config);

  var app = angular.module("app", ["firebase"]);

  app.factory("kommentarer", function($firebaseArray) {
    var ref = firebase.database().ref().child("kommentarer").child(sida);
    return $firebaseArray(ref);
  }
);

// Här skriver vi kod för controllern
app.controller("KommentarCtrl", function($scope, kommentarer) {
	$scope.kommentarer = kommentarer;

	$scope.kommentar = {
		text: "",
		skribent: ""
      
	};

	$scope.addComment = function() {
    // Här lägger vi till vår kommentar ($scope.kommentar) till listan med kommentarer.
    // Det sparas automatiskt i Firebase-databasen.
    $scope.kommentarer.$add($scope.kommentar);

    // Tömmer texten i kommentarfältet
    $scope.kommentar = {
        text: "",
        skribent: ""
    };
  };
});