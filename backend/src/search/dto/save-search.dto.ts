import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator";
export class SaveSearchDto {
    @IsString()
    @IsNotEmpty()
    readonly keywords: string;

    @IsNumber()
    @IsNotEmpty()
    readonly location: string;
    
    @IsNumber()
    @IsNotEmpty()
    readonly searchId: string;
   
    @IsNumber()
    @IsNotEmpty()
    readonly frequency: string;

    @IsDate()
    @IsNotEmpty()
    readonly dateTime: Date;
}