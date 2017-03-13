
function Character (name, dm, hl) {
	if (dm > 17 || dm < 12) {alert('damage value is incorrect')}
	if (hl > 11 || hl < 8) {alert('health value is incorrect')}
	this.chName = name;
	this.hp = 45;
	this.dmFrom = dm - 2;
	this.dmTo = dm + 2;
	this.hlFrom = hl - 2;
	this.hlTo = hl + 2;
	this._moved = false;
};

Character.prototype._attack = function (enemy) {
		this.damage = Math.floor(Math.random() * (this.dmTo - this.dmFrom)) + this.dmFrom;
		console.log(this.damage);
		enemy.hp = enemy.hp - this.damage;
};
Character.prototype._heal = function () {
		this.hp = this.hp + Math.floor(Math.random() * (this.hlMax - this.hlMin)) + this.hlMin;
		console.log(this.hp);
		
};
Character.prototype._info = function () {
    console.log (this.chName, 'hp' + this.hp, 'damage' + this.dmFrom, '-', this.dmTo, 'healing' + this.hlFrom, '-', this.hlTo);
};




function Human () {
Human.prototype = Character.prototype;
Human.prototype.constructor = Human;
};

Human.prototype.heal = function () {
	Character.prototype.apply(this, arguments);
	var chance = Math.floor(Math.random() * 100);
	if (battleCnt % 3 === 0 && (chance < 40 && 70 > chance)){
			this.hp = (this.hp + Math.floor(Math.random() * (this.hlMax - this.hlMin)) + this.hlMin) * 2;
	}
	this.hp = (this.hp + Math.floor(Math.random() * (this.hlMax - this.hlMin)) + this.hlMin)
	this._moved = true;
};
function Orc () {
Orc.prototype = Character.prototype;
};

Orc.prototype.attack = function(enemy) {
	var chance = Math.floor(Math.random() * 100);
	Character.prototype.apply(this, arguments);
	if (turn % 3 === 0 && (chance < 40 && 70 > chance)){
			this.damage = (Math.floor(Math.random() * (this.dmTo - this.dmFrom)) + this.dmFrom) * 2;
		}
	this.damage = Math.floor(Math.random() * (this.dmTo - this.dmFrom)) + this.dmFrom;
	console.log(this.damage);
	enemy.hp = enemy.hp - this.damage;
	this._moved = true;
};

function battleController (char1, char2) {
		var pl1 = char1;
		var pl2 = char2;
		var turn = 0;
    while (!end_batlle){
        var action = prompt('a - attack, h - heal, i - info');
        if (action == 'a') {
            if (!pl1._moved){
            pl1._attack(pl2);
            pl1._moved = true;
            } else if (pl1._moved) {
                pl2._attack(pl1);
                pl2._moved = true;
            }
        } else if (action == 'h') {
            if (!pl1._moved){
                pl1._heal();
                pl1._moved = true;
            } else if (pl1._moved) {
                pl2._heal();
                pl2._moved = true;
            }
        } else if (action == 'i') {
            if (!pl1._moved){
                pl1._info();
            } else if (pl1._moved) {
                pl2._info();
            }
        }
		if (pl1._moved == pl2._moved) {
			pl1._moved = false;
			pl2._moved = false;
            turn++
		}
	}
	 console.log (turn);
}