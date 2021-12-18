import { Column, Entity } from 'typeorm'

@Entity('parent_details', { schema: 'app_schl_dev' })
export class ParentDetails {
    @Column('varchar', {
        name: 'ADMN_NO',
        comment: 'Admission Number',
        length: 50,
    })
    admnNo: string

    @Column('int', { name: 'PRNT_CD', comment: 'PARENT CODE' })
    prntCd: number

    @Column('varchar', {
        name: 'PRNT_EDUC',
        nullable: true,
        comment: 'PARENT EDUCATION',
        length: 100,
    })
    prntEduc: string | null

    @Column('varchar', {
        name: 'PRNT_OCCU',
        nullable: true,
        comment: 'PARENT OCCUPATION',
        length: 100,
    })
    prntOccu: string | null

    @Column('int', {
        name: 'PRNT_AADH_NO',
        nullable: true,
        comment: 'AADHAR CARD NUMBER( XXXX -XXXX-XXXX)',
    })
    prntAadhNo: number | null

    @Column('int', {
        name: 'PRNT_PHNE_NO',
        nullable: true,
        comment: 'PHONE NUMBER ( 12345 -12345)',
    })
    prntPhneNo: number | null

    @Column('varchar', {
        name: 'PRNT_EMAIL_ID',
        nullable: true,
        comment: 'PARENT ADDRESS 5',
        length: 150,
    })
    prntEmailId: string | null
}
