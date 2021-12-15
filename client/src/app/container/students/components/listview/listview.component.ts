import { Component, Input, OnInit } from '@angular/core'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { listAnimation } from '@utils/animations'
import { BottomsheetsComponent, IShowTableOnBottomSheet } from '../bottomsheets/bottomsheets.component'


@Component({
    selector: 'app-list-view',
    templateUrl: './listview.component.html',
    styleUrls: ['./listview.component.scss'],
    animations: [listAnimation],
})
export class ListviewComponent implements OnInit {
    _studentLists: any = []

    

    @Input() trackScreenView: any = ''

    @Input() set studentListsData(value: any) {
        console.log(value)
        this._studentLists = [...value]
    }
    @Input() studentLists = [
        {
            from: 'Entity 1',
            subject: 'Message Subject 1',
            content: 'Message Content 1',
        },
        {
            from: 'Entity 2',
            subject: 'Message Subject 2',
            content: 'Message Content 2',
        },
    ]

    constructor(private bottomSheet: MatBottomSheet) {}

    ngOnInit(): void {}

    openBottomSheet(student:any) {
      let forBottomSheet:IShowTableOnBottomSheet;
   
  
      let sheetRef =  this.bottomSheet.open(BottomsheetsComponent, {
        data: {
          viewType:'list',
          renderData:{...student},
          data:{...student},
          label:'Student lists'
        }
      });
      sheetRef.afterDismissed().subscribe( data => {
        console.log('after close data :', data);
        if(data && data.message=='Cancel') {
          alert('Cancel was clicked in bottomsheet');
        } if(data && data.message=='Status') {
          alert('Change Status was clicked in bottomsheet');
        }
      });
    }

  
}
export interface Section {
  name: string;
  updated: Date;
  message: string;
}
export interface Food {
  value: string;
  viewValue: string;
}
