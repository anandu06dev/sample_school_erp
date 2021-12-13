import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout'
import { Component } from '@angular/core'
import { BreakPointService } from '@shared/services/breakpoint.service'
import { Subject, takeUntil } from 'rxjs'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
   


    constructor(private breakpointObserver: BreakpointObserver,private breakPointService:BreakPointService) {
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
                            this.displayNameMap.get(query) ?? 'Unknown';
                            breakPointService.currentScreen = currentScreenSize
                    }
                }
            })
    }
    ngOnDestroy() {
        this.destroyed.next()
        this.destroyed.complete()
    }
}
