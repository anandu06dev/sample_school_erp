import { Column, Entity } from 'typeorm'

@Entity('address_details', { schema: 'app_schl_dev' })
export class AddressDetails {
    @Column('varchar', {
        name: 'PRNT_ADRS_CD',
        comment: ' Admission Number',
        length: 50,
    })
    prntAdrsCd: string

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD1',
        nullable: true,
        comment: ' PARENT ADDRESS 1',
        length: 100,
    })
    prntAdrsAdd1: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD2',
        nullable: true,
        comment: ' PARENT ADDRESS 2',
        length: 100,
    })
    prntAdrsAdd2: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD3',
        nullable: true,
        comment: ' PARENT ADDRESS 3',
        length: 100,
    })
    prntAdrsAdd3: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD4',
        nullable: true,
        comment: ' PARENT ADDRESS 4',
        length: 100,
    })
    prntAdrsAdd4: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_ADD5',
        nullable: true,
        comment: ' PARENT ADDRESS 5',
        length: 100,
    })
    prntAdrsAdd5: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_DIST',
        nullable: true,
        comment: 'PARENT ADDRESS DISTRICT',
        length: 100,
    })
    prntAdrsDist: string | null

    @Column('varchar', {
        name: 'PRNT_ADRS_PSTL_CD',
        nullable: true,
        comment: 'PARENT ADDRESS POSTEL CODE',
        length: 100,
    })
    prntAdrsPstlCd: string | null

    @Column('varchar', { primary: true, name: 'ADMN_NO', length: 50 })
    admnNo: string
}
