Preload = function(game){}


Preload.prototype = {
	preload:function(){
		this.firebaseConfig = {
			apiKey: "AIzaSyDX5FXvb14NFbB46wmy6DNagN69n0pYsp4",
			authDomain: "fireinferndmoviles.firebaseapp.com",
			databaseURL: "https://fireinferndmoviles-default-rtdb.firebaseio.com",
			projectId: "fireinferndmoviles",
			storageBucket: "fireinferndmoviles.appspot.com",
			messagingSenderId: "1039058036216",
			appId: "1:1039058036216:web:3848d9ea4c0391b247e20d"
		};
		firebase.initializeApp(this.firebaseConfig);

		this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.game.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;
		this.game.scale.scaleMode = Phaser.ScaleManager.RESIZE;

		this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.game.scale.pageAlignHorizontally = true;
		this.game.scale.pageAlignVertically = true;

		this.game.load.image("background","assets/images/background-texture.png");
		this.game.load.image("wall","assets/images/wall.png");
		this.game.load.spritesheet("player","assets/images/player.png",48,48,4);
	},
	create:function(){
		this.game.state.start("Game");
	}
}