import { Injectable, OnInit } from '@angular/core';
import *  as  data  from  './database.json';

export class Product {
  id: string;
  text: string;
  expanded?: boolean;
  items?: Product[];
  price?: number;
  image?: string;
  
}
var products: any[] = [{
    "text": "HOME",
    "expanded": true,
    "items": [{
        "text": "Ubuntu",
        "items": [{
            "text": "mount",
            "items": [{
                "text": "dpOutput",
                "items": [{
                    "text": "FF00359789",
                    "items": [{
                        "text": "1",
                        "items": [{
                            "text": "IncTax",
                            "items": [{
                                "text": "001",
                                "items": [{
                                    "text":"Screenshots",
                                    "items": [{
                                        "text": "screenshot2020"
                                },
                                {
                                    "text": "scrennshot2019"
                                },
                                {
                                    "text": "screenshot2018"
                                        
                                }],
                            },{
                                "text":"others", 
                                "items": [{}],
                            },
                            { 
                                "text":"forms", 
                                "items": [{}],
                            },
                            { 
                                "text":"viewforms", 
                                "items": [{}],
                             }]
                            }]
                         }]
                    }]
                 }]
            }]
        }]
    }]
}];
            


         
@Injectable({
  providedIn: 'root'
})
export class ReadingJsonFilesComponent implements OnInit {

    constructor() {
    }
    ngOnInit() {}

}
export class Service {
  getProducts(): Product[] {
    return products;
}  
}
