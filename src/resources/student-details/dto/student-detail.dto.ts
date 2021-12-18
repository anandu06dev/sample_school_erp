import { IsNotEmpty } from 'class-validator'
import { Timestamp } from 'typeorm'

export class StudentDetailDto {
    admissionNo?: number
    @IsNotEmpty()
    adminDate?: Timestamp
    @IsNotEmpty()
    studentFirstName?: string
    @IsNotEmpty()
    studentClass?: string
    @IsNotEmpty()
    studentLastName?: string
    @IsNotEmpty()
    studentFathName?: string
    @IsNotEmpty()
    studentMthrName?: string
    @IsNotEmpty()
    studentGender?: string
    @IsNotEmpty()
    studentDob?: Timestamp
    @IsNotEmpty()
    studentCaste?: string
    @IsNotEmpty()
    studentSubCaste?: string
    @IsNotEmpty()
    studentCmty?: string
    @IsNotEmpty()
    studentRlig?: string
    @IsNotEmpty()
    studentNtly?: string
    @IsNotEmpty()
    studentMthrTnge?: string
    @IsNotEmpty()
    studentLngKnwn?: string
    @IsNotEmpty()
    studentBldGrup?: string
    @IsNotEmpty()
    studentAharNo?: string
    @IsNotEmpty()
    studentEmisNo?: string
    @IsNotEmpty()
    studentPrevSchl?: string
    @IsNotEmpty()
    studentDiscount?: number
}
