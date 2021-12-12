import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MainRoutingModule } from './main-routing.module'
import { MainComponent } from './main.component'
import { WidgetModule } from '@widgets/widget/widget.module'
import { SharedModule } from '@shared/shared.module'

const MODS = [WidgetModule, SharedModule]

@NgModule({
    declarations: [MainComponent],
    imports: [CommonModule, MainRoutingModule, ...MODS],
})
export class MainModule {}
