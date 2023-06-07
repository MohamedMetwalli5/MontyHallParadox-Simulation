import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MontyHallParadox-Simulation';

  imagePath:Array<String> = ["../assets/Door.jpg","../assets/Door.jpg","../assets/Door.jpg"]
  userDoorChoice = 0
  revealedGoatDoor = 0
  carDoor = this.generateRandom()
  

  generateRandom(min = 1, max = 4) {
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor( rand * difference);
    rand = rand + min;
    return rand;
  }

  playAudio(audioPath:any){
    let audio = new Audio()
    audio.src = audioPath
    audio.load()
    audio.play()
  }

  chooseDoor(number:number){
    if(this.userDoorChoice == 0){
      this.userDoorChoice = number

      this.imagePath[this.userDoorChoice-1] = "../assets/ChosenDoor.png"
      if(this.userDoorChoice == 1){
        if(this.carDoor == 2){
          this.revealedGoatDoor = 3
        }else if(this.carDoor == 3){
          this.revealedGoatDoor = 2
        }else{
          this.revealedGoatDoor = Math.random() <= 0.5 ? 2 : 3
        }
      }else if(this.userDoorChoice == 2){
        if(this.carDoor == 1){
          this.revealedGoatDoor = 3
        }else if(this.carDoor == 3){
          this.revealedGoatDoor = 1
        }else{
          this.revealedGoatDoor = Math.random() <= 0.5 ? 1 : 3
        }
      }else if(this.userDoorChoice == 3){
        if(this.carDoor == 1){
          this.revealedGoatDoor = 2
        }else if(this.carDoor == 2){
          this.revealedGoatDoor = 1
        }else{
          this.revealedGoatDoor = Math.random() <= 0.5 ? 1 : 2
        }
      }
      this.showGoat(this.revealedGoatDoor)
      alert("You can keep your choice or change it.")
    }
  }

  changeChoice(){
    if(this.userDoorChoice == 0){
      alert("Choose a door first!")
    }else{
      if(this.userDoorChoice == 1){
        this.imagePath[this.userDoorChoice-1] = "../assets/Door.jpg"
        if(this.revealedGoatDoor == 2){
          this.userDoorChoice = 3
        }else if(this.revealedGoatDoor == 3){
          this.userDoorChoice = 2
        }
      }else if(this.userDoorChoice == 2){
        this.imagePath[this.userDoorChoice-1] = "../assets/Door.jpg"
        if(this.revealedGoatDoor == 1){
          this.userDoorChoice = 3
        }else if(this.revealedGoatDoor == 3){
          this.userDoorChoice = 1
        }
      }else if(this.userDoorChoice == 3){
        this.imagePath[this.userDoorChoice-1] = "../assets/Door.jpg"
        if(this.revealedGoatDoor == 1){
          this.userDoorChoice = 2
        }else if(this.revealedGoatDoor == 2){
          this.userDoorChoice = 1
        }
      }
      this.show()
    }

    
  }

  keepChoice(){
    this.show()
  }
  
  showGoat(goatDoorNumberToReveal:number){
    this.imagePath[goatDoorNumberToReveal-1] = "../assets/Goat.png"
  }

  show(){
    if(this.userDoorChoice == this.carDoor){
      this.imagePath[this.userDoorChoice-1] = "../assets/ChosenSportsCar.png"
      this.playAudio("../assets/CarSound.mp3")
    }else{
      this.imagePath[this.userDoorChoice-1] = "../assets/ChosenGoat.png"
      this.playAudio("../assets/GoatSound.mp3")
    }
  }

}