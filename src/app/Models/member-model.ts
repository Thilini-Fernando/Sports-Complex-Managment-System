export class MemberModel {
    id:number;
    memberId:number;
    firstName:string;
    lastName:string;
    address:string;
    dateOfBirth:Date;
    nic:string;
    genderId:number;
    joinedDate:Date;
    mobileNumber:number;
    landPhoneNumber:number;
    // sportId:number;
    sportsIdList:any[];
    measurement:Mesurements[];
    registrationFee:RegistrationFees[];
    gender?:string;
}

export class SportId{
    sportsId:number
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

export class LognUser{
    userName:string;
    password:string;
    role:string='';
    isSuccess:boolean=false;
}


