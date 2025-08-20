import { ETransmision } from "../enums/enums"
import { ETraction } from "../enums/enums"
import { ESteering } from "../enums/enums"
import { EFuelType } from "../enums/enums"

export interface CreateVehicleDto {
    IDVehicle: number,
    Brand: string,
    Model: string,
    Version: string,
    Year: number,
    Plate: string,
    Renavam: string,
    Chassi: string,
    Engine: number,
    Mileage: number,
    Transmission: ETransmision,
    HorsePower: number,
    Traction: ETraction,
    Steering: ESteering,
    Doors: number,
    FuelType: EFuelType,
    Category: number,
    Color: string,
    Radio: string,
    Description: string,
    Alarm: string,
    Capacity:number,
    CruiseControl: number,
    AirConditioning: number,
    OnBoardComputer:number,
    PowerWindows: number,
    RadioRemoteControl: number,
    CupHolders: number,
    HeighAdjustment: number,
    ReverseCamera: number,
    Airbags: number,
    Images: string[]
    IsActive: number,
}