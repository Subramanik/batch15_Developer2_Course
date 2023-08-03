import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import TYPE_FIELD from '@salesforce/schema/Account.Type';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUALREVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import ACC_NUM_FIELD from '@salesforce/schema/Account.AccountNumber';
import PHONE_FIELD from '@salesforce/schema/Account.Phone';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';


export default class RecordFormAccount extends LightningElement {

    objectApiName= ACCOUNT_OBJECT;
    recordId= "0012t00000TltR9AAJ";
    fields= [NAME_FIELD, TYPE_FIELD, INDUSTRY_FIELD, ANNUALREVENUE_FIELD,ACC_NUM_FIELD, PHONE_FIELD ];

    successHandler() {
        const event = new ShowToastEvent({
            title: 'Success',
            message:'Account Details are saved successfully',
            variant: 'success'
        });
        this.dispatchEvent(event);
    }
}