import {
    AfterViewInit,
    Component,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav'
import { delay } from 'rxjs/operators'

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav

    @Input() set togglesidebar(value: boolean) {
     if(this.sidenav){

         if(value === true){
             this.sidenav.open
         }
         if(value === false){
             this.sidenav.close
         }
     }
       
    }

    constructor(private observer: BreakpointObserver) {}

    ngOnInit(): void {
        console.log()
    }

    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(delay(1))
            .subscribe((res) => {
                if (res.matches) {
                    this.sidenav.mode = 'over'
                    this.sidenav.close()
                } else {
                    this.sidenav.mode = 'side'
                    this.sidenav.open()
                }
            })
    }
}
