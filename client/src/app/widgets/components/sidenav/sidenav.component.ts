import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild,
    HostListener,
    Input,
    OnInit,
    ViewChild,
} from '@angular/core'
import { BreakpointObserver } from '@angular/cdk/layout'
import { MatSidenav } from '@angular/material/sidenav'
import { debounceTime, delay, takeUntil } from 'rxjs/operators'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service'
import { MainComponent } from 'src/app/container/main/main.component'
import { MatIcon } from '@angular/material/icon'

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements AfterViewInit {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav

    

    @HostListener('click', ['$event.target'])
    onClick(target:HTMLElement) {
        if(target.innerHTML === 'menu_icon'){
            console.log(this.sideBarEventListener.getValue())
            this.sideBarEventListener.next(!this.sideBarEventListener.getValue())
        }
      
    }
  

    private sideBarEventListener: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

    constructor(
        private observer: BreakpointObserver,
        private destroy$: AutoUnsubscribe
    ) {}
   

    ngOnInit(): void {}



    ngAfterViewInit() {
       

        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(delay(1), takeUntil(this.destroy$))
            .subscribe((res) => {
                if (res.matches) {
                    this.sidenav.mode = 'over'
                    // this.sidenav.close()
                   
                } else {
                    this.sidenav.mode = 'side'
                    // this.sidenav.open()
                    // this.sideBarEventListener.next(true)

                }
            })

            this.sideBarEventListener
            .pipe(takeUntil(this.destroy$),debounceTime(50))
            .subscribe((data: boolean) => {
                if (data) this.sidenav.open()
                if (!data) this.sidenav.close()
            })
           
    }
}
