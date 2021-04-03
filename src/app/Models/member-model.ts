export class MemberModel {
    id:number;
    firstName:string;
    lastName:string;
    address:string;
    dateOfBirth:Date;
    nic:string;
    genderId:number;
    joinedDate:Date;
    mobileNumber:number;
    landPhoneNumber:number;
    sportId:number;
    //sportsId:any[];
    measurement:Mesurements[];
    registrationFee:RegistrationFees[];
}

export class Mesurements {
    chest:number;
    left_arm:number;
    abdomen:number;
    left_thigh:number;
    left_calf:number;
    wrist:number;
    right_arm:number;
    hips:number;
    right_thigh:number;
    right_calf:number;
}

export class RegistrationFees{
    description:string;
    amount:number;
    status:string;
    date:Date;
}


