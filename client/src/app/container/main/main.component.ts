import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { BreakPointService } from '@shared/services/breakpoint.service'
import { delay, mapTo, Observable, of } from 'rxjs'

export interface MenuItem {
    label: string
    icon: string
    showOnMobile: boolean
    showOnTablet: boolean
    showOnDesktop: boolean
}

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
    username = 'Srini'
    role = 'Admin'
    toggleSidebar: boolean = false

    loadLayout$: Observable<boolean> = of(false)

    menuItems: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'view_module',
            showOnMobile: true,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Students',
            icon: 'person',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Fees',
            icon: 'assessment',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Parents',
            icon: 'wc',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Siblings',
            icon: 'people',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
    ]
    currentScreen: any
    constructor() {}

    ngOnInit(): void {
        this.loadLayout$ = of(true).pipe(delay(650), mapTo(false))
    }
}
