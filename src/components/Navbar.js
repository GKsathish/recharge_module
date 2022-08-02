import React from 'react'
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  

const Navbar = () => {
    return (
          <>
            <div className="nav">
              <center>
              <h1>WELCOME  TO RECHARGE PORTAL</h1></center>
            </div>
            
         <Nav>
        <NavMenu>
          <NavLink to="/Mobile_Recharge" activeStyle>
          MobileRecharge
          </NavLink>
          <NavLink to="/Dth_Recharge" activeStyle>
            DTHRecharge
          </NavLink>
          </NavMenu>
          </Nav>
              

            <p>
            VodafoneIdea Mobile Recharge (VI)
Kuberjee Wallet users can make recharges for their VodafoneIdea Prepaid card, using the Kuberjee mobile recharge service. The users will have to enter their VI mobile Number in the field and look for the suitable plan listed plans. Kuberjee will provide information about the available plans for each specific number from the service providers. By choosing the preferred plan, the users will be able to make their payments for the recharge.

Airtel Mobile Recharge
With the Kuberjee mobile wallet, the users can make their mobile recharge for their Airtel Prepaid Card. Using the Kuberjee service, the users can make recharge for their Airtel Prepaid Cards from anywhere and at any time. As the users enter their Airtel number in the field, the Wallet will identify the service provider, in this case, Airtel, and suggest the available plan. The user can select their preferred plan and make their Airtel Prepaid Card Recharged in a moment.

BSNL Mobile Recharge
The users of the BSNL Prepaid recharge online Service can make their BSNL Card Recharged with the help of Kuberjee mobile Recharge Service. The users shall enter their mobile number in the section and the Kuberjee Wallet will present the available plans for the particular number. The users simply have to select a suitable plan for themselves and make the payment. This mobile recharge service process on the Kuberjee wallet is simple and easy.

Jio Mobile Recharge
The Jio prepaid card users can make recharges for their Jio numbers on Kuberjee. The users need to enter their Jio number in the field, and the wallet will make sure the number is entered properly by displaying the operator's information. The users are then required to select the plan of their choice and make their payment.

Recharging mobile with the Kuberjee mobile wallet is easy and simple. It is a secured and trustable digital payment platform. 
            </p>
          </>
        )
      }
        
      export default Navbar;
       

  
 

 

