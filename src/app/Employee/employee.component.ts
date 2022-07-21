import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/models/Employee'
import { EmployeeService } from '../../core/services/EmployeeService';
import { error } from '@angular/compiler/src/util';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  // Lab 14: Services - getEmployees()
  employees: Employee[] = [];
  constructor(private _employeeService: EmployeeService) { 
    
  }

  ngOnInit(): void {
    

    // Lab 15: HTTP Service - RxJs

    
  }

  // Lab 4: Interpolation - Person data
    public name = "Vishrut";
    public gender = "Male";
    dob:string=new Date ('1997/10/19').toLocaleDateString();
    // public DOB:Date = new Date ('1999/01/22');
    public area = "Kolkata"; 
  // Lab 7: StyleBinding - isAvailable

  public isAvailable = true;

  // Lab 5: Property Binding - ImgSrc
  public ImgSrc:String = '../../assets/images/female.png'
  public ImgSrcMale:String = '../../assets/images/male.png'
  // Lab 6: Class Binding - KeyStyle

  

  // Lab 9: Two-way Binding - searchText
  public message = "";
  // Lab 8: Event Binding - box-shadow

  




  // Lab 10: *ngFor - data array

  list = ['Male','19/02/1999','Whitefield'];

  


  // Lab 13: Input Property - Get counts


}
