import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { BreakPointService } from '@shared/services/breakpoint.service'
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface'
import { Observable, of, Subject, takeUntil } from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    username = 'Srini'
    role = 'Admin'
    toggleSidebar: boolean = false

    loadLayout$: Observable<boolean> = of(false)

    menuItems: IToolBarMenu[] = [
        {
            label: 'Dashboard',
            icon: 'view_module',
            showOnMobile: true,
            showOnTablet: false,
            showOnDesktop: false,
            url:'/dashboard'
        },
        {
            label: 'Students',
            icon: 'person',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
            url:'/students'

        },
        {
            label: 'Fees',
            icon: 'assessment',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
            url:'/fees'

        },
        {
            label: 'Parents',
            icon: 'wc',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
            url:'/parents'

        },
        {
            label: 'Siblings',
            icon: 'people',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
            url:'/siblings'

        },
    ]
    destroyed = new Subject<void>()

    // Create a map to display breakpoint names for demonstration purposes.
    displayNameMap = new Map([
        [Breakpoints.XSmall, 'XSmall'],
        [Breakpoints.Small, 'Small'],
        [Breakpoints.Medium, 'Medium'],
        [Breakpoints.Large, 'Large'],
        [Breakpoints.XLarge, 'XLarge'],
    ])

    title = 'client'

    constructor(
        private breakpointObserver: BreakpointObserver,
        private breakPointService: BreakPointService
    ) {
        this.loadLayout$ = of(true)

        breakpointObserver
            .observe([
                Breakpoints.XSmall,
                Breakpoints.Small,
                Breakpoints.Medium,
                Breakpoints.Large,
                Breakpoints.XLarge,
            ])
            .pipe(takeUntil(this.destroyed))
            .subscribe((result) => {
                for (const query of Object.keys(result.breakpoints)) {
                    if (result.breakpoints[query]) {
                        let currentScreenSize =
                            this.displayNameMap.get(query) ?? 'Unknown'
                        breakPointService.currentScreen = currentScreenSize
                        console.log(currentScreenSize)
                    }
                }
            })
    }
    ngOnDestroy() {
        this.destroyed.next()
        this.destroyed.complete()
    }
    ngOnInit(): void {
        setTimeout(() => {
            this.loadLayout$ = of(false)
        },0.5 * 1000)
    }
}
