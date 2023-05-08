import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { ParsedUrlQuery } from 'querystring';
import { AlertController } from '@ionic/angular';

import { GroceriesServiceProvider } from '../../providers/groceries-service/groceries-service';
import { InputDialogServiceProvider } from '../../providers/input-dialog-service/input-dialog-service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title= "Artists";

  items = [
    {
      name: "Lil Trino",  
    },
    {
      name: "Aerie Sosa"
    },
    {
      name: "JayJayvon"   
    },
    {
      name: "Dee Macho"   
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController, 
    //public dataService: GroceriesServiceProvider, 
    //public inputDialogService: InputDialogServiceProvider
    ) {}

    //loadItems() {
    //  return this.dataService.getItems();
    //}
  
    //removeItem(item, index) {
      //console.log("Removing Item - ", item, index);
      //const toast = this.toastCtrl.create({
      //  message: 'Removing Item - ' + index + " ...",
      //  duration: 3000
      //});
      //toast.present();
      //this.dataService.removeItem(index);   }
  
    editItem(items, index) {
      console.log("Edit Item - ", item, index);
      const toast = this.toastCtrl.create({
        message: 'Editing Item - ' + index + " ...",
        duration: 3000
      });
      toast.present();
      //this.inputDialogService.showPrompt(item, index);
    }  
  
    addItem() {
      console.log("Adding Item");
      //this.inputDialogService.showPrompt();
    }

    removeItem(item, index) {
      console.log("Removing Item - ", item, index);
      const toast = this.toastCtrl.create({
        message: 'Removing Item - ' + index + " ...",
        duration: 3000
      });
      toast.present();
  
      this.items.splice(index, 1);
    }
  
  
    showAddItemPrompt() {
      const prompt = this.alertCtrl.create({
        //title: 'Add Item',
        message: "Please enter item...",
        inputs: [
          {
            name: 'name',
            placeholder: 'Name'
          },
          {
            name: 'quantity',
            placeholder: 'Quantity'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: item => {
              console.log('Saved clicked', item);
              this.items.push(item);
            }
          }
        ]
      });
      prompt.present();
    }
}
