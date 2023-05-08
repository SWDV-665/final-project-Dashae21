import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { AlertController } from '@ionic/angular';

//import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
//import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, 
   // public dataService: GroceriesServiceProvider, 
    //public inputDialogService: InputDialogServiceProvider
    ) {}


}
