import { Component, OnInit, VERSION } from '@angular/core'
import { HttpClient, HttpResponse, HttpEventType} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

    selectForm!: FormGroup;
    submitted = false;
    event:any;

    constructor(private formBuilder: FormBuilder,private http: HttpClient,) { }

    ngOnInit() {
        this.selectForm = this.formBuilder.group({
            role: ['', Validators.required],
            department: ['', Validators.required],
            frequency: ['', Validators.required],
            gracePeriod: ['', Validators.required],
            requirementType: ['', Validators.required],
            referenceApplicationTo: ['', Validators.required],
            riskType: ['', Validators.required],
            actionTaken: ['', Validators.required],
            supervisor: ['', Validators.required],
            file: ['', Validators.required],
            fileSource: ['', Validators.required],
        }, {
             
        });
    }

    onFileChange(event:any) {
  
        if (event.target.files.length > 0) {
          const file = event.target.files[0];
          this.selectForm.patchValue({
            fileSource: file
          });
        }
      }

    // convenience getter for easy access to form fields
    get f() { return this.selectForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.selectForm.invalid) {
            return;
        }

        // display form values on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.selectForm.value, null, 4));
    }

     

}
