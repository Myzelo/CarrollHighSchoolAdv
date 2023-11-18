class Player{
    constructor(){
      this.name = null;
      this.gender = null;
      this.sport = null;
      this.difficulty_level = null;
    }

    update(){
      firebase.database().ref("playersInfo/student"+this.name).update({
        name: this.name,
        gender: this.gender,
        sport: this.sport,
        difficulty_level:this.difficulty_level
      })
    }
}