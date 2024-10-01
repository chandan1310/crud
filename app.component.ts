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

  
  title = 'crud';
  userData !: Observable<any>
  //for input data get 
  name: any;
  email: any;
  number: any;
  update_Id: any;

  constructor(private firestore: Firestore) {
    this.getData();
  }
  addData(f: any) {
    console.log(f.value)
    if (this.update_Id) {
      const docInstance = doc(this.firestore, 'users', this.update_Id)
      
      updateDoc(docInstance, f.value)
      this.getData()
      this.update_Id=''


    }
    else {
      const id = Math.random().toString(36).substring(2, 10 + 2);
      f.value['id'] = id
      let taskRef: any = doc(this.firestore, 'users', f.value["id"]); //add
      setDoc(taskRef, f.value)
        .then(() => {
          console.log('Data saved Successfully')
        })
        .catch((err) => {
          console.log(err)
        })
        
      // clear the input fields
      this.name = '';
      this.email = '';
      this.number = '';
    }
    f.reset();
  }


  getData() {
    // this.userData=[]
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance, { idField: 'id' })
      .subscribe(val => {
        console.log(val);
      })

    this.userData = collectionData(collectionInstance, { idField: 'id' });
    console.log(this.userData)
  }

  updateData(data: any, event: any = null) {
    if(confirm('Are you sure you want to Edit...')){

    
    this.update_Id = data.id

    this.name = data.name;
    this.email = data.email;
    this.number = data.number;
    }
    console.log(event)
    // console.log(id)
    const docInstance = doc(this.firestore, 'users', data.id);
    const updateData = {
      // name: 'update '

    }
    this.getData()
    // updateDoc(docInstance, updateData)
    // .then(()=>{
    //   console.log('data uodated')
    // })
    // .catch((err)=>{
    //   console.log(err)
    // })
    // this.deleteData(data.id);
  }
  deleteData(id: any) {
    
    if(confirm('Are you sure you want to Delete...')){
      const docInstance = doc(this.firestore,'users',id);
      deleteDoc(docInstance)
    }

  }
  
  registrationForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    confirmPassword: new FormControl('', [Validators.required])
  });
  onSubmit() {
    console.log(this.registrationForm.value);
  }
  
  signInWithGoogle(){
    
  }
}
