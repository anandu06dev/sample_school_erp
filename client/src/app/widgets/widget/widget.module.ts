import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SidenavComponent } from '@widgets/components/sidenav/sidenav.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { FlexLayoutModule } from '@angular/flex-layout'
const DECLARATIONS = [SidenavComponent]
const MODS = [MatSidenavModule, MatToolbarModule]

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [CommonModule, ...MODS],
    exports: [...DECLARATIONS],
})
export class WidgetModule {}
