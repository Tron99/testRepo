import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insurance-app';
  pageData = [
    {
      personalInsure:"Standard Insure",
      status:"active",
      policyNo:"I360908/19",
      startDate:"01/01/2020",
      renewalDate:"01/01/2021",
      monthlyPremium:"R 1 664.50 /mo",
      policyDetails:"2 Vehicles, 1 Building, Household Contents and 12 Personal Items are insured with the basic cover you need, at the best prices.",
      pausedItems:[]
    },
    {
      personalInsure:"Wonder Woman",
      status:"paused",
      policyNo:"I360908/19",
      startDate:"01/01/2020",
      renewalDate:"01/01/2021",
      monthlyPremium:"R 900.25 /mo",
      policyDetails:"2 Vehicles, 1 Building, Household Contents and 12 Personal Items are insured with the basic cover you need, at the best prices.",
      pausedItems:["Snorkelling Equipment","Photography Gear","Booking Cancellation","Flight Cancellation ","Photography Gear","Booking Cancellation"]
    },
    {
      personalInsure:"High Net Worth",
      status:"cancelled",
      policyNo:"I360908/19",
      startDate:"01/01/2020",
      renewalDate:"01/01/2021",
      monthlyPremium:"R 462.35 /mo",
      policyDetails:"2 Vehicles, 1 Building, Household Contents and 12 Personal Items are insured with the basic cover you need, at the best prices.",
      pausedItems:[]
    }
  ]

  slideData = [
    {
      label:"Special Offer",
      sub:"Power Surge - Extended (Contents)",
      details:"Cover that gives you access to a lawyer to provide legal assistance.",
      savePerc:"Save 10%",
      saveSubject:"Bundled offer"
    },
    {
      label:"Recommended for you",
      sub:"Telematics Tracking Device",
      details:"Installing this device will enable you to earn rewards and cashback for good driving and lower your premium if you are under 25",
      savePerc:"",
      saveSubject:"You insured a vehicle"
    },
    {
      label:"Special Offer",
      sub:"Power Surge - Extended (Contents)",
      details:"Cover that gives you access to a lawyer to provide legal assistance.",
      savePerc:"Save 10%",
      saveSubject:"Bundled offer"
    }
  ]
}
