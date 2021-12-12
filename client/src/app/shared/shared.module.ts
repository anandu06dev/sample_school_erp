import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu'
const SHARED_MODS = [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatMenuModule,
]

@NgModule({
    declarations: [],
    imports: [CommonModule, ...SHARED_MODS],
    exports: [SHARED_MODS],
})
export class SharedModule {}
