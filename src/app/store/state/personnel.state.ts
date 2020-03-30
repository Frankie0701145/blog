import {IPersonnel} from '../../models/personnel.interface';

export interface IPersonnelState {
    personnel: IPersonnel
}

export const initialPersonnel: IPersonnelState = {
    personnel: null
}