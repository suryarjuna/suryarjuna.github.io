var app = angular.module("myApp", []);
//Main Controller
app.controller('MainController', ['$scope', function($scope) { 
    $scope.title = 'Best Buys*!'; 
    $scope.promo = 'The coolest offers for this month.';
    $scope.bookpromo = '*Books on sale!'
    $scope.books = [
        { 
        name:'Black Beauty - Anna Sewell', 
        price:299,  
    	cover: 'http://images5.fanpop.com/image/photos/27600000/Black-Beauty-book-cover-black-beauty-27648150-374-500.jpg'
  	},
        { 
        name:'Count of Monte Cristo - Alexandre Dumas', 
        price:1099, 
    	cover: 'https://images-na.ssl-images-amazon.com/images/I/419r-tzLhlL.jpg'
  	},
        { 
        name:'Game of Thrones - George R.R Martin', 
        price:2399,  
    	cover: 'http://i746.photobucket.com/albums/xx102/tiaexz/Game%20of%20Thrones/Game-of-Thrones.png'
    	
  	},
        { 
        name:'Black Swan - Nassim Nicholas Taleb', 
        price:499,  
    	cover: 'https://s-media-cache-ak0.pinimg.com/736x/41/ab/9c/41ab9c3208e76843e9016efec8836ce5.jpg'
    	
  	}
  ];
    $scope.electronicpromo='*Electronics on sale!'
    $scope.electronics = [
        {name:'Laptop',
         price:54000,
         cover:'http://ll-us-i5.wal.co/dfw/4ff9c6c9-a6e1/k2-_25db0548-49b8-418e-869e-82954f8c6dfb.v1.jpg-2b338092750c267cb08484b1fa9bc288d9521428-optim-500x500.jpg'
        }
]
}]);
