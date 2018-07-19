import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';  //used to hold data
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [
    trigger('listStagger', [
      // * <=> * :: from any state going back and forth to any state
      // only defines to elements being added (where they are going from and to)
      transition('* <=> *', [
        query(':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)'}),
            stagger('50ms',
            animate('550ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)'})))
          ], { optional: true }),
          query(':leave', animate('50ms', style({ opacity: 0})), {
            optional: true
          })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users$: Object;
  
  constructor(private data: DataService) { }

  //lifecycle method, will be executed when component loads
  ngOnInit() {
    //runs method we defined and subscribes to observable
    this.data.getUsers().subscribe(
      data => this.users$ = data
    )
  }

}
