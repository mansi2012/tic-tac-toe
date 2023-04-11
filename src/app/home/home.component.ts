import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  messageError: any;
  messageGame: any;
  user1: boolean = true;
  user2: boolean = false;
  lstFinal = [];
  lstUser1 = [];
  lstUser2 = [];
  crossElement1 = ['11', '22', '33']
  crossElement2 = ['13', '22', '31']
  constructor() { }

  ngOnInit(): void {
  }

  clicked(ev) {
    const currentcell = document.getElementById(ev.target.id);
    if (currentcell.innerText != '') {
      this.messageError = 'Can not clicked'
    }
    else {
      currentcell.innerHTML = this.user1 ? 'O' : 'X';
      this.lstFinal.push({ id: ev.target.id, user: this.user1 ? '1' : '2' })
      this.messageError = '';
    }
    if (this.user1) {
      this.lstUser1.push(ev.target.id)
      this.gameResult(this.lstUser1, 'user1')
    }
    if (this.user2) {
      this.lstUser2.push(ev.target.id)
      this.gameResult(this.lstUser2, 'user2')

    }
    if ((this.lstFinal.length + 1) % 2 == 0) {
      this.user1 = false;
      this.user2 = true;
    }
    else {
      this.user1 = true;
      this.user2 = false;
    }
  }

  gameResult(lst: any, user) {
    let gameresult1 = !this.crossElement1.some((string) => lst.indexOf(string) == -1);
    if (gameresult1) {
      this.messageGame = user + " Win !!! "
    }
    else {
      let gameresult2 = !this.crossElement2.some((string) => lst.indexOf(string) == -1);
      if (gameresult2) {
        this.messageGame = user + " Win !!! "
      }
      else {
        let lstcount1 = [];
        let lstcount2 = [];
        let lstcount3 = [];

        lst.forEach(obj => {

          obj = obj.toString()
          if (obj.indexOf('1') == 0) {
            lstcount1.push('0')
          }

          if (obj.indexOf('2') == 0) {
            lstcount2.push('0')
          }

          if (obj.indexOf('3') == 0) {
           
            lstcount3.push('0')
          }

          if (obj.lastIndexOf('1') == 1) {
            lstcount1.push('1')
          }

          if (obj.lastIndexOf('2') == 1) {
           lstcount2.push('1')
          }
          if (obj.lastIndexOf('3') == 1) {
            lstcount3.push('1')
          }

        });

        let gameresult3 = lstcount1.filter(x => x == '1').length == 3 ? true : lstcount1.filter(x => x == '0').length == 3 ? true : false;
        if(gameresult3){
          this.messageGame = user + " Win !!! "
        }
        else {
          let gameresult4 = lstcount2.filter(x => x == '1').length == 3 ? true : lstcount2.filter(x => x == '0').length == 3 ? true : false;
          if(gameresult4){
          this.messageGame = user + " Win !!! "
          }
          else{
            let gameresult5 = lstcount3.filter(x => x == '1').length == 3 ? true : lstcount3.filter(x => x == '0').length == 3 ? true : false;
            if(gameresult5){
              this.messageGame = user + " Win !!! "

            }
          }
        }
        

      }
    }
  }
}
