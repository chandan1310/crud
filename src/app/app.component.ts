import { Component ,OnInit} from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, setDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
// import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Button, TextField } from '@material-ui/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent  {

}