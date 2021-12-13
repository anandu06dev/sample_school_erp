import { Component, EventEmitter, OnInit, Output } from '@angular/core'

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
    toggleSidebar:boolean = false;

    menuItems: MenuItem[] = [
        {
            label: 'Sign Up',
            icon: 'login',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'About',
            icon: 'help',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Pricing',
            icon: 'attach_money',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Docs',
            icon: 'notes',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Showcase',
            icon: 'slideshow',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
        {
            label: 'Blog',
            icon: 'rss_feed',
            showOnMobile: false,
            showOnTablet: false,
            showOnDesktop: false,
        },
    ]
    constructor() {}

    ngOnInit(): void {
        console.log()
    }

   
}
