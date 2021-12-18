import { Column, Entity } from 'typeorm'

@Entity('bus_route_details', { schema: 'app_schl_dev' })
export class BusRouteDetails {
    @Column('varchar', {
        name: 'ADMN_NO',
        comment: 'Admission Number',
        length: 50,
    })
    admnNo: string

    @Column('int', { name: 'BUS_RUTE_CD', comment: 'BUS ROUTE' })
    busRuteCd: number

    @Column('varchar', {
        name: 'BUS_RUTE_NO',
        nullable: true,
        comment: 'BUS NUMBER',
        length: 16,
    })
    busRuteNo: string | null

    @Column('varchar', {
        name: 'BUS_RUTE_DRIVER_NAME',
        nullable: true,
        comment: 'DRIVER NAME',
        length: 150,
    })
    busRuteDriverName: string | null

    @Column('int', {
        name: 'BUS_RUTE_DRIVER_NO',
        nullable: true,
        comment: 'DRIVER PHONE NUMBER',
    })
    busRuteDriverNo: number | null

    @Column('varchar', {
        name: 'BUS_RUTE_INCH_NAME',
        nullable: true,
        comment: 'INCHARGER NAME',
        length: 150,
    })
    busRuteInchName: string | null

    @Column('int', {
        name: 'BUS_RUTE_INCH_NO',
        nullable: true,
        comment: 'DRIVER MOBILE NUMBER',
    })
    busRuteInchNo: number | null

    @Column('varchar', {
        name: 'BUS_RUTE_INS_DTL',
        nullable: true,
        comment: 'BUS INSURANE DETAILS',
        length: 150,
    })
    busRuteInsDtl: string | null
}
