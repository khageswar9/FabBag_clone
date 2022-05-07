import React from 'react'
import "./ceckout.css"
function Checkoutpage() {
  return (<>
    <div id="container_c">
        <div id="left_c">
            <div><a href="index.html"><img src="https://cdn.shopify.com/s/files/1/0037/7690/5283/files/logo.svg?v=1585630376" alt="Vedix" itemprop="logo"/></a></div>
            {/* <div><p class="p1_c">Cart ">" <span class="spn_sh">Information</span> > Shipping > Payment</p></div> */}
            <div><p class="p_c">Contact information</p></div>
            <div class="flex2_c">
            
                <span class="contact_c"><i class="far fa-user-circle"></i></span>
                <p class="p3_c"></p>
                <p  class="p4_c"></p>
            </div>
            <div><p class="p_c">Shipping address</p></div>
            <form>
                    {/* <input  class="input_c" type="text" placeholder="Country/region">  */}
                    <select class="select1_c">
                        <p>Country/region</p>
                        <option value="" >India</option>
                    </select>
                    <br/>
                        <input class="input1_c"type="text" placeholder="First name"/> 
                        <input class="input1_c" type="text" placeholder="Last name"/>  <br></br>
                        <input class="input_c" id="addres_c" type="text" placeholder="Address"/>  <br></br>
                        <input class="input_c" type="text" placeholder="Apartment, suite, etc (optional)"/>  <br></br>
                        <input class="input2_c" type="text" placeholder="City"/>
                        {/* <!-- <input class="input2_c" type="text" placeholder="State">  --> */}
                        <select class="select_c">
                            <option value=" ">State</option>
                            <option value="">Andaman and Nicobar Islands</option>
                            <option value="">Andhra Pradesh</option>
                            <option value="">Arunachal Pradesh</option>
                            <option value="">Assam</option>
                            <option value="">Bihar</option>
                            <option value="">Chandighar</option>
                            <option value="">Chhattisghah</option>
                            <option value="">Dadra and Nagar Haveli</option>
                            <option value="">Daman and Diu</option>
                            <option value=""> Delhi</option>
                            <option value="">Goa</option>
                            <option value="">Gujarat</option>
                            <option value="">Haryana</option>
                            <option value="">himachal Pardesh</option>
                            <option value="">Jammu and Kishmir</option>
                            <option value="">Jharkhand</option>
                            <option value="">Karnataka</option>
                            <option value="">Kerala</option>
                            <option value="">Ladakh</option>
                            <option value="">Lakshadweep</option>
                            <option value="">Madhya Pradesh</option>
                            <option value="">Manipur</option>
                            <option value="">Meghalaya</option>
                            <option value="">Mizoram</option>
                            <option value="">Nagaland</option>
                            <option value="">Odisha</option>
                            <option value="">Pondicherry</option>
                            <option value="">Punjab</option>
                            <option value="">Rajasthan</option>
                            <option value="">Sikkim	</option>
                            <option value="">Tamil Nadu</option>
                            <option value="">Telangana</option>
                            <option value="">Tripura</option>
                            <option value="">Uttar Pradesh</option>
                            <option value="">Uttarakhand</option>
                            <option value="">West Bengal</option>
                        </select>
                        <input class="input2_c" type="text" placeholder="PIN code"/> <br> </br>
                        <input class="input4_c" id="phone_c" type="text" placeholder="Phone"/>  <br></br>
            </form>
             <div id="container2_c">
                <div class="return_c" onclick="window.location.href='cart.html'">Return to Cart</div>
                <div><button class="button_c" onclick=" shping()">Continue to shipping</button></div>
             </div>
        
        </div>
            
        <div id="right_c">
            <div style="display: flex; justify-content: space-between;">
                <input class="input3_c" type="text" placeholder="Discount code"/> 
                <button onclick="applyCoupon()" class="apply_c">Apply</button>
            </div>


                
                <div class="subtotal_c">
                    <div>Subtotal</div>
                    <div id="total">0</div></div>

                <div id="shiping_c">
                    <div>Shipping</div>
                    <div>Free</div>
                </div>

                <div id="totl_inr_c" >
                    <div class="total_c">Total</div>
                    <div id="total1"></div>
                </div>
        </div>

    </div>
    </>
  )
}

export default Checkoutpage;