import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'

import { ApiProperty } from '@nestjs/swagger'
import { Gender, StudentCommunity } from '@shared/enum'

@Entity()
export class Student {
    @ApiProperty({
        example: 1,
        type: 'number',
        description: 'Admission Id is auto incremented',
    })
    @PrimaryGeneratedColumn()
    admissionnId: number

    @ApiProperty({
        example: '20-12-2021',
        type: 'date',
        description: 'Describes about admission date',
    })
    @Column({
        type: 'date',
        nullable: false,
    })
    admissionDate: Date

    @ApiProperty({
        example: 'Ram',
        type: 'string',
        description: 'Describes about student first name',
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentFirstName: string

    @ApiProperty({
        example: 'Ram',
        type: 'string',
        description: 'Describes about student last name',
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentLastName: string

    @ApiProperty({
        example: 'Class',
        type: 'string',
        description: 'Describes about student current class',
    })
    @Column({
        type: 'char',
        length: 5,
        nullable: false,
    })
    studentClass: string

    @ApiProperty({
        example: 'Ranga',
        type: 'string',
        description: "Describes about student's father name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentFatherName: string

    @ApiProperty({
        example: 'Devi',
        type: 'string',
        description: "Describes about student's mother name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentMotherName: string

    @ApiProperty({
        enum: Gender,
        enumName: 'Gender',
        example: 'Male',
        type: 'string',
        description:
            'Describe about student gender type such as male or female',
    })
    @Column({
        type: 'enum',
        enum: Gender,
    })
    role: Gender

    @ApiProperty({
        example: '20-12-2021',
        type: 'date',
        description: 'Describes about student date of birth',
    })
    @Column({
        type: 'date',
        nullable: false,
    })
    studentDOB: Date

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's caste name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentCaste: string

    @ApiProperty({
        example: 'XXX',
        description: "Describes about student's sub caste name",
        enum: StudentCommunity,
        type: 'string',
        enumName: 'StudentCommunity',
    })
    @Column({
        type: 'enum',
        enum: Gender,
    })
    studentCommunity: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's religion name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentReligion: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's nationality name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentNationality: string

    @ApiProperty({
        type: 'string',
        example: 'XXX',
        description: "Describes about student's mother tongue name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentMotherTongue: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's mother tongue name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentLanguageKnown: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's blood group name",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentBloodGroup: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's adhaar number",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentAadharNumber: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's EMI's  number",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentEMINumber: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's previous school",
    })
    @Column({
        type: 'varchar',
        length: 100,
        nullable: false,
    })
    studentPreviousSchool: string

    @ApiProperty({
        example: 'XXX',
        type: 'string',
        description: "Describes about student's discount percentage",
    })
    @Column({
        type: 'number',
        length: 2,
        nullable: false,
    })
    studentDiscount: string

    @CreateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
    })
    createdAt: Date

    @UpdateDateColumn({
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)',
    })
    updatedAt: Date
}
