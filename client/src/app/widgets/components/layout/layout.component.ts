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
import {
    debounceTime,
    delay,
    distinctUntilChanged,
    map,
    takeUntil,
    tap,
} from 'rxjs/operators'
import { BehaviorSubject, Observable, Subject } from 'rxjs'
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service'
import { MainComponent } from 'src/app/container/main/main.component'
import { MatIcon } from '@angular/material/icon'
import { BreakPointService } from '@shared/services/breakpoint.service'

@Component({
    selector: 'app-root-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
})
export class RootLayoutComponent implements AfterViewInit {
    @ViewChild(MatSidenav)
    sidenav!: MatSidenav
    private sideBarEventListener: BehaviorSubject<boolean> =
        new BehaviorSubject<boolean>(true)

    private smallscreen: boolean = false
    currentScreen: Observable<any>

    constructor(
        private observer: BreakpointObserver,
        private destroy$: AutoUnsubscribe,
        public breakpointService: BreakPointService
    ) {
        this.currentScreen = breakpointService.currentScreen
    }

    ngOnInit(): void {}

    ngAfterViewInit() {
        this.observer
            .observe(['(max-width: 800px)'])
            .pipe(delay(1), takeUntil(this.destroy$))
            .subscribe((res) => {
                if (res.matches) {
                    this.sidenav.mode = 'over'
                    this.smallscreen = true
                    this.sidenav.close()
                } else {
                    this.sidenav.mode = 'side'
                    this.smallscreen = false

                    this.sidenav.open()
                    // this.sideBarEventListener.next(true)
                }
            })

        this.sideBarEventListener
            .pipe(
                takeUntil(this.destroy$),
                debounceTime(10),
                tap((d) => console.log(d))
            )
            .subscribe((data: boolean) => {
                if (data) this.sidenav.open()
                if (!data) this.sidenav.close()
            })
    }

    toggle() {
        this.sideBarEventListener.next(!this.sidenav.opened)
    }
}
