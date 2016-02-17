'use strict';

app.controller('SignupCtrl', function ($scope, Auth, $state) {
	$scope.signupUser = function (credentials) {
		$state.go('login');
		// Auth.signup(credentials)
		// .then(function (loggedinUser) {
		// 	$state.go('user', {id: loggedinUser._id});
		// });
	};
});